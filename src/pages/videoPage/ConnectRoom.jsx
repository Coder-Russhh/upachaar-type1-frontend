import React, { useState, useCallback, useEffect } from "react";
import { useSocket } from "../../context/SocketProvider";
import peer from "../../services/peer";
import ReactPlayer from "react-player";

const ConnectRoom = () => {
  const socket = useSocket();
  const [remoteSocketId, setremoteSocketId] = useState(null);
  const [myStream, setmyStream] = useState(null);
  const [remoteStream, setremoteStream] = useState(null);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setremoteSocketId(id);
  }, []);

  const handleIncomingCall = useCallback(
    async ({ from, offer }) => {
      setremoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setmyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    // all audio and videotracks--
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  //   for handling negotation
  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  //   negiciation is used for reconnecting
  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  useEffect(() => {
    peer.peer.addEventListener("track", async (e) => {
      const remoteStream = e.streams;
      console.log("GOT TRACKS!!");
      setremoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    // registration
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncomingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);
    //   deregister--
    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncomingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncomingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  //   call button click program--
  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setmyStream(stream);
  }, [remoteSocketId, socket]);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Room or Lobby</h1>
        <h4 className="mb-4">
          {remoteSocketId ? "Connected" : "No one in room"}
        </h4>
        {myStream && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={sendStreams}
          >
            Send Stream
          </button>
        )}
        {remoteSocketId && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleCallUser}
          >
            CALL
          </button>
        )}
        {myStream && (
          <div className="mb-4">
            <h1 className="text-xl font-bold mb-2">My Stream</h1>
            <ReactPlayer
              playing
              muted
              height="100px"
              width="200px"
              url={myStream}
            />
          </div>
        )}
        {remoteStream && (
          <div>
            <h1 className="text-xl font-bold mb-2">Remote Stream</h1>
            <ReactPlayer
              playing
              muted
              height="100px"
              width="200px"
              url={remoteStream}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ConnectRoom;

//socket.js

import io from "socket.io-client";

const socket = io("http://localhost:4500");

export default socket;

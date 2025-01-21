import { useState } from "react";
import io from "socket.io-client";

import { StreamKey, StreamKeyMap } from "@shared/chat.types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const socket = io(`${BASE_URL}`);

export default function useChat() {
  const [chatIsActive, setChatIsActive] = useState<boolean>(false);

  // Flytta den generiska typen K till startChat-funktionen
  function startChat<K extends StreamKey>(channel: K, message: StreamKeyMap[K]["message"]) {
    if (!socket) return;
    console.log(`🔍 Starting stream on channel: ${channel}`);

    socket.emit(channel, message);
    setChatIsActive(true);

    // Typa callback-funktionen korrekt baserat på K
    socket.on<string>(channel, (data: StreamKeyMap[K]["bajsa"]) => {
      console.log("data: ", data.bajs);
    });
  }

  // Flytta den generiska typen K till stopStream-funktionen
  function stopStream<K extends StreamKey>(channel: K) {
    if (!socket) return;

    console.log(`🛑 Stopping stream on channel: ${channel}`);
    socket.emit("stopStream", { channel });
    socket.off(channel); // Stoppa lyssnaren för kanalen
  }

  return { startChat, stopStream, chatIsActive };
}

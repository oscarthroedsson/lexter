import { useState } from "react";
import io from "socket.io-client";

import { StreamKey, StreamKeyMap } from "@shared/chat.types";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const socket = io(`http://localhost:3000`);

export default function useChat(channel: StreamKey) {
  const [chatIsActive, setChatIsActive] = useState<boolean>(false);
  const [answering, setAnswering] = useState<boolean>(false);
  const [conversation, setConversation] = useState<{ user: boolean; text: string }[]>([]);

  // Flytta den generiska typen K till startChat-funktionen
  function startChat<K extends StreamKey>(message: StreamKeyMap[K]["message"]) {
    if (!socket) return;
    socket.off(channel);
    console.log(`🔍 Starting stream on channel: ${channel}`);
    setConversation((prev) => [...prev, { user: true, text: message }]);
    socket.emit(channel, message);
    setChatIsActive(true);
    setAnswering(true);

    socket.on(channel, (response: string) => {
      console.log("Received data:", response); // Debug-loggning
      setAnswering(false);
      setConversation((prev) => [...prev, { user: false, text: response }]);
    });
  }

  // Flytta den generiska typen K till stopStream-funktionen
  function stopStream<K extends StreamKey>(channel: K) {
    if (!socket) return;

    console.log(`🛑 Stopping stream on channel: ${channel}`);
    socket.emit("stopStream", { channel });
    socket.off(channel); // Stoppa lyssnaren för kanalen
  }

  return { startChat, stopStream, chatIsActive, conversation, answering };
}

import { Socket } from "socket.io";
import { StreamKeyMap, StreamKey } from "@shared/chat.types";
import { chatAI } from "./openAI";

export const chatSocket = (socket: Socket) => {
  console.log(`💬 ChatSocket initilized ${socket.id}`);

  socket.on("/chat", async (message) => {
    try {
      console.log("Received MSG:", message);
      const result = "Processed result";

      const answer = await chatAI(message);
      console.log("answer:", answer);

      socket.emit("/chat", answer);

      await streamDetails();
    } catch (error) {
      console.error("Error in chat handler:", error);
      socket.emit("/chat", "Error processing request");
    }
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
};

const streamDetails = async () => {
  // Processa data här
};

import { Server } from "socket.io";
import http from "http";

export const configureSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // aloud all origins
    },
  });

  io.on("connection", (socket) => {
    console.log(`🧦 New client connected: ${socket.id}`);

    // functions to be run

    // Listen on "startStream"
    socket.on("startStream", ({ streamKey, query }) => {
      console.log(`Stream started: ${streamKey} with query`, query);

      // Skicka data kontinuerligt till klienten
      const interval = setInterval(() => {
        socket.emit("streamData", {
          streamKey,
          data: { id: Math.random(), name: `Data for ${streamKey}` },
        });
      }, 1000);

      // Stoppa streamen när klienten begär det
      socket.on("stopStream", () => {
        console.log(`Stream stopped: ${streamKey}`);
        clearInterval(interval);
      });

      // Hantera klientens disconnect
      socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
        clearInterval(interval);
      });
    });
  });

  return io;
};

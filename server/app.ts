import { config } from "dotenv"; // Loads environment variables from a .env file
config();

// import "module-alias/register"; // Enables module aliasing for cleaner import paths

import bodyParser from "body-parser"; // Middleware to parse incoming request bodies
import cors from "cors"; // Middleware to handle Cross-Origin Resource Sharing (CORS)
import "./config/openAi";
import express from "express"; // Web framework for building the server
import morgan from "morgan"; // Middleware for HTTP request logging
import routes from "@/routes/index"; // Application routes for API endpoints
import { configureSocket } from "@/config/socketio"; // Configures and initializes Socket.IO

// import "module-alias/register";
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(morgan("dev"));

// body parser middleware to handle raw json and urlencoded data up to 1mb

//for our routes / api calls
app.use(routes);

const server = app.listen(port, () => {
  console.log(`🍏 Server is running on port ${port} `);
});
export const io = configureSocket(server);

export default app;

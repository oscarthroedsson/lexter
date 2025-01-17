import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Thanks for usein Mealplaners API, we hope we can satisfy your expectations!");
});

router.use((req, res) => {
  // Respond with 404 and a message in JSON-format
  res.status(404).send({
    message: "No route was found",
  });
});

export default router;

import express from "express";
import { router } from "./routes/routes";
export const app = express();
app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));
app.get("/coffeelover", (req, res) => res.send("I like Coffee!"));
app.use(express.json());
app.use("/", router);
app.get("/tealover", (req, res) => res.send("I like Tea!"));

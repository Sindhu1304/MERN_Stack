// messageRouter.js
import express from "express";
import { sendMessage } from "../controller/messageController.js";

const router = express.Router();

// Add error handling wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("/send", asyncHandler(sendMessage));

export default router;
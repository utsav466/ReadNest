import express from "express";
import { bookController } from "../controller/bookController.js";
import { authenticateToken } from "../middleware/token-middleware.js";

const router = express.Router();

router.get("/", authenticateToken, bookController.getAllBooks);
router.post("/", authenticateToken, bookController.createBook);
router.get("/:id", authenticateToken, bookController.getBookById);
router.put("/:id", authenticateToken, bookController.updateBook);
router.delete("/:id", authenticateToken, bookController.deleteBook);

export { router as bookRouter };

import express from 'express';
import { create, Adhar } from '../controller/UserController.js';

const router = express.Router();

router.post("/user", create);
router.post("/Adhar", Adhar);

export default router;

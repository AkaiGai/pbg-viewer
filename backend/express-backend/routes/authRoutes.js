import express from 'express'
import { signup, login, getProfile} from '../controllers/authControllers.js'
import { verifyToken } from '../Middleware/authMiddleware.js'

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/profile', verifyToken, getProfile);

export default authRouter;
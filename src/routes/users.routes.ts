import {Router} from 'express';
import { getUsuarios } from '../controllers/users.controller';
const router = Router();

router.get('/', getUsuarios);

export default router;
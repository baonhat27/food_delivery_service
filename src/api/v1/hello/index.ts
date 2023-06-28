import { Router } from 'express';
import { getHello } from './controller';

const router = Router();

router.get('/', getHello);

export default router;

import { Router } from 'express';
import { checkHealth } from './controller';

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     description: Check health
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.get('/', checkHealth);

export default router;

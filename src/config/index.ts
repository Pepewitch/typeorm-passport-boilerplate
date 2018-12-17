import dotenv from 'dotenv';
import fs from 'fs';
import { join } from 'path';
/**
 * read local environment from .env file
 */
if (fs.existsSync(join(__dirname, '../../.env'))) {
  dotenv.config();
}

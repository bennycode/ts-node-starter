import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirsname = path.dirname(__filename);

console.log(`Hello from directory: ${__dirname}`);

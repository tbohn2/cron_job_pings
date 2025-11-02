import postgres from 'postgres'
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const URL = process.env.DB_URL;
const URL2 = process.env.DB_URL2;

async function pingDatabase(url) {
    const sql = postgres(url);
    const result = await sql`SELECT 1;`;
    console.log(result);
    await sql.end();
    console.log('Ping successful');
}

(async () => {
    await pingDatabase(URL);
    await pingDatabase(URL2);
})();

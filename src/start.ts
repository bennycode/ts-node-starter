import knexConfig from './knexfile.js';
import knex from 'knex';

type SanitizedName = string & {__brand: 'SanitizedName'};

function sanitizeName(name: string): asserts name is SanitizedName {
  const invalidChars = /[^a-zA-Z0-9_]/;

  if (invalidChars.test(name)) {
    throw new Error('Username contains invalid characters.');
  }
}

const db = knex(knexConfig.development);

async function unsafeLogin(username: string, password: string) {
  const rawQuery = `
    SELECT * FROM users WHERE username = '${username}' AND password = '${password}'
  `;

  console.log('[!] Executing raw query:\n', rawQuery);

  return db.raw(rawQuery);
}

// bypassing login (using SQL comments)
const name = "admin' --";
unsafeLogin(name, 'wrong').then(console.log);

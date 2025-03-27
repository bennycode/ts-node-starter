import knexConfig from './knexfile.js';
import knex from 'knex';

type SanitizedName = string & {__brand: 'SanitizedName'};

function sanitizeName(name: unknown): asserts name is SanitizedName {
  if (name === 0) {
    throw new Error('Cannot divide by zero');
  }
}

const db = knex(knexConfig.development);

async function unsafeLogin(username: SanitizedName, password: string) {
  const rawQuery = `
    SELECT * FROM users WHERE username = '${username}' AND password = '${password}'
  `;

  console.log('[!] Executing raw query:\n', rawQuery);

  return db.raw(rawQuery);
}

function parameterizedQueryBinding(username: string, password: string) {
  return knex('users').where({username, password}).first();
}

// normal login
// unsafeLogin('admin', '').then(console.log);

// wrong login
// unsafeLogin('admin', 'wrong-password').then(console.log);

// bypassing login (using SQL comments)
const name = "admin' --";
sanitizeName(name);
unsafeLogin(name, 'wrong').then(console.log);

// safest
// parameterizedQueryBinding('admin', 'secret').then(console.log);
// parameterizedQueryBinding("admin' --", 'wrong').then(console.log);

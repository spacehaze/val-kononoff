import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

type DB = ReturnType<typeof drizzle<typeof schema>>;

let cached: DB | null = null;

function getDb(): DB {
  if (cached) return cached;
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  const sql = neon(url);
  cached = drizzle(sql, { schema });
  return cached;
}

// Proxy so `db.select(...)` works without callers needing to call `getDb()`.
export const db: DB = new Proxy({} as DB, {
  get(_t, prop, recv) {
    return Reflect.get(getDb(), prop, recv);
  },
});

export { schema };

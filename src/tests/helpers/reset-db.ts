import { exec } from "child_process";

export default async function resetDb() {
  if (process.env.NODE_ENV === "production")
    throw new Error("You are calling resetDb() in a production environment.");

  return new Promise((resolve, reject) => {
    exec("npx prisma migrate reset --force --skip-seed", (error, stdout) => {
      if (error) return reject(error);

      resolve(stdout);
    });
  });
}

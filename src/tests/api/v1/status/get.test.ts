import { db } from "@/infra/db";
import { expect, test } from "vitest";

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
});

test("Connect to database and should return some data", async () => {
  const result = await db.task.findMany();

  expect(result.length > 0).toBeTruthy();
});

import { db } from "@/infra/db";
import { expect, test } from "vitest";

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
});

test("Connect to database, create e return data", async () => {
  const egData = {
    id: 200,
    name: "academia",
    check: false,
  };
  const result = await db.task.create({ data: egData });
  await db.task.delete({
    where: {
      id: egData.id,
    },
  });

  console.log(result);
  expect(result.name).toBe(egData.name);
});

import { db } from "@/infra/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  const updatedAt = new Date().toISOString();

  const databaseVersion = await db.$queryRaw<
    { server_version: string }[]
  >`SHOW server_version;`;
  const databaseMaxConnections = await db.$queryRaw<
    { max_connections: string }[]
  >`SHOW max_connections;`;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnections = await db.$queryRaw<
    { count: number }[]
  >`SELECT count(*)::int FROM pg_stat_activity WHERE datname = ${databaseName};`;

  return NextResponse.json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion[0].server_version,
        max_connections: parseInt(databaseMaxConnections[0].max_connections),
        opened_connections: databaseOpenedConnections[0].count,
      },
    },
  });
};

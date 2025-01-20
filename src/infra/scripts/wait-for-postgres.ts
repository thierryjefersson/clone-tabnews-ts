import { exec, ExecException } from "node:child_process";

function checkPostgres() {
  exec("docker exec postgres-dev-ts pg_isready --host localhost", handleReturn);

  function handleReturn(error: ExecException | null, stdout: string) {
    if (stdout.includes("accepting connections")) {
      return console.log("\n🟢 Postgres está pronto e aceitando conexões!\n");
    }

    process.stdout.write(".");
    checkPostgres();
  }
}

process.stdout.write("\n\n🔴 Aguardando o Postgres aceitar conexões");
checkPostgres();

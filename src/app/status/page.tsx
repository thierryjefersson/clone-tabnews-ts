"use client";

import useSWR from "swr";

export type StatusDatabase = {
  max_connections: string;
  opened_connections: string;
  version: string;
};

export type StatusResponse = {
  updated_at: string;
  dependencies: {
    database: StatusDatabase;
  };
};

async function fetchAPI(key: string) {
  const response = await fetch(key);
  const data = await response.json();

  return data;
}

function UpdatedAt({ data }: { data: StatusResponse }) {
  const { updated_at } = data;

  return (
    <p>Última atualização: {new Date(updated_at).toLocaleString("pt-BR")}</p>
  );
}

function DatabaseStatus({ data }: { data: StatusDatabase }) {
  const { max_connections, opened_connections, version } = data;

  return (
    <>
      <h2>Banco de dados</h2>
      <p>Versão: {version}</p>
      <p>Conexões abertas: {opened_connections}</p>
      <p>Conexões máximas: {max_connections}</p>
    </>
  );
}

export default function StatusPage() {
  const { data, isLoading } = useSWR("api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  if (isLoading) return <h1>Carregando...</h1>;
  return (
    <>
      <h1>Status</h1>
      {data && <UpdatedAt data={data} />}
      {data.dependencies.database && (
        <DatabaseStatus data={data.dependencies.database} />
      )}
    </>
  );
}

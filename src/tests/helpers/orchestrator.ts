import retry from "async-retry";

async function waitAllServices() {
  let variavelEsquecida;
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(checkFetch, { retries: 100, maxTimeout: 1000 });

    async function checkFetch() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      if (response.status !== 200) throw Error();
    }
  }
}

const orchestrator = { waitAllServices };

export default orchestrator;

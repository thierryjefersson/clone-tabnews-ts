import retry from "async-retry";

async function waitAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(checkFetch, { retries: 100 });

    async function checkFetch() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      await response.json();
    }
  }
}

export default { waitAllServices };

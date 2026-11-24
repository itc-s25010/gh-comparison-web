import { createClient } from "microcms-js-sdk";
import { cacheLife } from "next/cache";
import type { Hard } from "../data/types";

if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
  throw new Error(
    "MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を .env.local に設定してください",
  );
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getHardList = async () => {
  "use cache";
  cacheLife("minutes");

  const data = await client.getList<Hard>({
    endpoint: "hard",
    queries: { limit: 100 },
  });
  return data.contents;
};

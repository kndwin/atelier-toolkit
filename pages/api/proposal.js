import { notion } from "utils/notion/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const body = req?.body;

  const getDatabase = await notion.search({ query: "Proposal" });
  const databaseId = getDatabase?.results[0].id;
  const pageCreated = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      Customer: { title: [{text: { content: body?.customer}}]},
    },
  });

  console.log({ pageCreated });
  return res.status(200).json({ message: "Customer has been added" });
}

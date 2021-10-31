import { notion } from "utils/notion/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const body = req?.body;

  const getDatabase = await notion.search({ query: "Proposal" });
  const databaseId = getDatabase?.results[0].id;
  try {
    const pageCreated = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Customer: { title: [{ text: { content: body?.customer } }] },
        Pricing: {
          rich_text: [{ text: { content: JSON.stringify(body?.pricing) } }],
        },
      },
    });
		console.log({ pageCreated });
  } catch (err) {
		console.log(err)
	}

  return res.status(200).json({ message: "Customer has been added" });
}

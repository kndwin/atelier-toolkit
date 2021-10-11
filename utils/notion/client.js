// TODO(kndwin): wrap secret in env
const NOTION_SECRET = "secret_pcQT5IFWPD6jMHe0JbrsQNeBExWE4QftngzRJWqvQuV"
import { Client } from "@notionhq/client"

export const notion = new Client({ auth: NOTION_SECRET })

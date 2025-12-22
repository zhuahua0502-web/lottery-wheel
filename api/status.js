import { getConfig } from "./kv.js";

export default async function handler(req, res) {
  const config = await getConfig();
  res.json({
    chances: config.chances,
    history: []
  });
}

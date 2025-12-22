import { getConfig, saveConfig } from "./kv.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const config = await getConfig();
    return res.status(200).json(config);
  }

  if (req.method === "POST") {
    const body = req.body || {};
    const config = await getConfig();

    if (body.chances !== undefined) {
      config.chances = Number(body.chances);
    }

    if (Array.isArray(body.prizes)) {
      config.prizes = config.prizes.map((p, i) => ({
        name: p.name,
        weight: Number(body.prizes[i]?.weight ?? p.weight)
      }));
    }

    await saveConfig(config);
    return res.status(200).json(config);
  }
}

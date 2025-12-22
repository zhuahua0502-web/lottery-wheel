import { config } from "./_config.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(config);
  }

  if (req.method === "POST") {
    const body = req.body || {};
    if (body.chances !== undefined) {
      config.chances = Number(body.chances);
    }
    if (Array.isArray(body.prizes)) {
      config.prizes = body.prizes;
    }

    res.status(200).json({ ok: true, config });
  }
}

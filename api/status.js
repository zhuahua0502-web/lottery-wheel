import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const status = (await kv.get("lottery:status")) || { chances: 0 };
  const history = (await kv.get("lottery:history")) || [];

  res.json({
    chances: status.chances,
    history,
  });
}

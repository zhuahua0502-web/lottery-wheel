import { config } from "./_config.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(config);
  }

  if (req.method === "POST") {
    const body = req.body || {};

    // 抽奖次数
    if (body.chances !== undefined) {
      config.chances = Number(body.chances);
    }

    // ⚠️ 关键：只更新 weight，永远不允许覆盖 name
    if (Array.isArray(body.prizes)) {
      config.prizes = config.prizes.map((p, i) => ({
        name: p.name,
        weight: Number(body.prizes[i]?.weight ?? p.weight)
      }));
    }

    return res.status(200).json(config);
  }
}

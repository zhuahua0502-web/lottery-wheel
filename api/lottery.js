import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method Not Allowed" });
  }

  const configKey = "lottery:config";
  const statusKey = "lottery:status";
  const historyKey = "lottery:history";

  // 读取配置
  const config = await kv.get(configKey);
  if (!config) {
    return res.status(500).json({ msg: "未初始化抽奖配置" });
  }

  // 读取状态
  const status = (await kv.get(statusKey)) || { chances: 0 };
  if (status.chances <= 0) {
    return res.status(400).json({ msg: "抽奖次数不足" });
  }

  // 按权重抽奖
  const totalWeight = config.prizes.reduce((s, p) => s + p.weight, 0);
  let r = Math.random() * totalWeight;
  let prize = config.prizes[0];
  for (const p of config.prizes) {
    if ((r -= p.weight) <= 0) {
      prize = p;
      break;
    }
  }

  // 扣次数
  status.chances -= 1;
  await kv.set(statusKey, status);

  // 写入抽奖记录（关键）
  const history = (await kv.get(historyKey)) || [];
  history.push({
    prize: prize.name,
    tim

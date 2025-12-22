import { config } from "./_config.js";

export default function handler(req, res) {
  // 没次数
  if (config.chances <= 0) {
    return res.json({
      code: 400,
      msg: "抽奖次数已用完"
    });
  }

  // 扣次数
  config.chances--;

  // 按后台概率抽奖
  const total = config.prizes.reduce((s, p) => s + p.weight, 0);
  let r = Math.random() * total;

  let prize = config.prizes[0];
  for (const p of config.prizes) {
    if ((r -= p.weight) <= 0) {
      prize = p;
      break;
    }
  }

  res.json({
    code: 200,
    prize,
    chances: config.chances
  });
}

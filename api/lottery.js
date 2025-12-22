import { config } from "./_config.js";

function drawPrize(list) {
  const total = list.reduce((s, p) => s + p.weight, 0);
  let r = Math.random() * total;

  for (const p of list) {
    if (r < p.weight) return p;
    r -= p.weight;
  }
}

export default function handler(req, res) {
  const prize = drawPrize(config.prizes);

  res.status(200).json({
    code: 200,
    prize
  });
}

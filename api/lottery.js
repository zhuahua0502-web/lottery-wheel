// 奖项 + 概率配置（百分比）
const prizes = [
  { name: "抖音1号一个", weight: 5 },
  { name: "大包零食碎片", weight: 45 },
  { name: "墨镜碎片", weight: 30 },
  { name: "再破一次", weight: 20 }
];

// 按权重随机
function drawPrize(list) {
  const total = list.reduce((sum, p) => sum + p.weight, 0);
  let rand = Math.random() * total;

  for (const prize of list) {
    if (rand < prize.weight) {
      return prize;
    }
    rand -= prize.weight;
  }
}

export default function handler(req, res) {
  const prize = drawPrize(prizes);

  res.status(200).json({
    code: 200,
    prize
  });
}

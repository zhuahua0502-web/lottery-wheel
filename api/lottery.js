export default function handler(req, res) {
  const prizes = [
    { name: "抖音1号一个" },
    { name: "大包零食碎片" },
    { name: "墨镜碎片" },
    { name: "再破一次" }
  ];

  const randomIndex = Math.floor(Math.random() * prizes.length);

  res.status(200).json({
    code: 200,
    prize: prizes[randomIndex]
  });
}

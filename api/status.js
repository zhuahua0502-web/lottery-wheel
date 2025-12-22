export default function handler(req, res) {
  res.status(200).json({
    chances: 3,
    history: [
      { time: "2025-01-01 12:00", prize: "抖音1号一个" }
    ]
  });
}

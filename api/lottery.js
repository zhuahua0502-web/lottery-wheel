export default function handler(req, res) {
  res.status(200).json({
    code: 200,
    prize: { name: "抖音1号一个" }
  });
}
// ⚠️ 注意：这是内存版（Vercel 冷启动会重置）
// 后期我可以帮你接数据库

export let config = {
  chances: 1, // 每人可抽次数
  prizes: [
    { name: "抖音1号一个", weight: 5 },
    { name: "大包零食碎片", weight: 45 },
    { name: "墨镜碎片", weight: 30 },
    { name: "再破一次", weight: 20 }
  ]
};

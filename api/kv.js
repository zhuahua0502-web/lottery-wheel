import { kv } from "@vercel/kv";

const CONFIG_KEY = "lottery:config";

export async function getConfig() {
  let config = await kv.get(CONFIG_KEY);

  // 第一次运行，初始化数据
  if (!config) {
    config = {
      chances: 10,
      prizes: [
        { name: "抖音1号一个", weight: 100 },
        { name: "大包零食碎片", weight: 0 },
        { name: "墨镜碎片", weight: 0 },
        { name: "再破一次", weight: 0 }
      ]
    };
    await kv.set(CONFIG_KEY, config);
  }

  return config;
}

export async function saveConfig(config) {
  await kv.set(CONFIG_KEY, config);
}

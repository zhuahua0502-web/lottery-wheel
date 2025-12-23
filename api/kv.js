import { kv } from "@vercel/kv";

const CONFIG_KEY = "lottery:config";

export async function getConfig() {
  try {
    let config = await kv.get(CONFIG_KEY);

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
  } catch (err) {
    console.error("KV ERROR:", err);
    throw err;
  }
}

export async function saveConfig(config) {
  try {
    await kv.set(CONFIG_KEY, config);
  } catch (err) {
    console.error("KV SAVE ERROR:", err);
    throw err;
  }
}

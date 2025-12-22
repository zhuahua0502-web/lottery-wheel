import { config } from "./_config.js";

export default function handler(req, res) {
  res.json({
    chances: config.chances,
    history: []
  });
}

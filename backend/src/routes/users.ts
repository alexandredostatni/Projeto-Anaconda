import { Router } from "express";
import { uploadAvatar } from "../services/uploadService";

const router = Router();

router.post("/avatar", async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: "Envie a imagem em base64" });
    }

    const url = await uploadAvatar(imageBase64);

    return res.json({ avatarUrl: url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao fazer upload" });
  }
});

export default router;

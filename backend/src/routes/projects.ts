import { Router } from "express";
import { z } from "zod";

const router = Router();
let projects = [];

const projectSchema = z.object({
  name: z.string().min(3, "Nome muito curto"),
  description: z.string().min(5, "Descrição muito curta"),
});

router.post("/", (req, res) => {
  const parsed = projectSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Erro de validação",
      issues: parsed.error.issues,
    });
  }

  const newProject = {
    id: projects.length + 1,
    ...parsed.data,
  };

  projects.push(newProject);

  res.status(201).json(newProject);
});

export default router;


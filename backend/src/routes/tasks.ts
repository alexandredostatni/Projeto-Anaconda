import { Router } from "express";
import * as tasksService from "../services/tasksService";

const router = Router();

// Buscar todas as tarefas
router.get("/", async (req, res) => {
  try {
    const tasks = await tasksService.getAllTasks();
    res.json(tasks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Criar nova tarefa
router.post("/", async (req, res) => {
  try {
    const task = await tasksService.createTask(req.body);
    res.status(201).json(task);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar tarefa
router.put("/:id", async (req, res) => {
  try {
    const updated = await tasksService.updateTask(req.params.id, req.body);
    res.json(updated);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Deletar tarefa
router.delete("/:id", async (req, res) => {
  try {
    await tasksService.deleteTask(req.params.id);
    res.json({ message: "Tarefa deletada com sucesso" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

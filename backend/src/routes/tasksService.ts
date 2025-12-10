import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "doing" | "done";
}

let tasks: Task[] = [];

// Buscar todas as tarefas
export async function getAllTasks(): Promise<Task[]> {
  return tasks;
}

// Criar nova tarefa
export async function createTask(data: Partial<Task>): Promise<Task> {
  const newTask: Task = {
    id: uuidv4(),
    title: data.title || "Sem título",
    description: data.description || "",
    status: data.status || "todo",
  };

  tasks.push(newTask);
  return newTask;
}

// Atualizar tarefa
export async function updateTask(id: string, data: Partial<Task>): Promise<Task> {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    throw new Error("Tarefa não encontrada");
  }

  tasks[index] = {
    ...tasks[index],
    ...data,
  };

  return tasks[index];
}

// Deletar tarefa
export async function deleteTask(id: string): Promise<void> {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    throw new Error("Tarefa não encontrada");
  }

  tasks.splice(index, 1);
}

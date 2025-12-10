import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "doing" | "done";
}

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Aqui estamos simulando tarefas vindas de uma API
  useEffect(() => {
    const mockTasks: Task[] = [
      { id: 1, title: "Criar API", description: "Implementar rotas básicas", status: "todo" },
      { id: 2, title: "Configurar Docker", description: "Criar Dockerfile e docker-compose", status: "doing" },
      { id: 3, title: "Configurar Pipeline", description: "GitHub Actions CI/CD", status: "done" },
    ];

    setTasks(mockTasks);
  }, []);

  const columns = {
    todo: "A Fazer",
    doing: "Fazendo",
    done: "Concluído"
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {Object.keys(columns).map((status) => (
        <div key={status} style={{ flex: 1 }}>
          <h2 style={{ textAlign: "center" }}>{columns[status as keyof typeof columns]}</h2>

          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;

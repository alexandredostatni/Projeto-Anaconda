import React from "react";

interface TaskCardProps {
  title: string;
  description: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, status }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "12px",
      marginBottom: "12px",
      backgroundColor: "#fafafa"
    }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ margin: "8px 0" }}>{description}</p>
      <span style={{
        fontSize: "12px",
        padding: "4px 8px",
        borderRadius: "4px",
        backgroundColor: "#eee"
      }}>
        {status}
      </span>
    </div>
  );
};

export default TaskCard;

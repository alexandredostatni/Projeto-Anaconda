import request from "supertest";
import app from "../src/app";

describe("POST /projects", () => {
  it("deve criar um projeto válido", async () => {
    const res = await request(app).post("/projects").send({
      name: "Projeto X",
      description: "Projeto de exemplo"
    });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Projeto X");
  });

  it("deve retornar erro 400 quando inválido", async () => {
    const res = await request(app).post("/projects").send({
      name: "A",
      description: "B"
    });

    expect(res.status).toBe(400);
  });
});

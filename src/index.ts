import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { criarTurma } from "./endpoints/turma/criarTurma";
import { buscarTurmas } from "./endpoints/turma/buscarTurmasAtivas";
import { criarEstudante } from "./endpoints/estudante/criarEstudante";
import { alterarModulo } from "./endpoints/turma/alterarModulo";
import { buscarEstudante } from "./endpoints/estudante/buscarEstudante";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

//Teste ping => pong
app.get("/ping", ping);

//Buscar Turmas Ativas
app.get("/turmas-ativas", buscarTurmas);

//Criação de Turma

app.post("/criar-turma", criarTurma);

//Criação de Turma

app.post("/criar-estudante", criarEstudante);

//Alterar modulo de Turma

app.put("/alterar-modulo", alterarModulo);

//Buscar Estudante
app.get("/buscar-estudante", buscarEstudante);

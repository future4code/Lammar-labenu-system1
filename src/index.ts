import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { criarTurma } from "./endpoints/turma/criarTurma";
import { buscarTurmas } from "./endpoints/turma/buscarTurmasAtivas";
import { criarEstudante } from "./endpoints/estudante/criarEstudante";
import { alterarModulo } from "./endpoints/turma/alterarModulo";
import { buscarEstudante } from "./endpoints/estudante/buscarPeloNome";
import { mudarDeTurma } from "./endpoints/estudante/mudarDeTurma";
import { criarDocente } from "./endpoints/docente/criarDocente";
import { buscarDocentes } from "./endpoints/docente/buscarTodosDocentes";
import { mudarDocenteDeTurma } from "./endpoints/docente/mudarDocenteDeTurma";



dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

//ENDPOINT Teste ping => pong
app.get("/ping", ping);


// *************** ENDPOINTS REFERENTES TURMA ***************

//Buscar Turmas Ativas:
app.get("/turmas-ativas", buscarTurmas);

//Criar de Turma:
app.post("/criar-turma", criarTurma);

//Alterar modulo de Turma
app.put("/alterar-modulo", alterarModulo);


// *************** ENDPOINTS REFERENTES ESTUDANTE ***************

//Criar estudante
app.post("/criar-estudante", criarEstudante);

//Buscar Estudante
app.get("/buscar-estudante", buscarEstudante);

//Mudar aluno de Turma

app.put("/mudar-aluno", mudarDeTurma);


// *************** ENDPOINTS REFERENTES ESTUDANTE ***************
//Criação de docente

app.post("/criar-docente", criarDocente);

//Buscar todos os docentes
app.get("/buscar-docentes", buscarDocentes);

//Mudar docente de Turma

app.put("/mudar-docente", mudarDocenteDeTurma);
import { Request, Response } from "express";
import connection from "../../database/connection";

export const buscarEstudante = async (req: Request, res: Response) => {
  let errorCode = 400;
  const nome = req.body.nome as string;

  try {
    const aluno = await connection
      .select("*")
      .from("ESTUDANTE")
      .where("nome", "=", nome);
    if (!nome || nome.trim().length === 0) {
      throw new Error("Precisa informar o nome do estudante");
    }

    res.status(200).send(aluno);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};

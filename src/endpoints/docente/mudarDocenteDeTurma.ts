import { raw, Request, Response } from "express";
import connection from "../../database/connection";

export const mudarDocenteDeTurma = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const nome = req.body.nome;
    const turma_id = req.body.turma_id;

    if (!nome || !turma_id) {
      throw new Error("Precisa informar os dados: nome e turma_id");
    }
    const resultado = await connection.raw(
      `UPDATE DOCENTE SET turma_id = ? where nome = ? `,
      [req.body.turma_id, req.body.nome]
    );

    res.status(200).send("Docente alterado da turma com sucesso!!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};

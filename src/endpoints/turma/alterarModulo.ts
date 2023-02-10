import { raw, Request, Response } from "express";
import connection from "../../database/connection";

export const alterarModulo = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const nome = req.body.nome;
    const modulo = req.body.modulo;

    if (!nome || !modulo) {
      throw new Error("Precisa informar os dados: nome e modulo");
    }
    await connection.raw(
      `UPDATE TURMA
       SET modulo= ? 
       WHERE nome = ?
      `,
      [modulo, req.body.nome]
    );

    res.status(200).send("Modulo alterado com sucesso!!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};

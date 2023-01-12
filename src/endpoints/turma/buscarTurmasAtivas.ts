import { Request, Response } from "express";
import connection from "../../database/connection";

export const buscarTurmas = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const turmas = await connection
      .select("*")
      .from("TURMA")
      .where("modulo", ">", 0)
      .andWhere("modulo", "<", 7);

    res.status(200).send(turmas);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};

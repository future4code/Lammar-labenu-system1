import { Request, Response } from "express";
import connection from "../../database/connection";

export const buscarDocentes = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const todosDocentes = await connection.select("*").from("DOCENTE");

    res.status(200).send(todosDocentes);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};

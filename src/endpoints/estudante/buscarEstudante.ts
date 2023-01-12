import { Request, Response } from "express";
import connection from "../../database/connection";

export const buscarEstudante = async (req: Request, res: Response) => {
  let errorCode = 400;
  const nome = req.query.nome;
  let result;
  try{
      if (nome){
          result= await connection.raw(
              `
                  SELECT * FROM ESTUDANTE
                  WHERE nome=${nome}
              `
          )
      }else{
        result= await connection.raw(
            `
                SELECT * FROM ESTUDANTE
            `
        )
    }
      res.status(200).send(result[0])
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};

import { Request, Response } from "express";
import connection from "../database/connection";


export const criarTurma = async (req: Request, res: Response) => {
    let errorCode = 400;
    try{
        const id = Date.now();
        const nome = req.body.nome;
        const modulo = req.body.modulo;

        if (!nome || !modulo || !id){
            throw new Error("Precisa informar os dados: nome e modulo")
        }
        await  connection("TURMA").insert({
            id,
            nome,
            modulo            
        })
        res.status(200).send("Turma criada com sucesso!!")

    }catch(error:any){
        res.status(errorCode).send({message:error.message});
    }
}
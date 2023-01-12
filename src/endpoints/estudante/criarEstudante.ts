import { Request, Response } from "express";
import connection from "../../database/connection";


export const criarEstudante = async (req: Request, res: Response) => {
    let errorCode = 400;
    try{
        const id = Date.now();
        const nome = req.body.nome;
        const email = req.body.email;
        const data_nasc = req.body.data_nasc;
        const turma_id = req.body.turma_id;


        if (!nome || !email || !data_nasc || !turma_id){
            throw new Error("Precisa informar os dados: nome, email,data_nasc e turma_id")
        }
        await  connection("ESTUDANTE").insert({
            id,
            nome,
            email,
            data_nasc,
            turma_id            
        })
        res.status(200).send("Estudante criado com sucesso!!")

    }catch(error:any){
        res.status(errorCode).send({message:error.message});
    }
}
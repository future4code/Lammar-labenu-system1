import { Usuario } from "./Usuario";

export class Estudante extends Usuario {
  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: string,
    private hobbies: string[]
  ) {
    super(id, nome, email, data_nasc, turma_id);
    this.hobbies = hobbies;
  }
}

export abstract class Usuario {
  constructor(
    private id: string,
    private nome: string,
    private email: string,
    private data_nasc: Date,
    private turma_id: string
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
  }
}

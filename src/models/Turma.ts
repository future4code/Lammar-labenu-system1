export class Turma {
  constructor(
    private id: string,
    private nome: string,
    private docentes: string[],
    private estudantes: string[],
    private modulo: string
  ) {
    this.id = id;
    this.nome = nome;
    this.docentes = docentes;
    this.estudantes = estudantes;
    this.modulo = modulo;
  }
}

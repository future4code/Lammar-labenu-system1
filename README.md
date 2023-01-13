## LabenuSystem 🎒🏫

## Links:
### [Documentação](https://documenter.getpostman.com/view/22376244/2s8ZDSc53h)
### [Deploy](https://labenu-system1.onrender.com)

Sistema básico para uma instituição de ensino.

## Entidades

<strong>1. Estudantes</strong> 

    Representa os estudantes da instituição.
    Possuem: id, nome, email, data de nascimento e seus principais hobbies. 

<strong>2. Docente</strong> 

    Representa os docentes da instituição.
    Possuem: id, nome, email, data de nascimento e suas especialidades.

<strong>3. Turma</strong> 

    Toda turma é composta das seguintes características: Id, nome e módulo.
    
    O módulo pode assumir os valores de 1 a 6 ou `undefined`, indicando que as aulas dessa turma ainda não começaram.

## Funcionalidades

<strong> Turma: </strong>

<ul>
    <p><li><strong>Criar turma</strong></li></p>
    <p><li><strong>Procurar turmas ativas:</strong></li> Turmas ativas tem módulo diferente de 0. </p>
    <p><li><strong>Alterar módulo de uma determinada turma:</strong></li> Os valores aceitos são de 1 a 6.</p>
</ul>

<strong> Estudantes: </strong>

<ul>
    <p><li><strong>Criar estudante</strong></li></p>
    <p><li><strong>Inserir os hobbies:</strong></li>O estudante pode inserir a quantidade de hobbies que desejar.</p>
    <p><li><strong>Listar as informações de um estudante.</strong></li> A busca é realizada através do nome completo do estudante.</p>
    <p><li><strong>Alterar a turma.</strong></li> É necessário inserir o id do aluno e o id da turma.</p>
</ul>

<strong> Docente: </strong>

<ul>
    </p><li><strong>Criar docente</strong></li></p>
    <p><li><strong>Inserir as especialidades: </strong></li> O docente pode inserir a quantidade de especialidades que desejar.</p>
    </p><li><strong>Lista com todos os docentes</strong></li></p>
    </p><li><strong>Alterar a turma.</strong></li>É necessário inserir o id do aluno e o id da turma.</p>
</ul>

## Tecnologias utilizadas:

<p> TypeScript, Node.js e MySQL </p>



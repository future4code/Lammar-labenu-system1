import connection from "./connection";

const createTables = async () => {
  await connection
    .raw(
      `
        DROP TABLE IF EXISTS TURMA, ESTUDANTE, DOCENTE, ESTUDANTE_HOBBY, HOBBY, DOCENTE_ESPECIALIDADE, ESPECIALIDADE;
        CREATE TABLE IF NOT EXISTS TURMA(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL UNIQUE,
            modulo VARCHAR(255) DEFAULT 0
        );
        CREATE TABLE IF NOT EXISTS ESTUDANTE (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            data_nasc DATE NOT NULL,
            turma_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (turma_id) REFERENCES TURMA (id)
        );
        CREATE TABLE IF NOT EXISTS DOCENTE(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            data_nasc DATE NOT NULL,
            turma_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (turma_id) REFERENCES TURMA (id)
        );
        CREATE TABLE IF NOT EXISTS HOBBY(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL UNIQUE
        );
        CREATE TABLE IF NOT EXISTS ESTUDANTE_HOBBY(
            id VARCHAR(255) PRIMARY KEY,
            estudante_id VARCHAR(255) NOT NULL,
            hobby_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (estudante_id) REFERENCES ESTUDANTE (id),
            FOREIGN KEY (hobby_id) REFERENCES HOBBY (id)
        );
        CREATE TABLE IF NOT EXISTS ESPECIALIDADE(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL UNIQUE
        );
        CREATE TABLE IF NOT EXISTS DOCENTE_ESPECIALIDADE(
            id VARCHAR(255) PRIMARY KEY,
            docente_id VARCHAR(255) NOT NULL,
            especialidade_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (docente_id) REFERENCES DOCENTE (id),
            FOREIGN KEY (especialidade_id) REFERENCES ESPECIALIDADE (id)
        );
    `
    )
    .then(() => {
      console.log(`Tabelas criadas!`);
    })
    .catch((error: any) => printError(error));
};

const insertData = async () => {
  await connection
    .raw(
      `
        INSERT INTO TURMA VALUES ("1", "Lamarr", "6");
        INSERT INTO TURMA VALUES ("2", "Barros", "6");
        INSERT INTO TURMA VALUES ("3", "Jemison", "6");
        INSERT INTO ESTUDANTE VALUES ("1", "Leandro", "leandro@email.com", "1998-04-18", "1");
        INSERT INTO ESTUDANTE VALUES ("2", "Guilherme", "guilherme@email.com", "1990-01-08", "2");
        INSERT INTO ESTUDANTE VALUES ("3", "Victor", "victor@email.com", "1992-07-19", "3");
        INSERT INTO DOCENTE VALUES ("1", "Jr", "jr@email.com", "1988-10-01", "2");
        INSERT INTO DOCENTE VALUES ("2", "Fayra", "fayra@email.com", "1995-02-19", "3");
        INSERT INTO HOBBY VALUES ("1", "Ouvir música");
        INSERT INTO HOBBY VALUES ("2", "Andar de patins");
        INSERT INTO HOBBY VALUES ("3", "Cozinhar");
        INSERT INTO ESTUDANTE_HOBBY VALUES ("1", "1", "2");
        INSERT INTO ESTUDANTE_HOBBY VALUES ("2", "2", "3");
        INSERT INTO ESPECIALIDADE VALUES ("1", "JS");
        INSERT INTO ESPECIALIDADE VALUES ("2", "CSS");
        INSERT INTO ESPECIALIDADE VALUES ("3", "React");
        INSERT INTO ESPECIALIDADE VALUES ("4", "Typescript");
        INSERT INTO ESPECIALIDADE VALUES ("5", "POO");
        INSERT INTO DOCENTE_ESPECIALIDADE VALUES ("1", "1", "5");
        INSERT INTO DOCENTE_ESPECIALIDADE VALUES ("2", "2", "4");
    `
    )
    .then(() => {
      console.log(`Dados inseridos!`);
      connection.destroy();
    })
    .catch((error: any) => printError(error));
};

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

createTables().then(insertData);

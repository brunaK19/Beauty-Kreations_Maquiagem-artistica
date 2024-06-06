create database projeto_pessoal;
use projeto_pessoal;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45)
);

create table perguntas(
	idPergunta int primary key auto_increment,
    nivel varchar(45),
    preferencia varchar(45),
    experiencia varchar(45)
);
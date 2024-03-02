### FEITO EM POSTGRESQL

create table usuarios (
    usu_id serial primary key,
    usu_nome varchar(100) not null,
    usu_email varchar(100) not null,
    usu_senha varchar(255) not null,
    usu_nivel_acesso int not null default 1

);

insert into usuarios (usu_nome, usu_email, usu_senha, usu_nivel_acesso)
values ('rogerio', 'rogerio.freitas@fafram.com.br', '123456', 1);
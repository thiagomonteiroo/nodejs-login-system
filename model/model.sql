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

create table marca (
    mar_id serial primary key,
    mar_nome varchar(30) not null
);

create table produto (
    pro_id serial primary key,
    pro_nome varchar(30) not null,
    pro_data_fabr date not null,
    pro_preco numeric(10,2) not null,
    pro_marca int not null,
    constraint fk_produto_marca
        foreign key(pro_marca)
        references marca (mar_id)
);


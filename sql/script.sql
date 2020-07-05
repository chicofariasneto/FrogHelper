CREATE SCHEMA frog_helper

CREATE TABLE frog_helper.group (
    id_group INT NOT NULL,
    title_group VARCHAR(1000) NOT NULL,

    CONSTRAINT pk_frog_helper PRIMARY KEY (id_group)
);

CREATE TABLE frog_helper.user_group (
    id_user INT NOT NULL,
    id_group INT NOT NULL,
    username VARCHAR(120) NOT NULL,

    CONSTRAINT pk_user_group PRIMARY KEY (id_user),
    CONSTRAINT fk_user_group FOREIGN KEY (id_group) REFERENCES frog_helper.group (id_group) MATCH SIMPLE ON DELETE NO ACTION ON UPDATE NO ACTION
);
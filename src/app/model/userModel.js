"CREATE TABLE frog_helper.user_group (\
    id_user INT NOT NULL,\
    id_group INT NOT NULL,\
    username VARCHAR(120) NOT NULL,\
\
    CONSTRAINT pk_user_group PRIMARY KEY (id_user)\
    CONSTRAINT fk_user_group FOREIGN KEY (id_group) REFERENCES frog_helper.group (id_group) MATCH SIMPLE ON DELETE NO ACTION ON UPDATE NO ACTION\
);"

const insertUser = "INSERT INTO frog_helper.user_group \
    (id_user, id_group, username) \
    VALUES ($1, $2, $3);"

const selectUserGroup = "SELECT * FROM frog_helper.user_group\
    WHERE id_user = $1 AND id_group = $2;"

const selectUsersGroup = "SELECT username FROM frog_helper.user_group\
    WHERE id_group = $1;"

const selectUsersGroupRandom = "SELECT username FROM frog_helper.user_group\
    WHERE id_group = $1\
    ORDER BY RANDOM();"

const deleteUser = "DELETE FROM frog_helper.user_group \
    WHERE id_user = $1 AND id_group = $2;"

module.exports = {
    insertUser,
    selectUserGroup,
    selectUsersGroup,
    selectUsersGroupRandom,
    deleteUser,
}
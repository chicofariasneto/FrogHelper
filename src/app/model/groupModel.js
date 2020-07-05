"CREATE TABLE frog_helper.group (\
    id_group INT NOT NULL,\
    title_group VARCHAR(1000) NOT NULL,\
    \
    CONSTRAINT pk_frog_helper PRIMARY KEY (id_group)\
);"

const insertGroup = "INSERT INTO frog_helper.group \
    (id_group, title_group) \
    VALUES ($1, $2);"

const selectGroup = "SELECT * FROM frog_helper.group\
    WHERE id_group = $1;"

module.exports = {
    insertGroup,
    selectGroup,
}
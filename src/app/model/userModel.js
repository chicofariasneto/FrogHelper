const user = {
    insert: "INSERT INTO frog_helper.user_group (id_user, id_group, username) VALUES ($1, $2, $3);",
    selectUser: "SELECT * FROM frog_helper.user_group WHERE id_user = $1 AND id_group = $2;",
    selectUsers: "SELECT username FROM frog_helper.user_group WHERE id_group = $1;",
    selectUsersRandom: "SELECT username FROM frog_helper.user_group WHERE id_group = $1 ORDER BY RANDOM();",
    delete: "DELETE FROM frog_helper.user_group WHERE id_user = $1 AND id_group = $2;"
}

module.exports = { user }
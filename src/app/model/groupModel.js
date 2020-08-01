const group = {
    insert: "INSERT INTO frog_helper.group (id_group, title_group) VALUES ($1, $2);",
    select: "SELECT * FROM frog_helper.group WHERE id_group = $1;"
}

module.exports = { group }
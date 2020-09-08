
exports.up = function(knex) {
    return knex.schema.createTable('users', (usersTable) => {
        usersTable.increments('userID').primary()
        usersTable.string('username', 50).notNullable()
        usersTable.string('avatar_url', 250).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};

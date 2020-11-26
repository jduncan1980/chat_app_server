const { KnexTimeoutError } = require('knex');

exports.up = function (knex) {
	return knex.schema.createTable('users', (tbl) => {
		tbl.increments('id').primary();
		tbl.string('username', 255).notNullable().unique();
		tbl.string('password', 255).notNullable();
		tbl.string('email', 255).notNullable().unique();
		tbl.string('first_name', 255).notNullable();
		tbl.string('last_name', 255).notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('users');
};

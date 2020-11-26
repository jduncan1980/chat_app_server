const db = require('../../database/dbConfig');

const findById = (id) => {
	return db('users').where({ id }).first();
};

const add = async (user) => {
	try {
		const [id] = await db('users').insert(user);
		return findById(id);
	} catch (error) {
		throw error;
	}
};

const findUsers = () => {
	return db('users').select('username').orderBy('id');
};

const findByUsername = (username) => {
	return db('users').where({ username }).first();
};

module.exports = {
	add,
	findById,
	findUsers,
	findByUsername,
};

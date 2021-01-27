require('ts-node/register');

module.exports = {
	development: {
		client: 'pg',
		connection: {
			database: 'rembourser_dev',
			user: 'rembourser_api',
			password: '7Kd^?fj3Hf),]`yE'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: 'migrations'
		},
		timezone: 'UTC'
	},
	testing: {
		client: 'pg',
		connection: {
			database: 'rembourser_testing',
			user: 'rembourser_api',
			password: '7Kd^?fj3Hf),]`yE'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: 'migrations'
		},
		timezone: 'UTC'
	},
	production: {
		client: 'pg',
		connection: {
			database: 'rembourser_production',
			user: 'rembourser_api',
			password: '7Kd^?fj3Hf),]`yE'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: 'migrations'
		},
		timezone: 'UTC'
	}
}
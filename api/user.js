const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
	const getHash = (password, callback) => {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
		})
	}

	const save = (req, res) => {
		getHash(req.body.password, hash => {
			const password = hash
			console.log(JSON.stringify(req.body))
			console.log(password)
			app.db('users').insert({
				name: req.body.name,
				email: req.body.email,
				password: password
			})
				.then(_ => res.status(204).send())
				.catch(err => res.status(500).json(err))

		})
	}

	return { save }
}
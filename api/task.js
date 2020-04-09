const moment = require('moment')
module.exports = app => {
	const getTasks = (req, res) => {
		const date = req.query.date ? req.query.date : moment().endOf('day').toDate()

		app.db('tasks')
			.where({ userId: req.user.id })
			.where('estimatedAt', '<=', date)
			.then(tasks => res.status(200).json(tasks))
			.catch(err => res.status(500).json(err))
	}

	const save = (req, res) => {
		if (!req.body.desc.trim()) {
			return res.status(400).send('Descrição do campo obrigatório!')
		}
		req.body.userId = req.user.id
		app.db('tasks')
			.insert(req.body)
			.then(_ => res.status(204).send())
			.catch(err => res.status(500).json(err))
	}


	const remove = (req, res) => {
		app.db('tasks')
			.where({ id: req.params.id, userId: req.user.id })
			.del()
			.then(rowDeleted => {
				if (rowDeleted > 0) {
					res.status(204).send()
				} else {
					res.status(400).send("Registro não encontrado!")
				}
			})
			.catch(err => res.status(500).json(err))
	}


	const doneTask = (req, res, doneAt) => {
		app.db('tasks')
			.where({ id: req.params.id, userId: req.user.id })
			.update({ doneAt })
			.then(tasks => res.status(204).json(tasks))
			.catch(err => res.status(500).json(err))
	}


	const toggleTask = (req, res) => {
		app.db('tasks')
			.where({ id: req.params.id, userId: req.user.id })
			.first()
			.then(task => {
				if (!task) {
					return res.status(400).send("Registro não encontrado!")
				}
				const doneAt = task.doneAt ? null : new Date()
				return doneTask(req, res, doneAt)
			})
			.catch(err => res.status(500).json(err))
	}
	return { getTasks, save, remove, toggleTask }
}
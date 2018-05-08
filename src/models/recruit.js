const { Recruit } = require('./index')

let findBy = (examid, idcard) => {
	return Recruit.findOne({
		where: {
			examid,
			idcard
		}
	})
}

let create = (examid, idcard, name, college) => {
	let pid = require('../lib/util').guid()
	return Recruit.create ({
		pid,
		examid,
		idcard,
		name,
		college
	}).then(res => {
		if (res) {
			let n = Math.round(Math.random() * 10)
			if (n % 2) Redis.hmset((idcard + examid), 'recruit', JSON.stringify(res))
			return true
		} else return false
	})
}

module.exports = {
	findBy,
	create
}
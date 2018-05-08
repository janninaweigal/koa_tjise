/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('info', {
		pid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		class: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		stuId: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		examId: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		section: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		idcard: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		gender: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		floor: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		dorter: {
			type: DataTypes.INTEGER(255),
			allowNull: true
		},
		bed: {
			type: DataTypes.INTEGER(255),
			allowNull: true
		},
		source: {
			type: "DOUBLE(255,0)",
			allowNull: true
		},
		school: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nation: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		dignity: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		birthplace: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		local: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		province: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		adress: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ems: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		family: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		fname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		fphone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mphone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		fschool: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		fspeciality: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cet4: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cet6: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		work: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		speciality: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		uniform: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		openId: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		isFinsh: {
			type: DataTypes.INTEGER(255),
			allowNull: true
		}
	}, {
		tableName: 'info',
		timestamps: false
	});
};

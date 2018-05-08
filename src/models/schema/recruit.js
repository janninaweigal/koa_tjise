/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('recruit', {
		pid: {
			type: DataTypes.STRING(32),
			allowNull: false,
			primaryKey: true
		},
		examid: {
			type: DataTypes.STRING(14),
			allowNull: false
		},
		idcard: {
			type: DataTypes.STRING(18),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		college: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'recruit',
		timestamps: false
	});
};

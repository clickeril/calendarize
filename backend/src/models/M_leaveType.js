const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LeaveType = sequelize.define('LeaveType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  excludeInReportsIfNoEntitlement: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'exclude_in_reports_if_no_entitlement'
  },
  operationalCountryId: {
    type: DataTypes.INTEGER,
    field: 'operational_country_id'
  }
}, {
  tableName: 'ohrm_leave_type',
  timestamps: false
});

module.exports = LeaveType;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LeaveRequestComment = sequelize.define('LeaveRequestComment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  leaveRequestId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'leave_request_id'
  },
  created: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  },
  createdById: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    field: 'created_by_id'
  },
  createdByEmpNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    field: 'created_by_emp_number'
  },
  comments: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null
  }
}, {
  tableName: 'ohrm_leave_request_comment',
  timestamps: false
});

module.exports = LeaveRequestComment;

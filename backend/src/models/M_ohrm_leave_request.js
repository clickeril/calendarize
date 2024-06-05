const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const LeaveRequestComment = require('./M_ohrm_leave_request_comment');
const Employee = require('./M_hs_hr_employee'); // Import model Employee

const LeaveRequest = sequelize.define('LeaveRequest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  leaveTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'leave_type_id'
  },
  dateApplied: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'date_applied'
  },
  empNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'emp_number'
  }
}, {
  tableName: 'ohrm_leave_request',
  timestamps: false
});


LeaveRequest.hasMany(LeaveRequestComment, { foreignKey: 'leaveRequestId', as: 'comments' });
LeaveRequest.belongsTo(Employee, { foreignKey: 'empNumber', as: 'employee' });

module.exports = LeaveRequest;

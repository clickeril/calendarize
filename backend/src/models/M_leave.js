const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const LeaveType = require('./M_leaveType');
const LeaveRequest = require('./M_ohrm_leave_request');
const Employee = require('./M_hs_hr_employee');


const Leave = sequelize.define('Leave', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      length_hours: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: true
      },
      length_days: {
        type: DataTypes.DECIMAL(6, 4),
        allowNull: true
      },
      status: {
        type: DataTypes.SMALLINT,
        allowNull: true
      },
      leave_request_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: LeaveRequest,
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      leave_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: LeaveType,
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      emp_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Employee,
          key: 'empNumber'
        },
        onDelete: 'CASCADE'
      },
      start_time: { // Update attribute name to match the column name
        type: DataTypes.TIME,
        allowNull: true
      },
      end_time: { // Update attribute name to match the column name
        type: DataTypes.TIME,
        allowNull: true
      },
      duration_type: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
      }
}, {
  tableName: 'ohrm_leave',
  timestamps: false
});



Leave.belongsTo(LeaveRequest, { foreignKey: 'leave_request_id', as: 'leaveRequest' });
Leave.belongsTo(LeaveType, { foreignKey: 'leave_type_id', as: 'leaveType' });

module.exports = Leave;

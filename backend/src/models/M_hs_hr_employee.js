const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const LeaveRequest = require('./M_ohrm_leave_request');

const Employee = sequelize.define('Employee', {
  empNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'emp_number'
  },
  employeeId: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null
  },
  empLastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: '',
    field: 'emp_lastname'

  },
  empFirstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: '',
    field: 'emp_firstname'
  },
  empMiddleName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  empNickName: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: ''
  },
  empSmoker: {
    type: DataTypes.SMALLINT,
    defaultValue: 0
  },
  ethnicRaceCode: {
    type: DataTypes.STRING(13),
    allowNull: true,
    defaultValue: null
  },
  empBirthday: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  },
  nationCode: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  empGender: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue: null
  },
  empMaritalStatus: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null
  },
  empSsnNum: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  empSinNum: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  empOtherId: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  empDriLiceNum: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  empDriLiceExpDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  },
  empMilitaryService: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  empStatus: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  jobTitleCode: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  eeoCatCode: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  workStation: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  empStreet1: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  empStreet2: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  cityCode: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  counCode: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  provinCode: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: ''
  },
  empZipcode: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null
  },
  empHmTelephone: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null
  },
  empMobile: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null
  },
  empWorkTelephone: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null
  },
  empWorkEmail: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null
  },
  salGrdCode: {
    type: DataTypes.STRING(13),
    allowNull: true,
    defaultValue: null
  },
  joinedDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  },
  empOthEmail: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null
  },
  terminationId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  custom1: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom2: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom3: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom4: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom5: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom6: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom7: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom8: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom9: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  custom10: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null
  },
  purgedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  }
}, {
  tableName: 'hs_hr_employee',
  timestamps: false
});

module.exports = Employee;

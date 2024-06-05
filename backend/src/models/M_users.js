const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userRoleId: {
    type: DataTypes.INTEGER,
    field: 'user_role_id'
  },
  empNumber: {
    type: DataTypes.STRING(13),
    field: 'emp_number'
  },
  userName: {
    type: DataTypes.STRING(40),
    field: 'user_name'
  },
  userPassword: {
    type: DataTypes.STRING(255),
    field: 'user_password'
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  dateEntered: {
    type: DataTypes.DATE,
    field: 'date_entered'
  },
  dateModified: {
    type: DataTypes.DATE,
    field: 'date_modified'
  },
  modifiedUserId: {
    type: DataTypes.INTEGER,
    field: 'modified_user_id'
  },
  createdBy: {
    type: DataTypes.INTEGER,
    field: 'created_by'
  }
}, {
  // Tambahan opsi untuk mengatur nama tabel
  tableName: 'ohrm_user',
  timestamps: false // Jika kolom timestamps (date_entered, date_modified) tidak ada dalam tabel
});

module.exports = User;

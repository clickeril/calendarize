const Leave = require('../models/M_leave');
const LeaveType = require('../models/M_leaveType');
const LeaveRequest = require('../models/M_ohrm_leave_request');
const LeaveRequestComment = require('../models/M_ohrm_leave_request_comment');
const Employee = require('../models/M_hs_hr_employee');

const LeaveController = {
  async getAllLeaves(req, res, next) {
    try {
      const leaves = await Leave.findAll({
        include: [
          { model: LeaveType, as: 'leaveType', attributes: ['name'] },
          { 
            model: LeaveRequest, 
            as: 'leaveRequest', 
            include: [
              { model: LeaveRequestComment, as: 'comments' },
              { model: Employee, attributes: ['empLastName', 'empFirstName'], as: 'employee' } // Tambahkan 'as: employee' untuk menentukan alias
            ] 
          }
        ]
      });
      res.json(leaves);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = LeaveController;

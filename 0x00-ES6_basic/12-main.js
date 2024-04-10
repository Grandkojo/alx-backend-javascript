/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

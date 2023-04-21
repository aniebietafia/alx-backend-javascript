export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      //   const departmentArray = [];
      //   for (const department in employeesList) {
      //     departmentArray.push(department);
      //   }
      //   return departmentArray.length;
      return Object.keys(employeesList).length;
    },
  };
}

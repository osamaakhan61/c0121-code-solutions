/* exported getStudentNames */
function getStudentNames(students) {
  var studentsArray = [];
  for (var i = 0; i < students.length; i++) {
    studentsArray.push(students[i].name);
  }
  return studentsArray;
}

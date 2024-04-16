export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: newGrades.find((grade) => grade.studentId === student.id)
        ? newGrades.find((grade) => grade.studentId === student.id).grade
        : 'N/A',
    }));
}

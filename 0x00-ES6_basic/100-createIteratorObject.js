export default function* createIteratorObject(report) {
    const arr = [];
    for (const department in report.allEmployees) {
        for (const employee of report.allEmployees[department]) {
            yield employee;
        }
    }
    return arr[Symbol.iterator]();
}
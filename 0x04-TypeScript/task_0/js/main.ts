interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: 'Ernest',
    lastName: 'Essien',
    age: 23,
    location: 'Amsterdam'
}
let student2: Student = {
    firstName: 'Yvonne',
    lastName: 'Njeri',
    age: 24,
    location: 'Nigeria'
}

let studentList: Student[] = [student1, student2];

let table: HTMLTableElement = document.createElement('table');
studentList.forEach((student) => {
    let row: HTMLTableRowElement = table.insertRow();
    let cell1: HTMLTableCellElement = row.insertCell();
    let cell2: HTMLTableCellElement = row.insertCell();
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});

document.body.appendChild(table);
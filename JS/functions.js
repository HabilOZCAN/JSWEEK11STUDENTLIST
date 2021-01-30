/**
 * implemented by habilozcan@gmail.com
 */
const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputAge = document.getElementById('age');
const inputStudentnumber = document.getElementById('studentnumber');
const studentsList = [];

function inputCheck(pString) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]/;
    if (format.test(pString)) {
        return "";
    } else {
        return pString;
    }
}

function addStudents() {
    let tempName = inputCheck(inputName.value);
    tempName = tempName.toUpperCase();
    let tempSurname = inputCheck(inputSurname.value);
    tempSurname = tempSurname.toUpperCase();
    let tempAge = inputAge.value;
    let tempStudentNumber = inputStudentnumber.value;

    if (studentsList.length > 0 && studentsList.some(item => (item.StudentNumber === tempStudentNumber))) {
        alert("please control the student number");
    } else if (tempName.length < 1 || tempSurname < 1 || tempAge < 0 || tempAge.length < 1 || tempStudentNumber < 0 || tempStudentNumber.length < 1) {
        alert("please contrall all inputs");
    } else {
        studentsList.push({
            Name: tempName,
            Surname: tempSurname,
            Age: tempAge,
            StudentNumber: tempStudentNumber
        });
        appendStudentList(studentsList);
    }

    inputName.value = "";
    inputSurname.value = "";
    inputAge.value = "";
    inputStudentnumber.value = "";
}

function deleteStudentInfo(pEvent) {
    let button = pEvent.target;
    let index = button.id;
    if (pEvent.target.nodeName.toLowerCase() === "button") {
        studentsList.splice(index, 1);
    }
    appendStudentList(studentsList);
}

function appendStudentList(pStudentsList) {
    let parentDiv = document.getElementsByClassName('student-list')[0];
    parentDiv.innerHTML = "";
    parentDiv.innerHTML = `
                            <i class="fa fa-book"></i>
                            <div>
                                <p>Name</p>
                                <p>Surname</p>
                                <p>Age</p>
                            </div>`;

    for (index = 0; index < pStudentsList.length; index++) {
        newName = pStudentsList[`${index}`].Name;
        newSurname = pStudentsList[`${index}`].Surname;
        newAge = pStudentsList[`${index}`].Age;
        newStudentnumber = pStudentsList[`${index}`].StudentNumber;
        parentDiv.innerHTML += `<div id="student-${index}">
                                    <p>${newName}</p>
                                    <p>${newSurname}</p>
                                    <p>${newAge}</p>
                                    <p>${newStudentnumber}</p>
                                    <button id=${index}>Remove</button> 
                                </div>`;
    }

    let totalNumber = pStudentsList.length;

    parentDiv.innerHTML += `
                                <div id = "total">
                                    <p>TOTAL Number : </p>
                                    <p>${totalNumber} students</p>
                                </div>
                            `
}
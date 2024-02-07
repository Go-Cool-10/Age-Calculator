let userInput = document.querySelector("#date")
userInput.max = new Date().toISOString().split("T")[0] // dd:mm:yyyy T 00:00:00
let result = document.querySelector("#result")

function calculateAge() {

    let DOB = new Date(userInput.value)
    let birthDate = DOB.getDate()
    let birthMonth = DOB.getMonth() + 1 // +1 because input month starts with 0 i.e. Jan is 0 
    let birthYear = DOB.getFullYear()

    let currentDate = new Date()
    let currDate = currentDate.getDate()
    let currMonth = currentDate.getMonth() + 1
    let currYear = currentDate.getFullYear()

    let calDate, calMonth, calYear;

    calYear = currYear - birthYear

    if (currMonth >= birthMonth) {
        calMonth = currMonth - birthMonth
    }
    else {
        calYear--;
        calMonth = 12 + currMonth - birthMonth
    }

    if (currDate >= birthDate) {
        calDate = currDate - birthDate
    }
    else {
        calMonth--;
        calDate = getDaysInMonth(calYear, calMonth) + currDate - birthDate
    }
    if (calMonth < 0) {
        calMonth = 11;
        calYear--;
    }

    result.innerHTML = `You are <span>${calYear}</span> years, <span>${calMonth}</span> months and <span>${calDate}</span> days old`
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}

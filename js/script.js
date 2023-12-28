// Define variables to hold elements
const currentDate = document.querySelector(".current-date"),
    currentDays = document.querySelector(".days"),
    prevNextIcon = document.querySelectorAll(".icons span");
const todayButton = document.getElementById('today');

// Set the date
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

// Create an array of month names
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

// Render the calendar function
const renderCalender = () => {
    let firstDayOfMonth = new Date(year, month, 1).getDay(),
        lastDateOfMonth = new Date(year, month + 1, 0).getDate(),
        lastdayOfMonth = new Date(year, month, lastDateOfMonth).getDay(),
        lastDateOfLastMonth = new Date(year, month, 0).getDate();
    let liTag = "";

    // Generate list items for the previous month
    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class = "inctive">${lastDateOfLastMonth - i + 1}</li>`;

    }

    // Generate list items for the current month
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && month === new Date().getMonth()
            && year === new Date().getFullYear() ? "active" : "";
        liTag += `<li class = "${isToday}">${i}</li>`;
    }

    // Generate list items for the next month
    for (let i = lastdayOfMonth; i < 6; i++) {
        liTag += `<li class = "inctive">${i - lastdayOfMonth + 1}</li>`;

    }

    // Display the calendar
    currentDate.innerHTML = `${months[month]} ${year}`
    currentDays.innerHTML = liTag;
}

// Render the calendar for the current month
renderCalender();

// Add event listeners to navigate between months
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id.includes("next")) {
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
        }
        if (icon.id.includes("prev")) {
            month--;
            if (month < 0) {
                month = 11;
                year--;
            }
        }
        renderCalender();
    });

});

// Add event listener to navigate to today's date
todayButton.addEventListener('click', () => {
    const today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    renderCalender();
});




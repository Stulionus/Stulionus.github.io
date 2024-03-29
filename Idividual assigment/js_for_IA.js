
//Simple function that cycles trough image by adding one to the variable and goes back when done
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

//JS for calendar 
//Getting the curent date
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
//var get last day of previous month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();
//counts how many days from last months to display 
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;
//Arrat that displays counts months properly
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

function notification() {
  alert("You have succsefuly book an advventure!");
}
  

var floatvar = "";

var numArr = [
  {
    "number": 1,
    "text": "10:00",
    "active": false
  },
  {
    "number": 2,
    "text": "11:00",
    "active": false
  },
  {
    "number": 3,
    "text": "12:00",
    "active": false
  },
  {
    "number": 4,
    "text": "13:00",
    "active": false
  },
  {
    "number": 5,
    "text": "14:00",
    "active": false
  },
  {
    "number": 6,
    "text": "15:00",
    "active": false
  },
  {
    "number": 7,
    "text": "16:00",
    "active": false
  },
  {
    "number": 9,
    "text": "17:00",
    "active": false
  },
  {
    "number": 1,
    "text": "18:00",
    "active": false
  },
]

document.getElementById("timetable").innerHTML(numArr.text);
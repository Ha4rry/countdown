
const d = new Date();
const day = d.getDate();
const month = d.getMonth();
const year = 2026;

const cut = (new Date(year, month, day)).getTime()


const td = d.getTime()



const list = [
    {"subject": "English Literature",
    "day":11,
    "month":5,
    "paperNumber": 1,
    "urgency":2},

    {"subject": "Biology",
    "day":12,
    "month":5,
    "paperNumber": 1,
    "urgency":2},
    {"subject": "Geography",
    "day":13,
    "month":5,
    "paperNumber": 1,
    "urgency":2},
    {"subject": "Computer Science",
    "day":13,
    "month":5,
    "paperNumber": 1,
    "urgency":3},
    {"subject": "Maths",
    "day":14,
    "month":5,
    "paperNumber": 1,
    "urgency":0},
    {"subject": "Chemistry",
    "day":18,
    "month":5,
    "paperNumber": 1,
    "urgency":2},
    {"subject": "English Literature",
    "day":19,
    "month":5,
    "paperNumber": 2,
    "urgency":2},
    {"subject": "Computer Science",
    "day":19,
    "month":5,
    "paperNumber": 2,
    "urgency":3},

    {"subject": "English Language",
    "day":21,
    "month":5,
    "paperNumber": 1,
    "urgency":3},

    {"subject": "Physics",
    "day":2,
    "month":6,
    "paperNumber": 1,
    "urgency":3},
    {"subject": "Maths",
    "day":3,
    "month":6,
    "paperNumber": 2,
    "urgency":0},
    {"subject": "Geography",
    "day":3,
    "month":6,
    "paperNumber": 2,
    "urgency":2},
    {"subject": "English Language",
    "day":5,
    "month":6,
    "paperNumber": 2,
    "urgency":3},

    {"subject": "Biology",
    "day":8,
    "month":6,
    "paperNumber": 2,
    "urgency":2},
    {"subject": "Further Maths",
    "day":8,
    "month":6,
    "paperNumber": 1,
    "urgency":0},
    {"subject": "Spanish Listening & Reading",
    "day":9,
    "month":6,
    "paperNumber": 0,
    "urgency":2},
    {"subject": "Maths",
    "day":10,
    "month":6,
    "paperNumber": 3,
    "urgency":0},
    {"subject": "DT",
    "day":10,
    "month":6,
    "paperNumber": 0,
    "urgency":2},
    {"subject": "Geography",
    "day":11,
    "month":6,
    "paperNumber": 3,
    "urgency":2},
    {"subject": "Chemistry",
    "day":12,
    "month":6,
    "paperNumber": 2,
    "urgency":2},
    {"subject": "Physics",
    "day":15,
    "month":6,
    "paperNumber": 2,
    "urgency":3},
    {"subject": "Further Maths",
    "day":15,
    "month":6,
    "paperNumber": 2,
    "urgency":0},
    {"subject": "Spanish Writing",
    "day":16,
    "month":6,
    "paperNumber": 0,
    "urgency":2},
];

const colours = ["white", "lightgreen", "orange", "red"];
let ExamUnixTime;
let monthText;
let weeksUntil;
let daysUntilAfterWeeks;
let dte;
let months =["January","February","March","April","May","June","July","August","September","October","November","December"]
for (const element of list) {
    ExamUnixTime = (new Date(year, element["month"]-1, element["day"])).getTime();
    dte = (ExamUnixTime - cut)/86400000;
    if (dte >= 0) {
        weeksUntil = Math.floor(dte/7);
        daysUntilAfterWeeks = dte % 7;
        monthText = months[element["month"]-1]

        
        box = document.createElement("div");
        ul = document.createElement("ul");
        if (element["paperNumber"] !== 0) {
            ul.innerHTML += `<li>${element["subject"]} (Paper ${element["paperNumber"]})</li>\n`;
        } else {
            ul.innerHTML += `<li>${element["subject"]}</li>\n`;
        }
        
        ul.innerHTML += `<li>${element["day"]} ${monthText}</li>\n`;
        ul.innerHTML += `<li>In <b>${dte}</b> days (${weeksUntil} weeks and ${daysUntilAfterWeeks} days)</li>\n`;
        // p.innerText = element["subject"] + " " + element["paperNumber"] + " " + dte + " Days to go!!";
        colour = colours[element["urgency"]];
        box.style.backgroundColor = colour
        if (colour === "red") {
            ul.style.color = "white"; // this is a bit rubbish, i should probably be setting the style of the li's.... (too much effort tho)
        };
        box.appendChild(ul);
        document.getElementById("Container").append(box);
    }

}




var data = [
    {
        courseCode: "QAWEBUI",
        courseTitle: "Developing Web Applications using HTML5",
        duration: 5,
        cost: 2000,
        prereqs: ["HTML", "CSS", "JavaScript"]
    },
    {
        courseCode: "QAWEBCSS",
        courseTitle: "Developing Responsive Web Applications",
        duration: 5,
        cost: 2000,
        prereqs: ["CSS", "HTML"]
    },
    {
        courseCode: "QAUXFUND",
        courseTitle: "User Experience Fundamentals",
        duration: 4,
        cost: 1700,
        prereqs: []
    },
];

function verifyKeys(data, stringPrefix) {
    for (var i = 0; i < data.length; i++) {
        var courseCode = data[i].courseCode;

        if (data[i].indexOf(stringPrefix) == 0) {
            //starts with the desired prefix, good
            console.log(courseCode + " verified");
        } else {
            console.log(courseCode + " does not start with " + stringPrefix);
        }
    }
}

verifyKeys(data, "QA");


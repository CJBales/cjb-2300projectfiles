const selects = document.getElementsByTagName("SELECT");
const inputs = document.getElementsByTagName("INPUT");
const userRows = document.getElementsByClassName("user-row");


let item1 = [];
let item2 = [];
let item3 = [];
let item4 = [];
let item5 = [];

let user1 = [];
let user2 = [];
let user3 = [];

let userRow1 = [];
let userRow2 = [];
let userRow3 = [];

for(let i = 1; i < selects.length + 1; i++) {
    selects[i - 1].setAttribute("id", "select" + i);
    if(i <= 5) {
        item1.push(document.getElementById("select" + i));
    }
    else if (i <= 10) {
        item2.push(document.getElementById("select" + i));
    }
    else if (i <= 15) {
        item3.push(document.getElementById("select" + i));
    }
    else if (i <= 20) {
        item4.push(document.getElementById("select" + i));
    }
    else {
        item5.push(document.getElementById("select" + i));
    }
}

for(let i = 1; i < inputs.length + 1; i++) {
    inputs[i - 1].setAttribute("id", "input" + i);

    if (i <= 5) {
        user1.push(document.getElementById("input" + i));
    }
    else if (i <= 10) {
        user2.push(document.getElementById("input" + i));
    }
    else {
        user3.push(document.getElementById("input" + i));
    }
}

for(let i = 0; i < userRows.length; i++) {
    for(let j = 1; j < userRows[i].children.length; j++) {
        const row = userRows[i].children[j];
        row.setAttribute("id", "user" + i + "-score" + j);
        switch(i) {
            case 0:
                userRow1.push(row);
                break;
            case 1:
                userRow2.push(row);
                break;
            case 2:
                userRow3.push(row);
                break;
        }
    }
}

function doMultiplication() {
    const items = [item1, item2, item3, item4, item5];
    const users = [user1, user2, user3];
    const rows = [userRow1, userRow2, userRow3];

    let userScores = [];

    for(k = 0; k < users.length; k++) {
        let userScore = [];
        for (i = 0; i < items.length; i++) {
            let score = 0;
            for(let j = 0; j < user1.length; j++) {
                if(users[k][j].value == "" || !Number.isInteger((Number.parseInt(user1[j].value)))) {
                    alert("You have an empty or non-numerical value");
                    return
                } else {
                    score += (users[k][j].value * items[i][j].value) * 0.01;
                }
            }
            userScore.push(score.toFixed(2));
        }
        userScores.push(userScore);
    }

    for (i = 0; i < rows.length; i++) {
        for(j = 0; j < rows[i].length; j++) {
            if (Math.max(...userScores[i]) == userScores[i][j]) {
                rows[i][j].style.backgroundColor = "green";
            }
            if (Math.min(...userScores[i]) == userScores[i][j]) {
                rows[i][j].style.backgroundColor = "red";
            }
            rows[i][j].innerHTML = userScores[i][j];
        }
    }
}
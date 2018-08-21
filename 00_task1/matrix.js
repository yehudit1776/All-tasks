var table = document.getElementById("tbody");
function createTables() {
    document.getElementById("tbody").innerHTML = "";

    let row;
    for (i = 0; i < 3; i++) {
        table = document.getElementById("tbody");
        table.innerHTML += `<tr id="r${i}" ></tr>`
        row = document.getElementById("r" + i);
        row.innerHTML = "";
        for (j = 0; j < 3; j++) {
            row.innerHTML += `<td class="r${i}"></td>`
        }
    }
}

function border() {

    let length = document.getElementById("tbody").children.length;
    table = document.getElementById("tbody");
    for (i = 0; i < length; i++) {

        for (j = 0; j < length; j++) {
            table.children[i].children[j].classList.remove("backgroundLinear");
            console.log(table.children[i].children[j]);
            if (i == 0 || j == 0 || i == length - 1 || j == length - 1)
                table.children[i].children[j].classList.add("backgroundLinear");
        }
    }
}


function ApperPart() {

    let length = document.getElementById("tbody").children.length;
    table = document.getElementById("tbody");
    for (i = 0; i < length; i++) {

        for (j = 0; j < length; j++) {
            table.children[i].children[j].classList.remove("backgroundLinear");
            console.log(table.children[i].children[j]);
            if (i == j || j > i)
                table.children[i].children[j].classList.add("backgroundLinear");
        }
    }
}



function Diagonals() {

    let length = document.getElementById("tbody").children.length;
    table = document.getElementById("tbody");
    for (i = 0; i < length; i++) {

        for (j = 0; j < length; j++) {
            table.children[i].children[j].classList.remove("backgroundLinear");
            console.log(table.children[i].children[j]);
            if (i == j || i + j == length - 1)
                table.children[i].children[j].classList.add("backgroundLinear");
        }
    }
}



function DownPart() {

    let length = document.getElementById("tbody").children.length;
    table = document.getElementById("tbody");
    for (i = 0; i < length; i++) {

        for (j = 0; j < length; j++) {
            table.children[i].children[j].classList.remove("backgroundLinear");
            console.log(table.children[i].children[j]);
            if (i == j || i > j)
                table.children[i].children[j].classList.add("backgroundLinear");                                                                                                                                
        }
    }
}


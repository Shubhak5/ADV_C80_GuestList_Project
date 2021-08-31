var displayNamesWithComma = [];
var namesWithOutComma = [];
var sortedNames = [];
var names_of_people = [];

function saveNames() {
    var names = [];
    var name = document.getElementById("inpt_name").value;
    names.push(name);


    //Display enter student name 
    for (i = 0; i < names.length; i++) {
        displayNamesWithComma.push('<h4>' + names[i] + '</h4>');
        names_of_people.push(names[i])
    }
    console.log(displayNamesWithComma);
    document.getElementById("divDisplay_withComma").innerHTML = displayNamesWithComma;
}

function showNames() {
    namesWithOutComma = displayNamesWithComma.join("");
    console.log(namesWithOutComma);
    document.getElementById("divDisplay").innerHTML = namesWithOutComma;
}

function sortNames() {
    sortedNames = displayNamesWithComma.sort();
    console.log(sortedNames);
    sortedNames = sortedNames.join("");
    document.getElementById("divSortedNames").innerHTML = sortedNames;
}

function searchName() {
    var search_name = document.getElementById("inptSearch").value;
    var found = 0;
    console.log(search_name);
    console.log(names_of_people);
    for (i = 0; i < names_of_people.length; i++) {
        console.log(names_of_people[i]);
        if (search_name == names_of_people[i]) {
            found = found + 1;
        }
    }
    document.getElementById("divSearchNames").innerHTML = "Name Found " + found + " time/s";
    console.log("Name Found " + found + " time/s");
}
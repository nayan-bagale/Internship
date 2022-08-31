viewall()
function rowselect(){
    var trs = document.querySelectorAll("tr");
    for (var i = 0; i < trs.length; i++)
        (function (e) {
        trs[e].addEventListener("click", function () {
            console.log({
            "FirstName": this.querySelectorAll("*")[0].innerHTML.trim(),
            "LastName": this.querySelectorAll("*")[1].innerHTML.trim(),
            });
        }, false);
    })(i);
}

function inputData(){
    let studID = document.getElementById("id").value
    let marks = document.getElementById("Marks").value
    if (studID != '' & marks !=''){
        insert(studID, marks)
        postreq(studID, marks)
    }
}

function insert(studID, marks){
    let addTag = `<tr><td>${studID}</td><td>${marks}</td></tr>`;
    document.getElementById("td-list").innerHTML += addTag;
    defaultValue()
}

function defaultValue(){
    document.getElementById("id").value = ""
    document.getElementById("Marks").value = ""
}

async function viewall(){
    const responce = await fetch("https://API.nayanbagale.repl.co")
    const json = await responce.json()
    console.log(json)
    for(let i = 0; i < json.length; i++){
        try {
            insert(json[i].studID, json[i].marks)    
        } catch (error) {
            console.log(error)
            
        }
    }
}

function postreq(studID, marks){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://API.nayanbagale.repl.co/post/json", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "studID": studID,
        "marks": marks
    }));
}


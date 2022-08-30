

function inputData(){
    let studID = document.getElementById("id").value
    let marks = document.getElementById("Marks").value
    if (studID != '' & marks !=''){
        insert(studID, marks)
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
    const responce = await fetch("https://API.nayanbagale.repl.co/all")
    const json = await responce.json()
    for(let i = 0; i <= json.length; i++){
        insert(json[i].studID, json[i].marks)
    }
}

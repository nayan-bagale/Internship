
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
        localStorage.setItem(studID, marks);
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

function update(){
    let studID = document.getElementById("id").value
    let marks = document.getElementById("Marks").value
    if(studID == '' & marks ==''){
        defaultValue()
        console.log('Enter The studID to update');
        return 1
    }
    console.log(studID)
    var trs = document.querySelectorAll("tr");
    for (var i = 0; i < trs.length; i++)
        (function (e) {
           let id = trs[e].querySelectorAll("*")[0].innerHTML.trim();
           if(studID == id){
            console.log(id)
            trs[e].querySelectorAll("*")[1].innerHTML = marks;
            localStorage.setItem(studID, marks);
            defaultValue()
           }
    })(i);
}

function deletedata(){
    let studID = document.getElementById("id").value
    if(studID == ''){
        defaultValue()
        console.log('Enter The studID to remove');
        return 1
    }
    console.log(studID)
    var trs = document.querySelectorAll("tr");
    for (var i = 0; i < trs.length; i++)
        (function (e) {
           let id = trs[e].querySelectorAll("*")[0].innerHTML.trim();
           if(studID == id){
            console.log(id)
            trs[e].remove();
            localStorage.removeItem(studID);
            defaultValue()
           }
    })(i);

}

function viewallLocal(){
    let len =localStorage.length;
    for(let i = 0; i<len; i++ ){
        var studID = localStorage.key(i);
        var marks = localStorage.getItem(studID);
        insert(studID, marks)
        console.log(studID, marks)
    }
}

function dropdata(){
    localStorage.clear();
}

// async function viewall(){
//     const responce = await fetch("https://API.nayanbagale.repl.co")
//     const json = await responce.json()
//     console.log(json)
//     for(let i = 0; i < json.length; i++){
//         try {
//             insert(json[i].studID, json[i].marks)    
//         } catch (error) {
//             console.log(error)
            
//         }
//     }
// }

// function postreq(studID, marks){
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://API.nayanbagale.repl.co/post/json", true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify({
//         "studID": studID,
//         "marks": marks
//     }));
// }
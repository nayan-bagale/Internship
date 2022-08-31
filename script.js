function rowselect(){
    var trs = document.querySelectorAll("tr");
    for (var i = 0; i < trs.length; i++)
        (function (e) {
        trs[e].addEventListener("click", function () {
            let id = this.querySelectorAll("*")[0].innerHTML.trim()
            let marks = this.querySelectorAll("*")[1].innerHTML.trim()
            document.getElementById("id").value = id
            document.getElementById("Marks").value = marks
        }, false);
    })(i);
}

function inputData(){
    let studID = document.getElementById("id").value
    let marks = document.getElementById("Marks").value
    if (studID != '' & marks !=''){
        if(localStorage.getItem(studID) == null){
            insert(studID, marks)
            let x = localStorage.setItem(studID, marks);
        }else{
            alert("StudentID Already Exist.")
            defaultValue()
        }
    }else{
        alert('Enter The studID with marks to Insert');
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
    rowselect()
}

function update(){
    let studID = document.getElementById("id").value
    let marks = document.getElementById("Marks").value
    if(studID == '' | marks ==''){
        defaultValue()
        alert('Enter The studID with marks to update');
        return false
    }
    console.log(studID, marks)
    var trs = document.querySelectorAll("tr");
    var count = 0
    for (var i = 0; i < trs.length; i++)
        (function (e) {
           let id = trs[e].querySelectorAll("*")[0].innerHTML.trim();
           if(studID == id){
            console.log(id)
            trs[e].querySelectorAll("*")[1].innerHTML = marks;
            localStorage.setItem(studID, marks);
            defaultValue()   
           }else count += 1;

    })(i);
    if(count == trs.length) alert("StudentID Not Exist")
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
    var trs = document.querySelectorAll("tr");
    for (var i = 2; i < trs.length; i++)
        (function (e) {
            trs[e].remove();

    })(i)
    for(let i = 0; i<len; i++ ){
        var studID = localStorage.key(i);
        var marks = localStorage.getItem(studID);
        insert(studID, marks)
    }
}

function dropdata(){
    localStorage.clear();
    viewallLocal()
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
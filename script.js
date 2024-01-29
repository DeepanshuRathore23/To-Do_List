let addBtn = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");
// let main = document.querySelector("#main");
// main.style.height = 40 + "vh";
// let h = main.style.height;

addBtn.addEventListener("click",function(){
    let note = document.querySelector("#input").value;

    let newUl = document.createElement("ul");
    let newP = document.createElement("p");
    let crossIcon = document.createElement("img");    

    newP.innerHTML = note;

    crossIcon.id = "cross-icon";
    crossIcon.src = "cross-icon.png"

    newUl.appendChild(newP);
    newUl.appendChild(crossIcon);

    taskList.appendChild(newUl);

    //increasing height when item is addedd
    // h = parseInt(h) + 10 + "vh";
    // main.style.height = h;

    saveData();
    document.querySelector("#input").value  = "";
})

taskList.addEventListener("click",function(event){
    if(event.target.id === "cross-icon"){        
        taskItem = event.target.closest("ul");

        if(taskItem){
            taskItem.remove();
            localStorage.removeItem(taskItem.innerHTML)
            saveData();         
            
        }
    }   
    
});


function saveData(){
    localStorage.setItem("Data",taskList.innerHTML);
}

function showData(){
    taskList.innerHTML = localStorage.getItem("Data");
}


showData();



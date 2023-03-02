const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();



function eventListeners() {

    //submit event
    form.addEventListener("submit", addNewItem)
    //delete item

    taskList.addEventListener("click", deleteItem);

    //delete All
    btnDeleteAll.addEventListener("click",DeleteAllItems);
}

function addNewItem(e) {

    if (input.value == '') {
        alert("add new item");
        //console.log("submit");

    }
    // li oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary"
    li.appendChild(document.createTextNode(input.value));


    //a oluşturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);

    taskList.appendChild(li);

    input.value = "";

    e.preventDefault();
}

// Silme

function deleteItem(e) {

    if (e.target.className === "fas fa-times") {

        e.target.parentElement.parentElement.remove();
    }

}

// All delete

function DeleteAllItems(e){

      if(confirm("Tüm elemanları silmek istediğinize emin misiniz ?")) {
        taskList.childNodes.forEach(function(item){
            if(item.nodeType===1){
                item.remove();
            }
        })
      }   
}


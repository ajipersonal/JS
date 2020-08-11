var array=["val1","val2","val3"];
var array1=["second1","second2","second3"];
var concatenated = array.concat(array1);
// array1.unshift("addedToBeginning");
// array1.push("addedtToEnd");
// array1.splice(1,0,"elementAtFirst");
// array1.splice(3,2,"newlyAdded");

var userObj = {
    name:"Aji Sukumar",
    Age: 44,
    Sex:"Male",
    Address:"Sarjapur road"
}
array.forEach(element => {
    console.log(element);
});

array.forEach(function (i){
    console.log(i);
});
const first = () => {
    var greet = "hello";
    const second = () => {
        //alert (greet);
    }
    return second;
};

const newFunc = first();
newFunc();

let sampleArray = ["reading","listening","watching"];

let sampleMap = sampleArray.reduce ((acc, val) =>{
    return acc+val.length;
},0);

class Lists{
    constructor(title,content){
        this.title = title;
        this.content=content;
        console.log(this);
    }
    show(){
        console.log("the title is" + this.title);
    }
}

class TodoList extends Lists{
    constructor(title,content){
        super(title,content);
    
    }
    showToDoList(){
        console.log("this is the todoList class")
    }
}

const todolist = new TodoList("morning","brushing teeth");
todolist.showToDoList();
todolist.show();
const mylist = new Lists("list Title","list content");
mylist.show();

document.getElementById("displayResult").innerText= sampleMap;


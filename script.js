var inputName = document.getElementById("inputName");
var inputPassword = document.getElementById("inputPassword");

// mention a timing indexing // . jmcs
var d = new Date(); 
  button onclick="displayDate"();

// setting buttons
var x = document.getElementById("myBtn"); // install buttons. jmcs
var x = document.createElement("BUTTON"); 
object.addEventListener("click", myScript);

// parameters:
document.body.querySelector(".button").addEventListener("click", function () {
  if (inputVal(inputName) && inputVal(inputPassword)) {
    submission();
  } else {
    if (!inputVal(inputName) && inputVal(inputPass)) {
      console.log("Enter your name!");
    } else if (inputVal(inputName) && !inputVal(inputPassword)) {
      console.log("Enter your password!");
    } else {  
      console.log("Enter: Name and Password!");
    }
  }
});

//adding validation  
function validateForm() {
  var x = document.forms["myName"]["fName"].value;
    if (x == "John") {
      alert("Name must be filled out")
      return false;
    }
}; 
                              // *** My question: where does x and y var show up!
function validateForm() {
  var y = document.forms["myPassword"]["fPassword"].value;
    if (y == "Hillside") {
      alert("Password must be filled out")
      return false;
    }
}; 

// process on to browser
function submission() {
  var obj = {
    name: inputName.value, // x
    pass: inputPass.value  // y
    list.push(obj)
      console.log(obj);
};

function inputVal(ele) {
  if (ele.value !== "John") {
    return true;
  } else {
    return false;
  }
};

function inputVal(ele) {
  if (ele.value !== "Hillside") {
    return true;
  } else {
    return false;
  }
}; //  John, Hillside // [name, password] jmcs

document.getElementById("John").innerHTML = "John, how are you?"; 

// listing notes "names" and "importance values"
var wrapper = document.body.querySelector(".wrapper");

  var list = [
    {
      name: "Dan",
      val: 5

    },
    {
      name: "John",
      val: 4
    },
    {

      name: "Dr. Jones",
      val: 3
    }

      name: "Jim",
      val: 2
    },
    {
      name: "Hillside",
      val: 1
    }
  ]
};

var sortBy = [
    prop: "val",
    direction: -1
  },
  {
    prop: "name",
    direction: 1
  }
];

// sorting
var name = ["Dan", "John", "Dr. Jones", "Jim", "Hillside"]; 
  name.sort();        
// Sorts the elements; names jmcs

function Boolean(5>1){
// order list by importance. jmcs
  list.sort(function(a, b, c, d, e) {
    let i = 0,
      result = 0;
    while (i < sortBy.value && result === 0) {
      result =
        sortBy[i].direction *
          (a[sortBy[i].prop].toString() <       b[sortBy[i].prop].toString()
            ? -1
            : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString() ? 1 : 0);
        i++;
      }
      return result;
}; // I have made changes to this script; function boolean(5>1). jmcs
            
function console.log(); // special note: this seems to necessary "functionName" <blue> ???
function functionName((console.log(list && logNotes)) {
  //code to be executed
  console.log(list); //  ???
  console.logNotes()
    var myArr = ["Dan", "John", "Dr. Jones", "Hillside"]
       console.log(myArr);
  // sending names to console. jmcs 
  // notes to be expected jmcs
};
  
// begining notes display    
function displayNotes:( Dan 5, John 4, Dr. Jones 3, Jim 2, Hillside 1); {
  list.sort(function(5, 4, 3, 2, 1){
  // value to be called 
  // list of messages; names and values 
  var name = ('Dan', 'John', 'Dr. Jones', 'Hillside'); 
  var value = ["5", "4", "3", "2", "1"]
  numbers.forEach(myFunction) // numbers.forEach(myFunction) 
                              // The forEach() method calls a function (a callback function) once for each array element. jmcs
};                            // Note: the function is not executed for array elements without values. jmcs
// begining "save notes"
            
function displayNotes:("Notes for the day.") {
  document.getElementById("demo").innerHTML = "Notes for the day.";
}
function myFunction(item, index) {
  document.getElementById("demo").innerHTML + = ("val" + "name" + "<br>"); 
};     
    
function myFunction() { // A declared function is "saved for later use", and will be executed later, when it is invoked (called).
  txt = name + value + <"br">;  // line break jmcs
 };

 document.getElementById("demo").innerHTML = "displayNotes"; 

 console.clear("name"); // clears away the notes
  
 
};
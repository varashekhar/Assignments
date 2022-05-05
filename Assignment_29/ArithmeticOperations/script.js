document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector("#firstn").value = "";
  document.querySelector("#secondn").value = "";

  document.querySelector("#resultblock").style.display = "none";

  document.querySelector("#mresultblock").style.display = "none";

  document.querySelector("#sbresultblock").style.display = "none";

  document.querySelector("#dvresultblock").style.display = "none";
});

var addnumbers = () => {
  document.querySelector("#resultblock").style.display = "block";
  var first = document.querySelector("#firstn").value;
  var second = document.querySelector("#secondn").value;

  first = parseInt(first);
  second = parseInt(second);

  var sum = first + second;
  document.querySelector("#sblock").innerHTML = sum;
};
var multinumbers = () => {
  document.querySelector("#mresultblock").style.display = "block";
  var first = document.querySelector("#firstn").value;
  var second = document.querySelector("#secondn").value;

  first = parseInt(first);
  second = parseInt(second);

  var multi = first * second;
  document.querySelector("#mblock").innerHTML = multi;
};

var subtractnumbers = () => {
  document.querySelector("#sbresultblock").style.display = "block";
  var first = document.querySelector("#firstn").value;
  var second = document.querySelector("#secondn").value;

  first = parseInt(first);
  second = parseInt(second);

  var sub = first - second;
  document.querySelector("#sbblock").innerHTML = sub;
};
var dividnumbers = () => {
  document.querySelector("#dvresultblock").style.display = "block";
  var first = document.querySelector("#firstn").value;
  var second = document.querySelector("#secondn").value;

  first = parseInt(first);
  second = parseInt(second);

  var divi = first / second;
  document.querySelector("#dvblock").innerHTML = divi;
};
var validateData = (event) => {
  console.log(event);
  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  } else {
    return false;
  }
};

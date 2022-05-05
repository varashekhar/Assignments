var number = 0;
function createTable (){
    number++;
    readData();
    errorMsg();
    
    
var trtag = document.createElement("tr");
var trrow = "tr" + number;
trtag.setAttribute("class", "trrow");
var tdtag = document.createElement("td");
tdtag.setAttribute("class", "tdtag");
tdtag.innerHTML = number;
trtag.append(tdtag);


var tdtag2 = document.createElement("td");
tdtag2.setAttribute("class", "tdtag");
tdtag2.innerText = sdata.name;
trtag.append(tdtag2);


var tdtag3 = document.createElement("td");
tdtag3.setAttribute("class", "tdtag");
tdtag3.innerHTML = sdata.age;
trtag.append(tdtag3);


var tdtag4 = document.createElement("td");
tdtag4.setAttribute("class", "tdtag");
tdtag4.innerHTML = sdata.gender;
trtag.append(tdtag4);


var tdtag5 = document.createElement("td");
tdtag5.setAttribute("class", "tdtag");
tdtag5.innerHTML = sdata.country;
trtag.append(tdtag5);


var tdtag6 = document.createElement("td");
tdtag6.setAttribute("class", "tdtag");
tdtag6.innerHTML = sdata.contact;
trtag.append(tdtag6);


var tdtag7 = document.createElement("td");
tdtag7.setAttribute("class", "tdtag");
tdtag7.innerHTML = sdata.address;
trtag.append(tdtag7);


var tdtag8 = document.createElement("td");
var btntag = document.createElement("button");
btntag.setAttribute("class", "edit_btn");
var btnText = document.createTextNode('Edit');
tdtag8.setAttribute("class", "tdtag");
trtag.append(tdtag8);
tdtag8.append(btntag);
btntag.append(btnText);

var btntag1 = document.createElement("button");
var btnText1 = document.createTextNode('Delete');
btntag1.setAttribute("class", "delete_btn");
trtag.append(tdtag8);
tdtag8.append(btntag1, );
btntag1.append(btnText1);

document.querySelector("#tablebody").append(trtag);

}
var readData = ()=> {
    document.querySelector(".section_container").style.display = 'block';
    sdata = {};
    sdata.name = document.querySelector("#sname").value;
    document.querySelector("#sname").value = '';
    if(sdata.name == ''){
        document.querySelector(".nameErr").style.display = 'block';
    } else{
        document.querySelector(".nameErr").style.display = 'none';
    }
    sdata.age = document.querySelector("#sage").value;
    document.querySelector("#sage").value = '';
    if(sdata.age == ''){
        document.querySelector(".ageErr").style.display = 'block';
    } else{
        document.querySelector(".ageErr").style.display = 'none';
    }
    sdata.gender = document.querySelector("input[name = gend]:checked").value;

    sdata.country = document.querySelector("#scountry").value;
    document.querySelector("#scountry").value = '';
    if (sdata.country == '') {
        document.querySelector(".countryErr").style.display = 'block';
            
    } else {
        document.querySelector(".countryErr").style.display = 'none';
    }
  
    sdata.contact = document.querySelector("#scontact").value;
    document.querySelector("#scontact").value = '';
    if(sdata.contact == ''){
        document.querySelector(".contactErr").style.display = 'block';
    } else{
        document.querySelector(".contactErr").style.display = 'none';
    }
    sdata.address = document.querySelector("#saddress").value;
    document.querySelector("#saddress").value = '';
    if(sdata.address == ''){
        document.querySelector(".addErr").style.display = 'block';
    } else{
        document.querySelector(".addErr").style.display = 'none';
    }
}
var data = function (event){
    if(event.charCode >= 65 && event.charCode <= 122){
        return true;
    } else{
        return false;
    }
}
var ageData = function(event){
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
    } else{
        return false;
    }
}
var contactData = function(event){
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
    } else{
        return false;
    }
}
var errorMsg = function () {
  
        if (sdata.name == '') {
        document.querySelector("input[name = btn]:disabled").value;
    } else if (sdata.age == '') {
        document.querySelector("input[name = btn]:disabled").value;
    } else if (sdata.country == '') {
        document.querySelector("input[name = btn]:disabled").value;
    } else if (sdata.contact == '') {
        document.querySelector("input[name = btn]:disabled").value;
    } else if (sdata.address == '') {
        document.querySelector("input[name = btn]:disabled").value;
    } else {
        document.querySelector(".btn").value;
    }

}
// var resetBoxes = function () {
   
// }

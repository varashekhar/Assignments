function employeeDetails() {
    var empData = {};
    empData.name = document.querySelector("#name").value;
    if(empData.name == ''){
        document.querySelector(".nameErr").style.display = 'block';
    }else{
        document.querySelector(".nameErr").style.display = 'none';
       
    }
    empData.gender = document.querySelector("input[name = gend]:checked").value;
    empData.age = document.querySelector("#age").value;
    if(empData.age == ''){
        document.querySelector(".ageErr").style.display = 'block'
    }else{
        document.querySelector(".ageErr").style.display = 'none'
    }

    empData.basicSalary = document.querySelector("#basic_salary").value;
    if(empData.basicSalary == ''){
        document.querySelector(".salaryErr").style.display = 'block'
    }else{
        document.querySelector(".salaryErr").style.display = 'none'
    }
    empData.department = document.querySelector("#depart").value;
    if(empData.department == ''){
        document.querySelector(".depErr").style.display = 'block';
    }else{
        document.querySelector(".depErr").style.display = 'none';
    }

    empData.pf = function () {
        this.pf = (14 / 100) * this.basicSalary;
        this.pf = parseInt(this.pf)
    }
    empData.hra = function () {
        this.hra = (25 / 100) * this.basicSalary;
        this.hra = parseInt(this.hra)
    }
    empData.totalSalary = function () {
        this.totalSalary = this.basicSalary - this.pf - this.hra;
        this.totalSalary = parseInt(this.totalSalary)
    }
    empData.display = function () {
        document.querySelector(".idcard").style.display = 'block'
        empData.pf();
        empData.hra();
        empData.totalSalary();

        document.querySelector("#d_name").innerText = this.name;
        document.querySelector("#d_gender").innerText = this.gender;
        document.querySelector("#d_age").innerText = this.age;
        document.querySelector("#d_bsalary").innerText = this.basicSalary;
        document.querySelector("#d_depart").innerText = this.department;
        document.querySelector("#d_pf").innerText = this.pf;
        document.querySelector("#d_hra").innerText = this.hra;
        document.querySelector("#d_tsalary").innerText = this.totalSalary;
    }
    empData.display();
   

}
var data = function(event) {
    console.log(event);
    if(event.charCode >= 65 && event.charCode <= 122 ){
        return true;
    } else{
        return false;
    }
}
var ageData = function(event){
    if(event.charCode >= 48 && event.charCode <= 57 ){
        return true;
    } else{
        return false;
    }
}
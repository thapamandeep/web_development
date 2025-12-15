const notification = document.getElementById("note");
function alowed() {
    let phonenumber = Number(document.getElementById("phnumber").value);
    let eml = document.getElementById("eMail").value;
    var fname = document.getElementById("firstName").value;
    var mname = document.getElementById("middlename").value;
    var lname = document.getElementById("lastname").value;

    var nepname = document.querySelector(".nepaliname").value;
    let gen = document.getElementById("gender").value;
    let dob = document.querySelector(".birthdate").value;
    let identy = document.getElementById("identify").value;

    let citizennumber = document.getElementById("citznno").value;
    let issued = document.getElementById("issue").value;
    let isuedate = document.getElementById("issuedate").value;

    if (phonenumber == "") {

        alert("phonenumber is required");
        return false;
    } else if (fname == "") {
        alert("first name is required");
        return false;
    } else if (mname == "") {
        alert("middlename is required");
        return false;
    } else if (lname == "") {
        alert("lastname is required");
        return false;
    } else if (nepname == "") {
        alert("nepali name is required");
        return false;
    } else if (gen == "") {
        alert("you forgot to select gender");
        return false;
    } else if (dob == "") {
        alert("you didin't enter your birthdate");
        return false;
    }else if(identy == ""){
        alert("you didn't enter your identity");
        return false;
    }  else if (citizennumber == "") {
        alert("you didn't enter your citizennumber");
        return false;
    } else if (issued == "") {
        alert("you didn't enter your citizen issue date");
        return false;
    }else if(isuedate == ""){
        alert("you didn't enter your issuedate");
        return false;
    }
    else {
       notification.innerHTML = "your form has been submited";
    }
}
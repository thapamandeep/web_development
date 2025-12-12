const collection = document.getElementById("total");
const Per = document.getElementById("output");
const comnt = document.getElementById("coment");

function got() {

    let Nepali = Number(document.getElementById("nep").value);
    let English = Number(document.getElementById("eng").value);
    let Social = Number(document.getElementById("soc").value);
    let math = Number(document.getElementById("mat").value);
    let computer = Number(document.getElementById("comp").value);
    let account = Number(document.getElementById("acc").value);
    let economics = Number(document.getElementById("eco").value);

    let added = Nepali + English + Social + math + computer + account + economics;

    collection.value = (added);

    let avg = added / 700 * 100

    Per.innerHTML = (avg);

    if (Nepali <= 40) {
        comnt.innerHTML ="you are fail in nepali subject"
        comnt.style.color = "red";
    } else if (English <= 40) {
        comnt.innerHTML="you are fail in english subject"
         comnt.style.color = "red";
    } else if (Social <= 40) {
        comnt.innerHTML="you are fail in social subject"
         comnt.style.color = "red";
    } else if (math <= 40) {
        comnt.innerHTML="you are fail in math subject"
         comnt.style.color = "red";
    } else if (computer <= 35) {
        comnt.innerHTML="you are fail in computer subject"
         comnt.style.color = "red";
    }else if(account<=40){
        comnt.innerHTML="you are fail in account subject"
         comnt.style.color = "red";
    }else if(economics<=40){
        comnt.innerHTML="you are fail in econimics"
         comnt.style.color = "red";
    }else {
        comnt.innerHTML = "you are pass "
        comnt.style.color = "green";
    }
    
}
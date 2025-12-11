const result = document.getElementById("result");

function output() {
    let sci = document.getElementById("scienceMarks").value;
    let math = document.getElementById("mathMarks").value;
    let eng = document.getElementById("englishMarks").value;
    let comp = document.getElementById("compmarks").value;
    let eco = document.getElementById("ecomarks").value;


    if (sci < 45) {
        result.innerHTML="you are fail in science";
        return false;
    } else if (math < 40) {
        result.innerHTML="you are fail math";
        return false;
    } else if (eng < 45) {
        result.innerHTML="you are fail in english";
        return false;
    } else if (comp < 45) {
       result.innerHTML="you are fail in computer";
        return false;
    } else if (eco < 40) {
       resukt.innerHTML="you are fail in economics";
        return false;
    } else {
       result.innerHTML="you are pass";
    }



}
 const bmi = document.getElementById("output");
       
        function result(){
           
            let Height = document.getElementById("He").value;
            let Weight = document.getElementById("Kg").value;

            let BMIout = Weight / (Height * Height);

            bmi.innerHTML = BMIout;
        }
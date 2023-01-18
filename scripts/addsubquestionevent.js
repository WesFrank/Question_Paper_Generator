document.getElementById("add").addEventListener("click", append);

var count = document.getElementById("subqs").getElementsByTagName("span").length+1;

function append(event) {

    event.preventDefault();

    if (count <= 10) {

        var number = document.getElementById("number");

        var num = number.options[number.selectedIndex].value;
    
        document.getElementById('num').value = num;
        
        if (parseInt(num) === 0) {

            var str = "<br><br>"
            
            +"<span>"
                +"<input id='qnum" + 1 + "." + count + "' class='qnum" + 1 + "." + count + "' name='qnum" + 1 + "_" + count + "' value='" + 1 + "." + count + "' type='text' style='width: 2%' required>"
                +"<input id='q" + 1 + "." + count + "' name='q" + 1 + "_" + count + "' type='text' style='width: 45%; position: absolute; left: 5%' required>"
                +"<input id='s" + 1 + "." + count + "' name='s" + 1 + "_" + count + "' type='text' style='width: 300px; position: absolute; left: 53%; width: 20%' required>"
                +"<input id='l" + 1 + "." + count + "' class='level' name='l" + 1 + "_" + count + "' type='number' min='1' max='4' style='width: 30px; position: absolute; left: 76%' required>"
                +"<input id='t" + 1 + "." + count + "' class='time' name='t" + 1 + "_" + count + "' type='number' min='1' max='10' style='width: 30px; position: absolute; left: 85%' required>"
                +"<input id='m" + 1 + "." + count + "' class='mark' name='m" + 1 + "_" + count + "' type='number' min='1' max='10' style='width: 30px; position: absolute; left: 94%' required>"
            +"</span>";
            
        } else if (parseInt(num) > 0) {

            var str = "<br><br>"
            
            +"<span>"
                +"<input id='qnum" + 1 + "." + count + "' class='qnum" + num + "." + count + "' name='qnum" + num + "_" + count + "' value='" + num + "." + count + "' type='text' style='width: 2%' required>"
                +"<input id='q" + 1 + "." + count + "' name='q" + num + "_" + count + "' type='text' style='width: 45%; position: absolute; left: 5%' required>"
                +"<input id='s" + 1 + "." + count + "' name='s" + num + "_" + count + "' type='text' style='width: 300px; position: absolute; left: 53%; width: 20%' required>"
                +"<input id='l" + 1 + "." + count + "' class='level' name='l" + num + "_" + count + "' type='number' min='1' max='4' style='width: 30px; position: absolute; left: 76%' required>"
                +"<input id='t" + 1 + "." + count + "' class='time' name='t" + num + "_" + count + "' type='number' min='1' max='12' style='width: 30px; position: absolute; left: 85%' required>"
                +"<input id='m" + 1 + "." + count + "' class='mark' name='m" + num + "_" + count + "' type='number' min='1' max='10' style='width: 30px; position: absolute; left: 94%' required>"
            +"</span>";

        }

        document.getElementById("subqs").insertAdjacentHTML( 'beforeend', str );

        var span_Text_Number = document.getElementById("totalMarks").innerText;

        rmv = document.getElementById("rmv");

        rmv.removeAttribute("disabled");

    } else {

        var str = "<br><br> <span> <p> Restricted to at most 10 Subquestions </p> </span>";

        document.getElementById("subqs").insertAdjacentHTML( 'beforeend', str );

        add = document.getElementById("add");

        add.setAttribute("disabled", true);

    }

    count++;

    document.getElementById("cnt").value =  parseInt(count)-1;

}
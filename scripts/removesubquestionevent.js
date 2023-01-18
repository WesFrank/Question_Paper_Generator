document.getElementById("rmv").addEventListener("click", remove);

var count = document.getElementById("subqs").getElementsByTagName("span").length+1;

function remove(event) {

    event.preventDefault();

    if (count===2) {

        // Do Nothing

    } else if(count>2) {

        if (count===3) {

            rmv = document.getElementById("rmv");

            rmv.setAttribute("disabled", true);

        }

        add = document.getElementById("add");

        add.removeAttribute("disabled")

        count--;

        document.getElementById("cnt").value = parseInt(count) - 1;

        var span_Text_Number = document.getElementById("totalMarks").innerText;

        var span_Number = parseInt(span_Text_Number);

        var lastMark = document.getElementById("subqs").lastElementChild.lastElementChild.value;

        var min = parseInt(lastMark);

        if (Number.isNaN(min) === true) {

            // Do Noting ...

        } else if (Number.isNaN(min) === false) {

            var total = span_Number - min;

            var tot = parseInt(total);    

            document.getElementById("totalMarks").innerHTML = tot;

        }                       

        subqs.removeChild(subqs.lastElementChild);

        subqs.removeChild(subqs.lastElementChild);

        subqs.removeChild(subqs.lastElementChild);
        
        var mark = document.getElementById("marks");

        var number = mark.options[mark.selectedIndex].value;

        var total = document.getElementById("totalMarks");

        var tot = total.innerHTML;

        if (parseInt(number) == parseInt(tot)  && validate() === true) {

            submit = document.getElementById("submit");

            submit.removeAttribute("disabled");

        } else if (parseInt(number) != parseInt(tot) || validate() === false) {

            submit = document.getElementById("submit");

            submit.setAttribute("disabled", true);

        }

    }

}
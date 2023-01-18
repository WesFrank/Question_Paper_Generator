$('#topic').on('change', function() {

    var e = document.getElementById("topic");
    var topic = e.value;

    if (topic == '') {

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    } else if (topic !== '') {

        // If value of input with ID = "Points" Correspond to Total Points, Activate Submit Button

        var mark = document.getElementById("marks");

        var mrk = mark.options[mark.selectedIndex].value;
    
        var total = document.getElementById("totalMarks");
    
        var tot = total.innerHTML;
    
        document.getElementById('pnt').value = mrk;
    
        if (parseInt(mrk) == parseInt(tot) && validate() === true) {
    
            submit = document.getElementById("submit");
    
            submit.removeAttribute("disabled");
    
        } else if (parseInt(mrk) != parseInt(tot) || validate() === false) {
    
            submit = document.getElementById("submit");
    
            submit.setAttribute("disabled", true);
    
        }

        document.getElementById('tpk').value = topic;

    }

});
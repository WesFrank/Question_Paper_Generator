$('form#content').change(function() {

    var tot = 0;

    $("form#content :input.mark").each(function() {
        
        var input_variable = $(this).val();

        tot += Number(input_variable);

        $('#totalMarks').text(tot);

        document.getElementById("totalMarks").setAttribute("value", tot);

        var mark = document.getElementById("marks");

        var number = mark.options[mark.selectedIndex].value;

        // check if marks and total points correspond

        if (parseInt(number) == parseInt(tot) && topic != '' && validate() === true) {
            
            submit = document.getElementById("submit");

            submit.removeAttribute("disabled");

            // else if total points and marks do not correspond 

        } else if (parseInt(number) != parseInt(tot) || validate() === false || topic == '') {

            // disable the submit button

            submit = document.getElementById("submit");

            submit.setAttribute("disabled", true);

        }

    });

});
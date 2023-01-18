$('form#content').change(function() {

    var time = 0;

    $("form#content :input.time").each(function() {
        
        var input_variable = $(this).val();

        time += Number(input_variable);

        $('#totalTime').text(time);

        // get duration value of the duration html span object and assign to new variable durationValue

        var durationString = document.getElementById("duration").innerHTML;

        var durationNumber = Number(durationString);
        
        // get the total time from the totalTime html object and assign a new variable to its totalTImeValue

        var totalTimeString = document.getElementById("totalTime").innerHTML;

        var totalTimeNumber = Number(totalTimeString);

        // compare the above two variables for equality

        if (totalTimeNumber == durationNumber) {

            console.log("totalTimeNumber and durationNumber are equal");

            // check the next condition before activating the submit button

            // check if marks and points are the same before activating the submit button

            // establish mark variable from id="mark"

            totalMarks = document.getElementById("totalMarks").innerHTML;

            console.log(totalMarks);
            
            console.log(typeof(totalMarks));

            // check if totalMarks is NaN

            if (totalMarks === undefined) {

                console.log("totalMarks undefined");

            }

            marks = Number($('#marks').val());

            console.log(marks);

            console.log(typeof(marks));

            if (marks == totalMarks) {

                console.log("marks and totalMarks are equal");

                // check if input with id='topic' is not empty before activating submit button

                topic = $('#topic').val();

                console.log(topic);

                if (topic == '') {

                    // disable submit button

                    console.log('disable submit button');

                    submit = document.getElementById("submit");

                    submit.setAttribute("disabled", true);

                } else if (topic != '') {

                    // activate submit button

                    console.log('enable submit button');

                    submit = document.getElementById("submit");

                    submit.removeAttribute("disabled");

                }


                // activate/disable submit button

            } else if (marks != totalMarks) {

                console.log("marks and totalMarks are not equal")

            }

        } else if (totalTimeNumber != durationNumber) {

            console.log("totalTimeNumber and durationNumber are not equal")

            // disable submit button;

            submit = document.getElementById("submit");

            submit.setAttribute("disabled", true);

        }

    });

});
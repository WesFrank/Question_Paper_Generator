$('#marks').on('change', function() {

    var mark = document.getElementById("marks");

    var mrk = mark.options[mark.selectedIndex].value;

    console.log("change detected - mark input");

    if (mrk == 10) {

        console.log(mrk)

        var duration = document.getElementById("duration");

        duration.innerHTML = Number(10);

        duration.setAttribute("value", mrk);

        var dur = document.getElementById("dur");

        dur.setAttribute("value", Number(10));

        var pnt = document.getElementById("pnt");

        pnt.setAttribute("value", Number(mrk));
        
        // document.getElementById('dur').value = Number(10);

    }

    if (mrk == 20) {

        var duration = document.getElementById("duration");

        duration.innerHTML = Number(20);

        duration.setAttribute("value", mrk);

        var dur = document.getElementById("dur");

        dur.setAttribute("value", Number(20));

        var pnt = document.getElementById("pnt");

        pnt.setAttribute("value", Number(mrk));

        // document.getElementById('dur').value = Number(20);

    }

    if (mrk == 25) {

        var duration = document.getElementById("duration");

        duration.innerHTML = Number(30);

        duration.setAttribute("value", mrk);

        var dur = document.getElementById("dur");

        dur.setAttribute("value", Number(25));

        var pnt = document.getElementById("pnt");

        pnt.setAttribute("value", Number(mrk));

        // document.getElementById('dur').value = Number(30);

    }

    if (mrk == 30) {

        var duration = document.getElementById("duration");

        duration.innerHTML = Number(45);

        duration.setAttribute("value", mrk);

        var dur = document.getElementById("dur");

        dur.setAttribute("value", Number(30));

        var pnt = document.getElementById("pnt");

        pnt.setAttribute("value", Number(mrk));

        // document.getElementById('dur').value = Number(45);

    }

    if (mrk == 50) {

        var duration = document.getElementById("duration");

        duration.innerHTML = Number(60);

        duration.setAttribute("value", mrk);

        var dur = document.getElementById("dur");

        dur.setAttribute("value", Number(60));

        var pnt = document.getElementById("pnt");

        pnt.setAttribute("value", Number(mrk));

        // document.getElementById('dur').value = Number(60);

    }
    
    if (mrk == 100) {

        var duration = document.getElementById("duration");

        duration.innerHTML = Number(120);

        duration.setAttribute("value", mrk);

        var dur = document.getElementById("dur");

        dur.setAttribute("value", Number(120));

        var pnt = document.getElementById("pnt");

        pnt.setAttribute("value", Number(mrk));

        // document.getElementById('dur').value = Number(120);

    }

    totalMarks = document.getElementById("totalMarks").innerHTML;

    console.log(totalMarks);
    
    console.log(typeof(totalMarks));

    // check if totalMarks is NaN

    if (totalMarks === undefined) {

        console.log("totalMarks undefined");

    }

    var marks = Number($('#marks').val());

    console.log(marks);

    console.log(typeof(marks));

    if (marks == totalMarks) {

        console.log("marks and totalMarks are equal");

        // check if total time and duration are equal before activating submit button

        var durationString = document.getElementById("duration").innerHTML;

        var durationNumber = Number(durationString);
        
        // get the total time from the totalTime html object and assign a new variable to its totalTImeValue

        var totalTimeString = document.getElementById("totalTime").innerHTML;

        var totalTimeNumber = Number(totalTimeString);

        if (durationNumber == totalTimeNumber) {

            console.log("durationNumber and totalTimeNumber are equal");

            // check if topic is empty before activating submit button

            var topic = $('#topic').val();

            console.log(topic);

            if (topic == '') {

                // disable submit button

                submit = document.getElementById("submit");

                submit.setAttribute("disabled", true)

            } else if (topic != '') {

                submit = document.getElementById("submit");

                submit.removeAttribute("disabled")

            }

        } else if (durationNumber != totalTimeNumber) {

            console.log("durationNumber and totalTimeNumber are not equal");

            // disable submit button

            submit = document.getElementById("submit");

            submit.setAttribute("disabled", true)

        }

    } else if (marks != totalMarks) {

        console.log("marks and totalMarks are not equal");

        // disable submit button

        submit = document.getElementById("submit");

        submit.setAttribute("disabled", true)

    }

});
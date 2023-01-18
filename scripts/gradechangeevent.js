$('#grade').on('change', function() {

    var grade = document.getElementById("grade");

    var grd = grade.options[grade.selectedIndex].value;

    document.getElementById("grd").value = grd;

    if (grd == '') {

        // whipe the memory clean on Points by settings it's inner HTML value to:

        // <input value=''> - Select - </input>
        // <input value=''> -  - </input>

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            +"<option value=''> You have to select a Subject before selecting a Topic </option>"
        
        ;

        subject = document.getElementById("subject");

        subject.innerHTML =
        
            "<option value=''> - Select - </option>"
            +"<option value=''> You have to select a Subject before selecting a Topic </option>"
        
        ;

        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }    

    if (grd == '10' || grd == '11' || grd == '12') {

        subject = document.getElementById("subject");

        subject.innerHTML =
        
            "<option value=''> - Select - </option>"

            +"<option value='Math1'>Mathematics (Paper 1)</option>"
            +"<option value='Math2'>Mathematics (Paper 2)</option>"

            +"<option value='Math3'>Mathematics (Paper 3)</option>"

            +"<option value='Tech_Math1'>Technical Mathematics (Paper 1)</option>"
            +"<option value='Techh_ Math2'>Technical Mathematics (Paper 2)</option>"
            
            +"<option value='IEB_Syllabus_Math1'>IEB Mathematics (Paper 1) </option>"
            +"<option value='IEB_Syllabus_Math2'>IEB Mathematics (Paper 2) </option>"

            +"<option value='ML1'>Mathematics Literacy (Paper 1)</option>"
            +"<option value='ML2'>Mathematics Literacy (Paper 2)</option>"

            +"<option value='CAT1'>Computer Application Technology - Theory (Paper 1)</option>"
            +"<option value='CAT2'>Computer Application Technology - Practical (Paper 2)</option>"

            +"<option value='IT1'>Information Techonology - Theory (Paper 1)</option>"
            +"<option value='IT2'>Information Techonology - Practical (Paper 2)</option>"

            +"<option value='PSci1'>Physical Science - Physics (Paper 1)</option>"
            +"<option value='PSci2'>Physical Science - Chemistry (Paper 2)</option>"

            +"<option value='EGD1'>Engineering Graphics & Design (Paper 1)</option>"
            +"<option value='EGD2'>Engineering Graphics & Design (Paper 2)</option>"

            +"<option value='LSci1'>Life Science (Paper 1)</option>"
            +"<option value='LSci2'>Life Science (Paper 2)</option>"

            +"<option value='GEO1'>Geography (Paper 1)</option>"
            +"<option value='GEO2'>Geography (Paper 2)</option>"

            +"<option value='Eco1'>Economics (Paper 1)</option>"
            +"<option value='Eco2'>Economics (Paper 2)</option>"
            
            +"<option value='Acc1'>Accounting (Paper 1)</option>"
            +"<option value='Acc2'>Accounting (Paper 2)</option>"

            +"<option value='Bus1'>Business Studies (Paper 1)</option>"
            +"<option value='Bus2'>Business Studies (Paper 2)</option>"

            +"<option value='Eng1'>English - Language (Paper 1)</option>"
            +"<option value='Eng2'>English - Literature (Paper 2)</option>"
            +"<option value='Eng3'>English - Creative Writing (Paper 3)</option>"

            +"<option value='Afr1'>Afrikaans - Taalkunde (Vraestel 1)</option>"
            +"<option value='Afr2'>Afrikaans - Letterkunde (Vraestel 2)</option>"
            +"<option value='Afr3'>Afrikaans - Skryf (Vraestel 3)</option>"
        
        ;

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            +"<option value=''> You have to select a Subject before selecting a Topic </option>"
        
        ;

        // check if input with ID="subject" is empty

        var subject = document.getElementById("subject");

        var sub = subject.value;

        console.log(sub);

        if (sub == '') {

            // if it's empty, disable submit button

            var submit = document.getElementById("submit");
            submit.setAttribute("disabled", true);
            
            // else if input with ID="subject" is not empty,

        } else if (sub != '') {

            // check the next condition to pass a test, to eventually turn the button on

            var topic = document.getElementById("topic");

            var tpk = topic.value;

            // check if input with ID="topic" is empty

            if (tpk == '') {

                // disable the submit button

                var submit = document.getElementById("submit");
                submit.setAttribute("disabled", true);

                // check if input with ID="topic" is empty
                
            } else if (tpk == '') {

                // check the next condition to pass a test, to eventually turn the button on

                // check if marks and points correspond

                // if marks and points correspond, turn button off

                // if (1) else if (2) {}

                // (1)

                var mark = document.getElementById("marks");

                var mrk = mark.options[mark.selectedIndex].value;
                
                var total = document.getElementById("totalMarks");
            
                var tot = total.innerHTML;
            
                document.getElementById('pnt').value = mrk;
            
                if (parseInt(mrk) == parseInt(tot) && validate() === true) {
            
                    submit = document.getElementById("submit");
            
                    submit.removeAttribute("disabled");

                    // else if marks and points do not correspond, turn submit button off

                    // if (1) else if (2) {}

                    // (2)
            
                } else if (parseInt(mrk) != parseInt(tot) || validate() === false) {
            
                    submit = document.getElementById("submit");
            
                    submit.setAttribute("disabled", true);
            
                }

            }

        }

    }
    
    if (grd == 'University') {

        subject = document.getElementById("subject");

        subject.innerHTML =
        
            "<option value=''> - Select - </option>"
            +"<option value='Mathematics'>Mathematics</option>"
            +"<option value='Computer_Science'>Computer Science</option>"
            +"<option value='Physics'>Physics</option>"
            +"<option value='Astronomy'>Astronomy</option>"
            +"<option value='Chemistry'>Chemistry</option>"
            +"<option value='Biology'>Biology</option>"
            +"<option value='Geography'>Geography</option>"
            +"<option value='Linguistics'>Linguistics</option>"
            +"<option value='Philosophy'>Philosophy</option>"
            +"<option value='Psychology'>Psychology</option>"
            +"<option value='Accounting'>Accounting</option>"
            +"<option value='Economics'>Economics</option>"
            +"<option value='History'>History</option>"
            +"<option value='Law'>Law</option>"
            +"<option value='Art'>Art</option>"

        ;

        topic = document.getElementById("topic");

        topic.innerHTML =
        
            "<option value=''> - Select - </option>"
            +"<option value=''> You have to select a Subject before selecting a Topic </option>"
        
        ;
        
        var submit = document.getElementById("submit");
        submit.setAttribute("disabled", true);

    }

})
$('#number').on('change', function() {

    var number = document.getElementById("number");

    var num = number.options[number.selectedIndex].value;

    document.getElementById('num').value = num;

    // Question 1

    if (document.getElementById("qnum1.1")) {

        document.getElementById("qnum1.1").name = "qnum"+num+'_1';

    }

    if (document.getElementById("qnum1.1")) {

        document.getElementById("qnum1.1").setAttribute("value", num+'.1');
        document.getElementById("qnum1.1").setAttribute("class", num+'.1');

    }

    if (document.getElementById("q1.1")) {

        document.getElementById("q1.1").name = "q"+num+'_1';

    }

    if (document.getElementById("s1.1")) {

        document.getElementById("s1.1").name = "s"+num+'_1';

    }

    if (document.getElementById("l1.1")) {

        document.getElementById("l1.1").name = "l"+num+'_1';

    }

    if (document.getElementById("m1.1")) {

        document.getElementById("m1.1").name = "m"+num+'_1';

    }

    // Question 2
    
    if (document.getElementById("qnum1.2")) {

        document.getElementById("qnum1.2").name = "qnum"+num+'_2';
        
    }

    if (document.getElementById("qnum1.2")) {

        document.getElementById("qnum1.2").setAttribute("value", num+'.2');
        document.getElementById("qnum1.2").setAttribute("class", num+'.2');

    }

    if (document.getElementById("q1.2")) {

        document.getElementById("q1.2").name = "q"+num+'_2';

    }

    if (document.getElementById("s1.2")) {

        document.getElementById("s1.2").name = "s"+num+'_2';

    }

    if (document.getElementById("l1.2")) {

        document.getElementById("l1.2").name = "l"+num+'_2';

    }

    if (document.getElementById("m1.2")) {

        document.getElementById("m1.2").name = "m"+num+'_2';

    }

    // Question 3

    if (document.getElementById("qnum1.3")) {

        document.getElementById("qnum1.3").name = "qnum"+num+'_3';
        
    }

    if (document.getElementById("qnum1.3")) {

        document.getElementById("qnum1.3").setAttribute("value", num+'.3');
        document.getElementById("qnum1.3").setAttribute("class", num+'.3');

    }

    if (document.getElementById("q1.3")) {

        document.getElementById("q1.3").name = "q"+num+'_3';

    }

    if (document.getElementById("s1.3")) {

        document.getElementById("s1.3").name = "s"+num+'_3';

    }

    if (document.getElementById("l1.3")) {

        document.getElementById("l1.3").name = "l"+num+'_3';

    }

    if (document.getElementById("m1.3")) {

        document.getElementById("m1.3").name = "m"+num+'_3';

    }

    // Question 4

    if (document.getElementById("qnum1.4")) {

        document.getElementById("qnum1.4").name = "qnum"+num+'_4';
        
    }

    if (document.getElementById("qnum1.4")) {

        document.getElementById("qnum1.4").setAttribute("value", num+'.4');
        document.getElementById("qnum1.4").setAttribute("class", num+'.4');

    }

    if (document.getElementById("s1.4")) {

        document.getElementById("s1.4").name = "s"+num+'_4';

    }

    if (document.getElementById("l1.4")) {

        document.getElementById("l1.4").name = "l"+num+'_4';

    }

    if (document.getElementById("m1.4")) {

        document.getElementById("m1.4").name = "m"+num+'_4';

    }

    // Question 5

    if (document.getElementById("qnum1.5")) {

        document.getElementById("qnum1.5").name = "qnum"+num+'_5';
        
    }

    if (document.getElementById("qnum1.5")) {

        document.getElementById("qnum1.5").setAttribute("value", num+'.5');
        document.getElementById("qnum1.5").setAttribute("class", num+'.5');

    }

    if (document.getElementById("s1.5")) {

        document.getElementById("s1.5").name = "s"+num+'_5';

    }

    if (document.getElementById("l1.5")) {

        document.getElementById("l1.5").name = "l"+num+'_5';

    }

    if (document.getElementById("m1.5")) {

        document.getElementById("m1.5").name = "m"+num+'_5';

    }

    // Question 6

    if (document.getElementById("qnum1.6")) {

        document.getElementById("qnum1.6").name = "qnum"+num+'_6';
        
    }

    if (document.getElementById("qnum1.6")) {

        document.getElementById("qnum1.6").setAttribute("value", num+'.6');
        document.getElementById("qnum1.6").setAttribute("class", num+'.6');

    }

    if (document.getElementById("s1.6")) {

        document.getElementById("s1.6").name = "s"+num+'_6';

    }

    if (document.getElementById("l1.6")) {

        document.getElementById("l1.6").name = "l"+num+'_6';

    }

    if (document.getElementById("m1.6")) {

        document.getElementById("m1.6").name = "m"+num+'_6';

    }

    // Question 7

    if (document.getElementById("qnum1.7")) {

        document.getElementById("qnum1.7").name = "qnum"+num+'_7';
        
    }

    if (document.getElementById("qnum1.7")) {

        document.getElementById("qnum1.7").setAttribute("value", num+'.7');
        document.getElementById("qnum1.7").setAttribute("class", num+'.7');

    }

    if (document.getElementById("s1.7")) {

        document.getElementById("s1.7").name = "s"+num+'_7';

    }

    if (document.getElementById("l1.7")) {

        document.getElementById("l1.7").name = "l"+num+'_7';

    }

    if (document.getElementById("m1.7")) {

        document.getElementById("m1.7").name = "m"+num+'_7';

    }

    // Question 8

    if (document.getElementById("qnum1.8")) {

        document.getElementById("qnum1.8").name = "qnum"+num+'_8';
        
    }

    if (document.getElementById("qnum1.8")) {

        document.getElementById("qnum1.8").setAttribute("value", num+'.8');
        document.getElementById("qnum1.8").setAttribute("class", num+'.8');

    }

    if (document.getElementById("s1.8")) {

        document.getElementById("s1.8").name = "s"+num+'_8';

    }

    if (document.getElementById("l1.8")) {

        document.getElementById("l1.8").name = "l"+num+'_8';

    }

    if (document.getElementById("m1.8")) {

        document.getElementById("m1.8").name = "m"+num+'_8';

    }

    // Question 9

    if (document.getElementById("qnum1.9")) {

        document.getElementById("qnum1.9").name = "qnum"+num+'_9';
        
    }

    if (document.getElementById("qnum1.9")) {

        document.getElementById("qnum1.9").setAttribute("value", num+'.9');
        document.getElementById("qnum1.9").setAttribute("class", num+'.9');

    }

    if (document.getElementById("s1.9")) {

        document.getElementById("s1.9").name = "s"+num+'_9';

    }

    if (document.getElementById("l1.9")) {

        document.getElementById("l1.9").name = "l"+num+'_9';

    }

    if (document.getElementById("m1.9")) {

        document.getElementById("m1.9").name = "m"+num+'_9';

    }

    // Question 10

    if (document.getElementById("qnum1.10")) {

        document.getElementById("qnum1.10").name = "qnum"+num+'_10';
        
    }

    if (document.getElementById("qnum1.10")) {

        document.getElementById("qnum1.10").setAttribute("value", num+'.10');
        document.getElementById("qnum1.10").setAttribute("class", num+'.10');

    }

    if (document.getElementById("s1.10")) {

        document.getElementById("s1.10").name = "s"+num+'_10';

    }

    if (document.getElementById("l1.10")) {

        document.getElementById("l1.10").name = "l"+num+'_10';

    }

    if (document.getElementById("m1.10")) {

        document.getElementById("m1.10").name = "m"+num+'_10';

    }

    // Other Stuff

    var mark = document.getElementById("marks");

    var mrk = mark.options[mark.selectedIndex].value;

    var total = document.getElementById("totalMarks");

    var tot = total.innerHTML;  

    document.getElementById('pnt').value = mrk;

    if (parseInt(mrk) == parseInt(tot) && validate() == true) {

        submit = document.getElementById("submit");

        submit.removeAttribute("disabled");

    } else if (parseInt(mrk) != parseInt(tot) || validate() == false) {

        submit = document.getElementById("submit");

        submit.setAttribute("disabled", true);

    }

});
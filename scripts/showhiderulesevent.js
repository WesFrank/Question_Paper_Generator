function show() {

    show_hide = document.getElementById("show_hide");

    show_hide.innerHTML =

    "<button id='hide_rules' style='position: relative; left: 1%;'> Hide Rules </button>"
    
    +"<br>"
    +"<br>"

    +"<h3 style='position: relative; left: 1%'> Rules </h3>"

    +"<ul>"

        +"<li> Number is optional (Minimum: 1 & Maximum: 5 & Default: 1) </li>"
        +"<li> Grade is required </li>"
        +"<li> You have to select a Grade before selecting a Subject </li>"
        +"<li> Subject is required </li>"
        +"<li> You have to select a Subject before selecting a Topic </li>"
        +"<li> Topic is required  </li>"
        +"<li> Marks must be selected </li>"
        +"<li> Context must be given </li>"
        +"<li> A question and an accompanying answer is required </li>"
        +"<li> If answer not applicable, Type N/A </li>"
        +"<li> Level is required (Minimum: 1 & Maximum: 4) </li>"
        +"<li> Time is required (Minimum: 1 & Maximum: 12) </li>"
        +"<li> Points are required (Minimum: 1 & Maximum: 10) </li>"
        +"<li> Points and marks must correspond before submit button is activated</li>"
        +"<li> Duration is calculated based on Marks chosen </li>"
        +"<li> Submit button will be enabled once Marks correspond with Total Points & Duration corresponds with Total Time & all required input fields in the Meta Content section have been specified </li>"
        
        
    +"<ul>"

    document.getElementById("hide_rules").addEventListener("click", hide);

}

function hide() {

    show_hide = document.getElementById("show_hide");

    show_hide.innerHTML = "<button id='show_rules' style='position: absolute; left: 1%;'> Show Rules </button>";

    document.getElementById("show_rules").addEventListener("click", show);

}
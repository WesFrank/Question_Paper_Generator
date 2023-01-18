window.addEventListener('load', (event) => {

    // Make sure the remove button is inactive before the add subquestion button has been pressed

    var rmv = document.getElementById("rmv");

    rmv.setAttribute("disabled", true);

    // Define Default for hidden inputs with ID="cnt" and ID="num"

    document.getElementById("cnt").value = parseInt(count) - 1;

    document.getElementById('num').value = parseInt(1)

    // Add Event Listener for Show/Hide Rules Button

    document.getElementById("show_rules").addEventListener("click", show);

});
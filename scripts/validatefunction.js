function validate() {

    var valid = false;

    if ($('#tpk').val() == "") {
        
        // Do Nothing
        
    } else if ($('#tpk').val() != "") {
        
        valid = true;

    }

    return valid;

}
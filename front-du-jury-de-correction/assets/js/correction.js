// afficher le formuler de selection de l'ue ou de l'etudiant a modifier

function printFormSelectUe(){

    // if(i*1 == 1)
        document.getElementById("check-ue").style.display = "grid";
    // else if(i*1 == 2){
        // document.getElementById("form-modif").style.display = "grid";
    // alert("ok");

    }

    function printFormModif(){

        // if(i*1 == 1)
        document.getElementById("check-ue").style.display = "none";

        document.getElementById("form-modif").style.display = "grid";
        // else if(i*1 == 2){
            // document.getElementById("form-modif").style.display = "grid";
        // alert("ok");
    
        }    


function maskForm(i){
    if(i == 1)
        document.getElementById("check-ue").style.display = "none";
    else if(i == 2)
        document.getElementById("form-modif").style.display = "none";

    
}


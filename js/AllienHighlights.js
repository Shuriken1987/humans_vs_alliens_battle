class AllienHighlights {
    constructor(alliensDiv, allAlliens) {
        this.alliensDiv = alliensDiv;
        this.allAlliens = allAlliens;
    }

    info(allienId,allienHealth) {
        if (allienHealth > 0){
            return this.alliensDiv[allienId].style.background = 'blue';
        }
         else{
             this.alliensDiv[allienId].style.visibility = 'hidden';
         }
    }
}

let allienHighlights = new AllienHighlights(document.querySelectorAll('.allien'), allAlliens);
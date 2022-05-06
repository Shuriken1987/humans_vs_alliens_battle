class SoldierHighlights {
    constructor(soldiersDiv, allSoldiers) {
        this.soldiersDiv = soldiersDiv;
        this.allSoldiers = allSoldiers;
    }

    info(soldierId,soldierHealth) {
        if (soldierHealth > 0){
            return this.soldiersDiv[soldierId].style.background = 'red';
        }
         else{
             this.soldiersDiv[soldierId].style.visibility = 'hidden';
         }
    }
}

let soldierHighlights = new SoldierHighlights(document.querySelectorAll('.soldier'), allSoldiers);
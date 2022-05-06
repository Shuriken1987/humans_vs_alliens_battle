class Game {
    constructor(allSoldiers, allAlliens) {
        this.allSoldiers = allSoldiers;
        this.allAlliens = allAlliens;
        this.deadSoldiers = [];
        this.deadAlliens = [];
    }

    init() {
        setInterval(() => {
            this.soldierAttacks();
            this.allienAttacks()
        }, 5);
    }

    getRandomSoldier() {
        return this.allSoldiers[Math.floor(Math.random() * this.allSoldiers.length)];
    }

    getRandomAllien() {
        return this.allAlliens[Math.floor(Math.random() * this.allAlliens.length)];
    }

    soldierAttacks() {
        let activeSoldier = this.getRandomSoldier();
        let activeAllien = this.getRandomAllien();
        // console.log(activeAllien.health)
        if (activeAllien.health > 0) {
            activeAllien.health = activeAllien.health - activeSoldier.damage;
            allienHighlights.info(activeAllien.id, activeAllien.health);
            this.allienIsDead(activeAllien);
            return activeAllien.health;
        } else {
            this.checkWinner();
        }
    }

    allienAttacks() {
        let activeAllien = this.getRandomAllien();
        let activeSoldier = this.getRandomSoldier();
        // console.log(activeSoldier.health)
        if (activeSoldier.health > 0) {
            activeSoldier.health = activeSoldier.health - activeAllien.damage;
            soldierHighlights.info(activeSoldier.id, activeSoldier.health);
            this.soldierIsDead(activeSoldier);
            return activeSoldier.health;
        } else {
            this.checkWinner();
        }
    }

    soldierIsDead(activeSoldier) {
        if (activeSoldier.health <= 0) {
            // console.log(activeSoldier);
            this.deadSoldiers.push(activeSoldier);
        }
    }

    allienIsDead(activeAllien) {
        if (activeAllien.health <= 0) {
            // console.log(activeAllien);
            this.deadAlliens.push(activeAllien);
        }
    }

    checkWinner() {
        if (this.allSoldiers.length === this.deadSoldiers.length) {
            return alert('Aliens won!!!')
        } else if (this.allAlliens.length === this.deadAlliens.length) {
            return alert('Humans won!!!')
        }
    }
}


let game = new Game(allSoldiers, allAlliens);
game.init();
let alienDiv = document.querySelector('.alien-div');

class Allien{
    constructor(name,id) {
        this.name = name;
        this.id = id;
        this.weapon = this.getWeapon();
        this.health = 500;
        this.damage = Math.floor(Math.random() * (500-100) +100) ;
        this.isAlive = true;
    }
    getWeapon(){
        let weapon = ['gun','laser','sniper'][Math.floor(Math.random() * 3)];
        return weapon;
    }
    info(){
        let text = '';
        text += "<p>Name: "+ this.name + "</p>";
        text += "<p>Weapon: "+ this.weapon + "</p>";
        text += "<p>Damage: "+ this.damage + "</p>";
        text += "<p>Health: "+ this.health + "</p>";
        return text;
    }

}

let allAlliens = [];

for (let i = 0; i < 300; i++) {
    allAlliens.push(new Allien('allien' + i,i))
}

displayAlliens(allAlliens.length);

function displayAlliens(num){
    for (let i = 0; i < num; i++) {
        let newAllienDiv = document.createElement('div');
        newAllienDiv.className = 'allien';
        newAllienDiv.id = i;
        newAllienDiv.addEventListener('mouseenter',displayInfo);
        newAllienDiv.addEventListener('mouseleave',hideInfo);
        alienDiv.appendChild(newAllienDiv);
    }
}

function displayInfo(e){
    let activeAllien = allAlliens[this.id];
    info.innerHTML = activeAllien.info();
    info.style.display = 'block';
    info.style.top = e.y + 'px';
    info.style.left = e.x + 20 +'px';
}

function hideInfo(){
    info.style.display = 'none'
}
let soldierDiv = document.querySelector('.soldier-div');
let info = document.querySelector('.info');

class Soldier{
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

let allSoldiers = [];

for (let i = 0; i < 300; i++) {
    allSoldiers.push(new Soldier('soldier ' + i,i));
}

displaSoldiers(allSoldiers.length);

function displaSoldiers(num){
    for (let i = 0; i < num; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'soldier';
        newDiv.id = i;
        newDiv.addEventListener('mouseenter',displayInfo);
        newDiv.addEventListener('mouseleave',hideInfo);
        soldierDiv.appendChild(newDiv);
    }
}

function displayInfo(e){
    let activeSoldier = allSoldiers[this.id];
    info.innerHTML = activeSoldier.info();
    info.style.display = 'block';
    info.style.top = e.y + 'px';
    info.style.left = e.x + 20 +'px';
}

function hideInfo(){
    info.style.display = 'none';
}
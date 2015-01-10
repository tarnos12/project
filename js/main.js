window.setInterval(function () {
    var hppercent = 100; //This function heal player automatically using potions.
    hppercent = (Math.floor((player.health / player.maxhealth) * 100));
    if (player.maxhealth <= 30 & pot >= 1) {
        if (hppercent <= 30) {
            if (player.health + pot >= player.maxhealth) {
                player.health = player.maxhealth;
                pot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("pot").innerHTML = pot;
            } else {
                player.health += pot;
                pot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("pot").innerHTML = pot;
            }
        }
    } else if (player.maxhealth <= 100 & mpot >= 1) {
        if (hppercent <= 30) {
            if (player.health + mpot >= player.maxhealth) {
                player.health = player.maxhealth;
                mpot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("mpot").innerHTML = mpot;
            } else {
                player.health += mpot;
                mpot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("mpot").innerHTML = mpot;
            }
        }
    } else {
        if (hppercent <= 30 & spot >= 1) {
            if (player.health + spot >= player.maxhealth) {
                player.health = player.maxhealth;
                spot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("spot").innerHTML = spot;
            } else {
                player.health += spot;
                spot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("spot").innerHTML = spot;
            }
        }
    } { }
}, 100);
window.setInterval(function () {
    if (player.stats >= 1) { // Show "plus" image when player level up
        document.getElementById("vis1").style.visibility = "visible";
        document.getElementById("vis2").style.visibility = "visible";
        document.getElementById("vis3").style.visibility = "visible";
        document.getElementById("vis4").style.visibility = "visible";
        document.getElementById("vis5").style.visibility = "visible";
        document.getElementById("vis6").style.visibility = "visible";
        document.getElementById("vis7").style.visibility = "visible";
    } else {
        document.getElementById("vis1").style.visibility = "hidden";
        document.getElementById("vis2").style.visibility = "hidden";
        document.getElementById("vis3").style.visibility = "hidden";
        document.getElementById("vis4").style.visibility = "hidden";
        document.getElementById("vis5").style.visibility = "hidden";
        document.getElementById("vis6").style.visibility = "hidden";
        document.getElementById("vis7").style.visibility = "hidden";
    }
}, 1);


window.setInterval(function () {

    if (wepeq == "Sword") {
        document.getElementById("weapon").innerHTML = "<img src='images/items/sword1.gif' class='mark'>";
    }
    else if (wepeq == "Sword1") {
        document.getElementById("weapon1").innerHTML = "<img src='images/items/sword2.gif' class='mark'>";
    }
    else if (wepeq == "Sword2") {
        document.getElementById("weapon2").innerHTML = "<img src='images/items/sword3.gif' class='mark'>";
    }
    else if (wepeq == "Sword3") {
        document.getElementById("weapon3").innerHTML = "<img src='images/items/sword4.gif' class='mark'>";
    }
    else if (wepeq == "Dagger") {
        document.getElementById("weapon4").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger1") {
        document.getElementById("weapon5").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger2") {
        document.getElementById("weapon6").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger3") {
        document.getElementById("weapon7").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Axe") {
        document.getElementById("weapon8").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe1") {
        document.getElementById("weapon9").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe2") {
        document.getElementById("weapon10").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe3") {
        document.getElementById("weapon11").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Mace") {
        document.getElementById("weapon12").innerHTML = "<img src='images/items/mace1.gif' class='mark'>";
    }
    else if (wepeq == "Mace1") {
        document.getElementById("weapon13").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
    else if (wepeq == "Mace2") {
        document.getElementById("weapon14").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
    else if (wepeq == "Mace3") {
        document.getElementById("weapon15").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
}, 1);


window.setInterval(function () {

    if (armeq == "Armor") {
        document.getElementById("armor").innerHTML = "<img src='images/items/armor1.gif' class='mark'>";
    }
    else if (armeq == "Armor1") {
        document.getElementById("armor1").innerHTML = "<img src='images/items/armor1.gif' class='mark'>";
    }
    else if (armeq == "Armor2") {
        document.getElementById("armor2").innerHTML = "<img src='images/items/armor2.gif' class='mark'>";
    }
    else if (armeq == "Armor3") {
        document.getElementById("armor3").innerHTML = "<img src='images/items/armor2.gif' class='mark'>";
    }
    else if (armeq == "Armor4") {
        document.getElementById("armor4").innerHTML = "<img src='images/items/armor3.gif' class='mark'>";
    }
    else if (armeq == "Armor5") {
        document.getElementById("armor5").innerHTML = "<img src='images/items/armor3.gif' class='mark'>";
    }
    else if (armeq == "Armor6") {
        document.getElementById("armor6").innerHTML = "<img src='images/items/armor4.gif' class='mark'>";
    }
}, 1);


window.setInterval(function () {

    if (acceq == "Accessory") {
        document.getElementById("accessory").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory1") {
        document.getElementById("accessory1").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory2") {
        document.getElementById("accessory2").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory3") {
        document.getElementById("accessory3").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory4") {
        document.getElementById("accessory4").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory5") {
        document.getElementById("accessory5").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory6") {
        document.getElementById("accessory6").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
}, 1);

var wepeq = "Sword"; 		//currently equipped weapon
var armeq = "Armor"; 		//currently equipped armor
var acceq = "Accessory";		//currently equipped accessory
var wep = {
    Sword: [1, 2, 3, 4], // Sword[0] is equal to "Sword", Sword[1] is equal to "Sword1" etc.
    Dagger: [1, 2, 3, 4], // same ^
    Axe: [1, 2, 3, 4],
    Mace: [1, 2, 3, 4],
    Staff: [1, 2, 3, 4],
    Fist: [1, 2, 3, 4]
};

var weapon = {

    sword: [
    {
        id: 's1',
        name: 'sword1',
        strength: 2,
        endurance: 1,
        image: 'sword1.gif'
    },
    {
        id: 's2',
        name: 'sword2',
        strength: 5,
        endurance: 2,
        image: 'sword2.gif'
    },
    {
        id: 's3',
        name: 'sword3',
        strength: 10,
        endurance: 4,
        agility: 2,
        image: 'sword3.gif'
    },
    {
        id: 's4',
        name: 'sword4',
        strength: 25,
        endurance: 6,
        agility: 5,
        image: 'sword4.gif'
    }
    ],

    dagger: [
        {
            id: 'd1',
            name: 'dagger1',
            agility: 3,
            dexterity: 0,
            image: 'dagger1.gif'
        },
        {
            id: 'd2',
            name: 'dagger2',
            agility: 5,
            dexterity: 3,
            image: 'dagger1.gif'
        },
        {
            id: 'd3',
            name: 'dagger3',
            agility: 10,
            dexterity: 5,
            image: 'dagger1.gif'
        },
        {
            id: 'd4',
            name: 'dagger4',
            agility: 25,
            dexterity: 10,
            luck: 5,
            image: 'dagger1.gif'
        }
    ],

    axe: [
          {
              id: 'a1',
              name: 'axe1',
              strength: 5,
              agility: -1,
              image: 'axe1.gif'
          },

        {
            id: 'a2',
            name: 'axe2',
            agility: 3,
            dexterity: 0,
            image: 'axe1.gif'
        },
        {
            id: 'a3',
            name: 'axe3',
            agility: 3,
            dexterity: 0,
            image: 'axe1.gif'
        },
        {
            id: 'a4',
            name: 'axe4',
            agility: 3,
            dexterity: 0,
            image: 'axe1.gif'
        },
    ],

    mace: [
          {
              id: 'm1',
              name: 'mace1',
              strength: 5,
              agility: -1,
              image: 'mace1.gif'
          },

        {
            id: 'm2',
            name: 'mace2',
            agility: 3,
            dexterity: 0,
            image: 'mace1.gif'
        },
        {
            id: 'm3',
            name: 'mace3',
            agility: 3,
            dexterity: 0,
            image: 'mace2.gif'
        },
        {
            id: 'm4',
            name: 'mace4',
            agility: 3,
            dexterity: 0,
            image: 'mace2.gif'
        },
    ]

};

var arm = [0, 0, 0, 0, 0, 0, 0];		 //Amount of armors in player inventory
var acc = [0, 0, 0, 0, 0, 0, 0];	 //Amount of accessories in player inventory


function weaponUnequip() {
    if (wepeq === "Sword" & wepeq >= 0) {
        var unequip = wepeq;
        wepeq = -unequip;

        document.getElementById("sword").innerHTML = wep.Sword[0];

    }
}


function equipSword() {
    if (wep.Sword[0] >= 1) {
        wepeq = "Sword";
        wep[0] -= 1;
        document.getElementById("dagger4").innerHTML = wep.Dagger[3];

    }
}

function equipSword1() {
    if (wep[1] >= 1 & wepeq >= 0) {
        wepeq = "Sword1";
        wep[1] -= 1;
        document.getElementById("sword1").innerHTML = wep[1];

    }
}

function equipSword2() {
    if (wep[2] >= 1 & wepeq >= 0) {
        wepeq = "Sword2";
        wep[2] -= 1;
        document.getElementById("sword2").innerHTML = wep[2];

    }
}

function equipSword3() {
    if (wep[3] >= 1 & wepeq >= "") {
        wepeq = "Sword3";
        wep[3] -= 1;
        document.getElementById("sword3").innerHTML = wep[3];

    }
}

function equipDagger() {
    if (wep[1] >= 1 & wepeq >= 0) {
        wepeq = 2;
        wep[1] -= 1;
        document.getElementById("wep5").innerHTML = wep[1];

    }
}







window.setInterval(function () {
    var exppercent = 0; //Player experience in % values at the top bar
    exppercent = (Math.floor((player.experience / player.maxexperience) * 100));
    document.getElementById("exppercent").innerHTML = exppercent;
}, 1000);
window.setInterval(function () { //Health regen
    if (player.health < player.maxhealth) player.health += player.hpregen;
    if (player.health > player.maxhealth) player.health = player.maxhealth;
    document.getElementById('health').innerHTML = player.health;
}, 1000);

//Upgrading player stats
function upgradeEndurance() {
    if (player.stats >= 1) {
        player.maxhealth = player.maxhealth + 10;
        player.hpregen = player.hpregen + 1;
        player.stats = player.stats - 1;
        player.endurance += 1;
        Log("Your maximal health is now: " + player.maxhealth + "!");
        Log("Your health regen increased by: " + player.hpregen + "!");
        document.getElementById("maxhealth").innerHTML = player.maxhealth;
        document.getElementById("hpregen").innerHTML = player.hpregen;
        document.getElementById("stats").innerHTML = player.stats;
        document.getElementById("endurance").innerHTML = player.endurance;
    }
}

function upgradeStrength() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.strength += 1;
        player.mindamage = Math.floor(player.strength * 1.5);
        player.maxdamage = Math.floor(player.strength * 2.5);
        document.getElementById('stats').innerHTML = player.stats;
        document.getElementById('mindamage').innerHTML = player.mindamage;
        document.getElementById('maxdamage').innerHTML = player.maxdamage;
        document.getElementById('strength').innerHTML = player.strength;
    }
}

//Using potions
function usepot() {
    if (player.health == player.maxhealth) {
        Log("Your health is full!");
    } else if (player.health + 20 >= player.maxhealth & pot >= 1) {
        pot = pot - 1;
        player.health = player.maxhealth;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 20 <span style=\"color:green\">health!</span>");
    } else if (player.health + 20 < player.maxhealth & pot >= 1) {
        pot = pot - 1;
        player.health = player.health + 20;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('health').innerHTML = player.health;
    }
}

function usespot() {
    if (player.health == player.maxhealth) {
        Log("Your health is full!");
    } else if (player.health + 100 >= player.maxhealth & mpot >= 1) {
        spot = spot - 1;
        player.health = player.maxhealth;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.health + 100 < player.maxhealth & mpot >= 1) {
        spot = spot - 1;
        player.health = player.health + 100;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('health').innerHTML = player.health;
    }
}

function usempot() {
    if (player.health == player.maxhealth) {
        Log("Your health is full!");
    } else if (player.health + 500 >= player.maxhealth & mpot >= 1) {
        mpot = mpot - 1;
        player.health = player.maxhealth;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.health + 500 < player.maxhealth & mpot >= 1) {
        mpot = mpot - 1;
        player.health = player.health + 500;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('health').innerHTML = player.health;
    }
}
//Player log
function Log(data) {
    var i;
    if (logData.length < maxLogLines) {
        logData[logData.length] = data;
        logData.length++;
    } else {
        for (i = 0; i < logData.length - 1; i++) {
            logData[i] = logData[i + 1];
        }
        logData[logData.length - 1] = data;
    }
    var logTemp = "";
    for (i = logData.length -1; i >= 0; i--) {
        logTemp += "<center>" + logData[i] + "</center>";
    }
    document.getElementById('logConsole').innerHTML = logTemp;
}

//PLAYER STATS
var player = {
    stats: 0,
    level: 1,
    strength: 1,
    endurance: 0,
    agility: 0,
    dexterity: 0,
    intelligence: 0,
    wisdom: 0,
    luck: 0,
    defense: 0,
    experience: 0,
    maxexperience: 100,
    gold: 0,
    health: 30,
    maxhealth: 30,
    mindamage: 1,
    maxdamage: 4,
    hpregen: 2,
    accuracy: 100,
    evasion: 0,
    criticalChance: 0,
    criticalDamage: 0,
    dropRate: 0,
    expRate: 0
};

var maxLogLines = 16;
var logData = {
    length: 0
};
var pot = 0;
var spot = 0;
var mpot = 0;


// Array to store the monsters
var monsters = [];

/**
 * Helper method to create the array of monsters
 */
function createMonster(maxHp, def, minDmg, maxDmg, baseExp) {
    var monster = {
        hp: maxHp, // init HP to max HP
        maxHp: maxHp,
        def: def,
        minDmg: minDmg,
        maxDmg: maxDmg,
        baseExp: baseExp
    }

    monsters.push(monster);
    return monster;
}

// Create the monsters, each with varying stats. Allows for easy
// add/remove/modify of monsters
//            maxHP,  def, minD, maxD, baseExp, kills
createMonster(10, 0, 2, 3, 5, 0);
createMonster(30, 2, 2, 5, 10, 0);
createMonster(70, 4, 4, 7, 30, 0);
createMonster(130, 6, 6, 10, 50, 0);
createMonster(190, 9, 9, 14, 90, 0);
createMonster(280, 13, 13, 19, 140, 0);
createMonster(380, 18, 18, 23, 190, 0);
createMonster(500, 25, 25, 30, 260, 0);
createMonster(700, 30, 32, 37, 340, 0);
createMonster(900, 38, 40, 45, 450, 0);
createMonster(1300, 45, 50, 58, 560, 0);
createMonster(1600, 53, 60, 67, 700, 0);
createMonster(2200, 65, 75, 80, 810, 0);
createMonster(2600, 75, 86, 92, 940, 0);
createMonster(3000, 88, 96, 100, 1060, 0);
createMonster(4000, 95, 105, 110, 1200, 0);
createMonster(5000, 120, 140, 160, 1600, 0);
createMonster(7000, 140, 160, 185, 2150, 0);
createMonster(9000, 170, 200, 215, 2600, 0);
createMonster(12000, 200, 230, 250, 3400, 0);
createMonster(15000, 220, 260, 275, 5000, 0);
createMonster(18000, 250, 290, 320, 7000, 0);
createMonster(22000, 300, 350, 380, 10000, 0);
createMonster(28000, 400, 420, 550, 15000, 0);
createMonster(34000, 500, 500, 700, 23000, 0);
createMonster(40000, 700, 900, 1200, 35000, 0);
createMonster(48000, 1000, 1200, 1500, 70000, 0);
createMonster(57000, 1200, 1700, 2200, 120000, 0);
createMonster(65000, 2000, 2500, 3000, 180000, 0);
createMonster(72000, 2500, 3200, 4000, 290000, 0);
createMonster(80000, 3000, 4500, 5500, 430000, 0);
createMonster(88000, 3500, 6000, 8000, 680000, 0);

/**
 * Base monster attack method. Shared code among all monsters.
 *
 * @param monster {monster object} Monster to attack
 */
function attack(monster, id) {

    if (monster.hp >= 1) {

        playerDamage(monster, id);
        monsterDamage(monster, id);
    }

}



function playerDamage(monster, id) {
    var damage = Math.floor(Math.random() * (player.maxdamage - player.mindamage + 1)) + player.mindamage;
    damage = Math.floor(damage - monster.def * 1.2);
    if (damage > 1) {
        playerDamageDeal(damage, monster, id);
    }
    else {
        Log("<span style=\"color:blue\">Enemy block your attack! </span>");
    }

}

function playerDamageDeal(damage, monster, id) {

    monster.hp -= damage;
    document.getElementById("monster" + id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    Log("You deal " + damage + " <span style=\"color:blue\">damage</span>");
    if (monster.hp < 1) {
        monsterKilled(monster, id);
    }
}

function monsterDamage(monster, id) {
    var dmg = Math.floor(Math.random() * (monster.maxDmg - monster.minDmg + 1)) + monster.minDmg;
    dmg = Math.floor(dmg - player.defense * 1.2);
    if (dmg > 1) {
        monsterDamageDeal(dmg, monster, id);
    }
    else {
        Log("<span style=\"color:green\">You blocked enemy attack! </span>");
    }
}
function monsterDamageDeal(dmg, monster, id) {
    player.health = player.health - dmg;
    document.getElementById("health").innerHTML = player.health;
    Log("Enemy hit you for " + dmg + " <span style=\"color:red\">damage</span>");
    if (player.health < 1) {
        playerDead(monster, id);
    }
}



function playerDead(monster, id) {

    player.health = player.maxhealth;
    monster.hp = monster.maxHp;
    document.getElementById("health").innerHTML = player.health;
    document.getElementById("monster" + id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    Log("<span style=\"color:red\">You have died!</span>");

}

function monsterKilled(monster, id) {

    monster.hp = monster.maxHp;
    document.getElementById("monster" + id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    monsterExperience(monster);
}
function monsterExperience(monster) {

    var expgain = monster.baseExp / (player.level / 5);
    if (player.experience < player.maxexperience) {
        player.experience = Math.floor(player.experience + expgain);
        if (player.experience >= player.maxexperience) {
            player.level += 1;
            player.stats += 2;
            player.experience = player.experience - player.maxexperience;
            player.maxexperience = Math.floor(player.maxexperience * 1.2);
            Log("You leveled up! Your current player.level is: " + player.level);
            document.getElementById("maxexperience").innerHTML = player.maxexperience;
            document.getElementById("level").innerHTML = player.level;
            document.getElementById("stats").innerHTML = player.stats;
            document.getElementById("experience").innerHTML = player.experience;
        } else Log("You gain: " + Math.floor(expgain) + "experience!");
        document.getElementById("experience").innerHTML = player.experience;
    }
    monsterGold();
}

function monsterGold() {
    var goldLog = 0;
    var golddrop = Math.floor((Math.random() * 100) + 1);
    if (golddrop > 95) {
        golddrop = Math.floor((Math.random() * 20) + 1);
        player.gold = player.gold + golddrop;
        Log("You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    } else if (golddrop >= 75) {
        golddrop = Math.floor((Math.random() * 10) + 1);
        player.gold = player.gold + golddrop;
        Log("You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    } else if (golddrop >= 60) {
        golddrop = Math.floor((Math.random() * 5) + 1);
        player.gold = player.gold + golddrop;
        Log("You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    }
}






function bindAttack(monster, id) {
    return function () {
        attack(monster, id);
    }
}



// Bind the attack buttons one for each of the monsters
button1.addEventListener("click", bindAttack(monsters[0], 0));
button2.addEventListener("click", bindAttack(monsters[1], 1));
button3.addEventListener("click", bindAttack(monsters[2], 2));
button4.addEventListener("click", bindAttack(monsters[3], 3));
button5.addEventListener("click", bindAttack(monsters[4], 4));
button6.addEventListener("click", bindAttack(monsters[5], 5));
button7.addEventListener("click", bindAttack(monsters[6], 6));
button8.addEventListener("click", bindAttack(monsters[7], 7));
button9.addEventListener("click", bindAttack(monsters[8], 8));
button10.addEventListener("click", bindAttack(monsters[9], 9));
button11.addEventListener("click", bindAttack(monsters[10], 10));
button12.addEventListener("click", bindAttack(monsters[11], 11));
button13.addEventListener("click", bindAttack(monsters[12], 12));
button14.addEventListener("click", bindAttack(monsters[13], 13));
button15.addEventListener("click", bindAttack(monsters[14], 14));
button16.addEventListener("click", bindAttack(monsters[15], 15));
button17.addEventListener("click", bindAttack(monsters[16], 16));
button18.addEventListener("click", bindAttack(monsters[17], 17));
button19.addEventListener("click", bindAttack(monsters[18], 18));
button20.addEventListener("click", bindAttack(monsters[19], 19));
button21.addEventListener("click", bindAttack(monsters[20], 20));
button22.addEventListener("click", bindAttack(monsters[21], 21));
button23.addEventListener("click", bindAttack(monsters[22], 22));
button24.addEventListener("click", bindAttack(monsters[23], 23));
button25.addEventListener("click", bindAttack(monsters[24], 24));
button26.addEventListener("click", bindAttack(monsters[25], 25));
button27.addEventListener("click", bindAttack(monsters[26], 26));
button28.addEventListener("click", bindAttack(monsters[27], 27));
button29.addEventListener("click", bindAttack(monsters[28], 28));
button30.addEventListener("click", bindAttack(monsters[29], 29));
button31.addEventListener("click", bindAttack(monsters[30], 30));
button32.addEventListener("click", bindAttack(monsters[31], 31));

// ...






function buypot() {
    if (player.gold >= 20) {
        pot += 1;
        player.gold -= 20;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buypot10() {
    if (player.gold >= 200) {
        pot += 10;
        player.gold -= 200;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buyspot() {
    if (player.gold >= 100) {
        spot += 1;
        player.gold -= 100;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buyspot10() {
    if (player.gold >= 1000) {
        spot += 10;
        player.gold -= 1000;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buympot() {
    if (player.gold >= 500) {
        mpot += 1;
        player.gold -= 500;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buympot10() {
    if (player.gold >= 5000) {
        mpot += 10;
        player.gold -= 5000;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function save() {
    var save = {
        playerGold: player.gold,
        playerHealth: player.health,
        playerMaxhealth: player.maxhealth,
        playerStats: player.stats,
        playerLevel: player.level,
        playerDefense: player.defense,
        playerStrength: player.strength,
        playerEndurance: player.endurance,
        playerExperience: player.experience,
        playerMaxexperience: player.maxexperience,
        playerHpregen: player.hpregen,
        playerMindamage: player.mindamage,
        playerMaxdamage: player.maxdamage,
        pot: pot,
        spot: spot,
        mpot: mpot
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.playerGold !== "undefined") player.gold = savegame.playerGold;
    if (typeof savegame.playerHealth !== "undefined") player.health = savegame.playerHealth;
    if (typeof savegame.playerMaxhealth !== "undefined") player.maxhealth = savegame.playerMaxhealth;
    if (typeof savegame.playerStats !== "undefined") player.stats = savegame.playerStats;
    if (typeof savegame.playerLevel !== "undefined") player.level = savegame.playerLevel;
    if (typeof savegame.playerDefense !== "undefined") player.defense = savegame.playerDefense;
    if (typeof savegame.playerExperience !== "undefined") player.experience = savegame.playerExperience;
    if (typeof savegame.playerMaxexperience !== "undefined") player.maxexperience = savegame.playerMaxexperience;
    if (typeof savegame.playerHpregen !== "undefined") player.hpregen = savegame.playerHpregen;
    if (typeof savegame.playerStrength !== "undefined") player.strength = savegame.playerStrength;
    if (typeof savegame.playerEndurance !== "undefined") player.endurance = savegame.playerEndurance;
    if (typeof savegame.playerMaxdamage !== "undefined") player.maxdamage = savegame.playerMaxdamage;
    if (typeof savegame.playerMindamage !== "undefined") player.mindamage = savegame.playerMindamage;
    if (typeof savegame.pot !== "undefined") pot = savegame.pot;
    if (typeof savegame.spot !== "undefined") spot = savegame.spot;
    if (typeof savegame.blackorb !== "undefined") blackorb = savegame.blackorb;
    document.getElementById('gold').innerHTML = player.gold;
    document.getElementById('health').innerHTML = player.health;
    document.getElementById('maxhealth').innerHTML = player.maxhealth;
    document.getElementById('stats').innerHTML = player.stats;
    document.getElementById('level').innerHTML = player.level;
    document.getElementById('defense').innerHTML = player.defense;
    document.getElementById('experience').innerHTML = player.experience;
    document.getElementById('maxexperience').innerHTML = player.maxexperience;
    document.getElementById('hpregen').innerHTML = player.hpregen;
    document.getElementById('strength').innerHTML = player.strength;
    document.getElementById('endurance').innerHTML = player.endurance;
    document.getElementById('maxdamage').innerHTML = player.maxdamage;
    document.getElementById('mindamage').innerHTML = player.mindamage;
    document.getElementById('pot').innerHTML = pot;
    document.getElementById('spot').innerHTML = spot;
    document.getElementById('mpot').innerHTML = mpot;
}

function reset() {
    localStorage.removeItem("save");
    player.gold = 0;
    player.health = 30;
    player.maxhealth = 30;
    player.stats = 0;
    player.level = 1;
    player.defense = 0;
    player.experience = 0;
    player.maxexperience = 100;
    player.hpregen = 2;
    player.strength = 1;
    player.endurance = 0;
    player.maxdamage = 4;
    player.mindamage = 1;
    pot = 0;
    spot = 0;
    mpot = 0;
    document.getElementById('gold').innerHTML = player.gold;
    document.getElementById('health').innerHTML = player.health;
    document.getElementById('maxhealth').innerHTML = player.maxhealth;
    document.getElementById('stats').innerHTML = player.stats;
    document.getElementById('level').innerHTML = player.level;
    document.getElementById('defense').innerHTML = player.defense;
    document.getElementById('experience').innerHTML = player.experience;
    document.getElementById('maxexperience').innerHTML = player.maxexperience;
    document.getElementById('hpregen').innerHTML = player.hpregen;
    document.getElementById('strength').innerHTML = player.strength;
    document.getElementById('endurance').innerHTML = player.endurance;
    document.getElementById('maxdamage').innerHTML = player.maxdamage;
    document.getElementById('mindamage').innerHTML = player.mindamage;
    document.getElementById('pot').innerHTML = pot;
    document.getElementById('spot').innerHTML = spot;
    document.getElementById('mpot').innerHTML = mpot;
};
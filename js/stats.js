window.setInterval(function () {
    if (player.stats >= 1) { // Show "plus" image when player level up
        document.getElementById("vis1").style.visibility = "visible";
        document.getElementById("vis2").style.visibility = "visible";
        document.getElementById("vis3").style.visibility = "visible";
        document.getElementById("vis4").style.visibility = "visible";
        //document.getElementById("vis5").style.visibility = "visible";
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
    document.getElementById('mindamage').innerHTML = player.minDamage().toFixed(0);
    document.getElementById('maxdamage').innerHTML = player.maxDamage().toFixed(0);
    document.getElementById('strength').innerHTML = player.totalStrength() + " (" + '<font color="blue">' + player.equipStrength() + '</font>' + ")";
    document.getElementById("maxhealth").innerHTML = player.maxhealth();
    document.getElementById("hpregen").innerHTML = player.hpregen();
    document.getElementById("stats").innerHTML = player.stats;
    document.getElementById("endurance").innerHTML = player.totalEndurance() + " (" + '<font color="blue">' + player.equipEndurance() + '</font>' + ")";
    document.getElementById("agility").innerHTML = player.totalAgility() + " (" + '<font color="blue">' + player.equipAgility() + '</font>' + ")";
    document.getElementById("accuracy").innerHTML = player.accuracy().toFixed(2);
    document.getElementById("dexterity").innerHTML = player.totalDexterity() + " (" + '<font color="blue">' + player.equipDexterity() + '</font>' + ")";
    document.getElementById("defense").innerHTML = player.defense().toFixed(0);
    document.getElementById("criticalDamage").innerHTML = (player.criticalDamage() * 100).toFixed(0) + "%";
    document.getElementById("criticalChance").innerHTML = player.criticalChance().toFixed(1);
    document.getElementById("intelligence").innerHTML = player.totalIntelligence() + " (" + '<font color="blue">' + player.equipIntelligence() + '</font>' + ")";
    document.getElementById("mana").innerHTML = player.mana.toFixed(0);
    document.getElementById("maxmana").innerHTML = player.maxMana().toFixed(0);
    document.getElementById("wisdom").innerHTML = player.totalWisdom() + " (" + '<font color="blue">' + player.equipWisdom() + '</font>' + ")";
    document.getElementById("manaRegen").innerHTML = player.manaRegen();
    document.getElementById("luck").innerHTML = player.totalLuck() + " (" + '<font color="blue">' + player.equipLuck() + '</font>' + ")";
    document.getElementById("evasion").innerHTML = player.evasion().toFixed(1);
    document.getElementById("dropRate").innerHTML = (player.dropRate() * 100).toFixed(0);
    document.getElementById("expRate").innerHTML = (player.expRate() * 100).toFixed(0);
    document.getElementById("goldRate").innerHTML = (player.goldRate() * 100).toFixed(0);
    document.getElementById("level").innerHTML = player.level;
    document.getElementById("maxexperience").innerHTML = player.maxExperience;
    document.getElementById("experience").innerHTML = player.experience;
    document.getElementById("gold").innerHTML = player.gold.toFixed(0);
    document.getElementById("buyBackpack").innerHTML = backpackStatus.price;
    document.getElementById("buyStat").innerHTML = statStatus.price;
    document.getElementById('potion').innerHTML = pot;
    document.getElementById('superPotion').innerHTML = spot;
    document.getElementById('megaPotion').innerHTML = mpot;
}, 1);
//auto Save
window.setInterval(function () {
    save()
}, 10000);

window.setInterval(function () {
    var exppercent = 0; //Player experience in % values at the top bar
    exppercent = (Math.floor((player.experience / player.maxExperience) * 100));
    var exppercent2 = (Math.floor((player.experience / player.maxExperience) * 100));
    exppercent2 = exppercent2 / 2.5;
    var divArray = document.getElementById('progressBar');
    divArray.style.width = ((exppercent2) + '%');
    document.getElementById("exppercent").innerHTML = exppercent;
}, 100);
window.setInterval(function () {
    var healthPercent = (Math.floor((player.health / player.maxhealth()) * 100));
    healthPercent = healthPercent / 2.5;
    var divArray = document.getElementById('progressBar2');
    divArray.style.width = ((healthPercent) + '%');
}, 100);
window.setInterval(function () { //Health regen
    if (player.isDead == false) {
        if (player.health < player.maxhealth()) player.health += player.hpregen();
        if (player.health > player.maxhealth()) player.health = player.maxhealth();
    }
    document.getElementById('health').innerHTML = player.health;
}, 1000);
window.setInterval(function () { //Mana regen
    if (player.mana < player.maxMana()) player.mana += player.manaRegen();
    if (player.mana > player.maxMana()) player.mana = player.maxMana();
    document.getElementById('mana').innerHTML = player.mana.toFixed(0);
}, 1000);

function levelUp() {
    player.baseStrength += 4.6;
    player.baseEndurance += 4.4;
    player.baseAgility += 3.4;
    player.baseDexterity += 2.7;
    player.baseWisdom += 2.3;
    player.baseIntelligence += 3.5;
    player.baseLuck += 1.6;
    quest();
    CreateMonsterHtml();
}

function loadIsEquipped() {
    if (equippedItems.weapon.subType === "sword") {
        player.isSword = true;
    }
    else if (equippedItems.weapon.subType === "axe") {
        player.isAxe = true;
    }
    else if (equippedItems.weapon.subType === "mace") {
        player.isMace = true;
    }
    else if (equippedItems.weapon.subType === "staff") {
        player.isStaff = true;
    }
    else if (equippedItems.weapon.subType === "ranged") {
        player.isRanged = true;
    }
};

function resetIsEquipped() {
        player.isSword = false;
        player.isAxe = false;
        player.isMace = false;
        player.isStaff = false;
        player.isRanged = false;
};


//Upgrading player stats

//Strength
function upgradeStrength(event) {
    if (event.shiftKey) {
        if (player.stats >= 100) {
            player.stats = player.stats - 100;
            player.baseStrength += 100;
        }
    }
    if (event.ctrlKey) {
        if (player.stats >= 10) {
            player.stats = player.stats - 10;
            player.baseStrength += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.stats >= 1) {
            player.stats = player.stats - 1;
            player.baseStrength += 1;
        }
    }
}
//Endurance
function upgradeEndurance(event) {
    if (event.shiftKey) {
        if (player.stats >= 100) {
            player.stats = player.stats - 100;
            player.baseEndurance += 100;
        }
    }
    if (event.ctrlKey) {
        if (player.stats >= 10) {
            player.stats = player.stats - 10;
            player.baseEndurance += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.stats >= 1) {
            player.stats = player.stats - 1;
            player.baseEndurance += 1;
        }
    }
}
//Agility
function upgradeAgility(event) {
    if (event.shiftKey) {
        if (player.stats >= 100) {
            player.stats = player.stats - 100;
            player.baseAgility += 100;
        }
    }
    if (event.ctrlKey) {
        if (player.stats >= 10) {
            player.stats = player.stats - 10;
            player.baseAgility += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.stats >= 1) {
            player.stats = player.stats - 1;
            player.baseAgility += 1;
        }
    }
}
//Dexterity
function upgradeDexterity(event) {
    if (event.shiftKey) {
        if (player.stats >= 100) {
            player.stats = player.stats - 100;
            player.baseDexterity += 100;
        }
    }
    if (event.ctrlKey) {
        if (player.stats >= 10) {
            player.stats = player.stats - 10;
            player.baseDexterity += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.stats >= 1) {
            player.stats = player.stats - 1;
            player.baseDexterity += 1;
        }
    }
}
//Wisdom
function upgradeWisdom(event) {
    if (event.shiftKey) {
        if (player.stats >= 100) {
            player.stats = player.stats - 100;
            player.baseWisdom += 100;
        }
    }
    if (event.ctrlKey) {
        if (player.stats >= 10) {
            player.stats = player.stats - 10;
            player.baseWisdom += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.stats >= 1) {
            player.stats = player.stats - 1;
            player.baseWisdom += 1;
        }
    }
}
//Intelligence
function upgradeIntelligence(event) {
    if (event.shiftKey) {
        if (player.stats >= 100) {
            player.stats = player.stats - 100;
            player.baseIntelligence += 100;
        }
    }
    if (event.ctrlKey) {
        if (player.stats >= 10) {
            player.stats = player.stats - 10;
            player.baseIntelligence += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.stats >= 1) {
            player.stats = player.stats - 1;
            player.baseIntelligence += 1;
        }
    }
}
//Luck
function upgradeLuck(event) {
    if (event.shiftKey) {
        if (player.stats >= 100) {
            player.stats = player.stats - 100;
            player.baseLuck += 100;
        }
    }
    if (event.ctrlKey) {
        if (player.stats >= 10) {
            player.stats = player.stats - 10;
            player.baseLuck += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.stats >= 1) {
            player.stats = player.stats - 1;
            player.baseLuck += 1;
        }
    }
}
function autoAttack(monster) {
    var ManaCost = monster.Stats.manaCost;
    var autoBattle = window.setInterval(function () {
        if (player.mana >= ManaCost && player.autoBattle == true) {
            player.isAuto = true;
            player.mana -= ManaCost;
            attack(monster)
        }
        else if (player.autoBattle == false) {
            clearInterval(autoBattle);
            player.isAuto = false;
        };
    }, 1000)
};
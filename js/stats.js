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
    document.getElementById('mindamage').innerHTML = player.minDamage().toFixed(0);
    document.getElementById('maxdamage').innerHTML = player.maxDamage().toFixed(0);
    document.getElementById('strength').innerHTML = player.totalStrength();
    document.getElementById("maxhealth").innerHTML = player.maxhealth();
    document.getElementById("hpregen").innerHTML = player.hpregen();
    document.getElementById("stats").innerHTML = player.stats;
    document.getElementById("endurance").innerHTML = player.totalEndurance();
    document.getElementById("agility").innerHTML = player.totalAgility();
    document.getElementById("accuracy").innerHTML = player.accuracy().toFixed(2);
    document.getElementById("dexterity").innerHTML = player.totalDexterity();
    document.getElementById("defense").innerHTML = player.defense().toFixed(2);
    document.getElementById("criticalDamage").innerHTML = player.criticalDamage().toFixed(2) * 100 + "%";
    document.getElementById("criticalChance").innerHTML = player.criticalChance().toFixed(2);
    document.getElementById("intelligence").innerHTML = player.totalIntelligence();
    document.getElementById("mana").innerHTML = player.mana.toFixed(0);
    document.getElementById("maxmana").innerHTML = player.maxMana().toFixed(0);
    document.getElementById("wisdom").innerHTML = player.totalWisdom();
    document.getElementById("manaRegen").innerHTML = player.manaRegen();
    document.getElementById("luck").innerHTML = player.totalLuck();
    document.getElementById("evasion").innerHTML = player.evasion();
    document.getElementById("dropRate").innerHTML = player.dropRate() * 100;
    document.getElementById("level").innerHTML = player.level;
    document.getElementById("maxexperience").innerHTML = player.maxExperience;
    document.getElementById("experience").innerHTML = player.experience;
    document.getElementById("gold").innerHTML = player.gold;

}, 1);

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
    if (player.health < player.maxhealth()) player.health += player.hpregen();
    if (player.health > player.maxhealth()) player.health = player.maxhealth();
    document.getElementById('health').innerHTML = player.health;
}, 1000);
window.setInterval(function () { //Mana regen
    if (player.mana < player.maxMana()) player.mana += player.manaRegen();
    if (player.mana > player.maxMana()) player.mana = player.maxMana();
    document.getElementById('mana').innerHTML = player.mana.toFixed(0);
}, 1000);

//Upgrading player stats
function upgradeStrength() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.baseStrength += 1;

    }
};

function upgradeEndurance() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.baseEndurance += 1;
        Log("Your maximal health is now: " + player.maxhealth() + "!");
    }
};

function upgradeAgility() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.baseAgility += 1;
        Log("You have increased your agility by 1, evasion, critical chance and accuracy increased!");

    }
};

function upgradeDexterity() {
    if (player.stats >= 1) {
        player.baseDexterity += 1;
        player.stats = player.stats - 1;
        Log("You increased your dexterity by 1, defense, critical chance and critical damage increased.");

    }
};

function upgradeIntelligence() {
    if (player.stats >= 1) {
        player.baseIntelligence += 1;
        player.stats = player.stats - 1;
        Log("You have increased your intelligence by 1");

    }
};

function upgradeWisdom() {
    if (player.stats >= 1) {
        player.baseWisdom += 1;
        player.stats = player.stats - 1;
        Log("You have increased your wisdom by 1");
    }
};

function upgradeLuck() {
    if (player.stats >= 1) {
        player.baseLuck += 1;
        player.stats = player.stats - 1;
        Log("You have increased your luck by 1! Critical damage/chance and drop rate increased!");
    }
};

function loadIsEquipped() {
    if (equippedItems.weapon.itemType === "Sword") {
        player.isSword = true;
    }
    else if (equippedItems.weapon.itemType === "Dagger") {
        player.isDagger = true;
    }
    else if (equippedItems.weapon.itemType === "Axe") {
        player.isAxe = true;
    }
    else if (equippedItems.weapon.itemType === "Mace") {
        player.isMace = true;
    }
    else if (equippedItems.weapon.itemType === "Staff") {
        player.isStaff = true;
    }
    else if (equippedItems.weapon.itemType === "Fist") {
        player.isFist = true;
    }
    else if (equippedItems.weapon.itemType === "Bow") {
        player.isBow = true;
    }
};
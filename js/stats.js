function updateHtml() {
    if (player.properties.stats >= 1) { // Show "plus" image when player level up
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
    var minDamage;
    var maxDamage;
    var strength;
    var endurance;
    var agility;
    var dexterity;
    var intelligence;
    var wisdom;
    var luck;
    var hpRegen;
    var stats;
    var accuracy;
    var defense;
    var criticalDamage;
    var criticalChance;
    var mana;
    var maxMana;
    var manaRegen;
    var evasion;
    var dropRate;
    var expRate;
    var goldRate;
    var level;
    var maxExperience;
    var experience;
    var gold;
    var buyBackpack;
    var buyStat;
    var potion;
    var superPotion;
    var megaPotion;
    var skillPoints;

    minDamage = document.getElementById('mindamage');
    maxDamage = document.getElementById('maxdamage');
    strength = document.getElementById('strength');
    endurance = document.getElementById("endurance");
    hpRegen = document.getElementById("hpregen");
    stats = document.getElementById("stats");
    agility = document.getElementById("agility");
    dexterity = document.getElementById("dexterity");
    wisdom = document.getElementById("wisdom");
    intelligence = document.getElementById("intelligence");
    luck = document.getElementById("luck");
    mana = document.getElementById("mana");
    manaRegen = document.getElementById("manaRegen");
    maxMana = document.getElementById("maxmana");
    criticalDamage = document.getElementById("criticalDamage");
    criticalChance = document.getElementById("criticalChance");
    defense = document.getElementById("defense");
    evasion = document.getElementById("evasion");
    accuracy = document.getElementById("accuracy");
    dropRate = document.getElementById("dropRate");
    expRate = document.getElementById("expRate");
    goldRate = document.getElementById("goldRate");
    level = document.getElementById("level");
    maxExperience = document.getElementById("maxexperience");
    experience = document.getElementById("experience");
    gold = document.getElementById("gold");
    buyBackpack = document.getElementById("buyBackpack");
    buyStat = document.getElementById("buyStat");
    potion = document.getElementById('potion');
    superPotion = document.getElementById('superPotion');
    megaPotion = document.getElementById('megaPotion');
    skillPoints = document.getElementById('skillPoints');
    minDamage.innerHTML = player.functions.minDamage().toFixed(0);
    maxDamage.innerHTML = player.functions.maxDamage().toFixed(0);
    strength.innerHTML = player.functions.totalStrength() + " (" + '<font color="blue">' + player.functions.equipStrength() + '</font>' + ")";
    endurance.innerHTML = player.functions.totalEndurance() + " (" + '<font color="blue">' + player.functions.equipEndurance() + '</font>' + ")";
    hpRegen.innerHTML = player.functions.hpregen();
    stats.innerHTML = player.properties.stats;
    agility.innerHTML = player.functions.totalAgility() + " (" + '<font color="blue">' + player.functions.equipAgility() + '</font>' + ")";
    accuracy.innerHTML = player.functions.accuracy().toFixed(2);
    dexterity.innerHTML = player.functions.totalDexterity() + " (" + '<font color="blue">' + player.functions.equipDexterity() + '</font>' + ")";
    defense.innerHTML = player.functions.defense().toFixed(0);
    criticalDamage.innerHTML = (player.functions.criticalDamage() * 100).toFixed(0) + "%";
    criticalChance.innerHTML = player.functions.criticalChance().toFixed(1);
    intelligence.innerHTML = player.functions.totalIntelligence() + " (" + '<font color="blue">' + player.functions.equipIntelligence() + '</font>' + ")";
    mana.innerHTML = player.properties.mana.toFixed(0);
    maxMana.innerHTML = player.functions.maxMana().toFixed(0);
    wisdom.innerHTML = player.functions.totalWisdom() + " (" + '<font color="blue">' + player.functions.equipWisdom() + '</font>' + ")";
    manaRegen.innerHTML = player.functions.manaRegen();
    luck.innerHTML = player.functions.totalLuck() + " (" + '<font color="blue">' + player.functions.equipLuck() + '</font>' + ")";
    evasion.innerHTML = player.functions.evasion().toFixed(1);
    dropRate.innerHTML = (player.functions.dropRate() * 100).toFixed(0);
    expRate.innerHTML = (player.functions.expRate() * 100).toFixed(0);
    goldRate.innerHTML = (player.functions.goldRate() * 100).toFixed(0);
    level.innerHTML = player.properties.level;
    maxExperience.innerHTML = player.properties.maxExperience;
    experience.innerHTML = player.properties.experience;
    gold.innerHTML = player.properties.gold.toFixed(0);
    buyBackpack.innerHTML = backpackStatus.price;
    buyStat.innerHTML = statStatus.price;
    potion.innerHTML = pot;
    superPotion.innerHTML = spot;
    megaPotion.innerHTML = mpot;
    skillPoints.innerHTML = player.properties.skillPoints;
};
//auto Save
/*window.setInterval(function () {
    saveGameFunction("autoSave")
}, 10000);
*/
function autoSave() {
    saveGameFunction("autoSave");
    setTimeout(autoSave, 10000);
};
window.setInterval(function () {
    var exppercent = 0; //Player experience in % values at the top bar
    exppercent = (Math.floor((player.properties.experience / player.properties.maxExperience) * 100));
    var divArray = document.getElementById('progressBar');
    divArray.style.width = ((exppercent) + '%');
    document.getElementById("exppercent").innerHTML = exppercent + "%";
}, 100);
window.setInterval(function () {
    var healthPercent = (Math.floor((player.properties.health / player.functions.maxhealth()) * 100));
    var divArray = document.getElementById('progressBar2');
    divArray.style.width = ((healthPercent) + '%');
}, 100);
window.setInterval(function () { //Health regen
    if (player.properties.isDead == false) {
        if (player.properties.health < player.functions.maxhealth()) player.properties.health += player.functions.hpregen();
        if (player.properties.health > player.functions.maxhealth()) player.properties.health = player.functions.maxhealth();
    }
    document.getElementById('health').innerHTML = player.properties.health + "/" + player.functions.maxhealth();
}, 1000);
window.setInterval(function () { //Mana regen
    if (player.properties.mana < player.functions.maxMana()) player.properties.mana += player.functions.manaRegen();
    if (player.properties.mana > player.functions.maxMana()) player.properties.mana = player.functions.maxMana();
    document.getElementById('mana').innerHTML = player.properties.mana.toFixed(0);
}, 1000);

function levelUp() {
    for (var hero in characterRaces) {
        var heroRace = characterRaces[hero];
        if (player.properties.heroRace === heroRace.name) {
            player.properties.baseStrength += heroRace.strength;
            player.properties.baseEndurance += heroRace.endurance;
            player.properties.baseAgility += heroRace.agility;;
            player.properties.baseDexterity += heroRace.dexterity;
            player.properties.baseWisdom += heroRace.wisdom;
            player.properties.baseIntelligence += heroRace.intelligence;
            player.properties.baseLuck += heroRace.luck;
            player.properties.skillPoints += 1;
        };
    };
    quest();
    CreateMonsterHtml();
    updateHtml();
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
};

function loadIsEquipped() {
    if (equippedItems.weapon.subType === "sword") {
        player.properties.isSword = true;
    }
    else if (equippedItems.weapon.subType === "axe") {
        player.properties.isAxe = true;
    }
    else if (equippedItems.weapon.subType === "mace") {
        player.properties.isMace = true;
    }
    else if (equippedItems.weapon.subType === "staff") {
        player.properties.isStaff = true;
    }
    else if (equippedItems.weapon.subType === "ranged") {
        player.properties.isRanged = true;
    }
    else if (equippedItems.weapon.subType === "fist") {
        player.properties.isFist = true;
    };
};

function resetIsEquipped() {
    player.properties.isSword = false;
    player.properties.isAxe = false;
    player.properties.isMace = false;
    player.properties.isStaff = false;
    player.properties.isRanged = false;
    player.properties.isFist = true; // Set true since no weapon equipped means fighting with "fist" ._.
};
//Upgrading player stats

//Strength
function upgradeStrength(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseStrength += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseStrength += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseStrength += 1;
        };
    };
    updateHtml();
};
//Endurance
function upgradeEndurance(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseEndurance += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseEndurance += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseEndurance += 1;
        };
    };
    updateHtml();
};
//Agility
function upgradeAgility(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseAgility += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseAgility += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseAgility += 1;
        };
    };
    updateHtml();
};
//Dexterity
function upgradeDexterity(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseDexterity += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseDexterity += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseDexterity += 1;
        };
    };
    updateHtml();
};
//Wisdom
function upgradeWisdom(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseWisdom += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseWisdom += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseWisdom += 1;
        };
    };
    updateHtml();
};
//Intelligence
function upgradeIntelligence(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseIntelligence += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseIntelligence += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseIntelligence += 1;
        };
    };
    updateHtml();
};
//Luck
function upgradeLuck(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseLuck += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseLuck += 10;

        }
    }
    else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseLuck += 1;
        };
    };
    updateHtml();
};
function autoAttack(monster, monsterStats) {
    var ManaCost = monster.Stats.manaCost;
    var autoBattle = window.setInterval(function () {
        if (player.properties.mana >= ManaCost && player.properties.autoBattle == true) {
            player.properties.mana -= ManaCost;
            attack(monster, monsterStats)
        }
        else if (player.properties.autoBattle == false) {
            clearInterval(autoBattle);
            player.properties.isAuto = false;
        };
    }, 1000)
};

//All skill charge = maxCharge, when game loads, player equips items i.e change his stats like wisdom/int that can provide more/less charges.
function skillChargeFill() {
    var skill = activeSpells;
    for (spell in skill) {
        var selectedSpell = skill[spell];
        selectedSpell.charge = selectedSpell.maxCharge();
    };
};

function upgradeSpell(spellName) {
    if (activeSpells.hasOwnProperty(spellName)) {
        var selectedSpell = activeSpells[spellName];
        if (selectedSpell.levelReq < player.properties.level) {
            if (selectedSpell.level < 5) {
                if (player.properties.skillPoints > 0) {
                    player.properties.skillPoints--;
                    selectedSpell.level++;
                    selectedSpell.levelReq++;
                    Log(selectedSpell.name + " level is now " + selectedSpell.level);
                }
                else {
                    Log("You do not have enough skill points.");
                }
            }
            else {
                Log(selectedSpell.name + " is already max level.");
            };
        }
        else {
            Log("Your level is not high enough to upgrade this skill.");
        };
    };
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
    updateHtml();
};
var spellTotalManaCost = 0;
function spellActivation(spellName) {
    if (activeSpells.hasOwnProperty(spellName)) {
        var selectedSpell = activeSpells[spellName];
        if (selectedSpell.isActive == true) {
            selectedSpell.isActive = false;
            spellTotalManaCost -= selectedSpell.manaReq;
        }
        else if (selectedSpell.levelReq > player.properties.level) {
            Log("Your level is not high enough to activate it");
        }
        else if (spellTotalManaCost + selectedSpell.manaReq <= player.functions.maxMana()) {
            selectedSpell.isActive = true;
            spellTotalManaCost += selectedSpell.manaReq;
        }
        else {
            Log("You do not have enough \"Max Mana\" to activate this spell. You need " + selectedSpell.manaReq + " Max Mana.");
        };
    };
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
};

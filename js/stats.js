function updateHtml() {
    if (player.properties.stats >= 1) { // Show "plus" image when player level up
        document.getElementById("Strength").style.visibility = "visible";
        document.getElementById("Endurance").style.visibility = "visible";
        document.getElementById("Agility").style.visibility = "visible";
        document.getElementById("Dexterity").style.visibility = "visible";
        document.getElementById("Wisdom").style.visibility = "visible";
        document.getElementById("Intelligence").style.visibility = "visible";
        document.getElementById("Luck").style.visibility = "visible";
    } else {
        document.getElementById("Strength").style.visibility = "hidden";
        document.getElementById("Endurance").style.visibility = "hidden";
        document.getElementById("Agility").style.visibility = "hidden";
        document.getElementById("Dexterity").style.visibility = "hidden";
        document.getElementById("Wisdom").style.visibility = "hidden";
        document.getElementById("Intelligence").style.visibility = "hidden";
        document.getElementById("Luck").style.visibility = "hidden";
    }
    var level;
    var maxExperience;
    var experience;
    var gold;
    var buyBackpack;
    var buyStat;
    var potion;
    var superPotion;
    var megaPotion;

    level = document.getElementById("level");
    maxExperience = document.getElementById("maxexperience");
    experience = document.getElementById("experience");
    gold = document.getElementById("gold");
    buyBackpack = document.getElementById("buyBackpack");
    buyStat = document.getElementById("buyStat");
    potion = document.getElementById('potion');
    superPotion = document.getElementById('superPotion');
    megaPotion = document.getElementById('megaPotion');
    level.innerHTML = player.properties.level;
    maxExperience.innerHTML = player.properties.maxExperience;
    experience.innerHTML = player.properties.experience;
    gold.innerHTML = player.properties.gold.toFixed(0);
    buyBackpack.innerHTML = backpackStatus.price;
    buyStat.innerHTML = statStatus.price;
    potion.innerHTML = pot;
    superPotion.innerHTML = spot;
    megaPotion.innerHTML = mpot;
    primaryStatUpdate();
    secondaryStatUpdate();
};

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
   // document.getElementById('mana').innerHTML = player.properties.mana.toFixed(0);
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
};

function resetIsEquipped() {
    player.properties.isSword = false;
    player.properties.isAxe = false;
    player.properties.isMace = false;
    player.properties.isStaff = false;
    player.properties.isRanged = false;
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

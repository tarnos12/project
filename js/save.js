"use strict";
function saveGameFunction(saveType, slot) {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    if (hour < 10) {
        hour = "0" + d.getHours();
    };
    if (minute < 10) {
        minute = "0" + d.getMinutes();
    };
    if (second < 10) {
        second = "0" + d.getSeconds();
    };
    document.getElementById("saveTime").innerHTML = "Last saved: " + hour + ":" + minute + ":" + second;
    var saveGame = {
        playerProperties: player.properties,
        //Equipped Items
        inventory: playerInventory,
        //Other
        backpackStatus: backpackStatus,
        statStatus: statStatus,
    };
    for (var key in equippedItems) {
        var item = equippedItems[key];
        saveGame["player" + key] = item;
    }
    for (var key in monsterList) {
        var monsterKills = monsterList[key].killCount;
        saveGame[key] = monsterKills;
    };
    for (var key in playerPassive) {
        var passive = playerPassive[key].level;
        saveGame[key] = passive;
    };
    for (var key in playerProfession) {
        var profession = playerProfession[key];
        var level = profession.level;
        var experience = profession.experience;
        var maxExperience = profession.maxExperience;
        saveGame[key + "Level"] = level;
        saveGame[key + "Exp"] = experience;
        saveGame[key + "MaxExp"] = maxExperience;
    }
    for (var key in weaponMastery) {
        var mastery = weaponMastery[key];
        var level = mastery.level;
        var experience = mastery.experience;
        var maxExperience = mastery.maxExperience;
        saveGame[key + "Level"] = level;
        saveGame[key + "Exp"] = experience;
        saveGame[key + "MaxExp"] = maxExperience;
    }
    for (var key in characterRaces) {
        var race = characterRaces[key];
        var raceAge = race.raceAge;
        saveGame[key + "raceAge"] = raceAge;
    }
    if (saveType === 'autoSave') {
        if (slot === 0) {
            localStorage['EncodedSave'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave'];
        }
        if (slot === 1) {
            localStorage['EncodedSave1'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave1'];
        }
        else if (slot === 2) {
            localStorage['EncodedSave2'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave2'];
        }
        else if (slot === 3) {
            localStorage['EncodedSave3'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave3'];
        }
    }
    else if (saveType === 'manualSave') {
        Log("Game Saved");
        if (slot === 0) {
            localStorage['EncodedSave'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave'];
        }
        if (slot === 1) {
            localStorage['EncodedSave1'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave1'];
        }
        else if (slot === 2) {
            localStorage['EncodedSave2'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave2'];
        }
        else if (slot === 3) {
            localStorage['EncodedSave3'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave3'];
        };
    };
    executeIntervalFunctionsOnce();
};
var executeIntervalFunctionsOnce = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            var healthPercent2;
            var expPercent2;
            var manaPercent2;
            healthPercent2 = setInterval(function () { healthPercent() }, 100);
            expPercent2 = setInterval(function () { expPercent() }, 100);
            manaPercent2 = setInterval(function () { manaPerCent() }, 100);
        };
    };
})();

function loadGame(slot) {
    load(slot);
    refillShopInterval();
};

function autoSave() {
    var slot = player.properties.saveSlot;
    saveGameFunction("autoSave", slot);
    setTimeout(autoSave, 10000);
};


function newGame(slot) {
    if (confirm("Are you sure?") === true) {
        characterCreationHtml();
        player.properties.saveSlot = slot;
        if (hardcoreMode === true) {
            player.properties.hardcoreMode = true;
        };
        EquippedItemsEmpty();
        CreatePlayerHotBar();
        CreatePlayerSkillsHtml();
        primaryStatUpdate();
        secondaryStatUpdate();
        saveGameSlot();
        refillShopInterval();
        shopOther();
        CreateInventoryWeaponHtml();
        unlockMineral();
        checkBoxHtml();
        createAlchemyHtml();
        createPotionInventory();
        craftingHtml();
        MakeMonsterList();
        CreateMonsterHtml();
        autoSave();
        playerHealthBar();
        playerManaBar();
        manaRegen();
        startAudio();
    };
};

function load(slot) {
    if (slot === 1) {
        if (localStorage['EncodedSave1']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSave1']));
            if (typeof savegame.playerProperties.saveslot !== "undefined") player.properties.saveSlot = 1;
        };
    }
    else if (slot === 0) {
        if (localStorage['EncodedSave']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSave']));
            if (typeof savegame.playerProperties.saveslot !== "undefined") player.properties.saveSlot = 0;
        };
    }
    else if (slot === 2) {
        if (localStorage['EncodedSave2']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSave2']));
            if (typeof savegame.playerProperties.saveslot !== "undefined") player.properties.saveSlot = 2;
        };
    }
    else if (slot === 3) {
        if (localStorage['EncodedSave3']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSave3']));
            if (typeof savegame.playerProperties.saveslot !== "undefined") player.properties.saveSlot = 3;
        };
    };
    if (savegame !== undefined) {
        if (typeof savegame.playerProperties !== "undefined") player.properties = savegame.playerProperties;
        //Check if player object is missing any properties. It will add them with default values if they are missing(In case of an old save which didnt have certain properties)
        var playerDefault = defaultValues.properties;
        for (var key in playerDefault) {
            if (playerDefault.hasOwnProperty(key)) {
                if (savegame.playerProperties[key] === undefined) {
                    savegame.playerProperties[key] = playerDefault[key];
                };
            };
        };

        if (typeof savegame.backpackStatus !== "undefined") backpackStatus = savegame.backpackStatus;
        if (typeof savegame.statStatus !== "undefined") statStatus = savegame.statStatus;
        if (typeof savegame.inventory !== "undefined") playerInventory = savegame.inventory;

        document.getElementById("gold").innerHTML = player.properties.gold;
        MakeMonsterList();
        for (var key in equippedItems) {
            if (typeof savegame["player" + key] !== "undefined") equippedItems[key] = savegame["player" + key];
        }
        for (var key in monsterList) {
            if (typeof savegame[key] !== "undefined") monsterList[key].killCount = savegame[key];
        };
        for (var key in playerPassive) {
            if (typeof savegame[key] !== "undefined") playerPassive[key].level = savegame[key];
        }

        for (var key in playerProfession) {
            if (typeof savegame[key + "Level"] !== "undefined") playerProfession[key].level = savegame[key + "Level"];
            if (typeof savegame[key + "Exp"] !== "undefined") playerProfession[key].experience = savegame[key + "Exp"];
            if (typeof savegame[key + "MaxExp"] !== "undefined") playerProfession[key].maxExperience = savegame[key + "MaxExp"];
        }
        for (var key in weaponMastery) {
            if (typeof savegame[key + "Level"] !== "undefined") weaponMastery[key].level = savegame[key + "Level"];
            if (typeof savegame[key + "Exp"] !== "undefined") weaponMastery[key].experience = savegame[key + "Exp"];
            if (typeof savegame[key + "MaxExp"] !== "undefined") weaponMastery[key].maxExperience = savegame[key + "MaxExp"];
        }
        for (var key in characterRaces) {
            if (typeof savegame[key + "raceAge"] !== "undefined") characterRaces[key].raceAge = savegame[key + "raceAge"];
        }
        loadIsEquipped();
        CreateWeaponSkillHtml();
        quest();
        CreateMonsterHtml();
        CreatePlayerSkillsHtml();
        updateBar();
        characterCreationHtml();
        playerReviveCheck();
        removeStartingScreen();
        unequipItemLoad();
        CreateInventoryWeaponHtml();
        primaryStatUpdate();
        secondaryStatUpdate();
        EquippedItemsEmpty();
        checkIfEquippedEmpty();
        updateHtml();
        CreatePlayerHotBar();
        saveGameSlot();
        shopOther();
        createPotionInventory();
        unlockMineral();
        unlockHerb();
        checkBoxHtml();
        playerProfessionHtml();
        createAlchemyHtml();
        craftingHtml();
        playerHealthBar();
        playerManaBar();
        manaRegen();
        changeDifficulty();
        startAudio();
        audioVolume(0.1, true);
    }
    else {
        if (confirm("Do you want to start a new game?") === true) {
            newGame(slot);
        };
    };
    autoSave(slot);
    versionCheck(slot);
};

function resetCheck() {
    var slot = player.properties.saveSlot;
    if (confirm("Are you sure?") === true) {
        reset(slot);
    };
};
function resetallSavesCheck() {
    if (confirm("Do you want to remove all saves? Do it if your game breaks etc.") === true) {
        reset(0)
        reset(1)
        reset(2)
        reset(3)
    };
};
function reset(slot) {
    if (slot === 0) {
        localStorage.removeItem("EncodedSave");
    }
    if (slot === 1) {
        localStorage.removeItem("EncodedSave1");
    }
    else if (slot === 2) {
        localStorage.removeItem("EncodedSave2");
    }
    else if (slot === 3) {
        localStorage.removeItem("EncodedSave3");
    }
    console.log('test')
    pageReload();
};//test

function pageReload() {
    location.reload();
};
function versionCheck(slot) {
    if (player.properties.gameVersion !== currentGameVersion) {
        reset(slot);
    };
};

function importSave() {
    var slot = player.properties.saveSlot;
    var importSave = document.getElementById('saveImport').value;
    var savegame = JSON.parse(atob(importSave));
    savegame.playerProperties.saveSlot = slot;
    if (slot === 1) {
        localStorage['EncodedSave1'] = btoa(JSON.stringify(savegame));
    }
    else if (slot === 0) {
        localStorage['EncodedSave'] = btoa(JSON.stringify(savegame));
    }
    else if (slot === 2) {
        localStorage['EncodedSave2'] = btoa(JSON.stringify(savegame));
    }
    else if (slot === 3) {
        localStorage['EncodedSave3'] = btoa(JSON.stringify(savegame));
    }
    load(slot);
};
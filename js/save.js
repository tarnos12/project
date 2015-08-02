function saveGameFunction(saveType) {
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
        playerWeapon: equippedItems.weapon,
        playerShield: equippedItems.shield,
        playerChest: equippedItems.chest,
        playerHelmet: equippedItems.helmet,
        playerLegs: equippedItems.legs,
        playerBoots: equippedItems.boots,
        playerRing: equippedItems.ring,
        playerAmulet: equippedItems.amulet,
        playerTalisman: equippedItems.talisman,
        inventory: playerInventory,
        //Weapon mastery levels and experience
        SwordExp: weaponMastery.sword.exp,
        SwordMaxExp: weaponMastery.sword.maxExp,
        SwordLevel: weaponMastery.sword.level,
        AxeExp: weaponMastery.axe.exp,
        AxeMaxExp: weaponMastery.axe.maxExp,
        AxeLevel: weaponMastery.axe.level,
        MaceExp: weaponMastery.mace.exp,
        MaceMaxExp: weaponMastery.mace.maxExp,
        MaceLevel: weaponMastery.mace.level,
        StaffExp: weaponMastery.staff.exp,
        StaffMaxExp: weaponMastery.staff.maxExp,
        StaffLevel: weaponMastery.staff.level,
        RangedExp: weaponMastery.ranged.exp,
        RangedMaxExp: weaponMastery.ranged.maxExp,
        RangedLevel: weaponMastery.ranged.level,
        //Passive Skill level
        DamageBonus: playerPassive.brawler.level,
        DamageBonus2: playerPassive.overpower.level,
        HealthBonus: playerPassive.vitality.level,
        HealthBonus2: playerPassive.fortitude.level,
        MagicFindBonus: playerPassive.looter.level,
        MagicFindBonus2: playerPassive.explorer.level,
        SixthSenseBonus: playerPassive.sixthSense.level,
        SpiritualAttunement: playerPassive.spiritualAttunement.level,
        Mighty: playerPassive.mighty.level,
        Constitution: playerPassive.constitution.level,
        Curiosity: playerPassive.curiosity.level,
        MasterofArms: playerPassive.masterofArms.level,
        Robust: playerPassive.robust.level,
        AncientKnowledge: playerPassive.ancientKnowledge.level,
        BalancedWarrior: playerPassive.balancedWarrior.level,
        MentalMastery: playerPassive.mentalMastery.level,
        //Other
        backpackStatus: backpackStatus,
        statStatus: statStatus,
    }
    if (saveType === 'autoSave') {
        localStorage['EncodedSaveGame'] = btoa(JSON.stringify(saveGame));
        document.getElementById('saveExport').innerHTML = localStorage['EncodedSaveGame'];
    }
    else if (saveType === 'manualSave') {
        Log("Game Saved");
        localStorage['EncodedSaveGame'] = btoa(JSON.stringify(saveGame));
        document.getElementById('saveExport').innerHTML = localStorage['EncodedSaveGame'];
        console.log(localStorage['EncodedSaveGame'].length)
    };
};

function loadGame() {
    load();
    autoSave();
};

function load() {
    if (localStorage['save'] || localStorage['EncodedSaveGame']) {
        if (localStorage['EncodedSaveGame']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSaveGame']));
            localStorage.removeItem("save");
        }
        else if (localStorage['save']) {
            var savegame = JSON.parse(atob(localStorage['save']));
        }
        if (typeof savegame.playerProperties !== "undefined") player.properties = savegame.playerProperties;
        if (typeof savegame.backpackStatus !== "undefined") backpackStatus = savegame.backpackStatus;
        if (typeof savegame.statStatus !== "undefined") statStatus = savegame.statStatus;
        if (typeof savegame.SwordExp !== "undefined") weaponMastery.sword.exp = savegame.SwordExp;
        if (typeof savegame.SwordMaxExp !== "undefined") weaponMastery.sword.maxExp = savegame.SwordMaxExp;
        if (typeof savegame.SwordLevel !== "undefined") weaponMastery.sword.level = savegame.SwordLevel;
        if (typeof savegame.AxeExp !== "undefined") weaponMastery.axe.exp = savegame.AxeExp;
        if (typeof savegame.AxeMaxExp !== "undefined") weaponMastery.axe.maxExp = savegame.AxeMaxExp;
        if (typeof savegame.AxeLevel !== "undefined") weaponMastery.axe.level = savegame.AxeLevel;
        if (typeof savegame.MaceExp !== "undefined") weaponMastery.mace.exp = savegame.MaceExp;
        if (typeof savegame.MaceMaxExp !== "undefined") weaponMastery.mace.maxExp = savegame.MaceMaxExp;
        if (typeof savegame.MaceLevel !== "undefined") weaponMastery.mace.level = savegame.MaceLevel;
        if (typeof savegame.StaffExp !== "undefined") weaponMastery.staff.exp = savegame.StaffExp;
        if (typeof savegame.StaffMaxExp !== "undefined") weaponMastery.staff.maxExp = savegame.StaffMaxExp;
        if (typeof savegame.StaffLevel !== "undefined") weaponMastery.staff.level = savegame.StaffLevel;
        if (typeof savegame.RangedExp !== "undefined") weaponMastery.ranged.exp = savegame.RangedExp;
        if (typeof savegame.RangedMaxExp !== "undefined") weaponMastery.ranged.maxExp = savegame.RangedMaxExp;
        if (typeof savegame.RangedLevel !== "undefined") weaponMastery.ranged.level = savegame.RangedLevel;
        //Passive Skills
        if (typeof savegame.DamageBonus !== "undefined") playerPassive.brawler.level = savegame.DamageBonus;
        if (typeof savegame.DamageBonus2 !== "undefined") playerPassive.overpower.level = savegame.DamageBonus2;
        if (typeof savegame.HealthBonus !== "undefined") playerPassive.vitality.level = savegame.HealthBonus;
        if (typeof savegame.HealthBonus2 !== "undefined") playerPassive.fortitude.level = savegame.HealthBonus2;
        if (typeof savegame.MagicFindBonus !== "undefined") playerPassive.looter.level = savegame.MagicFindBonus;
        if (typeof savegame.MagicFindBonus2 !== "undefined") playerPassive.explorer.level = savegame.MagicFindBonus2;
        if (typeof savegame.SixthSenseBonus !== "undefined") playerPassive.sixthSense.level = savegame.SixthSenseBonus;
        if (typeof savegame.SpiritualAttunement !== "undefined") playerPassive.spiritualAttunement.level = savegame.SpiritualAttunement;
        if (typeof savegame.Mighty !== "undefined") playerPassive.mighty.level = savegame.Mighty;
        if (typeof savegame.Constitution !== "undefined") playerPassive.constitution.level = savegame.Constitution;
        if (typeof savegame.Curiosity !== "undefined") playerPassive.curiosity.level = savegame.Curiosity;
        if (typeof savegame.MasterofArms !== "undefined") playerPassive.masterofArms.level = savegame.MasterofArms;
        if (typeof savegame.Robust !== "undefined") playerPassive.robust.level = savegame.Robust;
        if (typeof savegame.AncientKnowledge !== "undefined") playerPassive.ancientKnowledge.level = savegame.AncientKnowledge;
        if (typeof savegame.BalancedWarrior !== "undefined") playerPassive.balancedWarrior.level = savegame.BalancedWarrior;
        if (typeof savegame.MentalMastery !== "undefined") playerPassive.mentalMastery.level = savegame.MentalMastery;
        //Other
        if (typeof savegame.pot !== "undefined") pot = savegame.pot;
        if (typeof savegame.spot !== "undefined") spot = savegame.spot;
        if (typeof savegame.mpot !== "undefined") mpot = savegame.mpot;
        if (typeof savegame.playerWeapon !== "undefined") equippedItems.weapon = savegame.playerWeapon;
        if (typeof savegame.playerShield !== "undefined") equippedItems.shield = savegame.playerShield;
        if (typeof savegame.playerChest !== "undefined") equippedItems.chest = savegame.playerChest;
        if (typeof savegame.playerHelmet !== "undefined") equippedItems.helmet = savegame.playerHelmet;
        if (typeof savegame.playerLegs !== "undefined") equippedItems.legs = savegame.playerLegs;
        if (typeof savegame.playerBoots !== "undefined") equippedItems.boots = savegame.playerBoots;
        if (typeof savegame.playerRing !== "undefined") equippedItems.ring = savegame.playerRing;
        if (typeof savegame.playerAmulet !== "undefined") equippedItems.amulet = savegame.playerAmulet;
        if (typeof savegame.playerTalisman !== "undefined") equippedItems.talisman = savegame.playerTalisman;
        if (typeof savegame.inventory !== "undefined") playerInventory = savegame.inventory;
        document.getElementById("gold").innerHTML = player.properties.gold;
    };
    loadIsEquipped();
    CreateWeaponSkillHtml();
    quest();
    CreateMonsterHtml();
    versionCheck();
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
};

function resetCheck() {
    if (confirm("Are you sure?") == true) {
        reset();
    };
};
function reset() {
    localStorage.removeItem("save");
    localStorage.removeItem("EncodedSaveGame");
    pageReload();
};//test

function pageReload() {
    location.reload();
};
function versionCheck() {
    if (player.properties.gameVersion !== currentGameVersion && player.properties.gameVersion === null) {
        reset();
    };
};

function importSave() {
    var importSave = document.getElementById('saveImport').value;
    var savegame = JSON.parse(atob(importSave));
    localStorage['EncodedSaveGame'] = btoa(JSON.stringify(savegame));
    console.log(localStorage['EncodedSaveGame'].length)
    load();
};
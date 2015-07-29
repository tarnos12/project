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
        pot: pot,
        spot: spot,
        mpot: mpot,
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
        //Other
        backpackStatus: backpackStatus,
        statStatus: statStatus,
        //Spells
        FireBall: activeSpells.fireBall.level,
        IceShard: activeSpells.iceShard.level,
        CallLightning: activeSpells.callLightning.level,
        RainOfFire: activeSpells.rainOfFire.level,
        Blizzard: activeSpells.blizzard.level,
        BallOfLightning: activeSpells.ballOfLightning.level,
        InfernalFlames: activeSpells.infernalFlames.level,
        Frost: activeSpells.frost.level,
        LightningStorm: activeSpells.lightningStorm.level,
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
        //Spells
        if (typeof savegame.FireBall !== "undefined") activeSpells.fireBall.level = savegame.FireBall;
        if (typeof savegame.IceShard !== "undefined") activeSpells.iceShard.level = savegame.IceShard;
        if (typeof savegame.CallLightning !== "undefined") activeSpells.callLightning.level = savegame.CallLightning;
        if (typeof savegame.RainOfFire !== "undefined") activeSpells.rainOfFire.level = savegame.RainOfFire;
        if (typeof savegame.Blizzard !== "undefined") activeSpells.blizzard.level = savegame.Blizzard;
        if (typeof savegame.BallOfLightning !== "undefined") activeSpells.ballOfLightning.level = savegame.BallOfLightning;
        if (typeof savegame.InfernalFlames !== "undefined") activeSpells.infernalFlames.level = savegame.InfernalFlames;
        if (typeof savegame.Frost !== "undefined") activeSpells.frost.level = savegame.Frost;
        if (typeof savegame.LightningStorm !== "undefined") activeSpells.lightningStorm.level = savegame.LightningStorm;
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
        document.getElementById('potion').innerHTML = pot;
        document.getElementById('superPotion').innerHTML = spot;
        document.getElementById('megaPotion').innerHTML = mpot;
        document.getElementById("gold").innerHTML = player.properties.gold;
    };
    CreateInventoryWeaponHtml();
    loadIsEquipped();
    CreateWeaponSkillHtml();
    quest();
    CreateMonsterHtml();
    versionCheck();
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
    skillChargeFill();
    updateBar();
    characterCreationHtml();
    playerReviveCheck();
    removeStartingScreen();
    unequipItemLoad();
    primaryStatUpdate();
    secondaryStatUpdate();
    EquippedItemsEmpty();
    checkIfEquippedEmpty();
    updateHtml();
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
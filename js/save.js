function save() {
    var save = {
        playerGold: player.gold,
        playerHealth: player.health,
        playerStats: player.stats,
        playerLevel: player.level,
        playerStrength: player.baseStrength,
        playerEndurance: player.baseEndurance,
        playerAgility: player.baseAgility,
        playerDexterity: player.baseDexterity,
        playerIntelligence: player.baseIntelligence,
        playerWisdom: player.baseWisdom,
        playerLuck: player.baseLuck,
        playerExperience: player.experience,
        playerMaxExperience: player.maxExperience,
        pot: pot,
        spot: spot,
        mpot: mpot,
        //Equipped Items
        playerWeapon: equippedItems.weapon,
        playerOffHand: equippedItems.offHand,
        playerArmor: equippedItems.armor,
        playerRing: equippedItems.ring,
        playerAmulet: equippedItems.amulet,
        playerTalisman: equippedItems.talisman,
        inventory: playerInventory,
        //Weapon mastery levels and experience
        SwordMaxExp: player.swordMaxExp,
        SwordLevel: player.swordLevel,
        AxeMaxExp: player.axeMaxExp,
        AxeLevel: player.axeLevel,
        MaceMaxExp: player.maceMaxExp,
        MaceLevel: player.maceLevel,
        StaffMaxExp: player.staffMaxExp,
        StaffLevel: player.staffLevel,
        RangedMaxExp: player.rangedMaxExp,
        RangedLevel: player.rangedLevel,
        //Other
        itemId: player.itemIdNumber,
        backpackUpgrade: player.backpackUpgrade,
        backpackStatus: backpackStatus,
        statStatus: statStatus,
        monsterList: monsterList,
        gameVersion: player.gameVersion,
    }
    Log("Game Saved")
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.itemId !== "undefined") player.itemIdNumber = savegame.itemId;
    if (typeof savegame.gameVersion !== "undefined") player.gameVersion = savegame.gameVersion;
    if (typeof savegame.monsterList !== "undefined") monsterList = savegame.monsterList;
    if (typeof savegame.backpackUpgrade !== "undefined") player.backpackUpgrade = savegame.backpackUpgrade;
    if (typeof savegame.backpackStatus !== "undefined") backpackStatus = savegame.backpackStatus;
    if (typeof savegame.statStatus !== "undefined") statStatus = savegame.statStatus;
    if (typeof savegame.SwordMaxExp !== "undefined") player.swordMaxExp = savegame.SwordMaxExp;
    if (typeof savegame.SwordLevel !== "undefined") player.swordLevel = savegame.SwordLevel;
    if (typeof savegame.AxeMaxExp !== "undefined") player.axeMaxExp = savegame.AxeMaxExp;
    if (typeof savegame.AxeLevel !== "undefined") player.axeLevel = savegame.AxeLevel;
    if (typeof savegame.MaceMaxExp !== "undefined") player.maceMaxExp = savegame.MaceMaxExp;
    if (typeof savegame.MaceLevel !== "undefined") player.maceLevel = savegame.MaceLevel;
    if (typeof savegame.StaffMaxExp !== "undefined") player.staffMaxExp = savegame.StaffMaxExp;
    if (typeof savegame.StaffLevel !== "undefined") player.staffLevel = savegame.StaffLevel;
    if (typeof savegame.RangedMaxExp !== "undefined") player.rangedMaxExp = savegame.RangedMaxExp;
    if (typeof savegame.RangedLevel !== "undefined") player.rangedLevel = savegame.RangedLevel;
    //Other
    if (typeof savegame.playerGold !== "undefined") player.gold = savegame.playerGold;
    if (typeof savegame.playerHealth !== "undefined") player.health = savegame.playerHealth;
    if (typeof savegame.playerStats !== "undefined") player.stats = savegame.playerStats;
    if (typeof savegame.playerLevel !== "undefined") player.level = savegame.playerLevel;
    if (typeof savegame.playerExperience !== "undefined") player.experience = savegame.playerExperience;
    if (typeof savegame.playerMaxExperience !== "undefined") player.maxExperience = savegame.playerMaxExperience;
    if (typeof savegame.playerStrength !== "undefined") player.baseStrength = savegame.playerStrength;
    if (typeof savegame.playerEndurance !== "undefined") player.baseEndurance = savegame.playerEndurance;
    if (typeof savegame.playerAgility !== "undefined") player.baseAgility = savegame.playerAgility;
    if (typeof savegame.playerDexterity !== "undefined") player.baseDexterity = savegame.playerDexterity;
    if (typeof savegame.playerIntelligence !== "undefined") player.baseIntelligence = savegame.playerIntelligence;
    if (typeof savegame.playerWisdom !== "undefined") player.baseWisdom = savegame.playerWisdom;
    if (typeof savegame.playerLuck !== "undefined") player.baseLuck = savegame.playerLuck;
    if (typeof savegame.pot !== "undefined") pot = savegame.pot;
    if (typeof savegame.spot !== "undefined") spot = savegame.spot;
    if (typeof savegame.mpot !== "undefined") mpot = savegame.mpot;
    if (typeof savegame.playerWeapon !== "undefined") equippedItems.weapon = savegame.playerWeapon;
    if (typeof savegame.playerOffHand !== "undefined") equippedItems.offHand = savegame.playerOffHand;
    if (typeof savegame.playerArmor !== "undefined") equippedItems.armor = savegame.playerArmor;
    if (typeof savegame.playerRing !== "undefined") equippedItems.ring = savegame.playerRing;
    if (typeof savegame.playerAmulet !== "undefined") equippedItems.amulet = savegame.playerAmulet;
    if (typeof savegame.playerTalisman !== "undefined") equippedItems.talisman = savegame.playerTalisman;
    if (typeof savegame.inventory !== "undefined") playerInventory = savegame.inventory;
    document.getElementById('potion').innerHTML = pot;
    document.getElementById('superPotion').innerHTML = spot;
    document.getElementById('megaPotion').innerHTML = mpot;
    document.getElementById("gold").innerHTML = player.gold;
    CreateInventoryWeaponHtml();
    CreateEquipHtml();
    loadIsEquipped();
    CreateWeaponSkillHtml();
    quest();
    CreateMonsterHtml();
    versionCheck();
};

function resetCheck() {
    if (confirm("Are you sure?") == true) {
        reset();
    };
};
function reset() {
    localStorage.removeItem("save");
   /*player.gold = 0;
    player.health = 50;
    player.stats = 0;
    player.level = 1;
    player.baseStrength = 5;
    player.baseEndurance  = 5;
    player.baseAgility = 5;
    player.baseDexterity = 5;
    player.baseIntelligence = 5;
    player.baseWisdom = 5;
    player.baseLuck = 5;
    player.experience = 0;
    player.maxExperience = 100;
    pot = 0;
    spot = 0;
    mpot = 0;
    //Equipped Items
    equippedItems.weapon = {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        minDamage: 0,
        maxDamage: 0
    },
    equippedItems.offHand = {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0
    },
    equippedItems.armor = {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0
    },
    equippedItems.ring = {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0
    },
    equippedItems.amulet = {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0
    },
    equippedItems.talisman = {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0
    },
    playerInventory = [];
    //Weapon mastery levels and experience
    player.SwordMaxExp = 10;
    player.SwordExp = 0;
    player.SwordLevel = 1;
    player.AxeMaxExp = 10;
    player.AxeExp = 0;
    player.AxeLevel = 1;
    player.MaceMaxExp = 10;
    player.MaceExp = 0;
    player.MaceLevel = 1;
    player.StaffMaxExp = 10;
    player.StaffExp = 0;
    player.StaffLevel = 1;
    player.RangedMaxExp = 10;
    player.RangedExp = 0;
    player.RangedLevel = 1;
    //Other
    player.itemIdNumber = 1;
    player.backpackUpgrade = 0,
    backpackStatus.price = 100,
    statStatus.price = 500,
    MakeItemList();
    MakeMonsterList();
    CreateInventoryWeaponHtml();
    CreateEquipHtml();
    resetIsEquipped();
    CreateWeaponSkillHtml();
    quest();
    CreateMonsterHtml();
    player.gameVersion = currentGameVersion;*/
    pageReload();
};//test

function pageReload() {
    location.reload();
};
function versionCheck() {
    if (player.gameVersion != currentGameVersion) {
        reset();
    };
};
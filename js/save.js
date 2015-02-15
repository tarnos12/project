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
        playerMaxexperience: player.maxexperience,
        pot: pot,
        spot: spot,
        mpot: mpot,
        playerWeapon: equippedItems.weapon,
        playerArmor: equippedItems.armor,
        playerAccessory: equippedItems.accessory,
        inventory: playerInventory,
        weaponStrength: equippedItems.weapon.strength,
        armorStrength: player.armorStrength,
        accessoryStrength: player.accessoryStrength,
        weaponEndurance: player.weaponEndurance,
        armorEndurance: player.armorEndurance,
        accessoryEndurance: player.accessoryEndurance,
        weaponAgility: equippedItems.weapon.agility,
        armorAgility: player.armorAgility,
        accessoryAgility: player.accessoryAgility,
        weaponDexterity: player.weaponDexterity,
        armorDexterity: player.armorDexterity,
        accessoryDexterity: player.accessoryDexterity,
        weaponIntelligence: player.weaponIntelligence,
        armorIntelligence: player.armorIntelligence,
        accessoryIntelligence: player.accessoryIntelligence,
        weaponWisdom: player.weaponWisdom,
        armorWisdom: player.armorWisdom,
        accessoryWisdom: player.accessoryWisdom,
        weaponLuck: player.weaponLuck,
        armorLuck: player.armorLuck,
        accessoryLuck: player.accessoryLuck,
        swordMaxExp: player.swordMaxExp,
        swordLevel: player.swordLevel,
        daggerMaxExp: player.daggerMaxExp,
        daggerLevel: player.daggerLevel,
        axeMaxExp: player.axeMaxExp,
        axeLevel: player.axeLevel,
        maceMaxExp: player.maceMaxExp,
        maceLevel: player.maceLevel,
        staffMaxExp: player.staffMaxExp,
        staffLevel: player.staffLevel,
        fistMaxExp: player.fistMaxExp,
        fistLevel: player.fistLevel,
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.swordMaxExp !== "undefined") player.swordMaxExp = savegame.swordMaxExp;
    if (typeof savegame.swordLevel !== "undefined") player.swordLevel = savegame.swordLevel;
    if (typeof savegame.daggerMaxExp !== "undefined") player.daggerMaxExp = savegame.daggerMaxExp;
    if (typeof savegame.daggerLevel !== "undefined") player.daggerLevel = savegame.daggerLevel;
    if (typeof savegame.axeMaxExp !== "undefined") player.axeMaxExp = savegame.axeMaxExp;
    if (typeof savegame.axeLevel !== "undefined") player.axeLevel = savegame.axeLevel;
    if (typeof savegame.maceMaxExp !== "undefined") player.maceMaxExp = savegame.maceMaxExp;
    if (typeof savegame.maceLevel !== "undefined") player.maceLevel = savegame.maceLevel;
    if (typeof savegame.staffMaxExp !== "undefined") player.staffMaxExp = savegame.staffMaxExp;
    if (typeof savegame.staffLevel !== "undefined") player.staffLevel = savegame.staffLevel;
    if (typeof savegame.fistMaxExp !== "undefined") player.fistMaxExp = savegame.fistMaxExp;
    if (typeof savegame.fistLevel !== "undefined") player.fistLevel = savegame.fistLevel;
    if (typeof savegame.weaponStrength !== "undefined") player.weaponStrength = savegame.weaponStrength;
    if (typeof savegame.armorStrength !== "undefined") player.armorStrength = savegame.armorStrength;
    if (typeof savegame.accessoryStrength !== "undefined") player.accessoryStrength = savegame.accessoryStrength;
    if (typeof savegame.weaponEndurance !== "undefined") player.weaponEndurance = savegame.weaponEndurance;
    if (typeof savegame.armorEndurance !== "undefined") player.armorEndurance = savegame.armorEndurance;
    if (typeof savegame.accessoryEndurance !== "undefined") player.accessoryEndurance = savegame.accessoryEndurance;
    if (typeof savegame.weaponAgility !== "undefined") player.weaponAgility = savegame.weaponAgility;
    if (typeof savegame.armorAgility !== "undefined") player.armorAgility = savegame.armorAgility;
    if (typeof savegame.accessoryAgility !== "undefined") player.accessoryAgility = savegame.accessoryAgility;
    if (typeof savegame.weaponDexterity !== "undefined") player.weaponDexterity = savegame.weaponDexterity;
    if (typeof savegame.armorDexterity !== "undefined") player.armorDexterity = savegame.armorDexterity;
    if (typeof savegame.accessoryDexterity !== "undefined") player.accessoryDexterity = savegame.accessoryDexterity;
    if (typeof savegame.weaponIntelligence !== "undefined") player.weaponIntelligence = savegame.weaponIntelligence;
    if (typeof savegame.armorIntelligence !== "undefined") player.armorIntelligence = savegame.armorIntelligence;
    if (typeof savegame.accessoryIntelligence !== "undefined") player.accessoryIntelligence = savegame.accessoryIntelligence;
    if (typeof savegame.weaponWisdom !== "undefined") player.weaponWisdom = savegame.weaponWisdom;
    if (typeof savegame.armorWisdom !== "undefined") player.armorWisdom = savegame.armorWisdom;
    if (typeof savegame.accessoryWisdom !== "undefined") player.accessoryWisdom = savegame.accessoryWisdom;
    if (typeof savegame.weaponLuck !== "undefined") player.weaponLuck = savegame.weaponLuck;
    if (typeof savegame.armorLuck !== "undefined") player.armorLuck = savegame.armorLuck;
    if (typeof savegame.accessoryLuck !== "undefined") player.accessoryLuck = savegame.accessoryLuck;
    if (typeof savegame.playerGold !== "undefined") player.gold = savegame.playerGold;
    if (typeof savegame.playerHealth !== "undefined") player.health = savegame.playerHealth;
    if (typeof savegame.playerStats !== "undefined") player.stats = savegame.playerStats;
    if (typeof savegame.playerLevel !== "undefined") player.level = savegame.playerLevel;
    if (typeof savegame.playerExperience !== "undefined") player.experience = savegame.playerExperience;
    if (typeof savegame.playerMaxexperience !== "undefined") player.maxexperience = savegame.playerMaxexperience;
    if (typeof savegame.playerStrength !== "undefined") player.baseStrength = savegame.playerStrength;
    if (typeof savegame.playerEndurance !== "undefined") player.baseEndurance = savegame.playerEndurance;
    if (typeof savegame.playerAgility !== "undefined") player.baseAgility = savegame.playerAgility;
    if (typeof savegame.playerDexterity !== "undefined") player.baseDexterity = savegame.playerDexterity;
    if (typeof savegame.playerIntelligence !== "undefined") player.baseIntelligence = savegame.playerIntelligence;
    if (typeof savegame.playerWisdom !== "undefined") player.baseWisdom = savegame.playerWisdom;
    if (typeof savegame.playerLuck !== "undefined") player.baseLuck = savegame.playerLuck;
    if (typeof savegame.pot !== "undefined") pot = savegame.pot;
    if (typeof savegame.spot !== "undefined") spot = savegame.spot;
    if (typeof savegame.playerWeapon !== "undefined") equippedItems.weapon = savegame.playerWeapon;
    if (typeof savegame.playerArmor !== "undefined") equippedItems.armor = savegame.playerArmor;
    if (typeof savegame.playerAccessory !== "undefined") equippedItems.accessory = savegame.playerAccessory;
    if (typeof savegame.inventory !== "undefined") playerInventory = savegame.inventory;
    document.getElementById('pot').innerHTML = pot;
    document.getElementById('spot').innerHTML = spot;
    document.getElementById('mpot').innerHTML = mpot;
    document.getElementById("gold").innerHTML = player.gold;
    CreateInventoryWeaponHtml();
    CreateEquipHtml();
    loadIsEquipped();
    CreateWeaponSkillHtml();
}

function reset() {
    localStorage.removeItem("save");
    player.gold = 0;
    player.health = 50;
    player.stats = 0;
    player.level = 1;
    player.experience = 0;
    player.maxexperience = 100;
    player.baseStrength = 5;
    player.baseEndurance = 5;
    player.baseAgility = 5;
    player.baseDexterity = 5;
    player.baseIntelligence = 5;
    player.baseWisdom = 5;
    player.baseLuck = 5;
    pot = 0;
    spot = 0;
    mpot = 0;
    document.getElementById('gold').innerHTML = player.gold;
    document.getElementById('health').innerHTML = player.health;
    document.getElementById('stats').innerHTML = player.stats;
    document.getElementById('level').innerHTML = player.level;
    document.getElementById('experience').innerHTML = player.experience;
    document.getElementById('maxexperience').innerHTML = player.maxexperience;
    document.getElementById('strength').innerHTML = player.baseStrength;
    document.getElementById('endurance').innerHTML = player.baseEndurance;
    document.getElementById('agility').innerHTML = player.baseAgility;
    document.getElementById('dexterity').innerHTML = player.baseDexterity;
    document.getElementById('intelligence').innerHTML = player.baseIntelligence;
    document.getElementById('wisdom').innerHTML = player.baseWisdom;
    document.getElementById('luck').innerHTML = player.baseLuck;
    document.getElementById('pot').innerHTML = pot;
    document.getElementById('spot').innerHTML = spot;
    document.getElementById('mpot').innerHTML = mpot;
};
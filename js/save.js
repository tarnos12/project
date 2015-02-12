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
        inventory: playerInventory
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
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
    CreateInventoryWeaponHtml()
    CreateEquipHtml()
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
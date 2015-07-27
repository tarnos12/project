var itemQualityMod = {
   legendary: {
        type: "Legendary",
        chance: 1,
    },
   epic: {
        type: "Epic",
        chance: 25,
    },
   rare: {
        type: "Rare",
        chance: 100,
    },
   uncommon: {
        type: "Uncommon",
        chance: 1,
    },
   common: {
        type: "Common",
        chance: 1,
    },
};

var itemTypeMod = [
    {
        type: "Weapon",
        chance: 10,
    },
    {
        type: "Armor",
        chance: 10,
    },
    {
        type: "Accessory",
        chance: 10,
    },
    {
        type: null,
        chance: 70,
    },
];

var itemWeaponEffectMod = [ // Special effects for weapons of quality Rare/Epic/Legendary ++
    {
        type: "Burning", //Chance to ignite on hit<player hit>
        chance: 10,
    },
    {
        type: "Freezing", //Chance to freeze/stun on hit<player hit>
        chance: 10,
    },
    {
        type: "Leeching", //Leech life every player hit
        chance: 10,
    },
    {
        type: null, // Nothing
        chance: 70,
    },
];

var itemArmorEffectMod = [ // Special effects for armors of quality Rare/Epic/Legendary ++
    {
        type: "Healing", // Heal every round by certain amount
        chance: 10,
    },
    {
        type: "Freezing", // Chance to freeze when enemy hit a player
        chance: 10,
    },
    {
        type: "Spikes", // Deal certain amount of damage when enemy hit a player, NO damage if enemy miss...
        chance: 10,
    },
    {
        type: null,
        chance: 70,
    },
];

(function () {

    var weaponEffect = function (level, maxLevel, id, levelReq, manaReq, name, image) { //default spell object constructor

    };
    var armorEffect = function (level, maxLevel, id, levelReq, manaReq, name, image) { //default spell object constructor

    };

})();
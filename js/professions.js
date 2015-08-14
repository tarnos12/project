(function () {
    var newProfession = function (name, image) { //default spell object constructor
        this.level = 1;
        this.maxLevel = 100;
        this.name = name;
        this.image = image;
        this.experience = 0;
        this.maxExperience = 100;
    };
    var mining = new newProfession("Mining", "Mining");
    var herbalism = new newProfession("Herbalism", "Herbalism");
    var crafting = new newProfession("Crafting", "Crafting");
    var alchemy = new newProfession("Alchemy", "Alchemy");

    mining.damage = function () {
        return ((1 - player.properties.level) + this.level) * 2;
    };
    herbalism.damage = function () {
        return ((1 - player.properties.level) + this.level) * 2;
    };
    mining.description = function () {
        return "Can mine ores for resources used in crafting.";
    };
    herbalism.description = function () {
        return "Can gather plants, used in alchemy.";
    };
    crafting.description = function () {
        return "Craft items using gathered resources.";
    };
    alchemy.description = function () {
        return "Create potions with herbs.";
    };

    window.playerProfession = new Object();
    playerProfession.mining = mining;
    playerProfession.herbalism = herbalism;
    playerProfession.crafting = crafting;
    playerProfession.alchemy = alchemy;

})();

function mine(monsterStat) {
    var monsterStats = monsterStat.Stats;
    console.log(monsterStats.displayName)
};
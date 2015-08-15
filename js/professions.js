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
        return ((player.properties.level - 1) + this.level) * 2;
    };
    herbalism.damage = function () {
        return ((player.properties.level - 1) + this.level) * 2;
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
    var name = monsterStats.name;
    var mining = playerProfession.mining;
    monsterStats.hp -= mining.damage();
    if (monsterStats.hp <= 0) {
        monsterStats.hp = monsterStats.maxHp;
        mining.experience += monsterStats.baseExp;
        player.properties[name] += 1;
        if (mining.experience >= mining.maxExperience) {
            mining.level += 1;
            mining.experience = 0;
            mining.maxExperience *= 1.1;
        }
    };
    playerProfessionHtml();
    craftingHtml();
    unlockMineral();
    console.log(monsterStats.displayName)
};

function unlockMineral() {
    var miningLevel = playerProfession.mining.level;
    if (miningLevel >= 5) {
        monsterList.LiteCyan.Stats.isShown = true;
    };
    if (miningLevel >= 10) {
        monsterList.OhmStone.Stats.isShown = true;
    };
    if (miningLevel >= 20) {
        monsterList.Techtite.Stats.isShown = true;
    };
    if (miningLevel >= 35) {
        monsterList.XilBond.Stats.isShown = true;
    };
    if (miningLevel >= 50) {
        monsterList.VulcanatedIron.Stats.isShown = true;
    };
    CreateMonsterHtml();
};

playerProfessionHtml();
craftingHtml();
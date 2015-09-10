"use strict";
function MakeMonsterList() {
    var newMonster = function (level, name, displayName, id, area) {
        this.difficultyMultiplier = function () {
            if (player.properties.difficulty === "Very Easy") {
                return 0.2;
            }
            else if (player.properties.difficulty === "Easy") {
                return 0.5;
            }
            else if (player.properties.difficulty === "Normal") {
                return 1;
            }
            else if (player.properties.difficulty === "Hard") {
                return 2;
            }
            else if (player.properties.difficulty === "Impossible") {
                return 3;
            }
            else if (player.properties.difficulty === "Legend") {
                return 5;
            };
        };
        this.level = level;
        this.name = name;
        this.displayName = displayName;
        this.id = id;
        this.area = area;
        this.monsterHealth = function () {
            return this.level * 200 * this.difficultyMultiplier();
        };
        this.hp = this.monsterHealth();
        this.maxHp = this.hp;
        this.def = function () {
            return this.level * 5 * this.difficultyMultiplier();
        };
        this.minDmg = function () {
            return this.level * 15 * this.difficultyMultiplier();
        };
        this.maxDmg = function () {
            return this.level * 20 * this.difficultyMultiplier();
        };
        this.baseExp = function () {
            return this.level * 10 * this.difficultyMultiplier();
        };
        this.acc = 95;
        this.eva = 10;
        this.isShown = false;
        this.killCount = 0;
        this.manaCost = function () {
            return this.level * 100 * this.difficultyMultiplier()
        };
    };
    //Bandit Hideout
    var monster001 = new newMonster(1, "VarikGrunt", "Varik Grunt", 1, "BanditHideout");
    monster001.isShown = true;
    var monster002 = new newMonster(2, "VarikSoldier", "Varik Soldier", 2, "BanditHideout");
    var monster003 = new newMonster(3, "VarikMarksmen", "Varik Marksmen", 3, "BanditHideout");
    var monster004 = new newMonster(4, "VarikVulture", "Varik Vulture", 4, "BanditHideout");
    var monster005 = new newMonster(5, "VarikEvader", "Varik Evader", 5, "BanditHideout");
    var monster006 = new newMonster(6, "VariksLiar", "Variks Liar", 6, "BanditHideout");
    var monster007 = new newMonster(8, "VariksQueen", "Variks Queen", 7, "BanditHideout");
    var monster008 = new newMonster(10, "LordVarik", "Lord Varik", 8, "BanditHideout");

    //Forest of Narsus
    var monster009 = new newMonster(11, "ToxicFlies", "Toxic Flies", 9, "ForestofNarsus");
    var monster010 = new newMonster(12, "Stalker", "Stalker", 10, "ForestofNarsus");
    var monster011 = new newMonster(13, "AlphaStalker", "Alpha Stalker", 11, "ForestofNarsus");
    var monster012 = new newMonster(14, "StalkerPack", "Stalker Pack", 12, "ForestofNarsus");
    var monster013 = new newMonster(15, "JumpingSpider", "Jumping Spider", 13, "ForestofNarsus");
    var monster014 = new newMonster(16, "SpiderBeast", "Spider Beast", 14, "ForestofNarsus");
    var monster015 = new newMonster(18, "Narsus", "Narsus", 15, "ForestofNarsus");
    var monster016 = new newMonster(20, "JotunnScout", "Jotunn Scout", 16, "ForestofNarsus");

    //Oz Jotnar
    var monster017 = new newMonster(21, "JotnarAmbushSquad", "Jotnar Ambush Squad", 17, "OzJotnar");
    var monster018 = new newMonster(22, "LongRangeExterminationSquad", "Long Range Extermination Squad", 18, "OzJotnar");
    var monster019 = new newMonster(23, "BerserkerShockSquad", "Berserker Shock Squad", 19, "OzJotnar");
    var monster020 = new newMonster(24, "BerserkerShockSquadCaptainRendGrest", "Berserker Shock Squad Captain Rend Grest", 20, "OzJotnar");
    var monster021 = new newMonster(25, "ArtillerySquad", "Artillery Squad", 21, "OzJotnar");
    var monster022 = new newMonster(26, "JottunMainInfantry", "Jottun Main Infantry", 22, "OzJotnar");
    var monster023 = new newMonster(28, "RegentCairLorn", "Regent Cair Lorn", 23, "OzJotnar");
    var monster024 = new newMonster(30, "DeepKingTarNuk", "Deep King Tar Nuk", 24, "OzJotnar");


    //Twisted Marrow
    var monster025 = new newMonster(31, "DepthCrawler", "Depth Crawler", 25, "TwistedMarrow");
    var monster026 = new newMonster(32, "FadingGoblins", "Fading Goblins", 26, "TwistedMarrow");
    var monster027 = new newMonster(33, "StarBriteGolems", "Star Brite Golems", 27, "TwistedMarrow");
    var monster028 = new newMonster(34, "Bannecs", "Bannecs", 28, "TwistedMarrow");
    var monster029 = new newMonster(35, "Kholders", "Kholders", 29, "TwistedMarrow");
    var monster030 = new newMonster(36, "LivingWalls", "Living Walls", 30, "TwistedMarrow");
    var monster031 = new newMonster(38, "Keeper", "Keeper", 31, "TwistedMarrow");
    var monster032 = new newMonster(40, "LegendoftheAncientDreamer", "Legend of the Ancient Dreamer", 32, "TwistedMarrow");

    //Kharm Sheath
    var monster033 = new newMonster(41, "BabyDuneDigger", "Baby Dune Digger", 33, "KharmSheath");
    var monster034 = new newMonster(42, "CamelSpiderHerds", "Camel Spider Herds", 34, "KharmSheath");
    var monster035 = new newMonster(43, "WasteEagle", "Waste Eagle", 35, "KharmSheath");
    var monster036 = new newMonster(44, "GrelTribeGuard", "Grel Tribe Guard", 36, "KharmSheath");
    var monster037 = new newMonster(45, "GrelWarriors", "Grel Warriors", 37, "KharmSheath");
    var monster038 = new newMonster(46, "GrelSpitters", "Grel Spitters", 38, "KharmSheath");
    var monster039 = new newMonster(48, "GrelChief", "Grel Chief", 39, "KharmSheath");
    var monster040 = new newMonster(50, "MommaDuneDiggerSheila", "Momma Dune Digger Sheila", 40, "KharmSheath");

    //Frigid Aberration
    var monster041 = new newMonster(51, "CrystalFloater", "Crystal Floater", 41, "FrigidAberration");
    var monster042 = new newMonster(52, "SnowWatcher", "Snow Watcher", 42, "FrigidAberration");
    var monster043 = new newMonster(53, "CannibalTribeTrachid", "Cannibal Tribe Trachid", 43, "FrigidAberration");
    var monster044 = new newMonster(54, "LegendoftheRageCalm", "Legend of the Rage Calm", 44, "FrigidAberration");
    var monster045 = new newMonster(55, "IceGiantKing", "Ice Giant King", 45, "FrigidAberration");
    var monster046 = new newMonster(56, "FrightGolem", "Fright Golem", 46, "FrigidAberration");
    var monster047 = new newMonster(58, "FrightGolemArmy", "Fright Golem Army", 47, "FrigidAberration");
    var monster048 = new newMonster(60, "LegendoftheRageFullPower", "Legend of the Rage Full Power", 48, "FrigidAberration");

    //Capital of Zyzx
    var monster049 = new newMonster(61, "LegionofDreadWallGuards", "Legion of Dread Wall Guards", 49, "Zyzx");
    var monster050 = new newMonster(62, "Dreadnaughts", "Dreadnaughts", 50, "Zyzx");
    var monster051 = new newMonster(63, "DreadnaughtElite", "Dreadnaught Elite", 51, "Zyzx");
    var monster052 = new newMonster(64, "EmaciatedMagi", "Emaciated Magi", 52, "Zyzx");
    var monster053 = new newMonster(65, "MagiThunderCallers", "Magi Thunder Callers", 53, "Zyzx");
    var monster054 = new newMonster(66, "FalseDragonSlayers", "False Dragon Slayers", 54, "Zyzx");
    var monster055 = new newMonster(68, "TorturedBeholder", "Tortured Beholder", 55, "Zyzx");
    var monster056 = new newMonster(70, "KingoftheLegionGrantBannecs", "King of the Legion Grant Bannecs", 56, "Zyzx");

    window.monsterList = new Object();
    monsterList.monster001 = monster001;
    monsterList.monster002 = monster002;
    monsterList.monster003 = monster003;
    monsterList.monster004 = monster004;
    monsterList.monster005 = monster005;
    monsterList.monster006 = monster006;
    monsterList.monster007 = monster007;
    monsterList.monster008 = monster008;
    monsterList.monster009 = monster009;
    monsterList.monster010 = monster010;
    monsterList.monster011 = monster011;
    monsterList.monster012 = monster012;
    monsterList.monster013 = monster013;
    monsterList.monster014 = monster014;
    monsterList.monster015 = monster015;
    monsterList.monster016 = monster016;
    monsterList.monster017 = monster017;
    monsterList.monster018 = monster018;
    monsterList.monster019 = monster019;
    monsterList.monster020 = monster020;
    monsterList.monster021 = monster021;
    monsterList.monster022 = monster022;
    monsterList.monster023 = monster023;
    monsterList.monster024 = monster024;
    monsterList.monster025 = monster025;
    monsterList.monster026 = monster026;
    monsterList.monster027 = monster027;
    monsterList.monster028 = monster028;
    monsterList.monster029 = monster029;
    monsterList.monster030 = monster030;
    monsterList.monster031 = monster031;
    monsterList.monster032 = monster032;
    monsterList.monster033 = monster033;
    monsterList.monster034 = monster034;
    monsterList.monster035 = monster035;
    monsterList.monster036 = monster036;
    monsterList.monster037 = monster037;
    monsterList.monster038 = monster038;
    monsterList.monster039 = monster039;
    monsterList.monster040 = monster040;
    monsterList.monster041 = monster041;
    monsterList.monster042 = monster042;
    monsterList.monster043 = monster043;
    monsterList.monster044 = monster044;
    monsterList.monster045 = monster045;
    monsterList.monster046 = monster046;
    monsterList.monster047 = monster047;
    monsterList.monster048 = monster048;
    monsterList.monster049 = monster049;
    monsterList.monster050 = monster050;
    monsterList.monster051 = monster051;
    monsterList.monster052 = monster052;
    monsterList.monster053 = monster053;
    monsterList.monster054 = monster054;
    monsterList.monster055 = monster055;
    monsterList.monster056 = monster056;
}


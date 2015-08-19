// chance out of 10000, 1 = 0.01%, 10 = 0.1%, 100 = 1%, 1000 = 10%...
var monsterList = {};

var VarikGrunt = {};
var VarikSoldier = {};
var VarikMarksmen = {};
var VarikVulture = {};
var VarikEvader = {};
var VariksLiar = {};
var VariksQueen = {};
var LordVarik = {};

var ToxicFlies = {};
var Stalker = {};
var AlphaStalker = {};
var StalkerPack = {};
var JumpingSpider = {};
var SpiderBeast = {};
var Narsus = {};
var JotunnScout = {};

var JotnarAmbushSquad = {};
var LongRangeExterminationSquad = {};
var BerserkerShockSquad = {};
var BerserkerShockSquadCaptainRendGrest = {};
var ArtillerySquad = {};
var JottunMainInfantry = {};
var RegentCairLorn = {};
var DeepKingTarNuk = {};

var Zombie = {};
var Skeleton = {};
var SkeletonSoldier = {};
var SkeletonArcher = {};
var SkeletonMage = {};
var SkeletonHealer = {};
var Wraith = {};
var LichKing = {};

var Thaumerite = {};
var LiteCyan = {};
var OhmStone = {};
var Techtite = {};
var XilBond = {};
var VulcanatedIron = {};

function MakeMonsterList() {
    VarikGrunt.Stats = {
        hp: 75,
        maxHp: 75,
        def: 0,
        minDmg: 7,
        maxDmg: 12,
        baseExp: 20,
        acc: 95,
        eva: 5,
        name: "VarikGrunt",
        displayName: "Varik Grunt",
        type: "weak",
        id: 1,
        level: 1,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
        manaCost: 10
    };
    monsterList.VarikGrunt = VarikGrunt;
    VarikSoldier.Stats = {
        hp: 140,
        maxHp: 140,
        def: 2,
        minDmg: 10,
        maxDmg: 15,
        baseExp: 40,
        acc: 95,
        eva: 5,
        name: "VarikSoldier",
        displayName: "Varik Soldier",
        type: "weak",
        id: 2,
        level: 3,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 20
    };
    monsterList.VarikSoldier = VarikSoldier;
    VarikMarksmen.Stats = {
        hp: 220,
        maxHp: 220,
        def: 5,
        minDmg: 16,
        maxDmg: 22,
        baseExp: 80,
        acc: 95,
        eva: 5,
        name: "VarikMarksmen",
        displayName: "Varik Marksmen",
        type: "weak",
        id: 3,
        level: 5,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 30
    };
    monsterList.VarikMarksmen = VarikMarksmen;
    VarikVulture.Stats = {
        hp: 350,
        maxHp: 350,
        def: 8,
        minDmg: 20,
        maxDmg: 25,
        baseExp: 140,
        acc: 95,
        eva: 5,
        name: "VarikVulture",
        displayName: "Varik Vulture",
        type: "weak",
        id: 4,
        level: 7,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 40
    };
    monsterList.VarikVulture = VarikVulture;
    VarikEvader.Stats = {
        hp: 500,
        maxHp: 500,
        def: 10,
        minDmg: 25,
        maxDmg: 30,
        baseExp: 200,
        acc: 95,
        eva: 5,
        name: "VarikEvader",
        displayName: "Varik Evader",
        type: "weak",
        id: 5,
        level: 9,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 50
    };
    monsterList.VarikEvader = VarikEvader;
    VariksLiar.Stats = {
        hp: 750,
        maxHp: 750,
        def: 15,
        minDmg: 35,
        maxDmg: 40,
        baseExp: 340,
        acc: 95,
        eva: 5,
        name: "VariksLiar",
        displayName: "Variks Liar",
        type: "weak",
        id: 6,
        level: 11,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 60
    };
    monsterList.VariksLiar = VariksLiar;
    VariksQueen.Stats = {
        hp: 950,
        maxHp: 950,
        def: 20,
        minDmg: 45,
        maxDmg: 60,
        baseExp: 450,
        acc: 95,
        eva: 5,
        name: "VariksQueen",
        displayName: "Variks Queen(ELITE)",
        type: "weak",
        id: 7,
        level: 15,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 70
    };
    monsterList.VariksQueen = VariksQueen;
    LordVarik.Stats = {
        hp: 1337,
        maxHp: 1337,
        def: 30,
        minDmg: 70,
        maxDmg: 90,
        baseExp: 650,
        acc: 95,
        eva: 5,
        name: "LordVarik",
        displayName: "Lord Varik(BOSS)",
        type: "weak",
        id: 8,
        level: 25,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 80
    };
    monsterList.LordVarik = LordVarik;
    ToxicFlies.Stats = {
        hp: 1500,
        maxHp: 1500,
        def: 35,
        minDmg: 50,
        maxDmg: 65,
        baseExp: 850,
        acc: 95,
        eva: 5,
        name: "ToxicFlies",
        displayName: "Toxic Flies",
        type: "average",
        id: 9,
        level: 28,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 90
    };
    monsterList.ToxicFlies = ToxicFlies;
    Stalker.Stats = {
        hp: 1800,
        maxHp: 1800,
        def: 40,
        minDmg: 70,
        maxDmg: 85,
        baseExp: 1100,
        acc: 95,
        eva: 5,
        name: "Stalker",
        displayName: "Stalker",
        type: "average",
        id: 10,
        level: 30,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 100
    };
    monsterList.Stalker = Stalker;
    AlphaStalker.Stats = {
        hp: 2200,
        maxHp: 2200,
        def: 45,
        minDmg: 90,
        maxDmg: 110,
        baseExp: 1400,
        acc: 95,
        eva: 5,
        name: "AlphaStalker",
        displayName: "Alpha Stalker",
        type: "average",
        id: 11,
        level: 32,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 110
    };
    monsterList.AlphaStalker = AlphaStalker;
    StalkerPack.Stats = {
        hp: 2600,
        maxHp: 2600,
        def: 50,
        minDmg: 110,
        maxDmg: 140,
        baseExp: 1800,
        acc: 95,
        eva: 5,
        name: "StalkerPack",
        displayName: "Stalker Pack",
        type: "average",
        id: 12,
        level: 34,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 120
    };
    monsterList.StalkerPack = StalkerPack;
    JumpingSpider.Stats = {
        hp: 3400,
        maxHp: 3400,
        def: 55,
        minDmg: 130,
        maxDmg: 160,
        baseExp: 2500,
        acc: 95,
        eva: 5,
        name: "JumpingSpider",
        displayName: "Jumping Spider",
        type: "average",
        id: 13,
        level: 36,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 130
    };
    monsterList.JumpingSpider = JumpingSpider;
    SpiderBeast.Stats = {
        hp: 4000,
        maxHp: 4000,
        def: 60,
        minDmg: 150,
        maxDmg: 175,
        baseExp: 3200,
        acc: 95,
        eva: 5,
        name: "SpiderBeast",
        displayName: "Spider Beast(ELITE)",
        type: "average",
        id: 14,
        level: 45,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 140
    };
    monsterList.SpiderBeast = SpiderBeast;
    Narsus.Stats = {
        hp: 4800,
        maxHp: 4800,
        def: 70,
        minDmg: 180,
        maxDmg: 210,
        baseExp: 4000,
        acc: 95,
        eva: 5,
        name: "Narsus",
        displayName: "Narsus(BOSS)",
        type: "average",
        id: 15,
        level: 60,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 150
    };
    monsterList.Narsus = Narsus;
    JotunnScout.Stats = {
        hp: 6000,
        maxHp: 6000,
        def: 80,
        minDmg: 220,
        maxDmg: 240,
        baseExp: 6000,
        acc: 95,
        eva: 5,
        name: "JotunnScout",
        displayName: "Jotunn Scout",
        type: "average",
        id: 16,
        level: 65,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 160
    };
    monsterList.JotunnScout = JotunnScout;
    JotnarAmbushSquad.Stats = {
        hp: 7500,
        maxHp: 7500,
        def: 90,
        minDmg: 200,
        maxDmg: 220,
        baseExp: 7000,
        acc: 95,
        eva: 5,
        name: "JotnarAmbushSquad",
        displayName: "Jotnar Ambush Squad",
        type: "strong",
        id: 17,
        level: 68,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 170
    };
    monsterList.JotnarAmbushSquad = JotnarAmbushSquad;
    LongRangeExterminationSquad.Stats = {
        hp: 9000,
        maxHp: 9000,
        def: 100,
        minDmg: 230,
        maxDmg: 250,
        baseExp: 8500,
        acc: 95,
        eva: 5,
        name: "LongRangeExterminationSquad",
        displayName: "Long Range Extermination Squad",
        type: "strong",
        id: 18,
        level: 71,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 180
    };
    monsterList.LongRangeExterminationSquad = LongRangeExterminationSquad;
    BerserkerShockSquad.Stats = {
        hp: 11000,
        maxHp: 11000,
        def: 110,
        minDmg: 270,
        maxDmg: 300,
        baseExp: 10000,
        acc: 95,
        eva: 5,
        name: "BerserkerShockSquad",
        displayName: "Berserker Shock Squad",
        type: "strong",
        id: 19,
        level: 74,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 190
    };
    monsterList.BerserkerShockSquad = BerserkerShockSquad;
    BerserkerShockSquadCaptainRendGrest.Stats = {
        hp: 13000,
        maxHp: 13000,
        def: 120,
        minDmg: 300,
        maxDmg: 350,
        baseExp: 13000,
        acc: 95,
        eva: 5,
        name: "BerserkerShockSquadCaptainRendGrest",
        displayName: "Berserker ShockSquad Captain, Rend Grest",
        type: "strong",
        id: 20,
        level: 77,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 200
    };
    monsterList.BerserkerShockSquadCaptainRendGrest = BerserkerShockSquadCaptainRendGrest;
    ArtillerySquad.Stats = {
        hp: 16000,
        maxHp: 16000,
        def: 130,
        minDmg: 350,
        maxDmg: 420,
        baseExp: 15000,
        acc: 95,
        eva: 5,
        name: "ArtillerySquad",
        displayName: "Artillery Squad #1-9",
        type: "strong",
        id: 21,
        level: 80,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 210
    };
    monsterList.ArtillerySquad = ArtillerySquad;
    JottunMainInfantry.Stats = {
        hp: 20000,
        maxHp: 20000,
        def: 140,
        minDmg: 400,
        maxDmg: 450,
        baseExp: 18000,
        acc: 95,
        eva: 5,
        name: "JottunMainInfantry",
        displayName: "Jottun Main Infantry",
        type: "strong",
        id: 22,
        level: 83,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 220
    };
    monsterList.JottunMainInfantry = JottunMainInfantry;
    RegentCairLorn.Stats = {
        hp: 25000,
        maxHp: 25000,
        def: 150,
        minDmg: 440,
        maxDmg: 500,
        baseExp: 25000,
        acc: 95,
        eva: 5,
        name: "RegentCairLorn",
        displayName: "Regent Cair Lorn(ELITE)",
        type: "strong",
        id: 23,
        level: 90,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 230
    };
    monsterList.RegentCairLorn = RegentCairLorn;
    DeepKingTarNuk.Stats = {
        hp: 33333,
        maxHp: 33333,
        def: 200,
        minDmg: 500,
        maxDmg: 700,
        baseExp: 40000,
        acc: 95,
        eva: 5,
        name: "DeepKingTarNuk",
        displayName: "Deep King Tar Nuk(BOSS)",
        type: "strong",
        id: 24,
        level: 100,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 240
    };
    monsterList.DeepKingTarNuk = DeepKingTarNuk;
    Zombie.Stats = {
        hp: 35000,
        maxHp: 35000,
        def: 160,
        minDmg: 500,
        maxDmg: 600,
        baseExp: 45000,
        acc: 95,
        eva: 5,
        name: "Zombie",
        displayName: "Zombie",
        type: "boss",
        id: 25,
        level: 110,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 250
    };
    monsterList.Zombie = Zombie;
    Skeleton.Stats = {
        hp: 40000,
        maxHp: 40000,
        def: 170,
        minDmg: 600,
        maxDmg: 700,
        baseExp: 55000,
        acc: 95,
        eva: 5,
        name: "Skeleton",
        displayName: "Skeleton",
        type: "boss",
        id: 26,
        level: 115,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 260
    };
    monsterList.Skeleton = Skeleton;
    SkeletonSoldier.Stats = {
        hp: 50000,
        maxHp: 50000,
        def: 180,
        minDmg: 700,
        maxDmg: 800,
        baseExp: 65000,
        acc: 95,
        eva: 5,
        name: "SkeletonSoldier",
        displayName: "Skeleton Soldier",
        type: "boss",
        id: 27,
        level: 120,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 270
    };
    monsterList.SkeletonSoldier = SkeletonSoldier;
    SkeletonArcher.Stats = {
        hp: 60000,
        maxHp: 60000,
        def: 190,
        minDmg: 800,
        maxDmg: 900,
        baseExp: 80000,
        acc: 95,
        eva: 5,
        name: "SkeletonArcher",
        displayName: "Skeleton Archer",
        type: "boss",
        id: 28,
        level: 125,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 280
    };
    monsterList.SkeletonArcher = SkeletonArcher;
    SkeletonMage.Stats = {
        hp: 75000,
        maxHp: 75000,
        def: 200,
        minDmg: 900,
        maxDmg: 1000,
        baseExp: 100000,
        acc: 95,
        eva: 5,
        name: "SkeletonMage",
        displayName: "Skeleton Mage",
        type: "boss",
        id: 29,
        level: 130,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 290
    };
    monsterList.SkeletonMage = SkeletonMage;
    SkeletonHealer.Stats = {
        hp: 90000,
        maxHp: 90000,
        def: 210,
        minDmg: 1000,
        maxDmg: 1100,
        baseExp: 120000,
        acc: 95,
        eva: 5,
        name: "SkeletonHealer",
        displayName: "Skeleton Healer",
        type: "boss",
        id: 30,
        level: 135,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 300
    };
    monsterList.SkeletonHealer = SkeletonHealer;
    Wraith.Stats = {
        hp: 110000,
        maxHp: 110000,
        def: 220,
        minDmg: 1100,
        maxDmg: 1250,
        baseExp: 150000,
        acc: 95,
        eva: 5,
        name: "Wraith",
        displayName: "Wraith(ELITE)",
        type: "boss",
        id: 31,
        level: 150,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 310
    };
    monsterList.Wraith = Wraith;
    LichKing.Stats = {
        hp: 133700,
        maxHp: 133700,
        def: 230,
        minDmg: 1337,
        maxDmg: 1337,
        baseExp: 250000,
        acc: 95,
        eva: 5,
        name: "LichKing",
        displayName: "Lich King(BOSS)",
        type: "boss",
        id: 32,
        level: 175,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 320
    };
    monsterList.LichKing = LichKing;
    Thaumerite.Stats = {
        hp: 10,
        maxHp: 10,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 1,
        acc: 0,
        eva: 100,
        name: "Thaumerite", // Must equal object name Ore = Ore...
        displayName: "Thaumerite",
        type: "mining",
        id: 33,
        level: 1,
        area: "Mining",
        isShown: true,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.Thaumerite = Thaumerite;

    LiteCyan.Stats = {
        hp: 100,
        maxHp: 100,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 5,
        acc: 0,
        eva: 100,
        name: "LiteCyan", // Must equal object name Ore = Ore...
        displayName: "Lite Cyan",
        type: "mining",
        id: 34,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.LiteCyan = LiteCyan;

    OhmStone.Stats = {
        hp: 200,
        maxHp: 200,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 20,
        acc: 0,
        eva: 100,
        name: "OhmStone", // Must equal object name Ore = Ore...
        displayName: "Ohm Stone",
        type: "mining",
        id: 35,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.OhmStone = OhmStone;

    Techtite.Stats = {
        hp: 500,
        maxHp: 500,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 50,
        acc: 0,
        eva: 100,
        name: "Techtite", // Must equal object name Ore = Ore...
        displayName: "Techtite",
        type: "mining",
        id: 36,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.Techtite = Techtite;

    XilBond.Stats = {
        hp: 1337,
        maxHp: 1337,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 100,
        acc: 0,
        eva: 100,
        name: "XilBond", // Must equal object name Ore = Ore...
        displayName: "Xil Bond",
        type: "mining",
        id: 37,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.XilBond = XilBond;

    VulcanatedIron.Stats = {
        hp: 3000,
        maxHp: 3000,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 200,
        acc: 0,
        eva: 100,
        name: "VulcanatedIron", // Must equal object name Ore = Ore...
        displayName: "Vulcanated Iron",
        type: "mining",
        id: 38,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.VulcanatedIron = VulcanatedIron;
};
MakeMonsterList();
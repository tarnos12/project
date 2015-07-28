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

function MakeMonsterList() {
    VarikGrunt.Stats = {
        hp: 30,
        maxHp: 30,
        def: 0,
        minDmg: 5,
        maxDmg: 8,
        baseExp: 10,
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
        hp: 100,
        maxHp: 100,
        def: 2,
        minDmg: 10,
        maxDmg: 18,
        baseExp: 40,
        acc: 95,
        eva: 5,
        name: "VarikSoldier",
        displayName: "Varik Soldier",
        type: "weak",
        id: 2,
        level: 2,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 20
    };
    monsterList.VarikSoldier = VarikSoldier;
    VarikMarksmen.Stats = {
        hp: 250,
        maxHp: 250,
        def: 5,
        minDmg: 15,
        maxDmg: 22,
        baseExp: 100,
        acc: 95,
        eva: 5,
        name: "VarikMarksmen",
        displayName: "Varik Marksmen",
        type: "weak",
        id: 3,
        level: 3,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 30
    };
    monsterList.VarikMarksmen = VarikMarksmen;
    VarikVulture.Stats = {
        hp: 400,
        maxHp: 400,
        def: 8,
        minDmg: 20,
        maxDmg: 25,
        baseExp: 150,
        acc: 95,
        eva: 5,
        name: "VarikVulture",
        displayName: "Varik Vulture",
        type: "weak",
        id: 4,
        level: 4,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 40
    };
    monsterList.VarikVulture = VarikVulture;
    VarikEvader.Stats = {
        hp: 700,
        maxHp: 700,
        def: 13,
        minDmg: 25,
        maxDmg: 30,
        baseExp: 250,
        acc: 95,
        eva: 5,
        name: "VarikEvader",
        displayName: "Varik Evader",
        type: "weak",
        id: 5,
        level: 5,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 50
    };
    monsterList.VarikEvader = VarikEvader;
    VariksLiar.Stats = {
        hp: 1000,
        maxHp: 1000,
        def: 25,
        minDmg: 30,
        maxDmg: 40,
        baseExp: 400,
        acc: 95,
        eva: 5,
        name: "VariksLiar",
        displayName: "Variks Liar",
        type: "weak",
        id: 6,
        level: 6,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 60
    };
    monsterList.VariksLiar = VariksLiar;
    VariksQueen.Stats = {
        hp: 1350,
        maxHp: 1350,
        def: 30,
        minDmg: 40,
        maxDmg: 55,
        baseExp: 600,
        acc: 95,
        eva: 5,
        name: "VariksQueen",
        displayName: "Variks Queen",
        type: "weak",
        id: 7,
        level: 7,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 70
    };
    monsterList.VariksQueen = VariksQueen;
    LordVarik.Stats = {
        hp: 1600,
        maxHp: 1600,
        def: 35,
        minDmg: 50,
        maxDmg: 60,
        baseExp: 750,
        acc: 95,
        eva: 5,
        name: "LordVarik",
        displayName: "Lord Varik",
        type: "weak",
        id: 8,
        level: 8,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 80
    };
    monsterList.LordVarik = LordVarik;
    ToxicFlies.Stats = {
        hp: 2000,
        maxHp: 2000,
        def: 40,
        minDmg: 65,
        maxDmg: 75,
        baseExp: 1000,
        acc: 95,
        eva: 5,
        name: "ToxicFlies",
        displayName: "Toxic Flies",
        type: "average",
        id: 9,
        level: 9,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 90
    };
    monsterList.ToxicFlies = ToxicFlies;
    Stalker.Stats = {
        hp: 2400,
        maxHp: 2400,
        def: 50,
        minDmg: 80,
        maxDmg: 100,
        baseExp: 1250,
        acc: 95,
        eva: 5,
        name: "Stalker",
        displayName: "Stalker",
        type: "average",
        id: 10,
        level: 10,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 100
    };
    monsterList.Stalker = Stalker;
    AlphaStalker.Stats = {
        hp: 3000,
        maxHp: 3000,
        def: 60,
        minDmg: 100,
        maxDmg: 115,
        baseExp: 1500,
        acc: 95,
        eva: 5,
        name: "AlphaStalker",
        displayName: "Alpha Stalker",
        type: "average",
        id: 11,
        level: 11,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 110
    };
    monsterList.AlphaStalker = AlphaStalker;
    StalkerPack.Stats = {
        hp: 3500,
        maxHp: 3500,
        def: 70,
        minDmg: 120,
        maxDmg: 140,
        baseExp: 1800,
        acc: 95,
        eva: 5,
        name: "StalkerPack",
        displayName: "Stalker Pack",
        type: "average",
        id: 12,
        level: 12,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 120
    };
    monsterList.StalkerPack = StalkerPack;
    JumpingSpider.Stats = {
        hp: 4200,
        maxHp: 4200,
        def: 80,
        minDmg: 150,
        maxDmg: 180,
        baseExp: 2200,
        acc: 95,
        eva: 5,
        name: "JumpingSpider",
        displayName: "Jumping Spider",
        type: "average",
        id: 13,
        level: 13,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 130
    };
    monsterList.JumpingSpider = JumpingSpider;
    SpiderBeast.Stats = {
        hp: 4800,
        maxHp: 4800,
        def: 90,
        minDmg: 170,
        maxDmg: 200,
        baseExp: 2700,
        acc: 95,
        eva: 5,
        name: "SpiderBeast",
        displayName: "Spider Beast",
        type: "average",
        id: 14,
        level: 14,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 140
    };
    monsterList.SpiderBeast = SpiderBeast;
    Narsus.Stats = {
        hp: 6000,
        maxHp: 6000,
        def: 100,
        minDmg: 200,
        maxDmg: 220,
        baseExp: 3500,
        acc: 95,
        eva: 5,
        name: "Narsus",
        displayName: "Narsus",
        type: "average",
        id: 15,
        level: 15,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 150
    };
    monsterList.Narsus = Narsus;
    JotunnScout.Stats = {
        hp: 8000,
        maxHp: 8000,
        def: 110,
        minDmg: 220,
        maxDmg: 240,
        baseExp: 4000,
        acc: 95,
        eva: 5,
        name: "JotunnScout",
        displayName: "Jotunn Scout",
        type: "average",
        id: 16,
        level: 16,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 160
    };
    monsterList.JotunnScout = JotunnScout;
    JotnarAmbushSquad.Stats = {
        hp: 10000,
        maxHp: 10000,
        def: 120,
        minDmg: 230,
        maxDmg: 250,
        baseExp: 5000,
        acc: 95,
        eva: 5,
        name: "JotnarAmbushSquad",
        displayName: "Jotnar Ambush Squad",
        type: "strong",
        id: 17,
        level: 17,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 170
    };
    monsterList.JotnarAmbushSquad = JotnarAmbushSquad;
    LongRangeExterminationSquad.Stats = {
        hp: 11000,
        maxHp: 11000,
        def: 130,
        minDmg: 250,
        maxDmg: 270,
        baseExp: 6000,
        acc: 95,
        eva: 5,
        name: "LongRangeExterminationSquad",
        displayName: "Long Range Extermination Squad",
        type: "strong",
        id: 18,
        level: 18,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 180
    };
    monsterList.LongRangeExterminationSquad = LongRangeExterminationSquad;
    BerserkerShockSquad.Stats = {
        hp: 12500,
        maxHp: 12500,
        def: 140,
        minDmg: 250,
        maxDmg: 270,
        baseExp: 7000,
        acc: 95,
        eva: 5,
        name: "BerserkerShockSquad",
        displayName: "Berserker Shock Squad",
        type: "strong",
        id: 19,
        level: 19,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 190
    };
    monsterList.BerserkerShockSquad = BerserkerShockSquad;
    BerserkerShockSquadCaptainRendGrest.Stats = {
        hp: 13500,
        maxHp: 13500,
        def: 150,
        minDmg: 270,
        maxDmg: 300,
        baseExp: 8000,
        acc: 95,
        eva: 5,
        name: "BerserkerShockSquadCaptainRendGrest",
        displayName: "Berserker ShockSquad Captain, Rend Grest",
        type: "strong",
        id: 20,
        level: 20,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 200
    };
    monsterList.BerserkerShockSquadCaptainRendGrest = BerserkerShockSquadCaptainRendGrest;
    ArtillerySquad.Stats = {
        hp: 15000,
        maxHp: 15000,
        def: 170,
        minDmg: 300,
        maxDmg: 350,
        baseExp: 9000,
        acc: 95,
        eva: 5,
        name: "ArtillerySquad",
        displayName: "Artillery Squad #1-9",
        type: "strong",
        id: 21,
        level: 21,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 210
    };
    monsterList.ArtillerySquad = ArtillerySquad;
    JottunMainInfantry.Stats = {
        hp: 16000,
        maxHp: 16000,
        def: 180,
        minDmg: 300,
        maxDmg: 350,
        baseExp: 10000,
        acc: 95,
        eva: 5,
        name: "JottunMainInfantry",
        displayName: "Jottun Main Infantry",
        type: "strong",
        id: 22,
        level: 22,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 220
    };
    monsterList.JottunMainInfantry = JottunMainInfantry;
    RegentCairLorn.Stats = {
        hp: 17000,
        maxHp: 17000,
        def: 190,
        minDmg: 350,
        maxDmg: 400,
        baseExp: 11000,
        acc: 95,
        eva: 5,
        name: "RegentCairLorn",
        displayName: "Regent Cair Lorn",
        type: "strong",
        id: 23,
        level: 23,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 230
    };
    monsterList.RegentCairLorn = RegentCairLorn;
    DeepKingTarNuk.Stats = {
        hp: 20000,
        maxHp: 20000,
        def: 200,
        minDmg: 400,
        maxDmg: 450,
        baseExp: 12000,
        acc: 95,
        eva: 5,
        name: "DeepKingTarNuk",
        displayName: "Deep King Tar Nuk",
        type: "strong",
        id: 24,
        level: 24,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 240
    };
    monsterList.DeepKingTarNuk = DeepKingTarNuk;
    Zombie.Stats = {
        hp: 22000,
        maxHp: 22000,
        def: 220,
        minDmg: 450,
        maxDmg: 500,
        baseExp: 13000,
        acc: 95,
        eva: 5,
        name: "Zombie",
        displayName: "Zombie",
        type: "boss",
        id: 25,
        level: 25,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 250
    };
    monsterList.Zombie = Zombie;
    Skeleton.Stats = {
        hp: 24000,
        maxHp: 24000,
        def: 230,
        minDmg: 500,
        maxDmg: 550,
        baseExp: 14000,
        acc: 95,
        eva: 5,
        name: "Skeleton",
        displayName: "Skeleton",
        type: "boss",
        id: 26,
        level: 26,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 260
    };
    monsterList.Skeleton = Skeleton;
    SkeletonSoldier.Stats = {
        hp: 26000,
        maxHp: 26000,
        def: 250,
        minDmg: 600,
        maxDmg: 700,
        baseExp: 15000,
        acc: 95,
        eva: 5,
        name: "SkeletonSoldier",
        displayName: "Skeleton Soldier",
        type: "boss",
        id: 27,
        level: 27,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 270
    };
    monsterList.SkeletonSoldier = SkeletonSoldier;
    SkeletonArcher.Stats = {
        hp: 27000,
        maxHp: 27000,
        def: 260,
        minDmg: 700,
        maxDmg: 800,
        baseExp: 16000,
        acc: 95,
        eva: 5,
        name: "SkeletonArcher",
        displayName: "Skeleton Archer",
        type: "boss",
        id: 28,
        level: 28,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 280
    };
    monsterList.SkeletonArcher = SkeletonArcher;
    SkeletonMage.Stats = {
        hp: 29000,
        maxHp: 29000,
        def: 270,
        minDmg: 800,
        maxDmg: 900,
        baseExp: 18000,
        acc: 95,
        eva: 5,
        name: "SkeletonMage",
        displayName: "Skeleton Mage",
        type: "boss",
        id: 29,
        level: 29,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 290
    };
    monsterList.SkeletonMage = SkeletonMage;
    SkeletonHealer.Stats = {
        hp: 32000,
        maxHp: 32000,
        def: 300,
        minDmg: 900,
        maxDmg: 1000,
        baseExp: 20000,
        acc: 95,
        eva: 5,
        name: "SkeletonHealer",
        displayName: "Skeleton Healer",
        type: "boss",
        id: 30,
        level: 30,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 300
    };
    monsterList.SkeletonHealer = SkeletonHealer;
    Wraith.Stats = {
        hp: 35000,
        maxHp: 35000,
        def: 350,
        minDmg: 1200,
        maxDmg: 1500,
        baseExp: 25000,
        acc: 95,
        eva: 5,
        name: "Wraith",
        displayName: "Wraith",
        type: "boss",
        id: 31,
        level: 31,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 310
    };
    monsterList.Wraith = Wraith;
    LichKing.Stats = {
        hp: 50000,
        maxHp: 50000,
        def: 500,
        minDmg: 1500,
        maxDmg: 2000,
        baseExp: 50000,
        acc: 95,
        eva: 5,
        name: "LichKing",
        displayName: "Lich King",
        type: "boss",
        id: 32,
        level: 32,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 320
    };
    monsterList.LichKing = LichKing;
};
MakeMonsterList();
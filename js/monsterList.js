function NewDrop(item, chance) {
   var drop = {};
    drop.item = item;
    drop.chance = chance;
    return drop;
}
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

var Giant = {};
var FrostGiant = {};
var FrostTroll = {};
var Wyvern = {};
var FrostDragon = {};
var IceElemental = {};
var FrostGuardian = {};
var FrostQueen = {};

var Zombie = {};
var Skeleton = {};
var SkeletonSoldier = {};
var SkeletonArcher = {};
var SkeletonMage = {};
var SkeletonHealer = {};
var Wraith = {};
var LichKing = {};

function MakeMonsterList()
{
   
    VarikGrunt.Drops = [];
    //Swords
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 1));
    //Axes
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 1));
    //Maces
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 1));
    //Staves
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 1));
    //Bows
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 1));
    //Robes
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.MageRobes, 1));
    //Leather
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 1));
    //Heavy
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 1));
    //Shield
    VarikGrunt.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 1));
    //Dagger offHand
    VarikGrunt.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 1));
    //Rings
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofWealth, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofOpportunity, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofFortune, 20));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofProsperity, 15));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofAbundance, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofPlenty, 5));
    //Uncommon
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofWealth, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofOpportunity, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofFortune, 4));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofProsperity, 3));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofAbundance, 2));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofPlenty, 1));
    //Amulets
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofLearning, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofWealth, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofOpportunity, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofFortune, 20));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofProsperity, 15));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofAbundance, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofPlenty, 5));
    //Uncommon
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofLearning, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofWealth, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofOpportunity, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofFortune, 4));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofProsperity, 3));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofAbundance, 2));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofPlenty, 1));
    //Talismans
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofLearning, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofWealth, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofOpportunity, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofFortune, 20));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofProsperity, 15));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofAbundance, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofPlenty, 5));
    //Uncommon
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofLearning, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofWealth, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofOpportunity, 5));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofFortune, 4));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofProsperity, 3));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofAbundance, 2));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofPlenty, 1));
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
       
    
    VarikSoldier.Drops = [];
    //Swords
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 2));
    //Axes
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 2));
    //Maces
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 2));
    //Staves
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 2));
    //Bows
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 2));
    //Robes
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.MageRobes, 2));
    //Leather
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 2));
    //Heavy
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 2));
    //Shield
    VarikSoldier.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 2));
    //Dagger offHand
    VarikSoldier.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 2));
    //Rings
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofWealth, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofOpportunity, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofFortune, 20));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofProsperity, 15));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofAbundance, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofPlenty, 5));
    //Uncommon
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofWealth, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofOpportunity, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofFortune, 4));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofProsperity, 3));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofAbundance, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofPlenty, 1));
    //Amulets
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofLearning, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofWealth, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofOpportunity, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofFortune, 20));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofProsperity, 15));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofAbundance, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofPlenty, 5));
    //Uncommon
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofLearning, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofWealth, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofOpportunity, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofFortune, 4));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofProsperity, 3));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofAbundance, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofPlenty, 1));
    //Talismans
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofLearning, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofWealth, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofOpportunity, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofFortune, 20));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofProsperity, 15));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofAbundance, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofPlenty, 5));
    //Uncommon
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofLearning, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofWealth, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofOpportunity, 5));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofFortune, 4));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofProsperity, 3));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofAbundance, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofPlenty, 1));
    VarikSoldier.Stats = {
        hp: 100,
        maxHp: 100,
        def: 7,
        minDmg: 5,
        maxDmg: 10,
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
    VarikMarksmen.Drops = [];
    //Swords
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 3));
    //Axes
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 3));
    //Maces
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 3));
    //Staves
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 3));
    //Bows
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 3));
    //Robes
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.MageRobes, 3));
    //Leather
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 3));
    //Heavy
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 3));
    //Shield
    VarikMarksmen.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 3));
    //Dagger offHand
    VarikMarksmen.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 3));
    //Rings
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofWealth, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofOpportunity, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofFortune, 20));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofProsperity, 15));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofAbundance, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofPlenty, 5));
    //Uncommon
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofWealth, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofOpportunity, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofFortune, 4));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofProsperity, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofAbundance, 2));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofPlenty, 1));
    //Amulets
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofLearning, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofWealth, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofOpportunity, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofFortune, 20));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofProsperity, 15));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofAbundance, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofPlenty, 5));
    //Uncommon
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofLearning, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofWealth, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofOpportunity, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofFortune, 4));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofProsperity, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofAbundance, 2));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofPlenty, 1));
    //Talismans
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofLearning, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofWealth, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofOpportunity, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofFortune, 20));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofProsperity, 15));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofAbundance, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofPlenty, 5));
    //Uncommon
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofLearning, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofWealth, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofOpportunity, 5));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofFortune, 4));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofProsperity, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofAbundance, 2));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofPlenty, 1));
    VarikMarksmen.Stats = {
        hp: 250,
        maxHp: 250,
        def: 10,
        minDmg: 8,
        maxDmg: 12,
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

    VarikVulture.Drops = [];
    //Swords
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 4));
    //Axes
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 4));
    //Maces
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 4));
    //Staves
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 4));
    //Bows
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 4));
    //Robes
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.MageRobes, 4));
    //Leather
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 4));
    //Heavy
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 4));
    //Shield
    VarikVulture.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 4));
    //Dagger offHand
    VarikVulture.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 4));
    //Rings
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofWealth, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofOpportunity, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofFortune, 20));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofProsperity, 15));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofAbundance, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofPlenty, 5));
    //Uncommon
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofWealth, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofOpportunity, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofFortune, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofProsperity, 3));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofAbundance, 2));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofPlenty, 1));
    //Amulets
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofLearning, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofWealth, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofOpportunity, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofFortune, 20));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofProsperity, 15));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofAbundance, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedAmuletofPlenty, 5));
    //Uncommon
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofLearning, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofWealth, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofOpportunity, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofFortune, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofProsperity, 3));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofAbundance, 2));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofPlenty, 1));
    //Talismans
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofLearning, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofWealth, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofOpportunity, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofFortune, 20));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofProsperity, 15));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofAbundance, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedTalismanofPlenty, 5));
    //Uncommon
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofLearning, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofWealth, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofOpportunity, 5));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofFortune, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofProsperity, 3));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofAbundance, 2));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofPlenty, 1));
    VarikVulture.Stats = {
        hp: 400,
        maxHp: 400,
        def: 15,
        minDmg: 15,
        maxDmg: 20,
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

    VarikEvader.Drops = [];
    //Swords
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 5));
    //Axes
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 5));
    //Maces
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 5));
    //Staves
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 5));
    //Bows
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 5));
    //Robes
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.MageRobes, 5));
    //Leather
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 5));
    //Heavy
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 5));
    //Shield
    VarikEvader.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 5));
    //Dagger offHand
    VarikEvader.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 5));
    //Rings
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofWealth, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofOpportunity, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofFortune, 20));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofProsperity, 15));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofAbundance, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofPlenty, 5));
    //Rare
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 4));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 3));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 2));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 1));
    //Amulets
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofLearning, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofWealth, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofOpportunity, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofFortune, 20));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofProsperity, 15));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofAbundance, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofPlenty, 5));
    //Rare
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 4));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 3));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 2));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 1));
    //Talismans
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofLearning, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofWealth, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofOpportunity, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofFortune, 20));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofProsperity, 15));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofAbundance, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofPlenty, 5));
    //Rare
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 4));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 3));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 2));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 1));
    VarikEvader.Stats = {
        hp: 700,
        maxHp: 700,
        def: 20,
        minDmg: 20,
        maxDmg: 24,
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

    VariksLiar.Drops = [];
    //Swords
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 50))
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 10));
    //Axes
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 10));
    //Maces
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.Club, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 10));
    //Staves
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 10));
    //Bows
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 75));;
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 10));
    //Robes
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.MageRobes, 10));
    //Leather
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 10));
    //Heavy
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 10));
    //Shield
    VariksLiar.Drops.push(NewDrop(ItemList.OffHand.Buckler, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 10));
    //Dagger offHand
    VariksLiar.Drops.push(NewDrop(ItemList.OffHand.Dagger, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.OffHand.Kris, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 10));
    //Rings
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofWealth, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofOpportunity, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofFortune, 20));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofProsperity, 15));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofAbundance, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofPlenty, 5));
    //Rare
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 4));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 3));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 2));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 1));
    //Amulets
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofLearning, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofWealth, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofOpportunity, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofFortune, 20));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofProsperity, 15));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofAbundance, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofPlenty, 5));
    //Rare
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 4));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 3));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 2));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 1));
    //Talismans
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofLearning, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofWealth, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofOpportunity, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofFortune, 20));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofProsperity, 15));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofAbundance, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofPlenty, 5));
    //Rare
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 5));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 4));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 3));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 2));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 1));
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

    VariksQueen.Drops = [];
    //Swords
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 75))
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.ColossusSword, 10));
    //Axes
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.EttinAxe, 10));
    //Maces
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.Club, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.ReinforcedMace, 10));
    //Staves
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.GhostWand, 10));
    //Bows
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 100));;
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Weapons.AshwoodBow, 10));
    //Robes
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.MageRobes, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.MagicWeaverTunic, 10));
    //Leather
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.RangersVest, 10));
    //Heavy
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Armors.SalvagedChainArmor, 10));
    //Shield
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.Buckler, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.Luna, 10));
    //Dagger offHand
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.Dagger, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.Kris, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.OffHand.FangedKnife, 10));
    //Rings
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofWealth, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofOpportunity, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofFortune, 20));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofProsperity, 15));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofAbundance, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofPlenty, 5));
    //Rare
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 4));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 3));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 2));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 1));
    //Amulets
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofLearning, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofWealth, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofOpportunity, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofFortune, 20));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofProsperity, 15));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofAbundance, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofPlenty, 5));
    //Rare
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 4));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 3));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 2));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 1));
    //Talismans
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofLearning, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofWealth, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofOpportunity, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofFortune, 20));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofProsperity, 15));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofAbundance, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofPlenty, 5));
    //Rare
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 5));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 4));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 3));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 2));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 1));
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

    LordVarik.Drops = [];
    //Swords
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 100))
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.ColossusSword, 25));
    //Axes
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.EttinAxe, 25));
    //Maces
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.Club, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.ReinforcedMace, 25));
    //Staves
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.GhostWand, 25));
    //Bows
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 150));;
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Weapons.AshwoodBow, 25));
    //Robes
    LordVarik.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.MageRobes, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.MagicWeaverTunic, 25));
    //Leather
    LordVarik.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.RangersVest, 25));
    //Heavy
    LordVarik.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Armors.SalvagedChainArmor, 25));
    //Shield
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.Buckler, 150));
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 100));
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 75));
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 50));
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.Luna, 25));
    //Dagger offHand
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.Dagger, 150));
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.Kris, 100));
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 75));
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 50));
    LordVarik.Drops.push(NewDrop(ItemList.OffHand.FangedKnife, 25));
    //Rings
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofWealth, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofOpportunity, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofFortune, 20));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofProsperity, 15));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofAbundance, 10));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofPlenty, 5));
    //Rare
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 4));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 3));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 2));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 1));
    //Amulets
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofLearning, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofWealth, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofOpportunity, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofFortune, 20));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofProsperity, 15));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofAbundance, 10));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedAmuletofPlenty, 5));
    //Rare
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 4));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 3));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 2));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 1));
    //Talismans
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofLearning, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofWealth, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofOpportunity, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofFortune, 20));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofProsperity, 15));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofAbundance, 10));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedTalismanofPlenty, 5));
    //Rare
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 5));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 4));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 3));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 2));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 1));
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

    ToxicFlies.Drops = [];
    //Swords
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 1));
    //Axes
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 1));
    //Maces
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 1));
    //Staves
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 1));
    //Bows
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Weapons.StagBow, 1));
    //Robes
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 1));
    //Leather
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 1));
    //Heavy
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 1));
    //Shield
    ToxicFlies.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 1));
    //Dagger offHand
    ToxicFlies.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 1));
    //Rings
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 20));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 15));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 5));
    //Epic
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 4));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 3));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 2));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 1));
    //Amulets
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 20));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 15));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 5));
    //Epic
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 4));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 3));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 2));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 1));
    //Talismans
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 20));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 15));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 5));
    //Epic
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 5));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 4));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 3));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 2));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 1));
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
    
    Stalker.Drops = [];
    Stalker.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    Stalker.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 2));
    //Axes
    Stalker.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 2));
    //Maces
    Stalker.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 2));
    //Staves
    Stalker.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 2));
    //Bows
    Stalker.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    Stalker.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    Stalker.Drops.push(NewDrop(ItemList.Weapons.StagBow, 2));
    //Robes
    Stalker.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    Stalker.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    Stalker.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    Stalker.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 2));
    //Leather
    Stalker.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    Stalker.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    Stalker.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    Stalker.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 2));
    //Heavy
    Stalker.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    Stalker.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    Stalker.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    Stalker.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 2));
    //Shield
    Stalker.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    Stalker.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    Stalker.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    Stalker.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 2));
    //Dagger offHand
    Stalker.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    Stalker.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    Stalker.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    Stalker.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 2));
    //Rings
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 20));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 15));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 5));
    //Epic
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 4));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 3));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 1));
    //Amulets
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 20));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 15));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 5));
    //Epic
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 4));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 3));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 1));
    //Talismans
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 20));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 15));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 5));
    //Epic
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 5));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 4));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 3));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 1));
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
        manaCost : 100
    };
    monsterList.Stalker = Stalker;

    AlphaStalker.Drops = [];
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 3));
    //Axes
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 3));
    //Maces
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 3));
    //Staves
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 3));
    //Bows
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Weapons.StagBow, 3));
    //Robes
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 3));
    //Leather
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 3));
    //Heavy
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 3));
    //Shield
    AlphaStalker.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 3));
    //Dagger offHand
    AlphaStalker.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 3));
    //Rings
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 20));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 15));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 5));
    //Epic
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 4));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 2));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 1));
    //Amulets
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 20));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 15));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 5));
    //Epic
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 4));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 2));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 1));
    //Talismans
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 20));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 15));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 5));
    //Epic
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 5));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 4));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 2));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 1));
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
        killCount : 0,
        manaCost: 110
    };
    monsterList.AlphaStalker = AlphaStalker;

    StalkerPack.Drops = [];
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 4));
    //Axes
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 4));
    //Maces
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 4));
    //Staves
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 4));
    //Bows
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Weapons.StagBow, 4));
    //Robes
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 4));
    //Leather
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 4));
    //Heavy
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 4));
    //Shield
    StalkerPack.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 4));
    //Dagger offHand
    StalkerPack.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 4));
    //Rings
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 20));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 15));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 5));
    //Epic
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 3));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 2));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 1));
    //Amulets
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 20));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 15));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 5));
    //Epic
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 3));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 2));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 1));
    //Talismans
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 20));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 15));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 5));
    //Epic
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 5));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 3));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 2));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 1));
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

    JumpingSpider.Drops = [];
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 5));
    //Axes
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 5));
    //Maces
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 5));
    //Staves
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 5));
    //Bows
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Weapons.StagBow, 5));
    //Robes
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 5));
    //Leather
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 5));
    //Heavy
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 5));
    //Shield
    JumpingSpider.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 5));
    //Dagger offHand
    JumpingSpider.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 5));
    //Rings
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 20));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 15));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 5));
    //Epic
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 4));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 3));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 2));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 1));
    //Amulets
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 20));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 15));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 5));
    //Epic
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 4));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 3));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 2));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 1));
    //Talismans
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 20));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 15));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 5));
    //Epic
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 4));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 3));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 2));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 1));
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

    SpiderBeast.Drops = [];
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.LongSword, 50))
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.Gladius, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 10));
    //Axes
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 10));
    //Maces
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.Maul, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 10));
    //Staves
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 10));
    //Bows
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 75));;
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Weapons.StagBow, 10));
    //Robes
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 10));
    //Leather
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 10));
    //Heavy
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 10));
    //Shield
    SpiderBeast.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 10));
    //Dagger offHand
    SpiderBeast.Drops.push(NewDrop(ItemList.OffHand.Katar, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 10));
        //Rings
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 20));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 15));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 5));
    //Epic
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 4));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 3));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 2));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 1));
    //Amulets
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 20));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 15));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 5));
    //Epic
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 4));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 3));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 2));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 1));
    //Talismans
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 20));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 15));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 5));
    //Epic
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 5));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 4));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 3));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 2));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 1));
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

    Narsus.Drops = [];
    Narsus.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 100));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.LongSword, 75))
    Narsus.Drops.push(NewDrop(ItemList.Weapons.Gladius, 50));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 25));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.HighlandBlade, 10));
    //Axes
    Narsus.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 100));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 75));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 50));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 25));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.FeralAxe, 10));
    //Maces
    Narsus.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 100));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.Maul, 75));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 50));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 25));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.OgreMaul, 10));
    //Staves
    Narsus.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 100));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 75));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 50));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 25));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.UnearthedWand, 10));
    //Bows
    Narsus.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 100));;
    Narsus.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 75));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 50));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.StagBow, 25));
    Narsus.Drops.push(NewDrop(ItemList.Weapons.CeremonialBow, 10));
    //Robes
    Narsus.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 100));
    Narsus.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 75));
    Narsus.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 50));
    Narsus.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 25));
    Narsus.Drops.push(NewDrop(ItemList.Armors.AncestralTunic, 10));
    //Leather
    Narsus.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 100));
    Narsus.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 75));
    Narsus.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 50));
    Narsus.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 25));
    Narsus.Drops.push(NewDrop(ItemList.Armors.NomadicVest, 10));
    //Heavy
    Narsus.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 100));
    Narsus.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 75));
    Narsus.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 50));
    Narsus.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 25));
    Narsus.Drops.push(NewDrop(ItemList.Armors.TemplarArmor, 10));
    //Shield
    Narsus.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 100));
    Narsus.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 75));
    Narsus.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 50));
    Narsus.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 25));
    Narsus.Drops.push(NewDrop(ItemList.OffHand.Hyperion, 10));
    //Dagger offHand
    Narsus.Drops.push(NewDrop(ItemList.OffHand.Katar, 100));
    Narsus.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 75));
    Narsus.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 50));
    Narsus.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 25));
    Narsus.Drops.push(NewDrop(ItemList.OffHand.RunicTalons, 10));
    //Rings
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 20));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 15));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 5));
    //Epic
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 4));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 3));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 2));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 1));
    //Amulets
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 20));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 15));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 5));
    //Epic
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 4));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 3));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 2));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 1));
    //Talismans
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 20));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 15));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 5));
    //Epic
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 5));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 4));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 3));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 2));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 1));
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

    JotunnScout.Drops = [];
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.LongSword, 75))
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.Gladius, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.HighlandBlade, 10));
    //Axes
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.FeralAxe, 10));
    //Maces
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.Maul, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.OgreMaul, 10));
    //Staves
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.UnearthedWand, 10));
    //Bows
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 100));;
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.StagBow, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Weapons.CeremonialBow, 10));
    //Robes
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.AncestralTunic, 10));
    //Leather
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.NomadicVest, 10));
    //Heavy
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Armors.TemplarArmor, 10));
    //Shield
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.Hyperion, 10));
    //Dagger offHand
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.Katar, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.OffHand.RunicTalons, 10));
    //Rings
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofWealth, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofOpportunity, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 20));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofProsperity, 15));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofAbundance, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofPlenty, 5));
    //Epic
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 4));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 3));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 2));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 1));
    //Amulets
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofLearning, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofWealth, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofOpportunity, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 20));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofProsperity, 15));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbundance, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofPlenty, 5));
    //Epic
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 4));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 3));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 2));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 1));
    //Talismans
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofLearning, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofWealth, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofOpportunity, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 20));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofProsperity, 15));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbundance, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofPlenty, 5));
    //Epic
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 5));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 4));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 3));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 2));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 1));
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
        killCount : 0,
        manaCost: 160
    };
    monsterList.JotunnScout = JotunnScout;

    Giant.Drops = [];
    Giant.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    Giant.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 1));
    //Axes
    Giant.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    Giant.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 1));
    //Maces
    Giant.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    Giant.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.Knout, 1));
    //Staves
    Giant.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    Giant.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.TombWand, 1));
    //Bows
    Giant.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    Giant.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 1));
    //Robes
    Giant.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    Giant.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    Giant.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    Giant.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 1));
    //Leather
    Giant.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    Giant.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    Giant.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    Giant.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 1));
    //Heavy
    Giant.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    Giant.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    Giant.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    Giant.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 1));
    //Shield
    Giant.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    Giant.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    Giant.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    Giant.Drops.push(NewDrop(ItemList.OffHand.Monarch, 1));
    //Dagger offHand
    Giant.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    Giant.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    Giant.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    Giant.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 1));
    //Rings
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
    Giant.Stats = {
        hp: 10000,
        maxHp: 10000,
        def: 120,
        minDmg: 230,
        maxDmg: 250,
        baseExp: 5000,
        acc: 95,
        eva: 5,
        name: "Giant",
        displayName: "Giant",
        type: "strong",
        id: 17,
        level: 17,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 170
    };
    monsterList.Giant = Giant;

    FrostGiant.Drops = [];
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 2));
    //Axes
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 2));
    //Maces
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.Knout, 2));
    //Staves
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.TombWand, 2));
    //Bows
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 2));
    //Robes
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 2));
    //Leather
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 2));
    //Heavy
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 2));
    //Shield
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.Monarch, 2));
    //Dagger offHand
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 2));
    //Rings
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
    FrostGiant.Stats = {
        hp: 11000,
        maxHp: 11000,
        def: 130,
        minDmg: 250,
        maxDmg: 270,
        baseExp: 6000,
        acc: 95,
        eva: 5,
        name: "FrostGiant",
        displayName: "Frost Giant",
        type: "strong",
        id: 18,
        level: 18,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 180
    };
    monsterList.FrostGiant = FrostGiant;

    FrostTroll.Drops = [];
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 3));
    //Axes
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 3));
    //Maces
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.Knout, 3));
    //Staves
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.TombWand, 3));
    //Bows
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));;
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 3));
    //Robes
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 3));
    //Leather
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 3));
    //Heavy
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 3));
    //Shield
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.Monarch, 3));
    //Dagger offHand
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 3));
    //Rings
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
    FrostTroll.Stats = {
        hp: 12500,
        maxHp: 12500,
        def: 140,
        minDmg: 250,
        maxDmg: 270,
        baseExp: 7000,
        acc: 95,
        eva: 5,
        name: "FrostTroll",
        displayName: "Frost troll",
        type: "strong",
        id: 19,
        level: 19,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 190
    };
    monsterList.FrostTroll = FrostTroll;

    Wyvern.Drops = [];
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 4));
    //Axes
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 4));
    //Maces
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.Knout, 4));
    //Staves
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.TombWand, 4));
    //Bows
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));;
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 4));
    //Robes
    Wyvern.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 4));
    //Leather
    Wyvern.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 4));
    //Heavy
    Wyvern.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 4));
    //Shield
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.Monarch, 4));
    //Dagger offHand
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 4));
    //Rings
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
    Wyvern.Stats = {
        hp: 13500,
        maxHp: 13500,
        def: 150,
        minDmg: 270,
        maxDmg: 300,
        baseExp: 8000,
        acc: 95,
        eva: 5,
        name: "Wyvern",
        displayName: "Wyvern",
        type: "strong",
        id: 20,
        level: 20,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 200
    };
    monsterList.Wyvern = Wyvern;

    FrostDragon.Drops = [];
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 5));
    //Axes
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 5));
    //Maces
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.Knout, 5));
    //Staves
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.TombWand, 5));
    //Bows
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));;
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 5));
    //Robes
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 5));
    //Leather
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 5));
    //Heavy
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 5));
    //Shield
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.Monarch, 5));
    //Dagger offHand
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 5));
    //Rings
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
    FrostDragon.Stats = {
        hp: 15000,
        maxHp: 15000,
        def: 170,
        minDmg: 300,
        maxDmg: 350,
        baseExp: 9000,
        acc: 95,
        eva: 5,
        name: "FrostDragon",
        displayName: "Frost Dragon",
        type: "strong",
        id: 21,
        level: 21,
        area: "OzJotnar",
        isShown: false,
            killCount: 0,
            manaCost: 210
    };
    monsterList.FrostDragon = FrostDragon;

    IceElemental.Drops = [];
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.Sabre, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.Claymore, 50))
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 10));
    //Axes
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 10));
    //Maces
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.WarClub, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.Knout, 10));
    //Staves
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.Wand, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.TombWand, 10));
    //Bows
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.LongBow, 75));;
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 10));
    //Robes
    IceElemental.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 10));
    //Leather
    IceElemental.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 10));
    //Heavy
    IceElemental.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 10));
    //Shield
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 75));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.Defender, 50));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 25));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.Monarch, 10));
    //Dagger offHand
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.Quhab, 75));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 50));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 25));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 10));
    //Rings
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
    IceElemental.Stats = {
        hp: 16000,
        maxHp: 16000,
        def: 180,
        minDmg: 300,
        maxDmg: 350,
        baseExp: 10000,
        acc: 95,
        eva: 5,
        name: "IceElemental",
        displayName: "Ice Elemental",
        type: "strong",
        id: 22,
        level: 22,
        area: "OzJotnar",
        isShown: false,
            killCount: 0,
            manaCost: 220
    };
    monsterList.IceElemental = IceElemental;

    FrostGuardian.Drops = [];
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Sabre, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Claymore, 75))
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.LegendSword, 10));
    //Axes
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Decapitator, 10));
    //Maces
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.WarClub, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Knout, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.FlangedMace, 10));
    //Staves
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Wand, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.TombWand, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.ElderStaff, 10));
    //Bows
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.LongBow, 100));;
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.MatriarchalBow, 10));
    //Robes
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.SagesCloth, 10));
    //Leather
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.ScavengersTunic, 10));
    //Heavy
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.Wyrmhide, 10));
    //Shield
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.Defender, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.Monarch, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.TrollNest, 10));
    //Dagger offHand
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.Quhab, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.WarFist, 10));
    //Rings
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
    FrostGuardian.Stats = {
        hp: 17000,
        maxHp: 17000,
        def: 190,
        minDmg: 350,
        maxDmg: 400,
        baseExp: 11000,
        acc: 95,
        eva: 5,
        name: "FrostGuardian",
        displayName: "Frost Guardian",
        type: "strong",
        id: 23,
        level: 23,
        area: "OzJotnar",
        isShown: false,
            killCount: 0,
            manaCost: 230
    };
    monsterList.FrostGuardian = FrostGuardian;

    FrostQueen.Drops = [];
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Sabre, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Claymore, 100))
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.LegendSword, 25));
    //Axes
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Decapitator, 25));
    //Maces
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.WarClub, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Knout, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.FlangedMace, 25));
    //Staves
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Wand, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.TombWand, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.ElderStaff, 25));
    //Bows
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.LongBow, 125));;
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.MatriarchalBow, 25));
    //Robes
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.SagesCloth, 25));
    //Leather
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.ScavengersTunic, 25));
    //Heavy
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.Wyrmhide, 25));
    //Shield
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.Defender, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.Monarch, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.TrollNest, 25));
    //Dagger offHand
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.Quhab, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.WarFist, 10));
    //Rings
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
    FrostQueen.Stats = {
        hp: 20000,
        maxHp: 20000,
        def: 200,
        minDmg: 400,
        maxDmg: 450,
        baseExp: 12000,
        acc: 95,
        eva: 5,
        name: "FrostQueen",
        displayName: "Frost Queen",
        type: "strong",
        id: 24,
        level: 24,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
            manaCost: 240
    };
    monsterList.FrostQueen = FrostQueen;

    Zombie.Drops = [];
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    Zombie.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 1));
    //Axes
    Zombie.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 1));
    //Maces
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Cudgel, 25));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Scourge, 1));
    //Staves
    Zombie.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 1));
    //Bows
    Zombie.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    Zombie.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 1));
    //Robes
    Zombie.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    Zombie.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    Zombie.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    Zombie.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 1));
    //Leather
    Zombie.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    Zombie.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    Zombie.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    Zombie.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 1));
    //Heavy
    Zombie.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    Zombie.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    Zombie.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    Zombie.Drops.push(NewDrop(ItemList.Armors.Boneweave, 1));
    //Shield
    Zombie.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 1));
    //Dagger offHand
    Zombie.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 1));
    //Rings
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
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
        area: "AncientCave",
        isShown: false,
            killCount: 0,
            manaCost: 250
    };
    monsterList.Zombie = Zombie;

    Skeleton.Drops = [];
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 2));
    //Axes
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 2));
    //Maces
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Cudgel, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Scourge, 2));
    //Staves
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 2));
    //Bows
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 2));
    //Robes
    Skeleton.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 2));
    //Leather
    Skeleton.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 2));
    //Heavy
    Skeleton.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.Boneweave, 2));
    //Shield
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 2));
    //Dagger offHand
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 2));
    //Rings
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
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
        area: "AncientCave",
        isShown: false,
            killCount: 0,
            manaCost: 260
    };
    monsterList.Skeleton = Skeleton;

    SkeletonSoldier.Drops = [];
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 3));
    //Axes
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 3));
    //Maces
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Cudgel, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Scourge, 3));
    //Staves
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 3));
    //Bows
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 3));
    //Robes
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 3));
    //Leather
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 3));
    //Heavy
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.Boneweave, 3));
    //Shield
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 3));
    //Dagger offHand
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 3));
    //Rings
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
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
        area: "AncientCave",
        isShown: false,
            killCount: 0,
        manaCost: 270
    };
    monsterList.SkeletonSoldier = SkeletonSoldier;

    SkeletonArcher.Drops = [];
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 4));
    //Axes
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 4));
    //Maces
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Cudgel, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Scourge, 4));
    //Staves
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 4));
    //Bows
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 4));
    //Robes
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 4));
    //Leather
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 4));
    //Heavy
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.Boneweave, 4));
    //Shield
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 4));
    //Dagger offHand
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 4));
    //Rings
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
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
        area: "AncientCave",
        isShown: false,
        killCount: 0,
            manaCost: 280
    };
    monsterList.SkeletonArcher = SkeletonArcher;

    SkeletonMage.Drops = [];
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 5));
    //Axes
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 5));
    //Maces
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Cudgel, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Scourge, 5));
    //Staves
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 5));
    //Bows
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 5));
    //Robes
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 5));
    //Leather
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 5));
    //Heavy
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.Boneweave, 5));
    //Shield
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 5));
    //Dagger offHand
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 5));
    //Rings
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
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
        area: "AncientCave",
        isShown: false,
            killCount: 0,
            manaCost: 290
    };
    monsterList.SkeletonMage = SkeletonMage;

    SkeletonHealer.Drops = [];
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Falchion, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.WarSword, 50))
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 10));
    //Axes
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Tabar, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 10));
    //Maces
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Flail, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Cudgel, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Scourge, 10));
    //Staves
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.YewWand, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 10));
    //Bows
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 75));;
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 10));
    //Robes
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 10));
    //Leather
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 10));
    //Heavy
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.Boneweave, 10));
    //Shield
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 10));
    //Dagger offHand
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 10));
    //Rings
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
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
        area: "AncientCave",
        isShown: false,
            killCount: 0,
            manaCost: 300
    };
    monsterList.SkeletonHealer = SkeletonHealer;

    Wraith.Drops = [];
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Falchion, 100));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.WarSword, 75))
    Wraith.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.BalrogBlade, 10));
    //Axes
    Wraith.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 100));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 75));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Tabar, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.GloriousAxe, 10));
    //Maces
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Flail, 100));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Cudgel, 75));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Scourge, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.ThunderMaul, 10));
    //Staves
    Wraith.Drops.push(NewDrop(ItemList.Weapons.YewWand, 100));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 75));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Shillelagh, 10));
    //Bows
    Wraith.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 100));;
    Wraith.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 75));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.GrandMatronBow, 10));
    //Robes
    Wraith.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 100));
    Wraith.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 75));
    Wraith.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 50));
    Wraith.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 25));
    Wraith.Drops.push(NewDrop(ItemList.Armors.RobeoftheDragonSlayer, 10));
    //Leather
    Wraith.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 100));
    Wraith.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 75));
    Wraith.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 50));
    Wraith.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 25));
    Wraith.Drops.push(NewDrop(ItemList.Armors.ScoutHuntersVest, 10));
    //Heavy
    Wraith.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 100));
    Wraith.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 75));
    Wraith.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 50));
    Wraith.Drops.push(NewDrop(ItemList.Armors.Boneweave, 25));
    Wraith.Drops.push(NewDrop(ItemList.Armors.BalrogSkin, 10));
    //Shield
    Wraith.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 100));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 75));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 50));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 25));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.Aegis, 10));
    //Dagger offHand
    Wraith.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 100));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 75));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 50));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 25));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.RunicClaws, 10));
    //Rings
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
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
        area: "AncientCave",
        isShown: false,
            killCount: 0,
            manaCost: 310
    };
    monsterList.Wraith = Wraith;

    LichKing.Drops = [];
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Falchion, 125));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.WarSword, 100))
    LichKing.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.BalrogBlade, 25));
    //Axes
    LichKing.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 125));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 100));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Tabar, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.GloriousAxe, 25));
    //Maces
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Flail, 125));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Cudgel, 100));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Scourge, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.ThunderMaul, 25));
    //Staves
    LichKing.Drops.push(NewDrop(ItemList.Weapons.YewWand, 125));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 100));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Shillelagh, 25));
    //Bows
    LichKing.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 125));;
    LichKing.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 100));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.GrandMatronBow, 25));
    //Robes
    LichKing.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 125));
    LichKing.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 100));
    LichKing.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 75));
    LichKing.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 50));
    LichKing.Drops.push(NewDrop(ItemList.Armors.RobeoftheDragonSlayer, 25));
    //Leather
    LichKing.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 125));
    LichKing.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 100));
    LichKing.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 75));
    LichKing.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 50));
    LichKing.Drops.push(NewDrop(ItemList.Armors.ScoutHuntersVest, 25));
    //Heavy
    LichKing.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 125));
    LichKing.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 100));
    LichKing.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 75));
    LichKing.Drops.push(NewDrop(ItemList.Armors.Boneweave, 50));
    LichKing.Drops.push(NewDrop(ItemList.Armors.BalrogSkin, 25));
    //Shield
    LichKing.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 125));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 100));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 75));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 50));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.Aegis, 25));
    //Dagger offHand
    LichKing.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 125));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 100));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 75));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 50));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.RunicClaws, 25));
    //Rings
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofWealth, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofOpportunity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofFortune, 20));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofProsperity, 15));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofAbundance, 10));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofPlenty, 5));
    //Epic
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientRingofWealth, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientRingofOpportunity, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientRingofFortune, 4));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientRingofProsperity, 3));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientRingofAbundance, 2));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientRingofPlenty, 1));
    //Amulets
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofLearning, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofWealth, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofOpportunity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofFortune, 20));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofProsperity, 15));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofAbundance, 10));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeAmuletofPlenty, 5));
    //Epic
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofLearning, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofWealth, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofOpportunity, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofFortune, 4));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofProsperity, 3));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofAbundance, 2));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientAmuletofPlenty, 1));
    //Talismans
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofLearning, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofWealth, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofOpportunity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofFortune, 20));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofProsperity, 15));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofAbundance, 10));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeTalismanofPlenty, 5));
    //Epic
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofLearning, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofWealth, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofOpportunity, 5));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofFortune, 4));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofProsperity, 3));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofAbundance, 2));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientTalismanofPlenty, 1));
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
        area: "AncientCave",
        isShown: false,
        killCount: 0,
            manaCost: 320
    };
    monsterList.LichKing = LichKing;
}

MakeItemList()
MakeMonsterList()
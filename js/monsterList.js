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
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 5000));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    VarikGrunt.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
    VarikGrunt.Stats = {
        hp: 30,
        maxHp: 30,
        def: 0,
        minDmg: 1,
        maxDmg: 3,
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
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    VarikSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
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
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    VarikMarksmen.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
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
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    VarikVulture.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
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
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    VarikEvader.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
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
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    VariksLiar.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
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
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    VariksQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
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
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 25));
    //Amulets
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 25));
    //Talismans
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 150));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 100));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 75));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 50));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 25));
    LordVarik.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 25));
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
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    ToxicFlies.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
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
    Stalker.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    Stalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
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
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    AlphaStalker.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
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
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    StalkerPack.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
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
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    JumpingSpider.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
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
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    SpiderBeast.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
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
    Narsus.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    Narsus.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
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
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    JotunnScout.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
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
    Giant.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
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
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
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
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
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
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
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
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
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
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
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
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
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
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 25));
    //Amulets
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 25));
    //Talismans
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 25));
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
    Zombie.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
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
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
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
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
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
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
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
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
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
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
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
    Wraith.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
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
    LichKing.Drops.push(NewDrop(ItemList.Accessory.CrackedRingofLearning, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.DamagedRingofLearning, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofLearning, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.SupremeRingofLearning, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AncientRingofLearning, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 25));
    //Amulets
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 25));
    //Talismans
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 25));
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
    };
    monsterList.LichKing = LichKing;
}

MakeItemList()
MakeMonsterList()
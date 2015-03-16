function NewDrop(item, chance) {
    drop = {};
    drop.item = item;
    drop.chance = chance;
    return drop;
}
// chance out of 10000, 1 = 0.01%, 10 = 0.1%, 100 = 1%, 1000 = 10%...
monsterList = {};
function MakeMonsterList()
{
    Bandit = {};
    Bandit.Drops = [];
    //Swords
    Bandit.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    Bandit.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 1));
    //Axes
    Bandit.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 1));
    //Maces
    Bandit.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 1));
    //Staves
    Bandit.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 1));
    //Bows
    Bandit.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    Bandit.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 1));
    //Robes
    Bandit.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    Bandit.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    Bandit.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    Bandit.Drops.push(NewDrop(ItemList.Armors.MageRobes, 1));
    //Leather
    Bandit.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    Bandit.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    Bandit.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    Bandit.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 1));
    //Heavy
    Bandit.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    Bandit.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    Bandit.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    Bandit.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 1));
    //Shield
    Bandit.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 1));
    //Dagger offHand
    Bandit.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 1));
    //Rings
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
    Bandit.Stats = {
        hp: 30,
        maxHp: 30,
        def: 0,
        minDmg: 1,
        maxDmg: 3,
        baseExp: 10,
        acc: 95,
        eva: 5,
        name: "Bandit",
        displayName: "Bandit",
        type: "weak",
        id: 1,
        level: 1,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.Bandit = Bandit;
       
    BanditThug = {};
    BanditThug.Drops = [];
    //Swords
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 2));
    //Axes
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 2));
    //Maces
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 2));
    //Staves
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 2));
    //Bows
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 2));
    //Robes
    BanditThug.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.MageRobes, 2));
    //Leather
    BanditThug.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 2));
    //Heavy
    BanditThug.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 2));
    //Shield
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 2));
    //Dagger offHand
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 2));
    //Rings
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
    BanditThug.Stats = {
        hp: 100,
        maxHp: 100,
        def: 7,
        minDmg: 5,
        maxDmg: 10,
        baseExp: 40,
        acc: 95,
        eva: 5,
        name: "BanditThug",
        displayName: "Bandit Thug",
        type: "weak",
        id: 2,
        level: 2,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
    };
    monsterList.BanditThug = BanditThug;

    BanditArcher = {};
    BanditArcher.Drops = [];
    //Swords
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 3));
    //Axes
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 3));
    //Maces
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 3));
    //Staves
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 3));
    //Bows
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 3));
    //Robes
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.MageRobes, 3));
    //Leather
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 3));
    //Heavy
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 3));
    //Shield
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 3));
    //Dagger offHand
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 3));
    //Rings
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
    BanditArcher.Stats = {
        hp: 250,
        maxHp: 250,
        def: 10,
        minDmg: 8,
        maxDmg: 12,
        baseExp: 100,
        acc: 95,
        eva: 5,
        name: "BanditArcher",
        displayName: "Bandit Archer",
        type: "weak",
        id: 3,
        level: 3,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
    };
    monsterList.BanditArcher = BanditArcher;

    BanditPlunderer = {};
    BanditPlunderer.Drops = [];
    //Swords
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 4));
    //Axes
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 4));
    //Maces
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 4));
    //Staves
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 4));
    //Bows
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 4));
    //Robes
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.MageRobes, 4));
    //Leather
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 4));
    //Heavy
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 4));
    //Shield
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 4));
    //Dagger offHand
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 4));
    //Rings
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
    BanditPlunderer.Stats = {
        hp: 400,
        maxHp: 400,
        def: 15,
        minDmg: 15,
        maxDmg: 20,
        baseExp: 150,
        acc: 95,
        eva: 5,
        name: "BanditPlunderer",
        displayName: "Bandit Plunderer",
        type: "weak",
        id: 4,
        level: 4,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
    };
    monsterList.BanditPlunderer = BanditPlunderer;

    BanditAssasin = {};
    BanditAssasin.Drops = [];
    //Swords
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 5));
    //Axes
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 5));
    //Maces
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 5));
    //Staves
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 5));
    //Bows
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 5));
    //Robes
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.MageRobes, 5));
    //Leather
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 5));
    //Heavy
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 5));
    //Shield
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 5));
    //Dagger offHand
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 5));
    //Rings
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
    BanditAssasin.Stats = {
        hp: 700,
        maxHp: 700,
        def: 20,
        minDmg: 20,
        maxDmg: 24,
        baseExp: 250,
        acc: 95,
        eva: 5,
        name: "BanditAssasin",
        displayName: "Bandit Assasin",
        type: "weak",
        id: 5,
        level: 5,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
    };
    monsterList.BanditAssasin = BanditAssasin;

    BanditLeader = {};
    BanditLeader.Drops = [];
    //Swords
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 50))
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 10));
    //Axes
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 10));
    //Maces
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.Club, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 10));
    //Staves
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 10));
    //Bows
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 75));;
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 10));
    //Robes
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.MageRobes, 10));
    //Leather
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 10));
    //Heavy
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 10));
    //Shield
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.Buckler, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 10));
    //Dagger offHand
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.Dagger, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.Kris, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 10));
    //Rings
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
    BanditLeader.Stats = {
        hp: 1000,
        maxHp: 1000,
        def: 25,
        minDmg: 30,
        maxDmg: 40,
        baseExp: 400,
        acc: 95,
        eva: 5,
        name: "BanditLeader",
        displayName: "Bandit Leader",
        type: "weak",
        id: 6,
        level: 6,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
    };
    monsterList.BanditLeader = BanditLeader;

    BanditChief = {};
    BanditChief.Drops = [];
    //Swords
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 75))
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ColossusSword, 10));
    //Axes
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.EttinAxe, 10));
    //Maces
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.Club, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ReinforcedMace, 10));
    //Staves
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GhostWand, 10));
    //Bows
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 100));;
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.AshwoodBow, 10));
    //Robes
    BanditChief.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.MageRobes, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.MagicWeaverTunic, 10));
    //Leather
    BanditChief.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.RangersVest, 10));
    //Heavy
    BanditChief.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.SalvagedChainArmor, 10));
    //Shield
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.Buckler, 100));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 75));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 50));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 25));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.Luna, 10));
    //Dagger offHand
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.Dagger, 100));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.Kris, 75));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 50));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 25));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.FangedKnife, 10));
    //Rings
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
    BanditChief.Stats = {
        hp: 1350,
        maxHp: 1350,
        def: 30,
        minDmg: 40,
        maxDmg: 55,
        baseExp: 600,
        acc: 95,
        eva: 5,
        name: "BanditChief",
        displayName: "Bandit Chief",
        type: "weak",
        id: 7,
        level: 7,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
    };
    monsterList.BanditChief = BanditChief;

    BanditLord = {};
    BanditLord.Drops = [];
    //Swords
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 100))
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ColossusSword, 25));
    //Axes
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.EttinAxe, 25));
    //Maces
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.Club, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ReinforcedMace, 25));
    //Staves
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GhostWand, 25));
    //Bows
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 150));;
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.AshwoodBow, 25));
    //Robes
    BanditLord.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.MageRobes, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.MagicWeaverTunic, 25));
    //Leather
    BanditLord.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.RangersVest, 25));
    //Heavy
    BanditLord.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.SalvagedChainArmor, 25));
    //Shield
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.Buckler, 150));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 100));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 75));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 50));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.Luna, 25));
    //Dagger offHand
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.Dagger, 150));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.Kris, 100));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 75));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 50));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.FangedKnife, 25));
    //Rings
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 25));
    //Amulets
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 25));
    //Talismans
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 25));
    BanditLord.Stats = {
        hp: 1600,
        maxHp: 1600,
        def: 35,
        minDmg: 50,
        maxDmg: 60,
        baseExp: 750,
        acc: 95,
        eva: 5,
        name: "BanditLord",
        displayName: "Bandit Lord",
        type: "weak",
        id: 8,
        level: 8,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
    };
    monsterList.BanditLord = BanditLord;

    Spider = {};
    Spider.Drops = [];
    Spider.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Spider.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
    Spider.Stats = {
        hp: 2000,
        maxHp: 2000,
        def: 40,
        minDmg: 65,
        maxDmg: 75,
        baseExp: 1000,
        acc: 95,
        eva: 5,
        name: "Spider",
        displayName: "Spider",
        type: "average",
        id: 9,
        level: 9,
        area: "Forest",
        isShown: false,
        killCount: 0,
    };
    monsterList.Spider = Spider;

    Wolf = {};
    Wolf.Drops = [];
    Wolf.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Wolf.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
    Wolf.Stats = {
        hp: 2400,
        maxHp: 2400,
        def: 50,
        minDmg: 80,
        maxDmg: 100,
        baseExp: 1250,
        acc: 95,
        eva: 5,
        name: "Wolf",
        displayName: "Wolf",
        type: "average",
        id: 10,
        level: 10,
        area: "Forest",
        isShown: false,
        killCount: 0,
    };
    monsterList.Wolf = Wolf;

    Bear = {};
    Bear.Drops = [];
    Bear.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Bear.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
    Bear.Stats = {
        hp: 3000,
        maxHp: 3000,
        def: 60,
        minDmg: 100,
        maxDmg: 115,
        baseExp: 1500,
        acc: 95,
        eva: 5,
        name: "Bear",
        displayName: "Bear",
        type: "average",
        id: 11,
        level: 11,
        area: "Forest",
        isShown: false,
        killCount: 0,
    };
    monsterList.Bear = Bear;

    Grizzly = {};
    Grizzly.Drops = [];
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
    Grizzly.Stats = {
        hp: 3500,
        maxHp: 3500,
        def: 70,
        minDmg: 120,
        maxDmg: 140,
        baseExp: 1800,
        acc: 95,
        eva: 5,
        name: "Grizzly",
        displayName: "Grizzly",
        type: "average",
        id: 12,
        level: 12,
        area: "Forest",
        isShown: false,
        killCount: 0,
    };
    monsterList.Grizzly = Grizzly;

    Troll = {};
    Troll.Drops = [];
    Troll.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Troll.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
    Troll.Stats = {
        hp: 4200,
        maxHp: 4200,
        def: 80,
        minDmg: 150,
        maxDmg: 180,
        baseExp: 2200,
        acc: 95,
        eva: 5,
        name: "Troll",
        displayName: "Troll",
        type: "average",
        id: 13,
        level: 13,
        area: "Forest",
        isShown: false,
        killCount: 0,
    };
    monsterList.Troll = Troll;

    ForestTroll = {};
    ForestTroll.Drops = [];
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
    ForestTroll.Stats = {
        hp: 4800,
        maxHp: 4800,
        def: 90,
        minDmg: 170,
        maxDmg: 200,
        baseExp: 2700,
        acc: 95,
        eva: 5,
        name: "ForestTroll",
        displayName: "Forest Troll",
        type: "average",
        id: 14,
        level: 14,
        area: "Forest",
        isShown: false,
        killCount: 0,
    };
    monsterList.ForestTroll = ForestTroll;

    SpiderQueen = {};
    SpiderQueen.Drops = [];
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
    SpiderQueen.Stats = {
        hp: 6000,
        maxHp: 6000,
        def: 100,
        minDmg: 200,
        maxDmg: 220,
        baseExp: 3500,
        acc: 95,
        eva: 5,
        name: "SpiderQueen",
        displayName: "Spider Queen",
        type: "average",
        id: 15,
        level: 15,
        area: "Forest",
        isShown: false,
        killCount: 0,
    };
    monsterList.SpiderQueen = SpiderQueen;

    TrollLeader = {};
    TrollLeader.Drops = [];
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
    TrollLeader.Stats = {
        hp: 8000,
        maxHp: 8000,
        def: 110,
        minDmg: 220,
        maxDmg: 240,
        baseExp: 4000,
        acc: 95,
        eva: 5,
        name: "TrollLeader",
        displayName: "Troll Leader",
        type: "average",
        id: 16,
        level: 16,
        area: "Forest",
        isShown: false,
        killCount: 0,
    };
    monsterList.TrollLeader = TrollLeader;

    Giant = {};
    Giant.Drops = [];
    Giant.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Giant.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
        area: "Mountains",
        isShown: false,
        killCount: 0,
    };
    monsterList.Giant = Giant;

    FrostGiant = {};
    FrostGiant.Drops = [];
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
        area: "Mountains",
        isShown: false,
        killCount: 0,
    };
    monsterList.FrostGiant = FrostGiant;

    FrostTroll = {};
    FrostTroll.Drops = [];
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
        displayName: "Frost Troll",
        type: "strong",
        id: 19,
        level: 19,
        area: "Mountains",
        isShown: false,
        killCount: 0,
    };
    monsterList.FrostTroll = FrostTroll;

    Wyvern = {};
    Wyvern.Drops = [];
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
        area: "Mountains",
        isShown: false,
        killCount: 0,
    };
    monsterList.Wyvern = Wyvern;

    FrostDragon = {};
    FrostDragon.Drops = [];
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
        area: "Mountains",
        isShown: false,
        killCount: 0,
    };
    monsterList.FrostDragon = FrostDragon;

    IceElemental = {};
    IceElemental.Drops = [];
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
        area: "Mountains",
        isShown: false,
        killCount: 0,
    };
    monsterList.IceElemental = IceElemental;

    FrostGuardian = {};
    FrostGuardian.Drops = [];
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
        area: "Mountains",
        isShown: false,
        killCount: 0,
    };
    monsterList.FrostGuardian = FrostGuardian;

    FrostQueen = {};
    FrostQueen.Drops = [];
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
        area: "Mountains",
        isShown: false,
        killCount: 0,
    };
    monsterList.FrostQueen = FrostQueen;

    Zombie = {};
    Zombie.Drops = [];
    Zombie.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Zombie.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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

    Skeleton = {};
    Skeleton.Drops = [];
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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

    SkeletonSoldier = {};
    SkeletonSoldier.Drops = [];
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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

    SkeletonArcher = {};
    SkeletonArcher.Drops = [];
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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

    SkeletonMage = {};
    SkeletonMage.Drops = [];
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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

    SkeletonHealer = {};
    SkeletonHealer.Drops = [];
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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

    Wraith = {};
    Wraith.Drops = [];
    Wraith.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    Wraith.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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

    LichKing = {};
    LichKing.Drops = [];
    LichKing.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 40));
    LichKing.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 35));
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
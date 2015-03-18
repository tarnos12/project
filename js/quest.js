function monsterKillCount() {
    if (player.level >= 2) {
        monsterList.BanditThug.Stats.isShown = true;
        document.getElementById("story").innerHTML = "Story time!" + "<br/>";
    };
    if (player.level >= 3) {
        monsterList.BanditArcher.Stats.isShown = true;
        document.getElementById("story").innerHTML += "Some story text -_-";
    };
    if (player.level >= 4) {
        monsterList.BanditPlunderer.Stats.isShown = true;
    };
    if (player.level >= 5) {
        monsterList.BanditAssasin.Stats.isShown = true;
    };
    if (player.level >= 6) {
        monsterList.BanditLeader.Stats.isShown = true;
    };
    if (player.level >= 7) {
        monsterList.BanditChief.Stats.isShown = true;
    };
    if (player.level >= 8) {
        monsterList.BanditLord.Stats.isShown = true;
    };
    if (player.level >= 9) {
        monsterList.Spider.Stats.isShown = true;
    };
    if (player.level >= 10) {
        monsterList.Wolf.Stats.isShown = true;
    };
    if (player.level >= 11) {
        monsterList.Bear.Stats.isShown = true;
    };
    if (player.level >= 12) {
        monsterList.Grizzly.Stats.isShown = true;
    };
    if (player.level >= 13) {
        monsterList.Troll.Stats.isShown = true;
    };
    if (player.level >= 14) {
        monsterList.ForestTroll.Stats.isShown = true;
    };
    if (player.level >= 15) {
        monsterList.SpiderQueen.Stats.isShown = true;
    };
    if (player.level >= 16) {
        monsterList.TrollLeader.Stats.isShown = true;
    };
    if (player.level >= 17) {
        monsterList.Giant.Stats.isShown = true;
    };
    if (player.level >= 18) {
        monsterList.FrostGiant.Stats.isShown = true;
    };
    if (player.level >= 19) {
        monsterList.FrostTroll.Stats.isShown = true;
    };
    if (player.level >= 20) {
        monsterList.Wyvern.Stats.isShown = true;
    };
    if (player.level >= 21) {
        monsterList.FrostDragon.Stats.isShown = true;
    };
    if (player.level >= 22) {
        monsterList.IceElemental.Stats.isShown = true;
    };
    if (player.level >= 23) {
        monsterList.FrostGuardian.Stats.isShown = true;
    };
    if (player.level >= 24) {
        monsterList.FrostQueen.Stats.isShown = true;
    };
    if (player.level >= 25) {
        monsterList.Zombie.Stats.isShown = true;
    };
    if (player.level >= 26) {
        monsterList.Skeleton.Stats.isShown = true;
    };
    if (player.level >= 27) {
        monsterList.SkeletonSoldier.Stats.isShown = true;
    };
    if (player.level >= 28) {
        monsterList.SkeletonArcher.Stats.isShown = true;
    };
    if (player.level >= 29) {
        monsterList.SkeletonMage.Stats.isShown = true;
    };
    if (player.level >= 30) {
        monsterList.SkeletonHealer.Stats.isShown = true;
    };
    if (player.level >= 31) {
        monsterList.Wraith.Stats.isShown = true;
    };
    if (player.level >= 32) {
        monsterList.LichKing.Stats.isShown = true;
    };
    CreateMonsterHtml();
};
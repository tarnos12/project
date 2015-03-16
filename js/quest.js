function monsterKillCount() {
    if (player.level >= 2) {
        BanditThug.Stats.isShown = true;
        document.getElementById("story").innerHTML = "Story time!" + "<br/>";
    };
    if (player.level >= 3) {
        BanditArcher.Stats.isShown = true;
        document.getElementById("story").innerHTML += "Some story text -_-";
    };
    if (player.level >= 4) {
        BanditPlunderer.Stats.isShown = true;
    };
    if (player.level >= 5) {
        BanditAssasin.Stats.isShown = true;
    };
    if (player.level >= 6) {
        BanditLeader.Stats.isShown = true;
    };
    if (player.level >= 7) {
        BanditChief.Stats.isShown = true;
    };
    if (player.level >= 8) {
        BanditLord.Stats.isShown = true;
    };
    if (player.level >= 9) {
        Spider.Stats.isShown = true;
    };
    if (player.level >= 10) {
        Wolf.Stats.isShown = true;
    };
    if (player.level >= 11) {
        Bear.Stats.isShown = true;
    };
    if (player.level >= 12) {
        Grizzly.Stats.isShown = true;
    };
    if (player.level >= 13) {
        Troll.Stats.isShown = true;
    };
    if (player.level >= 14) {
        ForestTroll.Stats.isShown = true;
    };
    if (player.level >= 15) {
        SpiderQueen.Stats.isShown = true;
    };
    if (player.level >= 16) {
        TrollLeader.Stats.isShown = true;
    };
    if (player.level >= 17) {
        Giant.Stats.isShown = true;
    };
    if (player.level >= 18) {
        FrostGiant.Stats.isShown = true;
    };
    if (player.level >= 19) {
        FrostTroll.Stats.isShown = true;
    };
    if (player.level >= 20) {
        Wyvern.Stats.isShown = true;
    };
    if (player.level >= 21) {
        FrostDragon.Stats.isShown = true;
    };
    if (player.level >= 22) {
        IceElemental.Stats.isShown = true;
    };
    if (player.level >= 23) {
        FrostGuardian.Stats.isShown = true;
    };
    if (player.level >= 24) {
        FrostQueen.Stats.isShown = true;
    };
    if (player.level >= 25) {
        Zombie.Stats.isShown = true;
    };
    if (player.level >= 26) {
        Skeleton.Stats.isShown = true;
    };
    if (player.level >= 27) {
        SkeletonSoldier.Stats.isShown = true;
    };
    if (player.level >= 28) {
        SkeletonArcher.Stats.isShown = true;
    };
    if (player.level >= 29) {
        SkeletonMage.Stats.isShown = true;
    };
    if (player.level >= 30) {
        SkeletonHealer.Stats.isShown = true;
    };
    if (player.level >= 31) {
        Wraith.Stats.isShown = true;
    };
    if (player.level >= 32) {
        LichKing.Stats.isShown = true;
    };
    CreateMonsterHtml();
};
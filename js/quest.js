var monsterUnlock = {
    VarikSoldier: false,
    VarikMarksmen: false,
    VarikVulture: false,
    VarikEvader: false,
    VariksLiar: false,
    VariksQueen: false,
    LordVarik: false,

    ToxicFlies: false,
};
function quest() {
    if (player.level >= 2) {
        monsterList.VarikSoldier.Stats.isShown = true;
        if (monsterUnlock.VarikSoldier == false) {
            document.getElementById("story").innerHTML += '<h3><b>Varik Soldiers</b></h3><br />' +
            '<p class="story">After your victory over the grunts you notice another group approaching.' +
            'The Varik Soldiers have arrived and they aren\'t happy.' +
            'You stand in front of them and yell at them to stop.' +
            'They turn and you can see these ones have actually been trained a bit.' +
            'When they noticed the bodies a laugh sounded out from the group.' + '<br /><br />' +
            '"You just beat up a bunch of potential recruits and think that you are some tough guy now, well let us show you what tough guys get around here."' + '<br /><br />' +
            'All you do in response is walk towards them and start the battle.</p>';
        };
        monsterUnlock.VarikSoldier = true;
    };
    if (player.level >= 3) {
        monsterList.VarikMarksmen.Stats.isShown = true;
        if (monsterUnlock.VarikMarksmen == false) {
            document.getElementById("story").innerHTML += '<h3><b>Varik Marksmen</b></h3><br />' +
          '<p class="story">"What in the name Asmodeus are you? Why won\'t you die?"' + '<br /><br />' +
          'You stare as the soldier departs from this world.' +
          'You feel a pang of sadness over this but quickly remember these thugs are responsible for burning down New Hemlock.' +
          'Only the leaders of this petty gang know why. As you are thinking an arrow just barely misses you and hits a groaning soldier in the chest.' + '<br /><br />' +
          '"Darn it, I missed. HEY, stay still!"' + '<br /><br />' +
          'Another marksmen stands behind the one who fired at the now dead soldier.' +
          'They laugh at the dead and attack comrades, and they just continue to make things worse for themselves.</p>';
        };
        monsterUnlock.VarikMarksmen = true;
    };
    if (player.level >= 4) {
        monsterList.VarikVulture.Stats.isShown = true;
        if (monsterUnlock.VarikVulture == false) {
            document.getElementById("story").innerHTML += '<h3><b>Varik Vulture</b></h3><br />' +
            '<p class="story">You might have been hit a few times but you are quickly discovering that immortality is a pretty huge advantage.' +
            'Your kind of immortality is one where you never actually die, you just fall down and wake back up after your healing kicks in.' +
            'The marksmen have been taken care of and now you continue deeper into their hideout.' + '<br /><br />' +
            '"Hey, did you have to kill them? I mean come on, do you know how long it takes to train a decent archer?' +
            'You don\'t care do you? Well come here, I\'m gonna teach about the wonderful ways of pain."' + '<br /><br />' +
            'As stoic as ever you handle the words without a grimace and charge at the murderer.</p>';
        };
        monsterUnlock.VarikVulture = true;
    };
    if (player.level >= 5) {
        monsterList.VarikEvader.Stats.isShown = true;
        if (monsterUnlock.VarikEvader == false){
            document.getElementById("story").innerHTML += '<h3><b>Varik Evader</b></h3><br />' +
            '<p class="story">"Haha, that was fun, little pup. Go on and get killed already. Let me die alone!"' + '<br /><br />' +
            'The Buzzard was fast and strong but you were faster and stronger and with every victory you felt your strength growing.' +
            'Maybe you might make as much of a presence to be noticed by the Temple of Legends but that is far ahead and out of your league. The Voice returns:' + '<br /><br />' +
            '"Why are you fighting these weaklings?' +
            'I need MORE than some weak group of bandits. Where are the Dragons, the Jottun, and the Liches?' +
            'Beat them and then maybe I could feel a little excitement."' + '<br /><br />' +
            'The Voice sure is impatient.' +
            'What makes it think you can fight a Lich? Anyway, better move forward.' + '<br /><br />' +
            'The knife was just a little too slow and you ducked out of the way.' + '<br /><br />' +
            '"Good you aren\'t dead yet. Let us put you to rest, Immortal."</p>';
        };
        monsterUnlock.VarikEvader = true;
    };
    if (player.level >= 6) {
        monsterList.VariksLiar.Stats.isShown = true;
        if (monsterUnlock.VariksLiar == false) {
            document.getElementById("story").innerHTML += '<h3><b>Variks Liar</b></h3><br />' +
            '<p class="story">The Evader thought he had you but it seems that immortality isn\'t your only gift,' +
            'because it is becoming apparent that you are developing into a decent fighter as even the Evader couldn\'t pin you down.' +
            'The Evader lived up to his name though but was still defeated because where he had skill, you had endurance and patience.' + '<br /><br />' +
            '"The Lord is not going to like this at all. Ohh, lets get this over with. I know you will win but I am not going to just give up."' +
            'Variks Liar said as he past around the corner.' + '<br /><br />' +
            'This one seems weak, but don\'t let your eyes deceive you.' +
            'The Liar is known as one of the best illusionist in the Seven Cities.' +
            'He could end up slowing you down to the point where you just give up. So watch him and don\'t get distracted.</p>';
        };
        monsterUnlock.VariksLiar = true;
    };
    if (player.level >= 7) {
        monsterList.VariksQueen.Stats.isShown = true;
        if (monsterUnlock.VariksQueen == false) {
            document.getElementById("story").innerHTML += '<h3><b>Variks Queen</b></h3><br />' +
            '<p class="story">The Liar had some nasty tricks up his sleeve,' +
            'multiple times he had refracted on image of himself in different directions causing you to slam right into the ground, wall, or table.' +
            'He even managed to make you think your weapon became a snake which didn\'t last long.' +
            'Eventually, he fell just like the others and failed in his goal to stop you.' +
            'You are beginning to get lost in the euphoria of battle and find yourself loving the moment.' +
            'Another approaches.' + '<br /><br />' +
            '"Another worm dead, Our Lord is going to go ballistic."' +
            'She stands there wielding a massive battle ax and saunters over and begins to swing at you.' +
            'You just barely duck under her swing and she yells out.' +
            '"Well, fight me or better yet, just stand there and die!"' + '<br /><br />' +
            'No time to think, another battle has begun.</p>';
        };
        monsterUnlock.VariksQueen = true;
    };
    if (player.level >= 8) {
        monsterList.LordVarik.Stats.isShown = true;
        if (monsterUnlock.LordVarik == false) {
            document.getElementById("story").innerHTML += '<h3><b>Lord Varik</b></h3><br />' +
            '<p class="story">She lay there bleeding out, "You are going to burn, even your immortality won\'t protect you from judgment."' +  
            'She died sitting against a wall in a dingy hideout that smelled of alcohol and ginger.' + '<br /><br />' +
 
            '"You killed my wife, my friend, my soldiers, and my "fans".' +
            'What in the name of Asmodeus has possessed you to attack our group so ferociously?"' + 
            'He almost seems to not actually care.' + '<br /><br />' +
 
            'For the first time you spoke to the murderer.' + 
            '"Not revenge, not for any righteous cause, not for glory, not for justice, but only for power.' + 
            'I wanted to fight and you were here. That is all."' + '<br /><br />' + 
 
            '"Really? Well, you can have your fight, you animal. I will show why they call me LORD!"' + 
            'He is glowing and wields a spear fashioned of a green tassel and a bronze metal.' + 
            'He lunges at you and the battle begins.</p>';
        };
        monsterUnlock.LordVarik = true;
    };
    if (player.level >= 9) {
        monsterList.ToxicFlies.Stats.isShown = true;
        if (monsterUnlock.ToxicFlies == false) {
            document.getElementById("story").innerHTML += '<h3><b>The End of Lord Varik</b></h3><br />' +
            '<p class="story">Just like the rest of his gang, he lay there bleeding and feeling woefully mortal.' +  
            '"How? How did you become immortal? Why you? Why not me? I DESERVE IT! I won\'t die to this! Not here, Not today!"' + '<br /><br />' +
 
            'You spoke again, "Why did you burn down New Hemlock?"' + '<br /><br />' +
 
            'He grinned like a maniac, "How do you think I got this equipment?' + '<br /><br />' +
            'Sacrifices of family and blood gave me this. What did you do for you power, huh? Die? Well, would you kindly go do it again?"' + '<br /><br />' +
            'His venomous words left his mouth and he died laying next to his wife.' + '<br /><br />' +
 
            'The Voice: "Hmm, I wonder why you became immortal myself, but I suppose we will have to wait for answers.' + '<br /><br />' +
            'Where to next? I want to see more and feel more."' + '<br /><br />' +
 
            'You just sat there resting and thinking "why you?".' + '<br /><br />' +
            'Now is not the time for introspection though, you need to feel battle again and the next viable place is the Forest of Narsus.' + '<br /><br />' +
            'After that comes Old Crones Mountain and then... just maybe you can rest.</p>' +

            '<h1><b>Forest Of Narsus</b></h1>' +
 
            '<p class="story">You stand at the edge of the forest. This is it, the point of no return. ' +
            'It is said that those who enter the forest are cursed to never return home, you are here to prove them wrong.' +  
            'The deep grime of the place really sticks out, every footfall ends in a snapped twig or a crushed leaf.' + 
            'The smell of rot and the sound of insects fill your senses as your take the first tentative step into the Spider Queens territory.</p>' +

            '<h3><b>Toxic Flies</b></h3>' +
 
            '<p class="story">As you enter the forest the sound of insects intensifies until you see a swarm of large flies.' +  
            'There had to be hundreds of them and all of them around a foot and a half long.' +  
            'When they noticed you they immediately began spitting at you; the substance was definitely acidic.' +  
            'You took a while to reach them but when you did the swarm seemed to grow and infest the entire surrounding area.' +  
            'It looks like you might be here for a while.' + '<br /><br />' +
 
            'Voice: "Why are you fighting flies? Get a move on already! I want to see something more impressive than flies."</p>'
        };
        monsterUnlock.ToxicFlies = true;
    };
    if (player.level >= 10) {
        monsterList.Stalker.Stats.isShown = true;
    };
    if (player.level >= 11) {
        monsterList.AlphaStalker.Stats.isShown = true;
    };
    if (player.level >= 12) {
        monsterList.StalkerPack.Stats.isShown = true;
    };
    if (player.level >= 13) {
        monsterList.JumpingSpider.Stats.isShown = true;
    };
    if (player.level >= 14) {
        monsterList.SpiderBeast.Stats.isShown = true;
    };
    if (player.level >= 15) {
        monsterList.Narsus.Stats.isShown = true;
    };
    if (player.level >= 16) {
        monsterList.JotunnScout.Stats.isShown = true;
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

//test
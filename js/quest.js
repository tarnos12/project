var monsterUnlock = {
    VarikSoldier: false,
    VarikMarksmen: false,
    VarikVulture: false,
    VarikEvader: false,
    VariksLiar: false,
    VariksQueen: false,
    LordVarik: false,

    ToxicFlies: false,
    Stalker: false,
    AlphaStalker: false,
    StalkerPack: false,
    JumpingSpider: false,
    SpiderBeast: false,
    Narsus: false,
    JotunnScout: false,

    Giant: false,
    FrostGiant: false,
    FrostTroll: false,
    Wyvern: false,
    FrostDragon: false,
    IceElemental: false,
    FrostGuardian: false,
    FrostQueen: false,

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

            'Voice: "Why are you fighting flies? Get a move on already! I want to see something more impressive than flies."</p>';
        };
        monsterUnlock.ToxicFlies = true;
    };
    if (player.level >= 10) {
        monsterList.Stalker.Stats.isShown = true;
        if (monsterUnlock.Stalker == false) {
            document.getElementById("story").innerHTML += '<h3><b>Stalker</b></h3><br />' +
                '<p class="story">It took the rest of the day and part of the night to clear out the rest of the flies.' +
                'Maybe this wasn\'t a good idea, but it is too late to turn back now.' +
                'As you trudge through the darkness you notice glimpses of movement and slowly these glimpses become full views of the creature.' +
                'A wolf with dark and dirty hair, teeth dripping with saliva, and eyes that looked bloodshot.' +
                'It howled and the sound was like a groan from a far larger creature.  It dashed off into the woods but common sense tells you that it is still around.' + '<br /><br />' +

                'But just as you think it left, it comes dashing from your right and attempts to tackle you and the fight for survival has begun.</p>';
    };
    monsterUnlock.Stalker = true;
    };
    if (player.level >= 11) {
        monsterList.AlphaStalker.Stats.isShown = true;
        if (monsterUnlock.AlphaStalker == false) {
            document.getElementById("story").innerHTML += '<h3><b>Alpha Stalker</b></h3><br />' +

                '<p class="story">Voice: "What a poor doggy. Did you have to kill it? Try to tame the next one."<br /><br />' +

                'You ignore the Voice and continue to walk through the forest.' +
                'At this point you are starting to see glimpses of the Deep Kings Mountain through the canopy.' +
                'So, you climbed up a tree and watched the surrounding area for a bit.' +
                'It is almost sunset and the trees seem to stretch for miles around you and only stops when you look at the mountain.' +
                'It is massive and towers over the forest like dictator imposing its power over the weak.<br /><br />' +

                'After resting for a bit you decide to climb down and continue your journey.' +
                'When you touch the ground you immediately notice how quiet it has gotten and alarm bells start going off in your head.' +
                'Another wolf has appeared, but different: Its gray hair hangs off of it in tatters and one eye seems to have left its home.' +
                'It is large, as big as a small house.  It makes no noise and starts attacking you.<br /><br />' +

                'Voice: "YOU HAVE TO TAME THAT!"<br /><br />' +

                'You ignore the Voice again and focus on the battle.</p>';
        };
        monsterUnlock.AlphaStalker = true;
    };
    if (player.level >= 12) {
        monsterList.StalkerPack.Stats.isShown = true;
        if (monsterUnlock.StalkerPack == false) {
            document.getElementById("story").innerHTML += '<h3><b>Stalker Pack</b></h3><br />' +

                '<p class="story">After you managed to put the beast down you can tell that the battle isn\'t over yet.' +
                'The howling started after you killed the alpha, a sad, mourning howl.' +
                'The howls went on for several minutes until it went back to being frustratingly quiet and you started noticing eyes gleaming at you from the darkness.<br /><br />' +

                'Voice: "Well, good luck, see you in the morning!"<br /><br />' +

                'Suddenly, Stalkers were everywhere snarling, barking, and snapping at you.  It is going to be a very long night.</p>';
            };
        monsterUnlock.StalkerPack = true;
    };
    if (player.level >= 13) {
        monsterList.JumpingSpider.Stats.isShown = true;
        if (monsterUnlock.JumpingSpider == false) {
            document.getElementById("story").innerHTML += '<h3><b>Jumping Spider</b></h3><br />' +

                '<p class="story">The sun has risen and you stand amongst the dead pack of Stalkers but just as you begin to rest another creature comes.' +
                'It seems that this forest really doesn\'t like you.' +
                'Its legs are at least around 3 and half feet long and its body suspends above the ground like a chandelier.' +
                'The hiss that came from its maw was painful and seemed to be trying to make your eardrums rupture.' +
                'You start charging it but it just jumps into the trees and continues screeching at you.<br /><br />' +

                'Voice: "Great, now we are chasing spiders. What\'s next, pigs?"<br /><br />' +

                'You grumpily chase the spider and find yourself surrounded by others of the same species.<br /><br />' +

                'Voice: "Well, I am going back to bed. Wake me when you done with your friends."<br /><br />' +

                'You charge and the battle begins.</p>';
        };
        monsterUnlock.JumpingSpider = true;
    };
    if (player.level >= 14) {
        monsterList.SpiderBeast.Stats.isShown = true;
        if (monsterUnlock.SpiderBeast == false) {
            document.getElementById("story").innerHTML += '<h3><b>Spider Beast</b></h3><br />' +

                '<p class="story">Forget last night, today was unbearable.' +
                'Being chased through the forest by a legion of man-eating spiders is significantly worse than dealing with Stalkers.' +
                'A couple of times you ended up snagged in webs or pinned by a few who got too close.' +
                'You survived though which is why you are now laying on the ground gasping for air and hoping for a nights rest.<br /><br />' +

                'Voice "It sounds like you finally finished. Was it fun? Did you meet new friends? No? Well then, get back to moving. We shouldn\'t stop here."<br /><br />' +

                'You begrudgingly stand up and get back to walking and the next thing that appears better not be a spider,' +
                'if it is Asmodeus bless this forest because you might just burn it down.  Startled from your seething something large pins you down.' +
                'Its a spider because of course it is. Its eyes gaze at you with disgust and you discover that the feeling is mutual.' +
                'It is much larger than the others and also stronger.<br /><br />' +

                'Spider: "Why are you here, bug? To kill my brothers and sisters? Are you after my Queen?' +
                'It doesn\'t matter, your actions have been barbaric in nature. You must be put down."' +
                'It spoke through a guttural hiss and its "voice" seemed to be furious.' +
                'You ignore the fact that every creature here has attacked you first because you did come here looking for a fight.<br /><br />' +

                'It lifted its leg off of you and proceeded to bite you, but being a trained warrior you rolled out of the way and started the counterattack.</p>';
        };
        monsterUnlock.SpiderBeast = true;
    };
    if (player.level >= 15) {
        monsterList.Narsus.Stats.isShown = true;
        if (monsterUnlock.Narsus == false) {
            document.getElementById("story").innerHTML += '<h3><b>Narsus</b></h3><br />' +

                '<p class="story">That was a very angry spider and you are quite sure why.' +
                'You didn\'t intend to come here and murder legions of spiders that are related to an insane and brooding giant tarantula.' +
                'Also, you are growing into the Voices impatience and possibly part of its blood lust so make sure that you are still sane and not a raving murderer.' +
                'You actually managed to get some rest after the fight at least and you are closer to the mountain.<br /><br />' +

                'As you are walking you start noticing an increased amount of spider webs, you groan in frustration at the fact that you will have to deal with another spider.' +
                'Lo and behold, the perpetrator appears; A giant black widow where the top half of its body is an old crone.' +
                'She might have been beautiful once but she has not aged gracefully.' +
                'Her gray hair is falling out and one of her eyes are blotted out by cataracts.' +
                'When she turned towards you she started cackling, yep and just like a witch too.<br /><br />' +

                'Narsus: "Ooh, are you the one rampaging through my home? Hmm, I was hoping to get cleaned up a bit before you got here.' +
                'I hope you don\'t find me too old."  She laughed particularly loud after that.<br /><br />' +

                'Voice:  "Wow, watch out for the train wreck over there."<br /><br />' +

                'Narsus: "Now, now, no need to be rude."<br /><br />' +

                'Voice: "Well, look who has hears."<br /><br />' +

                'Wait, she heard the Voice. You finally have a reason to talk. "How can you hear it?"<br /><br />' +

                'Narsus: "Oh, child, I hear everything. This is my forest after all, nothing escapes me." She grinned pretty evilly after that last bit.<br /><br />' +

                '"Do you know what this Voice is?"<br /><br />' +

                'Narsus: "No, and I don\'t care. I just want to kill you now."<br /><br />' +

                '"Hold on, can you at least answer my question?"<br /><br />' +

                'Narsus: "I won\'t answer the questions of the beast who murdered my children anymore."<br /><br />' +

                '"They attacked me, this whole forest is against me."<br /><br />' +

                'Narsus: "Yep, they attacked you because I told them too. I still am going to kill you though."<br /><br />' +

                '"Hold on-"<br /><br />' +

                'She started weaving a web and covering the area making it hard to move.  The fight has begun and nothing can stop it.</p>';
        };
            monsterUnlock.Narsus = true;
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
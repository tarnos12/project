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

    JotnarAmbushSquad: false,
    LongRangeExterminationSquad: false,
    BerserkerShockSquad: false,
    BerserkerShockSquadCaptainRendGrest: false,
    ArtillerySquad: false,
    JottunMainInfantry: false,
    RegentCairLorn: false,
    DeepKingTarNuk: false,

    DepthCrawler: false,
    FadingGoblins: false,
    StarBriteGolems: false,
    Bannecs: false,
    Kholders: false,
    LivingWalls: false,
    Keeper: false,
    LegendoftheAncientDreamer: false,

    BabyDuneDigger: false,
    CamelSpiderHerds: false,
    WasteEagle: false,
    GrelTribeGuard: false,
    GrelWarriors: false,
    GrelSpitters: false,
    GrelChief: false,
    MommaDuneDiggerSheila: false,

    CrystalFloater: false,
    SnowWatcher: false,
    CannibalTribeTrachid: false,
    LegendoftheRageCalm: false,
    IceGiantKing: false,
    FrightGolem: false,
    FrightGolemArmy: false,
    LegendoftheRageFullPower: false,

    LegionofDreadWallGuards: false,
    Dreadnaughts: false,
    DreadnaughtElite: false,
    EmaciatedMagi: false,
    MagiThunderCallers: false,
    FalseDragonSlayers: false,
    TorturedBeholder: false,
    KingoftheLegionGrantBannecs: false,
};

function quest() {
    var varikElement = "";
    var forestElement = "";
    var ozJotnarElement = "";
    if (player.properties.level >= 2) {
        monsterList.VarikSoldier.Stats.isShown = true;
        if (monsterUnlock.VarikSoldier === false) {
            varikElement = "<h3><b>Varik Soldiers</b></h3><br />" +
                "<p class=\"story\">After your victory over the grunts you notice another group approaching." +
                "The Varik Soldiers have arrived and they aren't happy." +
                "You stand in front of them and yell at them to stop." +
                "They turn and you can see these ones have actually been trained a bit." +
                "When they noticed the bodies a laugh sounded out from the group." + "<br /><br />" +
                "\"You just beat up a bunch of potential recruits and think that you are some tough guy now, well let us show you what tough guys get around here.\"" + "<br /><br />" +
                "All you do in response is walk towards them and start the battle.</p>";
            document.getElementById("varik").innerHTML += varikElement;
        };
        monsterUnlock.VarikSoldier = true;
    };
    if (player.properties.level >= 3) {
        monsterList.VarikMarksmen.Stats.isShown = true;
        if (monsterUnlock.VarikMarksmen === false) {
            varikElement = "<h3><b>Varik Marksmen</b></h3><br />" +
                "<p class=\"story\">\"What in the name Asmodeus are you? Why won't you die?\"" + "<br /><br />" +
                "You stare as the soldier departs from this world." +
                "You feel a pang of sadness over this but quickly remember these thugs are responsible for burning down New Hemlock." +
                "Only the leaders of this petty gang know why. As you are thinking an arrow just barely misses you and hits a groaning soldier in the chest." + "<br /><br />" +
                "\"Darn it, I missed. HEY, stay still!\"" + "<br /><br />" +
                "Another marksmen stands behind the one who fired at the now dead soldier." +
                "They laugh at the dead and attack comrades, and they just continue to make things worse for themselves.</p>";
            document.getElementById("varik").innerHTML += varikElement;

        };
        monsterUnlock.VarikMarksmen = true;
    };
    if (player.properties.level >= 4) {
        monsterList.VarikVulture.Stats.isShown = true;
        if (monsterUnlock.VarikVulture === false) {
            varikElement = "<h3><b>Varik Vulture</b></h3><br />" +
                "<p class=\"story\">You might have been hit a few times but you are quickly discovering that immortality is a pretty huge advantage." +
                "Your kind of immortality is one where you never actually die, you just fall down and wake back up after your healing kicks in." +
                "The marksmen have been taken care of and now you continue deeper into their hideout." + "<br /><br />" +
                "\"Hey, did you have to kill them? I mean come on, do you know how long it takes to train a decent archer?" +
                "You don't care do you? Well come here, I'm gonna teach about the wonderful ways of pain.\"" + "<br /><br />" +
                "As stoic as ever you handle the words without a grimace and charge at the murderer.</p>";
            document.getElementById("varik").innerHTML += varikElement;

        };
        monsterUnlock.VarikVulture = true;
    };
    if (player.properties.level >= 5) {
        monsterList.VarikEvader.Stats.isShown = true;
        if (monsterUnlock.VarikEvader === false) {
            varikElement = "<h3><b>Varik Evader</b></h3><br />" +
                "<p class=\"story\">\"Haha, that was fun, little pup. Go on and get killed already. Let me die alone!\"" + "<br /><br />" +
                "The Buzzard was fast and strong but you were faster and stronger and with every victory you felt your strength growing." +
                "Maybe you might make as much of a presence to be noticed by the Temple of Legends but that is far ahead and out of your league. The Voice returns:" + "<br /><br />" +
                "\"Why are you fighting these weaklings?" +
                "I need MORE than some weak group of bandits. Where are the Dragons, the Jottun, and the Liches?" +
                "Beat them and then maybe I could feel a little excitement.\"" + "<br /><br />" +
                "The Voice sure is impatient." +
                "What makes it think you can fight a Lich? Anyway, better move forward." + "<br /><br />" +
                "The knife was just a little too slow and you ducked out of the way." + "<br /><br />" +
                "\"Good you aren't dead yet. Let us put you to rest, Immortal.\"</p>";

            document.getElementById("varik").innerHTML += varikElement;
        };
        monsterUnlock.VarikEvader = true;
    };
    if (player.properties.level >= 6) {
        monsterList.VariksLiar.Stats.isShown = true;
        if (monsterUnlock.VariksLiar === false) {
            varikElement = "<h3><b>Variks Liar</b></h3><br />" +
                "<p class=\"story\">The Evader thought he had you but it seems that immortality isn't your only gift," +
                "because it is becoming apparent that you are developing into a decent fighter as even the Evader couldn't pin you down." +
                "The Evader lived up to his name though but was still defeated because where he had skill, you had endurance and patience." + "<br /><br />" +
                "\"The Lord is not going to like this at all. Ohh, lets get this over with. I know you will win but I am not going to just give up.\"" +
                "Variks Liar said as he past around the corner." + "<br /><br />" +
                "This one seems weak, but don't let your eyes deceive you." +
                "The Liar is known as one of the best illusionist in the Seven Cities." +
                "He could end up slowing you down to the point where you just give up. So watch him and don't get distracted.</p>";

            document.getElementById("varik").innerHTML += varikElement;
        };
        monsterUnlock.VariksLiar = true;
    };
    if (player.properties.level >= 7) {
        monsterList.VariksQueen.Stats.isShown = true;
        if (monsterUnlock.VariksQueen === false) {
            varikElement = "<h3><b>Variks Queen</b></h3><br />" +
                "<p class=\"story\">The Liar had some nasty tricks up his sleeve," +
                "multiple times he had refracted on image of himself in different directions causing you to slam right into the ground, wall, or table." +
                "He even managed to make you think your weapon became a snake which didn't last long." +
                "Eventually, he fell just like the others and failed in his goal to stop you." +
                "You are beginning to get lost in the euphoria of battle and find yourself loving the moment." +
                "Another approaches." + "<br /><br />" +
                "\"Another worm dead, Our Lord is going to go ballistic.\"" +
                "She stands there wielding a massive battle ax and saunters over and begins to swing at you." +
                "You just barely duck under her swing and she yells out." +
                "\"Well, fight me or better yet, just stand there and die!\"" + "<br /><br />" +
                "No time to think, another battle has begun.</p>";

            document.getElementById("varik").innerHTML += varikElement;
        };
        monsterUnlock.VariksQueen = true;
    };
    if (player.properties.level >= 8) {
        monsterList.LordVarik.Stats.isShown = true;
        if (monsterUnlock.LordVarik === false) {
            varikElement = "<h3><b>Lord Varik</b></h3><br />" +
                "<p class=\"story\">She lay there bleeding out, \"You are going to burn, even your immortality won't protect you from judgment.\"" +
                "She died sitting against a wall in a dingy hideout that smelled of alcohol and ginger." + "<br /><br />" +
                "\"You killed my wife, my friend, my soldiers, and my \"fans\"." +
                "What in the name of Asmodeus has possessed you to attack our group so ferociously?\"" +
                "He almost seems to not actually care." + "<br /><br />" +
                "For the first time you spoke to the murderer." +
                "\"Not revenge, not for any righteous cause, not for glory, not for justice, but only for power." +
                "I wanted to fight and you were here. That is all.\"" + "<br /><br />" +
                "\"Really? Well, you can have your fight, you animal. I will show why they call me LORD!\"" +
                "He is glowing and wields a spear fashioned of a green tassel and a bronze metal." +
                "He lunges at you and the battle begins.</p>";

            document.getElementById("varik").innerHTML += varikElement;
        };
        monsterUnlock.LordVarik = true;
    };
    if (player.properties.level >= 9) {
        monsterList.ToxicFlies.Stats.isShown = true;
        if (monsterUnlock.ToxicFlies === false) {
            varikElement = "<h3><b>The End of Lord Varik</b></h3><br />" +
                "<p class=\"story\">Just like the rest of his gang, he lay there bleeding and feeling woefully mortal." +
                "\"How? How did you become immortal? Why you? Why not me? I DESERVE IT! I won't die to this! Not here, Not today!\"" + "<br /><br />" +
                "You spoke again, \"Why did you burn down New Hemlock?\"" + "<br /><br />" +
                "He grinned like a maniac, \"How do you think I got this equipment?" + "<br />" +
                "Sacrifices of family and blood gave me this. What did you do for you power, huh? Die? Well, would you kindly go do it again?\"" + "<br />" +
                "His venomous words left his mouth and he died laying next to his wife." + "<br /><br />" +
                "The Voice: \"Hmm, I wonder why you became immortal myself, but I suppose we will have to wait for answers." + "<br />" +
                "Where to next? I want to see more and feel more.\"" + "<br /><br />" +
                "You just sat there resting and thinking \"why you?\"." + "<br /><br />" +
                "Now is not the time for introspection though, you need to feel battle again and the next viable place is the Forest of Narsus." + "<br />" +
                "After that comes Old Crones Mountain and then... just maybe you can rest.</p><br />";


            document.getElementById("varik").innerHTML += varikElement;

            forestElement = "<p class=\"story\">You stand at the edge of the forest. This is it, the point of no return. " +
                "It is said that those who enter the forest are cursed to never return home, you are here to prove them wrong." +
                "The deep grime of the place really sticks out, every footfall ends in a snapped twig or a crushed leaf." +
                "The smell of rot and the sound of insects fill your senses as your take the first tentative step into the Spider Queens territory.</p>" +
                "<h3><b>Toxic Flies</b></h3>" +
                "<p class=\"story\">As you enter the forest the sound of insects intensifies until you see a swarm of large flies." +
                "There had to be hundreds of them and all of them around a foot and a half long." +
                "When they noticed you they immediately began spitting at you; the substance was definitely acidic." +
                "You took a while to reach them but when you did the swarm seemed to grow and infest the entire surrounding area." +
                "It looks like you might be here for a while." + "<br /><br />" +
                "Voice: \"Why are you fighting flies? Get a move on already! I want to see something more impressive than flies.\"</p>";

            document.getElementById("forestOfNarsus").innerHTML += forestElement;
        };
        monsterUnlock.ToxicFlies = true;
    };
    if (player.properties.level >= 10) {
        monsterList.Stalker.Stats.isShown = true;
        if (monsterUnlock.Stalker === false) {
            forestElement = "<h3><b>Stalker</b></h3><br />" +
                "<p class=\"story\">It took the rest of the day and part of the night to clear out the rest of the flies." +
                "Maybe this wasn't a good idea, but it is too late to turn back now." +
                "As you trudge through the darkness you notice glimpses of movement and slowly these glimpses become full views of the creature." +
                "A wolf with dark and dirty hair, teeth dripping with saliva, and eyes that looked bloodshot." +
                "It howled and the sound was like a groan from a far larger creature.  It dashed off into the woods but common sense tells you that it is still around." + "<br /><br />" +
                "But just as you think it left, it comes dashing from your right and attempts to tackle you and the fight for survival has begun.</p>";

            document.getElementById("forestOfNarsus").innerHTML += forestElement;
        };
        monsterUnlock.Stalker = true;
    };
    if (player.properties.level >= 11) {
        monsterList.AlphaStalker.Stats.isShown = true;
        if (monsterUnlock.AlphaStalker === false) {
            forestElement = "<h3><b>Alpha Stalker</b></h3><br />" +
                "<p class=\"story\">Voice: \"What a poor doggy. Did you have to kill it? Try to tame the next one.\"<br /><br />" +
                "You ignore the Voice and continue to walk through the forest." +
                "At this point you are starting to see glimpses of the Deep Kings Mountain through the canopy." +
                "So, you climbed up a tree and watched the surrounding area for a bit." +
                "It is almost sunset and the trees seem to stretch for miles around you and only stops when you look at the mountain." +
                "It is massive and towers over the forest like dictator imposing its power over the weak.<br /><br />" +
                "After resting for a bit you decide to climb down and continue your journey." +
                "When you touch the ground you immediately notice how quiet it has gotten and alarm bells start going off in your head." +
                "Another wolf has appeared, but different: Its gray hair hangs off of it in tatters and one eye seems to have left its home." +
                "It is large, as big as a small house.  It makes no noise and starts attacking you.<br /><br />" +
                "Voice: \"YOU HAVE TO TAME THAT!\"<br /><br />" +
                "You ignore the Voice again and focus on the battle.</p>";

            document.getElementById("forestOfNarsus").innerHTML += forestElement;
        };
        monsterUnlock.AlphaStalker = true;
    };
    if (player.properties.level >= 12) {
        monsterList.StalkerPack.Stats.isShown = true;
        if (monsterUnlock.StalkerPack === false) {
            forestElement = "<h3><b>Stalker Pack</b></h3><br />" +
                "<p class=\"story\">After you managed to put the beast down you can tell that the battle isn't over yet." +
                "The howling started after you killed the alpha, a sad, mourning howl." +
                "The howls went on for several minutes until it went back to being frustratingly quiet and you started noticing eyes gleaming at you from the darkness.<br /><br />" +
                "Voice: \"Well, good luck, see you in the morning!\"<br /><br />" +
                "Suddenly, Stalkers were everywhere snarling, barking, and snapping at you.  It is going to be a very long night.</p>";

            document.getElementById("forestOfNarsus").innerHTML += forestElement;
        };
        monsterUnlock.StalkerPack = true;
    };
    if (player.properties.level >= 13) {
        monsterList.JumpingSpider.Stats.isShown = true;
        if (monsterUnlock.JumpingSpider === false) {
            forestElement = "<h3><b>Jumping Spider</b></h3><br />" +
                "<p class=\"story\">The sun has risen and you stand amongst the dead pack of Stalkers but just as you begin to rest another creature comes." +
                "It seems that this forest really doesn't like you." +
                "Its legs are at least around 3 and half feet long and its body suspends above the ground like a chandelier." +
                "The hiss that came from its maw was painful and seemed to be trying to make your eardrums rupture." +
                "You start charging it but it just jumps into the trees and continues screeching at you.<br /><br />" +
                "Voice: \"Great, now we are chasing spiders. What's next, pigs?\"<br /><br />" +
                "You grumpily chase the spider and find yourself surrounded by others of the same species.<br /><br />" +
                "Voice: \"Well, I am going back to bed. Wake me when you done with your friends.\"<br /><br />" +
                "You charge and the battle begins.</p>";

            document.getElementById("forestOfNarsus").innerHTML += forestElement;
        };
        monsterUnlock.JumpingSpider = true;
    };
    if (player.properties.level >= 14) {
        monsterList.SpiderBeast.Stats.isShown = true;
        if (monsterUnlock.SpiderBeast === false) {
            forestElement = "<h3><b>Spider Beast</b></h3><br />" +
                "<p class=\"story\">Forget last night, today was unbearable." +
                "Being chased through the forest by a legion of man-eating spiders is significantly worse than dealing with Stalkers." +
                "A couple of times you ended up snagged in webs or pinned by a few who got too close." +
                "You survived though which is why you are now laying on the ground gasping for air and hoping for a nights rest.<br /><br />" +
                "Voice \"It sounds like you finally finished. Was it fun? Did you meet new friends? No? Well then, get back to moving. We shouldn't stop here.\"<br /><br />" +
                "You begrudgingly stand up and get back to walking and the next thing that appears better not be a spider," +
                "if it is Asmodeus bless this forest because you might just burn it down.  Startled from your seething something large pins you down." +
                "Its a spider because of course it is. Its eyes gaze at you with disgust and you discover that the feeling is mutual." +
                "It is much larger than the others and also stronger.<br /><br />" +
                "Spider: \"Why are you here, bug? To kill my brothers and sisters? Are you after my Queen?" +
                "It doesn't matter, your actions have been barbaric in nature. You must be put down.\"" +
                "It spoke through a guttural hiss and its \"voice\" seemed to be furious." +
                "You ignore the fact that every creature here has attacked you first because you did come here looking for a fight.<br /><br />" +
                "It lifted its leg off of you and proceeded to bite you, but being a trained warrior you rolled out of the way and started the counterattack.</p>";

            document.getElementById("forestOfNarsus").innerHTML += forestElement;
        };
        monsterUnlock.SpiderBeast = true;
    };
    if (player.properties.level >= 15) {
        monsterList.Narsus.Stats.isShown = true;
        if (monsterUnlock.Narsus === false) {
            forestElement = "<h3><b>Narsus</b></h3><br />" +
                "<p class=\"story\">That was a very angry spider and you are quite sure why." +
                "You didn't intend to come here and murder legions of spiders that are related to an insane and brooding giant tarantula." +
                "Also, you are growing into the Voices impatience and possibly part of its blood lust so make sure that you are still sane and not a raving murderer." +
                "You actually managed to get some rest after the fight at least and you are closer to the mountain.<br /><br />" +
                "As you are walking you start noticing an increased amount of spider webs, you groan in frustration at the fact that you will have to deal with another spider." +
                "Lo and behold, the perpetrator appears; A giant black widow where the top half of its body is an old crone." +
                "She might have been beautiful once but she has not aged gracefully." +
                "Her gray hair is falling out and one of her eyes are blotted out by cataracts." +
                "When she turned towards you she started cackling, yep and just like a witch too.<br /><br />" +
                "Narsus: \"Ooh, are you the one rampaging through my home? Hmm, I was hoping to get cleaned up a bit before you got here." +
                "I hope you don't find me too old.\"  She laughed particularly loud after that.<br /><br />" +
                "Voice:  \"Wow, watch out for the train wreck over there.\"<br /><br />" +
                "Narsus: \"Now, now, no need to be rude.\"<br /><br />" +
                "Voice: \"Well, look who has hears.\"<br /><br />" +
                "Wait, she heard the Voice. You finally have a reason to talk. \"How can you hear it?\"<br /><br />" +
                "Narsus: \"Oh, child, I hear everything. This is my forest after all, nothing escapes me.\" She grinned pretty evilly after that last bit.<br /><br />" +
                "\"Do you know what this Voice is?\"<br /><br />" +
                "Narsus: \"No, and I don't care. I just want to kill you now.\"<br /><br />" +
                "\"Hold on, can you at least answer my question?\"<br /><br />" +
                "Narsus: \"I won't answer the questions of the beast who murdered my children anymore.\"<br /><br />" +
                "\"They attacked me, this whole forest is against me.\"<br /><br />" +
                "Narsus: \"Yep, they attacked you because I told them too. I still am going to kill you though.\"<br /><br />" +
                "\"Hold on-\"<br /><br />" +
                "She started weaving a web and covering the area making it hard to move.  The fight has begun and nothing can stop it.</p>";

            document.getElementById("forestOfNarsus").innerHTML += forestElement;
        };
        monsterUnlock.Narsus = true;
    };
    if (player.properties.level >= 16) {
        monsterList.JotunnScout.Stats.isShown = true;
        if (monsterUnlock.JotunnScout === false) {
            forestElement = "<h3><b>Jotunn Scout</b></h3><br />" +
                "<p class=\"story\">She just started laughing and didn't stop until her throat filled with blood, then she coughed it out and laughed some more." +
                "You were hoping to ask some questions but she seems pretty tied up right now." +
                "You leave the area and out of the range of that cackle, but soon find yourself at the base of Oz Jotnar." +
                "The largest mountain in the region that is part of a one thousand mile long chain of mountains effectively cutting off the lands of Etheria from its sister Zyzx.<br /><br />" +
                "You finish gawking and notice a 8 and half foot tall beast walking towards you.  It is not sneaking or walking in an aggressive manner but you are on guard anyway." +
                "When it was ten feet away it stopped and started to speak.<br /><br />" +
                "Jotunn Scout: \"State your business, human.\" Its voice sounded like rocks rumbling in a bag made of marble.<br /><br />" +
                "You appreciate that it didn't attack you on sight and chose to respond:  \"I seek the Temple of Legends, and plan on attempting the Rite.\"<br /><br />" +
                "Jotunn Scout: \"Oh really, then as a prospective Legend, you won't mind if I send word to my master.\" You don't like where this is going.<br /><br />" +
                "You: \"Actually I was hoping to go through without any problems.\"<br /><br />" +
                "Jotunn Scout: \"Ha, Legends are problems and we are also compelled to stop anyone from trying the Rite.\"<br /><br />" +
                "He took a stick out of his belt , raised his arm and pointed the stick towards the sky then pulled a string at the bottom of the stick.<br /><br />" +
                "The sound was deafening and a red light shot into the air.  \"Now they know you are here, have fun.\"<br /><br />" +
                "You respond by attacking him and starting a battle.</p>";

            document.getElementById("forestOfNarsus").innerHTML += forestElement;
        };
        monsterUnlock.JotunnScout = true;
    };
    if (player.properties.level >= 17) {
        monsterList.JotnarAmbushSquad.Stats.isShown = true;
        if (monsterUnlock.JotnarAmbushSquad === false) {
            ozJotnarElement = "<p class=\"story\">Why is that wherever you go someone wants to kill you?" +
                "To be fair, you started the fight with bandits, and you were on forbidden territory in the forest, but this time it isn't even your fault." +
                "You sought peaceful passage and still have people wanting to kill you.<br /><br />" +
                "Voice:  \"Get over it, this is the life of a Legend. For grand power you have to sacrifice something and in this case you have to sacrifice all social contact.\"<br /><br />" +
                "You: \"You could have told me sooner, then I would have lived my life instead of taking other lives.\"<br /><br />" +
                "Voice: \"If I did that I would be trapped in mediocrity and die of boredom. Now quit whining, there is no turning back now.\"<br /><br />" +
                "You sigh and continue the walk to the mountain path.<br />" +
                "At the start of the path is a giant arch which has an engraving on the top: \"This path was made for humans by Jotnar under the treaty put in place by Archon Harghest.\"<br /><br />" +
                "Voice: \"Harghest? He became the Archon?\"<br /><br />" +
                "You: \"Well, yeah but that was around 450 years ago.  It seems that the Jotnar have taken good care of it.\"<br /><br />" +
                "Voice: \"450 YEARS!? I've been dead for that long! Oh my god, my kingdom, my soldiers, Mariah, all of them gone.<br />" +
                "We have to keep moving, rebuild and bring back the Legends. When was the last Legend around?\"<br /><br />" +
                "You: Close to 23 years, she is the one who built Old Hemlock and also made sure the Forest of Narsus never overtook any other cities.\"<br /><br />" +
                "Voice: \"Then it sounds like its about time for a new Legend. Go, I have your back for this one and if you succeed you can have whats left of my kingdom.\"<br /><br />" +
                "You: \"I'm sorry abou-\"<br /><br />" +
                "Voice: \"Don't, none of that. I am fine and need no sympathy.\"<br /><br />" +
                "You then walk past the arch into the long winding path of Oz Jotnar.<br /><br /></p>" +
                "<h3><b>Jotnar Ambush Squad</b></h3>" +
                "<p class=\"story\">You don't like this place; there are too many caves to hide in that are looming over the path and you are starting to hear what sounds like drums but very distant.<br />" +
                "Someday you will get to have a moment to relax but for now it is best to just enjoy the excitement of being hunted.<br /><br />" +
                "After a few more minutes of walking and losing a bit of focus, you trip on a near-invisible wire which caused spikes to fire from the  mountain wall and fire to burst from the ground.<br />" +
                "You are inexperienced with traps but you have no trouble weathering the damage and decide to just lie still and let your wounds heal.<br />" +
                "Thirty seconds passed and you flipped yourself over to find a Jotunn falling towards you, you roll away and the Jotunn's knee slams into the ground leaving a small crater.<br />" +
                "That would have hurt.<br /><br />" +
                "The Jotunn quickly recover and faster than a creature of that size should move climbs the mountain wall where it then hides in a cave.<br />" +
                "Right when it reaches a cave another Jotunn sneaks up behind you and attempts to shank your kidney.<br />" +
                "You quickly spin around and disarm the assassin and then throw him to the ground.<br /><br />" +
                "It looks like another fight has begun, best of luck to you.</p>";


            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;
        };
        monsterUnlock.JotnarAmbushSquad = true;
    };
    if (player.properties.level >= 18) {
        monsterList.LongRangeExterminationSquad.Stats.isShown = true;
        if (monsterUnlock.LongRangeExterminationSquad === false) {
            ozJotnarElement = "<h3><b>Long Range Extermination Squad</b></h3><br />" +
                "<p class=\"story\">After stepping on a hundred caltrops," +
                "falling into a spike pit, and having poison launched into your face you managed to eliminate the rest of the ambushers.<br /><br />" +
                "Voice: \"Oh what fun, and to think you are only a few miles into the mountains. Don't stop now\".<br /><br />" +
                "You sigh and continue walking down the long rocky path.<br />" +
                "You finally get the chance to view your surroundings;" +
                "to your left is a steep drop that leads into a deep stone valley and your right is too steep to climb without gear but you can still see many caves and drops above you.<br />" +
                "In front of you is a perfect view of the sunset and the mountains reaching out as far as you can see.<br />" +
                "The clouds dance atop many of the mountains and you can smell crisp clean air.<br /><br />" +
                "Then you hear a snap and a buzz like a bee flying by your head and you see a glint of light far ahead on the path.<br />" +
                "Whatever it was it missed and now you need to burn rubber running down the attackers.<br /><br />" +
                "Voice: \"All these new weapons, how did the trolls learn to make these?\"<br /><br />" +
                "You wince at the racist comment and quickly shoot off, \"Hey, don't be racist.\" Then continued running towards battle.</p>";

            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;
        };
        monsterUnlock.LongRangeExterminationSquad = true;
    };
    if (player.properties.level >= 19) {
        monsterList.BerserkerShockSquad.Stats.isShown = true;
        if (monsterUnlock.BerserkerShockSquad === false) {
            ozJotnarElement = "<h3><b>Berserker ShockSquad</b></h3><br />" +
                "<p class=\"story\">They were pretty far away and you got hit a couple of times;<br />" +
                "it was like being hit by someone swinging an oak tree, but you managed to reach them and end them.  You collapse and stare at the sky for a while.<br /><br />" +
                "Voice: \"How is what I said racist?\"<br /><br />" +
                "You: \"They aren't trolls, they are Jotnar and Jotnar were dealing serious slavery issues around 90 years ago until one<br />" +
                "Jottun became a Legend and warred with humans until they were freed.<br />" +
                "My great-grandfather would tell me over and over about that war because it was important to him that the Jotnar live in relative peace.\"<br /><br />" +
                "Voice: \"Since when did humans start caring about rights for other species?\"<br /><br />" +
                "You: \"We started caring when they started killing us, lets just move on.\"<br /><br />" +
                "You stand up and follow the path some more until after twenty minutes you walk into a group of Jotnar.<br /><br />" +
                "The one with two heads spoke first. \"Okay, here is the deal, human.<br />" +
                "You fight each of us one at a time and if you win you can keep walking but if you lose I get cook your bones and suck out the marrow. How does that sound to you?\"<br /><br />" +
                "You: \"I actually prefer it this way, so who's first?\"<br /><br />" +
                "\"Me, I am Dun Lu Weg of Iron Two Heads. My two buddies are Ket Nen of Org Bigfoot, and Ver Bert of Trout Watcher. We are the Berserker Shock Squad off-duty edition.\"<br /><br />" +
                "You: \"It is nice to speak with someone before they try to kill but I am itching to fight so lets get this show on the road.\"<br /><br />" +
                "Weg: \"With pleasure.\" He then unsheathed a massive great sword and started roaring. You were eager to start the battle and began charging him.</p><br /><br />";

            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;
        };
        monsterUnlock.BerserkerShockSquad = true;
    };
    if (player.properties.level >= 20) {
        monsterList.BerserkerShockSquadCaptainRendGrest.Stats.isShown = true;
        if (monsterUnlock.BerserkerShockSquadCaptainRendGrest === false) {
            ozJotnarElement = "<h3><b>Berserker Shock Squad Captain, Rend Grest</b></h3><br />" +
                "<p class=\"story\">They were strong like gorillas and fast like lightning but you are immortal and could taking a lot more damage than they could dish out.<br />" +
                "It still took two days to beat all three of them and by the end of Dun Lu Weg is awake and watching the fight.<br /><br />" +
                "Weg: \"You know, I thought I would hate fighting an immortal but that was a lot of fun, come back some time soon and we'll fight again.<br />" +
                "Alos, good luck with my captain he is a handful.\"<br /><br />" +
                "You shake the hand of the bloodied Jottun and continue on the path.<br /><br />" +
                "\"MY TURN!\" A massive Jotnar, even for Jotnar standards, stands in front of you. \"I AM REND GREST OF BULLY BOXERS! PUT UP YOUR DUKES!\"<br /><br />" +
                "You step back, unsheathe your weapon, and realize that this mass of muscle is going to fight you with just his hands.<br />" +
                "His fist collides against you forehead, knocking you twenty feet away and onto your back.<br /><br />" +
                "Voice: \"ASMODEUS BLESS, WHAT IN THE WORLD WAS THAT?\"<br /><br />" +
                "You quickly get up, still dazed and rocked, but ready.  Rend is already in front of you and wheeling his fist back. Good Luck.</p>";

            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;
        };
        monsterUnlock.BerserkerShockSquadCaptainRendGrest = true;
    };
    if (player.properties.level >= 21) {
        monsterList.ArtillerySquad.Stats.isShown = true;
        if (monsterUnlock.ArtillerySquad === false) {
            ozJotnarElement = "<h3><b>Artillery Squad #1-9</b></h3><br />" +
                "<p class=\"story\">Five days. Five days to beat that monster.  He never tired, never stopped, and was always aggressive.<br />" +
                "Five days to wear him down and best him.  Even the Voice was giving you advice and if it didn't you probably wouldn't have beaten him.<br />" +
                "At some point, he picked up and tossed you down the mountainside.  He then jumped at you and fought you in mid-air.<br />" +
                "That crazy Jottun is now sitting in front of you... laughing.<br /><br />" +
                "Rend: \"OH MAN, YOU FIGHT GOOD. REND COMMENDS LITTLE WARRIOR. KEEP FIGHTING. MY SQUAD IS WITH YOU NOW.\"<br /><br />" +
                "You: \"I'm sorry but I have to make this journey alone. I will be back though for a rematch.\"<br /><br />" +
                "Rend: \"OKAY, I WAIT. I GET STRONGER. YOU GET STRONGER. REMATCH OF THE AGES!\"<br /><br />" +
                "Voice: \"That guy was fun maybe the trolls have changed.\"<br /><br />" +
                "You wave goodbye, and climb back up the mountain to your path.  You rest for several days because Rend is a very exhausting Jottun.<br /><br />" +
                "The sun rises over the crest of the Endless Ridge and you see the clouds part way for the light. You continue your journey.<br /><br />" +
                "Until... *pop* *whistle* *bang*<br /><br />" +
                "Several meters in front of you a crater appears into existence along with a powerful shrapnel shock wave.<br />" +
                "The shock wave is nothing compared to the strength of Rend Grest's fist.<br />" +
                "You weather the blast and try to find the source and suddenly another explosion happens.<br />" +
                "Then another... and this goes on while you are dodging and running to the source of the popping sound.<br /><br />" +
                "In a huge crater you see nine groups of four Jottun surrounding their own machines.<br />" +
                "They see you and start firing their elongated pipes at you.  The fight has started.</p>";

            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;
        };
        monsterUnlock.ArtillerySquad = true;
    };
    if (player.properties.level >= 22) {
        monsterList.JottunMainInfantry.Stats.isShown = true;
        if (monsterUnlock.JottunMainInfantry === false) {
            ozJotnarElement = "<h3><b>Jottun Main Infantry</b></h3><br />" +
                "<p class=\"story\">Your body is pockmarked with dozens of holes from the weapons they were holding.<br />" +
                "You watch the metal chunks get pushed out of your body and the holes slowly heal leaving little evidence that you just had a hole in your body.<br />" +
                "You don't even sit to rest this time because you are ready to get as far away from this mountain as you can.<br />" +
                "In the crater you find a tunnel and decide it is the best path.<br /><br />" +
                "Voice: \"I don't understand all these new weapons, they remind me of the Archmages of my days but even then magic was a dying phenomena.<br />" +
                "This isn't magic though, I can smell the hand of tech and a superior intellect and I don't like it.\"<br /><br />" +
                "You:  \"I actually haven't seen any of this before either, but I have heard rumors of Jotnar wielding sticks of lightning and fire.<br />" +
                "I never expected anything less than magic.\"<br /><br />" +
                "Voice:  \"Its not there isn't magic left in this world," +
                "it is just nothing compared to the likes Archmage Cerbentus who had rendered entire continents into storming, burning lands of ash.\"<br /><br />" +
                "You nod and focus on the path ahead, thoughts of grand power float through your mind and allow you a moment to daydream.<br /><br />" +
                "After a few hours of walking you begin to hear the telltale clang of an army and the tunnel opens up and you walk into a massive cavern.<br />" +
                "It is hundreds of feet long and you can just barely see the ceiling looming over you, but more alarmingly is what is in front of you.<br />" +
                "Hundreds of Jotnar preparing for war and you seem to be their target.  When one set his eyes on you, he yelled for the alarm and the battle begun.</p>";

            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;

        };
        monsterUnlock.JottunMainInfantry = true;
    };
    if (player.properties.level >= 23) {
        monsterList.RegentCairLorn.Stats.isShown = true;
        if (monsterUnlock.RegentCairLorn === false) {
            ozJotnarElement = "<h3><b>Regent Cair Lorn</b></h3><br />" +
                "<p class=\"story\">Voice: \"I can't believe you actually fought them all!\"<br /><br />" +
                "The voice cackles madly within your head and it doesn't seem to be close to stopping.<br />" +
                "You admit to yourself that you just had more fun than ever before and you silently accept that you are going insane.<br />" +
                "You turn look at the mass of unconscious, injured and dead that you left in your wake and you walk away solemnly.<br />" +
                "When you turn around you saw something strange; a woman.<br />" +
                "She was your height and looked like a goddess of battle covered head to toe in tattoos.<br />" +
                "The markings seem to be dozens of wolfs dancing across her.<br /><br />" +
                "Cair Lorn:  \"Quit staring, I know why you are here, let's get this over with.\" She spoke much like the Jotnar but with a grace that they couldn't ever reach.<br /><br />" +
                "You stop contemplating as she lunges at you and tosses what looks like a pineapple at your feet.<br />" +
                "You have been here long enough to learn to kick things they throw away.<br />" +
                "It soared away and exploded against the cavern wall causing a series of tremors.<br />" +
                "She doesn't stop for a second and continues her battle with you.</p>";

            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;

        };
        monsterUnlock.RegentCairLorn = true;
    };
    if (player.properties.level >= 24) {
        monsterList.DeepKingTarNuk.Stats.isShown = true;
        if (monsterUnlock.DeepKingTarNuk === false) {
            ozJotnarElement = "<h3><b>Deep King Tar Nuk</b></h3><br />" +
                "<p class=\"story\">Cair Lorn: \"Stop you win, follow me. Be quick about it!\"<br />" +
                "She gets up turns towards the tunnel she came from and you follow her quickly away from the ensuing cave-in.<br /><br />" +
                "Cair Lorn: \"You have one last challenge and then we will grant you admittance to continue your journey.\"<br /><br />" +
                "She spoke quickly and didn't allow conversation. She led you into what you imagined a Throne Room to look like.<br />" +
                "Columns lining the path towards the throne are adorned with banners that have the symbol of a Jottun fighting a dragon.<br />" +
                "You walk upon a red carpet with golden embroideries that have a very arcane look to them.<br />" +
                "At the throne is what you assume to be is the king.<br />" +
                "The one in the chair stands up and walks towards you unsheathing two daggers with a chain connecting both of them.<br /><br />" +
                "Tar Nuk: \"Fight and you will have your answers.\"<br />" +
                "He spoke with the command of a true leader and you felt compelled to fight him.<br />" +
                "Your excitement rose with your weapon and you answered with a stable stance and a steady stare.<br /><br />" +
                "He charged with as much ferocity as the regent but this time he was too fast for you.  No matter, you have dealt with fast fighters before.<br />" +
                "He isn't just trying to wear you down though, you get tossed around like a sack of rice.<br />" +
                "You are patient and take your time understanding his movements and then you struck.</p>";

            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;

        };
        monsterUnlock.DeepKingTarNuk = true;
    };
    if (player.properties.level >= 25) {
        monsterList.DepthCrawler.Stats.isShown = true;
        if (monsterUnlock.DepthCrawler === false) {
            ozJotnarElement = "<h1><b>Oz Jotnar Epilogue</b></h1><br />" +
                "<p class=\"story\">The Voice:  \"I have never seen a troll fight like that," +
                "I wonder where he learned that from?\" Its voice rung like a bell within your head, is it getting stronger?<br /><br />" +
                "You grunt as a response and you grab Tar Nuks hand and helped him to his fight.<br /><br />" +
                "Tar Nuk: \"That will do just fine. What do you want to know?\" He is bloodied but able-bodied.<br />" +
                "He is calm and relaxed but you can tell that he was pushed to his limits in that fight.<br /><br />" +
                "You: \"Why go to all this trouble to stop me? I thought the Journey was considered by Jottun as an honorable path.\"<br /><br />" +
                "Tar Nuk: \"It is, but due to many False Legends we have had to up the restrictions.<br />" +
                "We didn't intend to send our whole army against you but my regent started getting afraid that you were sent to kill me.\"<br />" +
                "He laughed at that while the regent glared at him.<br />" +
                "This must have been a very stressful week for them what with you tearing a swath of destruction through their territory.<br />" +
                "His laughter died down and he looked you in the eyes.  \"I am sorry to say that you won't be able to stay here.<br />" +
                "You have to go straight to the next part and I wish you the best of luck. Follow the regent she will show you the path.\"<br /><br />" +
                "You: \"Wait, do you know anything about the Temple of Legends?<br />" +
                "I am heard very little of it and I would like to know about my destination.\"<br />" +
                "You are starting to get annoyed with all the shuffling around and this goose chase is starting to seem endless.<br /><br />" +
                "Tar Nuk: \"No I don't know anything and even if I did I wouldn't tell you anything as I am held down by a very strict set of rules.<br />" +
                "Now leave, I have a kingdom to mend.\" He walked away from you and into the tunnel you came from.<br /><br />" +
                "Cair Lorn: \"We need to get moving and fast. The doorway will only be open for so long.\"<br />" +
                "She turned and walked behind the throne to open a door, she waved you to follow. You try one last time to get some info.<br /><br />" +
                "You: \"Where are we going?\"<br /><br />" +
                "Cair Lorn: \"To meet the Legend of the Ancient Dreamer himself, but you will do that alone.<br />" +
                "I am taking you to the entrance of his home; Twisted Marrow, a cave system that stretches deep underneath Oz Jotnar for miles.<br />" +
                "Don't worry about light, some rocks there glow like fireflies.<br />" +
                "I don't know which Legend you are, but all of Jotnar needs you to succeed.<br />" +
                "You destroyed our army and beaten our best soldiers, if you fail you will make us a target of every Jottun tribe in The Fold.\"<br />" +
                "She doesn't really like you it seems but it sounds like she trusts you.<br />" +
                "As she finished talking you walked into a cavern with a metal door at the other end.<br />" +
                "\"This is where I leave, remember what I said. If you fail, I will find someway to make your eternal life as miserable as possible.\"<br />" +
                "With her kind words she walked away and left you with the tall steel door.</p>";

            document.getElementById("ozJotnar").innerHTML += ozJotnarElement;
        };
        monsterUnlock.DepthCrawler = true;
    };
    if (player.properties.level >= 26) {
        monsterList.FadingGoblins.Stats.isShown = true;
    };
    if (player.properties.level >= 27) {
        monsterList.StarBriteGolems.Stats.isShown = true;
    };
    if (player.properties.level >= 28) {
        monsterList.Bannecs.Stats.isShown = true;
    };
    if (player.properties.level >= 29) {
        monsterList.Kholders.Stats.isShown = true;
    };
    if (player.properties.level >= 30) {
        monsterList.LivingWalls.Stats.isShown = true;
    };
    if (player.properties.level >= 31) {
        monsterList.Keeper.Stats.isShown = true;
    };
    if (player.properties.level >= 32) {
        monsterList.LegendoftheAncientDreamer.Stats.isShown = true;
    };
    if (player.properties.level >= 33) {
        monsterList.BabyDuneDigger.Stats.isShown = true;
    };
    if (player.properties.level >= 34) {
        monsterList.CamelSpiderHerds.Stats.isShown = true;
    };
    if (player.properties.level >= 35) {
        monsterList.WasteEagle.Stats.isShown = true;
    };
    if (player.properties.level >= 36) {
        monsterList.GrelTribeGuard.Stats.isShown = true;
    };
    if (player.properties.level >= 37) {
        monsterList.GrelWarriors.Stats.isShown = true;
    };
    if (player.properties.level >= 38) {
        monsterList.GrelSpitters.Stats.isShown = true;
    };
    if (player.properties.level >= 39) {
        monsterList.GrelChief.Stats.isShown = true;
    };
    if (player.properties.level >= 40) {
        monsterList.MommaDuneDiggerSheila.Stats.isShown = true;
    };
    if (player.properties.level >= 41) {
        monsterList.CrystalFloater.Stats.isShown = true;
    };
    if (player.properties.level >= 42) {
        monsterList.SnowWatcher.Stats.isShown = true;
    };
    if (player.properties.level >= 43) {
        monsterList.CannibalTribeTrachid.Stats.isShown = true;
    };
    if (player.properties.level >= 44) {
        monsterList.LegendoftheRageCalm.Stats.isShown = true;
    };
    if (player.properties.level >= 45) {
        monsterList.IceGiantKing.Stats.isShown = true;
    };
    if (player.properties.level >= 46) {
        monsterList.FrightGolem.Stats.isShown = true;
    };
    if (player.properties.level >= 47) {
        monsterList.FrightGolemArmy.Stats.isShown = true;
    };
    if (player.properties.level >= 48) {
        monsterList.LegendoftheRageFullPower.Stats.isShown = true;
    };
    if (player.properties.level >= 49) {
        monsterList.LegionofDreadWallGuards.Stats.isShown = true;
    };
    if (player.properties.level >= 50) {
        monsterList.Dreadnaughts.Stats.isShown = true;
    };
    if (player.properties.level >= 51) {
        monsterList.DreadnaughtElite.Stats.isShown = true;
    };
    if (player.properties.level >= 52) {
        monsterList.EmaciatedMagi.Stats.isShown = true;
    };
    if (player.properties.level >= 53) {
        monsterList.MagiThunderCallers.Stats.isShown = true;
    };
    if (player.properties.level >= 54) {
        monsterList.FalseDragonSlayers.Stats.isShown = true;
    };
    if (player.properties.level >= 55) {
        monsterList.TorturedBeholder.Stats.isShown = true;
    };
    if (player.properties.level >= 56) {
        monsterList.KingoftheLegionGrantBannecs.Stats.isShown = true;
    };
    CreateMonsterHtml();
};

//test
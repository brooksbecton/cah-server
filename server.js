// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"taub":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cards = void 0;
// pulled from https://crhallberg.com/cah/
// Should only need the blackCards and whiteCards here
var cards = {
  blackCards: [{
    text: "Why can't I sleep at night?",
    pick: 1
  }, {
    text: "I got 99 problems but _ ain't one.",
    pick: 1
  }, {
    text: "What's a girl's best friend?",
    pick: 1
  }, {
    text: "What's that smell?",
    pick: 1
  }, {
    text: "This is the way the world ends / This is the way the world ends / Not with a bang but with _.",
    pick: 1
  }, {
    text: "What is Batman's guilty pleasure?",
    pick: 1
  }, {
    text: "TSA guidelines now prohibit _ on airplanes.",
    pick: 1
  }, {
    text: "What ended my last relationship?",
    pick: 1
  }, {
    text: "MTV's new reality show features eight washed-up celebrities living with _.",
    pick: 1
  }, {
    text: "I drink to forget _.",
    pick: 1
  }, {
    text: "I'm sorry, Professor, but I couldn't complete my homework because of _.",
    pick: 1
  }, {
    text: "Alternative medicine is now embracing the curative powers of _.",
    pick: 1
  }, {
    text: "What's that sound?",
    pick: 1
  }, {
    text: "What's the next Happy Meal&reg; toy?",
    pick: 1
  }, {
    text: "It's a pity that kids these days are all getting involved with _.",
    pick: 1
  }, {
    text: "In the new Disney Channel Original Movie, Hannah Montana struggles with _ for the first time.",
    pick: 1
  }, {
    text: "_. That's how I want to die.",
    pick: 1
  }, {
    text: "What does Dick Cheney prefer?",
    pick: 1
  }, {
    text: "What's the most emo?",
    pick: 1
  }, {
    text: "Instead of coal, Santa now gives the bad children _.",
    pick: 1
  }, {
    text: "Next from J.K. Rowling: Harry Potter and the Chamber of _.",
    pick: 1
  }, {
    text: "A romantic, candlelit dinner would be incomplete without _.",
    pick: 1
  }, {
    text: "White people like _.",
    pick: 1
  }, {
    text: "_. Betcha can't have just one!",
    pick: 1
  }, {
    text: "War!<br><br>What is it good for?",
    pick: 1
  }, {
    text: "BILLY MAYS HERE FOR _.",
    pick: 1
  }, {
    text: "_. High five, bro.",
    pick: 1
  }, {
    text: "During sex, I like to think about _.",
    pick: 1
  }, {
    text: "What did I bring back from Mexico?",
    pick: 1
  }, {
    text: "What are my parents hiding from me?",
    pick: 1
  }, {
    text: "What will always get you laid?",
    pick: 1
  }, {
    text: "What would grandma find disturbing, yet oddly charming?",
    pick: 1
  }, {
    text: "What did the U.S. airdrop to the children of Afghanistan?",
    pick: 1
  }, {
    text: "What helps Obama unwind?",
    pick: 1
  }, {
    text: "What's there a ton of in heaven?",
    pick: 1
  }, {
    text: "Major League Baseball has banned _ for giving players an unfair advantage.",
    pick: 1
  }, {
    text: "When I am a billionaire, I shall erect a 50-foot statue to commemorate _.",
    pick: 1
  }, {
    text: "What's the new fad diet?",
    pick: 1
  }, {
    text: "When I am the President of the United States, I will create the Department of _.",
    pick: 1
  }, {
    text: "_. It's a trap!",
    pick: 1
  }, {
    text: "How am I maintaining my relationship status?",
    pick: 1
  }, {
    text: "What will I bring back in time to convince people that I am a powerful wizard?",
    pick: 1
  }, {
    text: "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _.",
    pick: 1
  }, {
    text: "Coming to Broadway this season, _: The Musical.",
    pick: 1
  }, {
    text: "What's my secret power?",
    pick: 1
  }, {
    text: "What gives me uncontrollable gas?",
    pick: 1
  }, {
    text: "But before I kill you, Mr. Bond, I must show you _.",
    pick: 1
  }, {
    text: "What never fails to liven up the party?",
    pick: 1
  }, {
    text: "What am I giving up for Lent?",
    pick: 1
  }, {
    text: "What do old people smell like? ",
    pick: 1
  }, {
    text: "The class field trip was completely ruined by _.",
    pick: 1
  }, {
    text: "When Pharaoh remained unmoved, Moses called down a plague of _.",
    pick: 1
  }, {
    text: "I do not know with which weapons World War III will be fought, but World War IV will be fought with _.",
    pick: 1
  }, {
    text: "What's Teach for America using to inspire inner city students to succeed?",
    pick: 1
  }, {
    text: "In Michael Jackson's final moments, he thought about _.",
    pick: 1
  }, {
    text: "Why do I hurt all over?",
    pick: 1
  }, {
    text: "Studies show that lab rats navigate mazes 50% faster after being exposed to _.",
    pick: 1
  }, {
    text: "Why am I sticky?",
    pick: 1
  }, {
    text: "What's my anti-drug?",
    pick: 1
  }, {
    text: "And the Academy Award for _ goes to _.",
    pick: 2
  }, {
    text: "For my next trick, I will pull _ out of _.",
    pick: 2
  }, {
    text: "_: Good to the last drop.",
    pick: 1
  }, {
    text: "What did Vin Diesel eat for dinner?",
    pick: 1
  }, {
    text: "_: kid-tested, mother-approved.",
    pick: 1
  }, {
    text: "What gets better with age?",
    pick: 1
  }, {
    text: "I never truly understood _ until I encountered _.",
    pick: 2
  }, {
    text: "Rumor has it that Vladimir Putin's favorite delicacy is _ stuffed with _.",
    pick: 2
  }, {
    text: "Lifetime&reg; presents _, the story of _.",
    pick: 2
  }, {
    text: "Make a haiku.",
    pick: 3
  }, {
    text: "In M. Night Shyamalan's new movie, Bruce Willis discovers that _ had really been _ all along.",
    pick: 2
  }, {
    text: "_ is a slippery slope that leads to _.",
    pick: 2
  }, {
    text: "In a world ravaged by _, our only solace is _.",
    pick: 2
  }, {
    text: "That's right, I killed _. How, you ask? _.",
    pick: 2
  }, {
    text: "When I was tripping on acid, _ turned into _.",
    pick: 2
  }, {
    text: "_ + _ = _.",
    pick: 3
  }, {
    text: "What's the next superhero/sidekick duo?",
    pick: 2
  }, {
    text: "Dear Abby,<br><br>I'm having some trouble with _ and would like your advice.",
    pick: 1
  }, {
    text: "After the earthquake, Sean Penn brought _ to the people of Haiti.",
    pick: 1
  }, {
    text: "In L.A. County Jail, word is you can trade 200 cigarettes for _.",
    pick: 1
  }, {
    text: "Maybe she's born with it. Maybe it's _.",
    pick: 1
  }, {
    text: "Life for American Indians was forever changed when the White Man introduced them to _.",
    pick: 1
  }, {
    text: "Next on ESPN2, the World Series of _.",
    pick: 1
  }, {
    text: "Step 1: _. Step 2: _. Step 3: Profit.",
    pick: 2
  }, {
    text: "Here is the church<br>Here is the steeple<br>Open the doors<br>And there is _.",
    pick: 1
  }, {
    text: "How did I lose my virginity?",
    pick: 1
  }, {
    text: "During his childhood, Salvador Dal&iacute; produced hundreds of paintings of _.",
    pick: 1
  }, {
    text: "In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?",
    pick: 1
  }, {
    text: "What don't you want to find in your Kung Pao chicken?",
    pick: 1
  }, {
    text: "The Smithsonian Museum of Natural History has just opened an exhibit on _.",
    pick: 1
  }, {
    text: "Daddy, why is Mommy crying?",
    pick: 1
  }, {
    text: "What brought the orgy to a grinding halt?",
    pick: 1
  }, {
    text: "When I pooped, what came out of my butt?",
    pick: 1
  }, {
    text: "In the distant future, historians will agree that _ marked the beginning of America's decline.",
    pick: 1
  }, {
    text: "What's the gift that keeps on giving?",
    pick: 1
  }, {
    text: "This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only _ and his wits.",
    pick: 1
  }, {
    text: "Michael Bay's new three-hour action epic pits _ against _.",
    pick: 2
  }, {
    text: "And I would have gotten away with it, too, if it hadn't been for _!",
    pick: 1
  }, {
    text: "In a pinch, _ can be a suitable substitute for _.",
    pick: 2
  }, {
    text: "What has been making life difficult at the nudist colony?",
    pick: 1
  }, {
    text: "Science will never explain the origin of _.",
    pick: 1
  }, {
    text: "In Rome, there are whisperings that the Vatican has a secret room devoted to _.",
    pick: 1
  }, {
    text: "I learned the hard way that you can't cheer up a grieving friend with _.",
    pick: 1
  }, {
    text: "When all else fails, I can always masturbate to _.",
    pick: 1
  }, {
    text: "An international tribunal has found _ guilty of _.",
    pick: 2
  }, {
    text: "In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated _.",
    pick: 1
  }, {
    text: "In his new self-produced album, Kanye West raps over the sounds of _.",
    pick: 1
  }, {
    text: "The socialist governments of Scandinavia have declared that access to _ is a basic human right.",
    pick: 1
  }, {
    text: "He who controls _ controls the world.",
    pick: 1
  }, {
    text: "Dear Sir or Madam, We regret to inform you that the Office of _ has denied your request for _.",
    pick: 2
  }, {
    text: "The CIA now interrogates enemy agents by repeatedly subjecting them to _.",
    pick: 1
  }, {
    text: "_ would be woefully incomplete without _.",
    pick: 2
  }, {
    text: "During his midlife crisis, my dad got really into _.",
    pick: 1
  }, {
    text: "Before I run for president, I must destroy all evidence of my involvement with _.",
    pick: 1
  }, {
    text: 'My new favorite porn star is Joey "_" McGee.',
    pick: 1
  }, {
    text: "In his newest and most difficult stunt, David Blaine must escape from _.",
    pick: 1
  }, {
    text: "This is your captain speaking. Fasten your seatbelts and prepare for _.",
    pick: 1
  }, {
    text: "My mom freaked out when she looked at my browser history and found _.com/_.",
    pick: 2
  }, {
    text: "The Five Stages of Grief: denial, anger, bargaining, _, acceptance.",
    pick: 1
  }, {
    text: "Members of New York's social elite are paying thousands of dollars just to experience _.",
    pick: 1
  }, {
    text: "I went from _ to _, all thanks to _.",
    pick: 3
  }, {
    text: "Little Miss Muffet Sat on a tuffet, Eating her curds and _.",
    pick: 1
  }, {
    text: 'This month\'s Cosmo: "Spice up your sex life by bringing _ into the bedroom."',
    pick: 1
  }, {
    text: "If God didn't want us to enjoy _, he wouldn't have given us _.",
    pick: 2
  }, {
    text: "My country, 'tis of thee, sweet land of _.",
    pick: 1
  }, {
    text: 'After months of debate, the Occupy Wall Street General Assembly could only agree on "More _!"',
    pick: 1
  }, {
    text: "I spent my whole life working toward _, only to have it ruined by _.",
    pick: 2
  }, {
    text: "Next time on Dr. Phil: How to talk to your child about _.",
    pick: 1
  }, {
    text: "Only two things in life are certain: death and _.",
    pick: 1
  }, {
    text: "Everyone down on the ground! We don't want to hurt anyone. We're just here for _.",
    pick: 1
  }, {
    text: "The healing process began when I joined a support group for victims of _.",
    pick: 1
  }, {
    text: "The votes are in, and the new high school mascot is _.",
    pick: 1
  }, {
    text: "Charades was ruined for me forever when my mom had to act out _.",
    pick: 1
  }, {
    text: "Before _, all we had was _.",
    pick: 2
  }, {
    text: "Tonight on 20/20: What you don't know about _ could kill you.",
    pick: 1
  }, {
    text: "You haven't truly lived until you've experienced _ and _ at the same time.",
    pick: 2
  }, {
    text: "Hey baby, come back to my place and I'll show you _.",
    pick: 1
  }, {
    text: "My gym teacher got fired for adding _ to the obstacle course.",
    pick: 1
  }, {
    text: "Finally! A service that delivers _ right to your door.",
    pick: 1
  }, {
    text: "To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of _.",
    pick: 1
  }, {
    text: "My life is ruled by a vicious cycle of _ and _.",
    pick: 2
  }, {
    text: "During high school, I never really fit in until I found _ club.",
    pick: 1
  }, {
    text: "Money can't buy me love, but it can buy me _.",
    pick: 1
  }, {
    text: "Listen, son. If you want to get involved with _, I won't stop you. Just steer clear of _.",
    pick: 2
  }, {
    text: "A successful job interview begins with a firm handshake and ends with _.",
    pick: 1
  }, {
    text: "Call the law offices of Goldstein &amp; Goldstein, because no one should have to tolerate _ in the workplace.",
    pick: 1
  }, {
    text: "Lovin' you is easy 'cause you're _.",
    pick: 1
  }, {
    text: "The blind date was going horribly until we discovered our shared interest in _.",
    pick: 1
  }, {
    text: "What left this stain on my couch?",
    pick: 1
  }, {
    text: "Turns out that _-Man was neither the hero we needed nor wanted.",
    pick: 1
  }, {
    text: "After months of practice with _, I think I'm finally ready for _.",
    pick: 2
  }, {
    text: "In the seventh circle of Hell, sinners must endure _ for all eternity.",
    pick: 1
  }, {
    text: "As part of his daily regimen, Anderson Cooper sets aside 15 minutes for _.",
    pick: 1
  }, {
    text: "When you get right down to it, _ is just _.",
    pick: 2
  }, {
    text: "Having problems with _? Try _!",
    pick: 2
  }, {
    text: "And what did <i>you</i> bring for show and tell?",
    pick: 1
  }, {
    text: "I'm not like the rest of you. I'm too rich and busy for _.",
    pick: 1
  }, {
    text: "With enough time and pressure, _ will turn into _.",
    pick: 2
  }, {
    text: "_: Hours of fun. Easy to use. Perfect for _!",
    pick: 2
  }, {
    text: "_. Awesome in theory, kind of a mess in practice.",
    pick: 1
  }, {
    text: "As part of his contract, Prince won't perform without _ in his dressing room.",
    pick: 1
  }, {
    text: "Man, this is bullshit. Fuck _.",
    pick: 1
  }, {
    text: "Dear Leader Kim Jong-un,<br>our village praises your infinite wisdom with a humble offering of _.",
    pick: 1
  }, {
    text: "_ may pass, but _ will last forever.",
    pick: 2
  }, {
    text: "She's up all night for good fun.<br>I'm up all night for _.",
    pick: 1
  }, {
    text: "Alright, bros. Our frat house is condemned, and all the hot slampieces are over at Gamma Phi. The time has come to commence Operation _.",
    pick: 1
  }, {
    text: "The Japanese have developed a smaller, more efficient version of _.",
    pick: 1
  }, {
    text: "In return for my soul, the Devil promised me _, but all I got was _.",
    pick: 2
  }, {
    text: "You guys, I saw this crazy movie last night. It opens on _, and then there's some stuff about _, and then it ends with _.",
    pick: 3
  }, {
    text: "_ will never be the same after _.",
    pick: 2
  }, {
    text: "Wes Anderson's new film tells the story of a precocious child coming to terms with _.",
    pick: 1
  }, {
    text: 'In the beginning, there was _.<br>And the Lord said, "Let there be _."',
    pick: 2
  }, {
    text: "What's fun until it gets weird?",
    pick: 1
  }, {
    text: "We never did find _, but along the way we sure learned a lot about _.",
    pick: 2
  }, {
    text: "You've seen the bearded lady!<br>You've seen the ring of fire!<br>Now, ladies and gentlemen, feast your eyes upon _!",
    pick: 1
  }, {
    text: "How am I compensating for my tiny penis?",
    pick: 1
  }, {
    text: "I'm sorry, sir, but we don't allow _ at the country club.",
    pick: 1
  }, {
    text: "2 AM in the city that never sleeps. The door swings open and <i>she</i> walks in, legs up to here. Something in her eyes tells me she's looking for _.",
    pick: 1
  }, {
    text: "As king, how will I keep the peasants in line?",
    pick: 1
  }, {
    text: 'Oprah\'s book of the month is "_ For _: A Story of Hope."',
    pick: 2
  }, {
    text: "Do <i>not</i> fuck with me! I am literally _ right now.",
    pick: 1
  }, {
    text: 'Adventure.<br>Romance.<br>_.<br><br>From Paramount Pictures, "_."',
    pick: 2
  }, {
    text: "I am become _, destroyer of _!",
    pick: 2
  }, {
    text: "It lurks in the night. It hungers for flesh. This summer, no one is safe from _.",
    pick: 1
  }, {
    text: "If you can't handle _, you'd better stay away from _.",
    pick: 2
  }, {
    text: "This is the prime of my life. I'm young, hot, and full of _.",
    pick: 1
  }, {
    text: "I'm pretty sure I'm high right now, because I'm absolutely mesmerized by _.",
    pick: 1
  }, {
    text: 'This year\'s hottest album is "_" by _.',
    pick: 2
  }, {
    text: "Every step towards _ gets me a little closer to _.",
    pick: 2
  }, {
    text: "Forget everything you know about _, because now we've supercharged it with _!",
    pick: 2
  }, {
    text: "Honey, I have a new role-play I want to try tonight! You can be _, and I'll be _.",
    pick: 2
  }, {
    text: "Do the Dew &reg; with our most extreme flavor yet! Get ready for Mountain Dew _!",
    pick: 1
  }, {
    text: "Armani suit: $1,000. Dinner for two at that swanky restaurant: $300. The look on her face when you surprise her with _: priceless.",
    pick: 1
  }, {
    text: "In his new action comedy, Jackie Chan must fend off ninjas while also dealing with _.",
    pick: 1
  }, {
    text: "Well what do you have to say for yourself, Casey? This is the third time you've been sent to the principal's office for _.",
    pick: 1
  }, {
    text: "Here at the Academy for Gifted Children, we allow students to explore _ at their own pace.",
    pick: 1
  }, {
    text: "Heed my voice, mortals! I am the god of _, and I will not tolerate _!",
    pick: 2
  }, {
    text: "I don't mean to brag, but they call me the Michael Jordan of _.",
    pick: 1
  }, {
    text: "Why am I broke?",
    pick: 1
  }, {
    text: "Help me doctor, I've got _ in my butt!",
    pick: 1
  }, {
    text: "Hi MTV! My name is Kendra, I live in Malibu, I'm into _, and I love to have a good time.",
    pick: 1
  }, {
    text: "Patient presents with _. Likely a result of _.",
    pick: 2
  }, {
    text: "Life's pretty tough in the fast lane. That's why I never leave the house without _.",
    pick: 1
  }, {
    text: "What's making things awkward in the sauna?",
    pick: 1
  }, {
    text: "Get ready for the movie of the summer! One cop plays by the book. The other's only interested in one thing: _.",
    pick: 1
  }, {
    text: "Having the worst day EVER. #_",
    pick: 1
  }, {
    text: "In his farewell address, George Washington famously warned Americans about the dangers of _.",
    pick: 1
  }, {
    text: 'Don\'t forget! Beginning this week, Casual Friday will officially become "_ Friday."',
    pick: 1
  }, {
    text: "What killed my boner?",
    pick: 1
  }, {
    text: "Yo' mama so fat she _!",
    pick: 1
  }, {
    text: "Well if _ is good enough for _, it's good enough for me.",
    pick: 2
  }, {
    text: 'Hi, this is Jim from accounting. We noticed a $1,200 charge labeled "_". Can you explain?',
    pick: 1
  }, {
    text: "Do you lack energy? Does it sometimes feel like the whole world is _? Zoloft.&reg;",
    pick: 1
  }, {
    text: "WHOOO! God damn I love _!",
    pick: 1
  }, {
    text: 'Now in bookstores: "The Audacity of _", by Barack Obama.',
    pick: 1
  }, {
    text: "And today's soup is Cream of _.",
    pick: 1
  }, {
    pick: 1,
    text: "I work my ass off all day for this family, and this is what I come home to? _!?"
  }, {
    pick: 1,
    text: "I have a strict policy. First date, dinner. Second date, kiss. Third date, _."
  }, {
    pick: 1,
    text: "When I was a kid, we used to play Cowboys and _."
  }, {
    pick: 1,
    text: "This is America. If you don't work hard, you don't succeed. I don't care if you're black, white, purple, or _."
  }, {
    pick: 1,
    text: "You Won't Believe These 15 Hilarious _ Bloopers!"
  }, {
    pick: 1,
    text: "James is a lonely boy. But when he discovers a secret door in his attic, he meets a magical new friend: _."
  }, {
    pick: 1,
    text: "Don't worry kid. It gets better. I've been living with _ for 20 years."
  }, {
    pick: 1,
    text: "My grandfather worked his way up from nothing. When he came to this country, all he had was the shoes on his feet and _."
  }, {
    pick: 1,
    text: "Behind every powerful man is _."
  }, {
    pick: 1,
    text: "You are not alone. Millions of Americans struggle with _ every day."
  }, {
    pick: 1,
    text: "Come to Dubai, where you can relax in our world famous spas, experience the nightlife, or simply enjoy _ by the poolside."
  }, {
    pick: 1,
    text: '"This is madness." "No, THIS IS _!"'
  }, {
    pick: 1,
    text: "Listen Gary, I like you. But if you want that corner office, you're going to have to show me _."
  }, {
    pick: 1,
    text: "I went to the desert and ate of the peyote cactus. Turns out my spirit animal is _."
  }, {
    pick: 1,
    text: "And would you like those buffalo wings mild, hot, or _?"
  }, {
    pick: 1,
    text: "The six things I could never do without: oxygen, Facebook, chocolate, Netflix, friends, and _ LOL!"
  }, {
    pick: 1,
    text: "Why won't you make love to me anymore? Is it _?"
  }, {
    pick: 1,
    text: "Puberty is a time of change. You might notice hair growing in new places. You might develop an interest in _. This is normal."
  }, {
    pick: 1,
    text: "I'm sorry, Mrs. Chen, but there was nothing we could do. At 4:15 this morning, your son succumbed to _."
  }, {
    pick: 1,
    text: "I'm Miss Tennessee, and if I could make the world better by changing one thing, I would get rid of _."
  }, {
    pick: 1,
    text: "Tonight we will have sex. And afterwards, If you'd like, a little bit of _."
  }, {
    pick: 1,
    text: "Everybody join hands and close your eyes. Do you sense that? That's the presence of _ in this room."
  }, {
    pick: 1,
    text: "To become a true Yanomamo warrior, you must prove that you can withstand _ without crying out."
  }, {
    pick: 1,
    text: "Y'all ready to get this thing started? I'm Nick Cannon, and this is America's Got _."
  }, {
    pick: 1,
    text: "If you had to describe the Card Czar, using only one of the cards in your hand, which one would it be?"
  }, {
    pick: 2,
    text: "_ be all like _."
  }, {
    pick: 1,
    text: "Art isn't just a painting in a stuffy museum. Art is alive. Art is _."
  }, {
    pick: 1,
    text: "As reparations for slavery, all African Americans will receive _."
  }, {
    pick: 1,
    text: "As Teddy Roosevelt said, the four manly virtues are honor, temperance, industry, and _."
  }, {
    pick: 1,
    text: "Best you go back where you came from, now. We don't take too kindly to _ in these parts."
  }, {
    pick: 1,
    text: "CNN breaking news! Scientists discover _."
  }, {
    pick: 1,
    text: "Coming to Red Lobster&reg; this month, _."
  }, {
    pick: 1,
    text: "Congratulations! You have been selected for our summer internship program. While we are unable to offer a salary, we can offer you _."
  }, {
    pick: 1,
    text: "Dance like there's nobody watching, love like you'll never be hurt, and live like you're _."
  }, {
    pick: 1,
    text: "Errbody in the club _."
  }, {
    pick: 1,
    text: "Feeling so grateful! #amazing #mylife #_."
  }, {
    pick: 1,
    text: "Girls just wanna have _."
  }, {
    pick: 1,
    text: "Google Calendar alert: _ in 10 minutes."
  }, {
    pick: 1,
    text: "I don't believe in God. I believe in _."
  }, {
    pick: 1,
    text: "I got rhythm, I've got music, I've got _. Who could ask for anything more?"
  }, {
    pick: 1,
    text: "I may not be much to look at, but I fuck like _."
  }, {
    pick: 1,
    text: "I tell you, it was a non-stop fuckfest. When it was over, my asshole looked like _."
  }, {
    pick: 1,
    text: "I'll take the BBQ bacon burger with friend egg and fuck it how about _."
  }, {
    pick: 1,
    text: "I'm sorry, sir, but your insurance plan doesn't cover injuries caused by _."
  }, {
    pick: 1,
    text: "I've had a horrible vision, father. I saw mountains crumbling, stars falling from the sky. I saw _."
  }, {
    pick: 1,
    text: "If at first you don't succeed, try _."
  }, {
    pick: 1,
    text: "In the 1950s, psychologists prescribed _ as a cure for homosexually."
  }, {
    pick: 1,
    text: "LSD + _ = really bad time."
  }, {
    pick: 1,
    text: '"Mom\'s to-do list:<br/>- Buy Groceries.<br/>- Clean up _.<br/>- Soccer Practice."'
  }, {
    pick: 1,
    text: "Most Americans would not vote for a candidate who is openly _."
  }, {
    pick: 1,
    text: "No, no, no, no, no, no, NO! I will NOT let _ ruin this wedding."
  }, {
    pick: 1,
    text: "Oh no! Siri, how do I fix _?"
  }, {
    pick: 1,
    text: "One more thing. Watch out for Big Mike. They say he killed a man with _."
  }, {
    pick: 1,
    text: "Ooo, daddy like _."
  }, {
    pick: 1,
    text: "Poor Brandon, still living in his parent's basement. I heard he never got over _."
  }, {
    pick: 1,
    text: "Run, run, as fast as you can! You can't catch me, I'm _!"
  }, {
    pick: 1,
    text: "She's a lady in the streets, _ in the sheets."
  }, {
    pick: 1,
    text: "She's just one of the guys, you know? She likes beer, and football, and _."
  }, {
    pick: 1,
    text: "Son, take it from someone who's been around the block a few times. Nothin' puts her in the mood like _."
  }, {
    pick: 1,
    text: "Summer lovin', had me a blast. _, happened so fast."
  }, {
    pick: 1,
    text: '"The top Google auto-complete results for "Barack Obama":</br>- Barack Obama Height.</br>- Barack Obama net worth.</br>- Barack Obama _."'
  }, {
    pick: 1,
    text: "Then the princess kissed the frog, and all of a sudden the frog was _!"
  }, {
    pick: 1,
    text: "There is no God. It's just _ and then you die."
  }, {
    pick: 1,
    text: "This Friday at the Liquid Lunge, it's _ Night! Ladies drink free."
  }, {
    pick: 1,
    text: "We do not shake with our left hands in this country. That is the hand we use for _."
  }, {
    pick: 1,
    text: "Well if _ is a crime, then lock me up!"
  }, {
    pick: 1,
    text: "Well, shit. My eyes ain't so good, but I'll eat my own boot if that ain't _!"
  }, {
    pick: 1,
    text: "What are all those whales singing about?"
  }, {
    pick: 1,
    text: "What sucks balls?"
  }, {
    pick: 1,
    text: "What totally destroyed my asshole?"
  }, {
    pick: 1,
    text: "What turned me into a Republican?"
  }, {
    pick: 1,
    text: "What will end racism once and for all?"
  }, {
    pick: 1,
    text: "What's a total waste of Hillary Clinton's time?"
  }, {
    pick: 1,
    text: "What's about to take dance floor to the next level?"
  }, {
    pick: 1,
    text: "What's the gayest?"
  }, {
    pick: 1,
    text: "What's the most problematic?"
  }, {
    pick: 1,
    text: "Why am I laughing and crying and taking off my clothes?"
  }, {
    pick: 1,
    text: "With a one-time gift of just $10, you can save this child from _."
  }, {
    pick: 1,
    text: "You know who else liked _? Hitler."
  }, {
    pick: 1,
    text: "You won't believe what's in my pussy. It's _."
  }],
  whiteCards: ["Coat hanger abortions.", "Man meat.", "Autocannibalism.", "Vigorous jazz hands.", "Flightless birds.", "Pictures of boobs.", "Doing the right thing.", "The violation of our most basic human rights.", "Viagra&reg;.", "Self-loathing.", "Spectacular abs.", "A balanced breakfast.", "Roofies.", "Concealing a boner.", "Amputees.", "The Big Bang.", "Former President George W. Bush.", "The Rev. Dr. Martin Luther King, Jr.", "Smegma.", "Being marginalized.", "Cuddling.", "Laying an egg.", "The Pope.", "Aaron Burr.", "Genital piercings.", "Fingering.", "A bleached asshole.", "Horse meat.", "Fear itself.", "Science.", "Elderly Japanese men.", "Stranger danger.", "The terrorists.", "Praying the gay away.", "Same-sex ice dancing.", "Ethnic cleansing.", "Cheating in the Special Olympics.", "German dungeon porn.", "Bingeing and purging.", "Making a pouty face.", "William Shatner.", "Heteronormativity.", "Nickelback.", "Tom Cruise.", "The profoundly handicapped.", "The placenta.", "Chainsaws for hands.", "Arnold Schwarzenegger.", "An icepick lobotomy.", "Goblins.", "Object permanence.", "Dying.", "Foreskin.", "A falcon with a cap on its head.", "Hormone injections.", "Dying of dysentery.", "Sexy pillow fights.", "The invisible hand.", "A really cool hat.", "Sean Penn.", "Heartwarming orphans.", "The clitoris.", "The Three-Fifths compromise.", "A sad handjob.", "Men.", "Historically black colleges.", "A micropenis.", "Raptor attacks.", "Agriculture.", "Vikings.", "Pretending to care.", "The Underground Railroad.", "My humps.", "Being a dick to children.", "Geese.", "Bling.", "Sniffing glue.", "The South.", "An Oedipus complex.", "Eating all of the cookies before the AIDS bake-sale.", "Sexting.", "YOU MUST CONSTRUCT ADDITIONAL PYLONS.", "Mutually-assured destruction.", "Sunshine and rainbows.", "Count Chocula.", "Sharing needles.", "Being rich.", "Skeletor.", "A sausage festival.", "Michael Jackson.", "Emotions.", "Farting and walking away.", "The Chinese gymnastics team.", "Necrophilia.", "Spontaneous human combustion.", "Yeast.", "Leaving an awkward voicemail.", "Dick Cheney.", "White people.", "Penis envy.", "Teaching a robot to love.", "Sperm whales.", "Scrubbing under the folds.", "Panda sex.", "Whipping it out.", "Catapults.", "Masturbation.", "Natural selection.", "Opposable thumbs.", "A sassy black woman.", "AIDS.", "The KKK.", "Figgy pudding.", "Seppuku.", "Gandhi.", "Preteens.", "Toni Morrison's vagina.", "Five-Dollar Footlongs&trade;.", "Land mines.", "A sea of troubles.", "A zesty breakfast burrito.", "Christopher Walken.", "Friction.", "Balls.", "Dental dams.", "A can of whoop-ass.", "A tiny horse.", "Waiting 'til marriage.", "Authentic Mexican cuisine.", "Genghis Khan.", "Old-people smell.", "Feeding Rosie O'Donnell.", "Pixelated bukkake.", "Friends with benefits.", "The token minority.", "The Tempur-Pedic&reg; Swedish Sleep System&trade;.", "A thermonuclear detonation.", "Take-backsies.", "The Rapture.", "A cooler full of organs.", "Sweet, sweet vengeance.", "RoboCop.", "Keanu Reeves.", "Drinking alone.", "Giving 110%.", "Flesh-eating bacteria.", "The American Dream.", "Taking off your shirt.", "Me time.", "A murder most foul.", "The inevitable heat death of the universe.", "The folly of man.", "That thing that electrocutes your abs.", "Cards Against Humanity.", "Fiery poops.", "Poor people.", "Edible underpants.", "Britney Spears at 55.", "All-you-can-eat shrimp for $4.99.", "Pooping back and forth. Forever.", "Fancy Feast&reg;.", "Jewish fraternities.", "Being a motherfucking sorcerer.", "Pulling out.", "Picking up girls at the abortion clinic.", "The homosexual agenda.", "The Holy Bible.", "Passive-agression.", "Ronald Reagan.", "Vehicular manslaughter.", "Nipple blades.", "Assless chaps.", "Full frontal nudity.", "Hulk Hogan.", "Daddy issues.", "The hardworking Mexican.", "Natalie Portman.", "Waking up half-naked in a Denny's parking lot.", "God.", "Sean Connery.", "Saxophone solos.", "Gloryholes.", "The World of Warcraft.", "Homeless people.", "Scalping.", "Darth Vader.", "Eating the last known bison.", "Guys who don't call.", "Hot Pockets&reg;.", "A time travel paradox.", "The milk man.", "Testicular torsion.", "Dropping a chandelier on your enemies and riding the rope up.", "World peace.", "A salty surprise.", "Poorly-timed Holocaust jokes.", "Smallpox blankets.", "Licking things to claim them as your own.", "The heart of a child.", "Robert Downey, Jr.", "Lockjaw.", "Eugenics.", "A good sniff.", "Friendly fire.", "The taint; the grundle; the fleshy fun-bridge.", "Wearing underwear inside-out to avoid doing laundry.", "Hurricane Katrina.", "Free samples.", "Jerking off into a pool of children's tears.", "A foul mouth.", "The glass ceiling.", "Republicans.", "Explosions.", "Michelle Obama's arms.", "Getting really high.", "Attitude.", "Sarah Palin.", "The &Uuml;bermensch.", "Altar boys.", "My soul.", "My sex life.", "Pedophiles.", "72 virgins.", "Pabst Blue Ribbon.", "Domino's&trade; Oreo&trade; Dessert Pizza.", "A snapping turtle biting the tip of your penis.", "The Blood of Christ.", "Half-assed foreplay.", "My collection of high-tech sex toys.", "A middle-aged man on roller skates.", "Bitches.", "Bill Nye the Science Guy.", "Italians.", "A windmill full of corpses.", "Adderall&trade;.", "Crippling debt.", "A stray pube.", "Prancing.", "Passing a kidney stone.", "A brain tumor.", "Leprosy.", "Puppies!", "Bees?", "Frolicking.", "Repression.", "Road head.", "A bag of magic beans.", "An asymmetric boob job.", "Dead parents.", "Public ridicule.", "A mating display.", "A mime having a stroke.", "Stephen Hawking talking dirty.", "African children.", "Mouth herpes.", "Overcompensation.", "Riding off into the sunset.", "Being on fire.", "Tangled Slinkys.", "Civilian casualties.", "Auschwitz.", "My genitals.", "Not reciprocating oral sex.", "Lactation.", "Being fabulous.", "Shaquille O'Neal's acting career.", "My relationship status.", "Asians who aren't good at math.", "Alcoholism.", "Incest.", "Grave robbing.", "Hope.", "8 oz. of sweet Mexican black-tar heroin.", "Kids with ass cancer.", "Winking at old people.", "The Jews.", "Justin Bieber.", "Doin' it in the butt.", "A lifetime of sadness.", "The Hamburglar.", "Swooping.", "Classist undertones.", "New Age music.", "Not giving a shit about the Third World.", "The Kool-Aid Man.", "A hot mess.", "Tentacle porn.", "Lumberjack fantasies.", "The gays.", "Scientology.", "Estrogen.", "GoGurt&reg;.", "Judge Judy.", "Dick fingers.", "Racism.", "Surprise sex!", "Police brutality.", "Passable transvestites.", "The Virginia Tech Massacre.", "When you fart and a little bit comes out.", "Oompa-Loompas.", "A fetus.", "Obesity.", "Tasteful sideboob.", "Hot people.", "BATMAN!!!", "Black people.", "A gassy antelope.", "Sexual tension.", "Third base.", "Racially-biased SAT questions.", "Porn stars.", "A Super Soaker&trade; full of cat pee.", "Muhammed (Praise Be Unto Him).", "Puberty.", "A disappointing birthday party.", "An erection that lasts longer than four hours.", "White privilege.", "Getting so angry that you pop a boner.", "Wifely duties.", "Two midgets shitting into a bucket.", "Queefing.", "Wiping her butt.", "Golden showers.", "Barack Obama.", "Nazis.", "A robust mongoloid.", "An M. Night Shyamalan plot twist.", "Getting drunk on mouthwash.", "Lunchables&trade;.", "Women in yogurt commercials.", "John Wilkes Booth.", "Powerful thighs.", "Mr. Clean, right behind you.", "Multiple stab wounds.", "Cybernetic enhancements.", "Serfdom.", "Kanye West.", "Women's suffrage.", "Children on leashes.", "Harry Potter erotica.", "The Dance of the Sugar Plum Fairy.", "Lance Armstrong's missing testicle.", "Parting the Red Sea.", "The Amish.", "Dead babies.", "Child beauty pageants.", "AXE Body Spray.", "Centaurs.", "Copping a feel.", "Grandma.", "Famine.", "The Trail of Tears.", "The miracle of childbirth.", "Finger painting.", "A monkey smoking a cigar.", "The Make-A-Wish&reg; Foundation.", "Anal beads.", "The Force.", "Kamikaze pilots.", "Dry heaving.", "Active listening.", "Ghosts.", "The Hustle.", "Peeing a little bit.", "Another goddamn vampire movie.", "Shapeshifters.", "The Care Bear Stare.", "Hot cheese.", "A mopey zoo lion.", "A defective condom.", "Teenage pregnancy.", "A Bop It&trade;.", "Expecting a burp and vomiting on the floor.", "Horrifying laser hair removal accidents.", "Boogers.", "Unfathomable stupidity.", "Breaking out into song and dance.", "Soup that is too hot.", "Morgan Freeman's voice.", "Getting naked and watching Nickelodeon.", "MechaHitler.", "Flying sex snakes.", "The true meaning of Christmas.", "My inner demons.", "Pac-Man uncontrollably guzzling cum.", "My vagina.", "A homoerotic volleyball montage.", "Actually taking candy from a baby.", "Crystal meth.", "Exactly what you'd expect.", "Natural male enhancement.", "Passive-aggressive Post-it notes.", "Inappropriate yodeling.", "Lady Gaga.", "The Little Engine That Could.", "Vigilante justice.", "A death ray.", "Poor life choices.", "A gentle caress of the inner thigh.", "Embryonic stem cells.", "Nicolas Cage.", "Firing a rifle into the air while balls deep in a squealing hog.", "Switching to Geico&reg;.", "The chronic.", "Erectile dysfunction.", "Home video of Oprah sobbing into a Lean Cuisine&reg;.", "A bucket of fish heads.", "50,000 volts straight to the nipples.", "Being fat and stupid.", "Hospice care.", "A pyramid of severed heads.", "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.", "A subscription to Men's Fitness.", "Crucifixion.", "A micropig wearing a tiny raincoat and booties.", "Some god-damn peace and quiet.", "Used panties.", "A tribe of warrior women.", 'The penny whistle solo from "My Heart Will Go On."', "An oversized lollipop.", "Helplessly giggling at the mention of Hutus and Tutsis.", "Not wearing pants.", "Consensual sex.", "Her Majesty, Queen Elizabeth II.", "Funky fresh rhymes.", "The art of seduction.", "The Devil himself.", "Advice from a wise, old black man.", "Destroying the evidence.", "The light of a billion suns.", "Wet dreams.", "Synergistic management solutions.", "Growing a pair.", "Silence.", "An M16 assault rifle.", "Poopy diapers.", "A live studio audience.", "The Great Depression.", "A spastic nerd.", "Rush Limbaugh's soft, shitty body.", "Tickling Sean Hannity, even after he tells you to stop.", "Stalin.", "Brown people.", "Rehab.", "Capturing Newt Gingrich and forcing him to dance in a monkey suit.", "Battlefield amputations.", "An uppercut.", "Shiny objects.", "An ugly face.", "Menstrual rage.", "A bitch slap.", "One trillion dollars.", "Chunks of dead prostitute.", "The entire Mormon Tabernacle Choir.", "The female orgasm.", "Extremely tight pants.", "The Boy Scouts of America.", "Stormtroopers.", "Throwing a virgin into a volcano.", "Getting in her pants, politely.", "Gladiatorial combat.", "Good grammar.", "Hipsters.", "Gandalf.", "Genetically engineered super-soldiers.", "George Clooney's musk.", "Getting abducted by Peter Pan.", "Eating an albino.", "Enormous Scandinavian women.", "Fabricating statistics.", "Finding a skeleton.", "Suicidal thoughts.", "Dancing with a broom.", "Deflowering the princess.", "Dorito breath.", "One thousand Slim Jims.", "My machete.", "Overpowering your father.", "Ominous background music.", "Media coverage.", "Making the penises kiss.", "Moral ambiguity.", "Medieval Times&reg; Dinner &amp; Tournament.", "Mad hacky-sack skills.", "Just the tip.", "Literally eating shit.", "Leveling up.", "Insatiable bloodlust.", "Historical revisionism.", "Jean-Claude Van Damme.", "Jafar.", "The boners of the elderly.", "The economy.", "Statistically validated stereotypes.", "Sudden Poop Explosion Disease.", "Slow motion.", "Space muffins.", "Sexual humiliation.", "Sexy Siamese twins.", "Santa Claus.", "Scrotum tickling.", "Ripping into a man's chest and pulling out his still-beating heart.", "Ryan Gosling riding in on a white horse.", "Quivering jowls.", "Revenge fucking.", "Pistol-whipping a hostage.", "Quiche.", "Zeus's sexual appetites.", "Words, words, words.", "Tripping balls.", "Being a busy adult with many important things to do.", "The four arms of Vishnu.", "The shambling corpse of Larry King.", "The hiccups.", "The harsh light of day.", "The Gulags.", "The Fanta&reg; girls.", "A big black dick.", "A beached whale.", "A low standard of living.", "A nuanced critique.", "A bloody pacifier.", "A crappy little hand.", "Shaft.", "Being a dinosaur.", "Beating your wives.", "Neil Patrick Harris.", "Coughing into a vagina.", "Carnies.", "Nubile slave boys.", "Bosnian chicken farmers.", "A web of lies.", "A rival dojo.", "A passionate Latino lover.", "Panty raids.", "Appreciative snapping.", "Apologizing.", "Clams.", "A woman scorned.", "Being awesome at sex.", "Spring break!", "Another shot of morphine.", 'Dining with cardboard cutouts of the cast of "Friends."', 'A soulful rendition of "Ol\' Man River."', "Making a friend.", "A sweaty, panting leather daddy.", "Intimacy problems.", "The new Radiohead album.", "Pretty Pretty Princess Dress-Up Board Game&reg;.", "A man in yoga pants with a ponytail and feather earrings.", "An army of skeletons.", "A squadron of moles wearing aviator goggles.", "Beefin' over turf.", "The Google.", "Bullshit.", "A sweet spaceship.", "A 55-gallon drum of lube.", "Special musical guest, Cher.", "The human body.", "Mild autism.", "Nunchuck moves.", "Whipping a disobedient slave.", "An ether-soaked rag.", "Oncoming traffic.", "A dollop of sour cream.", "A slightly shittier parallel universe.", "My first kill.", "Boris the Soviet Love Hammer.", "The grey nutrient broth that sustains Mitt Romney.", "Tiny nipples.", "Power.", "Death by Steven Seagal.", "A Burmese tiger pit.", "Basic human decency.", "Grandpa's ashes.", "One Ring to rule them all.", "The day the birds attacked.", "Fetal alcohol syndrome.", "Graphic violence, adult language, and some sexual content.", "A bigger, blacker dick.", "The mere concept of Applebee's&reg;.", "A sad fat dragon with no friends.", "A pi&ntilde;ata full of scorpions.", "Existing.", "Hillary Clinton's death stare.", "Catastrophic urethral trauma.", "Double penetration.", "Daddy's belt.", "Swiftly achieving orgasm.", "Mooing.", "Rising from the grave.", "Subduing a grizzly bear and making her your wife.", "Some really fucked-up shit.", "Weapons-grade plutonium.", "All of this blood.", "Scrotal frostbite.", "Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes.", "The mixing of the races.", "Pumping out a baby every nine months.", "Tongue.", "Loki, the trickster god.", "Whining like a little bitch.", "Wearing an octopus for a hat.", "An unhinged ferris wheel rolling toward the sea.", "Finding Waldo.", "Upgrading homeless people to mobile hotspots.", "A magic hippie love cloud.", "Fuck Mountain.", "Living in a trashcan.", "The corporations.", "Getting hilariously gang-banged by the Blue Man Group.", "Jeff Goldblum.", "Survivor's guilt.", "Me.", "All my friends dying.", "Shutting the fuck up.", "An ass disaster.", "Some kind of bird-man.", "The entire Internet.", "Going around punching people.", "A boo-boo.", "Indescribable loneliness.", "Having sex on top of a pizza.", "Chugging a lava lamp.", "Warm, velvety muppet sex.", "Running naked through a mall, pissing and shitting everywhere.", "Nothing.", "Samuel L. Jackson.", "Self-flagellation.", "The systematic destruction of an entire people and their way of life.", "The Quesadilla Explosion Salad&trade; from Chili's&reg;.", "Reverse cowgirl.", "Vietnam flashbacks.", "Actually getting shot, for real.", "Not having sex.", "Cock.", "Dying alone and in pain.", "A cop who is also a dog.", "The way white people is.", "Gay aliens.", "The primal, ball-slapping sex your parents are having right now.", "A cat video so cute that your eyes roll back and your spine slides out of your anus.", "A lamprey swimming up the toilet and latching onto your taint.", "Slapping a racist old lady.", "A black male in his early 20s, last seen wearing a hoodie.", "Jumping out at people.", "Three months in the hole.", "Blood farts.", "The Land of Chocolate.", "A botched circumcision.", "My manservant, Claude.", "Vomiting mid-blowjob.", "Letting everyone down.", "Having shotguns for legs.", "Bill Clinton, naked on a bearskin rug with a saxophone.", "Mufasa's death scene.", "The Harlem Globetrotters.", "Demonic possession.", "Fisting.", "The thin veneer of situational causality that underlies porn.", "Girls that always be textin'.", "Blowing some dudes in an alley.", "A spontaneous conga line.", "A vagina that leads to another dimension.", "Disco fever.", "Getting your dick stuck in a Chinese finger trap with another dick.", "Drinking ten 5-hour ENERGYs&reg; to get fifty continuous hours of energy.", "Sneezing, farting, and coming at the same time.", "Some douche with an acoustic guitar.", "Spending lots of money.", "Putting an entire peanut butter and jelly sandwich into the VCR.", "An unstoppable wave of fire ants.", "A greased-up Matthew McConaughey.", "Flying robots that kill people.", "Unlimited soup, salad, and breadsticks.", "Crying into the pages of Sylvia Plath.", "The moist, demanding chasm of his mouth.", "Filling every orifice with butterscotch pudding.", "An all-midget production of Shakespeare's <i>Richard III</i>.", "Screaming like a maniac.", "Not contributing to society in any meaningful way.", "A pile of squirming bodies.", "Buying the right pants to be cool.", "Roland the Farter, flatulist to the king.", "That ass.", "A surprising amount of hair.", "Eating Tom Selleck's mustache to gain his powers.", "Velcro&trade;.", "A PowerPoint presentation.", "Crazy opium eyes.", "10 Incredible Facts About the Anus.", "An interracial handshake.", "Moderate-to-severe joint pain.", "Finally finishing off the Indians.", "Sugar madness.", "Actual mutants with medical conditions and no superpowers.", "The secret formula for ultimate female satisfaction.", "The complex geopolitical quagmire that is the Middle East.", "Fucking a corpse back to life.", "Neil Diamond's Greatest Hits.", "Calculating every mannerism so as not to suggest homosexuality.", "Whatever a McRib&reg; is made of.", "No clothes on, penis in vagina.", "All the single ladies.", "Whispering all sexy.", "How awesome I am.", "Ass to mouth.", "Smoking crack, for instance.", "Falling into the toilet.", "A dance move that's just sex.", "The size of my penis.", "Some sort of Asian.", "A hopeless amount of spiders.", "Party Mexicans.", "Drinking responsibly.", "The safe word.", "Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night.", "Bouncing up and down.", "Jizz.", "Ambiguous sarcasm.", "A shiny rock that proves I love you.", "Dem titties.", "My worthless son.", "Exploding pigeons.", "A Ugandan warlord.", "My sex dungeon.", "A kiss on the lips.", "Child Protective Services.", "A Native American who solves crimes by going into the spirit world.", "Doo-doo.", "The peaceful and nonthreatening rise of China.", "Sports.", "A fart.", "Unquestioning obedience.", "Three consecutive seconds of happiness.", "Grammar nazis who are also regular Nazis.", "Snorting coke off a clown's boner.", "Africa.", "Depression.", "A horse with no legs.", "The euphoric rush of strangling a drifter.", "Khakis.", "Interspecies marriage.", "A gender identity that can only be conveyed through slam poetry.", "Almost giving money to a homeless person.", "Stuff a child's face with Fun Dip&reg; until he starts having fun.", "What Jesus would do.", "A for-real lizard that spits blood from its eyes.", "Blackula.", "The tiniest shred of evidence that God is real.", "My dad's dumb fucking face.", "Prince Ali,<br>fabulous he,<br>Ali Ababwa.", "A manhole.", "A sex goblin with a carnival penis.", "A bunch of idiots playing a card game instead of interacting like normal humans.", "A sex comet from Neptune that plunges the Earth into eternal sexiness.", "Sharks with legs.", "Injecting speed into one arm and horse tranquilizer into the other.", "Lots and lots of abortions.", "Seeing things from Hitler's perspective", "Too much cocaine.", "Doing the right stuff to her nipples.", "Giant sperm from outer space.", "Oil!", "Ennui.", "A powered exoskeleton.", "A disappointing salad.", "Mom's new boyfriend.", "Unrelenting genital punishment.", "Denzel.", "The swim team, all at once.", "The eight gay warlocks who dictate the rules of fashion.", "Being nine years old.", "The unbelievable world of mushrooms.", "The Abercrombie &amp; Fitch lifestyle.", "Vegetarian options.", "My first period.", "Having been dead for a while.", "Backwards knees.", "Being paralyzed from the neck down.", "Seeing my village burned and my family slaughtered before my eyes.", "A zero-risk way to make $2,000 from home.", "A crazy little thing called love.", "Ancient Athenian boy-fucking", "Out-of-this-world bazongas.", "The ghost of Marlon Brando.", "The basic suffering that pervades all of existence.", "Being worshipped as the one true God.", "Figuring out how to have sex with a dolphin.", "All these decorative pillows.", "A mouthful of potato salad.", "Russian super-tuberculosis.", "A reason not to commit suicide.", "Going to a high school reunion on ketamine.", "The passage of time.", "Child support payments.", "Changing a person's mind with logic and facts.", "My boyfriend's stupid penis.", "The tiger that killed my father.", "Genghis Khan's DNA.", "Boring vaginal sex.", "40 acres and a mule.", "A whole new kind of porn.", "Slowly easing down onto a cucumber.", "Wearing glasses and sounding smart.", "AIDS monkeys.", "A team of lawyers.", "Getting drive-by shot.", "Not believing in giraffes.", "Anal fissures like you wouldn't believe.", "A giant powdery manbaby.", "Cutting off a flamingo's legs with garden shears.", "P.F. Chang himself.", "An uninterrupted history of imperialism and exploitation.", "A one-way ticket to Gary, Indiana.", "Daddy's credit card.", "September 11th, 2001.", "An unforgettable quincea&ntilde;era.", "Deez nuts.", "Social justice warriors with flamethrowers of compassion.", "Some shit-hot guitar licks.", "Butt stuff.", "Blackface.", "Blowjobs for everyone.", "Getting eaten alive by Guy Fieri.", "Western standards of beauty.", "Ejaculating live bees and the bees are angry.", "My dead son's baseball glove.", "Getting caught by the police and going to jail.", "A face full of horse cum.", "Free ice cream, yo.", "The white half of Barack Obama.", "The black half of Barack Obama.", "An inability to form meaningful relationships.", "A bass drop so huge it tears the starry vault asunder to reveal the face of God.", "Growing up chained to a radiator in perpetual darkness.", "Shitting all over the floor like a bad, bad girl.", "A buttload of candy.", "Sucking all the milk out of a yak.", "Bullets.", "A man who is so cool that he rides on a motorcycle.", "Sudden penis loss.", "Getting all offended.", "Crying and shitting and eating spaghetti.", "One unforgettable night of passion.", "Being popular and good at sports.", "Filling a man's anus with concrete.", "Two whales fucking the shit out of eachother.", "Cool, relateable cancer teens.", "The amount of gay I am.", "A possible Muslim.", "Unsheathing my massive horse cock.", "A bowl of gourds.", "The male gaze.", "The power of the Dark Side.", "Ripping a dog in half.", "A constant need for validation.", "Meaningless sex.", "Such a big boy.", "Throwing stones at a man until he dies.", "Cancer.", "Like a million alligators.", "Eating together like a god damn family for once.", "Cute boys.", "Pussy.", "Being a terrible mother.", "Never having sex again.", "A pizza guy who fucked up.", "A whole lotta woman.", "The all-new Nissan Pathfinder with 0.9% APR financing!", "A peyote-fueled vision quest.", "Kale.", "Breastfeeding a ten year old.", "Crippling social anxiety.", "Immortality cream.", "Texas.", "Teaching a girl how to handjob the penis.", "A turd.", "Shapes and colors.", "Whatever you wish, mother.", "The haunting stare of an Iraqi child.", "Robots who just want to party.", "A self-microwaving burrito.", "Forgetting grandma's first name.", "Our new Buffalo Chicken Dippers&reg;!", "Treasures beyond your wildest dreams.", "Getting shot out of a cannon.", "The sweet song of sword against and the braying of mighty war beasts.", "Walking into a glass door.", 'The color "puce".', "Every ounce of charisma left in Mick Jagger's tired body.", "The eighth graders.", "Setting my balls on fire and cartwheeling to Ohio.", "The dentist.", "Gwyneth Paltrow's opinions.", "Turning the rivers red with the blood of infidels.", "Rabies.", "Important news about Taylor Swift.", "Ejaculating inside another man's wife.", "Owls, the perfect predator.", "Being John Malkovich.", "Bathing in moonsblood and dancing around the ancient oak.", "An oppressed people with a vibrant culture.", "An overwhelming variety of cheeses.", "Reading the entire End-User License Agreement.", "Morpheus.", "Peeing into a girl's butt to make a baby.", "Generally having no idea of what's going on.", "No longer finding any Cards Against Humanity card funny.", "10 football players with erections barreling towards you at full speed.", "10,000 shrieking teenage girls.", "A big ol' plate of fettuccine alfredo.", "A big, beautiful mouth packed to the brim with sparkling teeth.", "A black friend.", "A burrito that's just sour cream.", "A cheerfulness that belies a deep-seated self-loathing.", "A cold and indifferent universe.", "A creature made of penises that must constantly arouse itself to survive.", "A creepy child singing a nursery rhyme.", "A dolphin that learns to talk and becomes the Dead of Harvard Law School.", "A duffel bag full of lizards.", "A finger up the butt.", "A genetic predisposition for alcoholism.", "A gun that shoots cobras.", "A hug.", "A long business meeting with no obvious purpose.", "A man in a suit with perfect hair who tells you beautiful lies.", "A man with the head of a goat and the body of a goat.", "A massive collection of child pornography.", "A medium horchata.", "A negative body image that is totally justified.", "A slowly encroaching circle of wolves.", "A strong horse and enough rations for thirty days.", "A terrified fat child who won't come out of the bushes.", "A tiny fireman who puts out tiny fires.", "A weird guy who says weird stuff and weirds me out.", "A woman's right to choose.", "A woman's perspective.", "Aborting the shit out of a fetus.", "Albert Einstein but if he had a huge muscles and a rhinoceros cock.", "All these people I've killed.", "An arrangement wherein I give a person money they have sex with me.", "An empowered woman.", "An incurable homosexual.", "An old dog full of tumors.", "An older man.", "An X-Man whose power is that he has sex with dogs and children.", "Anal.", "Antidepressants.", "Art.", "Assassinating the president.", "Awesome pictures of planets and stuff.", "Bad emotions I don't want.", "Becoming the President of the United States.", "Being sexually attracted to children.", "Being turned into sausages.", "Beyonc&eacute;.", "Big, smart money boys tap-tapping on their keyboards.", "Blossoming into a beautiful young woman.", "Breastfeeding in public like a radiant earth goddess.", "Brunch.", "Catching a live salmon in your mouth.", "Child labor.", "China.", "Chipotle.", "Chris Hemsworth.", "Comprehensive immigration reform.", "Condoleezza Rice.", "Consensual, nonreproductive incest.", "Content.", "Crazy anal orgasms.", "Creamy slices of real, California avocado.", "Critical thinking.", "Crushing the patriarchy.", "Daddy going away forever.", "Defeating a gorilla in single combat.", "Denying the Holocaust.", "Dis bitch.", "Discovering that what I really want in life is to kill people and have sex with their corpses.", "Doing a somersault and barfing.", "Dominating a man by peeing on his eldest son.", "Doritos and a Fruit Roll-Up.", "Dropping dead in a Sbarro's bathroom and not being found for 72 hours.", "Dumpster juice.", "Eating ass.", "Eating people.", "Eating too many Cinnabons and then vomiting and then eating the vomit.", "Ejaculating at the apex of a cartwheel.", "Esmeralda, my most beautiful daughter.", "Eternal screaming madness.", "Every man's ultimate fantasy: a perfectly cylindrical vagina.", "Everything.", "Exploring each other's buttholes.", "Facilitating dialogue and deconstructing binaries.", "Falling into a pit of waffles.", "Farting a huge shit out of my pussy.", "Farting all over my face with your tight little asshole.", "Feeling the emotion of anger.", "Feminism.", "Film roles for actresses over 40.", "Finding a nice elevator to poop in.", "Forty-five minutes of finger blasting.", "Founding a major world religion.", "Fucking me good and taking me to Red Lobster&reg;.", "Fucking my therapist.", "Gary.", "Gay thoughts.", "Gayle from HR.", "Gazpacho.", "Getting aborted.", "Getting blasted in the face by a t-shirt cannon.", "Getting eaten out by a dog.", "Getting high with mom.", "Getting killed and dragged up a tree by a leopard.", "Getting laid like all the time.", "Getting naked too soon.", "Getting pegged.", "Getting the Dorito crumbs out of my purse.", "Getting this party started!", "Getting trapped in a conversation about Ayn Rand.", "Going around pulling people's tampons out.", "Going to bed at a reasonable hour.", "Gregor, my largest son.", "Grunting for ten minutes and then peeing sand.", "Guns.", "Happy daddies with happy sandals.", "Hating Jews.", "Having a vagina.", "Having an awesome time drinking and driving.", "Having sex with a beautiful person.", "Having sex with a man and then eating his head.", "Having sex with your mom.", "Holding the proper political beliefs of my time to attract a mate.", "Homework.", "Hot lettuce.", "How good lead paint taste.", "How great my ass looks in these jeans.", "How sad it will be when Morgan Freeman dies.", "How strange it is to be anything at all.", "Huge big balls full of jizz.", "Informing you that I am a registered sex offender.", "ISIS.", "It being too late to stop having sex with a horse.", "Jason, the teen mayor.", "Jazz.", "Just now finding out about the Armenian Genocide.", "Late-stage dementia.", "Libertarians.", "Loud, scary thunder.", "Making out and stuff.", "Math.", "Meatloaf, the food.", "Meatloaf, the man.", "Menopause.", "Mental illness.", "Microaggressions.", "Misogyny.", "Mixing M&Ms and Skittles like some kind of psychopath.", "Mommy and daddy fighting all the time.", "Moon people.", "Muchin' puss.", "My brother's hot friends.", "My dog dying.", "My huge penis and substantial fortune.", "Objectifying women.", "One of them big-city Jew lawyers.", 'One of those "blow jobs" I\'ve been hearing so much about.', "Onions.", "Opening your mouth to talk and a big penis fops out.", "Our baby.", "Out-of-control teenage blowjob parties.", "Overthrowing the democratically-elected government of Chile.", "Participating.", "Period poops.", "Picking up a glass of water and taking a sip and being the president.", "Playing my asshole like a trumpet.", "Plowing that ass like a New England corn farmer.", "Political correctness.", "Pooping in a leotard and hoping no one notices.", "Pooping in the potty.", "Prematurely ejaculating like a total loser.", "Pretending to be one of the guys but actually being the spider god.", "Putting more black people in jail.", "Quacking like a duck in lieu of a cogent argument.", "Quinoa.", "Raising three kids on minimum wage.", "Reaching an age where barbecue chips are better than sex.", "Regurgitating a half-digested sparrow.", "Restoring Germany to its former glory.", "Rock-hard tits and a huge vagina.", "Rolling so hard.", "Rubbing my bush all over your bald head.", "Salsa Night at Dave's Cantina.", "Scissoring, if that's a thing.", "Seizing control of the means of production.", "Self-identifying as a DJ.", "Showing all the boys my pussy.", "Slamming a dunk.", "Smashing my balls at the moment of climax.", "Some of that good dick.", "Some real spicy shrimps.", "Starting a shitty podcast.", "Straight blazin' 24/7.", "Sucking each other's penises for hours on end.", "Sudden and unwanted slam poetry.", "Swearing praise upon the Sultan's hideous daughters.", "Systems and policies designed to preserve centuries-old power structures.", "Tables.", "Taking the form of a falcon.", "Tender chunks of all-white-meat chicken.", "That bitch, Stacy.", "The amount of baby carrots I can fit up my ass.", "The best, deepest quotes from The Dark Knight.", "The body of a 46-year-old man.", "The bond between a woman and her horse.", "The chicken from Popeyes&reg;.", "The clown that followed me home from the grocery store.", "The fear and hatred in men's hearts.", "The feeling of going to McDonald's as a 6-year-old.", "The flaming wreckage of the International Space Station.", "The full blown marginalization of ugly people.", "The full force of the American military.", "The government.", "The graceful path of an autumn leaf as it falls to its earthen cradle.", "The hottest MILF in Dallas.", "The LGBT community.", "The lived experience of African Americans.", "The mysterious fog rolling into town.", "The ol' penis-in-the-popcorn surprise.", "The Rwandan Genocide.", "The secret to truly resilient hair.", "The sweet, forbidden meat of the monkey.", "The wind.", "Thinking about what eating even is.", "Three hours of nonstop penetration.", "Tiny, rancid girl farts.", "Trees.", "Trevor, the world's greatest boyfriend.", "Turning 32.", "Twenty bucks.", "Twenty cheerleaders laughing at your tiny penis.", "Twisting my cock and balls into a balloon poodle.", "Two beautiful pig sisters.", "Two shitty kids and a garbage husband.", "Waking up inside of a tornado.", "Watching a hot person eat.", "Watching you die.", "Water.", 'When the big truck goes "Toot! Toot!"', "Who really did 9/11.", "Whomsoever let the dogs out.", "Whooping your ass at Mario Kart.", "Working so hard to have muscles and then having them.", "You."]
};
exports.cards = cards;
},{}],"mBUZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultState = void 0;

var _cards = require("../constants/cards");

var defaultState = {
  isShowcasing: false,

  /**
   * @TODO
   * I think all the logic works with picks > 1, but I need to
   * think about the UX around picking cards from the czar point of view.
   *
   * And how showcasing would work
   */
  blackCards: _cards.cards.blackCards.filter(function (card) {
    return card.pick === 1;
  }),
  cardLimit: 10,
  currentBlackCard: {
    pick: 0,
    text: ""
  },
  currentCzarID: 0,
  gameStarted: false,
  hand: [],
  name: "cah",
  playedCards: [],
  playerID: null,
  whiteCards: _cards.cards.whiteCards,
  winnerCards: [],
  gameOver: false,
  winningCardAmount: 10
};
exports.defaultState = defaultState;
},{"../constants/cards":"taub"}],"vNg5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startGame = startGame;
exports.setup = void 0;

var _core = require("boardgame.io/core");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function startGame(G) {
  return __assign(__assign({}, G), {
    gameStarted: true
  });
}

var setup = {
  turn: {
    activePlayers: _core.ActivePlayers.ALL
  },
  endIf: function (G) {
    var _a;

    return ((_a = G) === null || _a === void 0 ? void 0 : _a.gameStarted) === true;
  },
  start: true,
  next: "draw"
};
exports.setup = setup;
},{}],"nvAA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns a random integer below the max provided
 */
function getRandomInt(max) {
  if (max === void 0) {
    max = 0;
  }

  if (max !== 0) {
    return Math.floor(Math.random() * Math.floor(max));
  } else {
    throw new Error("Error: " + max + " passed to getRandomInt");
  }
}

var _default = getRandomInt;
exports.default = _default;
},{}],"pjnZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawCard = drawCard;
exports.drawCards = drawCards;

var _getRandomInt = _interopRequireDefault(require("./getRandomInt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

/**
 * Takes in a deck of cards, draws a card out, and returns the new deck
 */
function drawCard(deck) {
  var newCardIndex = (0, _getRandomInt.default)(deck.length);
  var card = deck[newCardIndex];

  var newDeck = __spreadArrays(deck.slice(0, newCardIndex), deck.slice(newCardIndex + 1));

  return {
    card: card,
    deck: newDeck
  };
}

function drawCards(deck, cardsNeeded) {
  var cards = [];

  while (cardsNeeded !== cards.length) {
    var _a = drawCard(deck),
        card = _a.card,
        newDeck = _a.deck;

    deck = newDeck;
    cards.push(card);
  }

  return {
    deck: deck,
    cards: cards
  };
}
},{"./getRandomInt":"nvAA"}],"k4xJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawCard = drawCard;
exports.draw = void 0;

var _drawCard = require("../../utils/drawCard");

var _core = require("boardgame.io/core");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

function drawCard(G, ctx, playerID) {
  var _a, _b;

  var _c = (0, _drawCard.drawCard)((_a = G) === null || _a === void 0 ? void 0 : _a.whiteCards),
      card = _c.card,
      deck = _c.deck;

  return __assign(__assign({}, G), {
    whiteCards: deck,
    hand: __spreadArrays((_b = G) === null || _b === void 0 ? void 0 : _b.hand, [{
      text: card,
      playerID: playerID
    }])
  });
}

var draw = {
  turn: {
    activePlayers: _core.ActivePlayers.ALL
  },
  moves: {
    drawCard: drawCard
  },
  onBegin: function (G, ctx) {
    var _a; // Draw Player's cards


    var tG = G;
    Object.keys(ctx.playOrder).forEach(function (playerId) {
      var _a;

      for (var index = 0; index < ((_a = G) === null || _a === void 0 ? void 0 : _a.cardLimit); index++) {
        tG = drawCard(tG, ctx, playerId);
      }
    });
    G = tG; // Draw black card

    var _b = (0, _drawCard.drawCard)((_a = G) === null || _a === void 0 ? void 0 : _a.blackCards),
        card = _b.card,
        deck = _b.deck;

    return __assign(__assign({}, G), {
      blackCards: deck,
      currentBlackCard: card
    });
  },
  //   endTurnIf: (G: IGame) => {
  //     const playersHand = filterPlayersCards(G?.hand, String(G?.playerID));
  //     return playersHand.length === G?.cardLimit;
  //   },
  endIf: function (G, ctx) {
    var _a, _b;

    return ((_a = G) === null || _a === void 0 ? void 0 : _a.hand.length) === ctx.numPlayers * ((_b = G) === null || _b === void 0 ? void 0 : _b.cardLimit);
  },
  next: "play"
};
exports.draw = draw;
},{"../../utils/drawCard":"pjnZ"}],"Gck9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vote = exports.voteCard = void 0;

var _core = require("boardgame.io/core");

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

var voteCard = function (G, ctx, card) {
  var _a;

  G.winnerCards = __spreadArrays((_a = G) === null || _a === void 0 ? void 0 : _a.winnerCards, [card]);
  G.isShowcasing = true;
};

exports.voteCard = voteCard;
var vote = {
  turn: {
    activePlayers: _core.ActivePlayers.ALL
  },
  moves: {
    voteCard: voteCard
  },
  endIf: function (G) {
    var _a;

    return ((_a = G) === null || _a === void 0 ? void 0 : _a.isShowcasing) === true;
  },
  next: "showcase"
};
exports.vote = vote;
},{}],"gb2d":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.play = exports.playCard = void 0;

var _core = require("boardgame.io/core");

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

var playCard = function (G, ctx, card) {
  var _a, _b, _c, _d, _e; // Don't allow czar to play card on their turn


  if (Number(card.playerID) !== Number((_a = G) === null || _a === void 0 ? void 0 : _a.currentCzarID)) {
    var cardIndex = (_b = G) === null || _b === void 0 ? void 0 : _b.hand.map(function (_a) {
      var text = _a.text;
      return text;
    }).indexOf(card.text); // Removing played card from hand

    var newHand = __spreadArrays((_c = G) === null || _c === void 0 ? void 0 : _c.hand.slice(0, cardIndex), (_d = G) === null || _d === void 0 ? void 0 : _d.hand.slice(cardIndex + 1));

    G.playedCards = __spreadArrays((_e = G) === null || _e === void 0 ? void 0 : _e.playedCards, [card]);
    G.hand = newHand;
  }
};

exports.playCard = playCard;

var endIf = function (G, ctx) {
  var _a, _b;

  return ((_a = G) === null || _a === void 0 ? void 0 : _a.playedCards.length) === (ctx.numPlayers - 1) * ((_b = G) === null || _b === void 0 ? void 0 : _b.currentBlackCard.pick);
};

var play = {
  turn: {
    activePlayers: _core.ActivePlayers.ALL
  },
  moves: {
    playCard: playCard
  },
  endIf: endIf,
  next: "vote"
};
exports.play = play;
},{}],"LRw8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replenishPlayersCards = replenishPlayersCards;

var _groupBy = _interopRequireDefault(require("lodash/groupBy"));

var _drawCard = require("../utils/drawCard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

function replenishPlayersCards(G) {
  var _a, _b, _c;

  var playersCards = (0, _groupBy.default)((_a = G) === null || _a === void 0 ? void 0 : _a.hand, "playerID");
  var newDeck = (_b = G) === null || _b === void 0 ? void 0 : _b.whiteCards;
  var newHand = (_c = G) === null || _c === void 0 ? void 0 : _c.hand;
  Object.keys(playersCards).forEach(function (playerID) {
    var _a, _b, _c;

    var playersHand = playersCards[playerID];
    var cardsNeeded = ((_a = G) === null || _a === void 0 ? void 0 : _a.cardLimit) - playersHand.length;

    if (cardsNeeded > 0) {
      var _d = (0, _drawCard.drawCards)((_b = G) === null || _b === void 0 ? void 0 : _b.whiteCards, cardsNeeded),
          cards = _d.cards,
          deck = _d.deck;

      var cardsWithPlayerID = cards.map(function (text) {
        return {
          text: text,
          playerID: playerID
        };
      });
      newDeck = deck;
      newHand = __spreadArrays((_c = G) === null || _c === void 0 ? void 0 : _c.hand, cardsWithPlayerID);
    }
  });
  return __assign(__assign({}, G), {
    whiteCards: newDeck,
    hand: newHand
  });
}
},{"../utils/drawCard":"pjnZ"}],"f38u":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showcase = exports.endShowCase = void 0;

var _core = require("boardgame.io/core");

var _replenishPlayersCards = require("../replenishPlayersCards");

var _drawCard = require("../../utils/drawCard");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var endShowCase = function (G) {
  G.isShowcasing = false;
};

exports.endShowCase = endShowCase;
var showcase = {
  turn: {
    activePlayers: _core.ActivePlayers.ALL
  },
  moves: {
    endShowCase: endShowCase
  },
  endIf: function (G) {
    var _a;

    return ((_a = G) === null || _a === void 0 ? void 0 : _a.isShowcasing) === false;
  },
  onEnd: function (G, ctx) {
    var _a, _b;

    var _c = (0, _drawCard.drawCard)((_a = G) === null || _a === void 0 ? void 0 : _a.blackCards),
        card = _c.card,
        deck = _c.deck;

    return __assign(__assign(__assign({}, G), (0, _replenishPlayersCards.replenishPlayersCards)(G)), {
      blackCards: deck,
      currentBlackCard: card,
      playedCards: [],
      currentCzarID: (((_b = G) === null || _b === void 0 ? void 0 : _b.currentCzarID) + 1) % ctx.numPlayers
    });
  },
  next: "draw"
};
exports.showcase = showcase;
},{"../replenishPlayersCards":"LRw8","../../utils/drawCard":"pjnZ"}],"NVEX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cah = void 0;

var _defaultState = require("./defaultState");

var _setup = require("./phases/setup");

var _draw = require("./phases/draw");

var _vote = require("./phases/vote");

var _play = require("./phases/play");

var _showcase = require("./phases/showcase");

var _groupBy = _interopRequireDefault(require("lodash/groupBy"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var cah = {
  setup: function (x, setupData) {
    if (setupData === void 0) {
      setupData = {};
    }

    return __assign(__assign({}, _defaultState.defaultState), setupData);
  },
  moves: {
    startGame: _setup.startGame,
    drawCard: _draw.drawCard,
    playCard: _play.playCard,
    voteCard: _vote.voteCard,
    endShowCase: _showcase.endShowCase
  },
  phases: {
    setup: _setup.setup,
    draw: _draw.draw,
    play: _play.play,
    vote: _vote.vote,
    showcase: _showcase.showcase
  },
  endIf: function (G) {
    var _a;

    var groupedWinnerCards = (0, _groupBy.default)((_a = G) === null || _a === void 0 ? void 0 : _a.winnerCards, "playerID");
    var winningCards = Object.keys(groupedWinnerCards).map(function (playerId) {
      return {
        playerId: playerId,
        winningCardCount: groupedWinnerCards[playerId].length
      };
    });
    var sortedWinningCards = (0, _sortBy.default)(winningCards, "winningCardCount").reverse();
    var leaderWinningCard = sortedWinningCards[0];
    return leaderWinningCard ? leaderWinningCard.winningCardCount >= G.winningCardAmount ? true : undefined : undefined;
  },
  onEnd: function (G) {
    G.gameOver = true;
  }
};
exports.cah = cah;
var _default = cah;
exports.default = _default;
},{"./defaultState":"mBUZ","./phases/setup":"vNg5","./phases/draw":"k4xJ","./phases/vote":"Gck9","./phases/play":"gb2d","./phases/showcase":"f38u"}],"eMEv":[function(require,module,exports) {
"use strict";

var _server = require("boardgame.io/server");

var _dotenv = _interopRequireDefault(require("dotenv"));

var Sentry = _interopRequireWildcard(require("@sentry/node"));

var _game = require("./../client/src/game/game");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _server.Server)({
  games: [_game.cah]
});

_dotenv.default.config();

const port = Number(process.env.PORT);
Sentry.init({
  dsn: 'https://b7c5fc6639b54250b329c849d3ddf7d2@o397091.ingest.sentry.io/5251277'
});
server.run({
  port
});
},{"./../client/src/game/game":"NVEX"}]},{},["eMEv"], null)
//# sourceMappingURL=/server.js.map
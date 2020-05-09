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
var cards = {
  Base: {
    black: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    name: "Base Set",
    white: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459]
  },
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
    text: "While the United States raced the Soviet Union to the moon,\n       the Mexican government funneled millions of pesos into research on _.'",
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
  }],
  order: ["Base"],
  whiteCards: ["Coat hanger abortions.", "Man meat.", "Autocannibalism.", "Vigorous jazz hands.", "Flightless birds.", "Pictures of boobs.", "Doing the right thing.", "The violation of our most basic human rights.", "Viagra&reg;.", "Self-loathing.", "Spectacular abs.", "A balanced breakfast.", "Roofies.", "Concealing a boner.", "Amputees.", "The Big Bang.", "Former President George W. Bush.", "The Rev. Dr. Martin Luther King, Jr.", "Smegma.", "Being marginalized.", "Cuddling.", "Laying an egg.", "The Pope.", "Aaron Burr.", "Genital piercings.", "Fingering.", "A bleached asshole.", "Horse meat.", "Fear itself.", "Science.", "Elderly Japanese men.", "Stranger danger.", "The terrorists.", "Praying the gay away.", "Same-sex ice dancing.", "Ethnic cleansing.", "Cheating in the Special Olympics.", "German dungeon porn.", "Bingeing and purging.", "Making a pouty face.", "William Shatner.", "Heteronormativity.", "Nickelback.", "Tom Cruise.", "The profoundly handicapped.", "The placenta.", "Chainsaws for hands.", "Arnold Schwarzenegger.", "An icepick lobotomy.", "Goblins.", "Object permanence.", "Dying.", "Foreskin.", "A falcon with a cap on its head.", "Hormone injections.", "Dying of dysentery.", "Sexy pillow fights.", "The invisible hand.", "A really cool hat.", "Sean Penn.", "Heartwarming orphans.", "The clitoris.", "The Three-Fifths compromise.", "A sad handjob.", "Men.", "Historically black colleges.", "A micropenis.", "Raptor attacks.", "Agriculture.", "Vikings.", "Pretending to care.", "The Underground Railroad.", "My humps.", "Being a dick to children.", "Geese.", "Bling.", "Sniffing glue.", "The South.", "An Oedipus complex.", "Eating all of the cookies before the AIDS bake-sale.", "Sexting.", "YOU MUST CONSTRUCT ADDITIONAL PYLONS.", "Mutually-assured destruction.", "Sunshine and rainbows.", "Count Chocula.", "Sharing needles.", "Being rich.", "Skeletor.", "A sausage festival.", "Michael Jackson.", "Emotions.", "Farting and walking away.", "The Chinese gymnastics team.", "Necrophilia.", "Spontaneous human combustion.", "Yeast.", "Leaving an awkward voicemail.", "Dick Cheney.", "White people.", "Penis envy.", "Teaching a robot to love.", "Sperm whales.", "Scrubbing under the folds.", "Panda sex.", "Whipping it out.", "Catapults.", "Masturbation.", "Natural selection.", "Opposable thumbs.", "A sassy black woman.", "AIDS.", "The KKK.", "Figgy pudding.", "Seppuku.", "Gandhi.", "Preteens.", "Toni Morrison's vagina.", "Five-Dollar Footlongs&trade;.", "Land mines.", "A sea of troubles.", "A zesty breakfast burrito.", "Christopher Walken.", "Friction.", "Balls.", "Dental dams.", "A can of whoop-ass.", "A tiny horse.", "Waiting 'til marriage.", "Authentic Mexican cuisine.", "Genghis Khan.", "Old-people smell.", "Feeding Rosie O'Donnell.", "Pixelated bukkake.", "Friends with benefits.", "The token minority.", "The Tempur-Pedic&reg; Swedish Sleep System&trade;.", "A thermonuclear detonation.", "Take-backsies.", "The Rapture.", "A cooler full of organs.", "Sweet, sweet vengeance.", "RoboCop.", "Keanu Reeves.", "Drinking alone.", "Giving 110%.", "Flesh-eating bacteria.", "The American Dream.", "Taking off your shirt.", "Me time.", "A murder most foul.", "The inevitable heat death of the universe.", "The folly of man.", "That thing that electrocutes your abs.", "Cards Against Humanity.", "Fiery poops.", "Poor people.", "Edible underpants.", "Britney Spears at 55.", "All-you-can-eat shrimp for $4.99.", "Pooping back and forth. Forever.", "Fancy Feast&reg;.", "Jewish fraternities.", "Being a motherfucking sorcerer.", "Pulling out.", "Picking up girls at the abortion clinic.", "The homosexual agenda.", "The Holy Bible.", "Passive-agression.", "Ronald Reagan.", "Vehicular manslaughter.", "Nipple blades.", "Assless chaps.", "Full frontal nudity.", "Hulk Hogan.", "Daddy issues.", "The hardworking Mexican.", "Natalie Portman.", "Waking up half-naked in a Denny's parking lot.", "God.", "Sean Connery.", "Saxophone solos.", "Gloryholes.", "The World of Warcraft.", "Homeless people.", "Scalping.", "Darth Vader.", "Eating the last known bison.", "Guys who don't call.", "Hot Pockets&reg;.", "A time travel paradox.", "The milk man.", "Testicular torsion.", "Dropping a chandelier on your enemies and riding the rope up.", "World peace.", "A salty surprise.", "Poorly-timed Holocaust jokes.", "Smallpox blankets.", "Licking things to claim them as your own.", "The heart of a child.", "Robert Downey, Jr.", "Lockjaw.", "Eugenics.", "A good sniff.", "Friendly fire.", "The taint; the grundle; the fleshy fun-bridge.", "Wearing underwear inside-out to avoid doing laundry.", "Hurricane Katrina.", "Free samples.", "Jerking off into a pool of children's tears.", "A foul mouth.", "The glass ceiling.", "Republicans.", "Explosions.", "Michelle Obama's arms.", "Getting really high.", "Attitude.", "Sarah Palin.", "The &Uuml;bermensch.", "Altar boys.", "My soul.", "My sex life.", "Pedophiles.", "72 virgins.", "Pabst Blue Ribbon.", "Domino's&trade; Oreo&trade; Dessert Pizza.", "A snapping turtle biting the tip of your penis.", "The Blood of Christ.", "Half-assed foreplay.", "My collection of high-tech sex toys.", "A middle-aged man on roller skates.", "Bitches.", "Bill Nye the Science Guy.", "Italians.", "A windmill full of corpses.", "Adderall&trade;.", "Crippling debt.", "A stray pube.", "Prancing.", "Passing a kidney stone.", "A brain tumor.", "Leprosy.", "Puppies!", "Bees?", "Frolicking.", "Repression.", "Road head.", "A bag of magic beans.", "An asymmetric boob job.", "Dead parents.", "Public ridicule.", "A mating display.", "A mime having a stroke.", "Stephen Hawking talking dirty.", "African children.", "Mouth herpes.", "Overcompensation.", "Riding off into the sunset.", "Being on fire.", "Tangled Slinkys.", "Civilian casualties.", "Auschwitz.", "My genitals.", "Not reciprocating oral sex.", "Lactation.", "Being fabulous.", "Shaquille O'Neal's acting career.", "My relationship status.", "Asians who aren't good at math.", "Alcoholism.", "Incest.", "Grave robbing.", "Hope.", "8 oz. of sweet Mexican black-tar heroin.", "Kids with ass cancer.", "Winking at old people.", "The Jews.", "Justin Bieber.", "Doin' it in the butt.", "A lifetime of sadness.", "The Hamburglar.", "Swooping.", "Classist undertones.", "New Age music.", "Not giving a shit about the Third World.", "The Kool-Aid Man.", "A hot mess.", "Tentacle porn.", "Lumberjack fantasies.", "The gays.", "Scientology.", "Estrogen.", "GoGurt&reg;.", "Judge Judy.", "Dick fingers.", "Racism.", "Surprise sex!", "Police brutality.", "Passable transvestites.", "The Virginia Tech Massacre.", "When you fart and a little bit comes out.", "Oompa-Loompas.", "A fetus.", "Obesity.", "Tasteful sideboob.", "Hot people.", "BATMAN!!!", "Black people.", "A gassy antelope.", "Sexual tension.", "Third base.", "Racially-biased SAT questions.", "Porn stars.", "A Super Soaker&trade; full of cat pee.", "Muhammed (Praise Be Unto Him).", "Puberty.", "A disappointing birthday party.", "An erection that lasts longer than four hours.", "White privilege.", "Getting so angry that you pop a boner.", "Wifely duties.", "Two midgets shitting into a bucket.", "Queefing.", "Wiping her butt.", "Golden showers.", "Barack Obama.", "Nazis.", "A robust mongoloid.", "An M. Night Shyamalan plot twist.", "Getting drunk on mouthwash.", "Lunchables&trade;.", "Women in yogurt commercials.", "John Wilkes Booth.", "Powerful thighs.", "Mr. Clean, right behind you.", "Multiple stab wounds.", "Cybernetic enhancements.", "Serfdom.", "Kanye West.", "Women's suffrage.", "Children on leashes.", "Harry Potter erotica.", "The Dance of the Sugar Plum Fairy.", "Lance Armstrong's missing testicle.", "Parting the Red Sea.", "The Amish.", "Dead babies.", "Child beauty pageants.", "AXE Body Spray.", "Centaurs.", "Copping a feel.", "Grandma.", "Famine.", "The Trail of Tears.", "The miracle of childbirth.", "Finger painting.", "A monkey smoking a cigar.", "The Make-A-Wish&reg; Foundation.", "Anal beads.", "The Force.", "Kamikaze pilots.", "Dry heaving.", "Active listening.", "Ghosts.", "The Hustle.", "Peeing a little bit.", "Another goddamn vampire movie.", "Shapeshifters.", "The Care Bear Stare.", "Hot cheese.", "A mopey zoo lion.", "A defective condom.", "Teenage pregnancy.", "A Bop It&trade;.", "Expecting a burp and vomiting on the floor.", "Horrifying laser hair removal accidents.", "Boogers.", "Unfathomable stupidity.", "Breaking out into song and dance.", "Soup that is too hot.", "Morgan Freeman's voice.", "Getting naked and watching Nickelodeon.", "MechaHitler.", "Flying sex snakes.", "The true meaning of Christmas.", "My inner demons.", "Pac-Man uncontrollably guzzling cum.", "My vagina.", "A homoerotic volleyball montage.", "Actually taking candy from a baby.", "Crystal meth.", "Exactly what you'd expect.", "Natural male enhancement.", "Passive-aggressive Post-it notes.", "Inappropriate yodeling.", "Lady Gaga.", "The Little Engine That Could.", "Vigilante justice.", "A death ray.", "Poor life choices.", "A gentle caress of the inner thigh.", "Embryonic stem cells.", "Nicolas Cage.", "Firing a rifle into the air while balls deep in a squealing hog.", "Switching to Geico&reg;.", "The chronic.", "Erectile dysfunction.", "Home video of Oprah sobbing into a Lean Cuisine&reg;.", "A bucket of fish heads.", "50,000 volts straight to the nipples.", "Being fat and stupid.", "Hospice care.", "A pyramid of severed heads.", "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.", "A subscription to Men's Fitness.", "Crucifixion.", "A micropig wearing a tiny raincoat and booties.", "Some god-damn peace and quiet.", "Used panties.", "A tribe of warrior women.", 'The penny whistle solo from "My Heart Will Go On."', "An oversized lollipop.", "Helplessly giggling at the mention of Hutus and Tutsis.", "Not wearing pants.", "Consensual sex.", "Her Majesty, Queen Elizabeth II.", "Funky fresh rhymes.", "The art of seduction.", "The Devil himself.", "Advice from a wise, old black man.", "Destroying the evidence.", "The light of a billion suns.", "Wet dreams.", "Synergistic management solutions.", "Growing a pair.", "Silence.", "An M16 assault rifle.", "Poopy diapers.", "A live studio audience.", "The Great Depression.", "A spastic nerd.", "Rush Limbaugh's soft, shitty body.", "Tickling Sean Hannity, even after he tells you to stop.", "Stalin.", "Brown people.", "Rehab.", "Capturing Newt Gingrich and forcing him to dance in a monkey suit.", "Battlefield amputations.", "An uppercut.", "Shiny objects.", "An ugly face.", "Menstrual rage.", "A bitch slap.", "One trillion dollars.", "Chunks of dead prostitute.", "The entire Mormon Tabernacle Choir.", "The female orgasm.", "Extremely tight pants.", "The Boy Scouts of America.", "Stormtroopers.", "Throwing a virgin into a volcano."]
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
  blackCards: _cards.cards.blackCards,
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
},{"../../utils/drawCard":"pjnZ"}],"LRw8":[function(require,module,exports) {
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
},{"../utils/drawCard":"pjnZ"}],"Gck9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vote = exports.voteCard = void 0;

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

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

var voteCard = function (G, ctx, card) {
  var _a, _b;

  G.currentCzarID = (((_a = G) === null || _a === void 0 ? void 0 : _a.currentCzarID) + 1) % ctx.numPlayers;
  G.winnerCards = __spreadArrays((_b = G) === null || _b === void 0 ? void 0 : _b.winnerCards, [card]);
  G.playedCards = [];
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

    return ((_a = G) === null || _a === void 0 ? void 0 : _a.playedCards.length) === 0;
  },
  onEnd: function (G) {
    var _a;

    var _b = (0, _drawCard.drawCard)((_a = G) === null || _a === void 0 ? void 0 : _a.blackCards),
        card = _b.card,
        deck = _b.deck;

    return __assign(__assign(__assign({}, G), (0, _replenishPlayersCards.replenishPlayersCards)(G)), {
      blackCards: deck,
      currentBlackCard: card
    });
  },
  next: "draw"
};
exports.vote = vote;
},{"../replenishPlayersCards":"LRw8","../../utils/drawCard":"pjnZ"}],"gb2d":[function(require,module,exports) {
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
},{}],"NVEX":[function(require,module,exports) {
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
    voteCard: _vote.voteCard,
    playCard: _play.playCard
  },
  phases: {
    setup: _setup.setup,
    draw: _draw.draw,
    play: _play.play,
    vote: _vote.vote
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
},{"./defaultState":"mBUZ","./phases/setup":"vNg5","./phases/draw":"k4xJ","./phases/vote":"Gck9","./phases/play":"gb2d"}],"eMEv":[function(require,module,exports) {
"use strict";

var _server = require("boardgame.io/server");

var _game = require("./../client/src/game/game");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _server.Server)({
  games: [_game.cah]
});

_dotenv.default.config();

const port = Number(process.env.PORT);
server.run({
  port
});
},{"./../client/src/game/game":"NVEX"}]},{},["eMEv"], null)
//# sourceMappingURL=/server.js.map
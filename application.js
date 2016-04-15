$(document).ready(function(){
  var noun = [];
  var adjective = [];
  var adverb = [];
  var verb = [];
  var currStory;
  var userNouns = [];
  var userAdjectives = [];
  var userAdverbs = [];
  var userVerbs = [];

  function toggler() {
    $('#everything').toggle();
    $('#login_info').toggle();
  }
  $('.login_button').click(function(evt){
    var userName = $('#username').val();
    var password = $('#password').val();
      if (userName === "bob123" && password === "java") {
        toggler();
        evt.stopImmediatePropagation();
      }
  });

  function clean(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }
  }

  function reset(){
    noun.length = 0;
    adjective.length = 0;
    adverb.length = 0;
    verb.length = 0;
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}
  function bokchop() {
    shuffle(noun);
    shuffle(adjective);
    shuffle(adverb);
    shuffle(verb);
  }

  $('#nouns').on('keyup change', function(){
    var inputNouns = $(this).val();
    userNouns = inputNouns.split(',');
    clean(noun);
  });

  $('#adjectives').on('keyup change', function(){
    var inputAdj = $(this).val();
    userAdjectives = inputAdj.split(',');
    clean(adjective);
  });

  $('#adverbs').on('keyup change', function(){
    var inputAdverbs = $(this).val();
    userAdverbs = inputAdverbs.split(',');
    clean(adverb);
  });

  $('#verbs').on('keyup change', function(){
    var inputVerbs = $(this).val();
    userVerbs = inputVerbs.split(',');
    clean(verb);
  });
  function fillWords(){
    var randomNoun;
    var randomAdjective;
    var randomAdverb;
    var randomVerb;
    noun = userNouns.slice(0);
    adjective = userAdjectives.slice(0);
    adverb = userAdverbs.slice(0);
    verb = userVerbs.slice(0);
    while(noun.length < 4){
      randomNoun = defaultNouns[Math.floor((Math.random()*25)+0)];
      noun.push(randomNoun);
    }
    while(adjective.length < 4){
      randomAdjective = defaultAdjectives[Math.floor((Math.random()*25)+0)];
      adjective.push(randomAdjective);
    }
    while(adverb.length < 4){
      randomAdverb = defaultAdverbs[Math.floor((Math.random()*25)+0)];
      adverb.push(randomAdverb);
    }
    while(verb.length < 4){
      randomVerb = defaultVerbs[Math.floor((Math.random()*25)+0)];
      verb.push(randomVerb);
    }
  }
  $('input:radio').change(function(evt){
    var id = $(this).attr('id');
    currStory = id;
    reset();
    fillWords();
    bokchop();
    evt.stopImmediatePropagation();

    if (id === 'pirate') {
      currStory = 'Ye can always pretend to be a bloodthirsty ' + noun[0] + ' threatening everyone by waving yer ' + adjective[0] + ' sword in the air, but until ye learn to ' + verb[0] + ' like a pirate, ye’ll never be ' + adverb[0] + ' accepted as an authentic ' + noun[1] + '. So here’s what ye do: Cleverly work into yer daily conversations ' + adjective[1] + ' pirate phrases such as, “Ahoy there, ' + noun[2] + '!” and “Shiver me ' + noun[3] + '!”. Once ye have the lingo down, yer ready to ' + verb[1] + ' treasures, and brave the ' + adjective[2] + ' sea!';
    }else if (id === 'first_day') {
      currStory = 'On the first day of attending World Tech Academy, I felt so ' + adverb[0] + '. I put on my favorite new shirt- a shirt with a ' + adjective[0] + ' ' + noun[0] + '. My mom made me my favorite breakfast, ' + noun[1] + ' and eggs.  My brother told me my teacher was really a ' + noun[2] + '. He had him last year and said he lets kids ' + verb[0] + ' in class. When I finally arrived to class I sat next to Jared who is ' + adjective[1] + '! He told me his favorite hobby was ' + verb[1] + '. After all of my ' + adjective[2] + ' worrying, I finally thought everything was going to be ' + adjective[3] + '.';
    }else if (id === 'wta_cafe') {
      currStory = 'Here at World Tech Academy our cafeteria has really ' + adjective[0] + ' food. Just thinking about it makes my stomach ' + verb[0] + '. The spaghetti is ' + adjective[1] + ' and tastes like ' + noun[0] + '. One day, I swear one of my meatballs started to ' + verb[1] + '! The turkey tacos are totally ' + adjective[2] + ' and look kind of like old ' + noun[1] + ', My friend Sam actually likes the meatloaf, even though it’s ' + adjective[3] + '. I call it “mystery meatloaf” and think that its really made of ' + noun[2] + '.';
    }
    $( "#story" ).html(currStory);
  });
});

  var defaultNouns = ['time',
  'person',
  'year',
  'way',
  'day',
  'thing',
  'man',
  'world',
  'life',
  'hand',
  'part',
  'child',
  'eye',
  'woman',
  'place',
  'work',
  'week',
  'case',
  'point',
  'government',
  'company',
  'number',
  'group',
  'problem',
  'fact',];

  var defaultAdjectives = ['good',
  'new',
  'first',
  'last',
  'long',
  'great',
  'little',
  'own',
  'other',
  'old',
  'right',
  'big',
  'high',
  'different',
  'small',
  'large',
  'next',
  'early',
  'young',
  'important',
  'few',
  'public',
  'bad',
  'same',
  'able',];

  var defaultAdverbs = ['up',
  'so',
  'out',
  'just',
  'now',
  'how',
  'then',
  'more',
  'also',
  'here',
  'well',
  'only',
  'very',
  'even',
  'back',
  'there',
  'down',
  'still',
  'in',
  'as',
  'too',
  'when',
  'never',
  'really',
  'most',];

  var defaultVerbs = ['be',
  'have',
  'do',
  'say',
  'get',
  'make',
  'go',
  'know',
  'take',
  'see',
  'come',
  'think',
  'look',
  'want',
  'give',
  'use',
  'find',
  'tell',
  'ask',
  'work',
  'seem',
  'feel',
  'try',
  'leave',
  'call',];

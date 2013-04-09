var p1key;
var p1val;
var p2key;
var p2val;

var gameKeys = {
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    'a': 65,
    'b': 66,
    'c': 67,
    'd': 68,
    'e': 69,
    'f': 70,
    'g': 71,
    'h': 72,
    'i': 73,
    'j': 74,
    'k': 75,
    'l': 76,
    'm': 77,
    'n': 78,
    'o': 79,
    'p': 80,
    'q': 81,
    'r': 82,
    's': 83,
    't': 84,
    'u': 85,
    'v': 86,
    'w': 87,
    'x': 88,
    'y': 89,
    'z': 90,
    '=': 187,
    ',': 188,
    '/': 191,
    '\\': 220,
    '[': 219,
    ']': 221,
    '-': 189,
    '`': 192,
    '\'': 222,
    ';': 186,
    '17-9': 56,
    'SQRT(81)': 57,
    '8 % 3': 50,
    'pi.floor' : 51,
    '2**3': 56,
    '2 += 3': 53,
    '891/891': 49
}

var catSources = ['/img/nyan.gif',
                  '/img/nyaninja.gif',
                  '/img/pikanyan.gif',
                  '/img/pumpkin.gif',
                  '/img/rasta.gif',
                  '/img/retro.gif',
                  '/img/starsheep.gif',
                  '/img/tacnayn.gif',
                  '/img/tacodog.gif',
                  '/img/zombie.gif',
                  '/img/uhmurica.gif'];




function randomKey(obj) {
    var ret;
    var c = 0;
    for (var key in obj)
        if (Math.random() < 1/++c)
           ret = key;
    return ret;
}

function newKeys(player) {
  if (player === 1) {
    p1key = randomKey(gameKeys);
    p1val = gameKeys[p1key];
  $('.keys#player1_key').text(p1key)
  }
  if (player === 2) {
    p2key = randomKey(gameKeys);
    p2val = gameKeys[p2key];
  $('.keys#player2_key').text(p2key)
  }
}


$(document).ready(function() {
    newKeys(1);
    newKeys(2);
      
  $(document).on('keyup', function(event){
    var keyPress = event.keyCode

    var cat1pos = parseInt($('#cat1').css('left'));
    var cat2pos = parseInt($('#cat2').css('left'));
    

    if (keyPress === p1val) {
      $('#cat1').css( {left: (cat1pos += 30)});
      newKeys(1);
      
      if (cat1pos > 700) {
      $('#cat1').attr('src','/img/technyancolor.gif');
      $('.keybox_p2').effect("explode", 1000);
      $('.keys#player1_key').text('has won!');
      };

    };
    

    if (keyPress === p2val) {
      $('#cat2').css( {left: (cat2pos += 30)});
      newKeys(2);

      if (cat2pos > 700) {
      $('#cat2').attr('src','/img/technyancolor.gif');
      $('.keybox_p1').effect("explode", 1000);
      $('.keys#player2_key').text('has won!');
      };
    };    

    
    // console.log(carynt1pos);
  });

  var p1char = 0;
  var p2char = 1;
  var max = catSources.length;
  $('.nyancat').on('click', function(event){

    if ($(this)[0].id === 'cat1') {
      if (p1char === max) { p1char = 0; }
      else { p1char += 1; }
      $('#cat1').attr('src',catSources[p1char]);
      console.log(p1char);
    } 
    if ($(this)[0].id === 'cat2') {
      if (p2char === max) { p2char = 0 }
      else { p2char += 1;}
      $('#cat2').attr('src',catSources[p2char]);
      console.log(p2char);
    }
    // $(this).attr('src',)

  });


});





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
    'Equals': 187,
    'Comma': 188,
    'Slash': 191,
    'Backslash': 220,
    'OpenBracket': 219,
    'CloseBracket': 221,
    'Minus': 189,
    'BackTick': 192,
    'Apostrophe': 222,
    'Semicolon': 186,
    '17 minus 9': 56,
    'SQRT(81)': 57,
    '8 % 3': 50


}

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
      $('#cat1').css( {left: (cat1pos += 10)});
      newKeys(1);
    };
    

    if (keyPress === p2val) {
      $('#cat2').css( {left: (cat2pos += 10)});
      newKeys(2);
    };    

    
    // console.log(carynt1pos);
  });


});





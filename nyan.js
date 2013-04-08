var key = {
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


$(document).ready(function() {
  $(document).on('keyup', function(event){
    // console.log(event.keyCode);
    console.log(randomKey(key));


    var cat1pos = parseInt($('#cat1').css('left'));
    // console.log(cat1pos);

    $('#cat1').css( {left: (cat1pos += 3)});
    // console.log(carynt1pos);
  });


});





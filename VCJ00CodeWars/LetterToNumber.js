function alphabetPosition(text) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var cond = /[a-zA-Z]/gi;
  var chars = text.toLowerCase().match(cond);
  if (!chars){chars = []};
  var num=[];

  for(var i=0; i<chars.length; i++){
    num.push(parseInt(alphabet.indexOf(chars[i])+1));
  }

  return num.join(' ');
}

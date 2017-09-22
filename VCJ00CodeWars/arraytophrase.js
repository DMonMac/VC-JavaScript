function formatWords(words){
  if(!words){words = []}
  words = words.filter(Boolean)

  switch(true){
    case words.length > 2:
      return words.slice(0,(words.length-1)).join(', ') + ' and ' + words.pop()
      break;
    case words.length == 2:
      return words[words.length-2] + ' and ' + words[words.length-1]
      break;
    default:
      return words.toString()
      break;
  }

}

// Best Ans
function formatWords(words){
  if (!words) return "";
  return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
}

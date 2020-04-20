function anagram(word, list) {
  return list.filter(function (candidate) {
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(source, target) {
  var sourceLetters = source.toLowerCase().split('').sort();
  var targetLetters = target.toLowerCase().split('').sort();

  return sourceLetters.join() === targetLetters.join();
}

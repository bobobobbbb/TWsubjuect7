module.exports = function main(email, suffixes) {
  // Write your code here
  var thissuffixes = email.split('@')[1]
  for (var i = 0; i < suffixes.length; i++) {
    if (thissuffixes == suffixes[i]) return true
  }
  return false
};

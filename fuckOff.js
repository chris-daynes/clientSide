module.exports = function fuckOff () {
  var don = document.getElementById('donTweets')
  console.log('This is the don ',don);

  while(don.firstChild) {
    don.removeChild(don.firstChild)
  }

  var hil = document.getElementById('hilTweets')
  while(hil.firstChild) {
    hil.removeChild(hil.firstChild)
  }
}

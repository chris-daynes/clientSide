var h = require('hyperscript')

module.exports = function renderTweets(tweetInfo) {
  var author = tweetInfo.author
  var tweet = tweetInfo.text
  var city = tweetInfo.city
  var date = tweetInfo.date
  var subject = tweetInfo.subject
  if (subject === "trump") {
    return h('div', {id: 'donTweets'}, [
      h('p', {id: 'tweet'}, '"', tweet, '"'),
      h('p', {id: 'author'}, '- ', author),
      h('p', {id: 'city'}, city),
      h('p', {id: 'date'}, date)])
  } else {
    return h('div', {id: 'hilTweets'}, [
      h('p', {id: 'tweet'}, '"', tweet, '"'),
      h('p', {id: 'author'}, '- ', author),
      h('p', {id: 'city'}, city),
      h('p', {id: 'date'}, date)])
  }
}

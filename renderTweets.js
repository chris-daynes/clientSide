var h = require('hyperscript')

module.exports = function renderTweets(tweetInfo) {
  console.log("THIS IS TWEET OBJECT", tweetInfo);
  var author = tweetInfo.author
  var tweet = tweetInfo.text
  var city = tweetInfo.city
  var date = tweetInfo.date
  var subject = tweetInfo.subject
  console.log("THIS IS THE SUBJECT", subject)
  console.log("THIS IS THE DATE", date);
  // console.log('This is the tweet ', tweet);
  if (subject === "Trump") {
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

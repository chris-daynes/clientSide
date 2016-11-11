var h = require('hyperscript')
var request = require('superagent')
var {getTweets} = require('./getTweets')
var endpoint = 'https://election-tweets-dev.herokuapp.com/api/v1/tweets'

 var main = document.querySelector('main')
console.log('welcome to election_tweets')

var don = h('div', {id: "don"},

  h('h1.r', 'Donald Trump'),
  getTweets(),
  h('img', {src: 'images/trump.png'})

)

var hil = h('div', {id: "hil"}, [
  h('h1.d', 'Hillary Clinton'),
  // getTweets(),
  h('img', {src: 'images/hilary.png'}),
  // h('button', {onclick: getTweets}, 'Click for tweet')
]
)

main.appendChild(don)
main.appendChild(hil)

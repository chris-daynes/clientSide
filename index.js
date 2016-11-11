var h = require('hyperscript')
var {getTweets} = require('./getTweets')
var fuckOff = require('./fuckOff')

var main = document.querySelector('main')
console.log('welcome to election_tweets')

var don = h('div', {id: 'don'},

  h('h1.r', 'Donald Trump'),
  setInterval(function () {
    fuckOff()
    getTweets()
  }, 4000),

  h('img', {src: 'images/trump.png'})

)

var hil = h('div', {id: 'hil'}, [
  h('h1.d', 'Hillary Clinton'),
  h('img', {src: 'images/hilary.png'})
]
)

main.appendChild(don)
main.appendChild(hil)

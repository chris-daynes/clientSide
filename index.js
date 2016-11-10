var h = require('hyperscript')

 var main = document.querySelector('main')
console.log('welcome to election_tweets')

var don = h('div', {id: "don"},

  h('h1.r', 'Donald Trump'),
  h('img', {src: '../images/trump.png'})

)

var hil = h('div', {id: "hil"},

  h('h1.d', 'Hillary Clinton'),
  h('img', {src: '../images/hilary.png'})

)


main.appendChild(don)
main.appendChild(hil)

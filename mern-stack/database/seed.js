const uuid = require('uuid/v4')

module.exports = [
  {
    id: uuid(),
    question: 'What is a closure?',
    answer: 'A stateful function.'
  },
  {
    id: uuid(),
    question: 'What is prototypal inheritance?',
    answer: 'Behavior delegation to linked objects.'
  },
  {
    id: uuid(),
    question: 'What is truthiness?',
    answer: 'The Boolean representation of a value.'
  }
]
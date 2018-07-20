const { Router } = require('express')

module.exports = function flashCardsRouter(collection) {

  const router = new Router()

  router.get('/', (req, res, next) => {
    collection
      .find()
      .toArray()
      .then(cards => res.json(cards))
      .catch(err => next(err))
  })

  return router
}
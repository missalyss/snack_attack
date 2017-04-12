
exports.seed = function(knex, Promise) {
  return knex('snacks').del()
    .then(function () {
      return knex('snacks').insert([
        {id: 1, name: 'beer', img_url:'https://www.drinkpreneur.com/wp-content/uploads/2017/04/drinkpreneur_2016-01-26-1453821995-8643361-beermain.jpg', rating: '****', review: 'Light (but not too light) and not too hoppy. Pales, lagers, and ambers.'},
        {id: 2, name: 'wine', img_url:'http://www.stuartcoffeeco.com/wp-content/uploads/2016/12/wine.jpg', rating: '****', review: 'Red, red wine. It\'s up to you. All I can do, I\'ve done. Memories won\'t go.'},
        {id: 3, name: 'Tequila Sunrise', img_url:'http://farm8.staticflickr.com/7252/7594170156_46bf574865_o.jpg', rating: '*****', review: 'Great snack for breakfast or really, really early in the morning.'}
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('snacks_id_seq', (SELECT MAX (id) FROM snacks))"
      )
    }).catch(function (error) {
      console.error("Oops! ", error);
    })
}

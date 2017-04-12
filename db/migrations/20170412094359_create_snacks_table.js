

exports.up = function(knex, Promise) {
  return knex.schema.createTable('snacks', function (t) {
    t.increments()
    t.string('name').notNullable()
    t.text('img_url')
    t.string('rating').defaultTo('***')
    t.text('review')
    t.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snacks')
};

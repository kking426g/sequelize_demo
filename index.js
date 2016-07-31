var db = require('./config');
console.log(db)

db.connection.sync().then(function () {
  return db.Game.create({
    game_guid: '1000000000',
    g_name: 'testgame',
    g_p_less: 2,
    g_p_more: 4
  });
 });



/*
User.findAll().then(function(users) {
  console.log(users)
})


connection.sync({
  logging: console.log
});

  Game.sync({force: true}).then(function () {
  return Game.create({
    game_guid: '123456789012345',
    g_name: 'flip game',
    g_p_less: 2,
    g_p_more: 4
  });
});*/
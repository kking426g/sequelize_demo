var Sequelize = require("sequelize");

var connection = new Sequelize('multi-screen', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});

var User = connection.define(
    'User', 
    {
        user_guid: {
            field: 'user_uuid',
            primaryKey: true,
            type: Sequelize.STRING,
            allowNull: false
        },
        account: {
            field: 'account',
            type: Sequelize.STRING,
            allowNull: false
        },
        pic: {
            field: 'pic',
            type: Sequelize.STRING,
            allowNull: true
        }
    },        
    {
        tableName: 'User',
        timestamps: false,
        freezeTableName: true
    }
), 

Inning_user = connection.define(
  'Inning_user',
  {   
    iu_guid: {
      field: 'iu_guid',
      type: Sequelize.STRING,
      allowNull: false  
    },
    inning_gref: {
      field:'inning_gref',
      type: Sequelize.STRING,
      allowNull: true
    },
    game_guid: {
      field:'game_guid',
      type: Sequelize.STRING,
      allowNull: true
    },
    user_gref: {
      field:'user_gref',
      type: Sequelize.STRING,
      allowNull: true
    },
    user_account: {
      field:'user_account',
      type: Sequelize.STRING,
      allowNull: true
    },
    user_pic: {
      field:'user_pic',
      type: Sequelize.STRING,
      allowNull: true
    },
    online: {
      field: 'online',
      type: Sequelize.BOOLEAN,
      allowNull: false
    }   
  },        
    {
        tableName: 'Inning_user',
        timestamps: false,
        freezeTableName: true
    }
),

Inning = connection.define(
  'Inning',
  {
    inning_guid: {
      field: 'inning_guid',
      type: Sequelize.STRING,
      allowNull: false  
    },
    g_gref: {
      field:'g_gref',
      type: Sequelize.STRING,
      allowNull: true
    },
    score: {
      field: 'score',
      type: Sequelize.INTEGER,
      allowNull: true
    }   
  },        
    {
        tableName: 'Inning',
        timestamps: false,
        freezeTableName: true
    }
),

Game = connection.define(
  'Game',
  {
    game_guid: {
      type: Sequelize.BIGINT
    },
    g_name: {
      type: Sequelize.STRING
    },
    g_p_less: {
      type: Sequelize.INTEGER
    },
    g_p_more: {
      type: Sequelize.INTEGER
    }
  }
);


module.exports = {
  User: User,
  Inning_user: Inning_user,
  Inning: Inning,
  Game: Game,
  connection: connection

};

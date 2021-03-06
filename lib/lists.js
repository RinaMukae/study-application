const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/yoji_jukugo',
  {
    logging: false,
    
  });
const lists = sequelize.define('lists', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  jukugo: {
    type: Sequelize.CHAR(4)
  },
  read: {
    type: Sequelize.TEXT
  },
  mean: {
    type: Sequelize.TEXT
  }
}, {
  freezeTableName: false,
  timestamps: false
});

lists.sync();

module.exports = lists;

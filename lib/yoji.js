const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/yoji_jukugo',
  {
    logging: false,
    operatorsAliases: false 
  });
const yoji = sequelize.define('yoji', {
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
  freezeTableName: true,
  timestamps: true
});

yoji.sync();

module.exports = yoji;

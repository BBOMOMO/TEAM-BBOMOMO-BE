const Sequelize = require('sequelize')

module.exports = class Chat extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        chatId: {
          primaryKey: true,
          unique: true,
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        message: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        userId: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Chat',
        tableName: 'Chats',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    )
  }
  static associate(db) {
    db.Chat.belongsTo(db.ChatRoom, {
      foreignKey: 'roomId',
      sourceKey: 'roomId',
      onDelete: 'CASCADE',
    })
  }
}

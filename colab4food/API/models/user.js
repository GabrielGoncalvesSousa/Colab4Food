module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      id_user: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_tipoUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_user',
          key: 'id_tipoUser',
        },
      },

      nomeUser: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'user',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id_user' },
          ],
        },
        // {
        //   name: 'id_tipoUser_idx',
        //   using: 'BTREE',
        //   fields: [
        //     { name: 'id_tipoUser' },
        //   ],
        // },
      ],
    }
  );
};

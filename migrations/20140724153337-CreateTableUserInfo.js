module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('user_infos', {
      sex: {type: DataTypes.STRING, allowNull: false}
    })
    // add altering commands here, calling 'done' when finished
    done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('user_infos');
    done()
  }
}

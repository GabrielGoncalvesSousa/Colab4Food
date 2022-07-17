const { app, sequelize } = require('./mainIndex');

app.listen(3000, async () => {
    console.log('Server running');

    await sequelize.sync({ force: true, logging: true }).then(() => {
        console.log(`Database synced`);
    });
});

const DrinkController = require('../controllers/drink.controller');
module.exports = (app) => {
    app.post('/api/drink', DrinkController.createDrink)
    app.get('/api/drink', DrinkController.getAllDrinks)
    app.get('/api/drink/:_id', DrinkController.getOneDrink)
    app.put('/api/drink/:_id', DrinkController.updateDrink)
    app.delete('/api/drink/:_id', DrinkController.deleteDrink)
}
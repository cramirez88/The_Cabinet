const Drink = require('../models/drink.model');    

module.exports.createDrink = (request, response) => {
    const {name, description, instructions} = request.body
    Drink.create({
      name: name,
      description: description,
      instructions: instructions
    }) 
        .then(drink => response.json(drink))
        .catch(err => response.status(400).json(err));
}

// Get all drinks

module.exports.getAllDrinks = (request, response) => {
  Drink.find({})
  .then(drink => {
    console.log(drink)
    response.json(drink)
  })
  .catch(err => {
    console.log(err)
    response.status(400).json(err)
  })
}


// Edit Drinks

module.exports.updateDrink = (request, response) => {
  Drink.findOneAndUpdate({_id: request.params._id}, request.body, {new: true, runValidators:true})
  .then(updatedDrink => response.json(updatedDrink))
  .catch(err => response.status(400).json(err))
}


// get one drink

module.exports.getOneDrink = (req, res) => {
  Drink.findOne({_id: req.params._id})
  .then(oneDrink => res.json(oneDrink))
  .catch(err => res.status(400).json(err))
}

// delete a drink

module.exports.deleteDrink = (req, res) => {
  Drink.deleteOne({_id: req.params._id})
  .then(deletedDrink => res.json(deletedDrink))
  .catch(err => res.status(400).json(err))
}

const mongoose = require('mongoose')

const DrinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      'You must enter a name for the drink'
    ]
  },
  description: {
    type: String,
    required: [
      true, 
      'You must enter a description of the drink'
    ],
    minLength: [3, 'The description of the drink must be at least 3 characters']
  },
  instructions: {
    type: String,
    required: [
      true,
      'You must include the instructions to make your drink'
    ]
  }
}, {timestamps: true})
module.exports = mongoose.model('Drinks', DrinkSchema)
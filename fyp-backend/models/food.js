const mongoose = require('mongoose')
const foodItemSchema = new mongoose.Schema({
    foodId: {
        type: String,
        required :true
    },
    name: {
        type: String,
        required:true
    },
    quantity:{
        type: String,
        required:true
    },
    calories: {
        type: Number,
        required:true
    },
    proteins: {
        type: Number,
        required:true
    },
    
    carbohydrates: {
        type: Number,
        required:true
    },
    fats: {
        type: Number,
        required:true
    },
    category: {
        type: String,
        required:true
    },
}, {
    timestamps: true
});

// Create the FoodItem model
const FoodItem = mongoose.model("FoodItem", foodItemSchema);

// Array of food items
const foodItems = [

  {
    foodId: '0',
    name: 'chapathi',
    quantity: '1 piece',
    calories: 104,
    proteins: 3.3,
    carbohydrates: 20.6,
    fats: 1.9,
    category: 'main course'
  },
  {
    foodId: '1',
    name: 'rasagulla',
    quantity: '1 piece',
    calories: 186,
    proteins: 3.3,
    carbohydrates: 30.1,
    fats: 6.1,
    category: 'dessert'
  },
  {
    foodId: '2',
    name: 'biriyani',
    quantity: '1 plate',
    calories: 589,
    proteins: 21,
    carbohydrates: 85,
    fats: 20,
    category: 'main course'
  },
  {
    foodId: '3',
    name: 'uttapam',
    quantity: '1 piece',
    calories: 160,
    proteins: 4,
    carbohydrates: 26,
    fats: 4,
    category: 'main course'
  },
  {
    foodId: '4',
    name: 'palak paneer',
    quantity: '1 serving',
    calories: 280,
    proteins: 12,
    carbohydrates: 12,
    fats: 20,
    category: 'main course'
  },
  {
    foodId: '5',
    name: 'poha',
    quantity: '1 serving',
    calories: 250,
    proteins: 10,
    carbohydrates: 45,
    fats: 5,
    category: 'breakfast'
  },
  {
    foodId: '6',
    name: 'khichdi',
    quantity: '1 serving',
    calories: 300,
    proteins: 10,
    carbohydrates: 50,
    fats: 6,
    category: 'main course'
  },
  {
    foodId: '7',
    name: 'omlet',
    quantity: '1 piece',
    calories: 155,
    proteins: 13,
    carbohydrates: 2,
    fats: 11,
    category: 'breakfast'
  },
  {
    foodId: '8',
    name: 'rice',
    quantity: '1 cup',
    calories: 205,
    proteins: 4,
    carbohydrates: 45,
    fats: 0.4,
    category: 'main course'
  },
  {
    foodId: '9',
    name: 'Daal makhni',
    quantity: '1 serving',
    calories: 260,
    proteins: 13,
    carbohydrates: 34,
    fats: 7,
    category: 'main course'
  },
  {
    foodId: '10',
    name: 'rajma',
    quantity: '1 serving',
    calories: 215,
    proteins: 10,
    carbohydrates: 30,
    fats: 6,
    category: 'main course'
  },
  {
    foodId: '11',
    name: 'poori',
    quantity: '1 piece',
    calories: 200,
    proteins: 5,
    carbohydrates: 30,
    fats: 7,
    category: 'main course'
  },
  {
    foodId: '12',
    name: 'channa masala',
    quantity: '1 serving',
    calories: 270,
    proteins: 12,
    carbohydrates: 35,
    fats: 8,
    category: 'main course'
  },
  {
    foodId: '13',
    name: 'daal',
    quantity: '1 serving',
    calories: 180,
    proteins: 10,
    carbohydrates: 25,
    fats: 4,
    category: 'main course'
  },
  {
    foodId: '14',
    name: 'sambar',
    quantity: '1 serving',
    calories: 120,
    proteins: 5,
    carbohydrates: 20,
    fats: 3,
    category: 'main course'
  },
  {
    foodId: '15',
    name: 'paapad',
    quantity: '1 piece',
    calories: 45,
    proteins: 2,
    carbohydrates: 5,
    fats: 2,
    category: 'snack'
  },
  {
    foodId: '16',
    name: 'gulab jamun',
    quantity: '1 piece',
    calories: 150,
    proteins: 2,
    carbohydrates: 20,
    fats: 7,
    category: 'dessert'
  },
  {
    foodId: '17',
    name: 'idli',
    quantity: '1 piece',
    calories: 40,
    proteins: 1,
    carbohydrates: 7,
    fats: 1,
    category: 'main course'
  },
  {
    foodId: '18',
    name: 'vada',
    quantity: '1 piece',
    calories: 150,
    proteins: 2,
    carbohydrates: 15,
    fats: 8,
    category: 'snack'
  },
  {
    foodId: '19',
    name: 'dosa',
    quantity: '1 piece',
    calories: 120,
    proteins: 5,
    carbohydrates: 20,
    fats: 3,
    category: 'main course'
  }
];

// Save each food item to the database
FoodItem.insertMany(foodItems)
  .then((result) => {
    console.log("Food items saved successfully:", result);
  })
  .catch((error) => {
    console.error("Error saving food items:", error);
  });



module.exports = FoodItem
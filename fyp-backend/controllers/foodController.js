const { exec } = require("child_process");
const FoodItem = require("../models/foodModel");
let predictions = []

const task = async (req, res) => {
    console.log("Performing predictions Takes time...")
    predictions = req.body;
    console.log("Received predictions:", predictions);
    res.status(200).send("Predictions received successfully!");
}

async function uploadImageAndProcess(req, res) {
    try {
        if (!req.file) {
            throw new Error("No file uploaded");
        }

        // Execute the Python script
        const pythonScriptPath = "ensemble.py";
        const command = `python ${pythonScriptPath} ${req.file.path}`;

        exec(command, async (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Python script: ${error.message}`);
                return res.status(500).send("Internal Server Error");
            }
            console.log(`Python script output:\n${stdout}`);

            // Fetch food items based on predictions
            const foodItems = await FoodItem.find({ name: { $in: predictions } });
            console.log(foodItems);

            // Send response with food items
            res.json({
                message: "Image uploaded and processed successfully.",
                fooditems: foodItems,
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error uploading file.");
    }
}

module.exports = {
    uploadImageAndProcess,
    task
};

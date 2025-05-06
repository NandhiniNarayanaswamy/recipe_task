const Recipe = require('../models/recipeModel');

exports.createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllRecipes = async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
};

exports.getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) res.json(recipe);
    else res.status(404).json({ message: 'Recipe not found' });
};

exports.updateRecipe = async (req, res) => {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(recipe);
};

exports.deleteRecipe = async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: 'Recipe deleted' });
};

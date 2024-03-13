const configuratorRoute = require('express').Router();

const {AutoOptionsColor, AutoOptionsModel, AutoOptionsComplect } = require('../db/models');

configuratorRoute.get('/model', async (req, res) => {
    try {
        const models = await AutoOptionsModel.findAll();
        const getModels = models.map((el) => el.get({plain: true}));
        res.json(getModels);
    } catch (error) {
        console.log(error, 'Ошибка в ручке конфигуратора get model');
        res.sendStatus(500);
    }
})

configuratorRoute.put('/model', async (req, res) => {
    const { formData} = req.body;
    try {
        const queryModel = await AutoOptionsModel.findByPk(formData.id);
            queryModel.modelName = formData.modelName;
            queryModel.price = formData.price;
            queryModel.photo = formData.photo;
            queryModel.save();
            res.json(queryModel);
    } catch (error) {
        console.log(error, 'Ошибка в ручке configurator put model ');
        res.sendStatus(500);
    }
})

configuratorRoute.delete('/model/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await AutoOptionsModel.destroy({where: {id}});
        res.json(id);
    } catch (error) {
        console.log(error, 'Ошибка в ручке configurator delete model');
        res.sendStatus(500);
    }
})


configuratorRoute.get('/complect', async (req, res) => {
    try {
        const complects = await AutoOptionsComplect.findAll();
         const getcomplects = complects.map((el) => el.get({plain: true}));
        res.json(getcomplects);
    } catch (error) {
        console.log(error, 'Ошибка в ручке конфигуратора get complects');
        res.sendStatus(500);
    }
})


configuratorRoute.put('/complect', async (req, res) => {
    const { formData} = req.body;
    try {
        const queryComplect = await AutoOptionsComplect.findByPk(formData.id);
            queryComplect.model_id = formData.model_id;
            queryComplect.complectationName = formData.complectationName;
            queryComplect.price = formData.price;
            queryComplect.photo = formData.photo;
            queryComplect.save();
            res.json(queryComplect);
    } catch (error) {
        console.log(error, 'Ошибка в ручке configurator put queryComplect ');
        res.sendStatus(500);
    }
})

configuratorRoute.delete('/complect/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await AutoOptionsComplect.destroy({where: {id}});
        res.json(id);
    } catch (error) {
        console.log(error, 'Ошибка в ручке configurator delete queryComplect');
        res.sendStatus(500);
    }
})


configuratorRoute.get('/color', async (req, res) => {
    try {
        const colors = await AutoOptionsColor.findAll();
         const getcolors = colors.map((el) => el.get({plain: true}));
        res.json(getcolors);
    } catch (error) {
        console.log(error, 'Ошибка в ручке конфигуратора get colors');
        res.sendStatus(500);
    }
})

configuratorRoute.put('/color', async (req, res) => {
    const { formData} = req.body;
    try {
        const queryColors = await AutoOptionsColor.findByPk(formData.id);
            queryColors.model_id = formData.model_id;
            queryColors.colorName = formData.colorName;
            queryColors.price = formData.price;
            queryColors.photo = formData.photo;
            queryColors.save();
            res.json(queryColors);
    } catch (error) {
        console.log(error, 'Ошибка в ручке configurator put queryColors ');
        res.sendStatus(500);
    }
})

configuratorRoute.delete('/color/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await AutoOptionsColor.destroy({where: {id}});
        res.json(id);
    } catch (error) {
        console.log(error, 'Ошибка в ручке configurator delete queryColors');
        res.sendStatus(500);
    }
})


module.exports = configuratorRoute;
const validator = require('node-input-validator');
const mongoose = require('mongoose');
 
validator.extend('unique', async function (field, value, args) {
    let filed = args[1] || 'email';
    let condition = {};
    condition[filed] = value;
    if (args[2]) {
        condition['_id'] = { $ne: mongoose.Types.ObjectId(args[2]) };
    }
    let emailExist = await mongoose.model(args[0]).findOne(condition).select(field);
    if (emailExist) {
        return false;
    }
    return true;
});

module.exports = validator;
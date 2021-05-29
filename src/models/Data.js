const { json } = require('body-parser');
const {Schema, model} = require('mongoose');

const DataSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    details:{
        type: JSON,
        required: true
    }
} ,{
        timestamps: true
});
//id:uuid, event:string, type:string, created_at, update_at, details : JSON(no requerido)

module.exports = model('Data', DataSchema);
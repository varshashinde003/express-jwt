const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connectOptions = {
    user: process.env.DB_USER,
    pass: process.env.DB_USER,
    useNewUrlParser: true
};
mongoose.connect(process.env.DB_URL + process.env.DB_NAME, connectOptions);
mongoose.Promise = global.Promise;

mongoose.connection.on("error", error => {
    throw new Error(error.message);
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);
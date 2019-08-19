require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.urlencoded({extended: false}));
``
app.use("/user" , userRoutes);
app.on("error" , (error) => {
    console.error(error.message);
    process.exit();
});
console.log(`Listening on port ${process.env.PORT || 3000}...`);
app.listen(process.env.PORT || 4000);
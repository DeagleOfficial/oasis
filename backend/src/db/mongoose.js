const mongoose = require("mongoose");

const dbconnecturl = process.env.OASIS_MONGODB_URL;

mongoose.connect(dbconnecturl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_ = "mongodb://127.0.0.1:27017/BookHaven";

main().then(() => {
    console.log("connected to db");
})

async function main(){
    await mongoose.connect(MONGO_);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "68934c32fd8c67a9dc5d9203"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
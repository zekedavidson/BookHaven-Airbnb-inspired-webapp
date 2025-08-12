require('dotenv').config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/users.js");

const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("connected to db");
})

async function main(){
    await mongoose.connect(dbUrl);
}

const createUser = async () => {
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: "demo@bookhaven.com" });
        
        if (existingUser) {
            console.log("User already exists:", existingUser._id);
            return existingUser._id;
        }
        
        // Create a new user
        const newUser = new User({
            email: "demo@bookhaven.com",
            username: "demoUser"
        });
        
        await newUser.setPassword("demo123");
        await newUser.save();
        
        console.log("New user created:", newUser._id);
        return newUser._id;
        
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

const initDB = async () => {
    const userId = await createUser();
    console.log("Using user ID:", userId);
    
    await Listing.deleteMany({});
    
    initData.data = initData.data.map((obj) => ({...obj, owner: userId}));
    
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Require = require("./review.js");
const review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    image: {
        url: String,
        filename: String
      },
    price: {
        type: Number,
        require: true
    },
    location: String,
    country: String,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review"
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    geometry: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    category: {
      type: String,
      enum: ["Trending", "Rooms", "Mountains", "Iconic Cities", "Cabins", "Beach", "Camping", "Adventure", "Villas"]
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing){
    await review.deleteMany({reviews: {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
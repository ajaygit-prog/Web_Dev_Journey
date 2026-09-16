import mongoose from "mongoose";

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://ajayprakashmishra1001_db_user:F4KnaBH7ECuONrPG@backendjourneycluster.ke74mtc.mongodb.net/halley",
  );

  console.log("connected to db");
}

export { connectDB };

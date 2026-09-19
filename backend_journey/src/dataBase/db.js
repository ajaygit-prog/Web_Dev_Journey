import mongoose from "mongoose";

async function connectDB() {
  await mongoose.connect(process.env.db_connect_URI);

  console.log("connected to db");
}

export { connectDB };

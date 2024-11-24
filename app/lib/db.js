// import mongoose from 'mongoose';

// // MongoDB URI from environment variables
// const MONGO_URI = process.env.MONGO_URI;

// if (!MONGO_URI) {
//     throw new Error('Please define the MONGO_URI environment variable');
// }

// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         cached.promise =  mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }).then((mongoose) => mongoose);
//     }

//     cached.conn = await cached.promise;
//     return cached.conn;
// }

// export default connectDB;




import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect

import { MongoClient } from 'mongodb';
import dns from 'dns';

// Force public DNS resolution to fix querySrv ECONNREFUSED issues on local machines
dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = process.env.NEXT_PUBLIC_MONGODB_URI && !process.env.NEXT_PUBLIC_MONGODB_URI.startsWith('mongodb+srv://')
  ? process.env.NEXT_PUBLIC_MONGODB_URI
  : "mongodb://appon_office:Appon_Office@ac-bgbt2ej-shard-00-00.qhziz2s.mongodb.net:27017,ac-bgbt2ej-shard-00-01.qhziz2s.mongodb.net:27017,ac-bgbt2ej-shard-00-02.qhziz2s.mongodb.net:27017/portfoliov4?ssl=true&replicaSet=atlas-14kuc1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

import { MongoClient } from 'mongodb';
import dns from 'dns';

// Force public DNS to resolve MongoDB Atlas SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add MONGODB_URI to .env.local');
}

const options = {
  serverSelectionTimeoutMS: 10000,  // Fail fast: 10s instead of default 30s
  connectTimeoutMS: 10000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  const g = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!g._mongoClientPromise) {
    client = new MongoClient(uri, options);
    g._mongoClientPromise = client.connect();
  }
  clientPromise = g._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

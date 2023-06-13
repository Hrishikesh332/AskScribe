import { MongoClient } from 'mongodb';
import { promisify } from 'util';
const url = 'mongodb+srv://root:shetty34@cluster0.5ho67t3.mongodb.net/?';
const promisifiedConnect = promisify(MongoClient.connect);
async function connect() {
  try {
    const client = await promisifiedConnect(url);
    console.log('Connected to MongoDB');
    return client;
    // Perform operations with the connected client
    client.close();
    // Remember to close the connection when you're done
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}
export { connect };
import app from './app.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

dotenv.config();
const PORT = 5000;


const startServer = async () => {
  try{
    await connectDB();

    app.listen(PORT, () => {
      console.log('Server is live!');
    })
  }
  catch(error){
    console.log(error);
  }

}

startServer();


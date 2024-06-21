const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
              "mongodb+srv://ralexa23:rodney25@assignment2.8hx6d7g.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=Assignment2" ||
              process.env.MONGO_HOST ||
              'mongodb://' + (process.env.IP || 'localhost') + ':' + 
              (process.env.MONGO_PORT || '27017') + 
              '/Marketplace'
}
export default config;
   
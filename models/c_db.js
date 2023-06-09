const mongoose = require('mongoose');
const url_db_local = process.env.DBMONGO;

// Connect to MongoDB
mongoose.connect(url_db_local, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferTimeoutMS: 30000, // Set the buffer timeout to 30 seconds
}).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;

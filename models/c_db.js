const mongoose = require('mongoose');
const url_db_local = `mongodb+srv://amadich:Sxzv1bcL4ZqWkkTh@myburger.ak3ck8o.mongodb.net/burger`;
// Connect to MongoDB
mongoose.connect(url_db_local, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;

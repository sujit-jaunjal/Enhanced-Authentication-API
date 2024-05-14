// src/config/db.config.js

const mongoose = require('mongoose');

module.exports = {
  connect: function () {
    const uri = process.env.DB_URL;

    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
  }
};

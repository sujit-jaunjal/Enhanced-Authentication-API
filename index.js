require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./src/routes/auth.routes');
const profileRoutes = require('./src/routes/profile.routes');
const dbConfig = require('./src/config/db.config');

const app = express();
console.log('DB_URL:', process.env.DB_URL);

app.use(bodyParser.json());
app.use(cors());



app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbConfig.connect();

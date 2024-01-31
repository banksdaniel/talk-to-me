const express = require('express');
const bodyParser = require('body-parser');
const roomRoutes = require('./routes/roomRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use('/api', roomRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
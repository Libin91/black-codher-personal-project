const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require ('cors');
// IMPORT YOUR MODELS
require('./models/signUpSchema');

const app = express();
app.use(cors());
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/Black-Codher`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => console.log('Database connected')
);

app.use(bodyParser.json());

// IMPORT YOUR ROUTES
require('./routes/usersRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const loggingMiddleware = require('./middleware/loggingMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(loggingMiddleware);

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
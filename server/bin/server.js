const express = require('express');
const helmet = require('helmet');
const compress = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Initialize the Express application   
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(helmet());
app.use(compress());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// Define a simple route
app.use('/', require('./router'));
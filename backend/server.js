const  express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db')
const noteRoutes = require('./routes/noteRoutes');
const {errorHandler} = require('./middleware/errorMiddleware');
dotenv.config();
connectDB()
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/notes', noteRoutes)
app.use(errorHandler)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
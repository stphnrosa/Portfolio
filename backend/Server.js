import express from 'express';
import {config} from 'dotenv'; config();
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlenconded({ extended: true}));
app.use(express.json());
app.use(cors());
// app.use('/contact', contactRoutes)
// app.use('/about', aboutRoutes)


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})
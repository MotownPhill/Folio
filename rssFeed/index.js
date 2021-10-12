import express from "express";
import data from "./data/unreadContent.json"
import cors from "cors";
import apiRouter from './api';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: '*',
}))

app.use('/api', apiRouter);
app.use(express.json())

app.get('/', (req,res) => {
    // res.json(data)
    res.send('Motown Philly back again')
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(data);
});
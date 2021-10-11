import express from "express";
import data from "./data/contents.json"
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors({
    origin: '*',
}))

app.use(express.json())

app.get('/', (req,res) => 
    res.send(`Node and express server running on port ${PORT}`)
);
app.get('/rss', (req,res) => {
    console.log(req.body);
    res.send()
})

app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`); /
    console.log(data);
});
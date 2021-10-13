import express from "express"
import cors from "cors";
import config from "./config"
import rssRouter from './rssFeed';

const server = express();

server.use(cors({
    origin: '*',
}))

server.use('/rss', rssRouter);
server.use(express.json())
server.use(express.static('public'));

server.set('view engine', 'ejs');

server.get('/', (req,res) => {
    res.render('index', {
        content: '...'
    });
});


server.listen(config.port, () => {
    console.log('Server running on port', config.port);
});
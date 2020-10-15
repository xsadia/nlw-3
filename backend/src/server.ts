import express from 'express';
import 'express-async-errors';
import routes from './routes';
import './database/connection';
import path from 'path';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333, () => {
    console.log("servindo no port 3333");
});


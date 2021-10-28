import express from 'express';
import indexRouter from './routes/index.router';
import prefixRouter from './routes/prefix.route';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Routes */
app.use('/api/v1', indexRouter);
app.use('/api/v1/prefix', prefixRouter);

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}.`);
});
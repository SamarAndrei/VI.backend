import express from 'express';
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

const app = express();

const port = Number(process.env.API_PORT) || 3000;

app.use(express.json());
// app.use(
//     cors({
//         credentials: true,
//         origin: process.env.CLIENT_URL,
//     }),
// );
// app.use(cookieParser());

app.listen(port, 'localhost', () => {
    console.log(`Server listening at localhost:${port}`);
});

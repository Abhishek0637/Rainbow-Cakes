import express from 'express';
import db from './db.js';
import cakeRoute from './routes/cakeRoute.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import userSignupRoute from './routes/userSignup.js';
const app = express();


app.use(express.json());
app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));

app.use(cors({
    origin:'*'
}));
app.use('/cakes',cakeRoute);
app.use('/userSignup',userSignupRoute);



const port = 5000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));


console.log('Hello World!');

const express = require('express');
const app = express();
const port = 3000;

const myTestRouter = require("./routes/myTestRoutes");
const calculatorRouter = require("./routes/calculatorRoutes");

app.use('/', express.static('public'));
app.use("/myTest", myTestRouter);
app.use("/calculator", calculatorRouter);
/*
app.get('/', (req, res) => {
res.send('Hello World!');
});
*/
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});


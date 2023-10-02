const express = require('express');
const router = express.Router();
/*S
router.get('/add', (req, res) => {
    console.log(req.query)

    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2;
    res.send('result = ' + sum);
});
*/


router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2

    console.log(sum)

    res.status(200)
    res.json({result: sum})
    })


module.exports = router;

const express = require('express');
const router = express.Router();

router.post('/',(req, res) => {
    const { subsidymeasuretitle } = req.body;
    const { Subsidy_measure_title } = req.body;
    radio_subsidymeasuretitle  = subsidymeasuretitle
    text_subsidymeasuretitle  = Subsidy_measure_title
    res.render('publicusersearch/beneficiaryname')
  });

module.exports = router;


const express = require('express');
const router = express.Router();

router.post('/',(req, res) => {

  const { subsidyobjective } = req.body;
  const { Subsidy_Objective } = req.body;
  radio_subsidyobjective  = subsidyobjective ;
  text_subsidyobjective = Subsidy_Objective;
  console.log("radio_subsidyobjective :" + radio_subsidyobjective);
  console.log("radio_subsidyobjective :" + text_subsidyobjective);

 

    res.render('publicusersearch/spendingregion')
  });

module.exports = router;

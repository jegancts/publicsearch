
const express = require('express');
const router = express.Router();

router.post('/',(req, res) => {

  const { beneficiaryname } = req.body;
  const { Beneficiary_name } = req.body;
  radio_beneficiaryname  = beneficiaryname 
  text_beneficiaryname = Beneficiary_name
  console.log("radio_beneficiaryname: " + radio_beneficiaryname  );
  console.log("text_beneficiaryname: " + text_beneficiaryname  );
  console.log("subsidymeasuretitle" + radio_subsidymeasuretitle );
  console.log("Subsidy_measure_title" + text_subsidymeasuretitle);
    res.render('publicusersearch/subsidyobjective',{ 
      radio_subsidymeasuretitle,
      text_subsidymeasuretitle,
      radio_beneficiaryname,
      text_beneficiaryname
    
    })
  });

module.exports = router;

const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching V1

router.post('/v1/address-to-write-to', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let differentAddress = req.session.data['different-address']
  
    if (differentAddress === 'yes') {
      res.redirect('/v1/address-to-write-to')
    } else {
      res.redirect('/v1/confirmation')
    }
  })


router.post('/v1/if-appointee', function (req, res) {
  
    let differentAddress = req.session.data['if-loan-for-you']
  
    if (differentAddress === 'yes') {
      res.redirect('/v1/address')
    } else {
      res.redirect('/v1/if-appointee')
    }
  })

// Branching V2 
router.post('/v2/address-to-write-to', function (req, res) {
  
  let differentAddress = req.session.data['different-address']

  if (differentAddress === 'yes') {
    res.redirect('/v2/address-to-write-to')
  } else {
    res.redirect('/v2/confirmation')``
  }
})

router.post('/v2/if-appointee', function (req, res) {

  let differentAddress = req.session.data['if-loan-for-you']

  if (differentAddress === 'yes') {
    res.redirect('/v2/address')
  } else {
    res.redirect('/v2/if-appointee')
  }
})

// Branching V4


router.post('/v4/address-to-write-to', function (req, res) {
  
    let differentAddress = req.session.data['different-address']
  
    if (differentAddress === 'yes') {
      res.redirect('/v4/address-to-write-to')
    } else {
      res.redirect('/v4/check-your-answers')
    }
  })


router.post('/v4/if-appointee', function (req, res) {
  
    let differentAddress = req.session.data['if-loan-for-you']
  
    if (differentAddress === 'yes') {
      res.redirect('/v4/address')
    } else {
      res.redirect('/v4/if-appointee')
    }
  })

// Branching V5

router.post('/v5/address-to-write-to', function (req, res) {
  
    let differentAddress = req.session.data['different-address']
  
    if (differentAddress === 'yes') {
      res.redirect('/v5/address-to-write-to')
    } else {
      res.redirect('/v5/check-your-answers')
    }
  })


router.post('/v5/if-appointee', function (req, res) {
  
    let differentAddress = req.session.data['if-loan-for-you']
  
    if (differentAddress === 'yes') {
      res.redirect('/v5/address')
    } else {
      res.redirect('/v5/if-appointee')
    }
  })

// Branching V7

router.post('/v7/declaration', function (req, res) {
  
  let addressConfirmation = req.session.data['address-confirmation']

  if (addressConfirmation === 'address-not-listed') {
    res.redirect('/v7/enter-address')
  } else {
    res.redirect('/v7/declaration')
  }
})

// Branching v12

router.post('/v12/letter-address', function (req, res) {
  
  let addressConfirmation = req.session.data['address-confirmation']
  let extraAddressConfirmation = req.session.data['address-confirmation']

  if (addressConfirmation === 'address-not-listed') {
    res.redirect('/v12/enter-address')
  }
  if (extraAddressConfirmation === 'address-not-listed') {
    res.redirect('/v12/enter-letter-address')
  } else {
    res.redirect('/v12/letter-address')
  }
})

router.post('/v12/enter-letter-address', function (req, res) {
  
  let extraAddress = req.session.data['address-confirmation']

  if (extraAddress === 'address-not-listed') {
    res.redirect('/v12/enter-letter-address')
  } else {
    res.redirect('/v12/declaration')
  }
})

router.post('/v12/declaration', function (req, res) {
  
  let extraAddress = req.session.data['extra-address']

  if (extraAddress === 'yes-extra-address') {
    res.redirect('/v12/find-letter-address')
  } else {
    res.redirect('/v12/declaration')
  }
})



// Branching current as is journey

router.post('/as-is/eligibility-uc', function (req, res) {

  let socialfundDebt = req.session.data['socialfund-debt']

  if (socialfundDebt === 'yes') {
    res.redirect('/as-is/exit-sf-debt')
  } else {
    res.redirect('/as-is/eligibility-uc')
  }
})

router.post('/as-is/eligibility-benefits', function (req, res) {

  let claimUC = req.session.data['claim-uc']

  if (claimUC === 'yes') {
    res.redirect('/as-is/exit-uc')
  } else {
    res.redirect('/as-is/eligibility-benefits')
  }
})

router.post('/as-is/eligibility-esa-duration', function (req, res) {

  let benefitRecieved = req.session.data['benefit-received']

  if (benefitRecieved === 'esa') {
    res.redirect('/as-is/eligibility-esa-duration')
  }
  if (benefitRecieved === 'jsa') {
    res.redirect('/as-is/eligibility-jsa-duration')
  } 
  if (benefitRecieved === 'is') {
    res.redirect('/as-is/eligibility-is-duration')
  }
  if (benefitRecieved === 'pc') {
    res.redirect('/as-is/eligibility-pc-duration')
  }else {
    res.redirect('/as-is/exit-benefits')
  }
})

router.post('/as-is/eligibility-esa-type', function (req, res) {

  let esaDuration = req.session.data['esa-duration']

  if (esaDuration === 'more-than-6months') {
    res.redirect('/as-is/eligibility-esa-type')
  } else {
    res.redirect('/as-is/eligibility-esa-partner')
  }
})

router.post('/as-is/eligibility-jsa-type', function (req, res) {

  let jsaDuration = req.session.data['jsa-duration']

  if (jsaDuration === 'more-than-12-months') {
    res.redirect('/as-is/eligibility-100')
  }
  if (jsaDuration === '6-to-12-months') {
    res.redirect('/as-is/eligibility-jsa-type')
  } else {
    res.redirect('/as-is/eligibility-jsa-partner')
  }
})

router.post('/as-is/eligibility-is-partner', function (req, res) {

  let isDuration = req.session.data['is-duration']

  if (isDuration === 'more-than-6months') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-is-partner')
  }
})

router.post('/as-is/eligibility-pc-partner', function (req, res) {

  let pcDuration = req.session.data['pc-duration']

  if (pcDuration === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-pc-partner')
  }
})

router.post('/as-is/eligibility-esa-previous', function (req, res) {

  let esaPartner = req.session.data['esa-partner']

  if (esaPartner === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-esa-previous')
  }
})

router.post('/as-is/eligibility-jsa-previous', function (req, res) {

  let esaPartner = req.session.data['jsa-partner']

  if (esaPartner === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-jsa-previous')
  }
})

router.post('/as-is/eligibility-is-previous', function (req, res) {

  let isPartner = req.session.data['is-partner']

  if (isPartner === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-is-previous')
  }
})

router.post('/as-is/eligibility-pc-previous', function (req, res) {

  let pcPartner = req.session.data['pc-partner']

  if (pcPartner === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-pc-previous')
  }
})

router.post('/as-is/eligibility-100', function (req, res) {

  let esaPrevious = req.session.data['esa-previous']
  let jsaPrevious = req.session.data['jsa-previous']
  let isPrevious = req.session.data['is-previous']
  let pcPrevious = req.session.data['pc-previous']
  let esaType = req.session.data['esa-type']
  let jsaType = req.session.data['jsa-type']

  if (esaPrevious === 'esa-no') {
    res.redirect('/as-is/exit-benefits-duration')
  }
  
  if (jsaPrevious === 'jsa-no') {
    res.redirect('/as-is/exit-benefits-duration')
  } 

  if (isPrevious === 'is-no') {
    res.redirect('/as-is/exit-benefits-duration')
  }
  
  if (pcPrevious === 'pc-no') {
    res.redirect('/as-is/exit-benefits-duration')
  }

  if (esaType === 'esa-contribution') {
    res.redirect('/as-is/exit-eligibility-esa-contrib')
  } 

  if (jsaType === 'jsa-contribution') {
    res.redirect('/as-is/exit-eligibility-jsa-contrib')
  } else {
    res.redirect('/as-is/eligibility-100')
  }
})

router.post('/as-is/eligibility-industrial-action', function (req, res) {

  let oneHundred = req.session.data['100-or-more']

  if (oneHundred === '100-yes') {
    res.redirect('/as-is/eligibility-industrial-action')
  } else {
    res.redirect('/as-is/exit-100')
  }
})

router.post('/as-is/partner', function (req, res) {

  let industrialAction = req.session.data['industrial-action']

  if (industrialAction === 'ia-yes') {
    res.redirect('/as-is/exit-industrial-action')
  } else {
    res.redirect('/as-is/partner')
  }
})

router.post('/as-is/children', function (req, res) {

  let hasPartner = req.session.data['partner']

  if (hasPartner === 'partner-yes') {
    res.redirect('/as-is/partner-details')
  } else {
    res.redirect('/as-is/children')
  }
})

// Branching new master application journey

router.post('/master/eligibility-uc', function (req, res) {

  let socialfundDebt = req.session.data['socialfund-debt']

  if (socialfundDebt === 'yes') {
    res.redirect('/master/exit-sf-debt')
  } else {
    res.redirect('/master/eligibility-uc')
  }
})

router.post('/master/eligibility-benefits', function (req, res) {

  let claimUC = req.session.data['claim-uc']

  if (claimUC === 'yes') {
    res.redirect('/master/exit-uc')
  } else {
    res.redirect('/master/eligibility-benefits')
  }
})

router.post('/master/eligibility-esa-duration', function (req, res) {

  let benefitRecieved = req.session.data['benefit-received']

  if (benefitRecieved === 'esa') {
    res.redirect('/master/eligibility-esa-duration')
  }
  if (benefitRecieved === 'jsa') {
    res.redirect('/master/eligibility-jsa-duration')
  } 
  if (benefitRecieved === 'is') {
    res.redirect('/master/eligibility-is-duration')
  }
  if (benefitRecieved === 'pc') {
    res.redirect('/master/eligibility-pc-duration')
  }else {
    res.redirect('/master/exit-benefits')
  }
})

router.post('/master/eligibility-esa-type', function (req, res) {

  let esaDuration = req.session.data['esa-duration']

  if (esaDuration === 'more-than-6months') {
    res.redirect('/master/eligibility-esa-type')
  } else {
    res.redirect('/master/eligibility-esa-partner')
  }
})

router.post('/master/eligibility-jsa-type', function (req, res) {

  let jsaDuration = req.session.data['jsa-duration']

  if (jsaDuration === 'more-than-12-months') {
    res.redirect('/master/eligibility-100')
  }
  if (jsaDuration === '6-to-12-months') {
    res.redirect('/master/eligibility-jsa-type')
  } else {
    res.redirect('/master/eligibility-jsa-partner')
  }
})

router.post('/master/eligibility-is-partner', function (req, res) {

  let isDuration = req.session.data['is-duration']

  if (isDuration === 'more-than-6months') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-is-partner')
  }
})

router.post('/master/eligibility-pc-partner', function (req, res) {

  let pcDuration = req.session.data['pc-duration']

  if (pcDuration === 'yes') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-pc-partner')
  }
})

router.post('/master/eligibility-esa-previous', function (req, res) {

  let esaPartner = req.session.data['esa-partner']

  if (esaPartner === 'yes') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-esa-previous')
  }
})

router.post('/master/eligibility-jsa-previous', function (req, res) {

  let esaPartner = req.session.data['jsa-partner']

  if (esaPartner === 'yes') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-jsa-previous')
  }
})

router.post('/master/eligibility-is-previous', function (req, res) {

  let isPartner = req.session.data['is-partner']

  if (isPartner === 'yes') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-is-previous')
  }
})

router.post('/master/eligibility-pc-previous', function (req, res) {

  let pcPartner = req.session.data['pc-partner']

  if (pcPartner === 'yes') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-pc-previous')
  }
})

router.post('/master/eligibility-100', function (req, res) {

  let esaPrevious = req.session.data['esa-previous']
  let jsaPrevious = req.session.data['jsa-previous']
  let isPrevious = req.session.data['is-previous']
  let pcPrevious = req.session.data['pc-previous']
  let esaType = req.session.data['esa-type']
  let jsaType = req.session.data['jsa-type']

  if (esaPrevious === 'esa-no') {
    res.redirect('/master/exit-benefits-duration')
  }
  
  if (jsaPrevious === 'jsa-no') {
    res.redirect('/master/exit-benefits-duration')
  } 

  if (isPrevious === 'is-no') {
    res.redirect('/master/exit-benefits-duration')
  }
  
  if (pcPrevious === 'pc-no') {
    res.redirect('/master/exit-benefits-duration')
  }

  if (esaType === 'esa-contribution') {
    res.redirect('/master/exit-eligibility-esa-contrib')
  } 

  if (jsaType === 'jsa-contribution') {
    res.redirect('/master/exit-eligibility-jsa-contrib')
  } else {
    res.redirect('/master/eligibility-100')
  }
})

router.post('/master/eligibility-industrial-action', function (req, res) {

  let oneHundred = req.session.data['100-or-more']

  if (oneHundred === '100-yes') {
    res.redirect('/master/eligibility-industrial-action')
  } else {
    res.redirect('/master/exit-100')
  }
})

router.post('/master/partner', function (req, res) {

  let industrialAction = req.session.data['industrial-action']

  if (industrialAction === 'ia-yes') {
    res.redirect('/master/exit-industrial-action')
  } else {
    res.redirect('/master/partner')
  }
})

router.post('/master/children', function (req, res) {

  let hasPartner = req.session.data['partner']

  if (hasPartner === 'partner-yes') {
    res.redirect('/master/partner-details')
  } else {
    res.redirect('/master/children')
  }
})

router.post('/master/letter-address', function (req, res) {
  
  let addressConfirmation = req.session.data['address-confirmation']
  let extraAddressConfirmation = req.session.data['address-confirmation']

  if (addressConfirmation === 'address-not-listed') {
    res.redirect('/master/enter-address')
  }
  if (extraAddressConfirmation === 'address-not-listed') {
    res.redirect('/master/enter-letter-address')
  } else {
    res.redirect('/master/letter-address')
  }
})

router.post('/master/enter-letter-address', function (req, res) {
  
  let extraAddress = req.session.data['address-confirmation']

  if (extraAddress === 'address-not-listed') {
    res.redirect('/master/enter-letter-address')
  } else {
    res.redirect('/master/contact-details')
  }
})

router.post('/master/address-notfound', function (req, res) {
  
  let letterAddress = req.session.data['letter-address']

  if (letterAddress === 'yes-extra-address') {
    res.redirect('/master/address-notfound')
  } else {
    res.redirect('/master/contact-details')
  }
})

router.post('/master/contact-details', function (req, res) {
  
  let extraAddress = req.session.data['extra-address']
  if (extraAddress === 'yes-extra-address') {
    res.redirect('/master/find-letter-address')
  } else {
    res.redirect('/master/contact-details')
  }
})




module.exports = router

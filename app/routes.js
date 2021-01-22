// var NotifyClient = require('notifications-node-client').NotifyClient,
//     notify = new NotifyClient(process.env.NOTIFYAPIKEY);

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

// Branching V3

router.post('/v3/if-appointee', function (req, res) {

  let yourLoan = req.session.data['if-loan-for-you']

  if (yourLoan === 'is-for-me') {
    res.redirect('/v3/assisted-digital-thanks')
  } else {
    res.redirect('/v3/if-appointee')
  }
})

router.post('/v3/interruption-card', function (req, res) {

  let ifAppointee = req.session.data['if-appointee']

  if (ifAppointee === 'not-appointee') {
    res.redirect('/v3/interruption-card')
  } else {
    res.redirect('/v3/interruption-card-appointee')
  }
})

router.post('/v3/check-your-answers', function (req, res) {

  let appointeeAddress = req.session.data['appointee-address-confirmation']

  if (appointeeAddress === 'appointee-address-not-listed') {
    res.redirect('/v3/appointee-address-not-listed')
  } else {
    res.redirect('/v3/check-your-answers')
  }
})

// Branching V3.1/3a

router.post('/v3a/if-appointee', function (req, res) {

  let yourLoan = req.session.data['if-loan-for-you']

  if (yourLoan === 'is-for-me') {
    res.redirect('/v3a/assisted-digital-thanks')
  } else {
    res.redirect('/v3a/if-appointee')
  }
})

router.post('/v3a/interruption-card', function (req, res) {

  let ifAppointee = req.session.data['if-appointee']

  if (ifAppointee === 'not-appointee') {
    res.redirect('/v3a/interruption-card')
  } else {
    res.redirect('/v3a/interruption-card-appointee')
  }
})

router.post('/v3a/check-your-answers', function (req, res) {

  let appointeeAddress = req.session.data['appointee-address-confirmation']

  if (appointeeAddress === 'appointee-address-not-listed') {
    res.redirect('/v3a/appointee-address-not-listed')
  } else {
    res.redirect('/v3a/check-your-answers')
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

// Branching v14 - gather phone number for questions based on if they've already entered a mobile number

router.post('/v14/call-option', function (req, res) {

  let contactPreference = req.session.data['contactpreference']
  if (contactPreference.includes('text message')) {
    res.redirect('/v14/call-option-with-mobile')
  } else {
    res.redirect('/v14/call-option')
  }
})

// Branching v14.1 - gather phone number for questions based on if they've already entered a mobile number

router.post('/v14a/call-option', function (req, res) {

  let contactPreference = req.session.data['contactpreference']
  if (contactPreference.includes('text message')) {
    res.redirect('/v14a/call-option-with-mobile')
  } else {
    res.redirect('/v14a/call-option')
  }
})

// Branching v18a - gather phone number for questions based on if they've already entered a mobile number

router.post('/v18a/mobile-contact-method', function (req, res) {

  let emailAddress = req.session.data['email-address']

  if (emailAddress === 'yes') {
    res.redirect('/v18a/call-option')
  } else {
    res.redirect('/v18a/mobile-contact-method')
  }
})

router.post('/v18a/call-option-with-mobile', function (req, res) {

  let mobilePhone = req.session.data['mobile-phone']

  if (mobilePhone === 'yes') {
    res.redirect('/v18a/call-option-with-mobile')
  } else {
    res.redirect('/v18a/call-option')
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


// Branching appointees and those helping others to apply

router.post('/master/if-appointee', function (req, res) {

  let yourLoan = req.session.data['if-loan-for-you']

  if (yourLoan === 'Yes') {
    res.redirect('/master/eligibility-sf-debt')
  } else {
    res.redirect('/master/if-appointee')
  }
})

router.post('/master/interruption-card', function (req, res) {

  let isAppointee = req.session.data['appointee']

  if (isAppointee === 'Yes') {
    res.redirect('/master/interruption-card-appointee')
  } else {
    res.redirect('/master/interruption-card')
  }
})

//Send appointees to the appointee details and appointee address pages before they select contact preference

router.post('/master/contact-type', function (req, res) {

  let appointeeDetails = req.session.data['appointee']

  if (appointeeDetails === 'Yes') {
    res.redirect('/master/appointee-details')
  } else {
    res.redirect('/master/can-you-receive')
  }
})

//Other master branching

router.post('/master/eligibility-uc', function (req, res) {

  let socialfundDebt = req.session.data['socialfund-debt']

  if (socialfundDebt === 'Yes') {
    res.redirect('/master/exit-sf-debt')
  } else {
    res.redirect('/master/eligibility-uc')
  }
})

router.post('/master/eligibility-benefits', function (req, res) {

  let claimUC = req.session.data['claim-uc']

  if (claimUC === 'Yes') {
    res.redirect('/master/exit-uc')
  } else {
    res.redirect('/master/eligibility-benefits')
  }
})

router.post('/master/eligibility-esa-duration', function (req, res) {

  let benefitRecieved = req.session.data['benefit-received']

  if (benefitRecieved === 'Employment and Support Allowance') {
    res.redirect('/master/eligibility-esa-duration')
  }
  if (benefitRecieved === 'Jobseeker’s Allowance') {
    res.redirect('/master/eligibility-jsa-duration')
  }
  if (benefitRecieved === 'Income Support') {
    res.redirect('/master/eligibility-is-duration')
  }
  if (benefitRecieved === 'Pension Credit') {
    res.redirect('/master/eligibility-pc-duration')
  }else {
    res.redirect('/master/exit-benefits')
  }
})

router.post('/master/eligibility-esa-type', function (req, res) {

  let esaDuration = req.session.data['benefit-duration']

  if (esaDuration === '6 months or more') {
    res.redirect('/master/eligibility-esa-type')
  } else {
    res.redirect('/master/eligibility-esa-partner')
  }
})

router.post('/master/eligibility-jsa-type', function (req, res) {

  let jsaDuration = req.session.data['benefit-duration']

  if (jsaDuration === 'More than 12 months') {
    res.redirect('/master/eligibility-100')
  }
  if (jsaDuration === 'Between 6 and 12 months') {
    res.redirect('/master/eligibility-jsa-type')
  } else {
    res.redirect('/master/eligibility-jsa-partner')
  }
})

router.post('/master/eligibility-is-partner', function (req, res) {

  let isDuration = req.session.data['benefit-duration']

  if (isDuration === 'More than 6 months') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-is-partner')
  }
})

router.post('/master/eligibility-pc-partner', function (req, res) {

  let pcDuration = req.session.data['benefit-duration']

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

  if (esaPartner === 'Yes') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-jsa-previous')
  }
})

router.post('/master/eligibility-is-previous', function (req, res) {

  let isPartner = req.session.data['is-partner']

  if (isPartner === 'Yes') {
    res.redirect('/master/eligibility-100')
  } else {
    res.redirect('/master/eligibility-is-previous')
  }
})

router.post('/master/eligibility-pc-previous', function (req, res) {

  let pcPartner = req.session.data['pc-partner']

  if (pcPartner === 'Yes') {
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

  if (jsaPrevious === 'No') {
    res.redirect('/master/exit-benefits-duration')
  }

  if (isPrevious === 'No') {
    res.redirect('/master/exit-benefits-duration')
  }

  if (pcPrevious === 'No') {
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

  if (oneHundred === 'Yes') {
    res.redirect('/master/eligibility-industrial-action')
  } else {
    res.redirect('/master/exit-100')
  }
})

router.post('/master/partner', function (req, res) {

  let industrialAction = req.session.data['industrial-action']

  if (industrialAction === 'Yes') {
    res.redirect('/master/exit-industrial-action')
  } else {
    res.redirect('/master/partner')
  }
})

router.post('/master/children', function (req, res) {

  let hasPartner = req.session.data['partner']

  if (hasPartner === 'Yes') {
    res.redirect('/master/partner-details')
  } else {
    res.redirect('/master/children')
  }
})

router.post('/master/contact-details2', function (req, res) {

  let digital = req.session.data['digital']

  if (digital === 'Yes') {
    res.redirect('/master/contact-details')
  } else if (digital === 'No') {
    res.redirect('/master/call-option')
  } else {
    res.redirect('/master/can-you-receive-error')
  }
})

router.post('/master/call-option', function (req, res) {

  let contactPref = req.session.data['contactpreference']
  let mobilenumber = req.session.data['mobilenumberinput']
  let email = req.session.data['email-input']

  if (contactPref === 'text message' && mobilenumber.length == 0) {
    res.redirect('/master/contact-details-error-phone')
  } else if (contactPref === 'text message' && mobilenumber.length != 0) {
    res.redirect('/master/call-option-with-mobile')
  } else if (contactPref === 'email' && email.length == 0) {
    res.redirect('/master/contact-details-error-email')
  } else if (contactPref === 'email' && email.length != 0) {
    res.redirect('/master/call-option')
  } else {
    res.redirect('/master/contact-details-error')
  }
})

router.post('/master/check-your-answers', function (req, res) {

  let phonetype = req.session.data['phone']
  let newnumber = req.session.data['phone-input']

  if (phonetype === 'Yes, call me on a different number' && newnumber.length == 0) {
    res.redirect('/master/call-option-with-mobile-error-number')
  } else if (phonetype === 'Yes, call me on a different number' && newnumber.length != 0) {
    res.redirect('/master/check-your-answers')
  } else if (phonetype === 'Yes' && newnumber.length != 0) {
    res.redirect('/master/check-your-answers')
  } else if (phonetype === 'Yes, on') {
    res.redirect('/master/check-your-answers')
  } else if (phonetype === 'No, write to me instead') {
    res.redirect('/master/check-your-answers')
  } else {
    res.redirect('/master/call-option-with-mobile-error')
  }
})

// Branching master - gather phone number for questions based on if they've already entered a mobile number

router.post('/master/mobile-contact-method', function (req, res) {

  let emailAddress = req.session.data['email-address']

  if (emailAddress === 'yes') {
    res.redirect('/master/call-option')
  } else {
    res.redirect('/master/mobile-contact-method')
  }
})

router.post('/master/call-option-with-mobile', function (req, res) {

  let mobilePhone = req.session.data['mobile-phone']

  if (mobilePhone === 'yes') {
    res.redirect('/master/call-option-with-mobile')
  } else {
    res.redirect('/master/call-option')
  }
})


//Hidden as master v2 is not being used

// router.post('/master-v2/address-notfound', function (req, res) {

//   let letterAddress = req.session.data['letter-address']

//   if (letterAddress === 'yes-extra-address') {
//     res.redirect('/master-v2/address-notfound')
//   } else {
//     res.redirect('/master-v2/contact-details')
//   }
// })

// router.post('/master-v2/contact-details', function (req, res) {

//   let addressConfirmation = req.session.data['address-confirmation']

//   if (addressConfirmation === 'address-not-listed') {
//     res.redirect('/master-v2/enter-address')
//   } else {
//     res.redirect('/master-v2/contact-details')
//   }
// })


//BLAS - decision service routing

router.post('/BLAS/v3/declaration-success', function (req, res) {

  let offerAcceptance = req.session.data['offer-acceptance']

  if (offerAcceptance === 'offer-yes') {
    res.redirect('/BLAS/v3/declaration-success')
  } else {
    res.redirect('/BLAS/v3/declaration-reject')
  }
})

router.post('/BLAS/v4/declaration-success', function (req, res) {

  let offerAcceptance = req.session.data['offer-acceptance']

  if (offerAcceptance === 'offer-yes') {
    res.redirect('/BLAS/v4/declaration-success')
  } else {
    res.redirect('/BLAS/v4/declaration-reject')
  }
})

router.post('/BLAS/v5/declaration-success', function (req, res) {

  let offerAcceptance = req.session.data['offer-acceptance']

  if (offerAcceptance === 'offer-yes') {
    res.redirect('/BLAS/v5/declaration-success')
  } else {
    res.redirect('/BLAS/v5/declaration-reject')
  }
})

router.post('/BLAS/v6/loan-accepted', function (req, res) {

  let offerAcceptance = req.session.data['loan-decision']

  if (offerAcceptance === 'yes') {
    res.redirect('/BLAS/v6/loan-accepted')
  } else {
    res.redirect('/BLAS/v6/loan-declined')
  }
})

router.post('/BLAS/v7/loan-accepted', function (req, res) {

  let offerAcceptance = req.session.data['loan-decision']

  if (offerAcceptance === 'yes') {
    res.redirect('/BLAS/v7/loan-accepted')
  } else {
    res.redirect('/BLAS/v7/loan-declined')
  }
})

router.post('/BLAS/v8/loan-accepted', function (req, res) {

  let offerAcceptance = req.session.data['loan-decision']

  if (offerAcceptance === 'yes') {
    res.redirect('/BLAS/v8/loan-accepted')
  } else {
    res.redirect('/BLAS/v8/loan-declined')
  }
})

// BLAS v10 coronavirus version routing

router.post('/BLAS/v10-coronavirus/loan-accepted', function (req, res) {

  let offerAcceptance = req.session.data['loan-decision']

  if (offerAcceptance === 'yes') {
    res.redirect('/BLAS/v10-coronavirus/loan-accepted')
  } else if (offerAcceptance === 'yes-b') {
    res.redirect('/BLAS/v10-coronavirus/loan-accepted')
  } else {
    res.redirect('/BLAS/v10-coronavirus/loan-declined')
  }
})

router.post('/BLAS/v10-coronavirus/loan-accepted-multiple', function (req, res) {

  let offerAcceptance = req.session.data['loan-decision']

  if (offerAcceptance === 'yes') {
    res.redirect('/BLAS/v10-coronavirus/loan-accepted-multiple')
  } else if (offerAcceptance === 'yes-b') {
    res.redirect('/BLAS/v10-coronavirus/loan-accepted-multiple')
  } else if (offerAcceptance === 'yes-c') {
    res.redirect('/BLAS/v10-coronavirus/loan-accepted-multiple')
  }
    else {
    res.redirect('/BLAS/v10-coronavirus/loan-declined')
  }
})

router.post('/BLAS/v10-coronavirus/full-loan-offer-radio-choice', function (req, res) {

  let offerAcceptance = req.session.data['response-code']

  if (offerAcceptance === '877582362') {
    res.redirect('/BLAS/v10-coronavirus/full-loan-offer-radio-choice')
  } else if (offerAcceptance === '211345443') {
    res.redirect('/BLAS/v10-coronavirus/partial-loan-offer')
  } else if (offerAcceptance === '564378888') {
    res.redirect('/BLAS/v10-coronavirus/multiple-loan-offers')
  } else {
    res.redirect('/BLAS/v10-coronavirus/no-loan-offer')
  }
})

// BLAS master routing

router.post('/BLAS/master/loan-accepted', function (req, res) {

  let fullofferAcceptance = req.session.data['full-loan-decision']

  if (fullofferAcceptance === 'Yes') {
    res.redirect('/BLAS/master/loan-accepted')
  } else if (fullofferAcceptance === 'No') {
    res.redirect('/BLAS/master/loan-declined')
  } else {
    res.redirect('/BLAS/master/full-loan-offer-radio-choice-error')
  }
})

router.post('/BLAS/master/partial-loan-accepted', function (req, res) {

  let partialofferAcceptance = req.session.data['partial-loan-decision']

  if (partialofferAcceptance === 'Yes') {
    res.redirect('/BLAS/master/loan-accepted')
  } else if (partialofferAcceptance === 'No') {
    res.redirect('/BLAS/master/loan-declined')
  } else {
    res.redirect('/BLAS/master/partial-loan-offer-error')
  }
})

router.post('/BLAS/master/loan-accepted-multiple', function (req, res) {

  let offerAcceptance = req.session.data['loan-decision']

  if (offerAcceptance === 'yes') {
    res.redirect('/BLAS/master/loan-accepted-multiple')
  } else if (offerAcceptance === 'yes-b') {
    res.redirect('/BLAS/master/loan-accepted-multiple')
  } else if (offerAcceptance === 'yes-c') {
    res.redirect('/BLAS/master/loan-accepted-multiple')
  } else if (offerAcceptance === 'no') {
    res.redirect('/BLAS/master/loan-declined')
  }
    else {
    res.redirect('/BLAS/master/multiple-loan-offers-error')
  }
})

router.post('/BLAS/master/response-code', function (req, res) {

  let reference = req.session.data['application-reference']

  if (reference === '7RXP43ZF') {
    res.redirect('/BLAS/master/response-code')
  } else if (reference !== '7RXP43ZF') {
    res.redirect('/BLAS/master/application-reference-code-error-invalid')
  } else {
    res.redirect('/BLAS/master/application-reference-code-error')
  }
})

router.post('/BLAS/master/full-loan-offer-radio-choice', function (req, res) {

  let offerAcceptance = req.session.data['response-code']

  if (offerAcceptance === '877582362') {
    res.redirect('/BLAS/master/full-loan-offer-radio-choice')
  } else if (offerAcceptance === '211345443') {
    res.redirect('/BLAS/master/partial-loan-offer')
  } else if (offerAcceptance === '564378888') {
    res.redirect('/BLAS/master/multiple-loan-offers')
  } else if (offerAcceptance.length == 0) {
    res.redirect('/BLAS/master/response-code-error')
  } else {
    res.redirect('/BLAS/master/response-code-error-invalid')
  }
})

// Routing for agent interface

router.post('/master/application-details', function (req, res) {

  let applicationRef = req.session.data['find-application']

  if (applicationRef === 'GH23FR55') {
    res.redirect('/AI/master/application-details-v1-received')
  } else if (applicationRef === 'VB65DE21') {
    res.redirect('/AI/master/application-details-v1-decision')
  } else if (applicationRef === 'XC99JU76') {
    res.redirect('/AI/master/application-details-v1-waiting')
  } else if (applicationRef === 'TR54ED32') {
    res.redirect('/AI/master/application-details-v1-waiting-full')
  } else if (applicationRef === 'JU66SA91') {
    res.redirect('/AI/master/application-details-v1-responded')
  } else if (applicationRef === 'YU77GT54') {
    res.redirect('/AI/master/application-details-v1-entered')
  } else if (applicationRef === 'GT32DA67') {
    res.redirect('/AI/master/application-details-v2-received')
  } else if (applicationRef === 'IH77EQ12') {
    res.redirect('/AI/master/application-details-v2-decision')
  } else if (applicationRef === 'KL87FC44') {
    res.redirect('/AI/master/application-details-v2-waiting')
  } else if (applicationRef === 'LM76TY11') {
    res.redirect('/AI/master/application-details-v2-waiting-full')
  } else if (applicationRef === 'HY55HU78') {
    res.redirect('/AI/master/application-details-v2-responded')
  } else if (applicationRef === 'MN91G6S') {
    res.redirect('/AI/master/application-details-v2-entered')
  } else if (applicationRef === 'HY55FR33') {
    res.redirect('/AI/master/application-details-v1-declines')
  } else if (applicationRef === 'DS66RE21') {
    res.redirect('/AI/master/application-details-v1-appointee')
  } else if (applicationRef === 'YU76GG54') {
    res.redirect('/AI/master/application-details-v1-ineligible')
  } else if (applicationRef === 'T6Y7GR55') {
    res.redirect('/AI/master/not-on-qb-v2b')
  } else if (applicationRef === 'HY77TR65') {
    res.redirect('/AI/v7/exception-handling-v1a')
  } else if (applicationRef === 'GR43DS77') {
    res.redirect('/AI/v7/exception-handling-v1d')
  } else if (applicationRef === 'JK9844WS') {
    res.redirect('/AI/v7/exception-handling-v2a')
  } else if (applicationRef === 'VG55DR23') {
    res.redirect('/AI/v7/exception-handling-v2e')
  } else if (applicationRef === 'FD22FT54') {
    res.redirect('/AI/v7/exception-handling-v3a')
  } else if (applicationRef === 'LK67FD33') {
    res.redirect('/AI/v7/exception-handling-v3d')
  } else if (applicationRef === 'GT7654ED') {
    res.redirect('/AI/master/exception-handling-v4a')
  } else if (applicationRef === 'JK77MNHV') {
    res.redirect('/AI/master/exception-handling-v4d')
  } else if (applicationRef === 'SA44TR99') {
    res.redirect('/AI/master/exception-handling-v5a')
  } else if (applicationRef === 'JN32BV75') {
    res.redirect('/AI/master/exception-handling-v5d')
  } else if (applicationRef.length == 0) {
    res.redirect('/AI/master/search-error')
  } else {
    res.redirect('/AI/master/application-not-found')
  }
})

router.post('exception-handling-v1c', function (req, res) {

  let applicationNumber = req.session.data['application-number']

  if (applicationNumber === '002') {
    res.redirect('exception-handling-v1c')
  } else if (applicationNumber !== '002') {
    res.redirect('exception-handling-v1b-error')
  } else {
    res.redirect('exception-handling-v1b-error')
  }
})

router.post('exception-handling-v2d', function (req, res) {

  let applicationNumber = req.session.data['application-number']

  if (applicationNumber === '002') {
    res.redirect('exception-handling-v2d')
  } else if (applicationNumber !== '002') {
    res.redirect('exception-handling-v2c-error')
  } else {
    res.redirect('exception-handling-v2c-error')
  }
})

router.post('exception-handling-v3c', function (req, res) {

  let applicationNumber = req.session.data['application-number']

  if (applicationNumber === '002') {
    res.redirect('exception-handling-v3c')
  } else if (applicationNumber !== '002') {
    res.redirect('exception-handling-v3b-error')
  } else {
    res.redirect('exception-handling-v3b-error')
  }
})

router.post('/v8/exception-handling-v4c', function (req, res) {

  let applicationNumber = req.session.data['application-number']

  if (applicationNumber === '002') {
    res.redirect('/AI/v8/exception-handling-v4c')
  } else if (applicationNumber !== '002') {
    res.redirect('/AI/v8/exception-handling-v4b-error')
  } else {
    res.redirect('/AI/v8/exception-handling-v4b-error')
  }
})

router.post('/v8/exception-handling-v5c', function (req, res) {

  let applicationNumber = req.session.data['application-number']

  if (applicationNumber === '002') {
    res.redirect('/AI/v8/exception-handling-v5c')
  } else if (applicationNumber !== '002') {
    res.redirect('/AI/v8/exception-handling-v5b-error')
  } else {
    res.redirect('/AI/v8/exception-handling-v5b-error')
  }
})

router.post('/master/exception-handling-v6c', function (req, res) {

  let applicationNumber = req.session.data['application-number']

  if (applicationNumber === '002') {
    res.redirect('/AI/master/exception-handling-v6c')
  } else if (applicationNumber !== '002') {
    res.redirect('/AI/master/exception-handling-v6b-error')
  } else {
    res.redirect('/AI/master/exception-handling-v6b-error')
  }
})



// Notify routing

// router.post('/master/declaration', function (req, res) {
//
//   notify.sendEmail(
//     '83a8dd79-8e78-441a-b443-d10fb74f8e27',
//     req.session.data['email']
//   );
//
//   res.redirect('/master/confirmation');
//
// });


module.exports = router

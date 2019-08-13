const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/v2/address-to-write-to', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let differentAddress = req.session.data['different-address']
  
    if (differentAddress === 'false') {
      res.redirect('/v2/confirmation')
    } else {
      res.redirect('/v2/address-to-write-to')
    }
  })

module.exports = router

import express from 'express'

import country from '../routes/country.js'
import cities from '../routes/cities.js'
import province from '../routes/province.js'
import provinceCities from '../routes/provinceCities.js'

const router = express.Router()

router.get('/country', country)
router.get('/cities', cities)
router.get('/province', province)
router.get('/province/cities', provinceCities)

export default router

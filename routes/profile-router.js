const express = require('express')

const ProfileCtrl = require('../controllers/profile-ctrl')

const router = express.Router()

router.get('/profiles', ProfileCtrl.getProfiles)
router.post('/profile', ProfileCtrl.createProfile)
router.get('/profile/:email', ProfileCtrl.getProfileByEmail)
router.put('/profile/:id', ProfileCtrl.updateProfile)

module.exports = router
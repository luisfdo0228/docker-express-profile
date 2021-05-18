const Profile = require('../models/profile-model')

createProfile = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a profile',
        })
    }

    const profile = new Profile(body)

    if (!profile) {
        return res.status(400).json({ success: false, error: err })
    }

    profile
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: profile._id,
                message: 'Profile created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Profile not created!',
            })
        })
}

updateProfile = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Profile.findOne({ _id: req.params.id }, (err, profile) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Profile not found!',
            })
        }
        profile.nameUser = body.nameUser
        profile.email = body.email
        profile.gender = body.gender
        profile.bio = body.bio
        profile.photo = body.photo
        profile
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: profile._id,
                    message: 'Profile updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Profile not updated!',
                })
            })
    })
}

getProfileByEmail = async (req, res) => {
    await Profile.findOne({ email: req.params.email }, (err, profile) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!profile) {
            return res
                .status(404)
                .json({ success: false, error: `Profile not found` })
        }
        return res.status(200).json({ success: true, data: profile })
    }).catch(err => console.log(err))
}

getProfiles = async (req, res) => {
    await Profile.find({}, (err, profiles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!profiles.length) {
            return res
                .status(404)
                .json({ success: false, error: `Profile not found` })
        }
        return res.status(200).json({ success: true, data: profiles })
    }).catch(err => console.log(err))
}

module.exports = {
    getProfiles,
    createProfile,
    getProfileByEmail,
    updateProfile
}
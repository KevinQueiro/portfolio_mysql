import UserSchema from '../models/user.model.js'

export const updateEdu = async (req, res) => {
    try {
        await UserSchema.findOneAndUpdate(
            {
                _id: req.params.userId,
                'educations._id': req.params.eduId,
            },
            {
                $set: {
                    'educations.$.name': req.body.name,
                    'educations.$.finaldate': new Date(req.body.finaldate),
                    'educations.$.description': req.body.description,
                    'educations.$.photo': req.body.photo,
                },
            },
            { new: true })
        res.send('updated')
    } catch (error) {
        console.error(error);
    }
}

export const updateExp = async (req, res) => {
    try {
        await UserSchema.findOneAndUpdate(
            {
                _id: req.params.userId,
                'experiences._id': req.params.expId,
            },
            {
                $set: {
                    'experiences.$.name': req.body.name,
                    'experiences.$.initdate': new Date(req.body.finaldate),
                    'experiences.$.finaldate': new Date(req.body.finaldate),
                    'experiences.$.description': req.body.description,
                    'experiences.$.photo': req.body.photo,
                },
            },
            { new: true })
        res.send('updated')
    } catch (error) {
        console.error(error);
    }
}

export const updatePro = async (req, res) => {
    try {
        await UserSchema.findOneAndUpdate(
            {
                _id: req.params.userId,
                'projects._id': req.params.proId,
            },
            {
                $set: {
                    'projects.$.name': req.body.name,
                    'projects.$.description': req.body.description,
                    'projects.$.photo': req.body.photo,
                },
            },
            { new: true })
        res.send('updated')
    } catch (error) {
        console.error(error);
    }
}

export const updateSkill = async (req, res) => {
    try {
        await UserSchema.findOneAndUpdate(
            {
                _id: req.params.userId,
                'skills._id': req.params.skillId,
            },
            {
                $set: {
                    'skills.$.name': req.body.name,
                    'skills.$.percentage': req.body.percentage
                },
            },
            { new: true })
        res.send('updated')
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = {
            name: req.body.name,
            lastname: req.body.lastname,
            photo: req.body.photo,
            title: req.body.title,
            birthdate: new Date(req.body.birthdate)
        }
        const user = await UserSchema.findOneAndUpdate({_id: req.params.userId}, updatedUser)
        res.send('updated')
    } catch (error) {
        console.error(error);
    }
}
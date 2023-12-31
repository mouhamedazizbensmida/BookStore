import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../models/User.js"


export const Signup = async (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                ...req.body, 
                password: hash,
            })
            user
                .save()
                .then((response) => {
                    const newUser = response.toPublic(); 
                    res.status(201).json({
                        user: newUser,
                        message: "utilisateur crée !"
                    })
                })
                .catch((error) => {if (error.name === 'ValidationError' && error.errors.email.kind === 'unique') {
                    res.status(400).json({ error: 'Email déjà utilisé', message: 'Données invalides' });
                  } else {
                    res.status(400).json({ error: error.message, message: 'Données invalides' });
                  }
                });})
        .catch((error) => res.status(500).json({error}))
}

export const Login = async(req, res) => {
    User.findOne({email: req.body.email})
    .then ((user) => {
        if (!user){
            return res 
            .status(401)
            .json({message : "Login ou mot de passe incorrécte"})
        }
        bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
            if (!valid) {
                return res
                .status(401)
                .json ({message : "Login ou mot de passe incorrecte "})
            }
            res.status(200).json({
                token : jwt.sign({userId: user._id,userRole: user.role},
                 "RANDOM_TOKEN_SECRET",
                {expiresIn : "24h"})

            })

        })
    }).catch((error) => res.status(500).json({error : error.message}))

}
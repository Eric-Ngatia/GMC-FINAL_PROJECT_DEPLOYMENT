import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = (req, res, next) => {
    console.log(req.body)
    bcrypt.hash(req.body.pwd, 10, function(err, hashPass){
        if (err) {
            res.json({
                error: err
            })
        }

        let user = new User ({
            name: req.body.name,
            email:req.body.email,
            password : hashPass,
        })

        user.save()
        .then(user => {
            res.json({
                message: 'User added Successfully ✅✅!'
            })
        })

        .catch(error => {
            res.json({
                message: 'An error occured ❌❌!'
            })
        })
    })
}



export const login = (req, res, next) => {
    // console.log("loginnnnnn", req.body.pwd)
    var username = req.body.email
    var pwd = req.body.pwd
    console.log(username)
    console.log(pwd)

    User.findOne({email:username})
    .then(user => {
        if(user) {
            bcrypt.compare(pwd, user.password, function (err, result) {
                if(err) {
                    res.json({
                        error: err
                    })
                }

                if (result) {
                    let token = jwt.sign({name: user.email}, 'verySecretValue', {expiresIn: '1h'})
                    console.log(token)
                    console.log("test")
                    res.json({
                        message: 'Login Succesful ! ✅✅',
                        token
                    })
                }else{
                    res.json({
                        message: 'Password does not matched ❌❌'
                    })
                }
            })
        } else{
            res.status(400).json({
                message:'No user found ! ❌❌'
            })
        }
    })
}

'use strict'

const User = use('App/Models/User')

class UserController {
    async register({request, response}){
        const {first_name,last_name,email,password} = request.only([
            'first_name',
            'last_name',
            'email',
            'password'
        ])

        const user = await User.create({
            first_name,
            last_name,
            email,
            password
        })

        return response.send({message: 'User has been created'})
    }
}

module.exports = UserController

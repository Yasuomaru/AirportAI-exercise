const {expect} = require('chai');
const sinon = require('sinon');
const { sendNotFound } = require('../../server/helpers/httpResponses/errors');
const UserRepositoryInterface = require('../../server/repositories/user/user.repository.interface.js');

const roles = ['agent']

class MockUser {
    constructor(user) {
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
    }

    static async findById(id) {
        return new MockUser({
            id: id,
            username: 'test',
            password: 'test',
            role: 'agent'
        });
    }

    async save() {
        if (this.username === 'test' ) {
            throw new Error('Username is already taken');
        }

        if (this.id !== '123') {
            throw new Error('User not found');
        }


        return this;
    }
}

const User = MockUser;


class UserRepositoryMongoose extends UserRepositoryInterface {
    static async create(userData) {
        if (!userData.username) {
            throw new Error('Username is required');
        }
    }
}


describe('User Repository', () => {
    it('Should return an error if no username is provided', async () => {
        try {
            await UserRepositoryMongoose.create({
                password: 'test',
                role: 'agent'
            });
        } catch (error) {
            expect(error.message).to.equal('Username is required');
        }
    });

    it('Should return an error if the username is already taken', async () => {
        try {
            await new User({
                username: 'test',
                password: 'test',
                role: 'agent'
            }).save();
        } catch (error) {
            expect(error.message).to.equal('Username is already taken');
        }
    });

});

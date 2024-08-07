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
        if (this.username === 'taken' ) {
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

        if (!userData.password) {
            throw new Error('Password is required');
        }

        if (!roles.includes(userData.role)) {
            throw new Error('Invalid role');
        }

        return new User(userData).save();
    }
}


describe('User Repository', () => {

    describe('Create Method: username field errors', () => {
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
                    username: 'taken',
                    password: 'test',
                    role: 'agent'
                }).save();
            } catch (error) {
                expect(error.message).to.equal('Username is already taken');
            }
        });
    });

    describe('Create Method: password field errors', () => {
        //Pasword field
        it('Should return an error if no password is provided', async () => {
            try {
                await UserRepositoryMongoose.create({
                    username: 'test',
                    role: 'agent'
                });
            } catch (error) {
                expect(error.message).to.equal('Password is required');
            }
        });
    });

    describe('Create Method: role field errors', () => {
        it('Should return an error if the role is not valid', async () => {
            try {
                await UserRepositoryMongoose.create({
                    username: 'test',
                    password: 'test',
                    role: 'invalid'
                });
            } catch (error) {
                expect(error.message).to.equal('Invalid role');
            }
        });
    });
});

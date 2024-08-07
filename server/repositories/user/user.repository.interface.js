class UserRepositoryInterface {
    static async create(userData) {
        throw new Error('Method not implemented');
    }

    static async findById(userId) {
        throw new Error('Method not implemented');
    }

    static async findAll() {
        throw new Error('Method not implemented');
    }

    static async update(userId, userData) {
        throw new Error('Method not implemented');
    }

    static async delete(userId) {
        throw new Error('Method not implemented');
    }
}

module.exports = UserRepositoryInterface;
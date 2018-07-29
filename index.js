const faker = require('faker');
const _ = require('lodash');

module.exports  = () => {
    return {
        register: {
            data: true,
            errorMessage: faker.lorem.sentence(),
            errors: {}
        }
    }
};
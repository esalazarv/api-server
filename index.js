const faker = require('faker');
const _ = require('lodash');

module.exports  = () => {
    return {
        register: {
            data: true,
            errorMessage: faker.lorem.sentence(),
            errors: {}
        },
        register_error_: {
            data: false,
            errorMessage: faker.lorem.sentence(),
            errors: {}
        },
        sselSession: {
            data: {
                expiration: faker.date.future(),
                issuedAt: faker.date.past(),
                sselSecret: faker.lorem.text(),
            },
            errorMessage: null,
            errors: {}
        }
    }
};
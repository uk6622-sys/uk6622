// test-setup.js

const { setup, teardown } = require('your-test-library');

beforeAll(setup);
afterAll(teardown);

module.exports = { setup, teardown };
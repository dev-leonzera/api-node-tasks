const supertest = require('supertest');
const app = require('./app')

describe('App', () => {
    test("GET /api", async () => {
        const response = await supertest(app).get('/api')
        //
        expect(response.statusCode).toEqual(200)
        expect(response.body.message).toEqual('Success')
    });
})

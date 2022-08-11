const supertest = require('supertest');
const app = require('../../app')

describe('Testes do módulo de tarefas', () => {

    test("Get all tasks", async () => {
        const response = await supertest(app).get('/api/tasks')
    
        expect(response.statusCode).toEqual(200)
        expect(response.body).toBeTruthy()
    });

    test("Get one task", async () => {
        const response = await supertest(app).get('/api/tasks/show/1')
    
        expect(response.statusCode).toEqual(200)
        expect(response.body).toBeTruthy()
    });

    test("Create a new task", async () => {
        const response = await supertest(app).post('/api/tasks/create')

        expect(response.statusCode).toEqual(201)
        expect(response.body).toBeTruthy()
    })
})

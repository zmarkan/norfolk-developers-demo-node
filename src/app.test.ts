import request from 'supertest'
import app from './app'

describe('Test the root path', () => {
    test("Respond to GET", async () => {
        const res = await request(app).get("/")
        expect(res.status).toBe(200)
    })

    test("Not found", async () => {
        const res = await request(app).get("/404")
        expect(res.status).toBe(404)
    })

})


const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
       await connection.migrate.rollback();
       await connection.migrate.latest();

    });
    it ('shoud be able to create a new ONG', async () => {
        const res = await req(app).post('/ongs').send({
            name:"Lar colatina",
	        email:"contato@lish.com.br",
	        whatsapp:"2799777777",
	        city:"Colatina",
	        uf:"ES"
        });

       expect(res.body).toHaveProperty('id');
       expect(res.body.id).toHaveLength(8);
    });
})
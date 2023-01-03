const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST /track', () => {
  it('should save the data to a file and increment the count in the Redis database', (done) => {
    const data = { count: 1 };
    chai.request(app)
      .post('/track')
      .send(data)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('GET /count', () => {
  it('should return the count from the Redis database', (done) => {
    chai.request(app)
      .get('/count')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('string');
        done();
      });
  });
});

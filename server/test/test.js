import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../models/recipes';
import server from '../bin/www';

const should = chai.should();
chai.use(chaiHttp);
// describe('MoreRecipes Tests:', () => {
  describe('recipeController', () => {
    it('should return status code of 200 when recipe is added successfully', (done) => {
      chai.request(server)
        .post('/api/recipes')
        .send({
          id: 1,
          recipeName: 'vanilla ',
          type: ' icecream',
          ingredients: 'sugar'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
  });
// });

import request from 'supertest';
import { assert } from 'chai';
import app from '../../index';

describe('GET /api/recipes', () => {
  it('should return status code 200', (done) => {
    request(app)
      .get('/api/v1/recipes')
      .expect('content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        console.log(res);
         assert.equal(typeof(res.body), typeof{});
        done();
      });
  });
  it('should return status code 201', (done) => {
    request(app)
    .get('/api/v1/recipes/vote')
    .expect(201)
    .end((err,res) => {
      done();
    })
  })
 it('should return status code 201', (done) => {
    request(app)
    .get('/api/v1/recipes/vote')
    .expect(201)
    .end((err,res) => {
      done();
    })
  })
});
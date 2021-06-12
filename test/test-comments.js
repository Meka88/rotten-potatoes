const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const reviews = require('../controllers/reviews');
const should = chai.should();
const Review = require('../models/review');
const Comment = require('../models/comment'); 

    const sampleReview = {
        "title": "This is Test Review",
        "movie-titile": "La La Test",
        "description": "A great test review of a great La La Test movie"
    }
    chai.use(chaiHttp);
    describe('Comments', () => {
        const test_review = new Review(sampleReview);

        console.log('This is ', test_review);
    //done();
        const sampleComment = {
            "title": "Good one",
            "content": "very nice review",
            "reviewId": test_review.id
        }
    // Test Create new comment
    it('should create a comment', (done) => {
        console.log(sampleComment, '#');
        // Comment.create(sampleComment)
        //     .then((comment) => {
        //     console.log(comment)
            
            chai.request(server)
                .post('/reviews/comments')
                .set('content-type','application/x-www-form-urlencoded')
                .send(sampleComment)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
            //});
    });
    // TEST DELETE
    it('should delete a SINGLE review on /reviews/<id> DELETE', (done) => {
        var review = new Comment(sampleComment);
        review.save((err, data)  => {
         chai.request(server)
          .delete(`/reviews/${data._id}?_method=DELETE`)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html
            done();
          });
        });
      });
});
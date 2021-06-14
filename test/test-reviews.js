// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../app');
// const should = chai.should();
// const Review = require('../models/review');

// chai.use(chaiHttp);

// describe('Reviews', () => {

//     // Test Index
//     it('should index ALL reviews on / GET', (done) => {
//         chai.request(server)
//             .get('/')
//             .end((err, res) => {
//                 // 200 -> good 404 -> template not found
//               res.should.have.status(200);
//               res.should.be.html;
//               done();
//             });
//     });

//     // TEST NEW
//     it('should display posting new review form GET', (done) => {
//         chai.request(server)
//             .get('/reviews/new')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.html;

//                 // end the continous loop
//                 done();
//             });
//     });

//     // SAMPLE REVIEW
//     const sampleReview = {
//         "title": "Another test",
//         "movie-title": "La la land",
//         "description": "A good movie",
//     }

//     // TEST CREATE AND DETAIL PAGE
//     // it('should create a review and show detail for it', async (done) => {
//     //     // var review = Review.create(sampleReview);
//     //     Review.create(sampleReview).then((err, data) => {
//     //         chai.request(server)
//     //             .get(`/reviews/${data._id}`)
//     //             .end((err, res) => {
//     //                 res.should.have.status(200);
//     //                 res.should.be.html
//     //                 done();
//     //             });
//     //     });
//     //     done();
//     // });

    

//     //TEST EDIT
//     it('should create a review and edit it', async (done) => {
//         Review.create(sampleReview).then((err, data) => {
//             chai.request(server)
//                 .get(`/reviews/${data._id}/edit`)
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.should.be.html
//                     done();
//                 });
//         });
//         done();
//     });

//     // TEST CREATE
//     // it('should create a review', (done) => {
//     //     chai.request(server)
//     //         .post(`/reviews`)
//     //         .set('content-type', 'application/x-www-form-urlencoded')
//     //         .send(sampleReview)
//     //         .end((err, res) => {
//     //             res.should.have.status(200);
//     //             res.should.be.html
//     //             done();
//     //         });
//     //     });

//     // TEST UPDATE
//     it('should update a SINGLE review on /reviews/<id> PUT', (done) => {
//         var review = new Review(sampleReview);
//         review.save((err, data)  => {
//          chai.request(server)
//           .put(`/reviews/${data._id}?_method=PUT`)
//           .send({'title': 'Updating the title'})
//           .end((err, res) => {
//             res.should.have.status(200);
//             res.should.be.html
//             done();
//           });
//         });
//       });

//     // TEST DELETE

//     after(() => {
//         Review.deleteMany({title: 'Another Good Review'});
//         // Review.findOneAndRemove({title: 'Another Good Review'})
//         //     .then((review) => {
//         //         console.log(review);
//         //     })
//             // .exec((err, reviews) => {
//             //     console.log(reviews);
//                 // reviews.remove();
//         // })
//     });

// });



const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const reviews = require('../controllers/reviews');
const should = chai.should();
const Review = require('../models/review');
const sampleReview = {
    "title": "This is Test Review",
    "movie-titile": "La La Test",
    "description": "A great test review of a great La La Test movie"
}
chai.use(chaiHttp);
<<<<<<< HEAD
describe('Reviews', () => {
=======

describe('Reviews', () => {

>>>>>>> a79d56aad356bc94a8b0abdf92fb41d4a7df5d64
    // Test Index
    it('should index ALL reviews on / GET', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
<<<<<<< HEAD
                //res.should.have.status(200);
                //res.should.be.html;
                done();
            });
    });
    // Test New Review route
=======
                // 200 -> good 404 -> template not found
              res.should.have.status(200);
              res.should.be.html;
              done();
            });
    });

    // TEST NEW
>>>>>>> a79d56aad356bc94a8b0abdf92fb41d4a7df5d64
    it('should display posting new review form GET', (done) => {
        chai.request(server)
            .get('/reviews/new')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
<<<<<<< HEAD
                // end the continuous loop
                done();
            });
    });
    // Test Create new Review and Detail page
    it('should create a review and show detail for it', async (done) => {
        Review.create(sampleReview).then((err, data) => {
            chai.request(server)
                .get(`/reviews/${data._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
        });
        done();
    });
    // Test Edit route
    it('should edit a review and go to edit it route', async (done) => {
        Review.create(sampleReview).then((err, data) => {
            chai.request(server)
                .get(`/reviews/${data._id}/edit`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html
                    done();
                });
        });
        done();
    });
    // CRUD operations for reviews
    // Test Create new review
    it('should create a review', (done) => {
        chai.request(server)
            .post('/reviews')
            .set('content-type','application/x-www-form-urlencoded')
            .send(sampleReview)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });
    // Test Update
    it('should update a SINGLE review on /reviews/<id> PUT', (done) => {
        Review.create(sampleReview).then((err, data) => {
            chai.request(server)
                .put(`/reviews/${data._id}?_method=PUT`)
                .set('content-type','application/json')
                .send({'title': 'Updating the title'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html;
                    res.title.should.equal('Updating this title');
                    done();
                });
        });
        done();
    });
    console.log('checking reviews', sampleReview);
    // Test Create new comment
    it('should create a comment', (done) => {
        chai.request(server)
            .post('/reviews/comments')
            .set('content-type','application/x-www-form-urlencoded')
            .send(sampleReview)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
    });

    // TEST DELETE
  it('should delete a SINGLE review on /reviews/<id> DELETE', (done) => {
    var review = new Review(sampleReview);
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



    // Clean up
    after(() => {
        Review.deleteMany({title: 'This is Test Review'})
            .exec((err, reviews) => {
                // console.log(reviews);
            });
    });
});
=======

                // end the continous loop
                done();
            });
    });

    // SAMPLE REVIEW
    const sampleReview = {
        "title": "Another test",
        "movie-title": "La la land",
        "description": "A good movie",
    }

    // TEST CREATE AND DETAIL PAGE
    // it('should create a review and show detail for it', async (done) => {
    //     // var review = Review.create(sampleReview);
    //     Review.create(sampleReview).then((err, data) => {
    //         chai.request(server)
    //             .get(`/reviews/${data._id}`)
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.should.be.html
    //                 done();
    //             });
    //     });
    //     done();
    // });

    

    // TEST EDIT
    // it('should create a review and edit it', async (done) => {
    //     Review.create(sampleReview).then((err, data) => {
    //         chai.request(server)
    //             .get(`/reviews/${data._id}/edit`)
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.should.be.html
    //                 done();
    //             });
    //     });
    //     done();
    // });

    // TEST CREATE
    // it('should create a review', (done) => {
    //     chai.request(server)
    //         .post(`/reviews`)
    //         .set('content-type', 'application/x-www-form-urlencoded')
    //         .send(sampleReview)
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             res.should.be.html
    //             done();
    //         });
    //     });

    // TEST UPDATE
    it('should update a review', (done) => {
        var review = new Review(sampleReview);
        review.save((err, data) => {
            console.log(data);
            // console.log(data._id);
            
        }).then(data => {
            chai.request(server)
                .put(`/reviews/${data._id}?_method=PUT`)
                .set('content-type', 'application/json')
                .send({'title': 'Updating this title'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html;
                    data.title.should.equal('Updating this title');
                    done();
                });
        })
        done();
    });

    // TEST DELETE

    after(() => {
        Review.deleteMany({title: 'Another Good Review'});
        // Review.findOneAndRemove({title: 'Another Good Review'})
        //     .then((review) => {
        //         console.log(review);
        //     })
            // .exec((err, reviews) => {
            //     console.log(reviews);
                // reviews.remove();
        // })
    });

});
>>>>>>> a79d56aad356bc94a8b0abdf92fb41d4a7df5d64

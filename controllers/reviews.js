const Review = require('../models/review');
const Comment = require('../models/comment');
const User = require('../models/user')
var dateFormat = require('dateformat');
var now = new dateFormat();
module.exports = function (app) {

    // get home route, all reviews
    app.get('/', (req, res) => {
        //retrieve current user  
        const currentUser = req.user;
        Review.find().lean().populate('author')
            .then(reviews => {
                res.render('reviews-index', { reviews: reviews, currentUser });
            })
            .catch(err => {
                console.log(err);
            })
    })

    // NEW REVIEW FORM (TEMPLATE)
    app.get('/reviews/new', (req, res) => {
        res.render('reviews-new', {title: "Post a Review"})
    })

    // CREATING A REVIEW
<<<<<<< HEAD
    app.post('/reviews/new', (req, res) => {
        if (req.user) {
        const userId = req.user._id;
        const review = new Review(req.body);
        review.author = userId;
    
        review
            .save()
            .then(() => User.findById(userId))
            .then((user) => {
            user.reviews.unshift(review);
            user.save();
            // REDIRECT TO THE NEW review
            return res.redirect(`/reviews/${review._id}`);
            })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      return res.status(401); // UNAUTHORIZED
    }
    });
=======
    app.post('/reviews', (req, res) => {
        Review.create(req.body)
            .then((review) => {
                console.log(review, res.status);
                res.redirect(`/reviews/${review._id}`)
            })
            .catch((err) => {
                console.log(err.message);
            })
    })

>>>>>>> a79d56aad356bc94a8b0abdf92fb41d4a7df5d64
    // GETTING SINGLE REVIEW
    app.get('/reviews/:id', (req, res) => {
        const currentUser = req.user;

        Review.findById(req.params.id).lean().populate('comments').populate('author')
            .then(review => {

                //Check if user requesting website is review author
                if (currentUser == null) {
                    var theAuthor = false;
                }
                else if (currentUser.username === review.author.username){
                    theAuthor = true;
                }
                var createdAtFormatted = dateFormat(review.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT");
                var updatedAtFormatted = dateFormat(review.updatedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT");
                
            Comment.find({ reviewId: req.params.id })
                .then(comments => {
                    res.render('reviews-show', 
                    { review: review, comments: comments, currentUser, theAuthor, createdAtFormatted, updatedAtFormatted})
                })
            }).catch((err) => {
                console.log(err.message);
            });
    })

    // GETTING EDIT FORM
    app.get('/reviews/:id/edit', (req, res) => {
        Review.findById(req.params.id, function (err, review) {
            res.render('reviews-edit', { review: review, title: "Edit Review" });
        }).catch((err) => {
            console.log(err.message);
        });
    })

    // LOGIC FOR UPDATING A REVIEW
    app.put('/reviews/:id', (req, res) => {
        Review.findByIdAndUpdate(req.params.id, req.body)
            .then(review => {
                res.redirect(`/reviews/${review._id}`)
            }).catch((err) => {
                console.log(err.message);
            })
    })

    // LOGIC FOR DELETING A REVIEW
    app.delete('/reviews/:id', function (req, res) {
        console.log('Delete review');
        Review.findByIdAndRemove(req.params.id).then((review) => {
            console.log(`Successfully deleted: ${review}`)
            res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        })
    })

}

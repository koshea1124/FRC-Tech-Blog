const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//Route to homepage
router.get('/', async (req, res) => {
    try {
        //Find posts with a given username
        const postData = await Post.findAll ({
            include: [{ model: User, attributes: ['username'] }],
        });
        //Convert post to JSON
        const posts = postData.map((post) => post.get({plain: true}));
        //Render homepage
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Route to Posts
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        //Find post by ID and comments associated with usernames
        const postData = await Post.findByPk (req.params.id, {
            include: [
                { model: User, attributes: ['username'] },
                { model: Comment, include: [{ model: User, attributes: ['username'] }]},
            ],
        });
        //Convert posts to JSON
        const post = postData.get({ plain: true });
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,
        });
    }   catch (err) {
        res.status(500).json(err);
        }
    });

    //Route to render dashboard page with all posts by a user
    router.get('/dashboard', withAuth, async (req, res) => {
        try {
            const postData = await Post.findAll ({
                where: { user_id: req.session.user_id },
                include: [{ model: User, attributes: ['username'] }],
            });
            //Convert to JSON
            const posts = postData.map((post) => post.get({ plain: true}));
            res.render('dashboard', {
                posts,
                logged_in: req.session.logged_in,
            });
        }  catch (err) {
            res.status(500).json(err);
        }
    });

    router.get('/login', (req, res) => {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        }
        res.render('login');
    });

    router.get('/signup', (req, res) => {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return
        }
        res.render('signup');
    });

    //New Post Page
    router.get('/newpost', (req, res) => {
        if (req.session.logged_in) {
            res.render("newpost");
            return;
          }
          res.redirect("/login");
        });

    //Edit Post Page
    router.get('/editpost/:id', async (req, res) => {
        try {
            const postData = await Post.findByPk(req.params.id, {
                include: [
                        { model: User, attributes: ['username'] },
                        { model: Comment, include: [{ model: User, attributes: ['username'] }],
                    },
                ],
            });

            const post = postData.get({ plain: true });

            res.render('editpost', {
                ...post,
                logged_in: req.session.logged_in,
            });
        }  catch (err) {
            res.status(500).json(err);
        }
    });

    module.exports = router;
        

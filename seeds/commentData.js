const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Nice Robot',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'What is the gear ratio on the climbing mechanism',
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: 'What competitions are you goint to this year?',
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: 'I cannot wait to see your robot!',
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: 'This robot will definitely be in Houston',
        user_id: 5,
        post_id: 1,
    },
    {
        comment_text: 'Thanks everybody! We will be competing at the Arizona East Regional and the Aerospace Valley Regional.',
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: 'OMG! We are going to AVR as well.  We will see you there!',
        user_id: 2,
        post_id: 2,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    updateThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// get all thoughts
router.route('/').get(getAllThoughts);

// get thought by id
router.route('/:id').get(getThoughtById);

// update thought by id
router.route('/:id').put(updateThoughtById);

// /api/thoughts/<userId>
router.route('/').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;

// TODO: clean up routes
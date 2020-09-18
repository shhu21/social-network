const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// TODO: get all thoughts
// router.route('/:userId').get(getAllThoughts);

// TODO: get thought by id
// router.route('/:userId/:thoughtId').get(getThoughtById);

// TODO: update thought by id
// router.route('/:userId/:thoughtId').put(updateThought);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// FIXME: might need to change the route
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
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
// post a new thought
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// get/update thought by id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThoughtById);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
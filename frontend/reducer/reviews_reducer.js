import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/review_actions";


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case RECEIVE_REVIEWS:
            return action.reviews;
        default:
            return state;
    }
}

export default reviewsReducer;
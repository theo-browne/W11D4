import * as APIReviewUtil from '../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';


export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const fetchReviews = (benchId) => dispatch => {
    return APIReviewUtil.fetchReviews(benchId).then(reviews => dispatch(receiveReviews(reviews)))
}
export const createReview = (benchId, review) => dispatch => {
    return APIReviewUtil.createReview(benchId, review).then(review => dispatch(receiveReview(review)))
}

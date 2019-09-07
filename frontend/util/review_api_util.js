export const fetchReviews = (benchId) => {
    return $.ajax({
        method: "GET",
        url: `/api/benches/${benchId}/reviews`
    })
}

export const createReview = (benchId, review) => {
    return $.ajax({
        method: "POST",
        url: `/api/benches/${benchId}/reviews`,
        data: {review}
    })
}
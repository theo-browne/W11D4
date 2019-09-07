json.set! @review.id do 
        json.id @review.id
        json.rating @review.rating
        json.comment @review.comment
        json.author @review.user.username
        json.bench_id @review.bench_id
    end 
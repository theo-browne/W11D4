total_score = 0 

@reviews.each do |bench|
    total_score += bench.rating
end 


if @reviews.length > 0  

end 
@reviews.each do |review|
    json.set! review.id do 
        json.id review.id
        json.rating review.rating
        json.comment review.comment
        json.author review.user.username
        json.bench_id review.bench_id
    end 
json.average_rating (total_score / @reviews.length)
end 
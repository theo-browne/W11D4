class Api::ReviewsController < ApplicationController

    def index
        @bench = Bench.find(params[:bench_id])
        @reviews = @bench.reviews
        render :index
    end 

    def create 
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save
            render :show
        else 
            render @review.errors.full_messages, status: 422
        end
    end

    def review_params 
        params.require(:review).permit(:comment, :rating, :bench_id)
    end 
end

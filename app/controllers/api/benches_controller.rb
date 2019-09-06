class Api::BenchesController < ApplicationController

    def create
        
        @bench = Bench.new(bench_params)

        if @bench.save
            render :show
        else 
            render json: @bench.errors.full_messages, status: 422
        end
    end 

    def index 
        @benches = Bench.in_bounds(params[:bench])
        
        render :index
    end 


    def bench_params 
        params.require(:bench).permit(:lat, :lng, :description, :bounds, :seating, :min_seating, :max_seating)
    end
end

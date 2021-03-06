class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence: true

    has_many :reviews

    has_one_attached :photo


    def self.in_bounds(bounds)
        
        maxlat = bounds["maxlat"]
        maxlng = bounds["maxlng"]
        minlat = bounds["minlat"]
        minlng = bounds["minlng"]
        benches = Bench.where("benches.lat < #{maxlat} AND benches.lng < #{maxlng} AND benches.lat > #{minlat} AND benches.lng > #{minlng}")
        if bounds["min_seating"] 
            benches = Bench.filter_min(benches, bounds["min_seating"])
        end 
        if bounds["max_seating"] 
            benches = Bench.filter_max(benches, bounds["max_seating"] )
        end 
        return benches
    end

    def self.filter_max(benches, max)
        benches.select{|bench| bench.seating <= max.to_i}
    end
    def self.filter_min(benches, min)
        benches.select{|bench| bench.seating >= min.to_i}
    end

end

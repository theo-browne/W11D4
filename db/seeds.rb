# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
include Faker

Bench.destroy_all

5.times do 
 Bench.create(description: Faker::TvShows::RickAndMorty.quote, seating: rand(1..6), lng: (-122.4 - (0.02)* rand()), lat: (37.8 - (0.02) * rand()))

end
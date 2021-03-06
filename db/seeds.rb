require 'csv'
puts "🌱 Seeding spices..."
puts "seeding movies..."

csv_text = File.read('lib/seeds/movie_lists_movies.csv')
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |t|
      Movie.create({
          title: t['title'], 
          img_url: t['img_url'], 
          release_year: t['release_year'], 
          genre: t['genre'], 
          desc: t['desc'],
          runtime:t['runtime'],
          rating: t['rating']
        })
end
puts "seeding shows..."
shows = File.read('lib/seeds/show_lists_tv_shows.csv')
csv = CSV.parse(shows, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |t|
      Show.create({
          title: t['title'], 
          img_url: t['img_url'], 
          release_year: t['release_year'], 
          genre: t['genre'], 
          desc: t['desc'],
          total_episode:t['total_episode'],
          total_season:t['total_season'],
          runtime:t['runtime'],
          rating:t['rating']
        })
end
puts "seeding users..."
40.times do
    User.create(full_name: Faker::Name.name)
end
puts "seeding movie/show reviews"
User.all.each do |t|
    rand(1..5).times do 
        Review.create(comment: Faker::Lorem.sentence(word_count: 8), rating: rand(1..10), movie_id: Movie.all.sample.id, user_id: t.id)
        Review.create(comment: Faker::Lorem.sentence(word_count: 8), rating: rand(1..10), show_id: Show.all.sample.id, user_id: t.id)
    end
end
# puts "seeding show reviews"
# User.all.each do |t|
#     rand(1..10) do 
#     end
# end




puts "✅ Done seeding!"

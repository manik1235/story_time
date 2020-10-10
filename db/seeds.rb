# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

episodes = [{ id: 1, name: "The Prequel", url: "http://google.com", number: 1, created_at: "2020-06-12 00:55:00", updated_at: "2020-06-13 05:43:01", series_id: 1 }, { id: 2, name: "The Episode After the Prequel", url: "http://duckduckgo.com", number: 2, created_at: "2020-06-12 01:08:52", updated_at: "2020-06-13 05:43:01", series_id: 1 }, { id: 3, name: "The First One", url: "http://yahoo.com", number: 3, created_at: "2020-06-12 01:09:19", updated_at: "2020-06-13 05:43:01", series_id: 1 }, { id: 4, name: "Cooking with Alice", url: nil, number: 1, created_at: "2020-06-13 05:45:25", updated_at: "2020-06-13 05:45:25", series_id: 2 }, { id: 5, name: "Cooking with Bilsiph", url: nil, number: 2, created_at: "2020-06-13 05:47:02", updated_at: "2020-06-13 05:47:02", series_id: 2 }]

episodes.each { |episode| Episode.create(episode) }

hexes = [{ id: 1, name: "Desert", x: 0, y: 0, z: 0, background: "desert.png", created_at: "2020-06-12 00:44:40", updated_at: "2020-06-12 00:44:40" }, { id: 2, name: "Oasis", x: 1, y: 0, z: 0, background: "oasis.png", created_at: "2020-06-12 01:10:06", updated_at: "2020-06-12 01:16:28" }]

hexes.each { |hex| Hex.create(hex) }

maps = [{ id: 1, background: "tim.jpg", width: 800, height: 800, created_at: "2020-06-10 19:49:43", updated_at: "2020-06-10 22:21:23" }]

maps.each { |map| Map.create(map) }

axes = [
  {:name=>"q", :degrees=>60, :x_offset=>13, :y_offset=>94, :hex_diameter=>133, :map_width=>800, :map_height=>800, :dash_filled_length=>44, :dash_blank_length=>89, :color=>"#ff0000", :map_id=>1},
  {:name=>"r", :degrees=>0, :x_offset=>39, :y_offset=>94, :hex_diameter=>76.7, :map_width=>800, :map_height=>800, :dash_filled_length=>44, :dash_blank_length=>89, :color=>"#00ff00", :map_id=>1},
  {:name=>"s", :degrees=>-60, :x_offset=>106, :y_offset=>-22, :hex_diameter=>133, :map_width=>800, :map_height=>800, :dash_filled_length=>44, :dash_blank_length=>89, :color=>"#0000ff", :map_id=>1}
]

axes.each { |axis| Axis.create(axis) }

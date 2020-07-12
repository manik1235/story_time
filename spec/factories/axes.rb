FactoryBot.define do
  factory :axis do
    name { "q" }
    degrees { 60 }
    x_offset { 1 }
    y_offset { 1 }
    hex_diameter { 30 }
    map_width { 100 }
    map_height { 100 }
    dash_filled_length { 5 }
    dash_blank_length { 10 }
    color { "#ff0000" }
    association :map
  end
end

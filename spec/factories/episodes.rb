FactoryBot.define do
  factory :episode do
    name { "The one where it's tested" }
    sequence(:number) { |n| n }
    url { "http://www.example.com" }
    association :series
  end
end

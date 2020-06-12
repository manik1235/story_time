FactoryBot.define do
  factory :hex do
    name { "Desert" }
    sequence(:x) { |n| n }
    sequence(:y) { |n| n }
    sequence(:z) { |n| n }
    background { "desert.png" }
  end
end

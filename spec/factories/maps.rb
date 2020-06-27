FactoryBot.define do
  factory :map do
    sequence(:x) { |n| n }
    sequence(:y) { |n| n }
    sequence(:z) { |n| n }
    background { "test.png" }
  end
end

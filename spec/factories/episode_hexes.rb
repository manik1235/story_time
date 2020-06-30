FactoryBot.define do
  factory :episode_hexes do
    association :episode
    association :hex
  end
end

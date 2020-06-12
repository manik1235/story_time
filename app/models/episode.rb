class Episode < ApplicationRecord
  has_many :episode_hexes
  has_many :hexes, through: :episode_hexes
end

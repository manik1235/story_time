class Hex < ApplicationRecord
  has_many :episode_hexes
  has_many :episodes, through: :episode_hexes

  def coordinates
    [x, y, z]
  end
end

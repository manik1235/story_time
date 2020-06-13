class Series < ApplicationRecord
  has_many :episodes
 # has_many :hexes, through: :episodes
 # has_many :items, through: :episodes
 # has_many :maps, through: :episodes
 # has_many :npcs, through: :episdoes

end

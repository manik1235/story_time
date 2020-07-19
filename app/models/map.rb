class Map < ApplicationRecord
  has_many :axes

  def to_json
    MapSerializer.new(self).to_json
  end
end

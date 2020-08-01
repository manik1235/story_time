class Map < ApplicationRecord
  has_many :axes

  def to_json
    MapSerializer.new(self).to_json
  end

  def number_of_axes
    axes.count
  end
end

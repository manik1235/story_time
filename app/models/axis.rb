class Axis < ApplicationRecord
  belongs_to :map

  def to_json
    AxisSerializer.new(self).to_json
  end
end

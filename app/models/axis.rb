class Axis < ApplicationRecord
  belongs_to :map

  delegate :height,
    :width,
    to: :map,
    prefix: true

  def to_json
    AxisSerializer.new(self).to_json
  end
end

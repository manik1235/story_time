class Axis < ApplicationRecord
  belongs_to :map
  JSON_ATTRIBUTES = %i(name degrees x_offset y_offset hex_diameter map_width map_height dash_filled_length dash_blank_length color)

  def to_json
    JSON_ATTRIBUTES.reduce({}) do |a, attr|
      a[attr.to_s.camelize(:lower)] = public_send(attr)
      a
    end.to_json
  end
end

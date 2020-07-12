class Axis < ApplicationRecord
  belongs_to :map
  JSON_COLUMNS = %i(name degrees x_offset y_offset hex_diameter map_width map_height dash_filled_length dash_blank_length color)

  def to_json
    JSON_COLUMNS.reduce({}) do |a, column|
      a[column.to_s.camelize(:lower)] = public_send(column)
      a
    end.to_json
  end
end

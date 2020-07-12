class Axis < ApplicationRecord
  belongs_to :map

  def to_json
    columns = %i(degrees x_offset y_offset hex_diameter map_width map_height dash_filled_length dash_blank_length color)

    columns.reduce({}) do |a, column|
      a[column] = public_send(column)
      a
    end.to_json
  end
end

class AxisSerializer < ActiveModel::Serializer
  attributes %i(name degrees x_offset y_offset hex_diameter map_width map_height dash_filled_length dash_blank_length color)
end

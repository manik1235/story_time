module MapsHelper
  def data_attributes(map)
    data = ""

    data += "data-map-background=#{map.background}"
    map.axes.each do |axis|
      data += " data-#{axis.name}=#{axis.to_json}"
    end

    data
  end
end

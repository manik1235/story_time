class MapSerializer < ActiveModel::Serializer
  attributes %i(background axes)

  def axes
    self.object.axes.map do |axis|
      axis.to_json
    end
  end
end

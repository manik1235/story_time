require 'rails_helper'

RSpec.describe Axis, type: :model do
  describe "::JSON_COLUMNS" do
    it "returns an array of keys to be serialized" do
      expect(Axis::JSON_COLUMNS).to eql([:name, :degrees, :x_offset, :y_offset, :hex_diameter, :map_width, :map_height, :dash_filled_length, :dash_blank_length, :color])
    end
  end

  describe "#to_json" do
    it "returns the data items required for displaying a map" do
      axis = FactoryBot.build(:axis)

      expect(axis.to_json).to eql(
        "{\"name\":\"q\",\"degrees\":60.0,\"xOffset\":1.0,\"yOffset\":1.0,\"hexDiameter\":30.0,\"mapWidth\":100,\"mapHeight\":100,\"dashFilledLength\":5,\"dashBlankLength\":10,\"color\":\"#ff0000\"}"
      )
    end
  end
end

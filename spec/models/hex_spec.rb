require 'rails_helper'

RSpec.describe Hex, type: :model do
  describe "#coordinates" do
    it "returns an array of the hex's coordinates" do
      hex = build(:hex, x: 0, y: 1, z: 2)
      expect(hex.coordinates).to eql [0, 1, 2]
    end
  end
end

require "rails_helper"

RSpec.describe AxisController, type: :routing do
  describe "routing" do
    it "routes to #update via PUT" do
      expect(put: "/axis/1").to route_to("axis#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/axis/1").to route_to("axis#update", id: "1")
    end
  end
end

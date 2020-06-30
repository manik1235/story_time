require "rails_helper"

RSpec.describe HexesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/hexes").to route_to("hexes#index")
    end

    it "routes to #new" do
      expect(get: "/hexes/new").to route_to("hexes#new")
    end

    it "routes to #show" do
      expect(get: "/hexes/1").to route_to("hexes#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/hexes/1/edit").to route_to("hexes#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/hexes").to route_to("hexes#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/hexes/1").to route_to("hexes#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/hexes/1").to route_to("hexes#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/hexes/1").to route_to("hexes#destroy", id: "1")
    end
  end
end

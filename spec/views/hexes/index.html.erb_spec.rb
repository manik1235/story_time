require 'rails_helper'

RSpec.describe "hexes/index", type: :view do
  before(:each) do
    assign(:hexes, [
      Hex.create!(),
      Hex.create!()
    ])
  end

  it "renders a list of hexes" do
    render
  end
end

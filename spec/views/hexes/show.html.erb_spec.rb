require 'rails_helper'

RSpec.describe "hexes/show", type: :view do
  before(:each) do
    @hex = assign(:hex, Hex.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end

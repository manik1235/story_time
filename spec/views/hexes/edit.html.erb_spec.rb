require 'rails_helper'

RSpec.describe "hexes/edit", type: :view do
  before(:each) do
    @hex = assign(:hex, Hex.create!())
  end

  it "renders the edit hex form" do
    render

    assert_select "form[action=?][method=?]", hex_path(@hex), "post" do
    end
  end
end

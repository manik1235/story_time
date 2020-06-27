require 'rails_helper'

RSpec.describe "hexes/new", type: :view do
  before(:each) do
    assign(:hex, Hex.new())
  end

  it "renders new hex form" do
    render

    assert_select "form[action=?][method=?]", hexes_path, "post" do
    end
  end
end

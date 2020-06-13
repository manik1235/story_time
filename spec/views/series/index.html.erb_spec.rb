require 'rails_helper'

RSpec.describe "series/index", type: :view do
  before(:each) do
    assign(:series, [
      Series.create!(
        name: "Name"
      ),
      Series.create!(
        name: "Name"
      )
    ])
  end

  it "renders a list of series" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
  end
end

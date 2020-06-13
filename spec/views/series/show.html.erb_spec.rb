require 'rails_helper'

RSpec.describe "series/show", type: :view do
  before(:each) do
    @series = assign(:series, Series.create!(
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end

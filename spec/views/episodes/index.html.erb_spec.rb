require 'rails_helper'

RSpec.describe "episodes/index", type: :view do
  before(:each) do
    assign(:episodes, FactoryBot.create_list(:episode, 2))
  end

  it "renders a list of episodes" do
    render
  end
end

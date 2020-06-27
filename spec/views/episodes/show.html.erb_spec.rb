require 'rails_helper'

RSpec.describe "episodes/show", type: :view do
  before(:each) do
    @episode = assign(:episode, FactoryBot.create(:episode))
  end

  it "renders attributes in <p>" do
    render
  end
end

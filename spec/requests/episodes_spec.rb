 require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/episodes", type: :request do
  # Episode. As you add validations to Episode, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {
      series_id: FactoryBot.create(:series).id
    }
  end

  let(:invalid_attributes) do
    {
      series_id: "not a series id"
    }
  end

  describe "GET /index" do
    it "renders a successful response" do
      Episode.create! valid_attributes
      get episodes_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      episode = Episode.create! valid_attributes
      get episode_url(episode)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_episode_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "render a successful response" do
      episode = Episode.create! valid_attributes
      get edit_episode_url(episode)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Episode" do
        expect {
          post episodes_url, params: { episode: valid_attributes }
        }.to change(Episode, :count).by(1)
      end

      it "redirects to the created episode" do
        post episodes_url, params: { episode: valid_attributes }
        expect(response).to redirect_to(episode_url(Episode.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Episode" do
        expect {
          post episodes_url, params: { episode: invalid_attributes }
        }.to change(Episode, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post episodes_url, params: { episode: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_series) { FactoryBot.create(:series) }
      let(:new_attributes) do
        {
          series_id: new_series.id
        }
      end

      it "updates the requested episode" do
        episode = Episode.create! valid_attributes
        patch episode_url(episode), params: { episode: new_attributes }
        episode.reload
        expect(episode.series.id).to eql(new_series.id)
      end

      it "redirects to the episode" do
        episode = Episode.create! valid_attributes
        patch episode_url(episode), params: { episode: new_attributes }
        episode.reload
        expect(response).to redirect_to(episode_url(episode))
      end
    end

    context "with invalid parameters" do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        episode = Episode.create! valid_attributes
        patch episode_url(episode), params: { episode: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested episode" do
      episode = Episode.create! valid_attributes
      expect {
        delete episode_url(episode)
      }.to change(Episode, :count).by(-1)
    end

    it "redirects to the episodes list" do
      episode = Episode.create! valid_attributes
      delete episode_url(episode)
      expect(response).to redirect_to(episodes_url)
    end
  end
end

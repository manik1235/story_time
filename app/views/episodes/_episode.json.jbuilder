json.extract! episode, :id, :name, :url, :number, :created_at, :updated_at
json.url episode_url(episode, format: :json)

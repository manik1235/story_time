Rails.application.routes.draw do
  root "series#index"

  resources :axis, only: [:update, :edit]
  resources :episodes
  resources :hexes
  resources :maps
  resources :series
  resources :welcomes

  if Rails.env.development? || Rails.env.test?
    get 'jasmine', to: 'jasmine#index'
  end
end

Rails.application.routes.draw do
  root "series#index"

  resources :axis, only: :update
  resources :episodes
  resources :hexes
  resources :maps
  resources :series

  if Rails.env.development? || Rails.env.test?
    get 'jasmine', to: 'jasmine#index'
  end
end

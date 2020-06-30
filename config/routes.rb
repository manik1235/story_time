Rails.application.routes.draw do
  root "series#index"

  resources :episodes
  resources :hexes
  resources :maps
  resources :series
  resources :welcomes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

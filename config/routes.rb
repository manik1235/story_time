Rails.application.routes.draw do
  root "welcomes#index"

  resources :episodes
  resources :hexes
  resources :items
  resources :maps
  resources :npcs
  resources :users
  resources :welcomes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

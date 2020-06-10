Rails.application.routes.draw do
  root "welcomes#index"

  resources :welcomes
  resources :items
  resources :users
  resources :npcs
  resources :maps
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

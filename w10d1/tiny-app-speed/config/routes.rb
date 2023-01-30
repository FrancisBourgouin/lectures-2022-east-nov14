Rails.application.routes.draw do
  root "urls#everyboday"

  resources :urls
  resources :users

  get "login" => "session#new"
  post "login" => "session#create"
  get "logout" => "session#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

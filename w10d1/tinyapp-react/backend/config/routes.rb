Rails.application.routes.draw do
  resources :urls
  resources :users

  post "/login" => "session#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

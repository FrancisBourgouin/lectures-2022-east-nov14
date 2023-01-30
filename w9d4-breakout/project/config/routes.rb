Rails.application.routes.draw do
  

  scope :api do
    namespace :v1 do
      resources :weathers
    end
    namespace :v2 do
      resources :weathers
    end
    namespace :v3 do
      resources :weathers
    end
  
  end

  # app.get("/", authors.index)


  
  # namespace :admin do
  #   resources :authors, only: [:show, :destroy, :create]
  # end
  
  # scope :api do
  #   resources :authors, except: [:destroy, :create]
  
  # end

  # namespacing
  # scoping
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


# apiname.com/api/v1/current_weather
# apiname.com/api/v2/current_weather
# apiname.com/api/v3/current_weather
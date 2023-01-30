json.extract! weather, :id, :current, :temp, :created_at, :updated_at
json.url weather_url(weather, format: :json)

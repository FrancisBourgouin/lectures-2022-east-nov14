json.extract! todo, :id, :task, :description, :is_completed, :created_at, :updated_at
json.url todo_url(todo, format: :json)

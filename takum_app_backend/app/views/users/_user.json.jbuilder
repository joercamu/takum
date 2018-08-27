json.extract! user, :id, :name, :user, :pass, :role_id, :created_at, :updated_at
json.url user_url(user, format: :json)

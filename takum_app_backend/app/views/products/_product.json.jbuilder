json.extract! product, :id, :name, :info, :cost, :category_id, :created_at, :updated_at
json.url product_url(product, format: :json)

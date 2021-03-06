Rails.application.routes.draw do
  resources :products
  resources :categories
  resources :users
  resources :roles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/users/validate/:user/:pass/:role', to: 'users#validate'
end

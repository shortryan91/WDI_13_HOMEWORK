Rails.application.routes.draw do
  resources :comments
  get '/comments/:id/confirm_del', to: 'comments#confirm_del'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :home
  # resources :dish


  get '/', to: 'home#index'

  get '/dishes', to: 'dishes#index'
  get '/dishes/new', to: 'dishes#new'
  post '/dishes', to: 'dishes#create'
  get '/dishes/:id', to: 'dishes#show'

  get '/dishes/:id/edit', to: 'dishes#edit'
  put '/dishes/:id', to: 'dishes#update'

  delete '/dishes/:id', to: 'dishes#destroy'
end

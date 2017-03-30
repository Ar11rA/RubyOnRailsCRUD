Rails.application.routes.draw do
  get 'subjects/index'

  get 'subjects/show'

  get 'subjects/new'

  get 'subjects/create'

  get 'subjects/delete'

  get 'subjects/destroy'

  get 'subjects_controller/index'

  get 'subjects_controller/show'

  get 'subjects_controller/new'

  get 'subjects_controller/create'

  get 'subjects_controller/delete'

  get 'subjects_controller/destroy'

  root 'test_controller#index'
  get 'test_controller/index'
  get 'test_controller/hello' => 'test_controller#hello'
  get 'test_controller/wrong'
  resources :users ,:only => [:index, :show]
  resources :subjects do
    member do
      get :delete
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

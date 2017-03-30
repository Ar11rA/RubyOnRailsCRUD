class TestControllerController < ApplicationController
  def index
    @array = Array(0..10)
    render('index')
  end
  def hello
    render('hello')
  end
  def wrong
    redirect_to(:controller => 'test_controller',:action => 'index')
  end
end

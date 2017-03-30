require 'test_helper'

class TestControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get test_controller_index_url
    assert_response :success
  end

end

require 'test_helper'

class SubjectsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get subjects_controller_index_url
    assert_response :success
  end

  test "should get show" do
    get subjects_controller_show_url
    assert_response :success
  end

  test "should get new" do
    get subjects_controller_new_url
    assert_response :success
  end

  test "should get create" do
    get subjects_controller_create_url
    assert_response :success
  end

  test "should get delete" do
    get subjects_controller_delete_url
    assert_response :success
  end

  test "should get destroy" do
    get subjects_controller_destroy_url
    assert_response :success
  end

end

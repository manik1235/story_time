require 'test_helper'

class HexesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hex = hexes(:one)
  end

  test "should get index" do
    get hexes_url
    assert_response :success
  end

  test "should get new" do
    get new_hex_url
    assert_response :success
  end

  test "should create hex" do
    assert_difference('Hex.count') do
      post hexes_url, params: { hex: { background: @hex.background, name: @hex.name, x: @hex.x, y: @hex.y, z: @hex.z } }
    end

    assert_redirected_to hex_url(Hex.last)
  end

  test "should show hex" do
    get hex_url(@hex)
    assert_response :success
  end

  test "should get edit" do
    get edit_hex_url(@hex)
    assert_response :success
  end

  test "should update hex" do
    patch hex_url(@hex), params: { hex: { background: @hex.background, name: @hex.name, x: @hex.x, y: @hex.y, z: @hex.z } }
    assert_redirected_to hex_url(@hex)
  end

  test "should destroy hex" do
    assert_difference('Hex.count', -1) do
      delete hex_url(@hex)
    end

    assert_redirected_to hexes_url
  end
end

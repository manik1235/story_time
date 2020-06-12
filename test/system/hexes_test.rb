require "application_system_test_case"

class HexesTest < ApplicationSystemTestCase
  setup do
    @hex = hexes(:one)
  end

  test "visiting the index" do
    visit hexes_url
    assert_selector "h1", text: "Hexes"
  end

  test "creating a Hex" do
    visit hexes_url
    click_on "New Hex"

    fill_in "Background", with: @hex.background
    fill_in "Name", with: @hex.name
    fill_in "X", with: @hex.x
    fill_in "Y", with: @hex.y
    fill_in "Z", with: @hex.z
    click_on "Create Hex"

    assert_text "Hex was successfully created"
    click_on "Back"
  end

  test "updating a Hex" do
    visit hexes_url
    click_on "Edit", match: :first

    fill_in "Background", with: @hex.background
    fill_in "Name", with: @hex.name
    fill_in "X", with: @hex.x
    fill_in "Y", with: @hex.y
    fill_in "Z", with: @hex.z
    click_on "Update Hex"

    assert_text "Hex was successfully updated"
    click_on "Back"
  end

  test "destroying a Hex" do
    visit hexes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Hex was successfully destroyed"
  end
end

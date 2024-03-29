require "application_system_test_case"

class UrlsTest < ApplicationSystemTestCase
  setup do
    @url = urls(:one)
  end

  test "visiting the index" do
    visit urls_url
    assert_selector "h1", text: "Urls"
  end

  test "creating a Url" do
    visit urls_url
    click_on "New Url"

    fill_in "Description", with: @url.description
    fill_in "Long url", with: @url.long_url
    fill_in "Short url", with: @url.short_url
    fill_in "User", with: @url.user_id
    click_on "Create Url"

    assert_text "Url was successfully created"
    click_on "Back"
  end

  test "updating a Url" do
    visit urls_url
    click_on "Edit", match: :first

    fill_in "Description", with: @url.description
    fill_in "Long url", with: @url.long_url
    fill_in "Short url", with: @url.short_url
    fill_in "User", with: @url.user_id
    click_on "Update Url"

    assert_text "Url was successfully updated"
    click_on "Back"
  end

  test "destroying a Url" do
    visit urls_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Url was successfully destroyed"
  end
end

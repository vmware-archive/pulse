require 'rspec'
require 'capybara/rspec'
require 'capybara/poltergeist'

Capybara.app_host = "http://localhost:8080"
Capybara.default_driver = :poltergeist

def anchor_from_url(url)
  URI.parse(url).fragment.sub(/\?.*/, '')
end

describe 'Clicking on the add project button', type: :feature do

  it 'should redirect to the add project page' do
    visit '/'

    click_on 'Add New Project'

    expect(page.status_code).to eq 200
    expect(anchor_from_url(current_url)).to eq '/projects/new'
  end
end
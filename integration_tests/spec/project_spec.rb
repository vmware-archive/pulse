require 'rspec'
require 'capybara/rspec'
require 'capybara/poltergeist'

Capybara.app_host = "http://localhost:8080"
Capybara.default_driver = :poltergeist

describe 'Anchor configures a new project', type: :feature do
  it 'creates a new project' do
    navigates_to_new_project_page
    saves_project
  end

  it 'displays an error alert on project name duplicate' do
    navigates_to_new_project_page
    saves_duplicate_project_name
  end
end

def navigates_to_new_project_page
  visit '/'

  click_on 'Add New Project'

  expect(page.status_code).to eq 200
  expect(page).to have_content(/New Project/)
  expect(current_path).to eq '/projects/new'
end

def saves_project
  fill_in 'Name', with: 'My Lovely Project'
  click_on 'Submit'

  expect(page.status_code).to eq 200
  expect(page).to have_content(/My Lovely Project was created/)
  expect(current_path).to eq '/'
end

def saves_duplicate_project_name
  fill_in 'Name', with: 'My Lovely Project'
  click_on 'Submit'

  expect(page.status_code).to eq 200
  expect(page).to have_content(/Project name already exists/)
  expect(current_path).to eq '/projects/new'
end

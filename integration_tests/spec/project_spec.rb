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
    name = saves_project
    navigates_to_new_project_page
    saves_duplicate_project_name(name)
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
  name = 'My Lovely Project' + Time.now.to_f.to_s
  fill_in 'Name', with: name
  click_on 'Submit'

  expect(page.status_code).to eq 200
  expect(page).to have_css('.alert-info')
  expect(page).to have_content(/#{name}/)
  expect(current_path).to eq '/'
  name
end

def saves_duplicate_project_name(name)
  fill_in 'Name', with: name
  click_on 'Submit'

  expect(page.status_code).to eq 200
  expect(page).to have_css('.alert-danger')
  expect(page).to have_content(/Project name already exists/)
  expect(current_path).to eq '/projects/new'
end

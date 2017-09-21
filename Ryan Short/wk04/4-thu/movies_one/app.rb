require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# api key 2f6435d9
# http://www.omdbapi.com/?apikey=[2f6435d9]&

get '/' do

  erb :index
end


get '/search_page' do
  url = "http://www.omdbapi.com/?s="+ params[:title] + "&apikey=2f6435d9"
  response = HTTParty.get(url)
  @search = response.parsed_response
  # binding.pry

  erb :search_page
end

get '/profile' do
  url = 'http://omdbapi.com/?t=' + params[:title] +  '&apikey=2f6435d9'
  response = HTTParty.get(url)
  @result = response.parsed_response
  erb :profile
end

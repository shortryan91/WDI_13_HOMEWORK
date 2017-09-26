require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# api key 2f6435d9
# http://www.omdbapi.com/?apikey=[2f6435d9]&

comments = ['great movie']

get '/' do

  erb :index
end


get '/search_page' do
  url = "http://www.omdbapi.com/?s="+ params[:title] + "&apikey=#{ENV['OMDB_API_KEY']}"
  response = HTTParty.get(url)

  @search = response.parsed_response
  if @search['totalResults'] == "1"
    redirect "/profile?title=#{params[:title]}"
  else
  erb :search_page
 end
end

get '/profile' do
  url = 'http://omdbapi.com/?t=' + params[:title] +  "&apikey=#{ENV['OMDB_API_KEY']}"
  response = HTTParty.get(url)
  @result = response.parsed_response
  @comments = comments
  erb :profile
end

post '/leave_comment' do

  @comments = comments
  comments.push(params[:comment])

  redirect "/profile?title=#{params[:title]}"
end

get '/about' do
  erb :about
end

get '/donate' do
  erb :donate
end


require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require_relative 'db_config'
require_relative 'models/movie'


def connection(sql)
  conn = PG.connect(dbname: 'movie_db')
  result = conn.exec(sql)
  conn.close
  return result
end

comments = ['great movie']

get '/' do
  @movies = connection('SELECT * FROM movies order by title;')
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
  # if movie title equals movie title in database use database
  sql = "SELECT * FROM movies WHERE title = '#{params['title']}';"
  records = connection(sql)
  # if records is in the database already
  if (records.count > 0)
    movie = records[0]
    @result = {}
    # result is the api ref and movie is the database ref
    @result['Title'] = movie['title']
    @result['Year'] = movie['year']
    @result['Released'] = movie['year_released']
    @result['Runtime'] = movie['runtime']
    @result['Plot'] = movie['plot']
    @result['Genre'] = movie['genre']
    @result['Rated'] = movie['rating']
    @result['Poster'] = movie['poster']
  # else get movie from API database
  else

    url = 'http://omdbapi.com/?t=' + params[:title] +  "&apikey=#{ENV['OMDB_API_KEY']}"
    response = HTTParty.get(url)
    @result = response.parsed_response

    sql = "INSERT INTO movies(title, year, year_released, runtime, plot, genre, rating, poster) VALUES ('#{ @result['Title']}', '#{ @result['Year']}','#{ @result['Released']}','#{ @result['Runtime']}','#{ @result['Plot']}','#{ @result['Genre']}','#{ @result['Rated']}','#{ @result['Poster']}');"

    connection(sql)
    # @comments = comments

  end
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

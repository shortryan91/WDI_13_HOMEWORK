
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

require_relative 'db_config'
require_relative 'models/car'

def connection(sql)
  conn = PG.connect(dbname: 'cars_app' )
  conn.exec(sql)
end

 # home page
get '/' do
  erb :index
end

# car_list page
get '/car_list' do
  @cars = Car.all
  erb :car_list
end


get '/car_list/new' do
erb :new
end

post '/car_list' do
  cars = Car.new
  cars.make = params[:make]
  cars.year = params[:year]
  cars.image_url = params[:image_url]
  cars.save
  redirect '/car_list'
end

# profile page
get '/car_list/:id' do
    @cars = Car.find(params[:id])
  erb :car_profile
end

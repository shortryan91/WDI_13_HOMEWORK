require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movie_db',
}

ActiveRecord::Base.establish_connection(options)

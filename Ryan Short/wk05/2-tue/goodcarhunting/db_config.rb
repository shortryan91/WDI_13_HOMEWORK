require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'cars_app'
}

ActiveRecord::Base.establish_connection(options)

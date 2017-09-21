require 'pry'
require 'sinatra'
require 'sinatra/reloader'
# require 'yahoofinance'
require 'httparty'


result = HTTParty.get('http://api.fixer.io/latest')
binding.pry

result.parsed_response

# get '/' do
#   erb :index
# end
#
# get '/stock_result' do
#
#   result = YahooFinance::get_quotes(YahooFinance::StandardQuote,params[:stock])
#   quote = result[ params[:stock] ]
#
#   @price = quote.lastTrade
#
#   erb :stock_result
# end

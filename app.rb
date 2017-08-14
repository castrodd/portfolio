require "sinatra/activerecord"
require 'sinatra'
require './config/environments' #database configuration
require './contact'        #Model class

get '/' do
  redirect '/portfolio.html'
end

post '/portfolio' do
  @contact = Contact.new(name: params[:name], email: params[:email], message: params[:message])
  if @contact.save
    redirect '/portfolio.html'
  else
    "Sorry, something went wrong!"
  end
end

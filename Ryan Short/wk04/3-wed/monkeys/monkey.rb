require 'pry'

class Monkey

  def initialize(name, species)
    @name = name
    @species = species
    @foods = []
  end

  def eat(food)
    @foods.push food
  end

  def introduce
    puts "Hi my name is #{@name}. I am a #{@species}. I had #{@foods[0]} and #{@foods[1]} for brunch"
  end

end

require 'pry'
require 'Rainbow'
require_relative 'animals'
require_relative 'clients'

@shelter_animals = [Animals.new('jet',3,'male','dog'),Animals.new('rex',3,'male','dog'),Animals.new('kit',1, 'female','cat'),Animals.new('roxy', 3, 'female', 'cat')]

@shelter_clients = [Clients.new('adam', 24),Clients.new('sarah', 42),Clients.new('may', 16),Clients.new('steve',65)]

  puts `clear`
  puts Rainbow("welcome to happiTails ").yellow
  puts `clear`
  puts Rainbow("--We find animals and people new friends").yellow
  puts `clear`
  puts " 1--display our current animals."
  puts " 2--display our current clients."
  puts " 3--sign up to become a client."
  puts " 4--new Animal added to shelter."
  puts " 5--put an animal up for adoption."
  puts " 6--Adopt a new Pet."
  puts " 7--Leave the shelter"
  puts "\n please choose a number -->  "
  choice = gets.chomp.to_i

case  choice
  when  1
      puts "our current animals are"
      @shelter_animals.each do |animal|
        puts "there is #{animal.name} who is #{animal.age} and a #{animal.gender} and #{animal.species}"
      end

  when 2

      puts "our current clients"
      @shelter_clients.each do |client|
        puts "we have #{client.name} who is #{client.age}"
      end
  when 3
      puts "would you like to add a new client?(yes/no) "
      answer = gets.chomp
      if answer == 'yes'
       puts ' name: '
       name = gets.chomp
       puts ' Age: '
       age = gets.chomp.to_i
       new_client = Clients.new(name,age)
       @shelter_clients.push(new_client)
      end
  when 4
      puts "would you like to add a new animal to the shelter (yes/no)"
      answer = gets.chomp
      if answer == 'yes'
        puts ' name: '
        name = gets.chomp
        puts ' Age:'
        age = gets.chomp
        puts ' gender:'
        gender = gets.chomp
        puts ' species:'
        species = gets.chomp
        new_animal = Animals.new(name,age,gender,species)
        @shelter_animals.push(new_animal)
      end
  when 5
    puts "are you sure you want to give away your animal? (yes/no)"
    answer = gets.chomp
    if answer == 'yes'
    # take a pet from the client objects pet array and place it into the animals array
      puts "enter your pets name"
      pet_name = gets.chomp
      puts "enter your name"
      client = gets.chomp
      def adopt_animal (pet_name)
        @shelter_animals.select do |animal_name|
          pet_being_adopted = animal_name.name == pet_name
          #delete animal from pet array
          puts pet_being_adopted
          # find client and push into there pets array
      end
      adopt_animal(pet_name)
    end
    # finding the animal in here

  # when 6
  #   #take a pet from the shleter and put it in the clients pets array

  # when 7
  #     return
  # end
end

end
binding pry

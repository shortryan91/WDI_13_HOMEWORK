
puts 'enter Filename'
file = gets.chomp
count = IO.readlines(file).size
puts "there are #{count} lines in this file"

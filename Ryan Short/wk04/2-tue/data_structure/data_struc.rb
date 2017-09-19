require 'pry'

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# 1.How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users['Jonathan'][:twitter]

# 2.How would you add the number 7 to Erik's favorite numbers?
users['Erik'][:favorite_numbers]<< 7

#3. How would you add yourself to the users hash?
users["Ryan"] = {:twitter => "ryan", :favorite_numbers => [
3,4,5]}

# 4.How would you return the array of Erik's favorite numbers?
users['Erik'][:favorite_numbers]

# 5.How would you return the smallest of Erik's favorite numbers?
users['Erik'][:favorite_numbers].last

#6. How would you return an array of Anil's favorite numbers that are also even?
numbers = users['Anil'][:favorite_numbers]
anils_even_numbers = numbers.select do |num|
  num % 2 == 0
end

# 7. How would you return an array of the favorite numbers common to all users?
common_number = []
users.each_value do |name|
 common_number.push(name[:favorite_numbers])
end
common_number.flatten!.

# 8. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
# common_number = []
# users.each_value do |name|
#  common_number.push(name[:favorite_numbers])
#  common_number.flatten!.sort!.uniq!
# end

binding.pry

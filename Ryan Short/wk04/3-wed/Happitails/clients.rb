
class Clients

  def initialize(name, age)
    @name = name
    @age = age
    @children = []
    @current_pets = []
  end

  def name
    return @name
  end

  def age
    return @age
  end

  def children(child)
    @children.push child
  end

  def adopt_pet(pet)
    @current_pets.push pet
  end

end

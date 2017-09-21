
class Animals

  def initialize(name,age,gender,species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def name
    @name
  end

  def age
    @age
  end

  def gender
    @gender
  end

  def species
    @species
  end

  def toys(toy)
    @toys.push toy
  end

end

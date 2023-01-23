# What's a class ?

# Blueprint
# new Array, new Error, new Date

class Potato
  def initialize name
    @name = name
  end
  attr_accessor :name
  # attr_reader :name
  # attr_writer :name

  def greet
    puts "I AM A POTATO"
    puts "AND MY NAME IS #{@name}"
  end
  
  def personalized_greet person_name
    puts "Hi #{person_name}"
    puts "MY NAME IS #{@name}"

  end
end

yukon_gold = Potato.new("Yukon Gold")
russett = Potato.new("Russett")

yukon_gold.name = "Yukon Silver"

p yukon_gold.name
p russett

yukon_gold.greet

russett.personalized_greet "Francis"
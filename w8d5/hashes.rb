# =>, [], :symbol

# Arrays

some_list = [1,2,3,4,5,6]
random_list = some_list.shuffle

p some_list.shuffle!

p some_list

# Hashes

bob_properties = {
  name:"bob"
}

bob_props = {
  :name => "Bane"
}

p bob_props
p bob_properties[:name]
p bob_properties[:name]

p some_list.rotate!
p some_list.rotate!
p some_list.rotate!
p some_list.rotate!
p some_list.rotate!


questions = ["Why?", "Where?", "Who?"]

p questions.first
questions.rotate!
p questions.first
questions.rotate!
p questions.first
questions.rotate!
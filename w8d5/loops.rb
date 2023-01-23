# list = ["Coffee", "Tea", "Mate", "Water"]
list = {
  :morning => "Coffee",
  :afternoon => "Tea",
  :night => "Water"
}

# each Tuple => 

list.each do |morning_drink|
  p morning_drink
end


# each_with

list.each_with_index do |morning_drink, position|
  puts "#{morning_drink} is at position #{position}"
end

# for

for drink in list do
  puts drink
end


10.times do
  puts "Walk"
end


# 10.upto(20)
# Pagination
# 500
# 0-10, 10-20, 20-30

# value.upto(value + 10)
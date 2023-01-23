value_one = 1
value_two = "1"
current_user = { :name => "Pollo" }
current_user_two = nil

if value_one == value_two.to_i
  puts "wazzaaa"
end

# == != && ||

unless current_user_two
  puts "Please log in"  
end

if current_user_two
  puts "Welcome #{current_user_two[:name]}"
end


puts "You will be a very cool user if you like and subscribe" unless current_user_two


some_value = 10


if some_value < 5
  puts "it's small"
elsif some_value >= 5 && some_value < 10
  puts "It's average"
else
  puts "Dang."
end
def say_hi name
  puts "Say hi #{name}"
end

say_hi "James"

# Motherboard => Logic Boards


def say_hi_a_lot name, amount_of_time
  amount_of_time.times do
    puts "Hi #{name}"
    sleep(1)
  end
end

say_hi_a_lot "Ryan", 10
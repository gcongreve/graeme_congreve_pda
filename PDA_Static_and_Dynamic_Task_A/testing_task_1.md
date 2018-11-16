### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out static testing on the code below.
# Correct the errors below that you spotted in task 1.


require_relative('card.rb')
class CardGame

  #there is no initialize method for CardGame.

  # the single = will set card.value as 1, should be double == to see if it is equal to 1.
  # should ideally be called check_for_ace(card)
  # should be a class method
  def self.checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  #should be def, not dif
  #should be a comma between card1 & card2
  #too many ends - should only be 2.
  #card, on 3rd line, is undefined - should be card1 or card2
  #the return is explicit on line 3 and implicit on line 5
  #if 2 cards have the same value it returns one of the cards instead of nil. 
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

#the 'total' variable is undefined.
#the other 2 methods are instance methods and this one is a class method.
#need a space between "total of" and total.
#total needs to be turned interpolated into the string.
#the return is within the loop, therefore it will return the first card value, not the total of all cards.
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
#need another 'end' to close off the class.

```

# Testing task 1:

## Carry out static testing on the code below.

### Read through code below and comment on any errors you can spot.

#### Don't correct the errors!


```ruby
class CardGame

#attr_accessor missing
  def initialize(suit, value)
    @suit = suit #missing ;
    @value = value;
  end

  def checkforAce(card)
    if card.value = 1 #should be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #1.its def not dif and 2.no comma
  if card1.value > card2.value
    return card.name #1.card is not defined and 2. name is not a variable, suit is
  else
    card2 #doesnt specify what to return
  end
end
end #not needed end

def self.cards_total(cards)
  total #doesnt specify total
  for card in cards
    total += card.value
    return "You have a total of" + total #needs to go in as a string
  end
end

```

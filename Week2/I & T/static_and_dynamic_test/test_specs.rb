require('minitest/autorun')
require('minitest/rg')
require_relative('./testing_task_2.rb')

class TestGame < MiniTest::Test

  def setup
    @game1 = CardGame.new("Hearts",8)
    @game2 = CardGame.new("Spades",4)
    @cards = [@game1,@game2] #could also create an arrays with all the cards here
  end


  def test_checkforAce
    assert_equal(false,@game1.checkforAce(@game1))
  end

  def test_highest_card
    assert_equal("Hearts",@game1.highest_card(@game1, @game2))
  end

  def test_cards_total
    result = @game1.cards_total(@cards)
    assert_equal("You have a total of 12",result)
  end
end

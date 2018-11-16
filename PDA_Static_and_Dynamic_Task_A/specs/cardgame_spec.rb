require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2.rb')

class CardGameTest < MiniTest::Test

  def setup
    @ace = Card.new('hearts', 1)
    @ten = Card.new('hearts', 10)
    @five = Card.new('hearts', 5)
    @ten_clubs = Card.new('clubs', 10)
    @cards_16 = [@ten, @five, @ace]
    @cards_11 = [@ten, @ace]
    @cardgame = CardGame
  end


  def test_check_for_ace___true
    expected = true
    actual = @cardgame.check_for_ace(@ace)
    assert_equal(expected, actual)
  end

  def test_check_for_ace__false
    expected = false
    actual = @cardgame.check_for_ace(@ten)
    assert_equal(expected, actual)
  end

  def test_highest_card____card1
    expected = @ten
    actual = @cardgame.highest_card(@ten, @ace)
    assert_equal(expected, actual)
  end

  def test_highest_card____card2
    expected = @ten
    actual = @cardgame.highest_card(@ace, @ten)
    assert_equal(expected, actual)
  end

  def test_highest_card____equal
    expected = nil
    actual = @cardgame.highest_card(@ten_clubs, @ten)
    assert_nil(actual)
  end

  def test_cards_total__16
    expected = "You have a total of 16"
    actual = @cardgame.cards_total(@cards_16)
    assert_equal(expected, actual)
  end

  def test_cards_total__11
    expected = "You have a total of 11"
    actual = @cardgame.cards_total(@cards_11)
    assert_equal(expected, actual)
  end


end

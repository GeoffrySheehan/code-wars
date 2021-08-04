# Two fighters, one winner.
# https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
class FighterWrapper(object):
    def __init__(self, fighter):
        self.fighter = fighter
    
    def attack(self, defender):
        # If the fighter doesn't
        if self.fighter.health <= 0: return True

        defender.fighter.health -= self.fighter.damage_per_attack
        return False

def declare_winner(fighter1, fighter2, first_attacker):
    [attacker, defender] = [first_attacker, fighter1.name if fighter1.name != first_attacker else fighter2.name]
    fighters = { fighter.name: FighterWrapper(fighter) for fighter in [fighter1, fighter2] }
    
    hasWinner = False
    while not hasWinner:
        hasWinner = (fighters[attacker].attack(fighters[defender]))
        # Fighters are alternating, so switch who is attacking and who is defending
        [attacker, defender] = [defender, attacker]
    
    return attacker

import random
scorefile = "Highscores_py"
guess = -1
num = 0

print("guess.py - Guess a number between 1 and 100\n")

# Generate random numbers
answer = random.randint(1, 100)

# Play game
while guess != answer:
    num = num + 1
    guess = input("Enter guess ")
    if guess < answer:
        print("Higher...")
    elif guess > answer:
        print("Lower...")
print("Correct! That took", num, "guesses.\n")

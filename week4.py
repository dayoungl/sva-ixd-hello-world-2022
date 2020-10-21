#Week 4 Assignment

#Sharon Lee
#dlee71@sva.edu

import random

#variables
numberOfBags = 0
departureTime = 7
departure = str(departureTime)


#an object describing our player
gamePlayer = {
		"name" : raw_input("Your Name: "),
		"location" : "home",
	}


#Input Info
destination = raw_input("Destination: ")
airline= raw_input("Airline: ")


#Game Initalized
def main():
	introStory()
	setup()


#Game Over
def gameOver():
	print("------------------------------")
	print("Game Over")
	print("Play Again?")
	print("options: [Yes, No]")

	pcmd = raw_input(">")

	if (pcmd == "Yes"):
		main()

	else:
		return

	# print(gamePlayer + " never made it to " + destination + ".")


#Introduction
def introStory():
	print("POST COVID Era --- Air travel becomes normalized.")
	print("------------------------------")
	print("Today is the day! You are going on a long-awaited winter vacation to " + destination + ". " + "You booked a/an " + airline + " flight " + "that departs at " + departure + " PM tonight.")


#Setup
def setup():
	print("With excitement you wake up and decides to get ready. It takes an hour to get to the JFK airport from your place.")
	raw_input("press enter >")

	print("What time did you wake up?")
	print("options: [1 PM, 2 PM, 3 PM, 4 PM, 5 PM, 6 PM]")

	pcmd = raw_input(">")

	if (pcmd == "6 PM"):
		print("You have an hour before boarding your plane. You will never make it in time. Tough luck.")
		gameOver()

	else:
		print("Great. You have some time to get to the airport.")
		getReady()



def getMoving():
	price = random.randint(1,200)
	fair = str(price)
	eta = random.randint(1,40)

	print("You walk out the door and think about how you want to get to the airport.")
	print("Should I take the metro or call Lyft?")
	print("options: [metro, Lyft]")

	pcmd = raw_input(">")

	if(pcmd == "metro"):
		print("Walks to the closest metro station.")

	elif(pcmd == "Lyft"):
		print("Let's call Lyft and check the fair.")
		print("The fair is " + fair + ".")

		if (price > 50):
			"Too expensive. Maybe I should ride the metro."

		elif(price < 50):
			"Great deal. Let's call it!"
			pcmd = raw_input(">")

			"What is the " + eta + " ?"

			if(eta > 20):
				print("Let's just take the metro.")

			else:
				print("Waiting for the Lyft...")


#Get Ready
def getReady():
	print("Now you want to make sure you are ready to go. You check your bags one last time.")
	print("Are you missing anything?")
	print("options: [Yes, No]")

	pcmd = raw_input(">")

	if (pcmd == "Yes"):
		print("Oh no! Let's go look for what's missing.")
		print("options: [passport, lens, wallet]")

		pcmd = raw_input(">")

		if (pcmd == "passport"):
			print("Your passport will never be issued on time...")
			gameOver()

		elif(pcmd == "contact lens"):
			print("You find them in the bathroom and packs them in your bag.")

		elif(pcmd == "wallet"):
			print("You check your bag and finds your wallet.")
	
	else:
		print("You are ready to go!")
		getMoving()


main()
















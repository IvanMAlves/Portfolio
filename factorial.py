#this times the number entered and then calls the function minus the entered number to times itself and continues until it hits 1
#returns the factorial of a positive integer using recursion
def factorial(num): 
  if num <= 1:
    return 1 
  else:
    return num * factorial(num-1) 
    
while True:
  userNum = int(input('Enter a postive integer: '))
  print(f'{userNum}! = {factorial(userNum)}')

#get positive integer from user input
#calculate factorial of that integer using the following:
  #if integer is 0 or 1, the factorial is 1
  #else the factorial of that integer is itself multiplied by all lower positive integers
#print result
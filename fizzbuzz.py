# written by Ivan Alves 01/01/2022
#psuedocode 
#Fizzbuzz is a game which replaces a number with either the words 'fizz' , 'buzz' or 'fizzbuzz'
#when a number is a multiple of 3 it is replaced by the word 'fizz' - check
#when a number is a multiple of 5 it is replace by the word 'buzz' - check
#when a number is both a multiple of 3 and 5 it is replaced by the word 'fizzbuzz' - check 
#variable that counts up from 0


count = 1 # this is the variable which is used to count in the loop

#if @count is less than or equal to 100 continue loop, else end loop
while count <= 100:
  #if @count is a multiple of 3 and 5, print 'fizzbuzz'
    if count % 3 == 0 and count % 5 == 0:
      print('fizzbuzz')
    #if @count is a multiple of 3, print 'fizz'
    elif count % 3 == 0:
      print('fizz')
    #if @count is a multiple of 5, print 'buzz'
    elif count % 5 == 0:
      print('buzz')
    else:
      print(count)
    count += 1 #increase the value of @count by 1
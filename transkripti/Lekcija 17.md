**Traditional Switch Statement Challenge And Practical Exercises**



In the previous few videos, we looked at the switch statement, and how we can use



it in a similar way, to an "if" statement. We talked about the traditional version,



which you'll see in older applications. We've also looked at the enhanced version,



which I would recommend if you're using JDK 14 or greater, and if you also have the luxury of



not having to have your source code be compatible with older versions of Java.



In this video, I'll give you a chance to work on a challenge, using the traditional switch statement.



Let's look at the slide we saw in the last video, which describes the syntax of both:



The version on the left uses colons to start a case block, case 1: for example,



which makes it a traditional switch. This means it permits fall through



to occur, and it can't be used as an expression. Therefore, in this type of switch, it's important



to ensure you include a break statement in each case block, to prevent accidental fall through.



On the right, where the switch expression arrow replaces the colon in the case label,



the break statement isn't part of the new syntax, and you shouldn't use it.



Ok, so keep these two variations in mind. You can come back to this slide, to refer to



what we mean by traditional vs. enhanced. Now, for the first challenge.



In this challenge, you'll be using the NATO alphabet to replace a character or letter,



with NATO's standardized word for that letter. In radio transmissions, the word car, "C", "A",



"R", would be read, "Charlie Able Roger", for clarity.



You'll take a single character and return the matching word from the NATO



phonetic alphabet, shown on this slide. We'll just do this for the letters A,



through E. To do this:



Create a new char variable. Use the traditional switch statement (with a colon in case labels)



that tests the value in the variable from Step 1. Create cases for the characters,



A, B, C, D, and E. Display a message in each case block, with the letter and the NATO word,



then break. Add a default block, which displays the letter with a message saying not found.



Okay, so your challenge is to create the switch statement, testing for



the values, "a", through "e", in the cases. Display a message, if any of these are found,



that prints the character and the NATO word, that represents that letter, and then break.



Add a default label, which displays a message saying, "Letter was not found in the switch",



and include the letter in the message. All right, go ahead and do that,



and pause the video now. When you're finished, come back,



and you can check out my solution. Ok so, did you figure it out?



What we need to do is very similar to what we've already done, in the previous videos,



using the traditional switch statement. The main difference will be, that we're



using a char, instead of an int. So let's add this code:



char and I'll call it char value and assign it the letter A.



switch charValue in parentheses and a left curly brace. case A in single quotes, and a colon. print



A is able. and break. close the switch statement. Ok, so what we have first here,



is our variable declaration and assignment. I hope you remembered that char uses single



quotes, as you can see on line 5. And then, just like we did before,



we have our switch statement with the value to test, which is inside parentheses,



and we're testing charValue here. This is followed then by the



opening curly brace to start our switch block. Next, I'll add our first case, which is case "A",



using the single quotes for our char value, and then followed by the colon, which is how Java



determines what type of switch it is. If the case is true, we print out,



"A is able", and then break. So that's the first case.



But of course, we have more tests we need to do, and a default message we need to add.



So let's quickly add those in: case B this time.



and print B is baker. and break. C this time. printing C is charlie. break. Case D. print D is



Dog. break. case E. print E is easy. and break. So here, we've just set up the other cases.



Because we're printing something different for each letter, we don't



have the need for multiple case labels. And now let's include that default label:



default colon. I'll print letter with a space at the end in double quotes, then append char value,



and then append another literal string indicating we didn't find a match. and break.



All right so that's our switch statement, with the first 5 letters in the alphabet coded.



If we give that a go, we've got the value "A" that we've defined,



so we should get a message saying, "A" is able. And we can see we get "A" is able, printed out.



I'll change the value to B, and run the code again:



make char value B this time. And of course now, "B is baker".



Lastly, we can put something like an X there.



And now we get the default case, "Letter X was not found in the switch".



So that's how we use the primitive type char, in a switch statement.



So that was pretty easy, and basically what we saw with using an int type.



Ok, so that was using a traditional switch statement to do some work conditionally, based on



the value of the character that was passed to it. In the next video, I'll have another challenge



for you, but in that challenge, you'll be using the enhanced switch statement.







**Embracing Switch Expressions With A Hands-On Coding Challenge**



In the last challenge, we used a traditional switch statement,



to translate a letter into NATO's keyword, that represented that letter.



In this next challenge, you're going to use the enhanced switch expression.



Let's look at these statements side by side again, but this time,



we're going to make the enhanced switch an expression, by assigning it to a variable.



The version on the left, uses colons to start a case block, which makes it a traditional switch.



This means it permits fall through to occur, and cannot be used as an expression.



But we can use it in a method, with return statements as we show here on the left.



On the right, where the switch expression arrow replaces the colon in the case label,



you not only don't need the return statement, you can just put the value being returned there.



If you do use a code block as we show in the first case label, and for default,



the keyword yield is required as shown. Ok, so keep these two variations in mind.



You can come back to this slide to refer to what we mean by traditional vs. enhanced.



Now, for the challenge. Create a method called printDayOfWeek,



that takes an int parameter called day, but doesn't return any values. Use the enhanced switch



statement, to return the name of the day, based on the parameter passed to the switch statement,



so that 0 will return "Sunday", 1 will return "Monday", and so on. Any number not between 0



and 6, should return "Invalid Day". Note that return here, means the value returned from the



enhanced switch statement. Use the enhanced switch statement as an expression, returning the result



to a String named dayOfTheWeek. Print both the day variable and the dayOfTheWeek variable. In



the main method, call this method for the values 0 through 7. Bonus: Create a second method called



printWeekDay, that uses an if then else statement, instead of a switch, to produce the same output.



Alright, so now it's time to pause the video, and attempt the challenge.



When you finish, come back, and then you can check your solution with mine.



So pause the video now. Alright so how did you get on?



Hopefully you managed to figure out a solution to that challenge.



Let's hop back into IntelliJ, and go through it now step-by-step.



After the main method, I'll create the new method, called printDayOfWeek:



the method will be defined as public static void, and the paremeter is an int called day.



You can see I'm setting the return type to void. So let's start writing the switch statement.



I'll first create a local variable, that's going to be the String,



that represents the name of the day of the week. I want to use the newer syntax for the switch,



because we want to assign the result of this switch to our local variable.



So let's do this, with the first case, which is zero, which should return "Sunday":



String Day of week, equals, switch, and day in parentheses and a left curly brace. case zero,



switch expression arrow, and the literal string Sunday and a semi-colon to end the line. and a



right curly brace and semi-colon to end. We've now handled case 0 which is Sunday.



If the value of day is zero, we're going to return Sunday from this switch expression,



and assign it to the variable dayOfWeek. And because we are assigning this switch



statement to a variable, I put a semi-colon after the switch's closing brace,



as you can see here on line 11. If we did use a code block,



we'd need to use the keyword yield. Let's change this code, so you can see that.



So generally, we'd only want to use the curly braces, if we're doing something



like performing some calculations first before sending back the result, but what



I have done here is also valid syntax. Right now, IntelliJ is telling us



there's an error with this code. If we hover over the day variable,



in the switch parameter, we see that IntelliJ says, switch expression



does not cover all possible input values. What this is really saying is, that we need to set



up a default label, for all other possibilities. This is a requirement for the switch



expression only, as I've stated before. So let's add that default label next.



We've said that anything that isn't 0 through 6, should return 'Invalid Day', so let's add that in.



default, switch expression arrow, literal string, invalid day.



OK, so now IntelliJ is happy with our code. Now we'll add the rest of our case labels:



case 1, for Monday. case 2, for Tuesday. case 3, for Wednesday. case 4, for Thursday. case 5,



for Friday. and finally, case 6, for Saturday. Alright, so that's our seven days of the week



now accounted for, cases zero through six. We've got a different day assigned now,



for each one, and being assigned to the local variable dayOfWeek.



And we've already handled any other other values, with the default label.



Next, I'll print that information out, in this method, after the switch expression:



So here, we print out the day of the week, the number, that was passed to the method,



and then we print the text that came back from our switch expression.



So now let's set up a test case, so we can test this code.



We'll add the call to the printDayOfWeek method in the main method:



print day of week, and zero in parentheses. And running that.



We get, '0 stands for Sunday'. So, that's good.



We have Sunday coded and tested. And in fact, we can set up



the rest of our test cases now. I'm going to copy this printDayOfWeek statement,



in the main method, and then paste it seven times, then change the value we're passing each time,



so that we have 8 test cases, from 0 to 7. And if we run that.



We can see the output there, we've got 0 stands for Sunday, 1 stands for Monday,



and so on, up until we get to number 7, which is not a valid weekday.



So that prints, "7 stands for Invalid Day", and that appears to be working nicely,



and that's great. Alright,



time to code the bonus part of the challenge. If you recall, the bonus was to create a solution,



that instead of using the switch statement, uses "if then else", and to do this in a



second method, named printWeekDay. So let's create that method.



It's almost the same signature as our other method printDayOfWeek, just a different method name.



void is the return type, and we'll pass it the same parameter, an int named day:



print week day as the method name, same parameter as above. Start with a string, called day of week,



assigned the literal string, invalid day. print out day, and what it stands for.



Notice here, that I'm creating the same local variable, dayOfWeek, but this time assigning



"Invalid Day" to it, right at the start. Ok, so I'll now add the if,



else if, and else statements. use an if statement and start by testing if day



is equal to zero. assign day of week to Sunday. else if day is equal to 1. assign day of week to



Monday. day is equal to 2? assign day of week, Tuesday. day is equal to 3? assign day of week,



Wednesday. day is equal to 4. assign day of week, Thursday. day is equal to 5? you guessed it,



assign day of week, Friday. last one, test if day is equal to 6. and assign day of week,



Saturday. and close the if statement. Okay so now that we've entered that, we want to



replace all the calls we made to the method. These were made in the main method,



so we're going to replace these 8 statements, replacing printDayOfWeek, with printWeekDay,



here in the main method: So let's run that again,



and have a look at our output. And we've got the exact same results as before.



So that's the alternative, or bonus version of our challenge, which uses "if-then-else",



instead of using the switch statement. So basically, this code is doing the same,



we're getting the exact same output, that we did when we used the switch statement.



So, you can see, that's proof that for every challenge, and for almost any piece of code you



write, there is more than one way to solve it. You've seen a couple of ways of



solving the exact same problem here. So that's it, I hope you enjoyed that,



and got a lot out of this challenge. Let's move on now to the next video.


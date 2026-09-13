**Assignment vs. Equality: Avoiding Common Java Operator Errors in IntelliJ**



In the previous video, we worked with the logical or operator.



In this video, I'll start off with a mini challenge then I'll talk about the difference



between the assignment operator and the "equal to", or equality operator, as it's also called.



The challenge relates to a common bug that people who are new to programming may encounter.



I'll start the challenge, by typing some code. I'll start this code on Line 26 of the hello



class in the hello world project that we've been working with in the past several videos.



I'll create an int variable called newValue, with a value of 50. if, left parentheses,



new value, equals, fifty, right parentheses, left curly brace. I'll print the message this



is an error. And a right curly brace. So, there's the code, and my question



to you is, what is wrong with this code? Note that IntelliJ is flagging that line,



and if we hover over it, we can see that it's saying, "required type:



boolean " and "provided type: int". Why did we get this error? This is



a type conversion error like we saw in JShell, but just worded a bit differently in IntelliJ.



First, new value has been set to fifty, and the if statement was testing to see whether



new value equals the literal value, fifty. But is that what this code is really doing?



Pause the video now if you want to solve that on your own, and I'll see you when you get back.



Welcome back. Did you figure that out and get the code to run in IntelliJ?



IntelliJ is telling us that there is a problem with the expression in parentheses there,



new value equals fifty, and actually, the problem is the equals sign.



Before we fix the problem, let's talk about the difference between the



assignment operator and the equals to operator. As you can see, we've used the assignment operator



(one equal sign) in the if statement. What we need to do is to use the



"equals to" operator (two equal signs). This is what the code should look like:



We're not assigning a value here, instead we want to test if the values are equal to each other.



All right, so how do we fix this? We need to put the second equal sign in:



Which change the operator to be an "equals to" operator, and we're now correctly comparing the



value of new value to the value fifty. The error's disappeared, and if we



change the message to match the if statement, and then run the code again:



We get the message printed out to the screen. All right, so again, that's a common problem



you'll come across, and even very experienced developers will make this mistake when they're



coding. Luckily, IntelliJ points out problems in our code as we're editing it



and before we even think about running it. Next, I want to show you another problem.



This time, instead of comparing a variable to a numeric value, we'll compare a variable



to a boolean. So let's pop down here to line thirty-one and start adding some additional code:



I'll create a boolean variable called is car, and set it to false. if, left parentheses,



is car, equals, true, right parentheses, left curly brace. And print this message. and close



the code block with a right curly brace. What do you think's going to happen in



this scenario? IntelliJ doesn't see any problem with this code this time, as unlike the previous



example, there are no errors flagged. What about you? Do you see a problem with this code?



Pause the video now, if you want to try and solve it on your own.



Otherwise, I'll be walking through it next. All right, let's first run this code since



there aren't any errors in the syntax according to IntelliJ.



And look what's happened, we get the output, "this is not supposed to happen".



We can clearly see that we've defined the value of "is car" to be false.



And it appears, at first glance, that we're comparing "is car" to the value true,



but for some reason, the code block has still been executed.



And what's more, unlike the example using an int variable above, when we used the



assignment operator instead of the "equals to" operator, we haven't got an error here.



So why isn't IntelliJ flagging this as an error? The problem was we again used the assignment



operator, instead of the "equals to" operator. Lets go back to the new value variable for a



moment and change it back to show the error again. If we hover over that again, it says,



"required type: boolean", and "provided: int". In other words, the if statement requires a



boolean, but the expression "new value equals fifty", returns the value fifty which is an int.



Whereas the expression, "new value equals equals fifty", is comparing



the values and it'll return a boolean. In the case of the code I've just written,



it's assigning the value true to "is car", and then returning the boolean value, true.



So that's why we get an error for new value, but not for "is car".



Let's just undo that change we made to the new value expression, so this code compiles.



So the bottom line is, to make sure you use the "equals to" operator when



you're testing to see if the values are equal, and not the assignment operator.



Getting back to our boolean, let's fix it by adding an extra equal sign.



And now the code is using the "equals to" operator.



And if I run the code now: We no longer get the message,



meaning the code worked as we expected, and that's because we're using the "equals to" operator.



There is a way to simplify this statement, as shown here.



This is a valid shortcut in Java. Instead of checking to see if "is car" is equal to true,



we simply return the value of "is car", which in essence does the same thing.



We can also do tests for "not" true. If we wanted to specifically check if



"is car" is not equal to true, we can achieve that by adding an exclamation



mark. I'll revert the code back first. It might really be clearer to have



the expression test if "is car" is false, rather than not true, in some circumstances.



This code now specifically checks if the "is car" variable is false.



But, similar to just using the "is car" variable by itself in the expression, we can also use the



shortcut of just testing "not is car" as follows: The exclamation mark is the "not" operator,



and that basically checks to make sure that is car is not equal to "true".



Another way to think of it is that it returns the opposite value of is car.



In this case, because is car has been set to "false", this will return true.



The exclamation mark or "not" operator, is also known as the logical complement operator.



It can be used with a boolean variable to test for the opposite value.



In the code above, we are testing if the value in is car is true. As you can see on the previous



line, we assigned it to be false. If we use the "not" operator,



we are testing for the opposite value of the is car variable. We assigned is car on the previous



line to false, so not is car, would return true. I'd generally recommend using the abbreviated form



if your variables are booleans, for two reasons: One, it's much harder to identify the error if



you accidentally use an assignment operator. As we saw, IntelliJ won't flag this as an error



when you're testing a boolean variable, so the only way you'll know you made



this common mistake is by discovering your program or output isn't what you expected.



Secondly, the code is more concise, and more concise code can often be more readable code.



All right, I'll end the video here, and in the next one,



I want to talk about something called the ternary operator. I'll see you in the next video.







**Streamlining Code: Implementing Java's Ternary Operator for Concise Conditionals**



In previous videos in this section, we've learned how to use the "if-then" statement,



as well as experimenting with the logical and, and the logical or operators.



In this video, we're going to take a look at something called the ternary operator.



The ternary operator has three operands. The only operator currently in Java that



does have three. Officially, Java calls it the conditional operator.



The structure of this operator is: operand1 ? operand2 : operand3



The question mark symbol appears between the first and second operands, and the colon



appears between the second and third operands. What this operator does is test if operand1



is true, and if it is, it will return operand2, otherwise it returns operand3.



The first condition is always a boolean test, but the other



operands don't have to be boolean values. Let's look at this operator in some code.



I'll continue in the main method of the hello class in our hello world project,



and I'll enter a couple of lines of code: string, make of car, equals, Volkswagen.



boolean, is domestic, equals, make of car, equals equals, double quote, Volkswagen, double quote,



question mark, false, colon, true, semi-colon. So first, I have a string variable that



is the make of the car, in this case, I assign it "Volkswagen".



On the second line, I use the ternary operator, with three operands.



Incidentally, the ternary operator refers to the fact that the operator takes three operands,



"ternary", meaning composed of three parts. The first part of this operator, the first



operand, is the condition or expression I'm testing and should evaluate, as all conditional



logic does to either a "true" or "false" outcome. In this case, I want to know if the make of the



car is "Volkswagen". I do this by using the equals to operator after



the make of car string variable and adding a literal string that I want to test against.



The second operand is the value that will get assigned if the expression is true.



So, if the make of the car is "Volkswagen", which we know it is, because our literal string is the



same for both the assigned value of make of car, and for the comparison we are checking against.



Here I'm assigning false to is domestic if the string literals match.



And the third operand is the value that gets assigned if the expression is false.



Our expression was true, so this value won't be used.



Let's print out some text, testing the value of the result of that ternary operation,



which I assigned to the is domestic variable.



So, adding that code: if, left parentheses, is domestic,



right parentheses, left curly brace. I'll print the message, this car is domestic to our country.



right curly brace. If I run this:



You can see that we don't get any output from this last statement.



Basically what we're saying here is, if the condition returns true,



we assign the value after the question mark to the variable on the left side of the equals sign.



However, if the condition returns false, we assign the value after the colon to the variable.



And since make of car is "Volkswagen", we assign the value after the question mark



and before the colon, which is false, to be the resulting value, and assign it to is domestic.



Let's review this operator more closely. The ternary operator is a shortcut



to assigning one of two values to a variable, depending on a given condition.



So think of it as a shortcut of the if-then-else statement. So far in the course,



we've only discussed if-then and not else. I'll be discussing else in the next section when we



go deeper into control blocks. Consider this example:



Operand one – ageOfClient \&gt;= 18 in this case, is the condition we're checking. It needs to



return true or false. Operand two – "Over



Eighteen" is the value to assign to the variable ageText, if the condition above is true.



Operand three – "Still a kid" is the value to assign to the



variable ageText, if the condition above is false. In this particular case, ageText is assigned the



value "Over Eighteen" because ageOfClient has the value 20, which is greater than or equal to 18.



Now, it can be a good idea to use parentheses, like this example below to make the code more



readable, particularly in the ternary operator. So String ageText equals, and then we just



put operand one, ageOfClient \&gt;= 18 in parentheses, to make it clear.



In the first example we looked at in our code, we returned a boolean



value from the ternary operation. This was a good way to demonstrate



the ternary operator, but wouldn't be something you'd do when writing proper code.



A much simpler way to write this code is shown here:



You can see that this code has the same effect and is quite a bit easier to read.



But even this code would not be what you would generally use. Strings are usually compared using



a method called equals, but as we have not looked at methods in detail, I'll leave that for now.



The result of a ternary operator can be any data type, and the data types can be different



if we aren't assigning the result to a variable. If we are assigning the result back to a variable,



the type of both the second and third operands should be that data type or a compatible type.



To reiterate, the ternary operator is a way to replace an if statement, if you want to



get a value back based on a condition. Let's consider the following code:



string, S, equals, and I'll put is domestic in parentheses for the condition to test,



and the question mark,then the string literal this car is domestic, and a colon, then the string



literal this car is not domestic. I'll print s. In this case, a string is the result of the



ternary operation, and you can see that in some ways, this worked similarly to



the if statement we just reviewed above it. Running this code, we should get the output,



"This car is not domestic". So you can see from this example how a ternary operator



could replace the if statement, returning a specific value based on some condition.



All right, so let's end the video here. In the next video, I want to talk a little



bit more about operators with a bit of a summary, and then we're going to get into a challenge and



talk about operator precedence. See you in the next video.







**Java Operator Precedence: Mastering Expression Evaluation and Challenge**



To start this video, let's have a look at a useful web page on Oracle's website,



which will give you a summary of the operators we've discussed in this section of the course.



I'm going to go over to Google, and I'll type in, "java summary of operators",



and then I'll click the first link. As you can see, we have talked about



nearly all of those operators. But there is one important one



that we haven't talked about at this stage, let's scroll down and have a look at the



"instance of" operator. There is a reason I have not talked about it yet, and that's



because it needs an understanding of classes. So, I'll be talking more about "instance of" when



we get to working on classes in the course. The other ones are the bitwise



and bit shift Operators. These are very rarely used in Java.



The important ones are the conditional operators, the logical and, and the logical or, which we've



talked about at length in this course. Alright, next, I want to open a new tab



in my browser and do a search for "Java operator precedence table".



This first link here, this CS dot bilkent dot EDU dot TR is the one we'll look at,



so I'll click on that. That gives us a handy



list of the precedence table in Java. This table shows us how Java decides the



priority of evaluating things in an expression. The first column shows the precedence,



and keep in mind, that the higher the number in that column, the higher the precedence.



So, note, for example, that the highest precedence, 15, is parentheses, so that's



a way Java ensures that your condition overrides standard precedence rules for things like you see,



in precedence 12 which is multiplication, division, and modulus, and precedence



11 which is addition and subtraction. There is a bit of a hint there to keep



in mind when you get to the stage of solving the challenge, which I'm going to talk about shortly.



We can see that multiplication, division and the modulus, or remainder operator,



as it's also known as, have a higher precedence than addition and subtraction.



Because of this, you may not get the results you expect using those operators,



depending on the precedence and the order in which you're doing things.



For now, keep in mind that we can use parentheses to override other things like multiplication.



Parentheses force the condition to be evaluated in the order that we decide.



This is a good reason put parentheses around conditions.



If you get stuck, come back and refer to this table when you're going through the challenge.



When we review my solution to the challenge, I'll be talking more about operator precedence.



Alright, so let's test what you've learnt about operators with this operator challenge.



There are seven steps to go through this challenge, so you might want to have



this video paused while you're going through it and refer back to this as



you're completing the challenge. Step 1: create a double variable



with a value of 20 point zero zero. Step 2: create a second variable of type



double with a value 80 point zero zero. Step 3: add both numbers together,



then multiply by 100 point zero zero. Step 4: use the remainder operator to figure



out what the remainder from the result of the operation in step three and 40 point zero zero is.



Step 5: create a boolean variable that assigns the value true if the remainder in step four is zero,



or false if it's not zero. Step 6: output the boolean



variable to see what the result is. Step 7: write an if-then statement



that displays a message: "got some remainder", if the boolean in step five is not true.



We've mainly used the modulus or remainder operator on int's in this course, but you can



also do the same for doubles as well. I'll show you a potential issue you



may come across with operator precedence in my solution as well.



I'm kind of giving the game away a little bit there, but see how you do, pause the video now



and I'll see you when you get back. Alright, so welcome back. Hopefully,



you managed to finish the challenge or get a portion of it done, at least.



Let's go through my solution together. Step 1 was to create a double variable with



a value of twenty point zero zero: I'll call it my first value.



Step 2 was to create a second variable of type double with a value eighty point zero zero:



I'll call this one, my second value. Step 3 said to add those two variables together



and multiply by one-hundred point zero zero. I'll include a system dot out println statement



here, so we can see what that value is: I'll call this my values total. I'll



start by adding my first value and my second value, then do the multiplication. And I'll



print out a label and my values total. Step 4 uses the remainder operator,



to figure out what the remainder from the result of the operation in step three,



divided by forty point zero zero is, and again, I'll print that result out:



this one I'll call the remainder, and its my values total, remainder operator,



and forty point zero zero. And I'll print it out. In Step 5, we want to create a boolean variable



that assigns the value true if the remainder in step four is zero



point zero zero, or false if it's not zero. Let's use the ternary operator to do that



and print the value out for Step 6: boolean, is no remainder, equals,



left parentheses, the remainder, is equal to, zero, right parentheses, question mark, true,



colon, false, semi-colon. And print that out. Finally, the last step, step 7, is to write an



"if-then statement" that displays a message: "got some remainder",



if the boolean in step five is not true. if, left parentheses, not is no remainder,



right parentheses, left curly brace. print the message, got some remainder. right curly brace.



Alright, so looking at the code and summarizing what I did.



The first line I typed has our assignment of 20, on line 47.



On line 48, I assign 80 to the second variable, and then on line 49, I've got my first value



plus my second value, so that's 20 plus 80 is 100, multiplied by 100, and that should



give us the answer: ten thousand. So, therefore, the remainder of ten



thousand divided by 40, which is the code on line 51, should give us no remainder because



40 goes into ten thousand exactly 250 times. So technically, if I run this code, we should



see, my values total set to ten thousand. We should also see "the remainder" set to zero,



and, "is no remainder" set to true. And then the "if-then" statement



on line 55 shouldn't be executed because there isn't any remainder,



and we're assigning the value "true" to our variable if there isn't a remainder.



Alright, so let's run this code, and see what happens with all these values.



Well, thats not what happened. As you can see, my values total is



printing eight thousand and twenty, and we got 20 as the remainder, and therefore our



"is no remainder" variable is set to false. Looking at the code, it didn't do what we



thought it should. So why not?



Well, this is operator precedence in action, and this is the reason that I've



coded it this way, to give you an example of it. Firstly, I'll go back to the operator precedence



table, and have a quick look at that again. I did hint at this a bit, note here that



multiplication has a higher precedence than addition.



So what is actually happening if we go back to the code?



Well, the code on line 49, what's happening there is that my second values, which is



value 80, has been multiplied by 100 first. So, Java has looked at the multiplication



operator and decided that, okay, I need to calculate that part first because



multiplication has higher precedence. It's calculated my second value



times 100 to be eight thousand. Only after it finished the multiplication



was 20, which is the value for my first value, added to that.



And of course, eight thousand plus 20 is eighty thousand and twenty.



That's the reason we didn't get the results that we thought we might get.



What we really wanted to do in Step 3 of the challenge was get 20 plus 80,



which is 100, and then multiply that result by 100 to equal ten thousand.



And by doing that, we should get no remainder, and the message won't be output down at the bottom.



To force this, we can use parentheses here to clarify the meaning.



We'll put parentheses around "my first value plus my second value".



And because we know that parentheses have got a higher precedence than multiplication,



that will be evaluated first. The result of that will then



be multiplied by 100 point zero zero. Let's make that change now by adding



those parentheses on line 49: So if I run this again.



You can see now, we've correctly got my values total equals ten thousand.



The remainder, now, has the value of 0 because 40 goes into ten thousand exactly



250 times, leaving no remainder. The "is no remainder" variable was set to true



because there's no remainder, and consequently, we no longer get the output "got some remainder".



Alright, so now it's working as it should. So that's the challenge completed,



and hopefully, you managed to complete that. If you had difficulties because of the operator



precedence, hopefully, you'll now understand why it's important to use parentheses.



Without parentheses, we'd need to code expressions evaluated in a specific order, knowing that



they're going to be evaluated according to the precedence table that I've shown you.



Alright, so that's this video and our challenge completed, and in fact,



that's the entire section now, done and dusted. I just want to give you a quick reminder that



you can grab the slides for all the videos in a handy PDF format that you can review by checking



out the lecture at the end of this course. I'll see you in the next section where we



cover methods, which give you a lot of flexibility to execute Java code.



Once we learn more about methods, weI can start giving you independent tasks that



Udemy refer to as coding exercises. This is a way to work on your skills



without having to watch me code every line, and test whether the code you wrote meets the



requirements I laid out for you. I think you'll find this part of



the course both fun and challenging, so I'll see you in that next video.


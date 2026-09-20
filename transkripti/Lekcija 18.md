**Mastering The for Statement For Repetitive Task Automation**



In the previous video, I talked about using the switch statement.



In this video, we're going to move on now, to talk about the for statement, which will be the



first of the looping statements we'll look at. Looping is something that is very commonly



needed in programming, and it lets us execute code a multiple number of times.



There are several looping statements in Java. These statements will continue to execute



a block of code repetitively, until a condition, or some set of conditions is met.



In this section of the course, we'll be looking at three loop statements.



The for loop is probably the most common, and the one we'll look at first.



It includes set up to initialize variables, check a loop expression, and update code, which often



includes incrementing an iteration variable. The while loop might seem simpler, because



it will just continue to execute code, until its loop expression becomes false.



And the do while loop, is like the while loop, except that it will always execute the code once,



regardless of whether the loop condition is true or false, and then continue



looping until that expression is false. The for statement is often referred to as



the for loop, and the idea is, that it repeatedly loops something until a condition is satisfied.



When I say, repeatedly loops, I mean it's processing a certain amount of code, a code



block in other words, a given number of times, or until a particular condition is satisfied.



There are three parts to the basic for statement's declaration.



These are declared in parentheses, after the for keyword, and are separated by semi-colons.



These parts are all optional and consist of the following:



The initialization section declares or sets state, usually declaring and initializing a



loop variable, before the loop begins processing. The expression section,



once it becomes false, will end the loop processing. The increment section



is executed after the expression is tested and is generally the place



where the loop variable is incremented. ; I've set up a project called TheForLoop,



and the usual Main class with the main method. Let's look at a simple for loop in code.



Let's loop from one to five, and print those numbers out, using the for loop statement:



for, left parentheses, int counter equals 1, semi-colon, counter less than or equal to 5,



semi-colon, counter plus plus, right parentheses and a left curly brace.



println counter. closing curly brace. Looking at this code, the initialization



part of the for loop, is the declaration of a variable named counter, and initializing it to 1.



The expression is counter \&lt;= 5. This means that if the variable, counter,



is ever greater than 5, the loop won't continue. It will terminate at that point.



The increment section is an expression we've seen before, the postfix increment operator.



This will increment the counter after each iteration of the loop.



So, executing this code, simply prints out the numbers, 1 through 5.



So that's kind of fun and easy, and that's the basic for loop statement, in its most common form.



OK, so let's emulate a more practical usage for it.



We're going to start off by creating a new method and call it calculateInterest.



This is going to calculate the interest, based on the amount of money, that's passed as a parameter.



public static, and it will return a double, two parameters of type double, amount,



and interest rate. return this expression. I've parentheses around the calculation



expression, just to make sure, from an operator precedence point of view,



that we're processing it correctly. Here the expression is multiplying



the amount by the interest rate, divided by 100. This ensures things are being calculated in the



right order, and just to confirm this is working, I'm going to create sample code, in the main



method, to call this calculateInterest method. I'll print some header text, and the call to



calculateInterest, passing 10 thousand, and 2 as arguments.



So let's run this, and make sure that it does work.



We got the result '10 thousand at 2 percent Interest' is equal to two hundred.



This is just a simple, contrived example, of calculating interest,



on an amount of money, and doesn't include compound interest, or anything like that.



This is one way to do it, but let's just say, we want to calculate



3 percent, then 4 percent, and also 5 percent. We could copy this statement in the main method,



and paste it, changing 2 to 3 in in the literal string, and then the argument.



And we could do this several more times, for 4 percent and 5 percent interest calculations:



You could imagine, if you had to do this every time you wanted to calculate different



interest rates, it would be very tedious. And what about if we had twenty interest rates,



or a hundred interest rate calculations. Well, the good thing here, is that computers



are made for automation, so there's a good solution to getting around this problem.



And that's using a for statement to automate this process, and ultimately to make it a lot easier.



We've already seen the for loop in action, so here we want to replace these four statements,



using the for loop. Ok, so how do we do that?



First, look at the argument that's changing in each of these statements, the interest rate.



It's changing from 2 to 3, 3 to 4, and 4 to 5. So we know, our starting point is 2,



our ending point will be 5, and we're incrementing by one each time.



So, let's delete those 3 extra statements we pasted in there earlier.



And now, let's create the for loop that does that: for, and this time, the initialisation part will



assign 2 point zero to a double called rate, next I'll add rate \&amp;lt;= 5 point zero as the



condition, and finally rate plus plus which will increment each loop iteration. As you can see,



I'm using semi-colons to separate each part. I'll call calculateInterest, passing ten thousand, and



the variable rate, and assign that to a new double variable called interestAmount. and print it out.



So, remember, that the first section, in parentheses, is the initial part of the for loop.



It gets executed, before the loop starts processing.



This is where we're creating a variable, of type double, and calling it rate.



And we set it to 2 point zero to start. Next, the condition needs to check to make sure



the rate is less than or equal to 5 point zero. That is the second part of the declaration.



And finally, we'll increment the rate by one, after every loop iteration.



And notice, I created an extra variable, called interestAmount, a double, assigning



it to the result of the method call. This simplifies the println statement,



so instead of hard coding the value 2 point zero there, we changed that to pass the rate variable.



Rate is the variable which is changing on each iteration.



And we replaced the method call in the println statement, with that new variable, interestAmount.



And if we run this code, we can see the interest, for each rate, printed out, 2 percent gives us



2 hundred, 3 percent is 3 hundred and so on. So I've used the loop variable, the interest rate,



and printed that out, but we also used that rate, as an argument to the calculateInterest method.



Ok, so now I've got a mini challenge for you at this point.



Using a new for statement, call the calculateInterest



method with the dollar amount of 100. And this time, use the interest rates between



7.5 and 10, but increment by a quarter of a percent each time, meaning zero point 2 5 percent.



And print the results to the console window. So pause the video, and add that code, and when



you're ready, come back, and see how I code this. So, how did you get on?



Were you able to you figure that out? For this challenge, we have to ask ourselves,



what's changing each time? Well, the rate is changing,



increasing by a quarter of a percent each time, and we're starting at a rate of 7



and a half percent, and ending at 10 percent. That's all we need to know to set up



the conditions of the for loop. So let's start adding this code:



we start the for loop with 7 point 5, we test if its \&amp;lt;= 10, and increment it by point 2 5 each



loop iteration. call the method and assign the return value to our variable. and print it out.



SNow you might be wondering, why are we using the variable name, I?



We used the variable rate before, and it made some sense, when reading the code.



I think I've said before, that a variable should be named, so that the reader of



the code, has some idea what your code is doing. Obviously, the letter, I, doesn't seem to do that.



And that's true, but in Java, and many other languages, I, is short for the iteration variable,



and you'll see the lowercase letter I, used in many loops, as I'm showing you here.



You'll also see lowercase J, and K, used quite a lot as well, especially



when there a multiple loops in the code. So, whether you use a variable name like rate,



like we did before, or just the letter I, as we're doing now, it's your choice.



But I wanted you to get you used to seeing just the letter, I, as the loop variable,



because this is very common practice, in many languages, including Java.



Next, you can see we're looping from 7 point 5 to 10, and incrementing by 0 point two five.



We create the variable, I, as a double and set it to 7 point 5, in the initialization section.



In the loop expression, we check if I is \&lt;= 10, and in the increment section,



we use the compound operator to add zero point two five to the variable, I, for each iteration.



Next, we create a local variable for interestAmount and we call the



calculateInterest method, passing the loanAmount of 1 hundred, and the loop variable as arguments.



And then we print all that out, using some dollar signs, and our variable in the print statement.



Let's first run that. And we can see that the interest amounts



range from 7 dollars 50 to to 10 dollars. Ok, so that was the mini challenge.



Hopefully you were able to get that. And that was just one of



many ways to code the for loop. Next, let's add one more requirement, so I



can introduce you to another feature of looping. Let's say we only want to print the statement,



where the calculatedInterest is \&lt;= eight dollars 50.



So, in other words, we want to loop through interest rates from 7 point 5 to 10,



but quit or exit out of the loop, if the interest amount ever gets to be more than eight dollars 50.



So, how do we do that. Well, one option is to use the break statement.



A break statement transfers control out of an enclosing statement.



We've seen the break statement in the switch statement, but it can also be used in a loop.



A break statement, in a for loop, generally requires you use an if statement, testing some



condition on which to break out of the loop, which is different than the loop expression.



Let's add that code now. We'll add an if statement,



after the call to the calculateInterest method: my if statement will test if interestAmount



exceeds 8 point 5. if it does, break. And if we run that.



We can see we only get output up to the point, that our interest amount, in dollars,



is 8 dollars 50, which is what we wanted. So, the break statement can be used,



to break out of a loop, in this case, before the declared loop expression ever evaluates too false.



Meaning, before i, ever gets to 10. So the code stops executing the loop,



here at line 17, at this break statement, when the interest amount is greater than eight dollars 50.



The code below it, on line 19, won't get executed after the code breaks out,



because now the process has gotten completely out of the loop, and skips



anything in the loop block below it. OK, so that's it for the for loop,



and the break statement. I hope you got a lot out of that.



In the next video, I'll give you another challenge with the for loop statement.







**Comprehensive for Loop Challenge To Strengthen Iteration Skills**



In the previous video, we talked about the for statement, and in this video, I want to give you



another challenge to work out on your own first. This challenge will use prime numbers,



so if you need a refresher, let's quickly look at a web site, called math is fun.



The link to this page will be in the resources section of this video.



It gives the simple explanation that a prime number, is a whole number, greater than 1, that



cannot be made by multiplying other whole numbers. If the number can be made by multiplying other



whole numbers, its not a prime, but rather a composite number.



not a composite number, meaning it cannot be made by multiplying other whole numbers.



Another way to think of it, is that a prime number, is only divisible by itself, and one.



And as you can see there, it lists the prime numbers under 1000.



So, for example, the number 7, cannot be divided by any number except 1 and itself.



That would produce a whole number, so therefor it's a prime number.



7 divided by 1 is 7, and 7 divided by 7 is 1, which are both whole numbers, but any



other number, will result in a decimal number. Looking at the number 9, it can be divided by 3,



which equals 3, a whole number, and therefore it's not a prime number.



The number 1 is not considered a prime number, but the number two, is.



However, any other number divisible by two, is not a prime number.



That's a super simplified explanation, for those of you who hate math.



Don't worry, I'm not going to ask you to create the prime number method on your own.



We'll walk through that first, and then we'll use that method in the challenge when we're done.



So first create a project called ThePrimeNumberChallenge, with a



Main class and a main method. Before we do anything else,



we're going to create an isPrime method. This method has some great opportunities for



reviewing some of the material we've covered, so I want to walk through it with you step by step.



First, let's create the method declaration, what I've called a shell declaration in the past:



public static and it will return a boolean, the name is isPrime, and an int called whole



number is the parameter. I'll return true for now. and close the method definition.



So, we'll be returning a boolean from this method, true if the number passed as the parameter,



is a prime number, and false if it isn't. So the parameter name is wholeNumber,



and I've used isPrime as the method name. You'll remember that when declaring boolean



variables, we sometimes used 'is' as a prefix in the variable name, to form a question.



This same thing is often done with method names, and that's what we're doing here.



Right now, because this method isn't really operable, it will just return true.



So, let's next set up some simple test cases in our main method.



We'll test the numbers 0 through 3 to start with.



And here's a decent opportunity to use the ternary operator.



If the number is prime, the text will say, 'is a prime number', and if the number is not prime,



then the text will say, 'is NOT a prime number'. I'm going to type out the first line,



then I'll copy and paste the rest: So you can see, we're calling the method



here, passing it the number 0 on the first line, and 1 on the second line, and so on.



And this is making the call to the isPrime method from the first operand of the ternary operator,



which, if you recall, uses the question mark and colon.



So if true comes back from that method, we're really concatenating an empty string, but if it's



false, we'll slip in the word 'NOT' in the text. This is not the most efficient code, because of



the immutable string, but for now, it's a way to exercise the skills we've learned so far.



Because, our isPrime method currently, always returns true, this code,



when we run it, will indicate that all of these numbers are prime numbers.



But, we've got 4 test cases set up ready to go, as we build up the isPrime method, piece by piece.



So let's go back to that. First, we'll check if the



number is \&lt;= 2 with an if then statement. If it's \&lt;= 2, we want to return false,



if the number is negative, 0, or 1, because these are not prime numbers.



If the number is 2, however, we want to return true, because 2 is a prime number.



So we can do this, by returning the value that will be returned, from the boolean expression



(wholeNumber == 2), using the double equals sign here, the equality operator:



our if statement will test if whole number is \&amp;lt;= 2. and return the result of



comparing whole number with the value 2. ok, so now let's see where we're at,



and run that with our 4 test cases: So that's good and actually looks right,



but not for all scenarios yet. We've really only addressed the



numbers less than or equal to 2 so far. Let's add a couple more test cases in



preparation for some more code, first we'll add a test for the number 8, which we know isn't prime,



since it's divisible by 2. We'll also test the number 17:



Ok, so we've set up some test cases, and now back to our isPrime method again.



This is where the fun starts to happen, because we get to use a for loop.



To set up a for loop, we need a starting point, a condition to stop at, and a way to increment



the variable that we're checking. So, let's add this for loop:



So we create a variable called divisor, this is the number we'll be dividing the wholeNumber by.



We'll keep looping, if the divisor is less than wholeNumber.



If we used less than or equal there, instead of \&lt;, then we'd have the condition that wholeNumber,



would be divided by itself at the end, and it would then say that the number was not prime,



which would be wrong, so make sure this is just the less than symbol by itself.



And then, we'll increment by one each time, so the post-fix operator will do the job for that.



So thinking about our test case, that has the number 8, as the whole number,



for example, we'll be looping from 2 to 7, incrementing by one each time.



And what do we want to check each time? Well, we want to know if the whole



number is evenly divisible by that loop variable, which we're calling divisor.



What operator can we do this with? The remainder operator, or modulo,



modulus operator, whatever you like to call it, so let's add that code:



adding an if statement, and use the remainder operator on whole number, checking if there is no



remainder. return false if there is no remainder. So here, we have an if statement that checks if



the whole number is divisible by the loop parameter, which we're calling divisor.



If our wholeNumber can be evenly divisible by any number other than itself, so that is,



any number between 2, and one less than its value. Then that means, the whole number can't be



a prime number. In other words,



we found a number that evenly divides into wholeNumber, which means wholeNumber isn't prime.



We start with 2, because everything is divisible by 1, so starting with



1 would give us false positives. But notice that every even number,



will return a false on the first iteration of the loop, so that's pretty efficient.



Note also that we're just putting a return in that if code block.



This will exit the loop at that moment, when that condition is true, breaking out of the loop and



exiting the entire method, returning false. So this lets us get out of the loop as soon



as possible, because we don't want to continue in the loop unnecessarily.



So let's test that: There are other ways we could program this, but



this is a pretty easy way to get your answer, and get out of the loop, and subsequently the method.



When you're using loops, it's a good idea to see if there are any ways to cut down on iterations,



especially if the code block that's being executed is complex, or creating a lot of variables.



One minor thing we could do, is change the code to iterate over less values.



We could use the halfway mark for a number as the maximum value.



Let's make those two minor changes, changing \&lt; to \&lt;=, and wholeNumber, to wholeNumber divided by 2:



So think about why this is more efficient for a minute?



And why it should still work. Anything that is divisible



by the smallest number, 2, will also be divisible by that whole number divided by 2,



so checking numbers greater than half the whole number, is really just wasted effort.



And running that gives us the same results. Now, there are even more efficient ways



to write this code, but we haven't yet picked up those skills, and truthfully,



you aren't likely to be coding this method, since Java has a method on one of its classes that you



can use, to check prime numbers. So, that looks pretty good.



This exercise lets us review the ternary operator, the remainder operator,



and also practice using the for loop, as well as talk about method names for methods returning



boolean values, and looping efficiencies. So now, it really is time for your challenge.



Create a prime number counter variable, that will keep count of how many prime numbers were found.



Create a for statement, using any range of numbers, where the maximum number is \&lt;= 1000.



For each number in the range: Check to see if it's a prime



number using the isPrime method. If the number is prime, print it out and increment the prime



number counter variable. Once the prime number counter equals three, exit the loop (Hint,



use the break statement to exit). Your challenge is to create a for



statement, using any range of numbers, to determine if the numbers are prime numbers.



You'll use the isPrime method we've just worked on.



If it's a prime number, print it out, and increment a count of



the number of prime numbers found. if you get to the stage where 3 or



more prime numbers are found, end the loop. In other words, you'll be iterating through



the loop, but if you've found three prime numbers before the range is fully processed,



then, I want you to exit the for loop, and as a hint, use the break statement to exit.



You need to use an if statement to check the count, and use break to get out of the loop,



even before it completes processing all the numbers in the range you picked.



So that's it, see if you can figure that challenge out.



Pause the video and do that. Once you're ready to see my



version of the code, come back, and we'll walk through my solution together.



Pause the video now. Ok, so hopefully, you managed to get it to work.



So, going to the main method, I'm going to delete all of the code that's there now:



And now let's start with the challenge code. The first thing we need is the prime



number counter. We'll just call



this count, and we'll initialize that to zero: So now we need to create a loop, to go through and



call the isPrime method, a number of times. You'll remember the range



of numbers was yours to pick. I'm just going to use the range 10 to 50.



So, let's build out the loop code block: Ok, so this code will start with the number 10.



It gets assigned to an int variable called "i", when the loop is initialized.



Remember, it's common practice to use "i", or "j", as a loop iteration



variable, and that's what we're doing here. So this loop starts out with the number 10, and



it will keep looping until the number gets to 50. I've made the condition \&lt;=, so this loop will



also process the number 50, if nothing else is included in the code block.



And this code will increment the variable "i", by 1, each time.



You can increment by any number you want, but of course, we want to increment by one here, so we



check every number in the range we've selected. So, we've set up our loop conditions.



Now, it's time for the loop to do something. So let's add the code that checks if



the number is prime next, and we'll increment our prime number counter:



the if statement will call is prime, passing i as the argument. if that returned true,



print a message saying it is a prime number. and increment count.



and print out the total number of primes found. That last line wasn't part of the challenge,



but we'll just print how many prime numbers are in our full range first.



And if we run that. We get each prime number



between 10 and 50 printed out, and you can see, there are 11 prime numbers between 10 and 50.



But that's not what the challenge wanted us to do. It wanted us to break out of the loop,



when we found the first 3 prime numbers. Ok, so let's do what we're supposed to do.



I'm going to remove that last statement, where we printed out the total prime numbers in the range:



And now we'll add our check to see if we found 3 prime numbers.



And if we did, we'll break out of this loop: test if count is equal to 3. print a message



if it is. and exit the loop using break. Let's run it again and see whether it works.



And you can see, we print the data for the first 3 prime numbers only, and we get the



statement, 'Found 3, Exiting for loop'. So it seems to be working, which is good.



So that's our challenge done, and the big thing there again, was once count got to 3,



we wanted to exit the loop prematurely. And we did that with a break.



And the break actually exits out of the for loop completely,



and stops processing at that point, meaning the "i" iteration variable, never made it to 50.



It stopped at number 17. We actually didn't have to



use a break at all, but I wanted you to get a little practice with the for loop.



You can make the loop expression as complex as you want, and use variables declared outside the loop.



If we did do this, without the break statement, we could replace that middle part of the loop



statement, where it's checking if "i" \&lt;= 50, we could add our second condition there.



So let's just do that real quick. Let's remove the whole if block on line 11 first:



Then we'll change our loop expression, and add the condition count \&lt; 3, with logical and operator:



And running that. We can see that it works,



it just doesn't print the statement that we broke out of the loop when count was 3.



Ok, so that wasn't in the requirements,



but it's another way to check for the first three prime numbers only.



And so, that was the for loop challenge. Congratulations if you got that working,



and I hope you enjoyed that exercise. In the next video, we'll look at another



loop statement, the while statement. So I'll see you in the next video.


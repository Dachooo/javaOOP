**Harnessing Code Blocks And The If-Then-Else Statement In Java**



In this video I want to discuss code blocks in more detail, specifically



with the use of them in an if-then statement, including the use of "else" and "if-else".



Let's review what we've learnt so far about the if-then statement.



So as we've already seen the if-then statement is used to check some condition or set of conditions,



and then if that check evaluates to true, it will execute the code contained within the code block.



Let's go back to IntelliJ, and start taking a closer look.



As you can see, I've created a new project. I've called it if keyword and code blocks,



and I've also added the main method inside the main class and some whitespace.



If you need some time, pause the video briefly, create a new project,



and then add a class and main method as you've seen me do a number of times.



What I want to do first is just go through the if statement further, so you're familiar



with the various ways that you can use it. What I'm going to do is create some code



and then we'll go through it. I'll start with some variables.



I'll create a boolean variable called game over, and assign it true. Next, and int called score,



with the value five thousand. An int called level completed, set to 5. Lastly, another int. I'll



call it bonus and set it to one hundred. I'll add an if statement next. if score, ==, 5000 in



parentheses, left curly brace. I'll print your score was five thousand. right curly brace.



Hopefully, you understand what I've done here. I've created four variables; one of type boolean



and three of type int, and I initialized each of them with a starting value.



And then I have a simple if statement to check if score is equal



to five thousand using the equality operator. Lastly, if we find that that condition is true,



the code prints out a message. Let's go ahead and run this,



and I hope you can already see what should happen. No surprises there. This if statement was pretty



basic, and it printed out "your score was 5000", as we expected.



So, that's the first use of the if statement, which you have seen



previously used in a similar way. What I generally recommend is



that even if you've got only one line of conditional code, use a code block anyway.



That's a best practice and something you will almost always see in order to



make code easier to read and understand. Now I want to show you the other parts



of the if statement which I know I've talked about only briefly.



This slide shows the syntax for an "if-else" statement.



As you can see, the else statement comes after the code block for the



if statement and has its own code block also. What this does is evaluate the if condition,



and if it's true, the code inside that code block will be executed.



If the condition specified in the parentheses after the if keyword evaluates to false, the



code inside the else code block will be executed. The "if-else" will always result in an either-or



situation where some code will get executed, either the if statement's code block,



or the else statement's code block. Before we add more code, let's first



just change our if condition to check if score is less than five thousand, instead



of equal to five thousand, and also change the message we print out to reflect this change.



I'm going to delete these two lines and re-enter it again.



But feel free to just edit the parts that need to be changed, rather than typing it out again:



I'll print out your score was less than 5 thousand.



Next, I'll insert the else block into our if statement.



else left curly brace. Add a println with the message "Got here".



So here, I've added the else block with a print statement and a different message so



we'll know which part executes. Let's go ahead and run that.



As you can see, we get the output, "Got here". And the reason that we see that and we don't



see any other output is the first "if" test was checked.



So, is score less than five thousand? No, it isn't.



So this line, this code block, was not executed as a result of that.



What happened then is the computer goes to the next part here, which is an "else" statement.



And because we've got no other condition there, it says; okay, in all other circumstances I'm going



to just print "Got here". And it did just that. Let's change that if condition again, from less



than five thousand to less than or equal to five thousand, and see if we get a different result.



And once again, I'm going to re-enter the code, but you can just edit it if you prefer:



The expression I'll use is score, \&amp;lt;=, 5000. And printout an appropriate message.



Now, what do you think will happen when I run this?



Let's run it and see. We get the message,



"your score was less than or equal to 5000", and we see now the else code block wasn't executed.



This line didn't get executed because the if condition evaluated to true,



and therefore, that first code block was executed. So you can see that the if statement is useful,



but we can even expand it further. This is the syntax for an if



statement with else-if and else blocks. As we already know, both the else-if and



the else are optional, but if you're going to use them both, they must be in the order shown here.



The "else" must always be last. It can follow as many "else-if" blocks as needed.



As we can see on the slide here, the if condition is checked first, and if firstCondition is true,



that code block is executed. If firstCondition is false,



Java will then check the first "else-if" condition, which is secondCondition in this case.



So if secondCondition is true, it will execute that code block.



So in this statement, if both firstCondition and secondCondition are false, then the code



in the final else block will be executed. As soon as a condition evaluates to true,



and its code block is executed, that is it. No remaining conditions will be checked.



As shown on the slide here, if firstCondition is true, the expression for the "else-if",



secondCondition, will not even be evaluated. And as we've already seen,



the else block will not be executed. Ok, let's add some code and take a closer look.



Let's change the condition of the if block and its message, then we'll also insert an



"else-if" block, before the final else block: I'll make the expression score, less than 5000,



and, score greater than, 1000. And print a message to that effect. I'll close that with a right curly



brace, and then type, else if, score, less than one thousand, in parentheses,



left curly brace. And use println with the text, "your score was less than 1000".



Ok, so now, this if statement is checking to see if score is less than



five thousand and greater than one thousand. I hope you recall that the two ampersands put



together is the "logical and", in Java. So then, if either the first condition,



or second condition is false, it will check to see if score is less than one thousand.



And finally, if both the previous conditions are false, it will print the "got here" message.



So let's run this and see what happens here. And we get the message "Got here" printed.



It was executed because, of course, the comparison tests on lines 10 and 12 both evaluated too false.



So, score is equal to five thousand, not less than, which is tested on line ten,



and score is, of course, not less than one thousand, as tested on line 12.



So let's change the value of score to four thousand to check that this is all working:



Ok, so now the value of score is four thousand, which is less than



five thousand but also greater than one thousand. So that first condition should evaluate to true.



So, if I run that.



And as we expected, we get the, your score was less than 5000, but greater than 1000 message.



It's now executed the first component, and we can see that it's automatically jumping out of the



section, after it's executed something. As soon as it's found something true,



it's going to ignore any following "else-if" conditions and the final else, along the way.



Let's make one more check by changing the value of score to eight hundred:



And just to confirm that we get what we think we should, let's run that.



We've now got the result "your score was less than 1000".



We can see now that's only executed line 13.



This can be very useful to use the if keyword to build up statements.



We can test potentially a lot of scenarios and to proceed to execute certain segments of code based



on what the results of those comparisons are. So that's the if keyword with its



additional "else-if" and else code blocks. In the next video, I'll be giving you a challenge.









**Practical If-Then-Else Challenge For Java Flow Control**



In this video, we're going to copy a class, edit the code a bit, and then



I'll give you a challenge to work on. The first thing I want you to do is



copy the main class that we were working on in the previous video.



So back in IntelliJ, first, I want to open up the project



pane by clicking on "project" here on the left. This displays the project pane here on the left.



So now, I'll open the folder and right-click on the main class.



We get lots of menu options but what I want to do is select "copy".



We could also have just used the key combination for our operating system,



which in my case is control C for windows. And now let's right-click on the SRC



folder and select the "paste" option. IntelliJ pops up a window for copy class,



and because we can't have two classes with the same name, I need to type in a new name.



So let's name this copied class, main challenge. So now that we've got our new class,



let's take it to the next level. The first thing I want to do is



delete everything from line 10 to line 16. So let's highlight that and get rid of it.



Ok I'll type in some code. I'll create a variable of



type int called final score, and set it to equal score. I'll type in an if statement,



testing if game over == true, in parentheses. If it is, I'll set final score to be, final score,



plus equals, level completed, times, bonus, in parentheses. And use println



to print the text "your final score was" and the value for final score. right curly brace.



You can see we're using the compound assignment operator to add more points to the final score.



You'll remember, we talked about this operator in a previous video.



It's basically shorthand for final score, equals, final score, plus, level completed, times bonus.



So if I run that. We see that the final



score is one-thousand three-hundred. And that's because the final score



equals the score, which was eight hundred, plus the value in level completed times the bonus.



Since level completed is five and we're multiplying that by our bonus, which is one



hundred, we get eight hundred plus five hundred. And the final score is one-thousand three-hundred.



So you can see that the code block was executed because game over was set to true up on line five.



I've stated before, another good practice is to abbreviate boolean expressions tests.



We can change game over equals equals true, to just game over, like this.



So, that essentially is exactly the same as typing if game over equals equals true.



Making this change helps make the code more readable, and it can help you prevent making



an accidental assignment error, (meaning if you forgot one of the two equal signs,



it changes the whole meaning of the expression). We saw that in an earlier video in the course.



Coding it this way is a win-win, and I want to recommend you do that.



You'll see that commonly used in Java code. Okay, so, it's challenge time.



Insert a code segment after the code we've just reviewed:



Set the existing score variable to 10,000. Set the existing levelCompleted variable to 8.



Set the existing bonus variable to 200. Use the same if condition. Meaning if gameOver is true,



then you want to perform the same calculation, and print out the value of the finalScore variable.



The challenge for you now is to create a second printout on the screen, this time with the score



set to ten thousand, with the level completed set to eight, and with the bonus set to two hundred.



So you need to do something very similar to what we've done here in this first example, but you



need to also make sure that you don't change that code and it still displays from line 14.



So essentially, you'll have the first message displaying, and then below that,



you'll have additional code and a second line with the new scenario also displaying.



All right, so pause the video, and go ahead and see if you can implement that.



And when you're ready, start the video again, and come back and see my solution.



So how did you get on, did you figure it out? There are a couple of ways to go about this.



What we could do, the first approach, would be to create a complete new set of variables.



We could do a copy and paste of that code, but then edit it to use all new



variable names. Let's do that first. When I first paste the new code in,



IntelliJ of course is giving us errors because we're redeclaring all these variables,



and we've learned we can't do this. I'll change all the variable names by



adding the prefix "new" to the beginning of them. When we do this, we want to use lower camel case,



so we'll change some letters to uppercase in the names.



We want them to be formatted the way they should be. I'll make those changes, plus set the



appropriate values mentioned in the challenge. Let's run this.



And we get the answer eleven thousand six hundred,



which is ten thousand plus eight, times two hundred, which is one thousand six hundred, and



ten thousand plus one thousand six hundred, equals eleven thousand six hundred.



So that's certainly one solution to it, creating all new variables.



Remember, that I have mentioned there is rarely ever a single "right"



solution to a problem when programming. But some solutions are better than others.



Some may be more efficient, some may be easier to read and maintain, and others



might be more reusable in the future. As a developer, you'll probably need



to consider all three of these concerns. The disadvantage of the approach we just



took is that we're using extra memory because we're creating new variables



that we potentially don't really need. So what we could do, as an alternative,



we could just reuse the original variables that were set up and assign them new values.



So let's go ahead and do that. But before we get started, let's comment out



what we just did so we can leave it in the file. To do that, I'll select everything I just did,



the new variable stuff. And then to make all these lines



comments, there are a couple of ways to do it. You can go to the code menu, up at the top,



and then about halfway down, you'll see "comment with line comment".



Notice also there's a keyboard shortcut we could've used, that is the second way.



But since we're here, let's select the line comment option.



Now the code is commented out, you can see its changed to another colour. This code will not



get executed because we have commented it out. To keep this all looking neat, I'm going to come



here to line 27, and hit enter a couple of times to give us some nice space.



The easiest and quickest way to do this will again be to copy the code we already have.



So back up at the top, I'll select lines 6 through 15 and copy them.



Then I'll come back down here and paste them at the bottom, here on line 29.



And once again, we get errors from IntelliJ. But this time to fix them, instead of changing the



variable names, I'll remove the data type so the statements are no longer declaration statements.



Now, they'll just be assignment statements. And I'll update the values to ten thousand, 8,



and 200. So let's do that:



I can run that to make sure it's working as we expect.



And we still get the same output, as we expected. So that's another way of doing it.



That's just literally copying and pasting, with only a few minor changes to the



declaration statements to make them assignments. The advantage of that approach is that it was



quicker, and we didn't create new variables. So we used the memory more efficiently.



But the disadvantages, firstly, we haven't got a permanent record of the original variable



values, up at the top on lines 6 through 8. So if we wanted to keep the fact that this first



score was 800, the level that was completed was 5, and its bonus was 100, we can't do that because



we've now updated the values in those variables. Secondly, we've used game over equals true for



both, and if we were tracking two players' scores, maybe game over was only true for one of them.



In that case, maybe we didn't want to actually print this out at all because



this player's game was not over, and therefore the value of game over would actually be false.



But the other disadvantage is simply that we're copying and pasting code.



And the disadvantage with copying and pasting code is, we're duplicating code.



And that means, if we need to make a change, then we need to change it in more than one place.



And if we forget that our code is duplicated, we may forget to change it in one place,



which means our scores may not be calculated correctly or consistently in all our code.



For example, let's just say, we've decided to change the formula for defining our final score.



And we're going to add a bonus of 1000, to the final score that was calculated.



final score, plus equals, one thousand. If I run this.



You can see the first score was correctly set to two thousand three hundred, which is



the one thousand three hundred, plus the one thousand bonus.



But down here, we forgot to make the change in the bottom "if" code block.



And as a result, that final score didn't have the extra one thousand points added to it correctly.



That's the disadvantage of duplication. We need to go back and remember all the places



where the code is duplicated to make our changes. We're really asking for errors in the long term



because, let's face it, we're all human. We make mistakes and we forget things.



It's very common in programming, particularly as the code we're working on gets more complicated,



to forget if we're duplicating a lot of code, and to not make changes in all the necessary places.



Discrepancies and errors can easily creep in,



so we definitely need to look for ways to avoid having the same code in multiple places.



Luckily, there are lots of ways to help reduce or eliminate the need for any duplicate code.



In the next video, I'm going to expand on this example, and I'll show you how



we can remove repeated and similar blocks of code by using the concept of methods.



Methods take the code block to the next level, and effectively,



allow us to reuse that code in many places, with the code written in just a single place.



So we type the code once and reuse it multiple times.



Ok, so let's start talking about methods in the next video.










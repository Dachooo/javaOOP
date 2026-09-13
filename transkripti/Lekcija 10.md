**Mastering Java's if-then Statement: Conditional Logic for Program Flow Control**





In the last video, we created our first class in Java using the IntelliJ IDE. So



now it's time to get back to studying Java. In this video, we're going to take a look at



some more operators, but before that, I need to talk about the if-then statement first.



The if-then statement is the most basic of all the control flow statements. It tells your



program to execute a certain section of code only if a particular test evaluates to true.



This is known as conditional logic. Conditional logic uses specific statements in



Java to allow us to check a condition and execute certain code based on whether that condition,



(the expression) is true or false. Let's see how this works in practice.



We'll be using the hello class we created in the previous video. If you skipped that video, be sure



to review it or pause now to create a class called hello with a main method that looks like this.



OK, so now, I'll just come over here to line 5 in our hello class and I'll remove the print



statement here, with the text 'hello world'. Next, I want to add some code so that I can



start looking at conditional statements: boolean, isAlien, equals, false,



semi-colon. if, left parentheses, isAlien, equals, equals, false, right parentheses.



system dot out dot println, left parentheses, double quote, it is not an alien, double quote,



right parentheses, semi-colon. So, notice a few things here.



Firstly, the if statement does not have a semicolon.



So far in the course, we've been ending a line of code with a semicolon.



The semicolon doesn't get added for an if statement until the following line,



which in this case is a print statement. What's happening here is that the statement



is actually spanning two lines, which is perfectly valid to do in Java.



I'll talk more about whitespace, which is the concept of using multiple lines and any number



of spaces later on in the course. But check out the operators I've



used in these three lines of code. You can see that on the first line,



it's got a single equal sign. And on the second line,



it's using two equal signs put together. The first one is an assignment operator,



and we've seen that quite a few times. The assignment operator assigns the value



of an expression to the variable to the left of the operator.



So, isAlien is the variable in this case and it's been set to false,



which is the value of our expression. But the second line is a bit more interesting.



That's got two equal signs and it does something completely different.



The equality operator tests to see if two operands are considered equal and returns a boolean value.



So here, isAlien is being tested against the value false.



In other words, is the left operand equal to the right operand?



Since isAlien has been assigned false on the first line, the expression will return true.



Therefore, the next line will be executed.



So if I run this, it should print "it is not an alien!" to the screen:



And you can see there, "it is not an alien!". If I hover the cursor over the expression,



IntelliJ is telling us there's a way to abbreviate isAlien equal equals



false by using "exclamation mark is alien". I'll talk more about that later on in the course.



What we have there is valid, but IntelliJ will often give you helpful



tips on how to make your code more efficient. Alright, so the other thing I wanted to show



you is what happens if I add a semicolon at the end of the line containing the if



statement, right after the closing parentheses: Notice when I do that, everything is still valid.



The lightbulb indicates a potential warning, but there are no errors.



And if I run this: I get the same output.



At first glance, you would assume nothing's changed, and the program



is still working as it should. However, if I change false to true:



Obviously, now, the expression won't return true anymore.



Is alien is still set to false and the expression is asking; "is false equal



to true", and the answer is false. So what that means is the line below



it should not be executed. And if I run that again:



I still get the same output. That's the confusing part about



putting a semicolon where it shouldn't be. By putting a semicolon there, we're closing



off that line of code, which means the next line is not dependent on



it anymore and will execute regardless of whether the expression is true or false.



The syntax of Java allows us to get away with that.



But basically, what we've done is create an if-then statement that doesn't do anything.



And that's the reason why you don't want to put a semicolon there.



I'll change that back and run it again: We don't get any output, and that's correct,



because the expression is false and the next line doesn't get executed.



I'll just change that back to false: And we get our output back.



The expression evaluates to true, and the next line gets executed.



I wanted to show you this particular version of the if-then statement without a code block first,



before showing you a better approach. One of the disadvantages of using the if-then



statement without a code block is that it's not immediately clear, what the code is doing.



Let's take a look at an example. If I wanted to print two lines,



I'd add another print statement, first changing our variable isAlien to true.



system dot out do println, left parentheses, double quote, and I am scared of aliens,



double quote, right parentheses, semi-colon. So, we've changed the value of isAlien from false



to true and added the second print statement. And since the expression is going to evaluate



to false, we can expect both the print statements to not be printed to the screen.



Let's run that: Now that's confusing.



The second print statement gets printed out. The reason for that is, without the code block,



only the line immediately following the if-then statement, is executed.



All subsequent lines are not considered to be part of the if-then statement.



The way we deal with this issue is we add a code block, which is the better approach I mentioned.



Instead of using the if statement as we can see here, we should instead use a code block.



A code block allows more than one statement to be executed, in other words, a block of code.



The format is: Add the left and right



curly brace, and put the statement or statements in between the braces. If the expression is true,



the code block will be executed. If the expression is false,



all code inside the block will be ignored. We've used code blocks before, you may remember,



in JShell to create a group of statements we wanted to execute together, and that's really what



we're going to do here if the expression returns true. So I'm going to add the curly braces in:



And you can see that IntelliJ has highlighted the parentheses to signify a code block.



Now that I've done that, if I run this code now, I should get no output:



And that's exactly what I got, no output. That's because the second



print statement is inside the code block now, and we get the expected output.



And if I change isAlien back to false and run it again, I should get both lines printed out:



And there we can see, both lines printed to the screen.



Using code blocks makes the code easier to understand.



It also allows you to execute more than one statement if the expression is true.



In general, always use code blocks, even if you're only executing one line.



If you decide to revisit your code in the future and need to add another line, you may not have



realized that you've introduced a bug. So bottom line, always use a code



block for an if statement. All right, so let's move on now,



and in the next video, I'm going to switch to another primitive type to continue our



exploration of the if-then statement. See you in the next video.









**Advanced Conditional Logic: Implementing the Logical AND Operator in Java Code**



In the previous video, we got to work with the equality operator, and we used it in



conjunction with the if-then statement. In this video, I'm going to continue



our exploration of the if-then statement. I'll also introduce a few other operators



including the logical and operator. Let's get back to the hello class we



were working on in the last video. Before we continue, let me just show you an IntelliJ



trick. If we come up to the tab above the editor window, with the label hello dot java,



and we double-click it with our mouse, This minimizes the project pane on the



left and maximizes the editing window. For future videos, I'll be demonstrating the code segments



with the project pane minimized. To restore it, you can simply double-click on that tab again.



I can also just click on the tab on the left that says project for the same effect, which I'll do



now. I'll start this lecture with that minimized. Let's continue outside of the code block



from the last video in the class we called hello by starting on line 12.



You may notice that I like to leave an extra line between each bit of code which just helps with



readability, and if you want to review the code later, it'll be easier to locate the code that's



associated with each topic we've covered. Let's add some more code next:



I'll add an int variable called topScore, and set it to one hundred. if, left parentheses,



top score, is equal to, one hundred, right parentheses, left curly brace. I'll use println



to print the message, you got the high score, with an exclamation mark. right curly brace



You can see that the equal to operator is comparing top score to the literal value, 100.



And since top score equals 100, the expression top score, is equal to 100, should return true,



and our code block will be executed. If I run this, I should see the output:



"You got the high score." And there it is printed



on the screen, so that's working correctly. Lets use the "not equal to" operator by replacing



the first equal sign with an exclamation mark: So our expression is now asking the question. Is



topScore not equal to one hundred? And the answer is no.



If the previous expression returned true when I used the "equal to" operator, then clearly,



this expression will return false. And if I run that again:



No output, and that's correct. The expression returned false,



so the code block didn't get executed. Let's try out another operation,



the "greater than" operator. I'll replace the "not equal to" operator.



So now this expression is asking, is topScore greater than one hundred?



We know that the answer to that is no, but I'll run it anyway to confirm our code is working.



We don't get the high score message, so that's correct.



Since topScore is equal to one hundred and we're asking the question; "is top score greater



than one hundred?", and the answer is false. But we can refine that expression even further.



Instead of using "greater than", we can use "greater than or equal to",



and we can do that by adding an equal sign after the greater than symbol as I'll do next:



Now this expression is asking the question; "is top score greater than or equal to one hundred?".



So it's one operator to cover both of those scenarios.



And if I run that: I get the output,



because the expression returns true. In this instance, topScore does in fact satisfy



the condition "greater than" or "equal to". We can contrast that and do a similar thing



with the "less than" operator: And since topScore equals



one hundred, and one hundred is not less than one hundred, the expression will return false,



and nothing will get printed to the screen. Next, we can also use the "less than or equal



to" operator which is similar to "greater than or equal to". This time, though, we're testing to see



if topScore is less than or equal to one hundred: And again, we're seeing that output,



because topScore is equal to one hundred, and the expression we tested was whether topScore



was less than or equal to one hundred. Now just to confirm that this is working,



we'll change topScore to eighty and the expression to just the "less than" condition.



Now we're testing to see whether topScore is less than one hundred.



And since we've defined topScore to be eighty now, that should be true.



And if I run this: We get the high score message again, and



this is because eighty is less than one hundred. All right, I'll introduce another variable



because I want to show you a slightly more complex example.



I'll press enter a couple of times and start on line 17.



I'll create an int variable called secondTopScore, with a value of 60. if, left parenthesis,



topScore, greater than, secondTopScore, ampersand ampersand, topScore, less than one hundred, right



parenthesis, left curly brace. I'll print the message greater than second top score and less



than one hundred right curly brace. Looking at this code,



this is actually performing two tests now. It's saying, "is topScore greater than the



secondTopScore?". But it's also saying, "is topScore less than one hundred?".



So, the two ampersands put together like that is called the logical and operator.



This ensures that both operands to the left and right of the logical and operator, are true.



There's also a single ampersand that we can use which is called a bitwise and.



It works in a similar way, but you shouldn't use that here. We'll talk about bitwise operators



later, which is something you will use a lot less than the logical and operator.



Going back to the code, we should find the message printed to the screen.



And the reason is that the left side is true because topScore is eighty, and



that's greater than secondTopScore, which is 60. And the right side is also true because topScore



is less than one hundred. So, if I run that.



Greater than secondTopScore and less than one hundred is the correct output.



And just to confirm this is working, I'll change secondTopScore to eighty-one:



That changes the scenario, because now secondTopScore is greater than topScore.



And if I run that. You can see there



that we haven't got the message in the output. It only needs one side to be false to make the



entire condition false. All right,



so that's a more advanced if-then statement. Let's end the video here, and in the next video,



we'll continue our exploration of operators. I'll also be discussing something



called operator precedence. See you in the next video.







**Java's Logical OR Operator: Enhancing Conditional Statements for Flexible Code**





In the previous video, I talked about operators, including the logical and operator.



In this video, I'll continue on with the discussion of operators and get into



operator precedence. I'll be starting with the class, hello from the previous video.



We finished off the last video by talking about the logical and operator,



denoted by the two ampersands, and how it required both the left operand condition



and the right operand condition to be true, in order for the code block to be executed.



Let's confirm that by running the code. You can see that the code in the code



block wasn't executed because it didn't print out the greater than second top



score and less than one hundred message. This is because we defined second top score



to have a value of eighty-one, which caused the left operand condition to be false.



All right, so a useful thing to do with these expressions or conditions is to use



extra parentheses to clarify your meaning. I'll put parentheses around the left operand



condition, as well as the right operand condition: This makes the code easier to read, becase its



clear now what the condition is for the left and right operands of the logical and operator.



And if I run the code again. Nothing's changed, which is good,



so adding the parentheses didn't change the outcome. We got exactly the same results.



The idea of using them is to makes it quicker to understand the code at a glance.



This can be helpful in the future when you're looking over your code,



or if someone else is reviewing your code, and you might have forgotten the reasoning



for putting it there in the first place. So that's the logical and operator.



Let's move on now and talk about typing two pipe symbols,



which is known as the logical or operator. The logical or operator works in a similar



way to the logical and operator. But the difference is that it only



requires only one of the conditions to the left or right side of the logical or operator, to be true.



Remember that the logical and operator, or two ampersands, required both sides,



both conditions, to evaluate to true. The and operator actually comes in two



flavours in Java, as does the or operator. \&amp;\&amp; is the logical and which operates on



boolean operands; checking if a given condition is true or false.



The \&amp; is a bitwise operator working at the bit level. This is an advanced



concept that I won't get into here. Likewise || is the logical or,



and again it operates on boolean operands; checking if a given condition is true or false.



The | is a bitwise operator which is also working at the bit level.



And just like the bitwise and operator, we won't be using it as much as their logical counterparts.



We'll almost always be using the logical operators.



So let's put in some additional code here, on a new line, starting on line twenty-two.



We want to test a new condition using the logical or operator, so I'll type:



if, left parentheses, left parentheses, top score, greater than, ninety, closing parentheses,



logical or operator, left parentheses, second top score, less than or equal to,



ninety, right parentheses, right parentheses, left curly brace. I'll print a message if at



least one of the conditions is true. and finish with a right curly brace.



All right, previously, I defined top score to be eighty.



And looking at the code just written, the left condition is going to be false



because eighty is not greater than ninety. I defined second top score to be eighty-one.



And this is going to return true for the right condition because eighty-one is less



than or equal to ninety. So, we have one false



operand and one true operand. Therefore, we should still get the



output because one of them is true. And there it is, "either or both of



the conditions are true". And just to confirm that,



if we change second top score to ninety-five, an arbitrary number that's greater than 90:



Run it again. And this time we don't



get any output from that last if statement because both the left and right conditions return false.



All right, so let's finish the video here. In the next video, I've got a mini challenge



for you, which I think should be fun. And after that, we'll talk about the



differences between the assignment and "equal to" operators, and how to ensure you don't



get into difficulty with those. I'll see you in the next video.


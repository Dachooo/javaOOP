**Mastering Operators, Operands, and Expressions in Java Programming**





In the previous video, we did a recap of the primitive data types, as well as getting a



formal introduction to the "string". In this video, we're going to take a



look at operators, operands, and expressions. I've discussed very briefly what operators are



and we've used a few of them in expressions. Let's go deeper into that now.



So what are operators? Operators in Java are special



symbols that perform specific operations on one, two, or three operands, and then return a result.



In the example below, which we saw in a previous video, we used the addition operator,



as well as the multiplication operator. But there are many other operators in Java.



So what is an operand? An operand is a term used to describe any



object that is manipulated by an operator. So if we consider this code statement:



Here we are adding two numbers together. The plus here is the operator and 15



and 12 are the operands. Variables used instead of literals can also be operands.



Another example from a previous challenge: In the line above, byte value, short value and int



value, are operands as are the numeric literals. What's an expression?



An expression is formed by combining variables, literals, method return values,



which we haven't covered yet, and operators. They are a way of forming and combining



those values to produce a result. In the line below, 15 plus 12 is the



expression, which returns the value of 27. In the statement below, byte value plus



short value plus int value is the expression. All right, let's officially explore operators



using some code in JShell and start by typing: int, result, equals, one, plus two, semi-colon.



I'll add two forward slashes to include a comment and type the expected result.



You've actually seen this operator in use before. We've already done some basic arithmetic



using the addition, or additive operator. In fact, we've used several operators already.



But now I want to clarify and go through the major operators so that you can become



familiar with them and know how to use them. You'll find that some operators tend to be



used a lot more frequently than others. What I've done on this line is, I've added



a comment at the end of the line with two forward slashes to type out what the expression should



evaluate to before we print it out. More on comments in a moment.



How many operators would you say are in this statement?



Well, we've actually got two; the equal operator and the plus operator.



The equal operator is also called the assignment operator and it's used to assign a value.



In this case, it's assigning what's on the right-hand side of the equals operator to the



variable I've called result, on the left. The value being assigned will be three,



in this case, which is the sum of one plus two. The addition operator is a two-operand operator.



It adds the operand to the left of the plus sign to the operand on the right.



So the expression is using two operands here. Most of the operators you are probably



familiar with are used on two operands. An operand itself can be an expression and can



contain multiple expressions and operands. In the next video, we'll cover single operand



operators which as you may have guessed, perform a function on a single operand.



But first, since this is the first time I've used a comment in code,



let's pause a moment to talk about comments. Comments are ignored by the computer and are



added to a program to help describe something. Comments are there for humans to read.



We use two forward slashes in front of any code or on a blank line. Anything after the



two forward slashes, right through to the end of that line is ignored by the computer.



So aside from describing something about a program, comments can also



be used to temporarily disable code. Let's introduce another variable:



int, previous result, equals, result I'll go ahead and change the value of result:



result, equals, result minus one I'll next include a comment there:



And my comment is going to say what the expected outcome will be.



Because result is 3, I am taking away 1, and the answer should be 2.



And there we have it, result is now equal to two. It's highly recommended that you use comments to



describe what you are trying to achieve. Before we move on, you may be wondering



about the value that is now in the previous result variable after the last statement.



To summarize, I assigned result to previous result and then I changed the value of



result. Did this also change the value in previous result? That is a good question.



Let's swing back and see if the values in the previous result and result variables



are independent of each other. I'll just print the value of



previous result using system dot out dot print. Even though I previously assigned result to the



previous result variable, it did not get updated when result got a new value of two.



The value in previous result remained unchanged. When I assigned result to previous result,



the value of result at that time was 3, and 3 was assigned to previous result. Any further



changes to the value of result don't affect previous result, as I've just demonstrated.



Before we move away from the addition operator, let's compare what happens



if you use it on character data types. We've seen before that the char holds a



single character, and the String can hold multiple characters. We've also discussed



in the previous video that a string plus anything else gives us a string.



But what about chars? Let's create two char variables and print them out



using the addition operator, as I'll show here: char, first char, equals, single quote, A,



single-quote, semi-colon, char, second char, equals, single quote, B, single-quote, semi-colon.



Let's print them out. system dot out dot print, and then



first char, plus, second char, in parentheses. Can you guess what the result will be?



Is it going to be A concatenated with B? Let's hit enter and see:



So, the result definitely does not look like 'A' concatenated with 'B'. Where did 131 come from?



You might remember that we said chars are stored as 2 byte numbers in memory.



When you use the addition operator with chars, it is



these numbers in memory that get added together. The character values don't get concatenated.



The decimal values for 'A' and 'B' are 65 and 66, respectively. If you don't know how I got these



numbers, revisit the video on chars, and use the symbol dot cc website I showed you in that video,



to get both the unicode and decimal values. So, adding 65 and 66 will give us 131. This



question has come up occasionally as a question, and I wanted to explain why this happens.



If you really want to print A concatenated with B, you can concatenate these



variables to a string. We'll do that next: system dot out dot print, left parantheses,



double quotes, plus first char, plus second char, right parentheses, semi-colon.



In this code, I am starting with two double quotes. This is called an empty string and is



a valid string literal. We next use a plus on that string. Any plus after a string is going



to be a concatenation operator, as I've stated several times, so I'll hit enter.



And now the character A was transformed into a string and concatenated to an empty string,



and the same occurred with the character B. It's probably unlikely you'd be outputting data a



single character at a time using the char, but it is important to understand that the char and the



string do not treat the plus sign the same. Alright, so let's try another operator



we've seen before, and that's probably very familiar to you; the multiplication operator.



Let's set the value of result to 2 first, just so that we are all on the same page before we go on.



And now, using multiplication lets multiply it by ten:



result, equals, result, times ten, semi-colon. And we'll add a comment to describe what



we expect the equation result to be: So one of the operands, in this case,



is result which has the value of 2, and we're multiplying 2 by 10,



so the new value for result should be 20. Let's press enter to see if that's correct:



And no surprises there. We get a value of 20 when we use result which has a value of 2,



the first operand, and we multiply it by 10, the second operand.



Next, let's do a bit of division; remembering now that result has the value of 20 from



the previous statement: result, equals result,



divided by four, semi-colon. And I'll add a comment with the expected result.



And again, no surprises there, the result equals 5.



So moving on, we'll now look at the remainder operator, which may not be as familiar to



you as the last few we've reviewed. The remainder operator is represented



in Java by the percent sign. The remainder operator goes



by several other names: modulus, modulo or just plain mod for short.



The remainder operator returns the remaining value from a division operation.



If there is no remaining value, the result is 0. This table shows some examples:



In the first example, ten can be divided evenly by 5, so there is no remainder.



In the second example, ten can be divided evenly by 2, so there is no remainder



In the third example, ten can't be divided evenly by 3, but we get 3 from the division,



which gives us 9 with 1 remaining. Finally, using one as the right



operand always gives us zero, so it's unlikely to add value to your code.



You might ask, when would you ever use the remainder operator? It turns out that this is



a pretty useful operator, although probably not used as often as many other operators.



To see that working, we're going to set result back to 5. This is in case



you have lost track of the value of result. And now, we'll try out the remainder operator:



I'll set result equal to result, modulo three. And a comment with the expected result.



The way the modulus operator works, is that you ask yourself, how many times does the



right operand fit into the left operand, and then what is left over. What's left over is the result.



In this case, 3 fits into 5 only once, and what is left over is 2.



And if we press enter. Result equals 2. So that is



how the remainder operator works. I'll talk more about the modulus operator later in the course.



Let's review what we've learned in this video. This table shows the five operators we just



reviewed. For all of the numeric types (whole numbers and decimals),



the operators are mathematical operators as shown. Only one operator, the addition operator,



is supported by string, but when used with a string, it means concatenation, not addition.



None of the operators are applicable to a boolean. Because the char is stored as a whole number



literal, all the operations are applicable to a char.



All right, so that covers the most common operators, all of which have two operands.



In the next video, we'll continue with operators, but we'll start looking at some shortcuts



you can use when using operators. See you in the next video.









**Simplifying Java Code: Using Abbreviated Operators for Concise Operations**





In the previous video, I talked about operators, operands, and expressions. In this video,



I'll continue the discussion about operators, and you'll see how they



can be abbreviated to simplify code. In the next section of this course,



we'll be transitioning to coding in a code editor called IntelliJ. I want to continue



to prepare you for that environment by using the curly brace feature in JShell.



So, why use multiple statements in curly braces? First, it's a way to group statements together



before executing them. It allows us to put statements on multiple lines



which is more natural and readable. We can execute the group of statements as a whole,



which more closely resembles running code in Java. Although putting multiple statements on a single



line is allowed in Java, it's not considered best practice for readability of code. I also



want you to get used to writing system dot out dot print statements to view the output,



because the way that JShell echos output automatically,



does not usually happen when working outside of JShell with tools like IntelliJ.



Another important restriction, when putting coding statements in the curly braces,



is that we're required to include the semi-colon. This will help you get back into the habit of



ending every statement with a semi-colon, in case you've not been doing that in JShell.



So let's do that. We'll start with a couple of simple statements:



We start a group of statements with a left curly brace. I'll then press enter.



We declare result to be an int and set it to 1. I'll increment result by one, by typing, result,



equals, result, plus 1. I'll print the result out.



Finally, we execute the statements above, by adding the closing right curly brace



and pressing enter. Ok, so once again,



there shouldn't be any surprises here. I'll press up-arrow key, and we'll see all the



statements that we typed in the group. Note that by doing this, we can edit any line in this group.



But first, let's talk about these statements. The variable result started out with a value



of 1. We used an expression on the next line, adding 1 to the value in result,



and re-assigning this new value to result. This is a very common way to increment a variable.



Incrementing by one is a very common requirement in programming.



Obviously, we can do the following: result = result + 1;



But we also have two other shorthand ways to do this same thing.



The post-fix increment operator is represented by plus plus after



the variable name. This is a stand-alone statement and does not require an assignment.



The compound assignment operator is represented by plus equals one after the variable name. This



is also a stand-alone statement but includes the assignment. Let's see how this works in JShell.



So now, while I am in edit mode, I can use the arrow keys to move to the line



that contains result, equals result, plus 1, and change it to result plus plus:



result, plus plus, semi-colon. We get the same result, result = 2.



Using this abbreviating operator known in Java as the postfix increment operator, gives us the same



thing as result, equals, result plus one. There is another abbreviating operator for



decrementing a variable by one. This one is called the postfix decrement operator



and looks the same as the increment operator, except it uses minus signs and not plus signs.



Decrementing by one is also very common. We can decrement simply by using the equation:



result, equals, result, minus one, semi-colon. But we also have two other shorthand ways



to do this same thing. The post-fix decrement



operator is represented by minus minus after the variable name. This is a stand-alone statement



and does not require an assignment. The compound assignment operator is



represented by minus equals one after the variable name. This is also a stand-alone



statement but does include the assignment. Let's use the post-fix decrement operator.



To use it, I will again use the up arrow key to retrieve our last set of statements, and



I'll change the plus plus symbols after result to minus minus on the second statement and hit enter.



Since we are now decrementing, it should come as no surprise the result is zero.



So, we've tried out the postfix increment and decrement operators, which allowed us to change a



variable either by adding or subtracting by one. You'll have noticed from the slides that



another way was presented, and this was called a "compound assignment" operator.



We want to press the up arrow so we can continue to edit the statements we've



been using. In this instance, we want to replace result minus minus, with result minus equals one.



This one might look a little weird at first, but it's just a shorthand or abbreviated way



of writing result equals result minus one. You'll find that you'll get used



to these shorthand operators, and we'll be using them quite often in this course.



You can use the compound assignment operator for addition as well. I'll do that next and go through



the same process. I'll press the up arrow key in JShell, and then while we are in the edit mode,



we'll replace minus equals with plus equals in the second statement.



Because we are using addition, this statement `result, plus, equals,



one` has the same behavior as result equals result plus one, and the final is that result equals two.



Unlike the increment and decrement operators, you can use the compound assignment to do more



than increment or decrement by just 1. So, let's increment by 5 next.



I'll press the up arrow, and once again change the second statement, changing 'result, plus minus,



equals one' to 'result, plus equals five'. Now, result equals six because we added five to



the result instead of just adding one as before. We can decrement by any number we want as well.



Let's make this a little more interesting by giving you a challenge.



Using the code we have been using, either by scrolling up and editing the group



of statements or creating a new group. Initialize an int variable, named result,



to the value of 10 rather than 1. Next, use the compound assignment operator,



with the minus sign to subtract a number from result, using a value of your choice. Print the



result out using the System.out.print statement. Pause the video now and give that a try on your



own. When you're done, start the video again, and I'll see you when you get back.



Welcome back again. Were you able to successfully subtract a number from result? And if you were



successful, did you use the compound assignment operator with the minus sign?



Let's just walk through that together. In JShell, I am going to hit the up arrow.



The first thing I'll do is change result equals one to result equals ten in our first statement.



In the second statement, I'll subtract 7 from the result using the compound operator.



Remember this is just shorthand for setting the value of result, to result, minus seven.



This should give us result equals 3. So that's how you would use the minus compound operator,



subtracting an integer value from result. But maybe you were a little more adventurous



in your own code. Maybe you decided to subtract a decimal number from result.



Let's do that for a bit of fun next: Again, hit the up arrow and edit the



second statement. I'll change the value from 7 to 5 point 5.



What do you think the final result will be? Will this give us an error or give us the result;



4 point 5? What do you think? Ok, so let's hit enter.



So the result equals 4. Was that a surprise? I think it might have



been since it still kind of surprises me. Although I've said that this should be the



same as the statement, result, equals result, minus 5.5, actually, it isn't 100 percent true



when you are using incompatible data types. When result is an int, the compound



operator assignment result, minus equals, 5.5



gives us a different result from what we expected, which was



result, equals, result, minus 5.5 In fact, the compound operator hides



a potential error; the lossy conversion error we've seen several times.



Let's examine what I've just said, in code in JShell, so you have a better understanding.



Let's hit the up arrow to get into edit mode for this group of statements, then I'll change that



second line to what is generally assumed to be its replacement, result, equals result, minus 5.5.



Executing this code gives us the error, possible lossy conversion from double to



int. Maybe this is what you thought the compound minus operator would have given us but didn't.



Let's hit the up arrow again, and add a cast, but also use parentheses.



I'll add the cast to an int, but because I need to cast the entire result,



I'll enclose it in parentheses as well. What would've happened if I didn't put



parentheses around the equation? Well, think about that for a minute. Java would have assumed we were



only casting the variable 'result' to an int, and we still would have got the same possible



lossy conversion error. So now I'll press Enter.



And here our result is 4 again, as it was when we first used the compound minus operator.



The compound assignment operator X, minus equals, Y.



is often said to be X, equals, X, minus, Y.



but that's not entirely true if y is not the same data type as x.



X minus equals Y. is really



X, equals, left parentheses, data type of X, right parentheses and X minus Y in parentheses.



An implicit cast is done when using this operator, so no error occurs, but unexpected



results may happen, as we have seen. So, summarizing for our own sample of code:



result, minus equals, 5.5. is really



result, equals, int in parentheses, result, minus, 5.5, in parentheses.



That might be a lot to take in right now, but what I really wanted to do with this



example is encourage you to experiment. Never take a simple code segment for granted. Even



something as simple as this challenge can be explored, changed, and re-tested, and can



enhance your understanding of the Java language. So, how do we actually get the result to be 4.5



using the compound minus operator, if that's what we really wanted? Let's make another



change. Again, we arrow up, and this time, change the data type for the variable 'result' from an



'int' to a 'double' in the first statement: I'll move down to the next line and change it



to be a compound minus operator. And now, our result equals 4.5.



Since our variable is now the same data type as the value being subtracted, using the compound



assignment operator, we don't require any implicit casting, and the result is what you'd expect.



Ok, so that was your challenge. I hope you found that interesting and a bit surprising.



Finally, we have two more compound assignment operators to get through,



for multiplication and division. So, let's do that real quick for the sake of completeness.



I'll use the up arrow and change the second statement from result minus equals 5 point 5 to



result times equals 1 point 5. Make sure the variable result is defined with a type of double,



as you saw me do a moment ago. And now the result equals



15 point zero which is 10 times 1 point 5. And finally, for division, going through the



same process, I'll use the up arrow and change the second statement from times equals 1 point 5,



let's change that to divided equals 1 point 5. Remember, this operator generally means the same



thing as result equals result, divided by 1 point 5 when data types are compatible.



The result is six point six, six, which is a repeating decimal.



All right, so let's finish the video here. In this video, we've covered several different



types of abbreviating or shorthand operators. The abbreviating operators we've



discussed so far are: The post-fix increment,



the post-fix decrement, the addition compound assignment, the subtraction compound assignment,



the multiplication compound assignment and the division compound assignment operators.



There are others, but these are generally the ones most commonly used.



We'll be revisiting the increment and decrement operators again in more detail



since these are used quite often to facilitate looping. You'll find out about looping,



as well as a few additional shorthand operators, as the course progresses.



This is the end of the section. In the next section, we will move to the code editor I've



mentioned a few times, IntelliJ, and you will start seeing the benefits of using a fully



integrated development environment. So I'll see you in the next section.


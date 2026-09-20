**Exploring The Traditional And Enhanced Switch Statements**



I've created a new project named switch with a main class and main method.



Inside the main method, I've declared an int, value and added a complete "if",



"else if", and "else" statement. As you can see, it's very simple.



If you need some time, pause the video and set up the new project, main class, and main method.



If you want to, you can add this code on screen,



but you won't need it after I'm done talking about it.



So, you see, that's a simple example there, and if I run that,



in this case, I should get the value was 1. And I can change value to a 2 and run it again:



I get the "Value was 2" printed, as you can see there.



And finally, when I assign the value 3 to value. I get, "Was not 1 or 2" printed.



Nothing particularly unique or interesting so far. You could imagine that this would get messy,



if we had a large number of values to test and perform different code for based on that value.



Java provides another mechanism called the switch statement that lets us test if a variable matches



a particular value and will then execute one or more lines of code if the check is true.



The switch statement has gone through many enhancements since Java 8, but we'll be looking



at the traditional switch statement to start. As you can see on the slide, the syntax



for the switch statement is quite a bit different than it is for the "if" statement.



I start with the keyword "switch". That's followed with the value I want to check,



in parentheses, followed by the opening curly brace, which starts the switch code block.



And eventually, the corresponding closing curly brace.



Within the curly braces, there are some new keywords you haven't seen before.



These are case, break, and default. The case keyword, as shown here,



is used with the switch statement for comparison. As shown on the slide, switch value, case X,



essentially means, in the case that value equals X, execute this code.



If it doesn't, then move on to check the next case.



The break keyword is used to terminate the code on that line and not perform any further checks.



It's technically optional, and I'll talk about it more shortly.



As you can probably guess, the default keyword means if none



of the above cases were true, execute this code. So, let's go back to IntelliJ and talk more about



the switch statement, and see it in operation. Let's do something equivalent to what I've done



with the if and else statements but using the switch statement.



First, I'm going to comment out the if statement. Ok, now let's add the switch statement.



I'll start with an int variable, named switch value and set it to one to start with.



This is the variable I'm going to be testing, similar to the way I tested



value in the if else statement I commented out. I'll start the switch statement by typing,



switch, left parentheses, switch value, right parentheses, left curly brace. The first test



is done by typing, case one, colon. And if we have found the value 1, then I'll print some



text to confirm that. I'll add break. and right curly brace to close off the switch



statement. I'll add a comment, more code here. The switch statement starts with the keyword



switch, followed by the value you want to test in parentheses.



In my case, I'm testing the variable switchValue. Then I start the switch code block



using the opening curly brace. The next line is the keyword case,



and that's followed by the value I want to test the switchValue against, in this case, 1.



And that is then finished with a colon, not a semi-colon.



Below that is the code that I want to execute. Here I've added a simple print statement.



Finally, I end the case with the keyword break. And break tells Java, "Ok, I found a true case,



I've executed the code for that case and now I want to leave the switch block



completely and go on to the next lines of code." So, here, it will execute the print, and then



move on to line 21 where I have that comment, more code here, which is just a reference.



And this is equivalent to doing something like, if switchValue equals equals one.



So, let's run this to make sure it's working like we think.



And there, we see our print out, "Value was 1", just as we expected.



Now, I can use multiple cases, so let's put another case label in there, this time case 2:



case two, colon. and I'll print some some text to indicate this value. break.



And then, as I discussed during the slide, I can add a default case as well, so let's do that:



default, colon. And I'll add another println to indicate this section of code was reached. break.



So now, what I've got is my first case, followed by my second case, case 2, which is basically the



same as, "else if", switchValue equals 2. And then my print statement,



followed again by a break. Because of course, if I match the second



case, I also want to terminate the switch block. And then lastly, I have the default case which



is equivalent to the else statement because it will execute for all other conditions.



And I end that with a print statement and the final break.



So, that's the switch statement which emulates what I did with the if else statements.



So, we know it's working for case 1, let's change this, and check for case 2,



so switch value equals 2, and run it again: So, I now get printed out, "Value was 2".



Let's do one last run and change switch value to 3:



That's good, I get, "Was not 1 or 2". So, that's a switch statement.



Now, it's often a matter of style to choose between the "if" statement or



the switch statement because both really achieve the same thing.



You can see that I used if value is equal to 1, it's equivalent to



using a switch statement and entering case 1. The if statement is a little bit more flexible,



in that each time I do a test here, I don't have to use the same test criteria.



So, I could put if value is equal to 1 or else if cat is equal to 4.



In other words, I can test a different variable altogether.



For the switch statement, I'm testing only the switchValue here.



And I'm testing different values for that switch value.



So, a switch is good to use if we're actually testing the same variable, and we want to test



different values for that variable. Now, you can see that there would be



situations where if you had 20 values to test for, this could get a little bit tedious.



But there's actually a shortcut, so let's look at that now:



case three, colon, case four, colon, case five, colon. And I'll print a message to indicate it



was a 3, a 4, or a 5. And I'll print out what it was specifically. And add the usual break.



I'll change the default message to be valid based on my changes above.



So, what I'm doing here on line 23 is I'm testing for multiple cases; I'm testing for 3, or 4, or 5.



And if any of those are true, then I'll execute those two print statements,



and then break out of the switch. I also updated the default case output



to reflect that if it gets to that point, then it's not a number between 1 and 5 because those



cases were already covered. Let's run this again.



So, I've assigned three to the value of switch value.



Previously, I got, "was not one or two", but now, it doesn't hit the default case



because I've added additional cases here, including this one for number 3.



So, the results are "was a three, a four, or a five".



And then it printed out the value with the output there, outputting, "actually it was a 3".



You could keep extending that so you could have more case labels here on line



23 for case 6, 7, and so on. The important thing is here,



is that I'm grouping my case tests together in the one line effectively,



which makes it a lot easier to group values that will have the same behavior.



So, another important thing to know about the switch statement is that it can only be used with



a limited number of variable data types. So, you can see this is a limited list.



We can only use half of the primitives, byte, short, int,



and char, and their corresponding wrappers. We can use strings and a type called enum,



which we'll be reviewing in the next section when we get to object-oriented programming concepts.



But, importantly, note that the primitive types of boolean, long, float, and double cannot be used.



They'll result in an error in your code if you try to use them.



And finally, before I end this video, I want to quickly talk about a concept that applies



to the switch statement, called fall through. Once a switch case label matches the switch



variable, no more cases are checked. Any code after the case label where



there was a match found will be executed until a break statement



or the end of the switch statement occurs. Without a break statement, execution will continue



to fall through any case-labels declared below the matching one and execute each case's code.



Let's swing back to IntelliJ and take a look at an example in code.



It's important to know that if you don't have a break, you may get unexpected results.



Now, just to show what will happen, let's comment out that break here on line 26.



Now, let's run it and see what happens. Can you see what's happened there?



The results are the two strings, “was a three, a four, or a five”, and “actually it was a 3”



that I got before, but now, I also have this last line printed, "was not 1, 2, 3, 4, or 5",



which is listed under the default label. So, why did that happen?



Well, the reason it happened is I've commented out this break statement on line 26.



So, what happened is, the processing got to here. And because the switch value was set to 3,



it executed lines 24 and 25. But then, there wasn't a break statement,



so it continued on to this line here. And because the switch has matched a case,



it stops checking any remaining cases if there are any and will continue executing code until



it finds a break, or the end of the switch block. And here eventually, it did find a break to get



out of the code on line 29. Usually, but not always,



you will want to put a break on the last line of the code for a given case to avoid this happening.



Let's just change that back to the original code. Ok, so I'll end this part of the



introduction of the switch statement here. In the next video, we'll take a look at some



of the new features of the switch statement. So, I'll see you in that next video.







**Delving Deeper Into Advanced Switch Statement Features**



In the last video, we looked at the switch statement, and how we can use it,



instead of an if statement, if all our test conditions are testing a single variable's state.



The switch statement has seen quite a few updates through the years.



So, in this video, I'm going to explore some of the new features of the switch statement.



I'll be looking at a couple of these now, and reviewing others a bit later in the course,



that require some knowledge of classes and object-oriented programming.



So, getting back to the code, some of you may have noticed already that IntelliJ's



been trying to get our attention. The switch keyword is highlighted.



If I hover my mouse over that, IntelliJ tells me, I can replace the switch statement with



the enhanced switch. So, let's do it.



Let's select "replace with enhanced switch statement" and see what happens:



So, IntelliJ has transformed the switch statement. Let's look at these statements side by side.



So, in the previous video, I introduced you to the switch statement, and the syntax



that's been used since Java's beginnings. This is shown on the left side of this slide.



The switch statment has been enhanced over time, in new versions of the JDK.



One example is on the right-hand side of this slide. For backwards compatibility, the older



version we have just worked with, and shown on the left-hand side continues to work as well.



When we compare these two statements, the first thing we notice is, that the



colon after each case label has been replaced with the arrow token as shown here. The arrow



token is the dash and greater than sign. Arrow token is a term that applies also



to Lambda expressions in Java, something we will be looking at much later in the course.



Its more correct when using the arrow token in a switch statement to refer to it as the switch



expresson arrow. So, I'll be calling it that moving forward, when using switch statements.



There are no breaks in the enhanced switch statement,



the enhanced statement doesn't require them. Fall through, which we examined at the end



of the last video, never occurs in the enhanced switch statement.



Also, notice that it's replaced the multiple case labels we had, case 3, case 4, and case 5,



with a comma delimited list of the values. Maybe you'll agree with me that this new switch



code is easier to read and much more succinct. And for beginners, it comes with more controls



in place to prevent coding errors. You'll see the traditional switch



statement in code written before Java 14, so this is a fairly new feature in Java.



For this reason, it's important to be familiar with both versions.



Which one you use is really dependent on your development and production environments.



If your code needs to be backwards compatible to earlier versions of Java,



then stick to the traditional switch. Ok, so let's get back to the code.



I'll first walk through the traditional way a switch case statement could be used in an



expression, and then the enhanced switch way. Prior to the enhanced statement, if you wanted



the switch statement to return a value, you wrapped it in a method that returned the value.



So, let's do that. The first thing I'll do is



make a new method that takes a string as its single parameter, and also returns a string.



So down below the end of my main method but still inside my class block, let's do that:



public, static, string, and I'll call the method, get quarter, and the parameter name



will be month. Then a curly brace. and finally, a right curly brace to close the method definition.



Alright, so there I have a new method, get quarter, taking a single string parameter



called month, and returns a string value. The idea is that this method will receive



a month of the year, and then it should return a string representing



what quarter of the year that month is in. And I can use a switch statement to do that,



and I can do it in a few ways, but let's look at the traditional way first.



I'm going to type this code in, then I'll talk about it afterwards:



switch, left parentheses, month, right parentheses,



left curly brace. case, January in double quotes and a colon. And I'll add the February,



and March as well. return, first in double quotes. continuing on, I'll do April,



May and June. And I'll return second as a string here. July, August and September are next. I'll



return third here. The last three months now. and I'll return fourth. a right curly



brace to close the switch. If code execution gets to here, I'll return the string, bad.



So, what I've done here is use a fairly simple switch statement.



Now, instead of using a primitive type like I've done before, I'm using a



string for our switch and case values. I said in the last video that string



was one of the few data types you can use with the switch statement.



You may remember the list of data types that can be used consisted of numeric whole



primitive types, int and the smaller types. Namely, short and byte, as well as char.



String is also supported as you can see in what I've typed.



I've surrounded my test values in double quotes, indicating these are string values.



What's really different here, is that I'm not using a break,



but instead I'm using a return statement. This works like a break since the



code will exit out of both the switch statement and the method at this point.



There's no chance to fall through to any other code in the switch statment, or method.



I also don't need a default label in this instance, since if the month isn't found,



the code will just fall through to the last statement on line 49.



If I get the string, bad back from this method, it means the month wasn't valid.



You may remember, we can use method results anywhere an expression is used.



So, let's go up to the main method, and call the get quarter method.



I'll delete this comment on line 25, and add some space, and I'll print the month and quarter out:



I'll create a string called month and assign it the text, April, in uppercase. I'll print



out the month, and what quarter it is in, by calling the get quarter method.



You can see I'm making a call to get quarter directly in the println statement.



Okay, so let's run that. And there I have, "april is in the



2nd quarter", is being printed there. Of course, I'm still getting



this other stuff printed too. Next, I can do a test for October.



I'll change the month variable to October. And we'll run that again.



And here I get, "October is in the 4th quarter". But the enhanced switch case



statement gives us another option. First, let's change the case statement



in the get quarter method to an enhanced switch. I'll do what I did before, hovering over the



switch keyword and selecting the option to "replace with switch expression".



So, you can see, this did a similar transformation of my code, but there's



one interesting difference. Notice that this code has



the return keyword before the switch keyword. This enhancement was previewed in JDK 12 and 13,



experiencing improvements due to the previews, and became standard in JDK 14, so it's pretty new.



So, what's subtle here, but very important, is that this switch statement is really an



expression, meaning it resolves to a single value and can be assigned to a variable,



or in this example, returned from the method. Let's consider this code side by side.



There are some important differences. Firstly, on the left-hand side of the slide,



we have the switch statement code we started with. On the right-hand side of the slide, you can see



that the multiple case keywords have been replaced with a comma delimited list, and the colon is



replaced with a switch expression arrow, so this looks a lot like the enhanced switch statement.



But look at the right side of the switch expression arrow, it's just a string literal.



This isn't a statement at all. This code only compiles because I'm using it



as an expression, meaning I'm using the result. In this case, I'm simply returning the result



coming back from the switch statement, but I could just as easily have assigned



it to a local variable. The other important



difference is this default label. When the enhanced switch is an expression,



meaning it returns a value, then a default label is required under most conditions.



I'll be talking about the exception to this rule later when we use the switch with the



last special type it supports, the enum. But in all other cases, default is required



when the statement is used as an expression. So, let's test these statements out in code.



First, let's rerun my code with this newly formatted method.



And no surprise, it works as before. What happens if I leave out the default case?



Let's comment that out. IntelliJ doesn't give



us a warning, but if I try to run that. I get an exception, "the switch expression



does not cover all possible input values". So, you should always include a default



label in the switch expression. In truth, it's usually a good idea,



under almost all circumstances, to include a default case label.



Let's revert that change. Ok, so what happens if I want to do something



in a specific case, before returning the value? Well, to do that I'll need to create



a code block, so let's do that. default, a dash and a greater than sign,



which is the switch expression arrow, and a left curly brace. I'll create a string



called bad response, and make that equal to the month, and append a space and is bad in



double quotes to it. return, bad response. right curly brace to close this default block of code.



This code tries to return a string formed using the data that was passed



to the method and the string, "is bad". But IntelliJ is flagging that line,



return bad response, as an error, return outside of enclosing switch expression.



That's kind of hard to understand, but the fact is that if you're going to use a code block like this



in a switch expression, we need a new keyword. I need to use yield and not return, so let's



change our code and see if that works: yield, bad response.



The word yield is a new keyword introduced for the switch expression to return a value back.



And now IntelliJ seems happy, so let's run that.



And I get the same result because I'm still using "October", but let's change it to "XYZ".



I do that in the main method: And running that.



So. that's not really pretty output, or even proper english,



but you can get the idea here that if you're doing additional code in the case branch, you



need to use a code block and the yield keyword. Yield is only required under certain conditions.



Your switch statement is being used as a switch expression returning a value.



Your case label uses a code block, with opening and closing curly braces.



What happens if I just put it here before "1st" on line 33:



switch expression arrow yield, and the text first. You'll notice this doesn't actually work.



IntelliJ is saying, it cannot resolve this symbol. The yield statement has to be in a code block,



so let's add the curly braces around this yield statement.



I have to put the opening curly brace after the switch expression arrow,



and the closing curly brace after the semi-colon. left curly brace, yield, and the text first,



a semi-colon then the right curly brace So, now this compiles and works.



Generally, if all you're doing is returning the value from one of your cases,



you'll just put the value that's returned like we're doing on lines 34, 35, and 36.



But if you're making calculations or doing some other work, you can use a code block,



but you're then required to use yield before you return the value back.



Ok, so that was a lot to take in, I know. But I thought it was important to show



you all of these enhancements that have been occurring with the switch.



If you're like me, you might prefer the enhanced version to the traditional one.



It takes away the need to add breaks, and has more checks in place, and it's easier to read.



But at the time of this recording, the traditional switch is the one



you'll probably be using predominantly until companies move code to newer versions of Java,



which is usually a slow process. In 2024, I know companies that are still using Java



8 for their main codebases. Many have upgraded, but its likely many are one or two LTS versions



behing the current LTS version of Java. I'll be revisiting the switch statement,



including additional switch syntax and features, as the course progresses.



In the next couple of videos, I want to give you a couple of switch challenges,



so you can practice some of the things you've learned so far, so I'll see you in those videos.


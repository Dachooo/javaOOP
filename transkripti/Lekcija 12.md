**Exploring Java Keywords And Understanding Expressions**



In this video, I'm going to talk more about keywords, and also just



elaborate further on expressions. Firstly, with the keywords.



Java has 51 reserved words that are used for keywords in your applications.



What I'm looking at on this browser page is a link to the java language



specification on keywords, and the link is in the resources section of this video.



And here is a list of all 51 Java keywords. Boolean is one, double is another,



and also float, but don't worry, you don't need to memorize any of these



because we're going to go through each and every one of these in the course.



You can see that Java actually uses the terminology character sequences to



describe these. This is because as of Java 9, the underscore by itself is a keyword.



In addition to reserved keywords, you'll see that as of JDK 17, Java has 16 contextual keywords,



which are only keywords in special situations. More on this as we proceed through the course.



Let's swing back to IntelliJ and talk more about keywords.



Since we are in a new section of the course, I'll create a new project



and call it keywords and expressions. I'll walk you through the process of



creating a new project one more time, and after that, the videos will just



specify when a new project has been created. At the "welcome to IntelliJ idea" screen,



I'll select "new project". I'll give it the name of keywords and expressions,



using upper camel case, or Pascal case, for reasons I've previously covered.



I'll select "Java" as the language and accept all the other defaults.



Finally, I'll click the create button, and we're in the new project.



Next, I'll create a new class called main by clicking on the "SRC" folder, and select "new



class", then giving it the name of "main". As you can see, the code for the main



class is showing in the editor window. I'll also add the main method as I've done before:



Eventually I'll start using the P S V M shortcut in IntelliJ to create this automatically.



And you can see IntelliJ is actually highlighting keywords in blue.



Anything in blue that's in the IntelliJ editor is confirming to you that it is a reserved word.



I can't create a variable name using any of the reserved keywords.



For example, if I move our cursor to line 4 and type in the following code:



int, int, equals, five. IntelliJ is telling us



that something is wrong with the red underscores. And if I hover over one of them,



IntelliJ's message is "identifier expected". And that's because as far as IntelliJ's concerned,



the text "int" is a reserved word and it's actually a data type. So,



it can't be used as a variable name. I could use int two instead as the



variable name, and I'll do that next, just tack on the number 2 to our variable name:



And that's valid because the variable name now only partially comprises a reserved



keyword. This is fine to do, but as you saw previously, you can't name a variable



exactly as a reserved keyword. In fact, you can't name a Java



identifier as a reserved keyword. An identifier includes variable names,



but also class names, method names, and so on. Anytime you get weird errors like you saw



earlier in this video, make sure that you're not using a reserved keyword as the name.



There are some words that aren't officially keywords but are specified



below these two categories shown here: True and false aren't officially keywords



but instead are boolean literal values, they cannot be used to name identifiers in



Java. Null is another that can't be used, but more on that when we get to classes.



By the time we've finished with this course, we'll have gone through all of these keywords,



and you will have developed a solid understanding of what each is, and how to use them in code.



Writing code is similar to writing a document. It consists of special hierarchical units,



which together, form a whole. These are:



The Expression – An expression computes to a single value.



The Statement – Statements are stand alone units of work.



And Code Blocks – A code block is a set of zero, one, or more statements, usually grouped



together in some way to achieve a single goal. I've talked about expressions in the past,



but I want to expand on them further. Expressions are used frequently, and



are built using values, variables, and operators. Let's add some code to our main method, but first



I'll delete that first variable I created. I'll create a variable of type double,



called kilometers, and make it equal to one hundred times, one point six zero nine,



three four four, in parentheses. So here, I'm creating an expression



to convert miles into kilometers. In this code, we want to figure out



what 100 miles are converted to kilometers. This entire line of code is a valid statement.



For this line of code, the actual expression is this component of the entire line.



The data type does not form part of an expression, nor does the semi-colon,



but everything else on the line typically forms or is part of the expression.



The expression component can include variables, values, and operators.



All of those are used in this example. We've got a variable kilometers,



and we've got values like 100. And of course, we are using the "equal to",



and multiplication operators. So that's an expression;



this component of the line. By including the datatype



and ending with a semi-colon, we've now created a valid Java statement.



Let's look at some more examples of expressions. I'll create a variable of type int, calling it



high score, and assign it the value 50. if, left parentheses, high score, greater than,



twenty-five, right parentheses, left curly brace. I'll set high score,



to one thousand plus high score and add a comment about bonus points. right curly brace.



Looking at this segment of code, we can identify four expressions.



This part of the declaration statement, high score, equals, fifty, is an expression.



In the if clause, the component in parentheses is the expression,



high score, greater than, twenty-five. But the if keyword itself, the parentheses,



and code block are not part of the expression. They are part



of the if statement, or conditional statement. Looking at the calculation in the if statement



code block, there are actually two expressions. The calculation itself, one thousand plus



high score, is one expression. Second, the entire line, excluding



the semi-colon is an expression too. In the examples I've shown here,



you can see that expressions make up almost the entirety of each statement.



I'll add a bit more code, starting after that code block for the if statement.



I'll keep going with our game theme and add a variable for health.



Then depending on the health and the high score, I'll execute some code.



So let me type that in now: int data type, and health as the name, and



an initial value of 100. if, two left parentheses, health, less than, twenty-five, right parentheses,



\&amp;and, left parentheses, high score, greater than, one thousand, two right parentheses,



left curly brace. high score, equals, high score, minus, one thousand. right curly brace.



And now, I want to give you a challenge, based on this code.



Looking at the code below, what parts are expressions?



Have a look at the code that you can see on the screen.



Write down what components of the lines I've entered there, are expressions.



And come back and check your results after you've had a go at it.



So, how did you get on? Were you able to figure that out? How many expressions did you count?



Let's go through this together and talk this through.



On the first line, the health equals a hundred component is the expression.



Remember that a data type and also the semicolon to the end are not part of the expression.



In the second example, in the if statement, we have multiple expressions in parentheses.



First, we've got health, less than, twenty-five. And then we've also got



high score, greater than, one thousand. Hopefully you will remember that the



parentheses, in this case, aren't part of either one of those expressions.



But the next expression is everything in the outer parentheses, which you'll remember is



using the logical and operator to evaluate two expressions and then returning a boolean value.



This is also an expression. And finally, we've got the code



in the if statement block. This is similar to before



and includes two expressions. The first is the calculation high score, minus,



one thousand. The other is the assignment which is everything except that semi-colon: high score,



equals, high score, minus, one thousand. So, that gives us six expressions



in total in this code. So, did you manage to find them all?



Congratulations if you did. So that's expressions,



and you'll be seeing expressions and keywords in use a lot more in future videos.



Speaking of videos, int he next one, I'll look at statements more closely, and then talk about what



whitespace is, and the use of indenting. So, I'll see you in that video.









**Mastering Java Statements, Whitespace, And Code Organization**



In the previous video, we discussed keywords and expressions.



In this video, I'm going to talk about statements, whitespace, and indenting.



What they are, and why they're important in Java. I've created a new project in IntelliJ called



statements, white space, and indenting, and I created a new class named main.



I also added the main method. In this and future videos,



I'm going to assume you've done this and can get this set up on your own.



If you're struggling, make sure you go back earlier videos where I show how to do it.



I want to start off and just enter a simple declaration of a variable,



inside the main method on line 4: int, my variable, and I'll set it to the value 50.



If you recall from the previous video when I discussed expressions, you know that the part of



the line my variable equals 50 is the expression. So what is a statement?



Well, a statement is the entire line. So the entire line that reads, int,



my variable, equals, fifty, semi-colon. This is the statement, the complete line if you will.



In this case, by adding the data type at the start to our expression, and then finishing off with a



semicolon, we've created a valid Java statement. Java statements can be assignment expressions,



like the one there, where we're assigning the value 50 to the variable my variable.



We can also do something like this: my variable, plus plus my variable, minus minus



So those two lines of code we've added are both complete statements.



The semi-colon actually makes each of these a statement.



Without the semi-colon, my variable plus plus for example is really an expression.



But also, if we now add a println statement, including the semi-colon, that's also a statement:



I'll print this is a test. A semi-colon is needed to complete



a Java line to make it a statement, in most cases, but there are exceptions to this. As we



go through this video, I'll talk more about those. The other thing to keep in mind with statements



is that they don't have to be on the one line: We can start a print statement and put a plus



sign at the end, and then add another part to the statement,



and then still more and end the statement So looking at that first part of



the println, there's no semicolon. This means the statement hasn't ended,



and somewhat similar to what we saw in JShell, we can continue on the next line here in IntelliJ.



We can continue to add parts of the statement on different lines, and then end with that



final semi-colon after "still more". What it does is, collectively add all



of these lines together, and effectively creates this line which I'll change.



As far as Java is concerned, whether the parts of the statement are on one line,



or multiple lines, it has the same meaning, and is interpreted as a single line of code.



It's often it's a good idea to break up parts of your statement,



so it's more readable for you and other people. From Java's perspective, it doesn't care if it's



on one line, or on many lines, provided you're not trying to end the lines.



What I mean is, if you try to put a semicolon here,



Java's going to get into difficulty because it's now saying, well, there's no parentheses there.



And it's expecting parentheses because we put a semi-colon there, which is acting



as a terminator to close off the line. I'll get rid of that semi-colon again,



and put the plus sign back: And if I run that:



We've got the answer there, so it's working fine. You've already seen multiple statements on a



single line in JShell, and we can have them in IntelliJ as well.



Let's add three statements on the one line. int another variable with the value 50,



my variable, minus, minus, and I'll use println to print it out.



As far as Java's concerned, that is still valid because it's found the semi-colon



between the statements, the separator. While this is perfectly valid in Java,



let me recommend against doing this in general, since it can be confusing to readers of your code



(including yourself), bunching up lines like this. Looking at the code, a reader might overlook



statements, because it takes a little bit extra effort to read that line compared to breaking



it into three lines. In general, you want to make it very clear what your code is doing, and



formatting your code is one way to help with that. Putting one statement per line or breaking up a



long statement across multiple lines are ways to make code more readable.



And this brings up the concept of whitespace. What is whitespace?



Whitespace is any extra spacing, horizontally or vertically, placed around Java source code. It's



usually added for human readability purposes. In Java, all these extra spaces are ignored.



So Java treats code like this: The same as code like this:



Obviously, in the second case, it's a lot easier to read for us mere mortals,



which is why whitespace is recommended. So let's add some whitespace:



Whether we have 1 space, or whether we have 10 spaces, Java doesn't care,



and will simply ignore whitespace here. We can even go to the extreme,



with something like the following: Thi is certainly not the way that



I'd recommend you code, I'd argue that too much whitespace, as I've used here has not



helped with the readability of that statement. But if we run that, Java's quite happy with what



I've typed, because internally it's deleting the whitespace before processing the code.



And as far as Java is concerned, it's going to be exactly the same internally as this.



So in general, with whitespace, you can add as little or as much as you want.



Java will ignore the white space and work quite happily.



This feels like a good time to point out that style guides exist for writing readable code,



and one of these is Google's Java conventions which I'll show here, going straight to their



recommendations for whitespace. You can see there are rules for



vertical whitespace and horizontal whitespace. For example, here's one on variable declarations.



A blank line between two consecutive fields (having no other code between them) is optional.



Such blank lines are used as needed to create logical groupings of fields.



This is saying, in general, when you're declaring a set of variables,



you wouldn't normally include an extra empty line between them, but if you wanted to group



your variables in some way, an additional line of whitespace might make a grouping clearer.



I'll be coming back to this document as we progress through the Java language. IntelliJ



is configured with many Java conventions for whitespace and other coding standards, built in.



Let's head back to the code now. Note that with this code,



we don't get any warnings or errors, so it's a perfectly valid line of code.



But IntelliJ has a little feature to reformat code, so I'm going to highlight that line of code,



go up to the "code" menu bar item, find "reformat code", and select it.



IntelliJ formated our code for us. It put each statement on a separate line,



and notice also, the first line, int another variable equals fifty,



it added spaces around the equals sign. So IntelliJ can be used to help you



comply with general best practices when using whitespace in code.



You'll probably be using that IntelliJ feature quite a bit.



Next, let's explore the concept of indentation which can also help your code to be more readable.



So, looking at a worst-case scenario: If we went back and changed this code



and removed all the default indentation. I'll do this by highlighting the code and



using the "shift tab" keycode combination several times until we've removed all leading indentation.



And I think you'll agree if you look at the code now, its much harder to read and understand.



You can use the tab key for selected sections you want to indent, or again, we can just select



the entire code portion, and use the code menu and reformat code option,



to get the code back to proper indentation. And this code is a lot more readable.



IntelliJ will automatically indent for us as we start code blocks at different levels in our



code. You've seen this so far in the course. The concept of indenting makes it easier



for us to see the logical flow of our code. I'll add an if statement, so you can see that.



if, left parentheses, my variable, ==, zero, right parentheses, left curly brace.



And now you can see when I press Enter, the cursor is waiting for me to enter code, already



indented appropriately for this code block. And I'll add some code, properly indented now:



I'll print out it's now zero. right curly brace. Code conventions for whitespace do exist,



which you can refer to for more detail. The Google Java Style Guide which was



seen previously in this course has a section on whitespace, so refer to that for more information,



and the link to that is again in the resources section of this video.



So that's statements, whitespace, and indentation. In the next video, I'm going to



talk about code blocks. I've mentioned them a few times,



but let's look at them in detail, next. I'll talk about what they are,



and why they're so useful when coding in Java. See you in the next video.










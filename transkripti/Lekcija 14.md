**Deep Overview Of Methods In Java For Reusable Code**



In the previous video, I talked about the if keyword and then



went into more detail about the code block. I also talked about some of the issues with



code blocks, and duplication of code, when we went through the challenge.



What I'm going to do in this video is talk about methods, which is a better way of



ensuring that our code isn't duplicated, and also makes our code a lot easier to maintain.



Methods in Java give us a way to write code once and then reuse that code anywhere in our program.



So let's take a look at a more formal definition. Java's description of the method is:



A method declares executable code that can be invoked, passing a



fixed number of values as arguments. In this course, I'll use the terms



invoke a method and call a method interchangeably, to describe the process of executing method code.



And as I briefly touched on, methods have some benefits:



A method is a way of reducing code duplication.



A method can be executed many times with potentially different results, by passing



data to the method in the form of arguments. Let's look at an example of code duplication.



In the last video, we walked through the solution to a challenge together.



Let's revisit that code now, in the main challenge class.



I'll delete the commented-out code from the previous video, so that the



remaining code is easier to review. The big issue was, if you recall,



that I changed the code in one place, in the first code block, by adding "final score,



plus equals, one thousand" on line 14. But I didn't add that code in the second,



very similar code block, showing you how easy it was to have errors if you



have code duplicated in many places. What would be a lot easier than trying



to copy and paste code, and then trying to support many instances of it would be,



if I could create code just once, put it in an area, and use it time and time again.



And that's exactly what a method gives us. So let's have an attempt at creating a method now.



Firstly, you may not be aware of this, but we've been using a method all along.



This entire thing here, this entire section of code, that's actually a method.



And the method has the name of main. And all the code in the middle of



it are the statements that form the method block or method body.



So if I want to execute the method named main, this is what's going



to be executed, all that code that's in there. But what I'm going to do is create my own method.



One of the simplest ways to declare a method is shown on this slide.



This method has a name but takes no data in, and returns no data from the method (which is what the



special word void means in this declaration). It's accessible to the outside world



because it uses the keyword public. Because it is using the keyword static,



it can be called directly using the class name. More on this later.



All the code between the left and right curly braces is the method code block,



which is also known as the method body. method name can be any valid identifier



in Java, but I'll be using the lower camel case style to name methods.



So let's create a new method that I'll call calculate score.



I want to add it underneath the last brace, the closing brace of the main method that is.



And you can see that brace matches up with the public static void main.



This is the IntelliJ way of saying that these two things line up.



I have to start the code for a new method outside of another methods ending right curly brace,



but before the last right curly brace in the file. You can't put a named method within another



method, it needs to be outside of it. It has to be within the classes code



block though, meaning you can't have a method exist on its own, outside of a classes body.



So, this is where I would actually type it.



Right now, it's on line 28, but I'll add a blank line to help keep our code easy to read.



I'm going to create a method called calculate score.



public, static, void, calculate score, left and right parentheses, left curly brace. right



curly brace to close the method definition. For now, we're not going to get too concerned



about the public and static keywords, we'll be talking about those a lot in the future.



But to make life a bit simpler while we're still at this early stage in the course,



I'll continue to use these keywords whenever we define a new method for the rest of this section,



and we'll be doing that in the challenges as well. So, for the three terms here; public,



static, and void, they all need to be in lowercase and all separated by a space.



The ones highlighted in blue in IntelliJ are keywords, which we've already talked about,



so they're part of the Java language. Once I set up the definition of the method,



I need to put our code in between the braces on lines thirty and thirty-two.



Anything that's in between the braces is part of this method that we've called calculate score.



And when I execute this method, and I'll show you how to do that shortly,



all the code I put in here will be executed. So to do that, I'm going to copy this first



portion of the code and I'm going to paste it in this method's braces.



So, I've pasted it into our calculate score method.



You can see that IntelliJ isn't flagging any errors with this code at this point.



If I mouse over the method name, IntelliJ will popup some information about the method, mainly



that the method calculate score is never used. IntelliJ also is displaying the name in



a color of light gray. For now, I just want you



to make note of that, and we'll see what happens after I add code to call a method.



To execute a method, we can write a statement in code which



we say is calling or invoking the method. For a simple method like calculateScore,



we just use the name of the method where we want it to be executed, followed by parentheses and a



semi-colon to complete the statement. So for this example, the calling



statement would look like the code shown here: Let's actually implement that in our main method.



I can replace all the code in that first if-then block I created with a call to calculate score.



I'll delete this part out because I don't need these statements now because the calculate score



method does all this work. After I delete that code,



I can replace it with a single statement, and that is the call to our method.



So we'll just type: calculate score,



left and right parentheses, semi-colon. And now, what I want you to notice is that



the color of the the method declaration has changed from a light gray to a normal black,



and IntelliJ also shows a helpful hint above the method name, 1 usage.



That's IntelliJ's way of saying, this method is being used now.



Why is this important information to know? Well, once your method is in use,



you should always proceed with caution when making changes to its code.



And certainly you don't want to delete it, if there's code dependent on it.



In a production environment, it's critical to be aware of the effect your changes



will have on any code that uses your method. On the other hand, a light gray method name



indicates the method isn't being used and that its probably ok to delete it, if you want to.



What I've done now is I've actually said, when we get to this portion of the code,



that I want the code to jump to this method, calculate score in this case,



and execute the statements in the method body. And once you get to the end of the method's code,



come back where you left off, then continue on processing from here.



So what should happen is, it'll define the variables in lines five through ten.



Then, when it gets to line twelve, it will execute the calculate score method once, and then it'll



return back to this same point, and run the second part for us until it gets to the right curly brace



for the main method down on line twenty-four. So, let's try that out.



And you can see that it's worked quite nicely. So, how would we do the second component?



How would we replace that second if block? Well, as it is right now, I would have to



create a second method to do this next part of the code because our calculate



score method has values hard coded into it, for game over, level completed and so on.



So I haven't really fixed anything yet. Doing it this way would mean we're really



just converting two similar code blocks to two similar methods.



But there's a better way to do this because the method offers additional



functionality that we'll explore next. So if you think about it, what would be



ideal would be if we could pass this information, the variables for game over, score, the level



completed, and also the bonus to the method. So it doesn't have to create



the variables in the method. Instead they'd be sent to it and the code



could actually work with those existing variables. Well, as it turns out, we can do that.



We can actually pass information to a method using method parameters.



Where we previously had empty parentheses after the method name,



we now have method parameters in the declaration. There are no limits on the number of parameters,



and the basic syntax is to declare first the data type followed by a parameter name.



Multiple parameter declarations are separated by commas.



This method, as currently configured, still returns no data



from the method. Thats the void keyword. Parameters and arguments are terms that



are often used interchangeably by developers. But technically, a parameter is the definition



as shown in the method declaration, and the argument will be the value that's



passed to the method when we call it. So let's set up some parameters.



First, I can look at the variables I defined in the method and think if it makes sense for



the outside code, the calling code, to set this stuff up and pass it to the method.



And for all four variables, we'll want to just accept data from the



calling code and not define them here. This will make the code much more reusable.



So, what I need to do is define, in the method declaration, what parameters or what information



I need to send through to it from our main method where we're actually calling calculate score.



You define a parameter like a local variable first by declaring a data type



and then give it a name of your choice. So let's add our four parameters,



and then I'll talk about it some more: boolean, game over, comma, int, score,



comma, int level completed, comma, and int bonus. You'll notice I didn't put any values in there,



I've only put the data type and the name of the variable.



What I've done is define this method to have four parameters.



A boolean and three int variables. To execute a method that's defined



with parameters, you have to pass variables, values, or expressions that match the type,



order, and number of the parameters declared. In the calculateScore example, I declared



the method with four parameters, the first; a boolean, and the other three of int data types.



So I have to pass first a boolean, and then three int values as shown in this statement:



I can't pass the boolean type in any place, other than as the first argument, without an error.



The statement below would cause an error. And you can't pass only a partial



set of parameters as shown here. This statement, too, would cause an error.



When I added these parameters, you may have noticed that IntelliJ is now showing us some



errors here on lines twenty-eight through thirty-one, and also up on line twelve.



So up here on line twelve, the problem is our method call is now expecting me



to pass four values because I declared those four parameters in our method declaration.



IntelliJ is actually saying, I'm expecting four values to be sent,



and you are not sending any at all. So, the parameters are what we define in



this section when we're setting up a new method. But arguments are the actual values that get sent.



Just to repeat, not the data type and not the variable name, but the actual values that we want



to send to the method, these are the arguments. How do we pass arguments?



Well, one way is, I can just type in the values that I want to send, like this:



So, I've added two arguments; true and 800. But, I've only typed two arguments.



IntelliJ is saying, okay, you've got two there, but I still need two more.



I can see game over, the actual argument is set to true and score is set to 800.



So they're going to be the values that match up as I call the method, but there's still two I need to



finish off, and that's why I still have an error. So let's add the last two arguments:



Notice that this time, I used the variable names instead of the actual



values, and this is valid in Java. As soon as I entered the last one,



I don't have errors anymore on this line because as far as IntelliJ's concerned,



the actual arguments I'm passing match the parameters I've defined for the method.



And this is really important. If I don't match those entirely,



and in the exact order they're defined in the method declaration, I'll get an error.



IntelliJ is confirming that the way I'm calling the method is now ok,



but it's still complaining down here on lines twenty-eight through thirty-one.



The thing is, when we're declaring a method, and we're defining parameters of a certain



type and a name, we don't have to create the variables in the method code block at all.



In fact, if we do, like we currently have, we're redeclaring the variables, and that's an error.



So, let's go ahead and delete those lines creating variables.



What actually happens when you define these parameters is, Java will automatically



create variables with those names, and the appropriate data type, which is really nice.



So, in this case I deleted those variables, so there's now a variable called game over,



score, level completed, and bonus, that have been created automatically



by Java for me because I've defined those as parameters for our method.



Since I've fixed all the errors, I should be able to run this code now.



And you can see, I get exactly the same result as before.



Since this video is getting long, I'll stop it here.



In the next video, I'll be replacing that second set of code in the main method with



a second call to our method. Then I'll launch into a



discussion about returning data from methods. I'll be starting with the same code I've discussed



here, so keep this IntelliJ project open. See you in the next video.







**Enhancing Skills With Additional Java Method Techniques**



In the previous video, we were working with a challenge,



and I'm showing it here, where we left off. You'll hopefully remember that I replaced



one if statement block with a call to our new method, calculate score.



So far so good. I've cleaned up some of the code but it's



still a little bit messy because of that second if statement and the extra lines in its code block.



Let's change that second bit by making another call to the calculate score method.



Adding this method lets me delete all the following code in the main method.



I'll add the calculate score call here and delete everything remaining after the call.



calculate score, left parentheses, true, comma, ten thousand, comma,



eight, comma, two hundred, right parentheses. So now I have a second call to the method,



we pass four arguments, and they match up to game over, score, level completed, and bonus.



But notice this time, I'm actually passing the values directly,



I'm not using variables or anything like that. This lets me delete all of the extra code that



was assigning new values to our variables. Instead, I can just execute the methods



with these new literal values. Remember, in the challenge video, I



added one thousand to final score, but I only did that in the first if statement and not the second.



But now, because I'm calling code that's consolidated in a method,



the code is consistently calculating final score, adding one thousand in both instances.



The second value should have a has now got a score plus one thousand because it's correctly got the



change I wanted to make, in all cases. And if I run that.



I get the one thousand added to both scores. Now, the other thing I could do here is,



instead of mixing literal values and variables in the arguments I'm passing, I could just



pass all literal values in that first call. This lets me make this even more efficient by



first deleting these variables because, of course, I don't need them anymore.



I'll pass values directly to the method call, so I'll update that first call to the calculate



score method: 5 comma 100.



And we've now got a far simpler bit of code. We've literally only got two lines that actually



sends the information needed to the method. And if I run it.



I get the same result as before. So that's one of the great features



of methods. It makes it a lot easier for you to maintain your code because we've only got one



place now where our code is modified, one method. There was a lot of extra code I had in my main



method, but now I'm down to just two lines. Let's add the local variables I had before



back to the code, and this time, instead of passing just literal values or a combination



of values and variables, I'll just pass variable names as arguments to the methods.



So let's do that. I'll add the four local



variable declarations back first, and instead of passing literals, I'll pass the variable names in



the first call to calculate score. game over, set to true. score,



equal to 8 hundred. level completed, equal to 5. and bonus, equal to 100.



game over, comma, score, comma, level completed, comma, and bonus.



Then, I'll add the code I had before where I changed the values in the



variables before executing the code again: score, equals, ten thousand. level completed,



equals, eight. bonus, equals, two hundred. and add the four variables as arguments.



In some ways, you can see this code is a little easier to read because instead of just passing



unidentified literal values to the method, I'm setting up logically named variables.



This helps me figure out what each argument is to be used for in the method.



Either way will actually work, and again, there's not really a "right" way to do it.



A lot of it will depend on what coding standards you're using, and also, what the code around the



call to the method is doing anyway. You might already have variables



set up for some reason, and would naturally code the statement this way.



So all of this is pretty powerful, the fact that we can actually call a method,



pass it some data, and get it to do something, and it helps make our code a lot cleaner.



But, it does actually get even cooler than that because what we can also do is, get our method to



do some calculations much like it's doing now. But we can send the result of that calculation



back to the code that called it. We do this by declaring a data type



before the method name, much like we do when declaring a variable.



So, similar to declaring a variable with a type, we can declare a method to have a type.



This declared type is placed just before the method name.



In addition, a return statement is required in the code block, as shown on the slide,



which returns the result from the method. In previous examples, we declared the type



to be void, which has the special meaning that no data would be returned from the method.



An example of a method declaration with a return type is shown here.



In this case, the return type is an int. This method will return an integer



when it finishes executing successfully. Being able to return a value from a method,



lets the calling code have a two-way conversation with the method code.



So we can calculate something, and send that calculated value back to the code,



that called the method in the first place. So, let's do this next.



If I want to return something from our calculate score method, I need to first change the word



void in the declaration to the data type of the information that I'll want to send back.



This is going to be the int data type. And now I have done that, IntelliJ is telling



us there's a problem, and we have an error. You can see that in the right-hand part of



the screen, I have the little red icon with an exclamation mark.



We can also see that IntelliJ has a red underscore under the method's closing brace.



If I hover over that, IntelliJ tells us that the method is missing a return statement.



So, what's a return statement? Java states that a return statement



returns control to the invoker of a method. The most common usage of the return statement



is to return a value back from a method. In a method that doesn't return anything,



in other words, a method declared with void as the return type, a return statement is not required.



It is assumed and execution is returned after the last line of code in the method is executed.



But in methods that do return data, a return statement with a value is required.



So I've defined a method and said it was going to return an int, but I didn't



actually return anything yet. What I need to do is add code



to return that information. In the case of the calculate



score method, I really want to return the final score that was calculated.



So how do I do that? We know that we need to use the return keyword,



but in terms of the actual data we are going to return, there isn't just one way to do this.



Since I've already got a variable in our method called final score,



I can return that from our method. The most common place for a return



statement is right before the method's closing brace, and that's what I'll do here:



return, final score. I've defined the type of information coming



back in the declaration, and I've also defined the actual value to be returned in the code block.



So next, what I am going to do is delete this print line here, and I'm going to change the code



in the main method that calls calculate score. So first, let's create a new variable called



high score, and we'll actually declare that right in front of the first call to our method.



In other words, we're going to declare high score then immediately assign it to the



value returned from the method call. Then we'll print that variable out.



I'll print out high score. Let's run that.



You'll notice now, that I'm only getting one line of output,



the high score is two thousand three hundred. This is because, even though we are calling



calculate score twice, in the second instance, we don't assign the value



that's returned to any variable, and we're not using it in any expression,



so the return value is ignored by the calling code.



I also removed the println statement from inside the method, so we have nothing in place to store,



or print, the final score coming back from the second call of the method.



This is not considered an error by the compiler or IntelliJ.



I can use a method that returns a result, either in an expression as I did on line ten, or as a



statement as we did previously on line seventeen. In this instance, it doesn't really make a whole



lot of sense to execute the calculate score method as a statement, and not use the value returned.



So let's change this code again. This time, instead of assigning



the value to a variable, I'm going to use the method like it's a value,



and we can do that all in a println statement: I'll use println to print a message,



but then call the calculate score method right in the println. Note I need two right



parentheses here to close off the println. So, anywhere an int value can be used in



an expression, we could make a call to a method that returns an int value, like I have done here.



In other words, a method call that returns a value can be



used in expressions, and as an expression alone. Running this code gives us the output we see here.



We get both lines printed out. So effectively I am passing a method call



as an argument to the println statement here. I'll be demonstrating this in more detail



in upcoming videos, because it's a very common practice.



Ok, so in the next video, I'll be doing a review of what we know so far about methods,



and covering some more things about about methods, before I give you a method challenge to code up.







**Comprehensive Recap Of Java Methods**



In the last two videos, we covered a lot of ground with methods.



This feels like a good place to summarize what we learned and review a few additional



important points about the method. Java's documentation states that:



A method declares executable code that can be invoked,



passing a fixed number of values as arguments. Like some of the abbreviated operators we learned



about, a method can be a statement or an expression in some instances.



Any method can be executed as a statement. A method that returns a value can be used



as an expression, or as part of any expression. Some programming languages will call a method that



returns a value, a function, and a method that doesn't return a value, a procedure.



You'll often hear function and method used interchangeably in Java.



The term procedure is somewhat less common when applied to Java methods,



but you may still hear a method with a void return type, called a procedure.



So, there are quite a few declarations that need to occur as we create a method.



This consists of: Declaring Modifiers. These



are keywords in Java with special meanings, we've seen public and static as examples,



but there are others. ; Declaring the return type. void is a Java keyword meaning no data is returned



from a method. Alternatively, the return type can be any primitive data type or class. If a return



type is defined, the code block must use at least one return statement, returning a value of the



declared type or comparable type. Declaring the method name. Lower camel case is recommended for



method names. Declaring the method parameters in parentheses. A method is not required to



have parameters, so a set of empty parentheses would be declared in that case. Declaring the



method block with opening and closing curly braces. This is also called the method body.



Parameters are declared as a list of comma-separated specifiers,



each of which has a parameter type and a parameter name (or identifier).



Parameter order is important when calling the method.



The calling code must pass arguments to the method, with the same or comparable type,



and in the same order as the declaration. The calling code must pass the same number of



arguments as the number of parameters declared. When declaring a return type:



void is a valid return type and means no data is returned.



Any other return type requires a return statement in the method code block.



If a method declares a return type, meaning it's not void, then a return type is required



at any exit point from the method block. Consider the method block shown here:



In this method, we have a return statement in an if-then block.



This code won't compile because there's no return statement to cover the cases where



age is greater than or equal to twenty-one. So in the case of using a return statement in



nested code blocks in a method, all possible code segments must result in a value being returned.



The following code demonstrates one way to do this:



This code is valid because if age is greater than or equal to twenty-one,



the code will return false, in that instance. One common practice is to declare a default return



value at the start of a method, and only have a single return statement from a method, returning



that variable, as shown in this example method: In this example, the local variable result is



set to false at the start of the method. It gets set to true if age is less than



twenty-one in the if code block. You'll note in this code segment,



I'm not returning from the if statement block at all, but setting the value of the result variable.



Here, I have a single exit point from the method, and that's the last line of the method body.



The return statement can return with no value from a method



which is declared with a void return type. In this case, the return statement is optional,



but it may be used to terminate execution of the method at some earlier point than



the end of the method block, as shown here. So in this method, I use a return statement



that doesn't return anything because the method is declared with a void return type.



But I'm I'm returning from the method, if the age parameter is greater than twenty-one.



Note that I don't pass any data on the return statement.



This is perfectly valid, and you may see the return statement used this way.



Also note that I don't need to add a return statement, in this case,



at the end of the method block, as I did when the code had a non-void return type.



A method is uniquely defined in a class by its name, and the number and type of



parameters that are declared for it. This is called the method signature.



You can have multiple methods with the same method name, as long as the method signature (meaning



the parameters declared) are different. This will become important later in this



section when we cover overloaded methods. In many languages, methods can be defined



with default values, and you can omit passing values for these when calling the method.



But Java doesn't support default values for parameters.



There are workarounds for this limitation, and we'll be reviewing those at a later date.



But it's important to state again, in Java, the number of arguments you pass and their type,



must match the parameters in the method declaration exactly.



Now that we're armed with knowledge about methods, we



can revisit the main method and examine it again. The main method is special in Java because Java's



virtual machine (JVM) looks for the method with this particular signature, and uses it as the



entry point for execution of code. This method has two modifiers,



which I've discussed briefly, public and static, and I won't discuss them here,



except to remind you that they're required for this special method to be recognized by the JVM.



This method has void as the return type, so now we know this method doesn't return any data.



The name of this method is main, all in lowercase. Again, this is important.



You can actually name a method main with a capital M, or all capital letters even, if you want to,



and the Java compiler will let you do that. But it won't have the special signature needed,



and therefore, won't be the expected entry point for executable code.



And we can see there's one parameter set up for this method,



which we've glossed over a little bit. We know the name of this parameter is args.



The type is actually a special type, which is an array of string.



I'll cover arrays in a later section, but this method allows a user to pass a list of values



into the code from the command line or terminal. You can see now why the name args is appropriate



for this method because it represents command line arguments, which this method



has access to if they are passed in. Finally, in IntelliJ, if you type PSVM



and hit enter, IntelliJ will insert the main method signature, as I show here.



The only reason to memorize this signature would be if you were taking a certification exam.



IntelliJ is full of little helpful shortcuts like PSVM and I recommend



exploring IntelliJ tips when you have time. You can toggle tips to be shown on startup



by using the search icon in IntelliJ and looking for tips:



OK, so that's a recap of what we know so far about methods.



I'll be covering more as we look at overloaded methods later on in this section of the course,



and overriding methods when we get to the object-oriented features of Java.



Now, let's put all this knowledge to work. In the next video, I have a challenge for you.



So let's move on to that next video.


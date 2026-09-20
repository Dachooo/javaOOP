**Parsing Values And Reading Console Input – system.console() Overview**



In the last video, I talked about static and instance fields, and methods on the class.



I also talked about a concept called instantiating a class, which creates an object or instance.



I'll be using both of these features in this video.



I'm going to create an interactive application where a user will enter their name and year of



birth, and then the application will calculate the current age of the user.



Before we start though, let's talk about parsing data.



When we read data in from either a file or from user input, it's common for the data



to be initially stored as a String, which we'll need to convert to a numeric value.



Let's review what happens when our numeric data is really a String.



You might remember I talked about this previously when I talked about operators in Java, and how the



plus symbol means something different for numeric values than it does for Strings.



You might also remember that many of the other operators aren't applicable to Strings.



Let's look at a slide we've seen before. You can see from this slide that having



our data in string variables means we can't do basic math on our data.



Let's review what this problem looks like in code. I've created a new project called reading user



input, and a main class with the main method. In this method, I'll add two variables which



will emulate data coming in from a user, either from an input file,



a console, or even some user interface. These variables are the current year and



the users, year of birth. So now, let's say I want



to get the user's age from this data. To get a person's age, I'd just subtract



the user's year of birth from the current year, and I'd be relatively close to their age in years.



Let's add a print statement that will print out the age, and I'll



just put the equation in the println statement: I'll start with a String called currentYear,



equals, the literal string 20 22. Next, another string, this one called users date of birth,



and set that to the literal string 19 99. I'll add the println, with some header text,



and the calculation in parentheses. Ok, so now I have a problem.



And if I hover over the IntelliJ error, I find out that the operator,



minus, cannot be applied to string and string. So, let's try the plus operator since the slide



on operators we just looked at indicated that the plus sign was a valid operator for strings:



And the good news is that this compiles. So, let's run this code.



And you can see I get a number that doesn't look like an age.



Well, actually this isn't a number at all but a String.



And what happened was the two strings, users date of birth and current year, were not



added together, they were concatenated together. Ok, hopefully that wasn't a big surprise since I



covered this in the operators video. What happens if only one of



our variables is a string? So, let's make current year an int here,



and set it to the literal numeric value, 20 22: And that compiles, but if I run it,



I get the same result. So, what's our solution here



if I really can't do anything about the fact that users date of birth is given to us as a string?



Well, to use this data, I have to parse or transform that string data,



and extract the numeric value from it. Since this is so common, Java provides



ways to parse a string into a number. This is done using the wrapper



classes we've seen before. If you recall, I used the



wrapper classes to get min and max values. In this case, I'm going to use a static



method on the wrapper class to let that class do the transformation for us.



There are other wrappers, each with their own parsing method, but these are the most



common ones you'll probably use. Java has come to my rescue,



and I can use the method parse int, which is a static method on integer.



Let's use this in my code, and then I'll talk about it a bit.



I'll create an int variable called date of birth, and call integer dot parse int, passing the users



date of birth string variable, as the argument. In the println statement, I changed plus to minus,



and then changed the variable I'm deducting from current year,



to date of birth, which is an integer. Ok, so, what's this code doing on line 8.



Well, you can probably guess what it's doing; it's converting a string with a



value of nineteen ninety-nine and returning an integer with the value nineteen ninety-nine.



But what is this really? Well, we know Integer is a class.



It's not an object. On this class,



there's a static method called parse int that takes a string and returns an integer.



And we just saw, to access static methods on a class, I have to use the class name and the



dot notation, and the name of the method, so in other words, what I'm really doing is



I'm calling a method on the class named Integer. I can only call static methods this way, so parse



int is a static method on the class integer. Let's run this code.



And now, I have a result that looks right. So, that's good.



I'll be using this method when I obtain the user's year of birth from my interactive program.



Parsing a double is very similar. Let's look at a quick



example of that, for completeness. I'll add a string variable that represents what a



user might enter if they were asked to give their age, but with partial years in the decimal part.



I'll use the parse double method on the double wrapper, and I'll print that out:



String users age with partial year, and I'll set that to the literal string 22 point 5. double,



age with partial year, equals, double dot parse double, and the argument will be the



string we want to parse, which is users age with partial year. And I'll print it out.



And running that, I get another line that says; the user says he's 22.5.



So this example didn't really use that double in any math, but because it's a double, all the



operators will now work on that parsed data. Now that I've covered dealing with numeric



values that are in strings, let's talk about where that input might come from.



This is often either in the form of an input file, a console, or some kind of user interface.



For this video and the ones immediately following, I'm going to be obtaining input from the console.



When reading data from the console, we have some different options.



Like system dot out, Java provides system dot in, which can read input from the console or terminal.



It's not easy to use for beginners, and lots of code has been built around it to make it easier.



System dot console is Java's solution for easier support, for reading a single line,



and prompting the user for information. Although this is easy to use, it doesn't work



with IDEs because these environments disable it. Command line arguments can be passed in when we



execute a Java program from a command line or terminal,



and we can specify data directly in that call. This is very commonly used but doesn't let



us create an interactive application in Java. The scanner class was built to be a common way to



read input, either using system dot in, or a file. For beginners, it's much easier to understand than



the bare bones, system dot in. So, let's get back to my code.



I'll delete everything, except for the local variable that I created for current year.



First, I'll be looking at system dot console, and I'll show you a



way to run the code using IntelliJ's terminal. But for our final objective and the challenges



in following videos, I'll be using the scanner class, which we can run directly in IntelliJ.



Next I'm going to set up two methods. I just want to set them up and have them



return a dummy value for the moment, as I plan out how I'll code the next parts.



You'll hopefully remember I've done this before. I'll have two methods; the first will use system



dot console, and the second will use scanner. Both will take the current year as a parameter,



and both will return the message of how old our user is based on the birth year



they enter, which we'll read from the console. public, static, it will return astring, and I'll



call this method, get input from console. It has one parameter, an int, called current year. For



now it will return and empty string. The second method I'll call get input from scanner. It has



the same return type and parameter as our previous method. I'll also return an empty string for now.



I'll next add the call to those methods, in the main method:



I'll use a println, with a call to get input from console, passing the current year,



as the argument. And the same for our get input from scanner method.



The objective of each method is to first ask the user what their name is,



then prompt them for their year of birth, and then calculate and print out their age in years.



So, let's start with the get input from console method first.



I'm going to set up a local variable for the user's name,



and then call system dot console dot read line, which can take as one of its parameters,



a string used for the prompt for the user. I'll then print out the name I



get from this method: string, name, equals,



system dot console, left and right parentheses, dot read line, passing hi, what's your name?,



as the argument. The println will print the name, and another message to thank the user.



Ok, so the first time I run this, we see I get an error:



And you'll hopefully remember from the slide earlier in this video,



when I said that system dot console can't be used in IntelliJ because IDEs disable the console.



So, this error is expected. Instead, I'll have to either run this from



a command line or terminal session, and because IntelliJ enables us to have a terminal session



inside of its application, I can use that. In IntelliJ, you should see at the bottom



of the screen where your output is printed that there are other tabs.



I want to select terminal. And now I'll type in:



java, space, S R C, forward slash, main dot java. Here, main must start with a capital letter.



Main dot java is the name of my source file, and then I'll hit Enter.



Now, the terminal window is prompting me to enter data:



And I'll type in Marty and press enter: And now, the code completes with the message;



hi Marty, thanks for taking the course! So, I have confirmation that I got a name



from the user, stored it in a variable, and printed it out later, so that's kind of fun.



Our program is having a conversation with a user. Next, let's get the year of birth.



I'll do the same thing by using system dot console dot read line and prompting the user



with the information I want. Then I'll calculate the age.



In this case, I'm going to use integer dot parse int, passing it the string I



just read from the console, and I'll actually return our calculation in a formatted string:



string, date of birth, equals, system dot console, left and right parentheses, dot read line, and the



argument will ask, what year were you born?. I'll calculate the age based on the users input. and



return a string indicating what their age is. And again, I have to run



this in the terminal session. java, space, S R C, forward slash, main dot java.



And pressing enter: You can see the prompt



for name again, and I'll just put Marty back in there, and now I'll get the next prompt.



What year were you born? And I'm going to put nineteen sixty-six.



And now, there's our output, "so you are fifty-six years old".



Ok, so I've coded our first interactive program using system dot console.



So, that was kind of fun, but you may be thinking that was kind of a pain to have



to test and run it that way, and that's true. So, in my next attempt, I'm going to use a



different approach using the scanner class, which does work inside the IntelliJ IDE.



We'll look at this approach in the next video. But first, I'll discuss an important



concept called exception handling. This is a way to recover from errors



that might happen in our code, without actually terminating the entire process.



I'll start that conversation in the next video, so I'll see you there.







**Handling Exceptions And Introducing The Scanner Class**



In the last video, I used the system dot console dot read line method to create



an interactive program. I was able to run this



from an IntelliJ terminal session. But I can't run this code from IntelliJ



because IDEs disable the console. Let's try running the code from



the last video using IntelliJ again. And we'll look more closely at the error I get.



When I try to run system dot console in IntelliJ, it's actually giving me a null value.



Normally, system dot console would return an object that is a wrapper to system dot in, but



now, I get this exception. And unfortunately,



I can't get this to work in IntelliJ's IDE. But what I can do is use another approach,



so that I can run my program in IntelliJ's IDE. This is done by what's called catching and



handling an exception. So, what's an exception?



An exception is an error that happens in code. Some types of errors can be predicted and named.



Null pointer exception, which is the exception we saw when I tried to run my



code using system dot console in IntelliJ is an example of a named Java exception:



Java has many of these named exceptions, and if you go to the JDK's exception API page:



You can see some of them listed here. I'll be getting deeper into exceptions later,



but right now, I want to try a different approach to handle this error and get our



program working in IntelliJ. I can do this by setting



up the code to catch the exception. An exception is caught first by creating



a code block around the code that gets the error. This is done with the try statement code block.



The try statement actually has two code blocks. The first is declared directly after the try



keyword, and this code block ends and is followed by the declaration of the catch keyword.



The catch keyword includes the declaration of variables,



in parentheses, and then has its own code block. So, the format is the keyword "try", followed by



an opening brace for the code segment. The closing brace is followed by the



keyword "catch" and parentheses, where a declaration is required.



The declaration includes the type of the exception and a variable name.



As you can see in this code example, I show the type to be exception and the variable name,



which can be any valid name, is just E right now. This is followed by another code segment,



which is the code to handle, or react to the exception, or error.



It's easier to talk about exception handling in code.



So, let's add the try and catch statement around our two println statements in



the main method, then I'll talk about it: I'll add the try and left curly brace here.



And down here, I'll add a right curly brace, and type catch, and in parentheses, I'll type



null pointer exception, and "E" for the variable name, and finish with a left curly brace again.



And then the last right curly brace. So, here, I have the start of the try statement



before the method call that we know throws a null pointer exception when I run it in IntelliJ.



I finish the code block after that statement, and then add the catch keyword, which is required.



This expects a declaration of the exception type, which in our case is null pointer exception.



I also need to include a variable name. It's common practice to set this to E initially,



but I can name this variable anything I want. And this needs to be a code block, and in that



code block, I'm just going to call the other method that will work in IntelliJ.



Which of course, I haven't implemented yet. But now, if I run this from IntelliJ,



I don't get any errors, but no output either, because we need to add code for it to work.



So now, I'm ready to code the second method, and use the scanner class.



The Scanner class is described as a simple text scanner,



which can parse primitive types and strings. To use the Scanner class, we have to create



an instance of Scanner. This means we're



creating an object of type Scanner. We'll use the keyword, new, to do it.



The new keyword is used in what Java calls a Class Instance Creation Expression.



In its simplest form, it's the word new, followed by the class name, and empty parentheses.



We can optionally pass arguments in those parentheses, as we saw with methods.



We saw that we could do this with the String class, passing the text in the parentheses.



For reading input from the console or terminal, we instantiate a scanner object using new,



followed by the Scanner class name, and passing System.in, as an argument, in the parentheses.



For reading input from a file, we instantiate a scanner object using new,



again with the Scanner class name, but pass a File object, as an argument, in the parentheses.



File is another class provided by Java, for reading and writing files.



I'll talk about file input, in detail, later in the course.



Right now, let's build that second method, to get our input working in IntelliJ by using scanner.



I haven't talked about the import statement yet, but this statement



lets us use classes from other people's code. In this case, Java provides a library of code,



which includes the Scanner class in a library called java.util.



Earlier in the course, when I configured IntelliJ with a number of different settings,



I recommended that you enable these two



options in the Auto Import menu. \&lt;ADD IMAGE OF SCREEN FROM CONFIG



video showing both options enabled\&gt; Add unambiguous imports on the fly and



Optimise imports on the fly. If you enable these options,



then IntelliJ will automatically add and/or remove import statements as required. You almost always



want to enable these options. Let's go back to the code so I



can show you what I mean. I'll scroll up to the top



of the file and type in the import statement. import, java dot util dot scanner, semicolon.



This import line I just typed is what IntelliJ will add (or remove) for you as needed if you



enable those options, that I just showed you. I'm all for automation and my suggestion is to leave



those two options on. But the choice is yours. Right, moving on.



Back to the get input from scanner method. scanner, scanner, equals, new, scanner,



and in parentheses, I'll pass system dot in, as the argument.



It's common practice, as I've done here, to use a variable name which has the same name



as the class but uses lower camel case instead of upper camel case, which is used for class names.



Now, you've seen system dot out before, and that dumps text to the console.



In other words, it outputs information. And in fact, I've actually used that all



the time in pretty much every project that we've worked on.



But, system dot in, on the other hand, is the opposite.



It allows you to type input into the console, which then gets returned back to the program.



That's what I'm doing here when I'm defining a variable of type scanner.



As mentioned previously, the case here is very important.



Scanner is one of Java's built-in classes, and it allows us to read user input.



I can parse primitive types and strings, using methods from this scanner.



And notice also there's this new keyword that I'm using here as well, again on line 29.



I use that to create what's called an instance of scanner, meaning,



that I am creating a new object of type scanner. Now, so far, I've been using primitive types



or the string, which I've said, Java lets us use like a literal.



So, I haven't needed to use the new keyword before now.



Alright, so I've defined our scanner variable and set it to a new scanner object.



Now, I'm going to copy and paste the code from the get input from console method:



The scanner class has a method called next line, but unlike system dot console dot read line, it



doesn't support a prompt being passed in. In this case, I need to split the prompt



from the reading of the data when using the scanner, so let's do that now:



I'll print out a prompt. And assign a string, name, to scanner, dot next line. Because next



line is a method call, we need the parentheses. I'll print out the next prompt. And assign a



string, date of birth, to scanner, dot next line. Let's look at that first call to a scanner method.



In this case, you see that I'm calling a next line method,



not on the class spelled capital S scanner, but on my object that is scanner, with a lowercase S.



This is my local variable named scanner that I can use to execute instance methods on.



In this case, the next line method is an instance method on scanner.



And it doesn't take any parameters. I do the same with date of birth.



And as I did before, I'll use integer dot parse int to transform the string the user



types in at the console, which will be the year of their birth, into an actual integer



data type, so I can perform some math on it. Now, the scanner has other methods on it that



are similar to the integer dot parse int method, but for this example, I'm going to stick with this



method to get data from the user. It actually makes the scanner



code a bit less complicated. So, let's run this code from IntelliJ.



And now, you can see it does run from IntelliJ, and I get the same behaviour as before, so now,



I'll enter Marty and 1966 again: But let's see what happens if my



user isn't very good at typing, and enters a year in the future, or a year far in the past,



or even a negative number. So, let's run it again.



I'll enter Marty, then hit Enter. Then I'll enter the year



twenty seventy and hit enter. You can see I get, "So you are minus 48



years old", which is probably not a good thing. And let's run it again, and this time,



I'll still put Marty in there, but now, let's put in a year of birth that's also not possible,



like fifteen hundred. And I get, "So you are



five hundred twenty-two years old". So again, that's probably something



I don't want a user to enter. In fact, if you google how old the oldest



living human is, it's about 120 years right now. Ok, let's do one more test, this time,



again I'll use Marty for the name, but now I'm going to enter a negative number and hit enter.



If we want to make this code more robust, then we probably want to restrict the user



to a range of values. But how do we do that?



Well, for the console, or terminal, I can't really do more than test the values,



then prompt them to try again. And allow the user to keep



trying until they get it right. What statement can I use to do something,



and then keep trying until they get it right? Did you guess the do while loop?



The do while statement does something once, and then tests a condition to see



if it should continue looping. That sounds ideal to solve this problem.



I'll end this video here and continue in the next video where I'll make our interactive



program a bit more robust. See you in that next video.





**Reading Input With The Scanner For Seamless User Interaction**



In the last video, I left off where I had two methods implemented, the first used system dot



console, and the second used the scanner class. I'd just tested the second method from IntelliJ



with several variations of invalid data and confirmed that the second



method isn't very robust. It allows the user to



enter a year of birth which is invalid. I'm going to continue with my class and



testing the scanner method to read input, but I'll first write a validation method.



This method should make sure that the year of birth the user enters should not be any



later than a year I have defined to be 2022. I should also make sure that the year that's



entered is greater than 2022 minus 125 years because I'll assume the oldest living human



won't be older than 125 years old. This validation naturally



addresses negative years as well. So, let's create a new method called check data.



I'll pass it 2022 that I've set up in the main method and the year of birth the user entered.



In this method, I'll parse that information with integer dot parse int.



So, the method is as follows. public, static, int, I'll call it check data,



and the two parameters will be defined as current year which is an int, and date of birth, a string.



int, DOB, equals, integer dot parse int, and date of birth in parentheses. int, minimum year will be



current year minus one hundred and twenty-five. I'll next validate the year entered by the user.



I'll check if DOB is less than our minimum year, or if its greater than the current year. If either



or both of these tests are true, validation has failed. I'll return from the method passing back



minus one to indicate failure. Otherwise, we have valid input. return, the current year minus DOB.



Confirming if the date of birth that's entered is less than the minimum year, which I set up to be



2022 minus 125, or it's greater than the current year, I'm going to pass back a value of minus 1.



Otherwise, I'll pass back the calculated age. The value minus 1 is used quite often to



describe an invalid value (especially in the case of a method that should



only have positive value results). So, this method, if it returns minus



1 means the user entered bad data. When the user enters bad data,



I want to go through the process again, asking them to re-enter the year they were born.



So, my do while loop will be after the prompt, "What year were you born?".



But first, I'll create a boolean variable called valid D O B and set it to false.



This is going to be set to true, only when the user enters a valid year of birth.



I'm going to create a local variable for age that I'll declare outside of the do



block because I want to use it in the print statement after the looping ends.



Inside the do block, I'm going to prompt the user again that the year of



birth needs to be between the range I specified. So, for each instance the user enters a bad date,



this prompt will be reprinted. our boolean, called valid DOB,



set to false, initially. int, age, set to zero. start our do while loop. print the



valid range of years that can be entered. Now I'll indent the variables correctly,



and also remove the int, before age, because its now been defined outside of the loop.



finish our do while loop. It will continue looping while valid DOB is false.



So, reviewing this code, I have a boolean variable that is false, and I'll be looping until that



condition in the while parentheses becomes false. In other words, until valid DOB changes to true.



I start out with valid DOB false, and that never changes currently.



If I ran this now, I'll be in an infinite loop, prompting the user indefinitely



to enter the year they were born. So, let's add the validation code.



Where I get age, I'll replace that expression with a call to my validation method.



I'm going to replace the two lines with the one that calls the new validation method.



Instead of using a local variable to store date of birth, I'll just pass



the result of scanner dot next line as an argument, directly to our validation method:



age, equals, check data, with current year and scanner dot next line as the arguments. valid DOB,



equals, and I'll use a ternary operator. So, age, less than,



zero, question mark, false, colon, true. The ternary operator is going to assign



false to valid D O B, if age is less than zero, otherwise, as it's a valid year,



it will be assigned true. OK, so let's run that. I'm going to enter Marty, as before,



and now you see that I have an extra prompt: Enter a year of birth greater than or equal



to eighteen ninety-seven and less than or equal to twenty twenty-two.



So, let's run through the same numbers I did before.



First, I'll enter twenty seventy, a date in the future and hit Enter.



And you can see that I am right back at that prompt, asking for a year between



eighteen ninety-seven and twenty twenty-two. So, the next one I tried was the year



fifteen hundred, which would make our user a lot older than 125 years old.



And I am back at the prompt, meaning, the year entered wasn't valid.



And next, I'll try a negative year of birth and put in minus one thousand and hit enter.



And I'm still in the loop. I still have yet to give



the program a valid year of birth. So, finally, let's put in nineteen sixty-six.



And sure enough, the loop ends and gives us the result; "So, you are 56 years old".



So, that all worked, and now, I've successfully created a program that



will continually prompt a user for a valid year, but I still have one more problem.



What happens if the user enters in a non-numeric value?



So, let's run this code and see what happens. I'll enter Marty and hit enter, and then at



the next prompt, I'll enter the value one hundred ninety-six C, and pretend like I just made a typo.



And you can see that our application crashes with an error, another exception called number



format exception. I have no checks in



place for this kind of bad data. So, let's add that, but this time,



let's try another example of the try statement. I'm going to add this new try statement just



before the age equals check data line. try, left curly brace.



right curly brace, catch, left parentheses, number format exception, bad user data,



right parentheses, left curly brace. If we have a number format exception, I'll print out a message



informing the user what they typed was not allowed. right curly brace to close the try.



So here, I'm catching the exception which we just saw was number format exception.



Now, the reason you create a variable in the parentheses of the catch phrase



is if you wanted to access information about the exception, you could use that variable.



We'll explore that more later when I cover exceptions much more thoroughly,



but it's required to set up a variable this way even if you are not going to use it.



In this case, all I'm going to do is inform the user that what they typed is not allowed.



So let's try running this again. It's always good to retest your code



with previous scenarios when you edit the code, so I'll run through all of my test scenarios again.



First, I'll enter Marty and get the prompt for year of birth, and then I'll enter



twenty seventy, as I did before. Then the prompt again.



So, my next test case was fifteen hundred, so let me type that in and press enter.



And I'm still in the loop because that date wasn't valid.



So, next was minus one thousand. I'll enter that in there.



And there's our prompt again, and now, I'll try out our new test case.



If you'll remember, that was one hundred ninety-six C.



And I have an extra message there, you can see, "Characters not allowed,



try again", and then the usual prompt. So now, finally, let's put a valid birth



date in the year, the same as before. And now, the code executes cleanly,



and gives the result, "So you are 56 years old". So, in the past two videos, we learned



two different ways to get user input. I transformed string data to integer data,



so we could perform some calculations. We learned that system dot console



doesn't work in IntelliJ, but scanner does. We saw that we can use exception handling to



check which way will work, and the code will execute a different method if run in IntelliJ,



or on the command line, or terminal. I also added validation to our second method,



as well as a do while statement to keep trying to get a valid year of birth from the user.



In the next video, I'm going to give you a challenge,



so you can try both the scanner and loop statements on your own to meet



the requirements of the challenge. So, I'll see you in that next video.


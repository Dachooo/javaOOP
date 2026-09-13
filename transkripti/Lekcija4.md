**Understanding and Using Casting with Numeric Primitive Types in Java**





In the last video, I introduced you to three new data types. The byte, the short, and the long.



In this video, we'll be using these additional types in some basic arithmetic.



We've already done some math using integers but now, let's do it with these other data types.



I'll finish the video with a discussion about casting, which is a way to get Java to treat a



variable of one type, like a different data type. I'll talk about when and why



casting is sometimes necessary in Java code. So let's start by declaring a couple of local



variables, starting with one short and one long. We'll use the wrapper classes to get the minimum



value for each data type. We did this in previous videos, so it should be familiar



to you by now. But this time, we are going to do something a little differently. We're going



to declare and initialize the variables on the same line, something we haven't done before this:



short, my min short value, equals, short dot min underscore value, semicolon, int,



my min int value, equals, integer dot min underscore value, semicolon



This is perfectly valid syntax for different data types, as long as we use a semi-colon



between each declaration, as I am doing here. This is really taking two lines of code and just typing



them out on a single line, for convenience. OK, let's press enter and see if that works.



And JShell prints out the values of our variables, so we know this line executed successfully.



It's also possible to declare 2 variables in a single statement, so let's do that next.



byte, my min byte value, equals, byte dot min underscore value, comma, my max byte value,



equals byte dot max underscore value, semicolon Here, we are declaring two byte variables,



but it's important to note that the byte data type is specified only once at the start of



the statement. The variable declarations and assignments are separated by a comma.



If we press Enter now, we can see that worked fine.



There are some rules for declaring multiple variables in one statement, however:



You cannot declare variables with different data types in a single statement. If you



declare multiple variables of the same data type in a single statement, you must specify the



data type only once before any variable names. So let's break the rules and see what happens.



First, we'll try to declare two variables with different data types in the same statement:



short, first short, equals 1, comma, int, first integer, equals 2, semicolon



And you can see this gave us the error; identifier expected. This problem is easily fixed by changing



the comma to a semi-colon. I'll do that now by pressing the up arrow key and making that change,



effectively converting it into two statements. And that worked, because now we simply have



two separate statements on one line. Next, let's try to break the second rule,



which is about declaring two variables of the same type in the same statement:



byte, first byte, equals 1, comma, byte, second byte, equals 2, semicolon



And you can see this gave us the error; identifier expected. The problem here is



the second byte data type declaration. You can fix this in one of two ways; either change the



comma to a semi-colon which creates two separate statements, or remove that second byte data type



after the first comma, so let's do that. We'll press the up arrow, edit that line,



and remove the word byte after the comma there: So these are a few rules for declaration



statements, but don't worry if you find it a little hard to remember or confusing. We'll be



reviewing these rules and others, as we progress through the course. When we move over to IntelliJ,



an integrated development environment, it will guide you when you make mistakes.



Just remember that putting more than one statement on a single line is perfectly legal in



Java. A statement needs to end in a semi-colon and multiple statements cannot be separated by commas.



Ok, so enough of syntax rules. Let's get back to some math. Let's use one of the variables we



just created in a division operation. For this, we'll type in a bit of code. Make sure you follow



along yourself, typing this code in JShell: int, my total, equals, left parentheses,



my min int value, divided by 2, right parentheses, semicolon



So that's just a simple bit of math, that takes the value in the variable my min int value,



which of course is the minimum value of an int, and divides that value by 2. The new variable my



total of type int gets the result of the division operation, and this all works without any issues.



Let's try the exact same thing, but this time, with the byte data type.



byte, my new byte value, equals, left parentheses, my min byte value,



divided by 2, right parentheses, semicolon Now suddenly, we've got an error.



So why have we got this error? Shouldn't this work? We know that the value of the



result of that division operation should be in the range for a byte.



The Java compiler does not attempt to evaluate the value in a variable when



it's used in a calculation, so it doesn't know if the value fits and throws an error.



If your calculation uses literal values, Java can figure out the end result at compile time,



and whether it fits into the variable, and won't throw an error if it does.



In both examples, an int result is being returned from the calculation,



but in the second example, Java knows the returned value can fit into a byte.



We know that if we simply assign a literal value to a byte variable and the literal value fits,



there's no problem. But here we've got an expression that uses a variable that's been



divided by two. That's the difference compared to what we've done previously,



when we've used a literal value. Java can make assumptions about literal values that



it can't make about expressions with variables. This problem comes about because the default



whole number used by Java is an int, and that's why we've got an error here.



Basically, what's in the parentheses is treated as an int by the computer,



and that's why we're getting this error. But we definitely know the expression will result



in a number that fits. So how do we let Java know? Well, we do that with a concept called casting.



Casting means to treat or convert a number, from one type to another. We put the type we want the



number to be, in parentheses like this: Other languages have casting too.



This is common practice and not just a Java thing. So let's do that; we'll cast the result of our



expression to a byte before we assign it back to our variable:



And now we can see, the error has disappeared. Because we've used this cast, we've told Java



to treat this value, following the byte in parentheses, as a byte, and the error disappears.



We're really being specific here in telling Java that this is a byte, so treat it as a



byte instead of the default, which is an integer. And we can do exactly the same thing for a short.



So we can type: short, my new short value,



equals, left parentheses, my min short value, divided by 2, right parentheses, semicolon



And as we see, that gives us the same type of error.



But this time, it's requiring a short and found an int data type again.



So, let's use a cast in the code. I'll add short in parentheses



And the error disappears. So, what effect does int,



being the default value, have on our code? Looking at the scenarios we just looked



at in summary, we know the following: This statement works because the result is an int,



and assigning it to an int variable is fine. This statement doesn't work because the



expression my min short value divided by two is an int, and an int can't be assigned to a short



because the compiler won't guess the result. This statement works because the result of



\-128 divided by 2 is an int. But when calculations use only literal values,



the compiler can determine the result immediately and knows the value fits into a short.



And finally, this code works, because we tell the compiler we know what we're doing by using this



cast, and the compiler doesn't give an error. So generally speaking, an integer is the whole



number you are most likely to use in most cases, and you can probably guess that now because Java



uses the int by default. That's more or less telling us that that's what it's expecting to



use most of the time. Because an integer is assumed automatically by Java, you saw that



in these cases, we got an error when we were assigning calculations to smaller data types.



Because of this, my advice is to always use an integer, unless you've



got a really good reason to not do that. All right, so let's end the video here,



and in the next one, it's time for a challenge to solidify some of the information we've been



learning in the last few videos. I'll see you in the next video.







**Primitive Types Challenge: Applying Your Knowledge of Integer Variables**





All right, so we've covered a lot of material and it's time for a challenge.



Your challenge is to create four new variables: a byte variable, set it to any valid byte



number. ; a short variable, set it to any valid short number. an int variable,



set it to any valid integer number. Lastly, create a variable of type long. Make it equal to



50 thousand plus 10 times the sum of the values of the first 3 variables. Your byte, your short, and



your int values. In other words, use the variable names in your expression to calculate the sum.



Pause the video now, and I'll see you when you get back.



All right. How did you go about figuring out that on your own? Let's walk through



the solution together now. You will find that as the challenges get more complex,



you may do it one way, while I might come up with a different method. This is not



only perfectly valid, it's a great way to discover different ways of getting a particular task done.



Programming almost always allows multiple ways to solve a given problem. No matter how



experienced you are as a programmer, you can often learn something new or



interesting by reviewing someone else's code. OK, Let's start off by creating our variables.



I'll create my byte variable and set it with a value of 10



I'll create my short variable and assign the value 20 to it



And for my int variable I'll assign 50 to it So we've got our first three variables set



up. Next, we'll work on building the expression for the last variable:



long, long Total, equals, 50 thousand L I'm going to put an L there to signify it's a long



data type. Bear in mind, that we don't have to do that because Java will assume an integer type,



and it'll automatically convert that to a long. But I'm going to put it in anyway and continue.



After this, we need to multiply that by the sum of the byte, short and int values. We can



add that directly into the same statement: left parentheses, byte value, plus, short



value, + int value, right parentheses, semicolon So that's actually one solution,



done in a single line. And just to confirm this.



And there you can see, we got the result 50 thousand 800. Even with this small exercise,



there are different ways to do it. Maybe you added a variable that first summed up the byte,



short, and int variables, then included this in your expression for the long variable.



Let's quickly do that. I know my challenge did not call for this additional variable,



but if you did code it this way, it's valid, and another good way to do it.



int, sum of three, equals, byte value, plus, short value, plus, int value, semicolon



And then we can use that in the expression that we assign to the final long variable:



long total, equals, 50 thousand L, plus, left parentheses, 10 multipled by, sum of three, right



parentheses, and end the line with a semicolon And again we get the value of 50 thousand 800.



In the last statement, I added a set of parentheses around part of the expression.



Parentheses are another way to make your code more readable.



They also make it clear which calculation should be done first.



In this case, it's a bit more obvious we are multiplying the sum of the other 3 variables



by 10 before adding it to the 50 thousand. I also did not include the L suffix in the



numeric literal 10 in this example. Remember that 'L' is optional if the value is less than



the integer maximum value. You can include it as a way of creating self-documenting code



for future readers, but it works just the same without it in this instance.



So, those are just two variations to the same end result for the challenge. Maybe



you came up with another. Considering the many paths to the same end result, is one of



the things that makes programming so interesting. Also notice how we didn't need to do any casting.



This is because the right side produced a long, because we used a long literal



in the first part of the equation, so in this instance, the result is a long.



But what if we wanted to do something similar with a short?



I know this isn't part of the challenge either, but we'll just go



through it anyway. It would be something like. short, short total, equals, left parentheses,



one thousand, plus, 10 multiplied by, left parentheses, byte value, plus, short value, plus,



int value, two right parentheses, and a semicolon Enter.



Now clearly we've got an error doing that, and the reason why we've got an error, is it required



a short, but found an int. Now, we do have to cast.



So we need to be specific here, and put a short cast in front of the expression there:



short in parentheses We created a short cast,



by adding the word short in parentheses before the parentheses that encloses



the full expression. If we press Enter now: We get the output 18 hundred, and not an error.



The point of this, after solving the challenge, is just to suggest that integer is the best



primitive data type for whole numbers generally. But even if you're using type long, you saw that



Java handles a lot of the complexity for you, and you don't have to do this casting with a long.



So that's it, for bytes, shorts, integers and longs.



We still have four left to go. In the next video, we are going to



start talking about decimal numbers, because we've only been dealing with whole numbers up until now.



Some things work fine with whole numbers, like counting the number of cars in a car park,



or the position of a car in a car race. But there are many things that do not,



like your bank account balance, or mathematical constants like the value of PI.



Conversion expressions are also rarely expressed in whole numbers. For example,



you might want to convert pounds to kilograms, or something of that nature. In that scenario,



having the ability to use decimal points in the number



would be necessary for an accurate conversion. So let's start working on that in the next video.


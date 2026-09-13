**Working with Float and Double: Precision in Floating Point Numbers**





It's now time to start looking at floating point numbers.



Unlike whole numbers, floating-point numbers have fractional parts that



we express with a decimal point. In this table, you can see some



examples of both whole numbers and floating point numbers in comparison.



Floating-point numbers are also known as real numbers.



The examples on the left show 2 positive numeric literal integers and one negative long.



The examples on the right show a couple of ways to express floating point numbers.



We use a floating-point number when we need more precision in calculations.



There are two primitive types in Java for expressing floating-point numbers,



the float and the double. The double is Java's default



type for any decimal or real number. When I talk about floating point numbers,



I talk about both the width and the precision of the type.



Precision refers to the format and amount of space occupied by the relevant type.



This table shows the width of each of the floating point types and their ranges.



The ranges are shown in Java's scientific notation, which we show below in blue.



You can see the e-notation followed by either a positive or negative number.



Scientific notation can be translated into more familiar terms;



by replacing the 'E' in the number, with the phrase 'times 10 to the power of'.



So, we can say that the minimum value of a float is 1 point 4 times 10 to the power of minus



forty-five and its maximum value is approximately 3 point 4 times ten to the power of thirty-eight.



Think about that for a moment. Using the double's minimum value shown below, remembering that



10 to the power of minus one equals zero point 1. Ten to the power of minus five equals zero



point zero, zero, zero, zero, one, for example. Imagine writing out the double data type's minimum



value in decimal format. That would be a lot of zeroes after the decimal.



I hope you can see that a double, when compared to a float, can represent both a much smaller



decimal value, and a much larger decimal value. This is why it's called more precise.



Because it's more precise, the double is the default type for floating point numbers.



So now that you know what kinds of values a float and double type will store, let's go



back to JShell and see them in some Java code. Let's confirm the ranges that what we saw on



the slide. We'll do something similar to what we've been doing for other primitive types by



retrieving their min and max values from the related wrapper class. We'll do that with a



statement that should look familiar to you now: Remember we are using the wrapper float with a



capital F, getting both the min underscore value and the max underscore value,



and printing it with some informative text. Let's execute this by hitting enter.



And you can see in the output that we have the values we saw on the slide.



Now, let's do the same thing for double by replacing float with double in the



last statement and executing that statement: And you can see in the output that we have the



values we saw on the slide for the double. This confirms that a double can work with



a much bigger range of numbers and it's also a lot more precise than the float.



To achieve this, it needs twice the amount of memory, 64 bits or eight bytes, to store that



number compared to the float, which requires 32 bits or four bytes to store its number.



Now that we conceptually understand floats and doubles, we're going to take a look



at how to use some of these variables. We'll start by declaring three variables,



an integer, a float, and a double, and you'll see why shortly. I'm going to do this on a



single line in JShell again because it's a bit more convenient, and I think easier to see:



I'll add an int variable with the value 5, a float variable with the value 5 and



a double variable with the value 5, with semicolon's added after all 3.



Before we continue, let's quickly talk about two other numeric literal suffixes. Previously,



we've learnt that the letter 'L' is used in a whole number literal, if the value is either



greater than the int's max value or smaller than the min value to specify a long value.



The suffix is optional if the value is outside of that range, but its generally recommended to use



it to help explain your code. That is to make it clear you are using a long literal value.



Important: The double data type is Java's default type for real numbers.



For example, any number with a decimal is a double.



So, 10.5 is a double by default in Java. The double data type can be specified



as a numeric literal with a suffix of either lowercase 'D', or uppercase 'D',



but because doubles are the default in Java, the suffix is optional to use. The float data type can



be specified as a numeric literal with a suffix of lowercase 'F', or uppercase 'F'. This suffix



is required if you are assigning a real number to a variable that was declared with a float type.



Much in the same way Java has chosen to use an int as its default data type



for a whole number, Java uses a double as its default type for a real number.



It is important to note that Java did not choose the smaller and less precise float



data type. This is because using a more precise data type, generally outweighs



the benefits of using less memory. Unless you're absolutely certain you don't need that



additional precision in your results, it's best to stick to using a double, rather than a float.



So, getting back to our code, notice that I haven't put anything on the end of any



of the number 5's. What I mean is, I haven't included a suffix in the numeric literal that



I assigned to any of these variables. I just used the simple literal 5. You may remember,



that I used an 'L' suffix when I wanted to specify a long literal. But you can see I did not put an



"F", "D", or any suffix there, and that's been accepted and executed fine. What this means is,



we can assign an integer literal to both a float and a double variable.



You can put an "F" or "D" there to confirm the data type. It's good practice to do that in



general if you're typing in literal numbers, to make it abundantly clear what you intend



them to be. So let's do that now, first for the float variable we previously declared:



my float value, equals, five F, semi-colon. And then for the double:



my double value, equals, five D, semi-colon. Notice that we get the same output whether we



used the suffixes or not when we assigned a whole number literal to these variables.



That works fine for a whole number, but you'll find that if we add a decimal, point two five, to



make it 5.25, a decimal number. Now, if we remove that "F" there, we will actually get an error.



Let's try to declare a new float with a value of 5.25:



float, my other float value, equals five point twenty-five, semi-colon.



And now we get an error. The reason we get this error is, as previously pointed out, the double



is the default floating point number in Java. So here, we've got a similar problem to what we saw



with other data types in previous videos. On line two of the output, you can see that Java doesn't



like trying to put a double into a float variable type. In this case, the literal value that we've



typed in, 5.25, is being interpreted as a double. All right, so next, a quick challenge for you.



Thinking back to our discussion on casting, how do you think you'd do the same for the



float to remove this error? I am talking about using casting here specifically



because as you have learned, we could just use the suffix F to tell Java this is a float. Here



I want you to use casting. So have a think about that.



Pause the video and try it out and see if you can get it to work, to remove the error.



When you're ready, come back and resume the video, and we'll go through the solution.



So pause the video now. Okay, so welcome back. Did you get that working?



If you remember, the format of the cast is the name of the data type you want



to convert to a float, in this case, inside the left and right parentheses:



float, my other float value, equals, left parentheses, fload, right parentheses,



five point twenty-five, semi-colon; I usually add a space there between the cast



and the value just to make it clear. But a space is optional after the cast and before the value.



So what's happened here is the error has disappeared. That's because we're telling Java;



"yes, this is a literal double that's been typed here, but we want you to treat it as a float",



and for that reason, the error then disappeared. It's generally not recommended to do that though,



for a couple reasons. Firstly, as I'll talk about in the next video,



floats aren't usually recommended to be used much these days. Double is the



preferred floating point data type to use. But secondly, it's a lot clearer, I think



you'd agree, to just add the letter 'F' right at the end that tells you; okay, that's a float:



float, my other float value, equals, five point twenty-five, F, semi-colon.



And that's generally the format that most programmers will use.



They would use an "F" suffix to indicate the type, rather than explicitly cast it,



which is just a little bit more code to look at. Not everyone realizes that Java's default data



type for a decimal literal is a double, which is larger and more precise than a float.



Oracle likes to put a similar line of code in its code segments on exam questions,



omitting the 'F' suffix. Without a computer to check, this statement can look fairly innocuous.



The number 5.25 is a double, so assigning it to a float will raise an error.



This is a gift question to an exam taker if you can easily spot this compiler error.



Remember that in Java, a decimal number literal is a double. A float is less precise than a double,



so you cannot just assign a more precise value, 5.25 which is a double in this example,



to a less precise variable type, the float, without using a suffix or explicit cast.



All right, so let's finish this video here. Next,



we'll start exploring more about these floating-point types,



including doing some division. So, I'll see you in the next video.







**Understanding Floating-Point Precision: A Practical Challenge in Java**



In the previous video, we were introduced to the primitive types



Java uses to store real numbers. Namely, the float and the double.



In this video, we'll take a look at the differences in precision when using arithmetic.



We're going to declare the three variables from the previous video.



int, my int value, equals five, semi-colon, float, my float value,



equals, five F, semi-colon, double, my double value, equals, five D, semi-colon.



We can see there, that my int value is showing the value of five. No surprises there.



But the float and the double are showing the decimal points 5.0,



for both the float and for the double value. Let's pause for just a minute and talk about



the default output for numeric data types. In this slide, I show default output as it would



be in JShell or by using System.out.print for both whole and real numbers.



You can see from this table that there are more ways to express a decimal real number



literal than a whole number, with the use of the 'F' or 'D' suffix.



Including scientific notation in the literal value.



Another interesting difference is that, for whole numbers,



the output is never in scientific notation. But for real numbers, it could be, as you can see.



Later in the course, you'll learn how to make these numbers print with the exact



format we want and specify the exact number of decimal places to be printed.



All right, so let's now try doing some division to see what happens.



We are going to assign the output of a simple division equation to each



of the variables we created, starting with simple integer division. Type the following:



my int value, equals, five divided by two, semi-colon.



The result is a whole number of 2. Did you expect it to be 2.5? Java uses a



rather complex process when determining what type of data to output from calculations,



based on the types of the numbers used in the equation. I'm not going to get into that right



now, except to say that because both 5 and 2 are integers, the result is an integer value, and that



value is 2. The decimal part is not included in the value returned from the calculation.



Let's try something similar with the float variable:



my float value, equals, five F, divided by two F, semicolon.



So here, we did get 2.5 this time, because we used the division operator on two floats.



The suffix made these numeric literals floats here. Because of this, Java returns a float,



without the need to cast the result. Let's use a similar equation with double



literals and assign it to our double variable: my double value, equals, five D,



divided by two D, semi-colon. We also get 2.5 as the output.



So you can see what's happened there. The int type has got a value of two,



but both the float and the double have got a value of 2.5. They have given us a much more



precise and correct answer because it is handling the fractional part of a number.



That's the reason why you'd want to use a floating-point number,



rather than a whole number data type. To be more precise with calculations, like division.



All right, so moving on, let's explore this a little more. I'll change the divisor, which is



the number we are dividing by, from 2 to 3. First, we'll do it for the integers,



so 5 divided by 3 assigned to an int variable. Can you guess the result?



my in value, equals five, divided by three, semi-colon.



Again, the result truncates any fractional part and returns a whole number, a value of 1.



Let's do the same thing for the float: my float value, equals five F,



divided by three F, semi-colon. The real result of dividing 5



by 3 is 1.66 recurring. The sixes go on indefinitely. This is called a repeating



decimal. In computer language, you can never represent this kind of number exactly, due to



the internal conversion of numbers to binary. More on this towards the end of this video.



In this instance, the number is printed with 7 decimal places in the output.



And now, let's see what the double division looks like:



my double value, equals five D, divided by three D, semi-colon.



For a double, the number is printed with 16 decimal places in the output.



Actually, this output is a little misleading. For the



float, the number stored in memory is actually more precise than that shown,



but the output stops at 7 decimals. The same is true for a double, the number in memory is



more precise than that represented by the number shown here in the output. But this



example should make it clear that a double will more accurately represent numbers like these.



And just a reminder again that in terms of the number that we're typing in here,



if we're typing in a decimal number, we can do something like this:



my double value, equals five point zero zero, divided by three point zero zero, semi-colon.



We don't need the 'D' suffix, remembering that Java will automatically look at a



decimal number and assume it's a double. And we get exactly the same output as before.



Let's take a moment here to change one of the operands to a literal int, leaving the other



operand as a double or decimal number. There is an upcoming video that discusses operands in detail.



For now, note that the operand is what is to the left, or the right of the divided by sign. I'll



again edit our previous statement and change 3 point zero zero to just 3, a literal integer.



As long as one of the operands is a double, your result will be a double.



And another reminder that this won't work for your float variable. Let's try:



my float value, equals, five point zero zero, divided by three F, semi-colon.



So here, even though one of our literals is a float, 3 with the F suffix, the other is a



double, 5.0, the result is a double, and you cannot assign a double to a float variable.



Let's go over why a double should be used instead of a float, in most circumstances.



Why should we choose double? First, it's actually faster



to process on many modern computers. That's because computers have, at the chip level,



the functionality to actually deal with these double numbers faster than the equivalent float.



Second, the Java libraries that we'll get into later in the course, particularly math functions,



are often written to process doubles and not floats and to return the result as a double.



The creators of Java selected the double because it's more precise and it can handle a larger range



of numbers. Another reason to use the double is that, unlike computers from decades ago,



modern computers have lots of memory. Having lots of memory means you usually



don't have to worry about saving memory by using data types that take up less space.



So, consequently, you'll find that double is used a lot in Java code you will find and use.



For all those reasons, it's highly recommended that you use the double. As a result,



I'm not going to be using the float anymore in this course.



Any floating point number code that we use moving forward, will be a double.



Alright, so to end this video, it's time for a quick little challenge.



The objective of this challenge is to convert a given number of pounds to kilograms.



STEPS: 1: Create a variable



with the appropriate type to store the number of pounds that we want to convert into kilograms.



2: Calculate kilograms using the variable above and store the result in a 2nd



appropriately typed variable. 3: Print the result.



Below is the formula to perform the conversion: So, pause the video now. Type your code in, give



it a test run, and see if you can get the result.



All right, so welcome back!



Hopefully, you managed to solve that challenge successfully on your own, but let's go through



it and come up with a solution.



I'll start by typing:



double, number of pounts, equals, two hundred D, semi-colon.



Now, 200 is just an arbitrary number. You could have used any number for the calculation.



Next, we're going to create another variable called converted kilograms.



The formula we'll use will be the number of pounds we want converted, times the number I gave you:



I'll call my double variable converted kilograms, and assign it the expression number of pounds,



multiplied by zero point 4 5 3 5 9 2 3 7, and add the double suffix and semicolon at the end.



We don't have to put the letter 'D' there as a suffix because we're dealing with a double data



type anyway, and it would be assumed. But we'll do that for consistency and code readability.



And even though we can see the result on screen, I'll print out the results with a label again.



system dot out dot print, left parentheses, double quote, converted kilograms, space,



equals, space, double quote, plus, converted kilograms, right parentheses, semi-colon.



And you can see we got the result there, ninety point seven one eight four seven four.



Just to be sure that this result is actually correct, we'll open a browser.



I'll google 200 pounds to kilograms. We've got the result there, 90 point 7 1 8 5.



Looking at our code, our result is ninety point seven one eight four seven,



so obviously, that would be seven one eight five. Google has just rounded up.



So, clearly, our calculation has worked well. Okay, so that's good. We successfully converted



pounds to kilograms, and hopefully, you managed to solve that challenge.



Another quick thing I wanted to show you is the following:



double, pi, equals, three point one four one five nine two seven D, semi-colon.



There is nothing new here. However, we can also express a floating-point number using underscores.



Here, I'll be including underscores, both before and after the decimal point



double, another number, equals, three, underscore zero zero zero, underscore zero zero zero,



point four, underscore, five six seven, underscore, eight nine zero D, semi-colon.



As you can see I've used a number of underscores there.



So you can format it in that way if you want. Personally, I don't like or use this format,



but I'm just showing you this because you may see that in code you come across when



you're coding and wonder what it is. If we take a look at the output for



our another number variable, we can see that it's stored exactly the same way



we typed it in, minus the underscores. The zero at the end of another number



was ignored because it's not needed. All right, so I just want to finish



off by talking about another important point about floating point numbers.



In general, float and double are great for general floating-point operations.



But neither should be used when absolutely precise calculations are required. This is due



to a limitation with how floating-point numbers are stored and not a Java problem, as such.



Java has a class called big decimal that overcomes this.



I mentioned earlier in the course that a class is a kind of a custom



data type and Java comes with a whole library of helpful classes.



For now, just keep in the back of your mind that when precise calculations are necessary,



you'll probably need to use the big decimal class, and not a float or double.



For general calculations, the float and double types are fine. I'll discuss this



in more detail, later in the course. All right, so that's it now for the



floating-point data types. In the next video, we'll look at two more primitive types in Java,



namely the char and the boolean. So I'll see you in the next video.


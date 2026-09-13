**Exploring Java Primitive Types: Integer Ranges and Wrapper Classes**



In this video, we'll continue to look at int, as well as several other primitive types.



We'll also introduce the wrapper class, a special category of data type, which offers additional



functionality that primitive types don't. In Java, primitive types are the



most basic data types. The eight primitive data



types in Java are shown in the table below, listed by the type of data stored in each:



You can see from this table, that there are four different types to store whole numbers;



the byte, the short, the int, which we've briefly looked at, and the long.



There are two types to store real numbers; the float and the double.



And finally, there is the char and the boolean, which are in categories of their own.



Consider these types as the building blocks of data manipulation.



Remember that primitive data types are simply placeholders in memory for a value.



We're going to explore all of these primitive data types in Java over the next few videos.



If you remember from the previous video, we created some code in JShell which declared



a variable of type int, and assigned it an expression, which we'll do again now:



int, myValue, equals, ten thousand, semi colon, then enter



So what that's doing, if you'll recall; it creates a variable called my value of type int,



and next, we're initializing it, here on the same line, with the value of 10 thousand.



The computer has allocated enough space to store an int and it's assigned a



name for that variable of my value. If you're pretty new to programming,



you may be asking, what actually is an integer and what values can be stored in an integer?



An integer is a whole number, meaning it doesn't contain a fractional element or a decimal.



There's a specified range of values allowed for the int, which is true for most data types.



What this means is that the allowable range of values is not infinite.



There's a defined minimum and maximum value, for an int. Actually, that applies to each



numeric data type, meaning you can't assign a number bigger or smaller than those ranges.



So how do you know what that range is, and is it important to know?



We can get that range in code for each data type, and there may be times when we'll need



to test if a value is in the range. Let me first show you how to get the valid range for an int.



I'll type this into JShell then we'll review it. What are we doing here? You maybe could guess,



based on our previous discussion, that this is the minimum value of an int data type. You can



see that we created a variable of type int and named it my min int value and we've assigned it



an expression. This expression, integer dot min underscore value, will probably look unfamiliar



to you. That's because integer is a wrapper class, which I'll explain shortly, but for now,



you just need to understand that there are some values stored on this class, which we can retrieve



by this mechanism. Here, we're getting the minimum value allowed for an integer data type.



Let's press enter and see what that value is. This is telling us that the minimum value you



can assign to an int is minus two billion, one hundred and forty-seven million,



four hundred and eighty-three thousand, six hundred forty-eight.



You cannot try to assign a value less than that to an int variable, and I'll get into that shortly.



But first, let's get the maximum value by doing the same kind of thing,



using a slightly different expression: And we see that JShell shows us the maximum



value that can be assigned to an int data type. Now that we know the min and the max values, we



can say that the range of values which an int data type can store, is from integer dot min underscore



value, to integer dot max underscore value. Let's use some of the programming skills



we've learnt so far, to print out that range as a statement, to the JShell window. As part of that,



I'm going to show you how to display both text and numbers, on the same line.



First, let's just print out the minimum value in a statement to the console. Instead of just



printing the variable as we've done before, we're going to first print a label saying what it is,



then print its value. So we'll start by typing: The plus sign, when used in



system dot out dot print will print different data types together as a single line of text.



In the example: System.out.print("Integer



Minimum Value = " + myMinIntValue); We want to print a label before a



numeric integer value. Whatever follows the



plus sign in system dot out dot print here is converted to a string by Java, and concatenated,



or appended to the string before it. This is perfectly valid syntax in Java.



And pressing enter will print out a more informative message.



So, it's a handy way to combine text with numeric output. There are better ways to print this out,



but at this point in the course, the use of the plus operator is perfectly acceptable.



Let's do the same thing, but instead of using our variable, we can just use the expression,



integer dot min underscore value: This gives us the same output as before,



so we can use either a variable or this type of expression here.



And now, let's print the range for the integer in a single line of text for our



users. First, I'll do this on a single line: It may not be perfectly obvious looking at this



statement, but here we're outputting a string literal, including a left parentheses we want



printed out, then we follow that with a numeric value, the minimum value. Next, we print the word



'to', and then the maximum value. We added a final string literal, a single closing parentheses,



to make our line of output more readable and finished with the final parentheses



and a semicolon, to complete the statement. Pressing enter, you can see we have nice



succinct output, even if that code to achieve it, looked a bit ugly.



Let's look at that statement again, but this time, I want to do the same thing,



but on multiple lines. Hopefully, you will be able to see more clearly, how many times this



one expression is using the plus operator. When I introduced JShell, I talked about when you leave a



Java statement unfinished and press enter, JShell prompts you for more code, with the dot dot dot,



and right arrow prompt. So let's try this now: System.out.print,



left parentheses. And press enter. JShell is waiting for us to type something in,



so let's go ahead and type in the rest of the statement: I'll press Enter after every



line you see me type. and on the next line,



closing parentheses, semi colon Looking at the code this way, you can see the



expression is made up of three string literals, one of which is a right parentheses only.



There are four plus operators, as you can see, and two integer values.



Again, not really elegant, but pretty useful if we don't want to constantly be outputting



small amounts of information. Pressing enter gives us the same result as before.



Let's talk about why we're using 'Integer' in the expression to get the min and max value.



That's because int is a primitive type that really only gives us the option to set the



variable's value. Integer, on the other hand, is what's called a wrapper class.



Let's talk about wrapper classes now, but first, to understand them, we need to briefly



talk about classes. So what is a class?



A class is a building block for object-oriented programming and allows us to build custom data



types. We'll be talking extensively about classes in future videos.



Java uses the concept of a wrapper class for all of its eight primitive data types.



A wrapper class provides simple operations, as well as some basic information about the



primitive data type, which cannot be stored on the primitive itself.



We saw that min underscore value and max underscore value are elements of



this basic information, for the int data type. The primitive types and their respective wrapper



classes are shown in the table below. You can see there that in general,



it's pretty easy to remember the wrapper class name for your primitive data type. It's the



same name but with an uppercase letter at the start. The wrapper classes for char and int,



character and integer respectively, are the only two that differ in name,



other than that first capitalized letter, from their primitive types.



We'll talk more about these later on, but for now, let's take a look



at int and the integer wrapper class. In the case of an int, we can use integer,



and by doing that, it gives us ways to perform operations on an int.



In the code we just reviewed, we were able to use min underscore value and max underscore value on



the wrapper class Integer to discover the minimum and maximum range of numbers that



can be stored in an int, as we saw when we printed out these values previously:



Min underscore value is the smallest value we can set an int to,



and max underscore value is the biggest. Just to confirm that, let's try adding just



one to the max value, and see what happens. So to do that, I'm going to type:



I put the calculation my max int value plus one, in parentheses, to hopefully



make it clear, what we are trying to do. The code is attempting to add one to the maximum



value, which technically shouldn't be possible because we've established that my max int value



already contains the maximum value of an integer. Press enter and let's see what the output is.



Look what's happened to the busted max value. We've assigned the maximum value plus one to it,



so how is it possible the outcome is a negative number?



This is called an overflow, meaning, we tried to put too large a number into the space allocated by



the computer for an integer. It didn't fit, but the computer tried to fit it anyway. Instead of



throwing an error, it overflowed. The reverse is true as well,



meaning that trying to put in a value that is less than integer dot min underscore



value will result in a similar problem. Press the up arrow key, and the change



the plus to a minus. My max int value to my min int value. And will change the text Max to min.



Can you see what's happened there? In the case of our busted min value, trying



to subtract one from the minimum value, we've ended up cycling around to the maximum value.



This concept is called underflow this time, and not overflow.



If you try and put a value larger than the maximum value into an int, you'll create



something called an overflow situation. And similarly, if you try to put a value



smaller than the minimum value into an int, you cause an underflow to occur.



These situations are also known as integer wraparounds.



The maximum value, when it overflows, wraps around to the minimum value and just



continues processing without an error. The minimum value, when it underflows,



wraps around to the maximum value and continues processing.



This is not usually behavior you really want, and as a developer, you need to be aware that this can



happen, and choose the appropriate data type. Imagine, if you had a counter for your website



visits and set it to an int data type. If you were fortunate to reach that maximum value,



which we said was about two point one four billion, your counter would then go negative.



As we'll see in the next video, there's a data type to hold much bigger numbers if we need them



to avoid situations like this. Ultimately, as programmers,



it's our responsibility to use the appropriate data type, and also to ensure the range of



numbers we're trying to store in that data type is really within the supported range.



In addition to the problem of underflow and overflow,



assigning a literal number that's outside of the valid range for a variable will throw an error.



Let's take a look at an example. First, let's print out what that maximum value is again:



System.out.print, left parentheses, double quote, integer maximum value, space equals,



space, double quote, plus, integer dot max underscore value, right parentheses, semi-colon.



And now, we want to assume a value that is the max value plus one:



Note here that the number we've typed in ends with an eight, and not a seven. So it's bigger



than the maximum value by one. So, what we've tried to do here,



is assign a numeric literal to my max int test that is bigger than the maximum value.



It failed, and as a result, we get an error. In this case, the number is too large.



You might be asking, what's the difference between this and what we did earlier?



An integer wraparound event, either an overflow or underflow, can occur



in Java when you are using expressions that are not a simple literal value.



The Java compiler doesn't attempt to evaluate the expression to determine its



value, so it does not give you an error. Here are two more examples that will



compile and result in an overflow. The second example may be surprising. Even



though we are using numeric literals in the expression, the compiler still won't try to



evaluate this expression, and the code will compile, resulting in an overflow condition.



If you assign a numeric literal value to a data type that is outside of the range,



the compiler does give you an error. We looked at a similar example previously.



This might seem like a confusing difference right now, but don't worry,



we'll be talking about expression results more in the operator's section of the course.



Let's just correct that last statement now by changing the last digit back to a 7:



And this time, we don't get an error. So any number literal you use, similar



to what we've shown in the code samples so far, is assumed to be of type int by Java. There are



ways to tell Java otherwise, using a character at the end, which we'll get to in the next video.



I want to point out one other feature in Java for numeric literals, which is valid



syntax because you might find reading large number literals somewhat hard to understand.



In Java, you cannot put commas in a numeric literal.



For example, the following is not valid syntax. So Java provides an alternative way to



improve readability, the underscore. You can put the underscore anywhere you might



want a comma. However, you can't use an underscore at the start or end of the numeric literal.



Just like how we would use commas in a document, to make numbers more readable when we write them



out, we can use underscores in Java code to achieve the same goal for any readers of our



code. So let's walk through what that looks like: so we'll press the up-arrow key to display the



previously typed in code then we'll add the first



underscore before the last 3 digits We'll Add another underscore before 483



and then the last one, we'll add after the first 2 So you can enter it in that format if that's



easier for you to understand and to read at a glance. Its more useful for larger numbers.



Let's end the video here, and in the next one, we'll discuss three more primitive types,



the byte, the short, and the long. I'll see you in the next video.




**Understanding Byte, Short, and Long Data Types and Their Width in Java**



In the previous video, we saw that Java has eight primitive data types and that



the wrapper classes give us extra options. Of these primitive types, half are used to



store whole numbers, numbers without a fractional or decimal component,



one of which we've explored already, the int data type.



In this video, we'll take a look at the other three whole-number primitive data types.



We've previously said that Java has four primitive data types used to store whole numbers. These are



the byte, the short, the int, and the long. They are listed here in this table by the



range of values the type will support. The byte supports the smallest range,



and the long supports the largest range. So, a short is shorter than an int,



meaning the value range of valid values is shorter, and a long is longer than an int,



and the byte is the smallest of them all. So, let's start with the byte.



In the last video, we output the valid range of the int in a single



line of text, which I'll show again here: I used the wrapper class integer to get



the min value and max value from that class and appended it all in a single line of code.



One reason to do it this way was to show you how to print out different types of data using



the system dot out dot print statement. But also, for the next few exercises,



I think you'll find it's a bit easier to see the ranges in a single statement like I've done here.



The output is printed out in a single line of text:



So how would we go about exploring the range for a byte data type?



You've got it, we use the byte, with a capital B, wrapper class,



and replace 'integer' everywhere in the previous statement we see with 'byte', so let's do that:



The output now is shown with the byte value range: Now you can see that in the case of a byte,



the range is quite small. The minimum value of a byte is -128.



The maximum value of a byte is 127. Given its small range, you probably won't



be using the byte data type much. The byte wrapper class



is the byte with a capital B. Maybe one reason to use a byte is, if you



had a requirement to store a lot of numbers that are within that range, and you want to save memory



or try to boost performance. A smaller data type takes up less space and can be quicker to access.



Generally, however, this is less of a concern today because of the speed of modern computers,



and the amount of memory available, but certainly, it was a factor when Java was first created.



Another reason to use the byte instead of an int is if you wanted to document that you are only



expecting or using a small range of values. This can be a form of code documentation,



in the sense that someone would read the code, and then note you're using a byte data type,



and to then hopefully realise there is probably a good reason for it, and to investigate further.



So that's the byte data type. The next one we're going



to look at is the short data type. Let's do the same thing we did before,



and print the range out in a single system dot out dot print statement. I'll use the up arrow



key to access the previous line and change it to use the short (with a capital S) wrapper class:



As expected, the range of values for the short data type is broader than a byte is,



but not as large as the int data type. The minimum value of a short is -32768,



The maximum value of a short is 32767.



The short wrapper class is the short with a capital S.



Both the byte and the short have the same overflow and underflow issue as the int data type has,



but obviously with their own range of numbers. In other words, if you're using an expression



assigned to a byte and its value might go over the value of 127, you could end up unexpectedly,



with a negative number. Be sure to review overflow and underflow in the previous video,



since this is an important concept. Next, let's have a brief talk about



how much space each of the data types we've talked about take-up in memory.



Size or width is the amount of space that determines or limits the range of



values we've been discussing: A byte can store 256 numbers,



occupies eight bits, and has a width of 8. A short can store a large range of numbers,



occupies 16 bits, and has a width of 16. An int has a much larger range as we know,



occupies 32 bits, and has a width of 32. The point here is that each primitive



type occupies a different amount of memory. We can see that an int needs four times the amount



of space than a byte does, for example. It's not particularly relevant for you to



know these numbers, but it could come up as an interview question, and it's useful to know that



certain data types take up more space than others. Also note that size, in all capital letters, like



min underscore value and max underscore value, is available on the numeric wrapper classes,



so you could use integer dot size, if you forget the size of an integer, for example.



There's one more data type to discuss in this video, and that's of use when



you've got a large number that you want to process, that's larger than the range



available for an int. We call that type the long. I'll go ahead and create a variable of type long:



long, my long value, equals, 100, semi-colon This looks simple but technically what



I've done there is wrong. Well, maybe not wrong, but misleading.



The number 100, by default, is an int. Java allows certain numeric literals to



have a suffix appended to the value, to force it to be a different data type from the default type.



The long is one of these types and its suffix is an L.



This is one of the few instances Java is not case-sensitive. A lowercase L or an uppercase



L at the end of a whole number means the same thing. That the number is a long.



When you're assigning a long literal value to a variable, you need to put



the letter L on the end of it. That tells the computer that it's a long value. Remember,



I mentioned at the start of this video, that Java will default literal whole numbers to an int.



So 100, in this line of code, is really an int being assigned to a long variable type.



Let's make it clearerfor people who'll be reading our code later on. I'll put an L



character suffix on the numeric literal there: And you can see that can be really confusing,



since a lowercase L, looks very similar to the number one, making it look like we might be



assigning one thousand and one, to my long value. For that reason, when you're including the



'L' suffix, I recommend that you use the uppercase L to make it clearly stand out.



We can see that it is much easier to read and recognize with the capital L. First,



we know our literal value is a long data type by the use of the uppercase 'L' suffix,



and we can see it's being assigned to a long variable which will have enough



space to hold that largest range of numbers. A long has a width of 64. Do you remember how



we can check that programmatically? Let's do that here, since I've only



talked about it in a slide earlier in this video. system.out.print,left parentheses, double quote,



A long has a width of,space,double quote,plus,long dot size,right parentheses, semicolon



In this code, we use the wrapper, a long with a capital L and retrieve the size,



or width of that long data type, from its wrapper class. Remember case matters, so we use long dot



size. The capital 'L' on long in this case means we're using the wrapper class. Size in



all capital letters is the way we get the size of the data type from the wrapper.



The size of 64 is obviously double the size of an int data type,



which we established had a width of 32. This means, it's twice the width, or size



of an integer, so the actual number we can store in a long primitive type is huge. It's actually



two to the power of 63. Let's get that range as we've done previously for the other data types:



As expected, the range of values for long data types is much larger than the 'int' data type.



Comparing the long range to the int range, you can see that long is significantly larger.



How big is the difference in the range of values that a long can store compared to the int?



You can see from this table that the difference is quite significant.



The long data type has a pretty big range of numbers there, and yes, it's got the same type



of overflow and underflow problem we've discussed for the other primitive types.



The 'L' character lets Java know you really did mean for the number to be treated as a long.



It turns out, in some circumstances, we don't have to use the L suffix.



Let's swing back to JShell now. Let's assign the value of 100 to my long



value but without using the L suffix this time. The reason this works is that an int will always



fit into a long data type because a long is twice its width, so Java is smart enough to



know that. Java will convert an int to a long, instead of giving us an error.



But if we try to type in a literal value for a number that is bigger than an int can handle,



without the long suffix L, we'll get an error. Let's have a look at that in code,



so you can understand what I'm talking about. We know that previously, we've used the maximum



range for an int as a literal value and assigned it to an int variable.



So, let's start with that, using the max value for an int,



and assigning it to a new long variable we'll create:



long, big long literal value, equals, 2, underscore, 147,



underscore, 483, underscore, 647, semicolon We know that's the maximum integer number.



But if we change that, making the value bigger, which we'll do here by adding an underscore,



and the numbers 2 3 4, to the end of the literal value in the previous statement:



And now, we get an error, as we can see there. Integer number too large.



Clearly, Java is telling us it's still treating that number as an integer.



A numeric literal that exceeds integer dot max underscore value must use the L suffix.



We cannot create a numeric literal in Java that exceeds integer dot max underscore value



without using the L suffix. We'll always get the error; integer number too large.



So if we put an 'L' on the end of the number there, it treats it as a long:



Now, that number has been accepted. Clearly, this is correct. It's



got the 234 which we added at the end. Before we finish the video, let's talk about how



Java is also smart when it comes to converting numbers from an int data type to something



smaller, like a short type. Java can determine if the numeric literal value we're going to use is



not going to fit into the short variable. short, big short literal value,



equals, 32, 768, semicolon Clearly, we've got an error there,



and it's saying: "incompatible types". It requires a short, but found an int,



and the value of the int doesn't fit into a short data type, whose maximum value we've established



is 32 thousand, seven hundred and sixty-seven. But if we change that last digit to a seven,



which we know is valid, because it's the maximum value of a short data type:



The error's disappeared and Java is quite happy to let you assign the literal 32767,



which is by default an integer, to that short variable. In this particular case,



the literal number we've entered doesn't exceed a short's maximum value, and it can actually



fit directly into our short variable. Alright, so let's finish the video here,



and in the next one, I'll start talking more about arithmetic using these data types,



and then I'll talk about another important concept called casting.



So, I'll see you in the next video.


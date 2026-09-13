**Exploring Character (char) and Boolean Primitive Data Types in Java**





In previous videos, we've dealt with whole numbers and also with single and double-precision numbers.



In this video, I want to talk about two additional primitive types in Java;



the char and the boolean primitive type. Let's define our first char variable:



char, my char, equals, single quote, D, single quote, semi-colon.



Here, I've put the letter D in single quotes. That could be any single character, for example,



a letter, a digit, or any other character like an exclamation mark,



a hash, a dollar sign, and so on. It is important to understand that



the char is different from a string. If you recall, we've used literal



strings before, and that's where we've typed some text in double quotes.



We haven't really used a string variable yet, but we'll be doing that in upcoming videos.



This table is a quick summary of the differences between the char and the string.



The char datatype is similar to the string in one sense, in that it allows you to store characters.



But in the case of the char, you can store only a single character, and the string supports many.



The char's literal value is declared in single quotes, while a string uses double



quotes, as stated on the previous slide. So let's go back and try and add a second



character like another D inside the single quotes: You can see the error says, unclosed character



literal, which means too many characters were found. Or to be more precise,



Java expected to find only one character followed by a single quote, but it found an extra character



before the second single quote. It is literally only allowing



us to save one character to a char variable. Let's go back and delete that to make it valid.



You might be wondering now, just how useful is this type?



Why would you want to use a variable that only allows you to store a single character only?



One example might be to store the last key pressed by a user in a game.



Another example might be to loop programmatically through the letters in an alphabet.



Another good use for chars would be to use them in arrays, such as storing an entire history of



key presses from a user's session, for example. We'll be talking about looping and arrays coming



up, and at that time, you'll get a better picture of the char datatype in action.



Chars were much more relevant when Java was released in the late 1990s.



Today, computers are much faster, and have lots more memory, so you



don't need to focus so much on saving memory. For now, keep in mind that if you're going to



be using a char, you can literally only store a single character in a single char variable.



You would think that a char variable, holding only a single character,



would occupy a single byte in memory. It turns out in terms of storage,



that's not the case. A char occupies two bytes of memory,



or 16 bits, and thus has a width of 16. The reason it's not just a single byte



is that a char is stored as a 2 byte number, similar to the short.



This number gets mapped to a single character by Java.



When you print a char, you will see the mapped character, and not the representative number.



And you can use single quotes and a character literal to assign a value to a char, which is much



simpler than looking up the representative number. Imagine if this mapping wasn't done by Java, and



you had to go and look up the value in some lookup table each time you wanted to set or get a char.



How tedious would that be? In some instances, characters aren't represented on the keyboard,



or you may have reasons to use special characters in other languages.



To do this, Java supports a unicode value for characters, which you can use to set a char value.



Unicode is an international encoding standard for use with different languages and scripts



by which each letter, digit, or symbol is assigned a unique numeric value that



applies across different platforms and programs. In the English alphabet, we've got the letters A



through Z, meaning only 26 characters are needed in total to represent the entire English alphabet.



But other languages need more characters, and often a lot more.



Unicode allows us to represent these languages. The way it works is that



by using a combination of the two bytes that a char takes up in memory,



it can represent any one of 65 thousand, 5 hundred and 35 different types of characters.



Let's swing over to a browser. I'll visit s y m b l dot cc. Note that I did not type w w



w dot before the URL. If you add www dot it comes up with a completely different page.



This is a website about, well, symbols. I'll click the three dots at the top right-hand



corner of the screen and click Unicode. Once that loads up, I'll click Character table.



As you can see, this page is a list of unicode symbols.



There are a lot of symbols on the screen, and if we scroll down,



we can see more. These are all unicode characters. There are pages and pages of characters,



and as I'm scrolling down, you can see them all loading up.



I'll scroll back up to see the english alphabet, at the top



Let's find the unicode value for the capital letter 'D'.



I'll hover my mouse over D. A small popup will appear with



two values. In addition, there is a description of the unicode character, and a copy button.



The first value is the unicode character we are hovering over, but below



that you can see U plus, and a four digit code. For the capital letter D its showing at 0 0 4 4.



Let's make use of this code. Now that we have the code,



how do we use it in Java? We'll put the single quotes



as we did before, but this time, because we're wanting to use a Unicode character,



we need to put backslash u and those four digits. char, my unicode, equals, single quote, backslash,



U, zero zero four four, single quote, semi-colon. You can see we've got D printed out there.



Whether you use the literal character 'D', or the unicode representation,



you've stored a number representing the letter D, in the my unicode variable.



Back on the website, if I click the capital letter 'D', it will load a page with more information



about that character. Ignoring all the ads on the page, you can see there is a lot more information.



Just below the Unicode Number field, there is a HTML Code. This would be used if you wanted to



use Unicode on a web page. The interesting bit for us is the number, embedded between the hash code,



and the semi-colon. Sixty eight, in this case. It turns out, the integer 68 is another



representation for the character 'D'. What does this mean in Java? Well,



it means you can assign a numeric literal to a char variable, which we'll do now.



I'll assign the value 68 to a new char variable called, my decimal code



And you can see, this also prints out the character 'D'.



There are three ways to assign a value to a char. Each of these methods represents



storing the letter capital D in memory. So we've seen that we can assign the actual



character D in single quotes, we can assign a unicode value using the unicode notation, and we



can even assign an integer value as we've shown. Let's do the same thing for another character,



but this time, I'll make it a challenge for you. Create three char variables to store the



character for the question-mark symbol my simple char should be assigned the



literal question-mark character. my unicode char should be assigned the unicode value



for the question-mark. my decimal char should be assigned the decimal value for the question-mark.



Print all three variables in one statement that starts with the label 'my values are '.



Hint: Use the symbl.cc website. // \&lt;\~\~ hint, use the s y m b l dot cc, website.



OK, so pause the video now and give that a try. When you've completed that challenge,



or get stuck, come back and we'll walk through it together.



So, how'd you do on that challenge? Did you manage to print out the 3 question marks?



Let's go back to the website we were using and find the question mark character. I'll click back



to go to the main list of unicode characters. For quick reference, the question mark is above



the capital letter 'O'. I want to point out that the code shows directly below the



unicode character. Hovering or clicking enables it to show better on a video.



I'll click it, to take us to the summary page. And we can see the unicode value which is



U plus zero zero 3 F, and the decimal value, which is decimal value 63.



So now, let's write some code. First, the challenge said to set up a char named my



simple char and assign it the literal value for a question mark symbol, so we'll do that.



I'll define the variable and put the question mark in single quotes.



Next, we need to use the unicode value, which we said was 003F, so let's do that,



remembering that we use backslash U and not the U plus from the chart:



I'll define the variable again, but this time I'll put, backslash u, 0 0 3 F in single quotes



And the third variable is a char named my decimal char, and we're going to set that to a number, 63,



which we also derived from the char. So in all three cases, JShell printed



out a question mark. Now, even though we



can see the values on screen, let's print these out using system dot out dot print:



system dot out dot print, left parentheses, double quote, my values are, space, double quote, plus,



my simple char, plus, my unicode char, plus, my decimal char, right parentheses, semi-colon.



And you can see the output: My values are question-mark, question-mark, question-mark.



And that completes the challenge, so good job if you were able to do that.



And hopefully now, you understand why you'd use a unicode value,



and how to look one up and understand the three ways to assign a value to a char variable.



So now, the final data type I want to talk about is the boolean.



A boolean value allows for two opposite choices; true or false, yes or no, one or zero.



In Java terms, we've got a boolean primitive type, and it can be set to two values only.



Either true or false. The wrapper for



boolean is Boolean with a capital B. Booleans are actually pretty useful and you



will use them a lot when you're programming. What we want to do now is create a



couple of boolean variables. Let's go ahead and do that:



boolean, my true boolean value, equals true, semi-colon.



boolean, my false boolean value, equals, false, semi-colon.



So a boolean, in Java can have one of two values, it can either be true, or it can be false.



So what would be a practical example of using a boolean in a program?



Well, let's just say you wanted to know whether a particular customer was over the age of 21 or not.



We might create a boolean like this: boolean, is customer over



twenty one, equals, true, semi-colon. You can see what Iâ€™ve done there.



The variable name is a question. Is the customer over 21?



And we've assigned the value of true to that, meaning that, in this particular



case, the customer is over 21. Developers will often use the word,



is, as a prefix for a boolean variable name. This creates a name that seems to ask a question,



which makes reading the code more intuitive. But other prefixes can be just as valid.



Here are some example boolean variable names, such as is married, and has children, that clearly



define what condition is being tested: As we move through the course,



I'll show you common and best practices for naming variables, classes, and methods.



In terms of the boolean, you'll see practical applications for this primitive



type once we start tackling conditional logic. So, at this point in the course, we've covered



all of Java's primitive data types. In the next video, we'll do a quick recap of these types,



then we'll move from just using string literals, like our simple "Hello World"



example, to using string variables. Let's move on now to the next video.







**Recap of Primitive Types and Introduction to the String Class in Java**





in the previous video we looked at the Char and also the Boolean types which were Java's 7eventh



and eighth data types at this point you should be familiar with all eight of Java's primitive



types you've seen a similar slide before and I'll show it again here in review the eight primitive



types that we worked on previously were the bite the short the int the long the float



the double the Char and the Boolean each of these primitive types as I've discussed in



previous videos has got its own size and is used for different purposes the bite as we



found out can only hold a number in the range of - 128 to+ 127 it's entirely possible that



you'll go for years as a Java developer and not even need to use the bite ever the most



common primitive types you'll use will be an INT a double and a Boolean and you'll probably



from time to time need to use a long and a Char but not as often the short float and



bite data types are rarely used if at all as you get more experienced in Java you'll learn to use



the right primitive type for a given Computing problem and that's actually all part of becoming



a programmer so just to reiterate those are the eight data types we've looked at all primitive



types built into the Java programming language as we go through the course further you'll



find that there's a way to create your own data types which in Java are called classes



this slide demonstrates that most Java programs use some combination of the data types shown in



this diagram you'll use Java's primitive data types Java's built-in classes and probably some



combination of your own custom classes and classes created by other people you've already been



introduced briefly to a few of Java's built-in classes these were the wrapper classes and you



may remember I mentioned big decimal as a better alternative to floating Point Primitives when work



with currency I've also said that classes are special data types that can provide



extra functionality like the wrapper classes that contain more information than a simple



primitive type what's interesting about classes is that you can combine data types like maybe



one or more ins doubles booleans Etc and create a sort of super data type which again are called



classes in Java there's an entire section in this course on classes so I'm not going



to go into more detail about them here except as it relates to the next type on our list the



string the string is a data type in Java which is not a primitive type as this slide clearly



shows it's actually a class but it enjoys a bit of favoritism in Java to make it easier



to use than a regular class in other words it's treated a little bit differently and you can use



it in ways you wouldn't normally for most other classes so what is a string a string is a class



that contains a sequence of characters if you recall in the case of the Char primitive type



it can contain only a single character character either a regular character or a Unicode character



a string on the other hand can contain a whole set of characters in fact a large number of characters



it's technically only limited by the amount of memory space or Heap space in your computer which



turns out to be the max underscore value of an INT and if you recall when we were looking at



ins that maximum size is around 2.14 billion so that's a heck of a lot of characters that



could potentially fit in a string let's jump back into jshell and take a look at how to use a string



string with a capital S my string equals double quote this is a string double quote semicolon



note that I type string with a capital S it won't work unless you do that as you can see a string



is very much like a primitive type in terms of how we use it meaning we can just assign



a string literal to it let's go ahead and print out our new string variable but let's preface the



string with a little descriptive message I'll use system.out.print left parentheses double



quote my string is equal to space double quote my string right parentheses semicolon so here



you can see we can also output a string literal and a string variable by using the plus operator



in fact you may remember we did something similar when printing string literals and other variables



in one statement you can also do something similar using the plus operator when assigning



an expression to a string variable so let's do that now my string equals my string plus double



quot comma space and this is more full stop double quote semicolon let's print that out



again by scrolling back through our jell history and using the system.out.print statement we used



previously you can see that by using the plus operator we get a result that is the original



string plus the text we specified after the plus sign when the plus operator follows a string



it's technically called the concatenation operator because the text that follows it



is concatenated to the previous text and returned as a result of that operation and we can see from



the output that my string is now equal to the full text this is a string and this is more you



can also use Unicode characters with strings so let's test this out and add a dollar sign using



a Unicode character I've already looked up the Unicode character for a dollar sign using the



website I discussed in the previous video the unic code value for the dollar sign is 0024 I'll set my



string to the text I wish I had $1 million using a Unicode character for the dollar sign I could have



simply typed in the dollar sign character instead of using the Unicode value but there are times



when symbols aren't available on your keyboard and you'll want to look up their Unicode value



and use them like we have here this string looked a bit confusing because it was hard to see where



the Unicode value ended and the numeric value 1 million started I did it this way because I



didn't want a space between the dollar sign and the dollar amount so you can see that string has



got some versatility we can use a combination of Unicode characters and regular characters



unlike the Char data type we can actually have a significant number of characters all right let's



try something different now there is a way in jshell to run a couple of lines of code multiple



statements all at once without declaring them on the same line to execute multiple lines of code



as a set in jshell first start with a left curly brace and press enter jshell display and Al turn



it prompt as you can see Three Dots and a greater than sign you can add a statement and press enter



until you've added as many statements as you want to run finally add the right curly brace noting



that a semicolon is not required after this brace once you press enter after the closing brace all



of your statements will run in the order you put them so let's do that here first we enter



a single left curly brace and press enter I'll Define a string called number string and assign



it the string literal value 25055 and hit enter I'll append a literal string to number string by



typing number string equals number string plus double quote 49.4 5 quot and hit enter finally



I'll print out number string pausing here we can see we created three statements each ending



in a semicolon when we do finally type in the right curly brace these three statements will



be executed in order this is similar to typing them on the same line however when we execute



code this way jshell won't print the value out of each statement like in the examples above instead



it just prints whatever we put in system.out.print statements this is how a code editor works and



you will see in the next section when we start using intellig before we add the closing brace



and execute it what do you think the result will be will the two numbers be added together in other



words if our math is correct and we are adding 200 15.55 and 49.4 the result should be 300 what do



you think will we see 300 in the output let's find out I'll add a right curly brace ending this group



of three statements and press enter which then executes them now we see that in fact we don't get



the number 300 at all instead we've got the 250.53 and after that we've got 49.4 before I talk about



why that happened I want to enter those three statements on a single line I'm typing the same



three statements as before but on a single line so we got the final system.out.print statement with



the same result but you'll see as we've seen in all the videos to date that the variable values



will output for the first two statements this is behavior that is specific to jshell there are two



ways to execute multiple statements in jshell put your statements on a single line or enclose your



statements in a set of curly braces this shows two ways to execute multiple statements in jshell



both ultimately give you the same result but if you want each statement to Output its value then



list them on the same line in jshell if you want to emulate a Java program which will only print



what you put in the system.out.print statements then group your statements between beginning and



ending braces okay so that's another jshell hint for you but let's talk about this weird



and unexpected result so what exactly happened here well in fact technically the 49.4 was added



to 25055 but it was added as a string it was concatenated in other words in the same way we



saw previously with the text strings we looked at this occurred because we're not using a numeric



type such as an INT or a long or even a double for that matter we're using a text data type a



string in this case and a string treats the text or digits in the double quotes as text and only



text in general when you type something inside double quotes Java by default interprets that



to be a string literal so there's no numerical calculations done we'll need to convert that to



another type or save it in another type in order to be able to perform mathematical calculations to



numbers in a string in fact let's look at this in a slightly different way let's declare a new int



but we will add a little twist to it int my int equals 10 semicolon in this case you can see that



while we're declaring an INT variable here we put the value 10 in double quotes Java interprets that



as a string and throws an error similar to some of the errors we've seen in the past regarding data



type incompatibility later in the course I'll show you how you can convert what you think is a number



from a string to a number data type but for now anything you type into a string is a string and



you can see it's treated differently to the numeric data types that we saw previously all



right there is another thing I want to show you that might surprise you let's declare a couple



more variables one string and one int I'll assign a string called last string the value of 10 and



the value of an INT my int to be 50 so we have two new variables one a string and the other an



INT now let's try to add those two new variables together last string equals last string plus my



int notice that what we are actually adding is a numeric data type of int to a string what do



you think is going to happen when this is executed what output are we going to see will Java throw an



error let's execute it and see what we get you can see there that last string is now equal to 1050



so even though we've used an integer data type now in the second part of the expression we've



still ended up concatenating the integer to the string value 10 our string variable last string



is still configured and set up as a string in ja however the plus symbol is an operator which can



mean addition if used for numbers but it also means concatenation when applied to a string a



string plus anything else gives us a string as a result concatenating anything after the



string as text to the initial string so keeping that in mind Java is smart enough here to say



okay I know that the integer you've defined my in is actually an integer but I also know that



you're trying to add it to a string and of course last string was in fact declared as a string what



Java does in this case is it actually looks at the contents of my int and converts the value



50 in this case to a string and then this is concatenated to the string value 10 and



that's why we're seeing 1050 as the value of our last string so my int isn't treated as a number



in the true sense rather it's treated purely as text by the computer here because it knows it's



being added to the string last string so the myant variable itself is still an integer variable with



an integer value but because it's being added to a string the Val is treated as a string and we can



continue on with this example let's do something similar with a double I'll Define a double called



double number with the value 12.47 and then add that to last string you can see here last string



is now equal to 1050 12.47 so the text value of our double got appended to it the behavior was



exactly the same as when we used an integer Java treated the double value as text and appended that



as text to our string variable what we're doing here is only a very Elementary way of dealing with



strings and adding to strings in later lessons we're going to look at more advanced features of



a string because we can do all sorts of things with a string using strings and manipulating



strings will be something you do in every program you write so the string class and its features are



important to know a string is different from many other classes because the sequence of characters



in The String are immutable what does that mean immutable means that you can't change a string



after it's created so in the case of the code we've written the value 12.47 is technically not



appended to the current contents of last string instead a new string is created automatically by



Java the new string consists of the previous value of last string plus a textual representation of



the double value 12.47 the net result is that our variable last string has the concatenated



value however Java created a new string in the process and the old one will get discarded from



memory automatically now don't worry if that makes no sense at this time it will later in the course



for now I just wanted to point out that strings are immutable and that will make more sense and



become more important as we progress because of this the code that we just wrote there was quite



inefficient because a new string gets created for every operation a pending values like this



is inefficient and generally not recommended Java provides another class that is more efficient



if you are doing a lot of a pending of multiple strings or values the string class is immutable



but can be used much like a primitive data type the string Builder class is mutable meaning it can



be changed but does not share the string special features such as being able to assign it a string



literal or use the plus operator on it both are classes but the string class is in a special



category in the Java language Java provides the string Builder class in its library to address the



inefficiency of the immutable string when you are creating a large amount of text from many



smaller parts as mentioned unlike a string the sequence of characters in a string Builder class



can be changed we'll be revisiting the string and the string Builder classes in much greater detail



after we develop a better understanding of how classes work in Java but I've also shown you the



string concatenation operator today because you'll come across code in the style we've used in this



lecture using operators like plus to concatenate string values is code you'll probably see it's



useful for you to know how to do things this way but it's also important to understand there's a



better way to do it so stay tuned for more on strings and string builders in future videos



the string is so intrinsic to the Java language it can be used like a ninth primitive type but it's



not a primitive type at all it's a class from your point of view you can treat the string like a nth



primitive typee by directly assigning a string literal to it and using the plus operators with



it the Java language set the string to be used in a simpler fashion compared to traditional



classes you'll be using a lot of strings as we progress through the course and in general in



your working Life as a Java programmer the plus sign and other mathematical symbols like the minus



multiplication and division signs are examples of operators which we've only briefly mentioned



so far we're now going to look at operators in more detail let's move on to that next video now


**Your First Java Program: Displaying "Hello World" and Basic Error Handling**





In this video, we're going to print some things to the screen,



to get our first real taste of programming. The Java Shell Tool, or JShell as its referred to,



is the tool we'll be using to achieve this, and is the one I talked about in the previous video.



Be sure to watch that previous video if you need a recap, on how to access



it for your operating system. For best results for this course,



make sure you follow along as closely as you can, typing the code segments



I'll be typing, into your own JShell session. Nothing beats learning from your own mistakes



and figuring out how to get a line of code to work, when it wasn't working before. This emulates



real-world problem solving, and you'll find when you type in your own code, you'll be making all



kinds of typos, or omitting or overlooking some characters that are required. This is the best



way to learn, and pick up all the nuances of any programming language you're learning,



Java included. If you do encounter a mistake on your own, pause the video and try solving



it on your own. If that doesn't work remember the working code segments are always available



in the resources section of every video. In addition, I'll be talking through and



demonstrating, some of the most common mistakes we all make in Java. If you're making these mistakes



and correcting them on your own, you won't forget them easily. If you're like most programmers,



figuring out how the pieces fit and seeing the result of the code working



after a bit of a struggle is the best part of programming. Coding is a lot of fun,



and I promise you'll feel the same way as we progress through this course together.



All right, so let's get started. It's always been a tradition when



you're learning a new programming language, to create a simple program that outputs the text,



"Hello World". This lets you test all the parts that are necessary to create a successful program,



with very little investment of time, or knowledge of the language. It's the first step and honestly,



even after over 40 years of programming, I still get that first feeling of achievement, when I've



accomplished this step in a new language. If you can print "Hello World" to the screen, you're on



your way to bigger and better things. Let's do that now.



First, I am going to open a command line window for my operating system, and from here,



I'll invoke the Java Shell tool. I'll press enter.



JShell is running now, and from here we can type in our first code segment.



Remember to type in the following code exactly as you see me type it:



This line of code is called a statement in java. Let's pause for a moment and



talk about statements. What is a statement?



It's a complete command to be executed. It can include one or more expressions,



and I'll be talking about expressions and related topics, as we progress through the course.



What we've typed above, is a command to print some information to the screen,



using syntax provided by the Java language. We specified what we wanted Java to print in



the parentheses and double quotes. In this case thats the text "Hello World". Effectively we're



telling Java to print out the words as we've specified them in the quotes "Hello World".



After we press the enter key, the program executing the code should



print that text to the screen. In this case, the output is printed on the very next line.



And there you have it. We've executed our first line of Java code, successfully printing out



'Hello World' to the screen. I hope you can feel that moment of satisfaction I always feel at this



moment, knowing that your system is ready and able to execute whatever new commands you can



now learn, and you're at the beginning of a fun and interesting journey, getting a computing



device to do what you want it to do! Don't forget that Java is 'Write once run anywhere',



and that this little program you've created can be executed on any device that runs Java.



I've got a bit of a challenge for you here, and the challenge is to see whether you can



modify the statement we typed below, so that instead of it printing out



"Hello World", it prints, "Hello Tim". Looking at this code, how do you think



you'd go about achieving that? Let's see if you can figure



that out, and get that to run. You have a few options here. You



could just retype the entire line in from scratch, with the changed text to print out. But we want to



modify the statement, not type a new line in. To modify the existing line press the up arrow



key. Remember that in JShell, you can see the history of the lines you've previously typed,



using the up and down arrows. Pressing the up arrow now, will display the code we first



typed in, so make the change, and then press enter to see the result printed to the screen.



Click pause on the video now, and try that out, and I'll see you when you get back.



Welcome back, hopefully you managed to make that first change.



Let's go ahead and modify the code, to change the output.



All we need to do is to press the up arrow key, to display the previously typed in code:



Then I'm going to delete the word "World": And to make sure that it's grammatically



correct, I'm going to use a comma, then a space, and then type Tim:



With the statement modified, we can press enter. There's the output, "Hello Tim". This is another



point of confirmation for a lot of programmers. When you make your first change to a line of code,



and you get to personalize "Hello World" to whatever you want.



Congratulations if you managed to make that work! These are the first steps almost all programmers



make, in almost every programming language, regardless of their experience. If you had a



problem getting it to work, don't worry, the more you work at this course, the easier things will



be to understand. So hang in there! Every video builds on the content in previous videos, and



you'll have lots of opportunities to explore these concepts further, so you won't be left behind.



Next, let's look at some common errors you might get, when typing in Java code.



We'll start with what happens, if you forget to add the closing parentheses.



I'll press the up arrow key, to scroll through the JShell history, and I'll find



the previous line we typed in. Next, I'll remove the closing parentheses, to see what JShell does:



OK, so what does this somewhat weird looking new prompt mean? Well, JShell is assuming



we haven't finished typing in all of the code (since we haven't closed the parentheses set),



so it waits for us to type something in. I can now go ahead and add the closing



parentheses here on this line, and the semi colon (completing the statement), then press enter:



And there we have it. It now prints out "Hello Tim", as before.



Another common mistake is when you forget the closing double quote,



so let me press the up arrow again, then remove the closing double quote after Tim.



Here, you can see that JShell was a little less friendly and didn't give us a chance to end the



text properly, as it did with the closing parentheses. Rather, it gave us an error,



"unclosed string literal". If you're new to programming, that error probably



doesn't mean anything, but text specified in double quotes, is called a string literal,



and we'll learn about literals in an upcoming video. What JShell is trying to tell us,



is that we started out defining a string literal, which is what you do when you use a double quote,



but we didn't 'finish the job correctly'. We didn't add a trailing double quote,



which is why we get this error. I'll again press the up-arrow key,



and add the double quote back in, properly closing our string literal, the text, 'Hello Tim'.



The error's been resolved now, and we get the output "Hello Tim".



I want to show you one more common error, before we move on to the next video.



If you're coming from other programming languages such as python, or javascript,



replacing double quotes with single quotes, is perfectly fine, but in Java it's not valid,



and you'll end up getting an error. Lets see what happens if I do that now.



You can see here, that the error is similar to what we got when we forgot the trailing double



quote, but now the error message is warning us about something called a character literal.



Once again, character literals will be covered in a future video, but essentially what it's



saying is that single quotes are used for characters, and we're trying to use



it as a String literal, which is not allowed. I'll change that back now just so it's correct:



These were a few examples, of errors that might occur, when your coding in JShell. Let



me encourage you to play with this line of code in JShell, in as many ways as you can think of,



to see what kind of errors you might get, or what kind of output is produced. This is the



whole point of JShell. To provide you with a safe place to test code segments. Remember that the key



combination 'control c', on Windows, or 'control d' on a mac or a linux machine, should cancel what



you are in the middle of, and get you back to the JShell prompt. Typing forward slash and the word



'exit', or forward slash with the shortcut text E X, will end your JShell session, if you get stuck.



All right, so well done, you've successfully executed your first program in Java,



and maybe even made some mistakes you've learned from! Let's now move on to the next video.









**Introduction to Variables, Keywords, and the Integer (int) Data Type**



In the previous video, we saw how to write our first code in Java. It was pretty basic,



to say the least, printing out some text on the screen, but it was a good place to start.



In this video, I want to talk about variables and keywords.



A keyword is any one of a number of reserved words that have a



predefined meaning in the Java language. In Java syntax, all code is case-sensitive,



and this includes keywords. As you'll see soon, an int, all in lowercase,



is not the same as Int, with a capital I. Here, an int, all in lowercase, is a keyword in Java.



\&lt;TO BROWSER\&gt; Let's take a quick look at all the Java keywords.



By the way, you don't need to memorize this link. Every time I show a web page on screen,



the link to that page is available in the resources section of the video.



On the screen, we can see a complete list of Java 17 keywords. I have highlighted several,



including int, which I just mentioned. Int is short for integer. All of these



highlighted keywords are what is known as primitive data types. We'll be looking much



more closely at these data types, and all the other keywords, in upcoming lectures. For now,



I really just wanted you to have a chance to see all the keywords and get a preview of some that we



will be reviewing in the next few lectures. So that's a bit more about keywords,



which you'll continue to learn more about throughout the course.



But if we want to start getting the computer to do something useful,



we need to start using variables. So what are variables?



Well, variables are a way to store information in your computer.



Variables that we define in a program, can be accessed by a name we give them,



and the computer does the hard work of figuring out where they get stored



in the computers random access memory, or ram. A variable, as the name suggests, can be changed,



in other words, its contents are variable. So what we have to do is tell the computer



what type of information we want to store in the variable, and then give the variable a name.



There are lots of different types of data that we can define for our variables, some of which



I've shown you in the keyword list previously. Collectively, these are known as data types.



As you may have guessed, some data types are keywords in Java. When we get to the



object-oriented features of Java, you'll see that there is a lot of flexibility in creating



your own data types. But in the next couple of videos, we'll explore primitive data types,



which are built into the Java language. So let's start out by defining a variable



of type int, int being an abbreviation for integer, which is a whole number,



that's a number without any decimal points. To define a variable, we need to specify



the data type, then give our variable a name, and optionally add an expression



to initialize the variable with a value. I'll be talking about expressions shortly.



For now, though, let's swing back to JShell, to see how to define our first variable:



int space key, my first number, space key, = 5, semicolon



Note that I've capitalized the word first, and the word number. Later



in the course, I'll explain why I'm doing that. I also put a semi-colon on the end of that line to



complete the statement. So here, we've defined our first variable by specifying a data type of int,



and giving the variable the name of my first number. I've set the value to the number five,



using an equals sign; this is called an equals operator. Remember that the data type "int"



represents an integer value, which is a whole number. Finally, I added that semi-colon to end



the line, to form a statement. The semi-colon ends the line and tells Java, just that. That



the line is complete. So, this entire line, as we've talked about, is a statement. We briefly



discussed statements in the previous video, describing a statement as a complete command to



be executed. Here, this statement is a specific type of statement. A declaration statement.



A declaration statement is used to define a variable by indicating the data type and the name,



then optionally to set the variable to a value. It's common to say type when referring to data



type. They both mean the same thing. Type is often used as a shortcut for saying data



type. Our variables type is an int. The name of this variable is my first number,



and the value we're assigning or initializing our new variable to is five. We can see this value



assignment on the line of output from JShell. So, rephrasing this for clarity, we're declaring



a variable of type int, with the name my first number, and assigning it the value of five.



Note also, where I've used the space key to put a space between different parts of



the statement. This is important so Java knows what part of the statement is a Java keyword,



and what part is a variable name, etc. Assigning a value in this statement, or



initialization is optional here; in other words, I could have omitted the equals five. With Java,



in general, variables have to be initialized before being used, but we'll talk more about that



in an upcoming video. If you're initializing a variable in the declaration statement,



what you type to the right of the equals sign is assigned as the value of the variable.



The part of the statement that follows the equals sign, is known as an expression in Java.



And we will be using expressions a lot as we proceed through the course.



So, what is an expression? An expression is a coding



construct that evaluates to a single value. I won't go into a deep discussion of that now,



because I've got upcoming videos where I'll talk about expressions in a lot more detail.



Now we can see in the output, that Java has read this statement we've created and



executed it. What's happened behind the scenes is that Java has allocated a place in memory,



to store a single whole number and set up a mechanism to allow us to access that memory



location by the name we gave it, in this case, my first number. That's how we'll access it.



So in other words, you don't need to know anything about where in memory this is taking place,



or where Java is storing the contents. To access the number, you don't refer to a



memory location, you refer to a variable name, my first number, in this case.



So we're leaving Java to do all the dirty work of figuring out where to look for the value.



All right, so now that we've declared the variable, let's see if we can print out the value.



So looking at the declaration statement, I think we've got a good



idea of what the output value should be. Let's take a look at a challenge now.



So the challenge is to look at creating a new system dot out dot print below the



declaration for my first number, and see if you can figure out how to print out the



value of the my first number variable. So pause the video here, and have a



think about it, then try to print out the value that we've assigned to our variable.



Resume the video when you're ready to see how I do it.



All right, let's walk through it together and discuss how to print the number five



out using our variable. So you may have thought,



when you first started, that the following code would give you the result we wanted:



This is similar to what we did in the hello world video.



As you can see, we in fact get the output my first number as text,



and not the contents of our variable that we declared, which of course should be five.



The reason we've got the text my first number printing out,



and not the contents of our variable, is because we put the text my first number in double quotes.



And when we put something in double quotes, it's called a string literal. I talked very



briefly about that in the hello world video. Remember that a string literal has to be



included in a set of double quotes. Now, a literal, unlike a variable,



cannot be changed. A literal is the simplest form of an expression and not a variable.



So here, what we're saying is, literally no pun intended, print out the text, my first number.



And unsurprisingly perhaps, since those were the instructions we inadvertently gave,



we can see my first number being printed. That's why we're getting that value.



I'll edit that line to remove the double quotes before and after my first number:



Recall from the hello world video that double quotes should be used as a set to describe a



string literal, with a beginning double quote character and an ending double-quote character,



enclosing the text. We'll execute this again, without double quotes; this time we should see



the right value. And we can see



the value five showing on the screen. I made sure that I typed the name identically



to the declaration line (matching each character case by case), that is using a lowercase M in my,



uppercase F in first, and uppercase N in number – with no spaces between, and you can see we



got the value five, printed as the output. So now, let's explore what it really means



for a variable's content to be variable. In this line of code called a declaration



statement, we've assigned our integer variable, named my first number, a value of five. Another



way to state this is that we've initialized our variable to five; this is its beginning value.



You can initialize a variable either in the declaration statement, or if not there,



then in a statement made later in the code. In any event, a value must be assigned to a



variable before it can be used, such as in a print statement, an arithmetic operation,



etc. We'll walk through this shortly. For now, let's re-assign the value in



our variable, changing its value from five to ten. This is a very similar statement to the



declaration statement, except we don't specify the data type in the subsequent



statement. We'll double-check to make sure to finish the line of code with a semicolon and



execute that line of code by hitting enter: Next, we'll call the same line of code we



called previously, printing out the value in the variable named my first number:



Here, the value is printed out as 10. To reiterate, the only thing we changed was



the value in our variable. The variable name and the data type remained the same,



meaning the storage area in memory is still allocated to hold the integer value we specified



it would hold, and my first number is still the mechanism we'll use to set and get that



value in memory. In this case, we set the value in that memory, changing it from five to ten.



Let's just for fun, change the value again. Here's your challenge: Change the value of our



existing variable from ten to one thousand, and print the new value out using the system dot out



dot print method as you've seen me do previously. Pause the video here and try that out using



JShell. When you've completed the task or need a little help, start the video again.



Welcome back, I hope you got that to work, but let's walk through the exercise together,



because there are some things I'd like to clarify as we go through it.



So let's assign our existing variable, my first number, the value of one thousand.



Next, we'll call the same line of code we called previously, printing out the



value in the variable named my first number: I could have just typed the previous statement in,



rather than using the up-arrow key. In either case, the value printed should be one thousand.



Now, let's use a JShell command which will list all the statements we've executed and assigned



values to in JShell: forward slash, list



This J shell command lists all the Java statements you've executed in JShell. If you have followed



along, your output should look as follows. We've executed seven statements; the first



statement is the declaration statement, which created and initialized our int variable,



named my first number. In the fourth statement, we assigned a different value, ten, to the variable



my first number, and on the 6th statement we executed, we changed our existing variable,



my first number, to the value of one thousand. But maybe you tried saving yourself a bit of



typing, and you scrolled up to the first line in history, the original declaration statement,



which started with int, and changed that value, 5, to one thousand:



And again, to print it out: If you did that, the result was the same,



the value of one thousand gets printed. There's one important difference, however,



that I want to point out: the statement you scrolled up to and changed, which included the



data type, was actually a re-declaration of the variable, my first number. JShell let you do it,



but a Java compiler and any integrated development environment, wouldn't allow it. It may not quite



make sense yet, but it's important to note that once you declare a variable, you cannot redeclare



it in a normal Java code block, even if you're redeclaring it with the exact same data type.



Let's just review that statement I just made: By declaring a variable again, we are effectively



redeclaring a variable, and in normal Java programming that would not be allowed and



would throw an error. Due to its interactive nature, JShell holds our hand and allows the



re-declaration to occur without throwing an error. For now, just follow along, knowing that



redeclaring a variable for a second or subsequent time is not allowed, and later in the course,



when we switch to a full editor, you'll see what happens when we try and do that. Note



that we can assign a value to a variable multiple times in Java, but it's the declaration (which



includes the data type), that cannot normally be done a second time for the same variable.



In our statements up to this point, the expression defined on the right side of the equals sign has



been a simple literal value, either a string or a numeric literal. But the expression to the



right of the equals sign can be a lot more complex. In the examples we just reviewed,



we used a literal integer value of the number five, and then you saw as we changed it to



the number ten, and then one thousand, but now let's look at something a bit more interesting.



Let's add an expression that is the sum of two numbers, as I'll do here:



I can state what I'm doing here as setting the value in my existing integer variable name,



my first number, to the sum of the numbers, ten and five. You can see, I’ve added an operator by



using the plus sign before the number 5, so it's 10 plus five. I'll explain operators shortly.



So let’s hit enter to execute that now. And we've now got the value fifteen output



on the screen. And if we were to re-execute the print statement, we'd get the same output,



fifteen. I’m not going to do that now, but you're welcome to try that for yourself, if you like.



Java has looked at the expression to the right of the equals sign,



and figured out that it's a mathematical expression, and it's basically calculated



that to be ten plus five, which equals fifteen. And sure enough, we got that value assigned to



our my first number variable, as we can see in the JShell output.



We can get a lot more complex; let's do that just before we finish the video:



That should give us thirty-five, ten plus five, that's fifteen,



plus two times ten (the two times ten is twenty). That's fifteen plus twenty, giving us the final



value of 35. Let's execute that by hitting enter. And sure enough, we get the value



thirty-five showing. So that was this courses



introduction to an operator. In fact, we've got a couple of operators there. We've used the plus



operator, and the multiplication operator. Java operators, or just operators, perform an



operation (hence the term) on a variable or value. Addition, subtraction, division,



and multiplication are four common ones that I feel sure you're familiar with,



but there are lots more operators, and you'll be seeing those as we go through the course.



By the way, if you want to get a downloadable list of all these slides, navigate to the



last section of the course, and look for a lecture called, Bonus Lecture and Information.



Alternatively, the slides for specific videos, are available in that videos resource section.



All right, so let's end the video here, and in the next one, we'll figure out how to use



other variables in expressions. See you in the next video.



 **Using Variables in Java Expressions: A Comprehensive Introduction**



In this video, we'll be continuing on with variables, but this time using variables in



expressions. Remember the expression is the code segment that is on the right side of the equals



sign in an assignment or declaration statement. This code can be a simple literal value, like the



number 5, or it can be a complex mathematical equation using multiple literal values and



mathematical operators. In this video, we'll look at how to use variables to replace literal values.



Up until now, we've only used literal values in our expressions,



and we've also used several operators, such as in the example we used in the last video shown here.



This expression comprises two other expressions. The first expression is 10 + 5, and the second



expression is 2 times 10. The third expression, the one assigned to my first number, takes the the



sum of the first and second expressions. If you've quit JShell and come back, please



go ahead and pause the video, and declare and initialize my first number as shown in this slide.



We'll be using this variable again, shortly. Next, we want to create two more variables,



so I think this is a good time for a challenge to get you to do just that.



The challenge is to create two additional variables in JShell.



Here's what we need: One variable called my second number,



which is an int, with a value of twelve. And another variable called my third number,



also of type int, with a value of six. So pause the video now, set up the



declarations for our two new variables in JShell, and come back when you're ready to move forward.



Welcome back. How did that go? Hopefully, you got that to work, but let's go over it now.



Before we start, I am just going to redeclare my first number as described in the slide:



We'll go ahead and add our two additional variables. First,



we declare and initialize my second number, as I'll do here:



And next, we declare and initialize my third number as follows:



And you can see from the output, that JShell created these two new variables for us.



Before we proceed, let me tell you about a JShell command that will list any variables



that we've created in our session. Try this, if you've just followed



along and successfully created those variables in your JShell session:



type in forward slash, var, then press enter You can see that after executing that command,



JShell lists the three variables we've declared, their data types, and their values. This is a



handy way to keep track of what variables are available for our use in future code snippets,



which we might want to create in JShell. Your own variables that you created during the challenge



should look like the output shown here. So now, we ask the question. Is there



a way that we can sum the values of all three of these variables, my first number,



my second number, and my third number, and assign the result to a fourth as yet undefined variable?



The answer is yes. Instead of using a literal number,



which is all we've really seen so far in the course, let's use variable names directly in



the expression of a declaration statement: In fact, if you have other variables or



expressions that you wanted to add, you could keep going and make this an



extremely complicated expression, Java will quite happily interpret that and be able to



process it as long as the syntax is correct. So now the expression values are as follows.



my first number 35, my second number is 12, and my third number is 6.



Adding up those numbers in our head, that is 35 plus 12 which is 47, plus 6,



makes it 53. Let's try executing this statement by hitting enter and see if we added that



up correctly and get the same result. And there it is 53 showing on the screen.



And just to show you another example, let's change my third number,



which currently is defined to have the value 6, to instead, be my first number multiplied by 2.



Here, what we've done is assign my third number to be equal to the value of my first number,



which has the value 35 if you'll remember, times two, which gives us seventy. So the variable,



my third number, has now got a value of 70, as we can see. Now, if we execute the same statement we



did before for my total, my total should equal 35 plus 12, which is 47, plus 70 which should be 117.



We'll use the arrow keys in JShell to scroll up, which we used previously to find where we



declared and set up the value for my total. I want to continue to try to encourage you



to exercise best practices here, even in JShell. So I am going to remove that int



data type from the statement before we execute it because we don't want to redeclare the variable,



we just want to give it a different value. If you do forget to remove it and just run



the statement as it was originally, it will still work in JShell, and that's ok for now.



I'm going to use the up arrow twice, remove the data type of int at the start



of the line, and then hit enter. And so now, there's the result,



117, as we expected. Alright, so let's end



the video with another challenge for you to try, which I'll describe on this next slide.



First, create a new variable and call it my last one



its data type should be int; it should be set to the value of 1000, minus the value



in the my total variable, which we've just talked about in our previous code segment.



Next, print out the value of the my last one variable on the line after you declare it.



Hint: We need to use another operator that we haven't actually used in the code before,



but if you think about this, it should be easy to figure out which operator you need to use.



Ok, those are your instructions. So pause the video now, see if you can complete the



challenge on your own, and when you're ready, come back and resume the video.



Welcome back. Hopefully, you managed to complete that challenge. As usual, we'll now go through



one solution together and see if my solution matches yours. Let's see what we can do here:



The variable, my total, last had the value 117 assigned to it, so this statement starts with



the literal number, 1000, and then takes away 117, which gives us 883 from the JShell output.



It's good practice to use system dot out dot print to output the value, even though JShell



automatically does that for you. Since the print statement was part of the challenge,



let's print the value of my last one next. So we'll type:



And again we get the value of 883 printed out, as expected.



I just want to end by saying; if you ever get stuck here with weird errors,



one of the first things to look at is the spelling of a variable name, especially the case you use,



meaning, whether it's upper or lowercase. Let's just explore what that kind of error looks like



for a minute in JShell. Instead of outputting the variable my last one with a lowercase M,



we'll change the first letter to an uppercase M: When we try to print that out, you can see that



we get an error, and it's pretty descriptive that the code cannot find symbol, and then on the next



line, it tells you what symbol it cannot find: my last one, which starts with a capital letter M.



The compiler can't find any variable with that specific name, so it can't execute the code.



This is a very common mistake. Java code is case sensitive.



This includes not just keywords and language syntax, but variable names and data types as well.



My last one is not the same variable as my last one with a capital M.



Int in lowercase is not the same as int with the first letter capitalized,



or in all in uppercase, etc. You'll see later on that there is



a need for some things to be in uppercase, but this is relatively uncommon in Java.



Keywords need to be in lowercase. And variables will always be exactly as



you declare them, including capitalization. Remember that case matters in Java code!



The forward slash vars command in JShell can help you identify any misspellings you may have made.



Later on in the course, we'll be looking at best practices



for naming variables because there are specific rules we should follow.



And so, just to recap: In this video:



We used expressions to assign values to our variables and we



used variables we created in expressions. So far, in our expressions, we've looked at



only one data type, which is the type, int. In the next video, we'll be looking at and



discussing some additional data types. I'll see you in that next video.


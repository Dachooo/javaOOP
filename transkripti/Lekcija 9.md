**Creating Your First IntelliJ Project: "Hello World" Java Code Implementation**





So, up until now, we've used the interactive shell included with Java,



JShell, to write all of our Java code. Now we'll start using IntelliJ,



the Integrated Development Environment you just installed, to take another



look at our first program "Hello World". If you haven't installed IntelliJ idea yet, please



go back to the video for your operating system, in this section of the course, and install it,



then come back and continue on with this video. All right, so we've got IntelliJ idea loaded,



as you can see here. I'm going to come up here and click on new project. I'm using the community



edition, the free edition of IntelliJ. If you're running the ultimate edition, you'll find there



are some extra options down the left-hand side. Next, we need to tell IntelliJ something about



the project we want to create, including the name of the project, its location, and the language



our project is using. This is a Java course, so you should always select Java here. We need to



specify the Java Development Kit we want to use, which should default to the JDK we've installed



previously, and have been using with JShell. I'll change the name of our



new project to Hello World . Note that you can use spaces in the name.



It's generally not a good idea to use spaces in either the project name, or the location,



because they ultimately become part of the filename and folder. Spaces in folders and



filenames can cause problems in some operating systems, as well as various



programming tools. I'm going to remove the space. I'm also going to suggest you always capitalize



the first letter of full words in project names, as I do here, with hello and world.



This is called upper camel case, or Pascal Case and visually allows separation of words instead



of using spaces, similar to what we've been doing with variable names in previous videos.



Camel case is the practice of capitalizing the first letter of words in a name for readability,



removing spaces or characters such as underscores between the words. Lower camel



case only capitalises the first letter of the second and subsequent words. Upper camel case,



also known as Pascal case, capitalizes the first letter of the first word as well.



Examples are shown in this table. Note that project name is not a Java element,



it's part of IntelliJ's configuration. More on this in a future video.



To confirm, if you want to save yourself dealing with problems in the future, it's best to avoid



spaces in the project name, and to use camel case, or more specifically upper camel case,



for project names. I am making a point of this because we have been using lower camel



case in the past when naming variables, which we will still do moving forwards.



The next thing we need to specify is a project location. In the previous video,



I configured IntelliJ to use a default location. I used the folder named JMC 17,



and you may have used a different folder name. This will be the parent folder of



all your IntelliJ projects. You don't need to change this now unless you have some reason for



putting one of your projects in another folder. In the language section, make sure that Java is



checked, then you'll come over here to the JDK, and make sure that it shows version 17.



As of the time I'm recording this video, it's 17-point zero point 5. If you haven't



got anything there, or it displays no JDK, or something similar, or you've got a different



version that doesn't start with 17, go back to the installation of the Java development



kit videos in this section, and make sure you download JDK 17. There's also a video in that



section which explains the reasoning for using JDK 17, in case you're wondering, because, of course,



there is a newer version already available. Make sure that "add sample code" is unchecked,



and now we'll press the "create" button. Jet Brains continually update their IDE,



so don't be surprised if the version you see looks a bit different to this.



So now we get this little project pane on the left-hand side opened. This project location,



which I'm going to be talking more about later, is essentially an area that has automatically



set-up by IntelliJ, for our program code. It's where the project files are stored



and is based on the project name and the location I specified a few moments ago.



So I'll come over here and click on this little arrow symbol,



which will open up or close the folder. So, we've got this dot idea folder below it,



which has IntelliJ idea's working files, and this IML file. We don't need to worry



about any of these just now. The are for use by IntelliJ and shouldn't be changed or removed.



It's time to create our first Java class. To do this right-click on the S R C folder,



select new, and then move up here to click Java class, and type in first class. Be sure to type



it exactly as you see it, with a capital F for first and capital C for class with no



spaces and the rest lowercase. Then press enter. You can see that IntelliJ created some code for



us, and that code is showing up in the right pane in the user interface. This is the editor window.



Also notice that under the S R C folder in the left pane, we can see an item,



first class with a little "c" in blue, which is IntelliJ's way of denoting that it's a class.



I'll double-click this tab here to make it full screen so you can see the code better,



as we are done with the project pane for now.



The next thing I am going to do is some code to print something out. I'll move



my cursor to the end of this line and press enter. IntelliJ indents for us.



I'm going to use an IntelliJ shortcut to save some typing.



I'll type P S V M and then press the tab key. IntelliJ generates all that



code for us and positions the cursor ready to type our output statement.



I'll type system dot out print, left parentheses, double quote, hello world,



double quote, right parentheses, semi-colon. So how do we run this code? In JShell,



the code we typed was executed automatically when we pressed enter. If we used curly braces around



multiple statements in JShell, then that code was executed automatically when enter was pressed.



As you might expect from an integrated development environment, which is designed



to make life easier for programmers, IntelliJ provides different ways for you to run this code.



At the moment, we have a few ways to run the code. We can click this green arrow up here on



the right. Alternatively, we can click one of these green arrows to the left.



The other alternative is to right-click and select run, first class, dot main. I'm going to choose



that option, but all of them should work for you. Be sure when right-clicking to right-click in



the second set of curly braces near the system dot out dot print line.



Otherwise, you may not see an option to run. You can see down the bottom right, something's



happening. Let's give IntelliJ a moment. And now this window has shown up and we can see



some output. IntelliJ calls this the run pane and is where the output from your programs shows up.



So, what's actually happened is that IntelliJ, via the Java developer kit, has compiled the



Java program, which needs to be done before running Java code and then displayed the result.



The first line there is the command that IntelliJ sent to Java to execute our program.



Next, we can see the output from the program, "hello world", which came from print statement,



and then it's followed by "process finished with exit code zero".



That means the program completed successfully. Zero, in programming is often used



to indicate success with no problems. So, there you have it. We've successfully



executed our "hello world" java code in IntelliJ. I'm going to stop the video here, and in the next



video, we'll talk about the source code we see in the editor window. I'll see you in the next video.









**Understanding IntelliJ Code Structure: Classes, Methods, and Basic Java Syntax**





In the last video, we ran our first Java code in IntelliJ. In this video, we'll look more closely



at the source code as it's displayed in IntelliJ. A couple of things you'll notice right away is



that there are multiple fonts and colours used to display the code, and it's nicely formatted



and indented. You may or may not have created the text in the file that way, but even if you didn't,



IntelliJ will format it for you to look like this. Looking at the code, we can see on the



screen there, public and class. Those are two Java keywords. Note that IntelliJ highlights those in



bold. Each of these keywords has a specific meaning, which we'll talk a little about now.



The public Java keyword is what's called an access modifier.



An access modifier allows us to define which parts of our code, or even someone else's code,



can access a particular element. Right now, we're going to be using



the public access modifier anytime we create a new class in Java, to give full access.



I'll come back to access modifiers later in the course, once I've filled



in some of the blanks of your Java knowledge. Next, we need to look at the keyword class,



and what we've done here is defined a class. Or more precisely, IntelliJ



created this for us, in the previous video. The class keyword is used to define a class.



The class name will be the text following the keyword, so FirstClass in this case.



Notice the left and right curly braces, they are used to define



the class code block, or class body. To define a class, IntelliJ defaulted



to using public as the access modifier. Then the keyword class was added, and the class



name specified. First Class is the class name here. Finally, left and right curly braces,



were added, which define the class body. Anything inside that body, between the



left curly brace and the right curly brace, is considered part of this class. Within a class,



we can have data and code. All right, that's our first



project and our first class defined. You can see we have this line with



public static void main and below that code to print out our Hello World message.



This is the main method. So, what is a method?



A method is a collection of statements, one or more, that perform an operation.



We'll be using a special method called the main method,



which Java looks for when running a program. It's the entry point for any Java code,



and Java looks for this main method to start and run the program.



You can also create your own methods, as you'll see later.



Right, so let's talk about this method, and all the keywords we see here before the method name,



which you can see is named main. Firstly, looking at this statement,



public was the access modifier we discussed when defining the class, and it's the same



principle here for a method, and this means, that other code can access this method.



static is a Java keyword that needs an understanding of other object-oriented



concepts to be explained first, so for now, just know that we need to have static for



Java to find this special method, to run the code that we're going to be adding.



Next, void is yet another Java keyword, used to indicate that the method won't



return any information, but again, I'll be going into detail about that later.



You might be perhaps thinking, "well, why can't I learn all these things now, Tim?".



That old saying you have to crawl before you can walk, comes to mind here. Learning to



program requires a thorough understanding of the basics, before you build on those basic skills,



to go on to more advanced concepts. Rest assured that I'll be going into



all these topics and concepts in a lot of detail, at the relevant point in the course.



Moving on, we've got the left and right parentheses, that are needed



for a method declaration. These lines of code are



effectively a method declaration. So the left and right parentheses are



mandatory, and you can optionally include one or more parameters,



which are a way to pass information to a method. Here you can see there's been one parameter



defined, and I'll talk more about what that means a little bit later.



For now though, to enable Java to define the main method,



it has to be typed exactly like it's typed here. If you change this, you will get an error,



usually highlighted in red. I'll change the p in public to an uppercase p.



IntelliJ is telling us now, that it doesn't understand the word Public,



now that it has a capital P. But if I change that back to



What it was, which was a lowercase p, it's then quite happy, and the error disappears:



Keep that in mind. Often, you'll find errors that are related to you typing



something in uppercase or lowercase, when it should have been something different.



If you have a look at the main method declaration again there on line two,



notice that the left and right curly braces, which you've seen in a previous JShell video,



was a way to group statements together. Another name for that is a code block, and in



this case, the code block is the method body. The code block is where we put our code.



So at the start, just to recap on that, we've got a class.



A class has got the body block of code, which is the left curly brace and the right curly brace of



the entire class, and our method is effectively within that class. It's got its own code block,



which is a group of code, or statements that are unique to that specific method.



All right, so let's make some edits to the code on Line 3, similar to what we did in



the JShell "hello world" video. I'll start by removing the double quote at the end.



We immediately get an error on the right-hand side, with that little indication to say



that it's an error. We can see also that IntelliJ has underlined the text hello world.



Obviously, IntelliJ is trying to tell us, even before we run it, that something is wrong with



this code. Let's go over to the underlined text and see if we can get more information.



Note that when we hover the mouse over this text, a popup is displayed, which says at the top,



Illegal line end in string literal. Although this is worded differently than the error



JShell gave us, it means the same thing. That the text used as a String literal needs to be



enclosed by a set of double quotes. I'll put the quote back again,



and the error disappears. And now, let's revisit the first



challenge I gave you. Remember that the challenge was to see whether you could modify the program.



Instead of it printing "hello world", print "hello, tim",



or hello whatever your first name is. Make the change and then click on the green arrow,



the green run icon, to start the program and test it out to see whether it works.



So click pause on the video now, so you can actually go away and try that.



When you're ready to come back and check on the solution, come back and restart the video,



and we'll go through it together. Pause the video now.



All right, so welcome back. Hopefully, you remember how to do



this and managed to make that change. Let's remove the text World, and replace it with comma, Tim.



And then I'll click run to execute the program. And there it is, there's the output, "Hello, Tim".



All right, so that's it, our first program is now complete, completed



in IntelliJ instead of the JShell terminal, and congratulations if you managed to make that work.



And even if you didn't, if you got an error, we'll start talking more about errors in upcoming



videos. Making mistakes is very normal when starting out learning to program.



Next, I want to show you again how to create a class in IntelliJ.



So first, we want to right-click on the S R C folder in our hello world project,



and you'll see new as the first option. Select that, and now you have quite a few options,



the first of which is 'Java class'. Clicking that will give you a popup, requesting a name,



and highlighting the class option below it. I'll put in a name, I'm going to call this



second class, and press enter after that. You'll see second class listed under the



S R C folder with a little blue C icon beside the name, indicating it's a class.



And now you can see in the edit window, we have our class named second class,



and other than that, the first line and the curly braces are pretty much empty.



In this instance, I'm going to open the first class dot java



file in another editor and show you how to copy and paste code from an external java file.



If you recall, the first class Java class appeared under the S R C folder in IntelliJ.



The actual files are stored in a folder on your computer and displayed in IntelliJ.



We can locate and open that in our operating systems file explorer by



selecting first class in the left pane, right-click to bring up a menu of options,



and select "open in", and then "explorer", and finally right-click to send that file to notepad,



or your default editor. You'll see a similar option if you are running on Linux, or on a Mac.



The point of this exercise is to show you how you would copy and paste code from a downloaded file,



if you only wanted a section of code from a particular class.



Now that we have first class dot Java open in our local text editor, we'll just copy some of



the code, the main method, and then come over to IntelliJ's editor window, and paste it, between



the opening and closing curly braces there: So there is another way to use code created



outside of IntelliJ, and paste some part of it into your IntelliJ class,



and running that will give us, "hello, tim". In general, you'll often be creating a new class,



so let's create another one. We'll right-click on the S R C folder, select new Java Class, and enter



the name hello this time in the class name field. Remember, before we can run our program, we'll



need a main method. I'm going to add that manually now, and then add two print statements to it.



public, static, void, main, left parentheses, string, left and right square brackets, args,



right parentheses, left curly brace. system, dot out dot print, left parentheses, double quote,



hello, tim, double quote, right parentheses, semi-colon. system, dot out dot print, left



parentheses, double quote, hello worl, double quote,



right parentheses, semi-colon. right curly brace You'll also notice I added a couple of blank lines



just to help with the readability of the code. Let's run this code by clicking the green arrow



beside the main method, and after a moment, you can see the outputs printed on the same



line. This is not the format I wanted. I wanted the hello world text to print on the next line,



and not be bunched up on the same line. So far in this course, we've only used



system dot out dot print, but as you can see from this example; if you use



multiple statements like this in IntelliJ, it just prints everything on the same line.



Let's use another slightly different method on system dot out called println.



Now that I have used println, you can see a new line was added after "Hello,



Tim". That's what the L N in println does. It adds a blank line after printing the text. As a result,



you will find that the use of system dot out dot println is much more common compared to print, and



is what we will mostly be using in this course. Right, we now have a basic understanding of how



to work in IntelliJ with java code. In the next video, I am going to introduce you to a



very important Java language keyword. The if keyword. I'll see you in that video.


**Essential Software Tools for Java Development: JDK 17 and IntelliJ IDEA**





All right so that's now the housekeeping done.



Let's talk about installing the software we need for this course.



So we're going to be using JDK version 17 in this course. Now JDK stands for the Java



Development Kit, and it's the software that is used to create and run Java programs.



Now we're also gonna be using IntelliJ IDEA, and that's much



like a word processor, but for creating programs. Now I'm one of the early adopters of IntelliJ.



I started using it way back in the early 2000s, and it's a very powerful piece of software packed with



lots of features, for both beginners and pro developers. The great thing about it is it's



extremely beginner friendly, as well and there's a free community edition, or paid ultimate edition.



So either edition will work just fine. You don't need to spend any



money for either of those tools actually. And in the upcoming videos in this section



of the course, I'm gonna show you how to get the Java Development Kit and IntelliJ IDEA



working for Windows, Mac, and also for Linux. Now if you want to use another Integrated



Development Environment (IDE) such as Eclipse, Netbeans, Atom or something of that nature,



you're welcomne to do that. It will work fine. Other than that, let's get started.











**Step-by-Step Guide to Installing JDK 17 on Windows 10 and Windows 11**



This is the Windows installation video, skip this if you are on a Mac or running Linux.



Right, so we've established that you want to install Java 17, or to be specific, JDK version 17.



This video will show you how to install on Windows 11.



Note that if you are running on Windows 10, the installation will be pretty much identical.



Just follow the steps you see in this video, if you are running Windows 10.



The only potential gotcha is if you are running a 32-bit version of Windows 10,



(these days most computers are running the 64-bit edition).



In these rare cases, you will find you need to download an older version of the JDK.



If you have a relatively new PC from the past 4-5 years,



(or even a bit longer) then all should work.



Windows 11 only comes in a 64-bit version.



So if you are running Windows 10, or Windows 11, just follow along,



and assume your computer is running a 64-bit edition of Windows, and it all should work fine.



Lets open a browser, and go to java.sun.com



Click Java SE, (which stands for Java Standard Edition by the way,



which we will be using in this course).



You can see that right now it's showing



Java SE 17 (LTS), specifically its showing Java SE 17.0.4.1 (LTS).



The numbers after the 17 refers to the update version, and chances are high when you are watching this you will see different numbers



because a new version will probably have been released.



Just choose the latest Java 17 version.



Be sure NOT to select the newer version, which for me is showing Java SE 19.



We want Java 17.



If you don't know why watch the previous video, where I explain why we need version 17.



Right, so I'll click Java 17 and that takes me to another page.



From here I will click Windows, and then I get a list of options I can click to download.



The easiest one to use is the x64 installer so I'll click that here and let it download.



Now that it's downloaded, I will run the downloaded file, which will start the installation process.



I'll double-click it.



I'll click Yes here to allow the program to install.



As you can see, it is just like installing any other program.



I will draw your attention to the location it's being installed in,



because you may need to know that in an upcoming video.



Alright, I'm going to let this installation complete.



And we're done.



Great, so we now have the JDK installed, in the next video,



it's time to download and install IntelliJ, which is the program we will be using in the course,



that works with the JDK we just installed, to let you write and execute Java programs.



See you in the next video.



**Verify Java Installation and Explore Java Interactively with JShell**





Now that we have Java installed on our machines, I want to introduce you to the software tool



we'll be using to begin to explore the Java programming language.



JShell.



Firstly, let's open a command prompt on Windows, or a Terminal in Mac or Linux, to check our



Java version, to make sure we are ready.



On Windows, you can press and hold the Windows key located next to the space bar, and then



press the R key.



This will take you to the 'Run' window, where you can type in cmd and hit the enter key.



On a Mac, you can press the Command key and spacebar at the same time, to get to Spotlight,



and then type in Terminal.



This should take you to the built in terminal on your Mac.



For Ubuntu Linux, click on 'show applications', in the bottom left of your screen.



Then in the search bar, you can type in Terminal and hit enter.



Now that we're in our terminal, we'll first check what version of JDK we are using.



To do that we'll enter: java -version



Now depending on when you installed your version of Java 17, your output may be slightly different



than what you see on screen here.



The important part, for this course, is that you see 'Java Version 17'.



As you can see I have version 17 installed.



Your exact version may be different, but as long as the version number starts with 17,



you should be fine for this course.



If you do not see version 17 dot something, please revisit the installation video for



your operating system to get that installed.



There are different ways we can interact with Java, create programs, and execute or run them.



You could use a simple text editor to write Java code.



We could for example, use a simple text editor, such as Notepad on Windows, or the TextEdit



app on Mac, to write our code.



We could even use a terminal based editor such as vi if the operating system we are running supports it.



As we can see in the slide, this isn't the easiest code to look at and read.



But if we had to, we could certainly code this way.



Doing it this way would also require us to learn to compile, and execute Java code manually.



Most likely, you'll be using an integrated development environment, or IDE, to develop your Java code.



An integrated development environment, or IDE. is the most commonly used method of writing Java code.



An IDE is a powerful tool with many features that help simplify writing code by making



it easier to read.



It can keep us organized, and provide hints about possible errors and best practices.



The IDE can also help with code completion, by essentially finishing our sentences for us.



And as you can see in this slide, the exact same code we just saw in Notepad looks a lot



better and is much easier to read.



Later in the course, we will introduce you to IntelliJ's IDE which makes things very easy.



But lets start with the basics.



We can execute Java programs directly from the command prompt or terminal.



From the command prompt or Terminal Window, we can simply run the java executable:



By typing java, followed by the enter key As you can see on the screen, we get a bunch of output.



A lot of this may not make sense to you, and if it doesn't, don't worry.



My goal here is simply to show you that youcan directly interact with Java from a command prompt or terminal.



What you are seeing here on the screen, is a list of options, that we can use when running



a Java program from the command prompt.



Because we did not include any of these options, Java has responded by providing what is essentially its built-in help.



So next, let's take a look at the first tool we will use to begin our Java journey.



As previously mentioned, that tool is JShell.



JShell became a standard component of the Java Developers Kit in Java 9.



It is what is known as a Read-Eval-Print-Loop interactive program (or REPL for short) which



means it does pretty much just that: it reads the command or code segment we type in.



it evaluates and executes the code, and often allows short cuts to be used.



it prints out the results of the evaluation or execution, without making the developer



write code to output the results.



Lastly, it loops right back for more input (more code segments or commands);



JShell runs in a terminal (or on the command line for Windows) and is useful for quickly



trying out new ideas.



JShell is a kind of sandbox, or playground, that let's us experiment with code, in a simple,



safe, and fun way.



It does this with instant feedback which, for brand-new developers, is very rewarding.



Note that although JShell, because it is a REPL environment, is interactive, and that



is not the same thing as an integrated development environment.



JShell does not replace the need for an IDE.



It's just a handy tool to quickly get started with Java.



We will be transitioning to an IDE later in the course.



We'll use JShell for the first part of this course, both to introduce it to you, and to



explore some basic concepts in Java.



For the rest of this video, we'll look at some of JShell's built-in features, and try



to get comfortable with some simple commands.



First, let's take a look at some online documentation for JShell. and navigate to Oracle's JShell



Documentation . This link and all links I type in the course is available in the resources



section of this video on Udemy.



As you can see on the screen, the documentation starts with a simple introduction and is divided



into various sections such as 'Snippets', 'Commands', and so on.



We are not going to explore this documentation in detail, but I want you to be aware it is



here, and that it can be very useful if you get stuck with a problem, or simply want to



learn more on your own.



And in general, I encourage you to be curious and take advantage of the many online resources



available to you.



And as you'd expect, we'll be looking at many such Java online resources together first,



as we progress through the course.



For now, let's switch over to JShell and learn a bit about it.



I'll scroll this screen down again.



Lets clear the screen by typing cls and pressing enter.



On a Mac or Linux the command is clear.



I'll launch JShell now. JShell.



As you can see on the screen, this has launched JShell for us, and also confirms we are a



running version 17 of Java.



Now we will follow some on-screen advice, and check out the introduction:



/help intro and then enter. You can see we get a little bit of output



from this, with a simple introduction to JShell, and a couple more hints.



Let's take a look at the JShell help: /help



As you can see, there are several commands available with a brief description of each.



We won't be going through all of these commands, just a few of the more common ones.



As you can see, there are options to save and open files, reset JShell to its initial



launch state, and even review the history of what you have typed, and so on.



Let's take a look at the top command there, the list command.



As you can see highlighted there the command, slash list, is followed by some options, contained



within left and right square brackets.



Those brackets indicate options for the command.



We can also see that the slash list command is used to 'list the source you have typed'.



Since we have not yet typed any source, meaning code, let's use the dash all option:



/list -all What we see in the output is a list of the



built-in code, or libraries of code, that JShell includes in its environment.



One of the great things about Java is, it has been around a long time, and there is



a lot of code already written that we can take advantage of.



We don't have to re-invent the wheel, because we'll be able to find, and use, existing code



to do things like, connect to the internet, solve math problems, or get input from a user.



Please note too, that if we had typed in some code already, it also would be listed here.



So, the list command shows us the history of Java code run in JShell.



Although we didn't execute the import statements you see here, JShell executed them when it started up.



In addition to seeing the history of the Java code executed, we can use the up and down



arrow keys to scroll through whatever we ourselves typed, in JShell.



If you use the up-arrow now, you'll see that it brings up the '/list -all' command again.



If we press the up-arrow once again, we'll now see the '/help' command we typed in at first.



The up and down arrow keys will be very useful to us, as we execute one line of code, then



want to change something about it, and execute it again.



For example, if we scroll down And we edit the statement we see, the '/list



\-all' command, and instead of listing all the code, we change that to list only the



code that ran at startup, by typing -start, then hit Enter



The output is the same, since we haven't entered any Java code just yet, but this is an example



of using the up and down arrow keys to get previous code.



Once we have the previous code on our current prompt, we can edit that code, then execute



it with our new changes, by hitting enter again.



One other useful thing in JShell, is when you want to write a couple lines of code in



Java, but you don't want them to be all on the same line.



You can do this with the use of curly braces.



Let me show you what I mean: { As you can see, the JShell prompt has changed.



It is now three dots, followed by a greater than symbol.



The new prompt we are seeing in the JShell terminal is telling us that JShell is ready



for another line of code to be typed in.



And you can keep adding new lines of code, pressing Enter in between without anything



actually running, until you complete the set of curly braces.



Don't worry if you don't quite get that just yet.



We'll be showing you lots of examples of ways to enter code in JShell.



But if you accidentally get yourself into this situation, with this different looking



prompt, know that you can either enter a right curly brace to get out of it, or type 'control



c' to escape out to return to the normal JShell prompt.



And finally, there is the command to exit JShell:



/exit And we are now back at the regular command prompt.



Why did we introduce you to JShell, and not write any Java code?



I had a good reason for doing this.



Our first Java code is going to be the very traditional program for a beginner, and we'll



do that in the next video.



I wanted to get all the JShell commands and usage out of the way, so in the next video,



we can concentrate on just Java code.



Remember later in the course we will swing over to an IDE instead of JShell.



In this video, we confirmed what Java version we were using, and introduced you to some



of the most important commands in JShell.



We now know how to see the history of the commands we typed in, how to use the up and



down arrows to scroll through history, and most importantly, how to exit, both from the



multiple line prompt, and from JShell itself.



Right, let's write some Java code.



I'll see you in the next video.


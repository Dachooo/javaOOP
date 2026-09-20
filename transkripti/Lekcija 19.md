**The while And do-while Statements For Conditional Looping**



Continuing on with our discussions about looping. What if you want to loop until some condition



is met, that's not associated with a known range of values?



In previous videos in this section, I talked about the for statement,



which was a way to process a statement, or set of statements, a given number of times.



But what if you want to loop until a certain expression evaluates to true or false,



instead of looping a given number of times? For this situation, Java has two flavours



of something called the while loop. For example, you may not know how



many times you want to loop ahead of time. What you need to do in that case is continue



looping until some condition is met. This is where the while



statement becomes very useful. The difference between the while



loop and the do while loop is that the do while loop will always execute the loop code block at



least once. But more on that in a moment. I've already created a while loop project



with the usual main class and main method. Before we look at the while statement,



I'll just quickly add some for loop code, so we can compare the two statements.



This code declares a for loop, looping from 1 to 5, and prints those numbers out.



So, I've also stated several times that the for loop has three declaration parts



in the parentheses, separated by semi-colons. But looking at the while loop in comparison:



You can see the while loop simply has the loop expression, but doesn't support initialization,



or the increment code as part of the declaration, as does the for statement.



So, knowing the differences now between the while loop and the for loop,



let's write code that does the same thing as my for loop, but I'll use a while loop instead.



I'll use the same expression I used from the for loop:



while,and in parentheses I'll type j \&amp;lt;= 5) and a curly left brace.



You can see IntelliJ is having a problem with the "J" variable there, and that's



because this variable has not been declared. Unlike the for loop, there is no place for the



declaration of a temporary variable in the declaration of the while statement.



So, I have to declare any iteration variables outside of the loop.



So, I'll do that, and I'll set it to 1 to match what the for loop is doing,



and I do this right before the while loop code: I still don't want to run this just yet.



If I did, the while loop would start executing and never stop.



That is because, I'm never changing the value of the variable J inside the while loop.



This condition is called an infinite loop and generally not something you want to program.



I didn't have to include this in the for-loop statement block because I already had it in the



declaration, in the iterator part, I plus plus. So, I'll just add that to our loop,



as well as printing it out. Ok, so the code from lines 9 through 13,



using the while loop, now emulates what I did with the for loop, and I can run that safely now.



And I can confirm, I get the exact same output as the for loop.



So, you can see in the case of the while statement, there's no variable set up



within the loop declaration in parentheses, like there is in the for-loop declaration.



And I also need to increment my variable manually, if I'm using a variable to



determine when to exit the while loop. So that's the difference between the two.



Let's edit my code a little bit, changing my loop expression to just be true:



Ok, so why would you ever want to do this? Isn't this just another infinite loop?



It is yes, that's true, but you will probably see while loops used this way, and the condition



tested elsewhere, also within the loop code block. Let's add that.



This time I want to terminate the loop if J is greater than 5, and I'll use a break to do it.



I talked about using the break statement with the for loop, and the concept is the same here.



If this condition is met, then this break statement exits the loop,



ending it at this point, skipping all code below it, and ending any additional iterations.



if, and j \&amp;gt; 5 in parentheses, and a left curly brace. break right curly brace.



Setting the while loop condition to be true and then using an if



condition containing a break statement is another common way to program a while loop.



And if I run that, I get the same results as before.



So, let's now look at the do while statement,



which is very similar to the while statement we've just been looking at.



I've said before that the do while statement will always execute the loop code block, at least once,



and that's because the loop expression isn't tested until after the loop code block executes.



So first, let's see what happens if I just change our while loop code, and instead of while (true),



I'll create a variable called "is ready", and for now, I'll set it to false and I'll



use it for the loop expression: And in this instance, the code in



the while block won't run at all, and I get no output for the while loop.



It's not likely you'd write code like this, but maybe in your loop block, you'd be testing some



condition returned which will set isReady to true. Obviously, if we never get into the loop,



that code wouldn't get executed. But let's just say, I always



want my code to run once regardless of the condition, and then keep checking this value.



I could use the do while code to make that happen, so let's change my while loop to a do while.



This is just changing two lines of code: do, left curly brace.



and down here I put a right curly brace, then type while, and put isReady in parentheses.



So you can see how similar the do while loop is to the while loop.



Let's examine these differences really quickly. So, noticeably, you can see that we are starting



with do before the block of statements, and the while is declared after the code block.



This is why the do while always executes at least once.



It will enter into this code block, execute whatever statements are in this block,



and only then will it check the condition. If the expression evaluates to false,



it won't iterate, but if it's true, the loop will continue to execute.



Finally, it's important that this statement ends with a semi-colon.



This is different from the other two looping statements.



So, looking at my code, with these differences in mind, I start with just a do statement.



The do statement doesn't support any condition in parentheses, so it's just



followed by an opening curly brace. Then I have all the same code,



and this code will always execute because I am not applying a condition to it the first time.



But then you see the while statement directly after the



do code block, and here is the condition. Also, note that I have a semi-colon at the



end of the while condition. This is required.



So, this code won't execute a second or third time, or more than once unless that



condition, is ready, is true. But I could use this code and



some condition to now set is ready to true, if I wanted the loop to continue.



Let's quickly do that. Let's add another statement after we increment J.



I'll set isReady to the result of testing if J \&gt; 0.



So now, this code would execute the first time when is ready is false and J is one,



but when J gets incremented to 2, is ready is set to true, which means this code will continue to



execute until the break condition is met. And if I run that,



we see I get the same results I had before. So, when would you use a do while and not a while?



Well, a good example for a do while loop might be when you need to ask



for your user's name and password. You want them to enter it a first time,



and if it's incorrect, you'll want to continue asking for the credentials, allowing them to



hopefully, at some point, remember it. So, we've seen examples of all three loop



statements, and you've seen that you can use a loop expression to control



when the loop terminates. But you can also use a



break statement to exit a loop. Ok, so there's another statement



that's important to all of these loops, and that is the continue statement.



The continue statement, in its simplest form, will stop executing the current iteration of a block of



code in a loop, and start a new iteration. In some cases, you'll have a loop where



the majority of iterations in your loop meet the criteria for which you want to do a lot of work.



But you might have a couple of exceptions. So, rather than use a big if then else statement,



you just want to ignore a few iterations, and skip the code that would be normally executed,



but keep the loop going. So, let's try that out.



Let's set up an example where it might make sense to use a continue statement in a while loop.



First, let's comment out all the other code in the main method,



so I can just focus on the continue statement.



And now, let's add a new while loop. I'll create a loop that goes through



the numbers 0 to 50, incrementing by 5 at the start of each loop iteration.



Then I'll print out those numbers on a single line, separated by underscores first:



I'll start with an int, number, and assign it zero. I'll use a standard while, with number \&amp;lt;



50, in parentheses. number, plus equals, five. And I'll use print, not println,



to print out number and underscore. right curly brace to close the while code block.



If I run that. We can see the output; it's



printing out all numbers, starting with 0, but then all increments of 5, up to and including 50.



But let's just say, for some reason, we don't care about any numbers that are evenly divided by 25.



In this code, I'll just use the continue statement to skip processing



for numbers evenly divided by 25. I add that in with an if statement,



and then add the continue statement. test if number modulo 25 has no



remainder. Thats true if it reaches here, so continue. right curly brace.



And if I run that. You can see my output no



longer includes 25 or 50 in this list. So this code, continued the loop,



even after it considered 25, but it didn't actually process the number 25.



In other words, it simply started a new iteration when the number was evenly divided by 25.



When it starts a new iteration, any code below the continue statement is skipped,



like the print on line 26. A continue statement is a good



way to continue to execute iterations of your code, but perhaps skip code for certain elements,



or only partially execute code in certain cases. In this video, I've compared the for-loop



statement with the while loop. And I've demonstrated that a do



while loop is very similar to the while loop, but always executes the loop code at least once.



I've also covered the continue statement. In the next video, I'm going to give



you a challenge, so you can try out the while loop on your own.







**Practical while Loop Exercises And Challenges**



Ok, so it's challenge time again. We're going to look at this



challenge in two steps. Step 1 is to create a method called



isEvenNumber that takes a parameter of type int. Its purpose is to determine if the argument passed



to the method is an even number or not. Return true from the method if it's an



even number; otherwise, return false. Next, use a while loop to test a range



of numbers from 5 up to and including 20, but printing out only the even numbers determined



by the call to the isEvenNumber method. Okay, so the challenge is to create a



method called isEvenNumber, and it takes a parameter of type int.



The purpose of the method is to determine whether or not the argument that's been



passed to the method, the int, in other words, is an even number or not.



If it's an even number, return true, otherwise, return false.



And to give you a bit of a hint here, you'll want to look at using the remainder operator.



As part of this challenge, create a new project called while loop challenge, with a main class and



the usual main method, as well as this method. Alright, go ahead and try that out



and see if you can figure it out. Pause the video now and come back once you've



tried it out to check what I've come up with. Okay, how did you get on?



I've created a new project and I've called it while loop challenge with the usual main



class and main method, as I am showing here. So, let's go ahead and write that method,



placing it at line 7, before the closing brace of the main class:



public static boolean and the method is called isEvenNumber. One parameter,



an int that I'll call number. The if statement will check if number modulo 2 is equal to zero.



if it is, return true. else. return false. A simple way to determine whether a number



is even or odd is to use the remainder operator, as I've done in this code.



If I try to divide a number by 2 and there is no remainder, which this first if condition is doing,



then that number is divisible by 2, which is the definition of an even number.



So, I return true. Otherwise, I return false.



Okay, so what I'll do now is add some code that's going to execute that method,



and I'll do that in a while loop to test a range of numbers, as the challenge specified.



My code here is going to start with an int number with a value of 4.



I'll explain why I start with 4 in just a moment, but I want to keep processing numbers



until the number variable reaches 20. So, I'll set up some variables in



the main method on lines 5 and 6. the first one, an int called number,



initialized to 4 as mentioned. the second, an int called finish number, initialized to 20.



Alright, so now, I need to create my while loop. I'll execute this while loop while the number



variable, which is starting out with a value of 4, is less than or equal



to finish number, which I've set to 20. Within this code block, at the start,



I'm going to increment the number. This means, starting out,



I'll actually start with five and not four which was part of the requirements.



With while loop incrementing, you often want the increment to be the first thing



you do because it's easy to end up with an endless loop if it accidentally gets skipped.



In other words, I don't want to accidentally create a loop that never ends.



The while statement expression will use number \&amp;lt;= finishNumber. number plus



plus. print even number, and the number itself. If I run that now, I would just get every number



printed out because I haven't put in my check yet. So, let's do that.



I'll check if the number is an even number using my method is even number.



I'll do this with an if statement. If the number is not an even number, I



want to continue, meaning, skip all the code below which in this case, is just the print statement.



the if statement expression is not, is even number, passing number as the argument. if



not an even number, continue. So, what is this code doing?



It's going to start at the number five, well, actually number four, but then that



number will be immediately incremented. And again, that's because I've got this



code on line 9. And so, that then



gets incremented as the first statement. And it's going to go through and finish up



to and including the number 20 because I've got a less than or equal while test here on line 8.



And what I'm doing is testing to see whether the number is an even number.



And if it's not an even number, I'm going to do our continue,



which is something that's different than break. You'll remember that both break and continue



have the effect of interrupting the code. But what happens with continue is that



it'll effectively bypass the print statement on line thirteen. If there was any other code in



that code block, that would also be bypassed. So continuing means that the code execution



goes back to the start of the loop. If the number was even, then we hit the



println statement, and the loop continues. The first time it goes through the loop,



number will get set to 5. That is not an even number, so continue is executed and



the loop starts again at the top. The next time through, number will



be incremented and will be equal to 6. Now we'll see that value gets printed



out here on line thirteen. But then, it will go back



to the start of the while loop and the number will be incremented yet again.



And this will keep looping until this while comparison here on line 8,



this test here, returns false. So, if the number is twenty one or



higher, then the while loop is going to be terminated, and the processing will complete.



Alright, so let's actually test this and see if it works. I'm going to run it.



So, you can see what's happened there. You can see the output there is even



number 6, 8, 10, and so on. A while loop is probably the



statement you'll use more often than a do-while loop. But you'll still use both.



I'll be giving you many more examples as we progress through the course,



and you'll start getting more of an understanding of where to use each and which one to use,



and which one's best for a particular purpose. Let's move on to step 2 of the challenge.



So, Step 2 is to modify the while code. Make it also record the total number of



even numbers it has found. Break out of the loop



once 5 even numbers are found. Finally, display the total number



of odd and even numbers found. Alright, so the challenge is



to modify the while code above. So, you want to leave the existing



functionality as it is, but make it so it also records the total number of even numbers,



as well as odd numbers that it's found. And once five even numbers have been found,



break out of the code and display the total number of even numbers, which we know should



be 5, but also the number of odd numbers. So print that outside of the while loop.



So, you don't want to break any existing functionality, we still want the output



working as it did previously. We just want to add that extra



bit of functionality to the code. Alright, so pause the video and go



away and give that a try, and once you're ready, come back, so we can check out the solution that



I've come up with against yours. So, pause the video now.



Okay, so how did you get on? Did you manage to figure it out?



Well, let's go through the solution together, bearing in mind, there's



always multiple solutions to a problem. Alright, so what I need to do first is I



need to record the total number of even numbers and the total number of odd numbers that have



been found while processing our loop. So, I need some sort of count variable



for both even numbers and odd numbers. So, what I'm going to do is add two variables



and I'll add them here after line 6: the first is an int called evenCount.



the second, also an int called oddCount. I've initialized them both to 0 to start with.



When I find an even number, I'll increment even count, and I'll increment odd count



if it's an odd number. So let's add that code,



incrementing odd count on line thirteen, and incrementing even count on line seventeen.



odd count, plus plus. even count, plus plus.



When I've determined that the number is not an even number, I increment odd count,



then I call the continue statement after that. And I can add the increment to even count anywhere



below that if statement because only even numbers will fall through to this code. odd



numbers will be processed by the continue. I'll now print the total of odd and even



numbers, starting on line 20. this println will print oddCount.



and do the same for evenCount. Alright, so let's try running



this code and see what happens. You can see that it's correctly



calculated a total of nine odd numbers and eight even numbers, and my print statements are still



printing while the loop is executing. And you can see that matches



up with the total here. But of course, that wasn't what



the challenge wanted us to do. So, why didn't it exit after



five even numbers were found? Well, the reason for that was simple,



I haven't implemented the break yet. What I need to do is put in an additional



test after the even number is found. So basically, after incrementing the



even count on line 17, after this line here, I want to put a test on line 18.



if, evenCount is \&gt;= 5. break. Alright, so now I'll run this to test:



And you can see now, I've got the five even numbers from six to fourteen printing.



And I'm also printing the odd and even counts, which are both 5.



Ok, so that was the while loop challenge. In this challenge, I used both a continue



and a break statement. Both the continue and



break statements are optional and can be used for ease of use and readability.



This code could have been written without either a break or a continue, but the challenge did request



that you use at least the break statement. Ok, so that's it for this challenge.



In the next video, we'll have another small challenge to keep



you exercising your looping skills. So, I'll see you in that next video.


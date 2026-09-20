**Delving Into Method Overloading In Java**



So far, we have tackled what methods are, and how to put them to use in our program code.



In this video, I'll be talking about method overloading.



Method overloading occurs when a class has multiple methods with the same name, but the



methods are declared with different parameters. So, you can execute multiple methods with the same



name, but call it with different arguments. Java can resolve which method it needs to



execute based on the arguments being passed when the method is invoked.



This technique lets us create methods with the same name, for many types and numbers of



arguments, and the calling code doesn't have to sort out which method to call.



To the calling code, it looks like the method takes a variable set of arguments,



when in truth, this isn't the case. Instead, there are a variable number



of methods with the same name, but with different sets of parameters, which can be called, and Java



will figure out which one to execute, based on the arguments you pass when invoking the method.



A method signature consists of the name of the method and the uniqueness



of the declaration of its parameters. In other words, a signature is unique,



not just by the method name, but in combination with the number of parameters, their types,



and the order in which they are declared. A method's return type is not part of the



signature. A parameter



name is also not part of the signature. The type, order, and number of parameters,



in conjunction with the name, make a method signature unique.



A unique method signature is the key for the Java compiler to



determine if a method is overloaded correctly. The name of the parameter is not part of the



signature, and therefore it doesn't matter, from Java's point of view, what we call our parameters.



This slide demonstrates some valid overloaded methods for the doSomething method.



The first method declaratoin is a simple method called do something, with one parameter,



parameter A of type int. In the next method,



there is still only one parameter, also called parameter A, but the type is float.



This method has a unique signature because the parameter type is different from the first, and



it's a valid overloaded method for do something. In the case of the third method, I have two



parameters, and this is definitely different from the first two methods,



so this is a valid overloaded method. In the fourth method, I have two parameters



and they have the exact same types as the third method, but the order is different.



So, this is a valid overloaded method for the previous three.



Finally, I have a method with 3 parameters, and again, because this has a unique signature among



all of the methods described here, it's a valid overloaded method for do something.



slide - Invalid Overloaded Methods Parameter names are not important when



determining if a method is overloaded. Nor are return types used when



determining if a method is unique. In the second method on this slide, the only



difference in the method is the parameter name. This method has the same number of parameters and



the same type as the first do something method and therefore, this is not a valid overloaded method.



This will cause a compiler error. In the third method, I again have the same name



and parameter, but I have a different return type. But return type is not used in the determination



of whether a method signature is unique, and so, this method too will cause a compiler error when



it's in the same class as the first. Method overloading is very commonly



used in Java programming and actually in many other programming languages as well.



Let's look at an example in code. I've created a new project called



method overloading, created the class main with a capital M, and set up the main method as usual.



I'll start by creating a method which I'll call calculate score.



And let's type this method in: public, static, int, calculate score,



and in parentheses, string, player name, int, score. I'll end witha left curly brace. I'll



print the text Player in double quotes, and then the player name, the text scored in double quotes,



the score itself, and then the text, points in double quotes. I'll return the score, times one



thousand. right curly brace to close the method. So here, I'm returning score times



one thousand which is just an arbitrary number. I've just done that so I can return something.



That's because I've defined the method to return an integer.



So, to confirm that runs, I can make a call to it in the main method:



calculate score, parentheses, Tim in double quotes, and for the second argument,



I'll use five hundred. And if I run this,



I should find that that works, no problem. We see the result, "Player Tim scored 500 points".



So, no surprises there. While we are multiplying score by one thousand in the return statement,



the println statement printed out the score before that was executed.



I could take the value that's returned and use that in the code up here on line 5.



I'll add a new variable of type int, called new score, and assign it the



value being returned from the method call. I'll print the text new score is, in double



quotes, and then print new score itself. And running that to confirm that works.



I get the extra line, new score is five hundred thousand, which of course is the five hundred we



passed as an argument value, times a thousand, and that gives us five hundred thousand.



So, nothing particularly unique there, we've seen that similar setup used in the past.



Ok, so let's go about overloading the method. From the slides, we know that we can create



a method with the same name, calculate score, as long as its method signature



is different from the first. I'll start off by creating the



second one by copying the existing method and pasting it right below the first one.



Now, notice when I do that, IntelliJ is showing both methods have an error.



If I hover the mouse over one of these underscored methods, I can see that IntelliJ is



saying calculate score with a string and an int as parameters is already defined in this class main.



So, that's Java telling us, "Look, we can't use an identical method with an identical set



of parameters, there's a problem there". So, the option to fix this, well the



first option would be to put an S on the end to make it a different method name.



And of course, that will work but that's then a separate method, not an overloaded one.



This means I'm not actually overloading the method this way. Rather,



I'm defining a method with a new name. In this case, I don't want to do that.



I'll revert it back to the same name, and now, I'll change the number of parameters. In this



case by getting rid of the first parameter. And I've made it so that this method now has



only got one parameter which is the score. And notice that the overall error went away.



But I got an error now on line 17 because I'm trying to access the variable player name, and



the parameter no longer exists, in this particular method, because of course I just deleted it.



So, let's replace the first part of that statement with just unnamed player:



Now, notice there are 2 methods there now, and I have a warning on the screen now,



because it's greyed out, the method name, compared to the method on line 9.



It's saying that that's not being used. So that is IntelliJ saying, "By the way,



you've created this overloaded method called calculate score, but you're not using it



anywhere in the code." You're only using this



first one which is in a darker color. You can see that I'm using that on line 5.



So, I can still run that. And I still get the same



results I got prior to overloading the method. But I want to use the second method, so let's



add a call to the calculate score method next: I'll call calculate score again, but this time



passing seventy-five as an argument. And you can see that that's valid.



And that's now going to call that second method if I run it.



So, let's run it to make sure it does work. Unnamed player scored 75 points which is clearly



the code from the second method. Now, Java is checking data types,



so we can't actually do something like try to execute calculate score and use



one hundred and one hundred as arguments. So, here, I actually get an error now.



If I hover over that, I get "Required type string, and provided was an int".



So what IntelliJ is saying here is, well ok, if you want to call this overloaded method



with two parameters, I know that you've set up a method on line 12 but that needs to be a string.



So, that's what IntelliJ is complaining about. Let's add a third argument in that line.



And now, I'm getting a new error that just sort of says altogether, "Well,



hang on a minute, you haven't actually created an overloaded method with three parameters of int."



And notice that, when I hover over that error, it's actually saying int, int,



int, and the point to all of this is what makes it unique is the data type in the parameters.



The thing you need to get the same, what Java uses to determine whether it's



unique or not, is this, the data type. In this case, the string and the int.



Ok, so let's do one more thing. Let's try and execute that method with the



same name, but I won't pass any values to it. I'll first change that last call to calculate



score and remove all the arguments: So again, I get an error.



And at the moment, that is coming up and saying, "Cannot resolve method".



This is now saying, "Well hang on, you haven't got a method with that name



that doesn't have any parameters." Let's now try and create another



overloaded method with no parameters. I'll copy and paste that second



calculate score method, but I'll strip out the parameter, and change the println statement.



I can't return anything since I can't use any input values to calculate the score with,



so I'll just return 0 from the method: I'll print out the text,



no player name, comma, no player score. And you notice that the code is now valid,



and I can actually run that. So, if I run that now.



You can see I've got all three methods working. All have their own separate output, displayed.



Hopefully you can see that when overloading a method,



we need to create a unique method signature. I've talked about the signature already,



and it consists of the actual method name, you can see that's the same in all three cases here.



But it also uses the parameter definitions. And a reminder that the return type has no



bearing on determining a valid method signature. To confirm this, I'm going to copy and paste



that last method with no parameters. I'll change the definition to void.



I also need to remove the return statement that returns 0, so let's get rid of that:



Does changing the return type make it unique? Well no, and the error I'm getting here is,



calculate score is already defined. Java is telling us that just changing



the data type of the return type, the type of data that's going to be returned from the method,



doesn't actually change the overall signature. So, I do need to change the number of



parameters there to make it unique. So, I'll just delete that new method.



Before we move on, let's just talk about how we can use overloaded methods to support what looks



like default values for method parameters. In the code I just looked at,



I have several overloaded methods. Looking at the two methods I set up



parameters for, consider the scenario where maybe, I've made player name optional,



and if the user doesn't want to provide it, I'll just default player name to "Anonymous".



As stated previously, other languages let you define default values for parameters, and this



would be done in the method definition. But not so with Java.



But I can do the following. I can change the method that only has one parameter to set up



a value for player name, and then execute the calculate score that takes player name



as its first argument. Let's change this code,



I can replace the code that executes this println statement and returns the



same calculation as the overloaded method. And now, I'll just call the other method



and pass in the value "Anonymous" as the first argument to the other existing method:



return, calculate score, left parentheses, the text anonymous in double quotes, and score as the



second argument, right parentheses. I'll change the main code



to just execute two methods. I'm going to remove the existing code



and insert two new println statements that will print the score returned from calculate score.



You might remember, I've previously said we can use methods that return



data where we can use expressions, and this is true in the println statement:



You can see the code I have typed is using the return value from a method call,



right in the println statements. Do you see how this code might



make it look like that default values are supported by the calculate score method?



Here, we're not requiring the name in the second instance, but it will do the same



thing as the code with a player name. Except it will use anonymous in



place of the player name. And executing that code.



You can see, I get almost the same behavior whether I execute it with two arguments, or just



one, where it printed "anonymous" as the name. So, overloaded methods offer some of the same



functionality that you can get from default values for parameters in other languages.



Ok, so that's how overloading methods work. In the next video, I'll be giving you



a challenge to test what you've learned about overloaded methods.







**Practical Method Overloading Challenge To Strengthen Java Expertise**



It's challenge time. This challenge is designed to give you a chance to



try your hand at overloaded methods. Here are your challenge instructions.



Create two methods with the same name: convertToCentimeters



The first method has one parameter of type int, which represents the entire height in inches.



You'll convert inches to centimeters in this method and pass back the number of centimeters



as a double. The second method has two parameters of type int, one to represent height in feet,



and one to represent the remaining height in inches. So, if a person is 5 foot, 8 inches,



the values 5 for feet and 8 for inches would be passed to this method. This method will convert



feet and inches to just inches, then call the first method, to get the number of centimeters,



also returning the value as a double. Both methods should return a real number or



decimal value for total height in centimeters. Call both methods and print out the results.



The conversion formula from inches to centimeters is 1 inch = 2.54 cm.



Also, remember one foot = 12 inches. You can use the link below to test your results:



Let's go to that link and have a look at this website before I pause, and let you go away and



create your version of the code. There is a link to this website



in the resources section. I'll type something like 6



for 6 feet and that gives us one hundred eighty-two point eight-eight centimeters.



You just type in either the number of feet, or a combination of feet



and inches, or just inches alone. And this will tell you what the



height you entered in is, in centimeters, and from there, you can confirm that your



code is correct and working properly. Ok so that's it, so pause the video now,



and attempt the challenge. When you're done, come back



and I'll show you my solution. I hope you've had some success



and managed to get it working. I've created a project called



overloaded challenge with the usual main class and the usual main method.



The challenge was to create overloaded methods named, convert to centimeters,



each of which returns a double. The first method has one parameter, for inches.



The other method has two parameters, for feet and inches, which I said can be of type int.



Let's start with the test cases we want to use in the main method.



I'm going to use 5 feet and 8 inches for the test of the method with two parameters.



And I'll use 68 inches for the test of the method, with only one parameter:



Using println, I'll print the header text in double quotes, and then append the result of



calling converToCentimeters, passing 5 and 8 as the arguments, and finally I'll append the string,



C M, to the output. For this line, I'll do a println, starting with the header text in



double quotes, then append the result of calling convertToCentimeters, adding 68 as the argument,



finally appending the string C M. I have errors in IntelliJ because I



haven't defined these methods. So, let's define them now.



These are pretty simple methods. I'll start with the one-parameter method first.



I'll use public static, as usual, return a double which was the requirement,



and our parameter is just an integer, representing inches. And we will return



the result of multiplying inches by 2 point 5 4. In this code, I'm just returning inches times



the conversion number that was given to you in the challenge instructions.



And you can see, I am not setting up any local variables.



I'm just using the parameter in an expression, which is perfectly valid.



And I can do almost the same thing with the second method.



This time we have two parameters: So same method signature, up to the



point of the parameters. This time I'll use two integers, feet, and inches. The calculation is



a little more complex. return, two left parentheses, feet, times, twelve, right



parentheses, plus inches, right parentheses, times, two point five four. right curly brace.



Again, in this case, I'm just using the parameters in the expression getting



returned by the return statement. I multiply the value of feet by 12



to get inches from feet. Then I add that to any



inches that were in the inches parameter. Then I multiply that total number of inches



by the conversion formula two point five four. So now, I should have code that compiles,



and if I run that: They looks like good answers, and



if I go back to that website, in the challenge: And I enter 5 feet and 8 inches in there.



I get an answer of one hundred and seventy-two point seven-two centimeters.



Remember that by default, Java, when outputting doubles, will omit any trailing



zeros in the output, so this answer is the same as the one that we got from our code.



Let's also enter sixty-eight inches on this website.



And there again, I get the same answer, one hundred seventy-two point seven-two centimeters,



so we know our code is correctly converting inches to centimeters in both cases.



But I missed one requirement and that was to call the first method,



which has only inches as a parameter from the second.



So, let's change our second method to call the first.



Again, I'm going to do that right in the return statement:



return, convert to centimeters, two left parentheses, feet, times, twelve, right



parentheses, plus, inches, right parentheses. So here, and you'll see this a lot in Java code,



I'm returning a call to an overloaded method in the return statement.



I'm calling the first method that only accepts inches and I'm passing it an expression directly.



Here, I'm passing it the feet and inches to just inches conversion expression.



I multiply feet by 12 to convert feet to inches, and then I add that number



to the inches value passed in on the method. And this is the argument passed to the method



that only takes inches as a parameter. And running that, I get the same output:



I could've written that method differently and set up local variables to do all the same work,



so let's do that. First, I'll comment



out that single return statement: And now, let's add some local variables:



int, feet to inches, equals, feet, times, twelve. int, total inches, equals, feet to inches, plus,



inches. double, result, equals, and I'll call the convert to centimeters method,



passing total inches. and I'll return result. So, in this code, it's a lot easier to



understand what's happening for someone else reading our code.



I convert the feet parameter to inches by multiplying it by 12.



I then get total inches by adding the feet to inches variable to the inches



parameter value, that was passed to the method. I can then pass total inches, as an argument,



to the first overloaded method, and I'll call that method and assign the return variable to a local



variable which we're calling result. Then I simply return result.



So, although both implementations gave us the same result, coding it this way



is much clearer, and much more readable. Although you'll see a lot of code written



like we wrote the single return statement there, I want to encourage you to practice



writing more readable code. You may ask, isn't it taking



up more memory to write it this way? And it is, but all the local variables in



this method will be eligible to have their memory reclaimed when the method completes execution.



Again, it's a matter of style, and it's more work for you as a developer to



write out four lines of code versus one. But even the future you is less likely to



make mistakes and find reviewing the code at some later date a bit easier.



Ok, so that was the challenge. For this challenge, I didn't include



validation, but I'll be doing that in the next challenge, which is similar to this one.



In the next challenge, you'll be converting seconds and minutes to other time units.



So, you'll often find that when you're overloading methods, you'll be calling



one overloaded method from another, as I did here. In this case, the conversion formula isn't going



to change in the future because centimeters can always be retrieved by multiplying inches



by two point five four. So, I didn't really have



to call the overloaded method. But if your formula or calculation



may change or get updated, you'd want to centralize that calculation into one method.



Then all your overloaded methods can call the one that has the formula code in it,



just as I've done here. This will keep your calculation



code in a single place and prevent inconsistent results if the code is



changed in one overloaded method and not another. Remember that we talked about centralizing and



de-duplicating code in a previous video. Ok, so I hope you got that on your own,



and you're starting to appreciate methods, and overloaded methods, and how they really help make



your code more efficient, and easier to read. I'll see you in the next video.


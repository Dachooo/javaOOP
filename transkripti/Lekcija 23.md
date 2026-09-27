**Setters, Object Creation, and OOP Practice**



In the last video, I set up getter methods for all of the private attributes in our car class.



I talked about best practices for fields and how, in general, fields on classes should be



set as private, and that a getter method should be created to access those fields.



This provides encapsulation of the internals of our class and supports maintenance of a



public interface that doesn't have to change even though our class might.



In this video, I'm going to be talking about and



using setter methods which allow you to set or assign values to fields.



I'll end this video by creating more objects out of the car class



and talking more about that process. I'll be using the code from the last



video where I ended it with the main and car classes in the classes part 1 project.



So now, let's add a setter method in the car class.



I'm going to set this up then we'll talk about it: I'll make a public void set Make method,



with a String called make as the parameter. make, equals, make.



I've defined a public method that doesn't return anything, it's void because,



setter methods set data, they don't retrieve it, so they don't need to return data.



The parameter is going to be string because that's what I'm setting.



The field make is a string. And what I want to do is assign our field make,



to the value passed as an argument to the method. But is that what this is doing?



Notice that IntelliJ has underlined make in every instance here.



If I hover over each of these, IntelliJ's giving me a different warning.



Hovering over the parameter, I get "reassigned parameter".



Hovering over the first make, I get the warning "the value make assigned to make is never used".



And finally, hovering over the second make in that statement, I get yet another warning message,



"variable make is assigned to itself". That introduces another problem.



The problem here is I've got two different types of variables.



If you think about it, I've got the field named make that I have defined up here.



But I've also got another one in here called make. Now obviously, this one here is a parameter



that's been passed to this method. In the code, as I've written it,



I'm not really setting the field named make to the parameter named make.



What I'm really doing here is assigning the parameter make to itself.



So, how do we distinguish between the two? Because as far as IntelliJ or Java's concerned,



I need to be specific to say which one I want to update.



What I want to do here is to actually update this field, private string make,



with the contents of the argument that was passed to me and update it in here.



So, how do I do that? Well, it turns out there's



a way to do that and that's with a keyword we haven't yet seen before called, THIS.



THIS is a special keyword in Java. What it really refers to is the instance



that was created when the object was instantiated. So, THIS is a special reference name for the



object or instance, which it can use to describe itself.



And we can use THIS to access fields on the class. So, because I'm trying to set the field name



make's value, and not the parameter named make's value, I need to add this to the code as follows.



THIS dot make, equals, make. And by doing that, all the warnings are gone.



So, what that's done now is told Java that we want to update this variable here,



private string make, with the contents of the parameter make that was passed to this method.



So, that's a way of updating the make attribute on car using a method instead



of trying to access it directly. I'll go back to the main method and



replace that first commented line with code that calls this new setter method on car:



car dot set make, and I'll pass the literal string, Porsche, as the argument.



And now, if I run this. You can see that my car isn't



using the default make, but rather, it's using the make I set it to, Porsche, in both of these cases.



I really don't want to manually code all of these setters like I did this first one.



I'll use IntelliJ code generation to create the rest of the setters for me.



I'll set my cursor after the last method, set make, but before the describe car method,



and then select "code" from the toolbar items, then "generate", then I'll select "setter".



Now, I can pick our 4 remaining attributes as I did previously with the getters:



And now, IntelliJ has added 4 new methods to my class, set model, set color,



set doors, and this time, set convertible. So, just to show you how that would work,



I'll go back to our main class again. I'm going to delete the two lines



of code that are commented out, and I'll add calls to these new setters.



And now, everywhere I set an attribute, I'll call the setter method instead:



car dot set model, with Carrera as the argument. car dot set doors, passing the number two. car



dot set convertible, passing true. car dot set color, passing the string literal, black.



And running that: Now, I see all the



values I set on the car, and not the defaults. Let's talk about the concept of why you would



want to use getters and setters. Why am I doing this set make?



What is the advantage of using a method like this? Well, for one thing, by using the dot set make,



one thing I could do is, for example, go back to our car dot java.



Looking at the set make method, our setter, I could do some validation.



Let's add some validation to this method. I'll add a test for make being equal to null,



and if it is, setting it to the string literal, unknown. string, lowercase make, equals,



make dot and a call to the method, to lower case. switch, lower case make, in parentheses. case,



each in double quotes, holden, Porsche, comma, Tesla, return type, THIS dot make, equals,



make. default, return type, left curly brace. THIS dot make, equals, unsupported, in double quotes.



So first, in this code, I check if the argument being passed is null.



If it is, I set the make to "Unknown". Next, I'm using a method on string to



create a new string. This expression



shouldn't be completely unfamiliar to you. I know that the make parameter is a string,



or more correctly, it's an object of type string and because of that, I have



access to many methods on instances of string. One of these methods is this one, to lower case,



which returns a new string that's all lowercase. I'll use the switch statement on this variable,



and test if it's one of the three makes I support. These are Holden, Porsche, and Tesla.



If the make matches one of those, I'll set the make field to the argument passed.



But if it doesn't, I use the default case and set the make field to "Unsupported".



So now, I've built a rule that I'm supporting only three manufacturers.



And I'll enforce that rule so that if anything else is passed, I set make to "Unsupported".



But if the argument is null, I set it to "Unknown".



So, let's test this. Going back to main dot java,



I'll change the make from "Porsche" to "Maserati": car dot set make, and I'll pass Maserati,



as the argument. And running that:



We see that make becomes "Unsupported" and not "Maserati".



So, you can see how it's very useful to have validation functionality like this.



What you can do with the setter methods is set up all the rules related to that class,



what is valid, and what is not valid. You can have all that functionality set



up within the car class itself, so that these rules are in place as we're creating the object.



What that means is, the code that's creating objects can't make invalid objects.



In other words, it can't assign a make that I haven't defined as being valid in my car class.



So that's the reason, and that's really the whole concept of encapsulation. Not allowing



people to access the field directly. We force them to go through a controlled



way of setting up the data on the object. Using a setter method, we can really make



sure that the data in our objects is valid data. Let's revert that last line for the set make



method from passing Maserati back to passing Porsche.



So, I've covered setter and getter methods and why you might want to use them.



Now, let's just talk a little bit about declaring variables using classes.



I want to show you what happens if I don't do this first line here, car, car, equals new car.



If I comment that second bit out there, equals new car, so I've just got a variable.



So, I'll comment that out and just define the variable:



I haven't initialized it.



I haven't included the equals new Car part. Already, IntelliJ is saying, "Variable car



may not have been initialized" on line 6 where I am attempting to call



the setter method on the car variable. I can't use an uninitialized variable,



which car is, because I haven't assigned any object reference to it.



But now, consider what happens if I instead assign null to car.



So, IntelliJ is not showing any errors when I do this, but let's try running it.



I actually get an exception, null pointer exception, and the additional



information that I cannot invoke the set Make method because car is null.



And what that essentially means is I've defined a variable called car, but it doesn't have a



reference to a valid instance of a car. So, I can't run a method on null,



and I couldn't set or get attributes on null. So, there's a distinction here I want to point



out between an uninitialized variable and a variable with a null reference.



An uninitialized variable, as we saw in the first instance, causes a compile-time error.



But a variable with a null reference can be used in code without compiler errors but will throw an



exception at runtime, as it did for us just now. In both of these scenarios, I haven't created an



object from the car template, which of course is the class.



The bottom line is to make sure when you're creating objects, that you always use the



keyword new, and then include the name of the class, and then follow it with the parentheses,



and optionally, any arguments in the parentheses. So, let's revert that code back so that



I'm assigning new car to the car variable. You can see how this concept of a user-defined



data type is coming back because I've introduced a super data type of type Car that has five fields:



make, model, doors, convertible, and color. But I've also assigned some methods to it as well.



So both the state and the behavior are part of the class.



This is very powerful, as you can see. Before I end this video,



let's create a second instance of car. And now, let's copy and paste the code I



used to set attributes on the car object, and edit that code to set some of the attributes on Targa.



I'll change the model to be Targa, the color to be red, and set convertible



to false, but leave everything else. And I'll print that out using the describe



car method on the car class. And if I run that.



We can see I have different attributes or state on that second car object which I called Targa.



But I think you will agree that this code is ugly. There's a lot of duplication of code, and it's



somewhat painful to set data one field at a time, on each car object we create.



And I've only got five fields set up on it, so imagine if you had many more.



We'll be looking at a better way to set data on an object, but in the next video,



I'll give you a challenge so you can put into practice some of what I've covered,



the basics of class and objects.



After that, I'll talk about that better way to set data on an object.



So I'll see you in that next video and after that, I'll talk about constructors.







**Classes Challenge: Building a Bank Account**



In the previous videos, I've been talking about classes.



It's now challenge time. I want to challenge your understanding of those previous videos.



So, here's what I want you to do. Create a new class for a bank account.



Create fields for account characteristics like:



account number. account balance. customer name. email. and phone number.



Create getters and setters for each field. Create two additional methods:



one for depositing funds into the account. and one for withdrawing funds from the account.



A customer should not be allowed to withdraw funds if that withdrawal takes their balance negative.



Create a new project called ClassesChallenge with the usual Main class with the usual main method.



You'll create an instance of an Account class and then test your withdraw and deposit methods.



You'll print information to the console that confirms what the



balance is after the methods are called. So, pause the video and try that out,



and when you're ready to see my solution, come back and I'll go through it.



How did you get on? Did you figure it out?



Let me show you my solution. So, I've created a new project



called classes challenge, with the usual main class and main method:



So, what I'm going to do first, is create a new class.



I'll right-click on the S R C folder, and select new, then I'll select Java Class.



And I'll call this Java class, account. Now, I'll add my fields, I've said I want



five of them, and I'll make them all private: private, string, number. private, double, balance.



private, string, customer name. private, string, customer email. private, string, customer phone.



You may have made the account number numeric, maybe an integer or a long,



but I've made it a string here. Either way is fine for this exercise.



But for the balance field, I want that to be a real number, to support both dollars and cents,



so here I've used a double. And the remaining fields



are pretty self explanatory. Next, I want to create getters and setters.



In the previous video, I used IntelliJ's code generation tools to first create getters. Later,



I generated setters. But you can also generate



both getters and setters all at once. I need to make sure my cursor is within



the class's code block and positioned where I want the getters and setters to be inserted.



I'm going to set my cursor at line 9, inserting an extra line before it.



So, I'll go into the code menu and click on generate, where you can see on my computer,



and alt plus insert does the same thing. So, click on generate, and you can click



on either getter or setter as I did before, but this time, I really want



the option that says getter and setter. Next, I need to select which fields I



want getters and setters for. I can select one or more,



and I can see the F indicates that these are fields, and the lock means the field is private.



Let me select all five of my fields and hit OK. So, that's a pretty cool way to very quickly



get getters and setters created. IntelliJ IDEA has a lot of other cool



automation for code, and you will see other examples as you progress through the course.



Next, I need to create two methods, a deposit and a withdrawal method.



I'll start out with the deposit method. It's going to be a void method,



and I'll call it deposit funds. I prefer to insert functional methods before



the getter and setter methods, so I'll insert the code for this method, starting on line 9 again.



public, void, deposit funds, with a double, deposit amount, as the parameter. balance,



plus equals, deposit amount. I'll use println, to print details of the deposit and balance.



This code takes the value in deposit amount and adds it to the current balance on the account,



using the compound plus assignment operator. You can see here that I'm not using the



keyword THIS, but simply using balance with no other qualifier.



I could've included the THIS qualifier, with the dot notation,



to reference the field balance in both instances. So, I'll add it to the one in the print statement.



But it's unnecessary here, because I'm not passing a parameter named balance, and I haven't declared



any local variables named balance. So, the use of the THIS keyword



and dot notation is optional. Opinions differ on whether including



it improves readability, but whichever way you decide to go, you should try to be consistent.



My personal opinion is to add THIS, to remove any doubt that its referring to a field in the class.



That said, in this class, if I don't need to use it outside of a setter,



I'll just omit it, just to show you both ways. Now I'll add the withdrawal method on line 16.



Again, the return type is void. public, void, withdraw funds, and the



parameter is a double, called withdrawal amount. I'll test if there are sufficient funds available



for the withdrawal. If there are not sufficient funds available, I'll use println to tell the



user there are insufficient funds and also display the balance. else. deduct the requested withdrawal



amount from the balance. and print how much was withdrawn and the balance remaining.



So, I first check if subtracting the withdrawal amount is going to take the balance negative.



If it is, I won't allow it and will print a message to that effect.



Otherwise, I use the minus compound operator, subtracting the value of withdrawal amount



from the balance, and printing a message with the updated balance.



Ok, so that's my functionality for my account class.



I'll now test if it works. I'll go back to the main class,



and I'll create a new account, assigning it a variable I'll call bobs account.



account, bobs account, equals, new, account, parentheses. bobs account, dot, withdraw funds,



passing one hundred point zero, as the argument. I'll try running that and see what happens.



And sure enough, I get insufficient funds; I only have zero dollars in my account.



So, that's good, it's doing what it should be doing.



It's not allowing me to withdraw more funds than I actually have.



And remember, when I created this account, I didn't actually set the balance to anything, so



balance was assigned Java's default value of zero. So, I'll put some money in there then



test withdrawing some funds: bobs account, dot, deposit funds,



passing two hundred and fifty as the argument. Then, bobs account, dot, withdraw funds, passing,



fifty as the argument. I'll try running that.



Now, you can see that I've processed a deposit,



adding two hundred and fifty dollars to the account, which left it with a



balance of two hundred and fifty dollars. Then, I withdrew fifty dollars, and you can



see that was ok, and I now have two hundred dollars left in the account.



So, let's see if I can withdraw everything from the account:



Bob's account dot withdraw funds, two hundred. And running that.



I get the last line that says I was successful at taking all of the money out.



I'll try one more test using a few cents in there. bobs account, dot, deposit funds, and one hundred



this time. bobs account, dot, withdraw funds, and forty-five dollars and fifty-five cents. bobs



account, dot, withdraw funds, and now fifty-four dollars and forty-six cents.



And running this code. I was able to withdraw



the first amount, forty-five dollars and fifty-five cents, from the account.



But the last attempt to withdraw the funds shows that there isn't enough money in there.



I was trying to withdraw fifty-four dollars and forty-six cents, but I was a penny over,



and therefore, the withdrawal was not allowed. If I add one more withdrawal,



this time for the exact amount. bobs account, dot, withdraw funds,



passing fifty-four dollars and forty-five cents. And running that.



You can see that the last withdrawal worked, letting us again withdraw the



exact amount in the account. So, that's it.



That's the challenge. Hopefully, you managed to complete it.



And you've now really created your own class for the first time, which is fantastic.



Now of course, I didn't actually set values for the other fields, so lets do that.



bobs account, dot, set number, passing, 1 2 3 4 5. bobs account, dot, set balance to



exactly one thousand dollars. bobs account, dot, set customer name to Bob Brown. bobs



account, dot, set customer email to my email at bob dot com bobs account,



dot, set customer phone to 087 in parentheses then 1 2 3, dash, 4 5 6 7.



So, you can see there's lots of typing there if I wanted to set the field values for the first time.



And if you had 10, 20, or 30 fields, it would be really tedious to set the data in this way.



There's another way of doing this, when creating an object



for the first time, and that's using constructors. So, I'll be talking about that in the next video.


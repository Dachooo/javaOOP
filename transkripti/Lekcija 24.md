**Constructors Part 1: Object Initialization**



In the last video, I had you complete a challenge and when completing my solution, I ended it by



setting fields on an instance of the account class, which I referred to as Bob's account.



I talked about how it is a little tedious to call the setter method for each field.



There is another option to do this, and thats by using something called a constructor.



A constructor is used in the creation of an object.



It is a special type of code block that has a specific name and parameters, much like a method.



It has the same name as the class itself, and it doesn't return any values.



You never include a return type from a constructor, not even void.



You can, and should, specify an appropriate access modifier to control who should be able



to create new instances of the class, using this constructor.



What you can do with a constructor is, essentially, set the values



of the fields in your instance of a class. In addition, you can add other initialization



code you want to perform, in the constructor. So, let's make use of a constructor.



First, I'll edit my account dot java class and add a constructor.



Firstly, it turns out that a constructor is created for us, implicitly, by Java.



When I say things are implicit in Java, I mean we can't see the code in the source,



but it's in the byte code, generated during the compilation process.



So, when you actually type new, and the name of the class, and then parentheses, this is



actually calling that implicit constructor. I didn't explicitly create a constructor in the



account class, so Java created one for me. This is called the default constructor.



If a class contains no constructor declarations, then a default constructor is implicitly declared.



This constructor has no parameters and is often called the no-args (no arguments) constructor.



If a class contains any other constructor declarations, then a default constructor



is NOT implicitly declared. There are other rules for the



default constructor, which I'll talk about later, at the appropriate time.



For now, it's important to understand that a constructor exists, whether



you explicitly declare one or not. This is why creating an object with



the new keyword and passing no arguments in the parentheses is supported in nearly all cases.



This code is actually calling that special constructor that creates the class.



Its purpose is to create the object from the class.



Lets create our own constructor in the account class.



public, account, parentheses,



left curly brace. I'll print a message confirming the constructor was called.



Confirming the rules for a constructor are as follows.



First, its name has to be the same as the class, and two, it has no return type, not even void.



And I also used an access modifier; here, public. I'll talk about when you'd want to use other



access modifiers later in this section and the next.



I've done nothing else here, just added this constructor.



This is normally created for you automatically, but here, I've typed it in and added that println.



So, what will happen is when I go to compile this, Java will look at that and go, "Okay,



you're creating your own constructor, I won't try and overwrite it."



If I run this now, what I should see at the top before any other output is the message I put in



the constructor: "empty constructor called." So, when I type new account, with parentheses



and no parameters, that is Java's cue to call the constructor I just added.



This is an explicit constructor without any parameters or arguments,



and I've added functionality, which is just printing that statement.



The purpose of the constructor is to essentially initialize the object that



I'm creating and do whatever else I need to do while the object is being instantiated.



It's only ever called once, at the start, when I'm creating the object.



A class can have one or many constructors, one of which can be a no args constructor.



So now, I'll add another constructor, and this time I'll declare some parameters.



Doing this will let me pass values to the constructor.



I can then use these values to assign data to my fields instead



of calling a whole bunch of setters. Ok, so just below the first no-args



constructor, I'll add a second one. This time, it will have five parameters,



one for each of the fields in the account class. I'll include a println statement in this one too.



public, account, and then the following in parentheses. string number, double balance,



string customer name, string, email, and on the next line.



string, phone. I'll print a message to



confirm this constructor has been executed. And then assign the arguments passed to the relevant



field. THIS dot number, equals, number. THIS dot balance, equals, balance. THIS dot customer name,



equals, customer name. customer email, equals, email. customer phone, equals, phone.



Ok, so I just want to point out a few things with this constructor.



First, of the five parameters I have defined here, two of them,



email and phone, don't match the field name. It's common practice to make the parameter



names, the same as the field names, but it's not required.



If I do make them the same, then I need to use THIS dot before the field name, as I've done here,



and just like it was done in the setter methods. So,looking at the first use of THIS,



in the constructor, you can see I'm setting THIS dot number equals number.



This means I'm assigning the value from the parameter variable, number,



to the field called number in this instance of the account class, that is being created.



But I don't need the THIS with the dot notation for customer email or customer phone because



these field names are different than the parameter names. As such, there is no confusion for Java to



try and figure out whether you were referring to the field name or the parameter name.



By the way, I haven't mentioned this before, but IntelliJ is highlighting the instance fields



in purple for easy identification. Compare that to the parameters for the constructor,



they are not highlighted in the same color. So, if I go back to main dot java,



I can now change the way I instantiate Bob's account, passing all the values



to the call to the new keyword. I'm also going to comment out all the



setter methods to show they're not needed anymore. They're being replaced with a single statement.



account, Bob's account, equals, new, account, and in parentheses, I'll pass, 1 2 3 4 5 as a



literal string, one thousand point zero zero. Bob Brown, and then, my email at Bob dot com.



zero eight seven, in parentheses, space, one two three, dash, four five six seven.



And running this, I can confirm that I executed the new constructor.



You can see the first statement: "Account constructor with parameters called."



You can also tell I'm starting with a balance of one thousand dollars, which



is the amount I passed to the constructor. I'll change that amount in the constructor



then print out some information before I execute any withdraw or deposit method calls.



I'll print out the value returning from a call to Bob's account dot get number. And do the same,



but this time, for get balance. And running that.



You see the account number printed as well as the initial deposit amount,



which I changed to five hundred dollars. So, having multiple constructors as I've



done here is called constructor overloading. It looks a lot like method overloading,



doesn't it? Constructor overloading is declaring



multiple constructors with different parameters. The number of parameters can be



different between constructors. Or if the number of parameters is



the same between two constructors, their types, or order of the types must differ.



Let's end the video here. In the next video, we're going



to continue looking at constructor overloading, and I'll talk about when and where you can call



these overloaded constructors. See you in the next video.







**Constructors Part 2: Overloading and Chaining**



In the last video, I talked about constructors, including the default constructor which can be



explicitly declared, and the rules for when it is implicitly declared by Java.



I talked about declaring constructors with parameters and passing arguments,



to set fields on the object being created. I also talked about constructor overloading,



which is similar to method overloading, where you can declare multiple



constructors, with different parameters. In this video, I'll start with the concept



of constructor chaining, which is the process of calling one overloaded constructor from another.



Constructor chaining is when one constructor explicitly calls another overloaded constructor.



You can only use constructor chaining, within constructors.



You must use the special statement this() to execute another constructor,



passing it arguments if required. And this() must be the first executable



statement if it's used from another constructor. We have looked at constructor overloading already.



Let's go back to the code we were looking at in the last video, in the ClassesChallenge project.



Let's look at another example, but this time, I'll use constructor chaining which I've said is



calling one constructor from another constructor. That may sound a little bit confusing,



but I'll cover some reasons why you would want to do this next.



First, I'll use the default constructor to instantiate



an object and pass it some default values. In other words, from the constructor with no



parameters, I'll call the one with five parameters and pass in literal values.



To do that, I type THIS followed by parentheses. Which constructor is called, is determined



by the arguments I pass. I'll add a call to THIS



in the no args constructor, and I'll just pass some literals as arguments.



The type and number of arguments I pass must match one of the defined constructors.



Since I only have one other constructor declared, and it has five parameters,



I'll pass five arguments. The types must match the order of



the types that were declared in the constructor. All of my parameters in the second constructor



are strings except the second parameter which I called balance, and that's a double:



THIS, and in parentheses, fifty-six thousand seven hundred and eighty-nine as a string,



two point five zero, default name also a string. the literal string, default address,



and the literal string, default phone. What I'm doing here with the THIS is a special use



of THIS which you won't see used anywhere else. It's calling another constructor



within a constructor. What I'm saying here is "Look,



if you try and create an object from this class and you don't give me any arguments,



set this new object up with these values by calling the specified other constructor."



Constructor chaining is optional, meaning, it's not something you have to do, but there



can be situations where you want to do this. One other thing to keep in mind when using



THIS to call another constructor is that you have to be sure that it's the very first line



that's executed, in the constructor. I couldn't have println as the first



line in the constructor that also called another constructor, for example. Let me demonstrate that.



Now, I have a compiler error. call to THIS must be the first



statement in constructor body. So, the rules are pretty strict.



You can only use constructor chaining, using the THIS keyword, in a constructor, and only



if it's the first line, in that constructor. Let's revert that change so it compiles.



I'll go back to my main class, and I'll change the code to call the empty constructor.



I'll comment out the one with 5 parameters and add the no args call:



account, Bob's account, equals, new, account. And running that, you can see that I get



the println statement from both constructors. They're actually both called as you can see there.



The reason why you see it in that order makes sense if you think about it.



If you come back here to the account dot java. You see, the very first line of the no arguments



account constructor called the other constructor with five parameters.



So, the statement in the five-parameter constructor was printed first.



The fields were set to the values passed and then the code returned to the no-args constructor.



It then executed the line following the call to THIS,



which printed out, "Empty constructor called". As you can see, fifty-six thousand seven



hundred eighty-nine and two point five were actually passed, and these are printed out.



It's obviously working. The default constructor is making a call to the five-parameter constructor



which sets the fields to the values I specified. Let's look again at this



constructor with many parameters. You may have noticed, looking at this code,



is that I've actually updated the fields directly. I didn't call the setter methods



from the constructors. So, there's an alternative. What



I could've done is something like this. set number, and number in parentheses.



If I had some validation in that setter that was testing for valid numbers and



or some other functionality, I could actually execute that code as well.



There are conflicting opinions as to which is the best approach.



Because you'll find out in following videos when I start talking about inheritance and



creating subclasses, these calls to setter methods might not work.



The general rule of thumb is, it's always better to assign the values directly to the field,



rather than calling the setter in a constructor. Because as you'll see in the next video, and as



I just mentioned, there can be scenarios where this code that's in this setter isn't executed.



By going back and actually coding it directly, in other words, going back and setting it to THIS and



whatever the field name is, you're guaranteed that the field values will be initialized.



My general rule of thumb with constructors is, don't call setters or any other method other than



another constructor, within those constructors. Now, the other thing I want to show you is



another shortcut that IntelliJ has for constructor creation.



Let's just assume that I wanted to create another constructor, and for this one,



I only want to pass the customer name, email address, and phone number.



I could do that by creating another constructor, by copying and pasting from an existing



constructor into a new one I created manually. But IntelliJ gives us yet another code generation



tool, this one for constructors. I'll position my cursor after the



second constructor on line 25 after a couple of additional empty lines.



Next, I'll click on "code" on the menu and select "generate" as the menu option.



Then I'll select the first option which is constructor, and it asks which field or fields



I want to include in the constructor. So, which ones am I going to have



arguments passed to? In other words,



which fields do I want the constructor to set? Let's pick the three I talked about: customer



name, email address, and the phone number. When I hit ok, I get a new constructor



generated for us, setting the instance fields to the parameters passed.



So, there's our third constructor. You can see that only three out of five



fields have been set values. Account number and balance have not been assigned a value.



But I could call the five-argument constructor and pass a couple of default values,



for these two fields, so let's do that. I'll also comment out the initialization



code because I'll be initializing them in the constructor with five parameters:



THIS, and in parentheses, the string literal, ninety-nine thousand nine hundred and ninety-nine,



one hundred point five five, customer name, customer email, and customer phone, which are



the parameter names passed to this constructor. I'll comment out these three lines now,



because setting of those instance field values is now performed in the 5 parameter constructor.



So, you can see what I've done there is I've defaulted two parameters:



the account number to be ninety-nine thousand nine hundred and ninety-nine and the default balance to



one hundred dollars and fifty-five cents. So, I've come up with default values for



these two fields, because they weren't specified as arguments.



And I've called our major constructor. This is the one that actually



updates all the fields. So, you'll find, as you start



creating and writing more complex code, it's not unusual to see multiple constructors like this.



And in that situation, often you do all your initialization in the one



constructor like you can see here. All other constructors can call



that major constructor, passing default values or null references as arguments.



That's a good way of doing things, and it often leads to really good coding because you're not



having to duplicate code by duplicating initialization in more than one place.



\--- How do I call this



new constructor when creating an account? I would call that very much the same



as I've been doing before. Let's create a new object here



using this three-argument constructor. So, going back to the main class in



main dot java and adding my code just before the last bracket of the main method block:



account, Tim's account, equals, new, account, and in parentheses, the string literal, Tim.



and string literal, Tim, at email dot com, followed by



the string literal, one two three four five. I'll use println to print the value returned from



tims account dot get number. And also print the value returned from a call to get customer name.



Let's just run that to make sure that it's working.



And you can see the last line in the output is from the new account, Tim's account.



Ninety-nine thousand nine hundred and ninety-nine was the default



account number that we used in the three-argument constructor,



in the Account class, as you can see. And the name was Tim which, of course,



was what I passed here. So, that's constructors.



You'll see those used extensively in Java. I'll be using them a lot in this course as we



move forward because they're a very important part of creating objects from classes.



Okay. So, it's time for



a challenge on constructors in the next video to test what you've learned. So, I'll see you there.









**Constructor Challenge: Building Customer Data**



In this video, I'm going to give you a challenge to review what you



have learned about constructors so far. So for this challenge, you'll want to:



Create a new class, called Customer, with three fields: name. credit limit. and email address.



Create the getter methods only for each field. You don't need to create the setters. Create



three constructors for this class: First, create a constructor for all three fields which should



assign the arguments directly to the instance fields. Second, create a no-args constructor



that calls another constructor, passing some literal values for each argument. And lastly,



create a constructor with just the name and email parameters, which also calls another constructor.



Okay, so that's your challenge. And, you will want to test and



confirm that your solution works by writing code in the usual main class and main method.



So, pause the video now, and see if you can complete the challenge.



Okay, how did you get on? Did you figure it out?



Let's get started on my solution. I've created a project called



"constructor challenge" with the usual main class and the main method.



I'll show the project panel here on the left, and then I'll right click on the S



R C folder because I want to select "new" from the menu options, then Java class.



And I want to call this new class, customer. And next, I'll add the three fields,



making them all private, which supports encapsulation of my data.



string, name. double, credit limit. string, email. Ok, so I have my fields setup, but I can't



access them with my test code. If you recall, the best practice



way is to use getters. So, I'll add those next.



For this, I can use IntelliJ's code generation features, which I've shown you before.



I'll select code, and then generate. And then, I can select "getter" and



select all three of my fields. And now, IntelliJ adds all three



of my getters to the code: get name, get credit limit, and get email.



Ok, so far so good. Next, I need to create the constructors,



starting with the constructor that takes all three parameters, one for each of my fields.



I'll use IntelliJ's code generation again for this first one.



With my cursor set again on line 7, I'll use the code menu, then generate.



Then, I select constructor, and again, select all three of my fields.



And clicking ok, IntelliJ inserts the constructor, as you can see,



public customer with three parameters. By default, IntelliJ has set this up to use



the THIS keyword and the dot notation here in the generated constructor.



You'll hopefully remember that we need to use this special qualifier when our parameter names



are the same as our field names, which is how IntelliJ generates this code.



So, now that I have a constructor, I'll test it out.



First, I need to write some test code in the main dot java class:



customer, customer, equals, new, customer, passing 3 arguments. The first



is the literal string, Tim, then one thousand. and a second literal string, tim at email dot com.



Now I'll use println to print the value returned from the three getters.



So, I've created a new object of type customer, and at the same time,



passed data to the constructor: the name, the credit limit, and the email.



And then, I print out all three fields using the getters.



And running that, I get the values back that I passed to the constructor.



So, I've confirmed the three-parameter constructor is working.



Let's just see what happens if I try to create a customer using the default constructor:



customer, second customer, equals, new, customer. And you can see, this code doesn't compile.



I wanted to show this to you for a reason. The reason is to remind you that the default



constructor, the no arguments or empty constructor, as it's sometimes called,



won't get implicitly created if we create any other kind of constructor in our class.



Because we've created a constructor already, I need to create the no-args constructor manually.



I'll just comment that line of code out for the moment.



Ok, so I'll add the next two constructors. Going back to the customer class,



I'm going to, again, use the IntelliJ generator to create a constructor.



And again, I'll set my cursor on line 7 where I want the constructor to be inserted.



So now, select "code" and then "generate". Next, I'll select constructor, and from the list



of fields, I just want to pick name and email. And now, I have this next



constructor generated for me: In this constructor, I wanted you to see



that IntelliJ doesn't use constructor chaining. It will generate the code, setting the



attributes this way for each parameter. But that's not what the challenge asked us to do.



The challenge said we should call another constructor.



It didn't really tell us which one, but here, I'll change the code to call the



three-parameter constructor. So, I'm going to delete these



two lines of code on line 8 and line 9. And now, I want to call another constructor.



Hopefully, you remember, there's only one way to do this,



and that's with the call to the THIS statement. THIS, passing name, one thousand, and email.



I'm passing name and email as arguments, but I'm hard coding the credit limit to



one thousand here as the other argument. One thousand is the hard coded, default value,



for customer objects that are created with name and email only, not specifying an amount.



But before I test this, I'll add the final constructor, the no-args one.



Again, at line 7, I'm going to insert this new constructor.



I personally like to organize my constructors from the least number of parameters to the most, but



this is a matter of personal style and not a rule. public, customer. this, parentheses,



and I'll pass the string literals, nobody, and nobody at nowhere dot com.



Ok, so what' have I done here? Why am I only using THIS, with two arguments?



Well, this one is calling the constructor that takes two parameters and sets the



default credit limit to one thousand. So, I'm chaining two constructors, really.



I could have simply called the three-parameter constructor like so.



But if, for some reason, the default credit limit changed, I'd need to change it in two places.



So, I'm going to revert that back. Ok, so let's test these constructors out.



Going back to main dot java, I'll first uncomment out that line I added previously



We can see that compiles now, because the no-args constructor exists.



I'll also add some print statements for the second customer variable.



I'm just going to copy and paste lines 6 to 8, and change customer to second customer:



And running that code. You can see,



the no arguments constructor was executed. So, it passed the values nobody and nobody at



nowhere dot com to the two-parameter constructor. That constructor then passed those values and the



one thousand credit limit as the default value to the three-parameters constructor.



So, this is constructor chaining. And just for good measure,



I'll add a third customer that uses my two-parameter constructor directly.



So, I'll add a third customer variable to the code, and then copy and paste the



println statements as I did previously. customer, third customer, equals, new,



customer, joe as the first argument, and joe at email dot com as the second.



And running that now



prints out Joe's information but also with a one thousand credit limit.



So, I've used all three of my constructors in this code.



In addition, two of my constructors, in turn, leveraged code in other constructors by chaining



them using the special THIS call to do it. Ok, so that was the challenge.



Hopefully, you got a lot out of that. In the next couple of videos, we're going



to review some terminology topics to hopefully answer any questions you might have about a class,



an object, an instance, and a reference. And we'll look more at static



and instance fields and methods. So, I'll see you in the next video.


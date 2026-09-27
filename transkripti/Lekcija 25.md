**Understanding References, Objects, and Instances**





In this video, I'm going to discuss, and hopefully clear up any confusion about references,



vs. objects, vs. instances, vs. classes. By now, you've probably noticed that I



use the words reference, object, instance and class frequently.



These new concepts may well be confusing at first. In this video, I'm going to go through all these



terms, and show you exactly what each of these words mean in the context of Java programming.



You might remember in an earlier section of the course that I showed you this slide.



I stated that object and instance are interchangeable and that we



create an instance or object using a class. These new concepts may well be confusing at first,



so let's talk about them. Let's use the analogy of



building a house to understand classes. A class is basically a blueprint for the house.



Using the blueprint, we can build as many houses as we like based on those plans.



So, thinking back to the physical world, we use the plans for the house, to build many



houses that have the same floor plan. Each house we build (in other words,



going back to programming terms, each house we instantiate using the new operator) is an object.



This object can also be known as an instance. Often, we'll say it's an



instance of the class. So, we would have an instance of house in this example.



Getting back to the physical world, each house we build has



an address (it's built at a physical location) In other words, if we want to tell someone where



we live, we give them our address (perhaps written on a piece of paper). So that piece of paper with



the address on it, This is known as a reference. We can copy that reference as many times as



we like, but there is still just one house that we're referring to.



In other words, we're copying the paper that has the address on it, not the house itself.



Or we're writing that address on another piece of paper. Now, back to programming terms,



We can pass references as parameters to constructors and methods.



Let's now just go a bit deeper to make this a little bit more clearer.



Alright, so I've got some code on the screen now. On the left-hand side, I've got the class house



with an instance variable, also known as a field, called color.



On the right-hand side, I have the main class with the main method.



This code in the main method is creating instances of the house class, changing



the color, and printing out the result. Let's actually go through line by line



and see what happens when this code is executed. Alright, so looking at this first line that I've



got highlighted in red on the right-hand side. The house blue house equals new house,



blue in parentheses and double quotes, this code creates a new instance of the house class.



So remember, house is a blueprint, and I'm assigning it to the blue



house variable. So in other words, it's a reference to the object in memory.



And you can see that hopefully on the left-hand side and that it makes a bit more sense there.



Blue house is the variable, I'm creating a new instance of the



house class and assigning it the color blue. This next line that I've got highlighted:



house another house equals blue house, creates another reference to the same object in memory.



What I've got now is two references, pointing to the same object in memory.



There is still one house, but two references to that one object.



Going back to the physical world analogy, I've got two pieces of paper with the physical address of



where the house is built, written down. Next, on the right-hand side,



I've got two println statements highlighted. They print the value of the color variable



for blue house and also another house. In this scenario, both will actually



print blue and that's because, again, I've got two references to the same object.



And again, you can see that on the left-hand side there.



Hopefully that image showing both references to the same house which is blue makes that



clearer as to how this is actually working. Alright, so this next line I've highlighted



here, another house dot set color, yellow, well, that's calling the



method set color and setting the color to yellow. Now to the left, you can see that both blue house



and another house now have the same color. So, why is that?



Well, remember that I've got two references that point to the same object in memory.



Once I change the color of one, both references still point to the same object.



So consequently, they've both got the same value of yellow, in this example.



In a real world example, there's still just one physical house at that one address,



even though I've written the same address on two pieces of paper.



If I went ahead and painted the house yellow then obviously, both references to the physical house



still point to a house that is now yellow. I've got a couple more println statements



here which I've highlighted. These two println statements



are printing the same color. Both are printing yellow because



again, I've got two references that point to the same object in memory.



And again, you can see that defined with the arrow on the left-hand side of the image,



one instance pointed to by two objects. Okay, so moving on.



What I'm doing now is, with that next line that's highlighted on this slide,



house green house equals new house, green. That code is creating another new instance



of the house class, this time with the color set to green.



So now, I've got two objects in memory, but I've got three references.



And those references are blue house, another house, and our new green house.



The variable or reference, green house, points to a different object in memory, and that's the one



I just instantiated using the new keyword here. But blue house and another house point to the



same object in memory, the previous house we created at this point.



I've highlighted this statement; another house equals green house.



What I'm doing here is, I'm assigning green house to another house.



In other words, I'm really dereferencing another house.



And it will now point to a different object in memory.



Previously, it was pointing to a house that had the yellow color, but now it's pointing



to a house that's got the green color. In this scenario, I still have three



references and two objects in memory, but blue house points to one object while another



house and green house now point to the same object (which has the color green) in memory.



And finally, I've got these last three print line statements.



The first will print yellow since the blue house variable or reference points to the



object in memory that has the yellow color. The next two lines will print green,



and that's because another house and green house point to the same object in memory.



So keep in mind that in Java, you always have a reference to an object in memory.



There's no way to access an object directly, everything is done using that reference.



Finally, Consider the code on this slide for a moment.



On the first line, I create a new House and make it red.



But I am not assigning this to any variable. This compiles fine and you can do this.



This object is created in memory, but after that statement completes,



my code has no way to access it. The object exists in memory,



but I can't communicate with it after that statement is executed.



That's because I didn't create a reference to it. On the second line, I do create a



reference to the house object I created. My reference, the variable I call myHouse,



lets me have access to that beige house as long as my variable, myHouse, stays in scope. Or until it



gets reassigned to reference a different object. On the third line, I'm creating a red house again,



but this is a different object altogether from the red house I created on line one.



This third statement is creating yet another house object in memory which has no relationship to the



one I created on the first line. This code has three instances



of house but only two references. That first object will stay in memory



with no reference to it until Java's automatic process (appropriately called garbage collection),



figures out there is no running code with a reference to that object and deletes it.



In fact, That first object is said to be eligible for garbage collection immediately



after that first statement. It's useless to the code



because It's no longer accessible. There are times we might want to instantiate



an object and immediately call a method on it, and not assign the object to a variable reference.



I'll show you some reasons later on in the course. But 99 percent of the time, we'll want to



reference the objects we create, so we'll immediately assign our new instance to a variable,



creating a reference to communicate with it. Alright, so hopefully that now



made it a little bit clearer. Let's move on to the next video.







**Static vs. Instance Variables in Java**



Let's discuss the differences between static variables and instance variables.



Firstly, a static variable is Declared by using the keyword static.



Static variables are also known as static member variables.



Every instance of the class shares the same static variable.



If changes are made to that variable,



all other instances of that class will see the effect of that change.



It is considered best practice to use the Class name and not a reference variable



to access a static variable. This makes it clearer that the



variable is associated with the class and therefore not stored with the instance.



An instance isn't required to exist to access the value of a static variable.



Static variables aren't used very often but can sometimes be very useful.



They can be used for: Storing counters. Generating unique IDs.



Storing a constant value that doesn't change, like PI, for example. Creating and controlling



access to a shared resource. Some examples of shared resources include a log file, a database,



or some other type of input or output stream. ; In this example, I've got a class called dog,



and it's got a static variable called name. There's a constructor that sets the



static variable to the parameter value passed to the constructor.



And I've got a method called print name, which isn't static.



That's a pretty simple class, and inside main, I'm creating two instances of the dog class



with the line: dog Rex equals new dog, Rex. I'm creating an instance of the dog class



and at the same time, passing the string Rex as an argument. That will be the name of the dog.



On the next line, I've got a similar situation, passing the argument, fluffy.



Then I call the print name method on both of the instances.



They're just regular instance methods because they aren't defined using static.



So, both method calls will print fluffy. You might be wondering, why is that the case?



Why would both methods here print fluffy? Well, remember that static variables



are shared between instances. Once we change the static variable,



all instances will see the change we made. When I called the constructor with the argument



fluffy, it modified the static variable name because both instances were sharing that variable.



That's why it prints fluffy twice. You could also say that both dogs



have the same name, but that's logically incorrect. There is only one static field.



Hopefully, you can see how static variables can be used



inappropriately sometimes, as in this example. Probably, you were assuming that the dog's name



would be associated with each instance of the dog and therefore would be different for each one.



One dog would be named Fluffy and the other would be Rex.



This is a scenario where using a static variable probably wouldn't be a good idea,



and using a regular instance variable would make a lot more sense.



Let's move on now to instance variables. Firstly, They don't use the static



keyword when you're defining them. They're also known as fields or member variables.



Unlike a static variable, Instance variables belong to a specific instance of a class.



Each instance has its own copy of an instance variable.



Every instance can have a different value. Instance variables represent the state



of a specific instance of a class. Let's see an example using instance variables.



In this example, I've again used very similar code to what we looked at earlier in the video,



but this time, the variable name in the dog class isn't static.



Rather, it's just a regular instance variable. Once again, the constructor is setting the



value from the argument passed to that instance variable.



But now the code will print Rex and on the next line Fluffy, and that's



because I'm using instance variables. Each instance of the class has its own



state or its own values for any variables that have been defined.



Because we are using instance variables, every dog has its own value for the name field.



It's not shared like it was before, when a static variable was used.



In most cases, you'd probably want to use instance variables,



but there'll be scenarios when it can be useful to use a static variable.



So, that's instance and static variables. Let's move on now to the next video.







**Static vs. Instance Methods Explained**



Static vs. Instance Methods In the last video, I talked about the



differences between static and instance variables. Let's discuss the differences between static



methods and instance methods. Firstly, static methods.



Static methods are declared using a static modifier.



Static methods can't access instance methods and instant variables directly.



They're usually used for operations that don't require any data from an instance



of the class (from THIS) in other words. If you remember, the THIS keyword is the



current instance of a class. Inside a static method,



we can't use the THIS keyword. Whenever you see a method that



doesn't use instance variables, that method should probably be declared as a static method.



For example, main is a static method and it's called by the Java virtual



machine when it starts the Java application. In this example on screen, I've got a class called



calculator with a static method called print sum. And it just prints the sum of two integer numbers.



Then I've got the main class with two static methods. Main and print hello.



Inside main, I'm calling the method print sum from the calculator class.



As you can see, to call the print sum method, I just need to type the class name, in this case,



calculator and then the method name print sum. In the second method call, I invoke print hello,



without using the class name. You can call a static method without using the class name,



if the method being called is in the same class. Static methods don't require



an instance to be created. I can just type the class name and use the dot



notation with the method name to access them. Alternatively, you can drop the class name,



and just use the method name, if the static method being called is in the same class.



Let's move on now to instance methods. Instance methods belong to an instance,



(a specific instance), of a class. To use an instance method, we have to instantiate



the class first, usually by using the new keyword. Instance methods can access instance methods



and instance variables directly. Instance methods can also access



static methods and static variables directly. What I mean by directly is that we don't



usually have to use the keyword THIS with the dot notation to use them.



And we don't have to use the class name with the dot notation to access static variables



or methods, if the static variable or method is in the same class. Although



doing so can help with clarity. In this example, I've got a class



called dog with a method bark. Notice here how the method bark



is not using the static keyword this time. The method is a standard instance method.



I've got the main class with a method main. Inside the main method, I first need to create



an instance of the dog class, and that's done with the line dog Rex equals new dog.



As you can see, I'm using the new keyword to create an instance of that class.



After I've created the instance, I call the instance method, bark,



in this case, by typing Rex dot bark. The hard part here could be deciding



when to create an instance or when to create a static method.



Here are some basic rules that should help you decide.



Instance methods are created more often than static methods,



but let's see how to follow this diagram. The first question I'd ask myself is,



"Should the method be static?". After that question, the next question would be,



"Does it use any instance variables, that is fields, or instance methods of this object?".



Remember, we're asking these questions about the proposed method we plan to write,



so if that's true, then, we'd want to make it an instance method.



In the other scenario, if the method doesn't use or is not proposed to use any instance variables



or instance methods, in that case, then its likely you would choose defining it as a static method.



Generally speaking, if we're not using any fields or instance methods with the new proposed method,



we should consider making that method static instead of a regular instance method.



So, that's the main differences between static and instance methods.



In the last couple of videos, we've reviewed some very important terms.



Hopefully, now, you have a clearer understanding of what an instance, object,



and reference are as well as the differences between static and instance members of a class.



In the next video, I'm going to talk about a class that usually only has fields to store



data. This is called the plain old Java object, or poe joe, and then I'll introduce you to a fairly



new type in Java, the record. See you in the next video.


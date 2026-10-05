**Inheritance - Part 1: The Basics**



In the previous videos, we started working with objects and classes.



It's now time to talk about inheritance, what that is, and how it applies to objects.



What is Inheritance, and why is it so powerful? We can look at Inheritance



as a form of code reuse. It's a way to organize classes into a parent-child



hierarchy, which lets the child inherit (in other words reuse), fields and methods from its parent.



The animal kingdom, with its many classifications, is a pretty good place to



start looking at hierarchical relationships. On this slide, we show a small part of the



animal classification chart. Let's actually start working



through some scenarios in code, so that I can show you what inheritance looks like in Java.



I've created a project called inheritance and created the main class and main method:



First, let's start with an animal example. I'll create the animal base class and define



all the attributes and behaviors that animals have in common.



We know that any animal would have characteristics such as size and weight.



We also know and animals move and make noise. Though animals move and make noise in very unique



ways, I declare the methods on the base class. Let's see what this class might look



like on a class diagram. This is just a drawing of the



class showing its fields first and methods or behaviors in the section below that.



A class diagram allows us to design our classes before we build them.



This diagram shows the Animal class with the attributes I think that every kind of animal has.



All animals have a type (what kind of animal it is).



All animals have a size, and a weight. Below the fields, I have the behavior that



animals have in common: move and makeNoise. The move method will include a speed,



fast or slow, as an argument. Let's create this animal class now.



From the S R C folder, I'll right click and choose new, then Java class, and name the class "animal".



After I have the class in the editor, I'll add the fields from my diagram:



string, type. string, size. double, weight. Ok, those are the fields. Let's add a constructor.



I'll use IntelliJ's code generation tool to do this.



I'll put my cursor below the last field, select "code" on the menu,



then "generate", and then "constructor". I'll select all the fields and hit OK.



Now, I've got my first constructor, as you can see on lines 7 through 11.



Let's keep this code simple, so I'll leave the getters and setters out.



But I do want a method to print the fields out, so again, using IntelliJ's generation tool,



I'll pick "code", "generate", and this time, I'll select too string.



And again, pick all the fields and hit OK. And there's my to string method



with all the fields in it. Ok, so I have attributes, a constructor, and



a way to print out information about the animal, but I haven't implemented any behavior on animal.



I'll add the two methods on animal to achieve this. Namely, move and make noise.



For move, I'll take a speed which will just be a string for fast or slow, and then I'll print the



animal type and the speed at which it's moving. The move method will be void, and as mentioned,



I'll make it have a parameter called speed, which is a string. I'll print the animal



type and how it moves. I'll add make noise



that doesn't have any parameters. I'll indicate that this animal makes noise.



There you have it, I have my base class, the animal, with its attributes, type,



size, and weight, and I have three methods on this class. Too string, move, and make noise.



Next, I want to create a more specific type of animal, and for this,



I'm going to create a dog class. Let's look at a class diagram



that includes the dog class.



Here is the dog class connected to Animal. This means dog inherits from Animal



I can also say dog is a type of animal



When I create a Dog object object, it will inherit the type, size, and weight fields from the Animal class



This don't have to be explicitly declared in Dog



This is also true for the methods move and makeNoise



I can specialize the Dog class with its own fields and behavior



I'll do this here with earShape and tailShape because dogs have ears and tails whose shape



are unique to their breeds.



I'll also add the dogs have behaviors like bark, run, walk, and wagTail



How do I build this in Java



and make dog inherit from animal? Let's create a dog class first.



To specify, I want this class to inherit from animal, I use another Java keyword, extends.



Using extends specifies the superclass (or the parent class) of the class we're declaring.



I can say Dog is a subclass or child class of Animal.



I can say Animal is a parent or super class of Dog.



A class can specify one and only one class in its extends clause.



I'll add that clause to my Dog class. It goes right after the class name and before



the opening curly brace: Now, you notice straight



away that I've got an error. The error that's on the screen is saying,



"There is no default constructor available in the animal class".



And that's true, I didn't create a constructor with no arguments on animal.



But why does this matter to the dog class? Well, right now, I haven't declared any



constructor for dog, but maybe you'll remember that Java will declare a default constructor



implicitly, if we don't explicitly declare one. But because we did created that 2 parameter



constructor, the default constructor was not created automatically by Java.



And just to see that, let's add a constructor to dog, which mirrors the



implicit constructor Java creates for us, if we don't manually create another constructor.



public, dog and parentheses I'll add super, and parentheses.



This is what the implicit constructor looks like, and now, the error is on line 4.



The reason it isn't working is that statement on line 4, super, parentheses.



Ok, so maybe you're asking the question, what's super parentheses?



You'll remember I used the keyword "this", followed by parentheses and parameters, as a way



to call another constructor in the same class. Well, super parentheses is similar to that.



It's a way to call the constructor on the parent class or super class.



Here, I'm calling animal's constructor by using the keyword super and then parentheses,



which calls the default constructor on animal. super() with parentheses,



is a lot like this() with parentheses. It's a way to call a constructor on the super



class directly from the sub class's constructor. Like this(), it has to be the



first statement of the constructor. Because of that rule, this() and super() can



never be called from the same constructor. If you don't make a call to super(),



then Java makes it for you using super's default constructor.



If your super class doesn't have a default constructor, then you must explicitly call



super() in all of your constructors, passing the right arguments to that constructor.



Those are a lot of rules, but don't worry if that's confusing right now.



We'll be reviewing these rules coming up and in future videos.



For now, I have a compiler error on dog because animal doesn't have a default,



or no arguments constructor declared for it. Let's go back to animal and add that in.



public, animal, parentheses. And now, I've got everything



compiling, so that's a good thing. Before I do anything else with dog,



let's go back to the main class. Before I create any instances, I want



to create a method on the main class that'll take any animal object and execute its three methods.



I'll call it do animal stuff and pass it an animal object and the speed I want this animal to move.



And then I'll have animal make noise, move, and then I'll print out all the attributes on animal.



I'll use static and void, and as parameters, I'll define Animal and speed like this. Let's



make the animal do something. I'll call animal dot make noise. Then call animal dot move,



and I'll pass speed as the argument. I'll print out animal here. And print out some underscores.



This method is static because I want to call it from the main method.



The last line is just to separate the data so reading the output is easier.



Let's create an instance of animal first and then pass that to this method:



animal, animal, equals, new animal, and as arguments, I'll pass the literal strings,



generic animal, and Huge, then four hundred. invoke do animal stuff, passing our animal object,



and the literal string, slow. I created an animal object,



gave it the type "generic animal", and the size "huge", as well as a weight of 400.



And running that, I get: Generic animal makes some



kind of noise, and generic animal moves slow. And then I get the data from my too string



method, which prints out all the attributes starting with the class name of the object.



Ok, so that's a generic animal. Let's create a dog this time:



dog, dog, equals, new, dog, and parentheses. Invole do animal stuff, passing the dog object,



and the literal string, fast. Before I run this,



do you notice what I'm doing here? I'm passing a dog object as the method argument



when the type was declared as an animal. Why is this ok?



It works because dog inherits from animal, it's a type of animal, as I've said, and where that



becomes really important is in code like this. I can pass a dog instance to any method that



takes an animal. And running that.



The code compiles and runs and I get output, "null makes some kind of noise" and "null moves fast".



I created a dog with a default constructor (no arguments passed), so nothing got set on



this class, but you can see dog has inherited all of animal's attributes on that last line.



The values have the default values for their type because I didn't create a



way to pass any data to these fields on dog. So far, all I've done with dog is extend animal.



Next, let's change my default constructor in dog, and this time, when I call super(), I'll pass



values to animal's three-parameter constructor. I'll pass the type of dog, which here I'll



call it a Mutt, then the size "big", and 50 for the weight.



super, and then those three arguments. And I can rerun my main method.



And now, the output has my Mutt's attributes, so it prints out that Mutt makes some kind of noise,



Mutt moves fast, and then it shows the other attributes on Mutt.



What I want you to see here is, look at the dog class.



It's six lines of code including the opening and closing braces and white space.



But this code can now execute three methods, and has 3 attributes



I can set, all inherited from animal. And better yet, I can treat this dog like any



animal for any code that uses the animal class. My do animal stuff method in the main class



didn't have to change at all even though I introduced a new class.



Up until this point, I haven't specialized anything for the dog.



Since this video is getting long, let's end it here.



In the next video, I'll add the fields and methods that make the dog class unique.



I'll see you in that next video.


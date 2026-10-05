**Inheritance - Part 2: Extending Animal Class**



In the last video, I introduced you to the concept of Inheritance and showed you how to



implement it in Java using the extends keyword. I talked about using the statement super() to



call the constructor on the super class. In the last video, I created dog as a



subclass of animal and demonstrated that the dog class inherited all of animal's fields,



and that it can be passed to methods that are declared with the type animal.



In this video, I want to make dog different from animal by



declaring the fields and methods that are specific to it and that make a dog unique.



Let's look at the class diagram for just dog, at the moment.



I want to add the attributes, ear shape and tail shape, as shown here in our class diagram.



Then I'll implement the methods, bark, run, walk, and wag tail



Going back to the dog dot java file, I'll add ear shape and tail shape.



Those are my dog-specific fields. Let's create a more specific dog



constructor than the one I have. With the cursor on line 10,



before the class's closing brace, I'll select code, generate, then constructor.



This time, I have an additional choice and that's which parent constructor I should use.



Let's pick the one with parameters. And then, I pick both of my



dog attributes and hit OK. Let's actually change this constructor



so it's easier to create a dog object. I'll remove size as a parameter,



and instead, write code to derive it, passing that to the super call.



Using a ternary operator, I'll make a dog small, if its weight is less than 15. Otherwise if its



weight is 15 or higher, but less than 35, I'll make it medium, otherwise I'll consider it large.



This constructor has a combination of the dog and the animal fields in its argument list.



I can pass it the type of the dog, the dog's weight, the ear shape, and tail shape.



I'm calling the super constructor to set some of our fields, the animal-specific fields.



And here, I'm deriving the size of the dog from the weight; small, medium, or large.



I couldn't do this operation before the call to super because super() must be the first statement.



But I can do it directly like I have here, as an expression in the argument list.



This is one way to perform calculations in your constructor and pass the result to the super call.



After the call to the super constructor, I set some of the dog-specific attributes, the ear



shape and tail shape, that were passed to me. Before I do anything else, let's generate



a too string method for the dog class. With the cursor before the closing bracket



of the class, select code, generate, and the too string method option, but pause here a minute.



I have other options I can use to generate this method.



You can see it says template and defaults to string concat plus, but I can pick other options.



Let's pick the one right after the default one that includes "and super dot to string".



And I'll select our two dog attributes and then OK. Now, you can see the code that was generated.



You can see the two new fields there plus a call to super dot to string.



Now, this super is different than the super parentheses call.



It's a lot like using the THIS keyword with the dot notation



to access a field on the current instance. This code lets us call a super class's method.



I'll talk about these concepts a lot more in upcoming videos.



I want to add one more constructor after the first one before we test this code.



This constructor has two parameters, type, and weight. I'll invoke THIS, and pass, type, weight,



and two literal strings, perky, and curled. This constructor makes it even simpler to



create a dog object for the majority of dogs (if their ears are perky and their tails are curled).



It calls the other dog constructor that has 4 parameters,



which in turn calls the animal constructor. I'm using constructor chaining to make this work.



Let's go back to main dot java and create some more dogs,



calling the do animal stuff for each one. I'll start with a yorkie. dog, Yorkie, equals,



new dog, and the arguments are Yorkie, and 15. I'll invoke, do animal stuff,



passing our yorkie object, and fast. Another dog, this one a retriever, and I'll create it with new,



dog, passing it, Labrador Retriever, and sixty-five the remaining two arguments



I'll use are, Floppy, and Swimmer. I'll again invoke, do animal stuff,



passing the newly created retriever object, and slow as a literal string.



Dogs have over 20 ear types and more than 9 tail types, one of which is



a swimmer tail type, which I use here. And now, check out what gets printed for



both of these dog objects when I run this code. I get all the fields that are specific for dog,



and the fields that are more general to the animal.



That's because my too string method printed out the dog fields then made a call to super dot too



string, which was animals too string method. I was also able to calculate the size



of the dog based on its weight. And I created constructors for dog



that targeted more dog-like features and passed default values for animal's more general fields.



Let's talk a little bit about the behaviour of animal and dog next.



Up to now, I called methods on animal and was able to access the functionality that's part and parcel



of the animal class, and I was able to use methods on and through dog that were defined on animal.



And even more importantly, I was doing this from a method that really



doesn't even know anything about the dog class. Dog can use methods on animal and print out its



own object's values. In this case, both the move and make noise methods printed the type field.



You can see why inheritance promotes code re-use. All subclasses can execute methods even though



the code is declared on the parent class. The code doesn't have to be duplicated in each



subclass. But it does get even better than that. We can use code, out of the box,



from the parent, as I did in this example. Or we can change that code for the subclass.



I did this with the too string method. The to string method that was called



in the do animal stuff method of the Main class didn't actually call the animal too string method.



It called the dog too string method when animal is an instance of a dog.



I want you to really understand that because it's so important.



And really, it's one of the best parts about inheritance.



I told this method that I was dealing with an animal class, and I called the too string



method which is declared as a method on animal. At run time, Java figures out the animal object



is even more specific than animal, it's really a dog, and it actually calls the



too string method on dog (if one exists on dog). If the too string method doesn't exist on dog,



that's no problem because then it just uses the too string method on animal.



This is good stuff, so let's explore this a little bit more.



Let's create a make noise method on dog next, and this method will have the same



signature as make noise on animal. I'll start with an empty method.



And now what happens if I run my code? The last time I ran this code, I had statements



that said the Yorkie and Labrador made noise. But now, we don't see anything like that.



This method, make noise on dog, which doesn't do anything, was called and not



the make noise method on animal. What have I really done here?



Well, I've overridden animal's make noise method.



Overriding a method is when you create a method on a subclass, which has the same



signature as a method on a super class. Remember that a method signature consists



of the method name and the number and types of parameters.



You override a parent class method when you want the child class to show different



behavior for that method. So notice, in IntelliJ,



that it has a special icon next to this make noise method, the little O with an arrow.



This is IntelliJ telling us that this method is overriding a parent class's method.



Another option is to use IntelliJ's code generation tool to override methods.



Let's use that now to override the move method on animal.



Select "code" from the menu, but let's select "override methods" this time.



And IntelliJ is showing us all the methods I could override, starting with animal's, but it's also



showing us methods on java dot lang dot object. I'll be talking about Object in and



upcoming video. Let's pick the



move method on animal and hit the OK button. Now, look at the difference between the code I



created manually, the make noise method, and this one, the move method that IntelliJ created for me.



IntelliJ's generation tool adds this at override symbol, and that's to remind us that we're



overriding a method that's in the superclass. In this case, it's in the animal class.



And notice too that the automatically generated code simply makes a call



to the parent class's method, move, using the keyword super and dot move.



What that means is, I'm calling the move method on the parent class, the animal class.



This code kind of does the same thing as not having that overridden method at all.



It simply executes the animal class's move method, which would have happened if I didn't



create this method at all. Why would I do this?



Well, most likely, I'll want to change or extend the code here.



I changed the make noise method by having a method with no code at all.



This changed the behavior of make noise for all dog objects.



It made all our dogs silent for the moment. Next, let's extend the



functionality for the move method. This means I'll do what the animal class does,



but I'll do additional stuff as well. I'll leave the super dot move



statement there, but I'll add more code. Here, I'll just print out another statement



that dogs walk, run, and wag their tail. And running the code now,



You can see from the output that when I called the move method,



I did what animal had me do (with that statement, Yorkies move fast),



but I added another line of text to the output, dogs walk, run, and wag their tail.



I extended the functional behavior of animal for dogs.



I used what was there (with the call to super dot move) but then



added my own code to it. Pretty cool. I think this is a good place to end this



video. Let me recap briefly before I end it. I created methods on a super class, then called



them from a subclass directly, showing you that methods can be inherited, as well as fields.



I also showed you that a subclass can override a superclass's methods.



The overridden method can do one of three things: It can implement completely different behavior,



overriding the behavior of the parent. It can simply call the parent class's method,



which is somewhat redundant to do. This is the default behavior of an inherited method.



Or the method can call the parent class's method and include other code to run so it can extend the



functionality for the Dog, for that behavior. In the next video, I'll implement methods



unique to dog. In other words,



the behavior that only makes sense for dogs. I'll see you in that next video.







**Inheritance - Part 3: Unique Dog \& Fish Classes**



In the last video, I showed you a simple class diagram which created two classes,



Animal and Dog, where Dog inherited from Animal. Let's continue with this example by adding



other methods that are really specific to Dog. Let me bring up that Dog's class diagram again.



And we can see there, the methods on dog are bark, run, walk, and wag tail.



Let's add these starting with the bark method. I'm going to make this method private because



I'm going to call it from the move method. This is a reminder that not all methods need



to be exposed, that is, marked as public, especially if you only intend them to be



called internally from the current class. I'll print the fact that the dog barked.



Note that I am using print, not println. I'll copy and paste that method, changing



the name of the method to run, and instead of woof, I'll change that text to dog running.



I'll paste another copy of the method, changing the name to walk



and the text to say, "dog walking". And finally, I'll paste another copy,



changing the name from bark, to wag tail, and the text that's printed to "tail wagging".



Ok, so those are our dog behaviors. Let's use some of these methods from the dog's move method.



I'll comment out the println statement first, then add some dog movements by



calling some of our dog methods based on whether the dog moves fast or slow.



I'll check if the dogs speed is slow. If it is,



I'll start by calling the walk method. then the wag tail method. otherwise I'll use else,



which will be for a fast dog. Start by calling run. followed by calling bark.



Because I used print earlier, I now need an empty println here to move to the next line.



Now, if I run that, The output shows the



dogs moving. First, the Yorkie moves fast and then it prints "dog running, woof!".



Then I have the Labrador Retriever moving slowly, and that's printing "dog walking, tail wagging".



Nothing in the do animal stuff method had to change for this new functionality to be called.



I hope you're starting to get a little glimpse at how powerful a feature this is.



Lastly, I can call the bark method in the overridden method,



make noise, which right now has no code in it. Here, I'm not calling animal's make noise method,



and I don't want to. I want the dog to have



some behavior that the animal doesn't have. I'll call the bark method. and use println to



print an empty line. Let's run that,



And now, you can see that I get woof for both types of dogs when I call



the make noise method in the main class. I've overridden the make noise method with



code unique to the dog, which in this case, makes a call to the bark method.



And that's how you do it. You can separate the functionality that's just



for a dog and only include it in the dog class. Let me try to change my make noise method again.



This time, if the type of the dog is a wolf, let's have the dog howl and bark.



I'll test for the type of dog to be equal to a literal string, wolf. If it is, I'll make it howl.



Again, I am using print and not println. Now, in this case, where I'm



referencing type, I get a compiler error. This is because type has private access in animal.



But type is one of the fields inherited by dog. Yes that's true, but because type is private on



animal, no other classes, not even subclasses, can access or use this field in its own methods.



I've said there's a modifier that allows access for subclasses, and that's the protected modifier.



Let's go to the animal class and change the modifier from



private to protected for the type field. What this modifier says is, let any class



that is a subclass can access this field. This is conditional encapsulation.



We're allowing some limited access to our internal fields, and that's to subclasses.



Protected access also means that any classes in the same package will also have access.



And changing that modifier means our code compiles successfully.



Let's look at that code in dog again. Notice here that I just



simply reference type here. I didn't add any other qualifier,



not THIS or super, and I didn't have to call type from a different instance of dog.



This is another advantage of inheritance for fields and methods that aren't private.



They can be accessed directly, as if they really were declared on the subclass itself.



Java first looks on the subclass for a method or a field with that name, then it'll go up the



inheritance tree looking for a match. Let's quickly test this by creating



a wolf in the main method of the main class: dog, wolf, equals, new, dog, and in parentheses,



wolf, and 40. call do animal stuff, passing our wolf object, and the literal string, slow.



And now, running this code, You can see all the information



about the wolf, and I also see the output that the wolf is howling as well as barking.



That was the dog class. Let's add another subclass so



you can get used to this inheritance concept and the idea of extending another class.



Let's add the fish class to our hierarchy. What are some unique characteristics of a fish?



Well, let's go with a couple like gills and fins. And instead of a generic move method,



I might have more specific methods like move muscles and move back fins.



Let's look at my class diagram that includes this new fish class.



As you can see, it's quite a bit different from dog, but it's still an animal.



This diagram shows the new class named fish that extends Animal.



It has two fields and two methods specific to its own type.



Let's build that fish class. I'll open the project panel



and highlight the S R C folder, and select new, Java class, and give it the name Fish.



Then I want to add extends animal as part of the class declaration.



Then we'll add the two fields we showed, gills and fins.



And then I'll add the constructor, using IntelliJ's code generator.



And like I did with dog, let's remove size, and this time, I'll just change size to be



hard coded to small, for simplicity. This constructor is a lot like dog's.



I'm calling the super constructor, that is, the constructor on Animal, and I pass the type,



the size, and this time, I'll make all fish small. And finally, I pass the weight.



Then I add the assignments for fish's more specialized fields: gills and fins.



So, this class is very similar to the dog class. But in this case, I've created a new fish class



that inherits from the animal class, and I've defined some unique characteristics



for the fish, namely, gills and fins. Let's next add fish's custom behavior,



and add the method move muscles first, and I'll just print out a statement for that.



And I'll make this method private because I only want the move method to call it.



I won't expose this behavior, in other words, for any outside code to call it directly.



and I'll just print a message. Again print, not println.



And rather than type in the second method, let me copy and paste the move muscles method,



and just change the name to move back fin, and change the text to say "backfin moving":



And now, I'll override the move method from animal, so that the fish moves, or swims.



With my cursor right before the closing brace of the fish class, I'll start typing public void,



and you'll see IntelliJ pops up a list of methods and from that, I'll select move.



And now, I have the overridden move method generated for me.



Like I did with the dog class, let's extend this behavior for a fish.



I'll have my fish move its muscles regardless of the speed but use



its backfin if it wants to go fast. I'll call move muscles first. Next, I'll



check if speed is equal to fast. If it is, I'll call, move back fin. And add an empty println.



That would be one way to model the fish moving or swimming.



It moves its muscles, and it moves the back fin, which the net result of that is,



it actually propels itself or moves. Let's add a code-generated to string method



for fish like I did for dog that prints both fish's fields as well as animal's.



Selecting code, generate, and then pick to string method.



And that's it. I've built the fish class,



so let's create an instance of fish, and call our do animal stuff method.



And I can call that method with Fish without changing that method at all because



fish is another type of animal. fish, goldie, equals, new fish,



and in parentheses, the four arguments will be, Goldfish, zero point two-five, two, and three.



Add a call to do animal stuff, passing our goldie object, and the literal string, fast.



And running that, We can see the output from this additional code.



Goldfish makes some kind of noise, Goldfish moves fast,



and there I have muscles moving, backfin moving. Again, I used animal's fields and behaviors,



the ones I wanted to use, and then added some more specific elements, or fields, to the fish class.



I passed fish to a method that never even had to know a fish class existed.



I'm going to be coming back to this particular feature a lot



because it has a special name, polymorphism. Polymorphism simply means "many forms". In



this video, I showed that animal can take multiple forms, the base class animal, or a dog, or a fish.



And as you've seen, some advantages of Polymorphism are:



It makes code simpler. We can write code once using the base class or super class,



as I did with my do animal stuff method. I wrote that code without ever having



to know about subclass types. I didn't have to write code to check the type of



the object and then decide what method to call. Java did all that at runtime.



It encourages code extensibility. It's very easy to subclass and override or extend the method,



that'll be called, as I demonstrated. I have a whole video on polymorphism in



the next Section, where I cover this powerful object-oriented concept as well as others.



Ok, so I've covered a lot of ground in the last three videos, introducing



you to some key concepts of inheritance. What you may not have realized is that I've



been using Inheritance all along, even when you didn't think I was.



That's because in Java, all classes, and that includes any we create, implicitly



inherit from a single built-in Java class. Let's talk about that in the next video.


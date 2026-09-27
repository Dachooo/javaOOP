**Deep Dive into Classes and Objects**



In this video, I'm going to start talking about Object-Oriented Programming.



What is Object-Oriented Programming? Object-Oriented Programming is a way



to model real-world objects as software objects which contain both data and code.



OOP is a common acronym for Object-Oriented Programming.



I'll be talking about classes, which are a fundamental component



of Object-Oriented Programming in Java, and other languages for that matter.



OOP is sometimes called class-based programming. Class-based programming starts with classes which



become the blueprints for objects. But what does this really mean?



To start, we need to understand what objects are. They're really the key to understanding



this object-oriented terminology. What I'd like you to do is just have a look



around in the area you're sitting in right now. And if you do that, you'll find that there's



many examples of real-world objects. For example, I'm sitting here, and I can see;



a computer. I can see a keyboard. I can see a microphone. I can



see shelves on the wall. I can see a door. All of these are examples of real-world objects.



Real-world objects have two major components: state. and behavior.



State, in terms of a computer object, might be: the amount of RAM it has. the operating system



it's running. the hard drive size. the size of the monitor.



These are characteristics about the item that can describe it.



I could also describe animate objects like people, or animals, or even insects like an ant.



For an ant, the state might be: the age. the number of legs. the conscious



state. whether the ant is sleeping or is awake. In addition to state, objects may also have



behavior or actions that can be performed by the object, or upon the object.



Behavior, for a computer, might be things like: booting up. shutting down. beeping or



outputting some form of sound. drawing something on the screen, and so on.



All of these could be described as behaviors for a computer.



For an ant, behavior might be: eating. drinking. fighting. carrying



food, those types of things. Modelling real-world objects



as software objects is a fundamental part of Object-Oriented Programming.



A software object stores its state in fields, which can also be called variables or attributes.



Objects expose their behavior with methods which I've talked about before.



So, where does a class fit in? Well, think of a class as a template



or a blueprint for creating objects. Let's take another look at the class.



The class describes the data (fields), and the behavior (methods), that are relevant to the



real-world object we want to describe. These are called class members.



A class member can be a field or a method, or some other type of dependent element.



If a field is static, there is only one copy in memory, and this value is associated with



the class or template itself. If a field is not static,



it's called an instance field, and each object may have a different value stored for this field.



A static method can't be dependent on any one object's state,



so it can't reference any instance members. In other words, any method that operates on



instance fields needs to be non-static. These class or member fields can be



thought of as variables, though it's more common to call them fields or attributes.



In this video, I'll be looking at instance fields to describe my objects.



I'll be describing static members in greater detail later in this section.



It turns out, you've been using classes all along in this course.



I'm sure that you've seen the keywords public and class in the code we've been working on.



And you can actually see it on the screen right now, public class main.



So, what that is, that's actually a statement which describes a class in Java.



A question that might come up at this point is, what benefit do



classes give us in our everyday programming? Well, think back to the basic data types that



we've worked on, the primitive data types that we've explored so far, such as int, short,



and those types of things. They're all basic data



types but they're fairly limited. There's only so much you can do with them.



A case could be made here that a class could be thought of as a powerful user-defined data type.



That's not really correct in the true meaning, but it gives you an idea of what classes are.



They really enable you to have sort of a powerful user-defined type,



like a regular data type on steroids. To take this a little bit further,



let's create our first real class. As you can see on the screen every time



I create a new project, and here, I've created a project called classes part 1. I've been creating



a new class, usually one called main with capital M, and I generally add a method called main,



which I've already done here. So now, let's create another class.



First, I'll expand the project panel. You'll recall, I usually work with it



closed but now, I'll expand it by clicking on the project vertical tab on the left.



So then, I'll click down where it's got SRC for source.



Click on that and right-click. Select new, then select Java class.



And I'm going to create a class with the name of "car".



C-A-R, making sure the first letter is capitalized, as I've recommended previously.



When you're creating classes in Java, the first letter should be an uppercase letter.



So, the first thing that I what you to notice is this public class car.



That's actually the statement to create a new class with the name car.



The public keyword is an access modifier. This lets us determine what access others



will have to this new class that we're creating. I haven't talked about how classes are organized,



so let's just look at that briefly before I talk about access.



Classes can be organized into logical groupings which are called packages.



You declare a package name in the class using the package statement.



If you don't declare a package, the class implicitly belongs to the default package.



The default package is all we've used so far in the course, because I haven't



yet introduced the package statement until now. I'm not going to get too deep into packages just



yet, there's more on them later in this section. But you do need to understand that classes



are grouped into packages to understand access modifiers.



A class is said to be a top-level class if it is defined in the source code file



and not enclosed in the code block of another class, type, or method.



A top-level class has only two valid access modifier options: public or none.



So, the word public gives unrestricted access to a class.



Any code anywhere has access to it. When we get to Java's modules, you'll see



that we can refine this further, but for now, public means any code can access this class.



Now, usually, at least initially anyway, we're going to be using



the public modifier on the classes we create. And when there is no modifier specified at all,



Java, by default, implicitly allows package-private access.



This means that classes grouped into the same package can access the class.



So, that's our class defined. But at the moment, it's not very useful



because it doesn't actually do anything. Literally, I've created a shell.



It's like creating a new blueprint. Remember that a class is a blueprint



for an object that we're going to be creating. And in this case, it's like starting out on a



brand-new blueprint. We haven't done anything yet. I've called the blueprint car, but I haven't



described anything else about what I'm building at this stage.



So, what I need to do is create some variables that are part of this class.



To date, you've seen variables used inside a method or code block.



These were called local variables because they were local to, or



actually belonged to, that method or code block. But we couldn't access those local variables



outside of the method or block we declared them. Classes allow us to create variables that can be



seen or are accessible by any code block within that class.



But we can also allow access from outside the class itself.



When we're designing our class, there are some things we want the public to know, and some things



that aren't necessary for the public to know. We can have a public interface.



This is only the information the outside world needs to know to use our class.



But we'll also have a non-public interface. This is information we may want to share



but not always and not with everyone. We may need to share some information with our own



company and other departments, while other data might need to be shared with our manufacturers



and dealers, but not with the public. Java gives us the ability to have



this kind of control by specifying different access modifiers for each member in a class.



An access modifier at the member level allows granular control over class members.



The valid access modifiers are shown in this table from the least



restrictive to the most restrictive. Here, you can see that public is still



an option for class members like it was for the class, and this means



there is unrestricted access to the member. We also still have no modifier, which means



package or package-private by default so that any class in the same package can access this member.



We could also use private which is basically the opposite of public, and that's where no code



outside the class can use this field or method. And finally, there's the protected modifier.



This one also allows package access, but it also permits subclasses to access this



member. More on subclasses later. As a general rule, all your fields



should be private, unlike the class where we'll usually use public.



So, why would we want to make all the fields on a class private?



Doesn't this mean that nobody can access them? This practice has a name, encapsulation,



and it's a key fundamental rule of Object-Oriented Programming.



Encapsulation in Object-Oriented Programming usually has two meanings.



One is the bundling of behavior and attributes on a single object.



The other is the practice of hiding fields and some methods from public access.



In general, when I talk about encapsulation, I'm talking about information hiding, or hiding



the internal workings of a particular object. When we make our attributes private, we can



then create methods to access the data, each with different degrees of access allowed, as needed.



What I'm going to do first is create some fields for my class.



This is going to look familiar to you and is a lot like the way I've created local



variables previously. I'll add some fields,



which are characteristics of the car. What kind of things might you be



interested in when describing a car? Maybe, things like the make or manufacturer,



the model, its color, how many doors does it have, is it a convertible or not?



So, let's add these fields, then I'll talk a little about them.



I'll add private before all my fields. string, make. string, model. string,



color. int, doors. boolean, convertible. So here, I've created five fields.



These are fields because they are defined in the class's code block or



the body of the class and not in a method. When I create an object from this class,



then the values I assign to these fields represent the state of the object.



Unlike local variables, class variables should have some type of access modifier declared for it.



If you don't declare one, Java declares the default one (package private), implicitly.



So, here, I've set the access modifier to be private in all cases, which I've



said will help us encapsulate this class. I'll want to control access to these fields,



and this starts by making them private. Later, I'll add the methods to access them.



The other thing you might have noticed is that I'm not actually assigning any values yet.



This is because, at this point, I don't know what these values might be, and they'll likely



be different for each instance anyway. If I were creating a real application,



I'd likely have a lot more fields, but I'll keep this simple to start with.



Let's add a method now that will print out this information about the car object.



I'll call this method describe car and make the method public.



This method is not static because I'm accessing instance fields on the class.



Methods, unlike fields, will often be public because we want to give users



a way to interact with the object. public, void, describe car. I'll use



println to print information out about the car. Starting with the number of doors. continuing on,



color. then make. and model. And using a ternary operator to indicate if the



car is a convertible, or not. Ok, so I've created my first



real template class called car, and I've set up some attributes or fields on it.



This feels like a good place to end this video. In the next video, I'll be using this template



to create an object of type car. So, I'll see you in that next video.







**Getters, Encapsulation, and Object Access**



In the last video, I created a car class in the classes part 1 project,



and I declared several private fields on it as well as a method called describe car.



The next thing I need to do is I need to create an object from this class because if you recall,



the class is just the template. I need to create an object which



will take that blueprint, that definition that I've defined in the class, and instantiate or



create an object that I can then start using. To do that, what I need to do is go back to



the main class I started out with, and I'll just click the tab that says main dot java.



And what I can do in here is I can actually build an object and base it on that car class.



So, how do I do that? Did you guess that I'd use the new keyword?



Let's do that. First, I'll declare a variable of type car,



calling the variable simply "car" and then I'll assign it a new instance of the car class:



car, car, equals, new, car, left and right parentheses. car dot describe car,



left and right parentheses. Ok, so now, what happens?



And if I run that. I get, "0 door null, null, null".



So, what's happening here? Why do I get null when I was



expecting color, make, and model? null is a special keyword in Java,



meaning, the variable or attribute has a type but no reference to an object.



This means that no instance or object is assigned to the variable or field.



Fields with primitive data types are never null. So, why is the color, make,



and model of the car null? Well, all of these fields



were declared with the string data type, and I haven't assigned values to them.



I know from previous lectures that strings are really objects, not primitive data types,



so Java assigned each a null reference. The other thing I want you to notice about



the output I got was that doors was printed with the value 0 here and that the word convertible,



wasn't printed in the output. So, how is that possible?



I didn't set doors or convertible to any values in our class, but I



didn't get any errors when running this code. And now, I'm seeing another difference between



local variables and fields declared on a class. And this is that a field with a primitive data



type will get assigned a default value by Java. Fields on classes are assigned default values



automatically by Java, if you don't assign values yourself.



So, because I didn't assign any values to my fields,



Java assigned some values for me, by default. Java will set any numeric primitive type to a 0.



For doubles and floats, the numeric literal which is implicitly assigned



is the decimal number zero point zero. A boolean field is assigned false by default



and any other type will be null. So now, let's assign some of our



own default values to these attributes: This means that every object that's instantiated



will get assigned the default values I declared here, instead of Java's implicit values.



And now, running our code in main dot java: I get, "two-door gray Tesla Model X convertible".



So, now, every car object I create will have these values by default.



But that's not what I really want either. How do I get and set the make, model, and color



of my car each time I create a car object? Since I made these fields private,



I can't use the dot notation with the variable name to set the value.



Let me show you what I mean. Let's try accessing these



fields directly in the main method: car dot make, equals, literal string, Porsche. car



dot model, equals, literal string, Carrera. and car dot color, equals, red, as a literal string.



You can see when I try this, I get errors on all three of those lines.



I've defined these fields as private on the car class, and because of that, I can't set



the values on any car object I create this way. So, let's comment this code out for a moment.



I also can't access those values directly in an expression.



For example, I couldn't just print that data out in the main method of this main class:



println, and then car dot make. And the same for car dot model.



I get compiler errors saying that these fields have private access,



and our main class isn't allowed to access them. So, other than the describe car method, how does



outside code get access to this data? I could make all of these fields public



or package-private, but I've said this is bad practice, so I'm not going to do that.



What I'm going to do is allow access to this data either to set it or get



it through methods on this class. These are a special set of methods



called getters and setters. What are getters and setters?



A getter is a method on a class that retrieves the value of a private field and returns it.



A setter is a method on a class that sets the value of a private field.



The purpose of these methods is to control and protect access to private fields.



Another important aspect is that the getter and setter method signatures



are part of car's public interface, but the field names and types aren't.



This means that I can change things internally like the name or type of a field,



but as long as we use the same getter and setter method, these changes should have



no effect on external code that uses our class. Our internal changes are hidden from our users.



A getter method usually just returns the value of a private field.



It's usual to name a getter method with the get prefix, followed by the field name in



lower camel case, but this is not required. You could have getter methods for fields



that are not really declared on your class but that are derived in some way.



A setter method may simply just assign the argument passed to the method, to the field,



but it can contain code to validate data, check additional security requirements,



ensure immutability of the field value, or any other code required



to protect and validate an object's state. It's usual to name a setter method with the



set prefix, followed by the field name, in lower camel case, but again, this is a matter of form.



There may be many cases where we won't have a setter method for a particular private field.



Maybe this is data only needed within the class itself and doesn't need



to be exposed to the outside world. So, let's first add a getter method.



Going back to the car class, I'll add a method on line 9 which will return



the make of the car, using a method. the methos is public, returns a string,



I'll call it, get make, with no parameters. It will just return make.



Ok, so this method is public, but notice I don't use the word static here.



When writing methods that use non-static fields, your method can't be declared static.



And the getter will usually return the type that the field is, so string, in this case.



And then I just return the field name make. Even though make is declared on the class,



I can refer to it from code in my method as I am showing here.



To create the other getter methods, I could copy and paste this code four times and change the name



and the attribute returned in each instance. But in general, you won't really be manually



typing in the code for your getter methods. IntelliJ has features to generate code for you



including one to create a set of getter methods. So, let's do that for the next four attributes.



I'll set my cursor under that first getter method, and then I'll select the "code" menu



item, then "generate", and if you click on that, you'll see there's a lot of options.



I'll select "getter". Now, all the attributes are



listed here that don't already have getters, so I'll select the remaining 4 by holding



shift and pressing the down arrow key. And now, I have 4 new public methods,



get model, get color, get doors, and finally, is convertible, a method that has the prefix "is",



and not get, which is a naming standard for a getter method, for a boolean field.



So, let's use these getters in my main method. In each println statement, I'll change the



code to use the corresponding getter method. When I delete the field name in IntelliJ, I can



pick the getter method from the list displayed. And you can see, I've eliminated my errors



in the main method. Let's run this now.



And you can see, I can now use the make and model data in my own output string.



I'm also still calling the describe car method that gives me all the information



in a single line. So, since this video



is getting a bit long, I'll stop it here. In this video, I've talked about encapsulation,



getters and setters, and I added getters for our five private fields, both manually



as well as using IntelliJ's generation feature. In the next video, I'll be adding setter methods



and talk more about some reasons to use setters. So, I'll see you in the next video.


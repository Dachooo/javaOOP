**Using this and super for Constructors**



Let's discuss the difference between the this and super keywords.



We'll also find out about the differences between the this() and super() method calls, as you can



see by adding parentheses on the end. Let's start with the super



and this keywords first. The keyword super is used to access or call the



parent class members (both variables and methods). The keyword this, on the other hand,



is used to call the current class members (both variables and methods).



this is required when we have a parameter with the same name as an instance variable or field.



NOTE: that We can use either of these two keywords anywhere in a class except



for static elements such as a static method. Any attempt to do so will lead to compile time errors.



The keyword this is commonly used within constructors and



setters and is optionally used within getters. In this example, I'm using the this keyword in a



constructor and setter since there's a parameter with the same name as the instance or field.



In the getter, I don't have any parameters so there's no conflict. Therefore,



the use of this is optional there. The keyword super is commonly used



with method overriding when we call a method with the same name from the parent class.



In this example, I have a method called printMethod that calls super.printMethod.



It's calling the method with the same name from the parent class.



Without adding the keyword super in this case, it would end up being a recursive call.



What that means is that the method would call itself forever, or actually until



memory is fully used on your computer. That's why we need the super keyword,



so that we can call a method with the same name from a parent class.



In Java, we've got the this() and super() parentheses calls. Notice the parentheses.



These are known as calls since they look like regular method calls although we're



calling certain constructors. You'll Use this() parentheses



to call a constructor from another overloaded constructor in the same class.



The call to this() parentheses can only be used in a constructor, and it must be



the first statement in a constructor. It's used with constructor chaining,



in other words, when one constructor calls another constructor,



and it helps to reduce duplicated code. The only way to call a parent constructor



is by calling super() parentheses, which calls the parent constructor.



The Java compiler puts a default call to super() parentheses if we don't add it,



and it's always a call to the no argument constructor, which is inserted by the compiler.



In other words, a call to the constructor that hasn't got any arguments.



Keep in mind that The call to super() parentheses must be the first statement in each constructor.



And importantly, A constructor can have a call to super() parentheses



or this() parentheses, but never both. Alright, so let's look at some code,



which I would call a bad constructor example. Here, I have three constructors.



All three constructors initialize variables. But There's repeated code in each constructor,



as you can see there. I'm initializing variables



in each constructor with some default values. You should never write constructors like this.



Let's look at the right way to do this by using a this() parentheses call.



In this example, I still have three constructors.



This example is very similar to the previous example, but the difference is that The 1st



constructor calls the 2nd constructor, the 2nd constructor calls the 3rd constructor,



and then the 3rd constructor actually initializes the instance variables.



In other words, The 3rd constructor does all the work.



Now that I've done this, No matter what constructor I call,



the variables will always be initialized in the 3rd constructor, and only there.



This is known as constructor chaining, and what we're doing



is making sure the last constructor has the responsibility to initialize the variables.



Alright, so looking at both examples on screen now.



On the left-hand side again, this is a bad example of constructors.



On the right-hand side, I've got a good example. Again, The problem with the left-hand side is



the duplicated code. So, as you can see, all three constructors on the left-hand



side are initializing the variables. Now, contrast that with the solution



on the right-hand side. I've got one constructor



that initializes variables, and the other constructors are just calling each other.



Ultimately, we end up in the third constructor. And That's again called constructor chaining.



With constructor chaining, we can and do avoid code duplication.



By the way, duplicated code can lead to many bugs and a lot more work on your behalf.



It's also bad practice, as a rule, to write duplicate code, which of course,



I did in the bad example. Alright, let's have a



quick look at the super call example. In this example, I have a class Shape, with x



and y instance variables, and class Rectangle that extends Shape with variables width and height.



In the Rectangle class, the 1st constructor is calling the 2nd constructor.



The 2nd constructor calls the parent constructor with parameters x and y.



The parent constructor will initialize the x and y variables, while the 2nd Rectangle constructor



will initialize the width and height variables. Here, as you can see in this code,



I have both the super() and this() calls, but in different constructors.



You may want to watch this video a few times, or come back to this one later,



after progressing to other videos in this section, if you have any confusion.



It's very important, as a Java developer, to understand the differences between



these calls to be able to use them properly. Alright, so let's move on now to the next video.







**Method Overloading vs. Overriding Explained**



This video is specifically about method overriding versus overloading,



Let's review the main differences between method overriding and method overloading.



Method overloading means providing two or more separate methods in a class with



the same name but different parameters. Now, the Method return type may or may



not be different, and that allows us to reuse the same method name.



Overloading is very handy, because it reduces duplicated code, and we



don't have to remember multiple method names. We can overload static or instance methods.



To the code calling an overloaded method, it looks like a single method can be



called with different sets of arguments. In actuality, each call that's made with



a different set of arguments is calling a separate method.



Java developers often refer to method overloading, as compile-time polymorphism.



This means the compiler is determining the right method to call,



based on the method name and argument list. Usually overloading happens within a single class.



But methods can also be overloaded by subclasses. That's because a subclass inherits one version of



the method from the parent class, and then the subclass can have



another overloaded version of that method. There are some rules about method overloading.



Methods will be considered overloaded if both methods follow the following rules:



Methods must have the same method name. and Methods must have different parameters.



If methods follow the rules above: They may or may not have different return



types. They may or may not have different access modifiers. They may or may not throw different



checked or unchecked exceptions. ; Ok, so that was method overloading.



Let's discuss method overriding. Method overriding, means defining a



method in a child class that already exists in the parent class, with the same signature (In



other words, the same name, and same parameters). By extending the parent class, the child class



gets all the methods defined in the parent class. Those methods are also known as derived methods.



Method overriding is also known as Runtime Polymorphism or Dynamic Method Dispatch



because the method that is going to be called is decided at runtime by the Java virtual machine.



When we override a method, it's recommended to put @Override immediately above the method definition.



The @Override statement is not required, but it's a way to get the compiler to flag



an error if you don't actually properly override this method.



We'll get an error if we don't follow the overriding rules correctly for that method.



As mentioned previously, this is called an annotation, and I'll be talking more about



annotations later in the course. We can't override static methods,



only instance methods can be overridden. Here are some rules about method overriding.



A method will be considered overridden if we follow these rules.



Firstly, It must have the same name and same arguments. The return type can be a subclass



of the return type in the parent class. It can't have a lower access modifier. In other words, it



can't have more restrictive access privileges. For example, if the parent's method is protected, then



using private in the child's overridden method is not allowed. However, using public for the child's



method would be allowed, in this example. There's also some important points about



method overriding to keep in mind. Firstly, Only inherited methods can



be overridden, in other words, methods can be overridden only in child classes. Constructors



and private methods cannot be overridden. And Methods that are final also cannot be overridden.



A subclass can use super.methodName() to call the superclass version of an overridden method.



Let's see an example now of method overloading and method overriding.



On the left, I've got a simple overriding example. As you can see, I've got two classes,



dog and German Shepherd. The class German Shepherd



extends dog and overrides the method, bark. As you can see with overriding, I've got the



same name and same parameters for the method. In this case specifically, I don't have any



parameters, but they would need to be the same, in the case of overriding.



On the right-hand side, you can see a simple example with method overloading.



Here, I've got the class Dog, with two methods that have the same name, bark, but



in this case, they've got different parameters. The second bark method has an int parameter, while



the first method doesn't have any parameters. Hopefully, now you can easily see the difference



between overriding and overloading when comparing these two examples side-by-side.



Let's recap now the most important rules about overloading and overriding methods.



In the following table, you can see the main differences between overloading and overriding.



Don't worry too much about checked exceptions right now.



I'll cover exceptions in greater detail later in the course.



On the left-hand side, I've got overloading, and on the right-hand side,



I've got method overriding. With method overloading,



we've got functionality to reuse the method name with different parameters.



Overloading usually happens in a single class. However, it can be used in a child class



because the child class inherits methods from the parent class.



Now, with overloading methods, they must have different parameters.



But they might have different return types, access modifiers, or even different exceptions.



With overriding, we're reusing behavior, which the class has inherited from the parent class.



Overriding can be in the child class or grandchild class.



It's always in two classes that have an "IS A" relationship.



Methods that are overridden must have the same parameters in the same order, and they must have



the same return type or covariant return type. I'll come back to covariant in just a minute.



Overridden methods can't have a more restrictive, what I call a lower modifier, so in other words,



if the parent method is protected, then the child method can't be private.



The Java compiler calls this assigning, weaker access privileges.



But it could have a higher modifier or greater access privileges,



so in this scenario, since the parent method is protected, the child method could be public.



I'll talk more about this in more detail when we explore the concept of



polymorphism in the next section of the course. Let's get back to the covariant return type.



The return type of an overridden method can be the same type as the parent method's



declaration. That's easy to understand. But it can also be a subclass.



Why didn't I just say a return type could be the same class or a subclass.



Well, later, we'll be dealing with other types that aren't classes, and so The term,



covariant return type, is more appropriate, and that's why I used it in the list of



rules I displayed a short while ago. The term covariant type can include



types such as interfaces and generic types. But at this juncture, we'll just simply look



at a base class and its subclass to demonstrate what this looks like.



I briefly mentioned in a previous video that there's a clone method on the class



Object that all classes inherit from. A simplified look at this declaration,



for our purposes, is shown below. And if you overrode this method



by using IntelliJ's code generation tools, it would generate this code in your class:



But in general, when you're cloning an instance, you're going to want to return an Object that's



the same type as the Object you are cloning. Remember, I said all classes ultimately have



Object as a base class, so every class can be said to be a covariant of Object.



Let's see what a clone method would look like for a person class.



Here, I show the generated override on the left for comparison.



On the right, I have the clone method implemented on a person class.



I've omitted the throws clause declaration, which is valid to do for an override,



and also notice that I'm declaring that the return type is a person, not an object.



Person is a valid covariant return type for object, so this clone method



in the person class is a valid overriding method, overriding object's clone method.



Notice I also made the access modifier public on the method in person,



though object declared it as protected. It's valid to go in this direction,



meaning allowing the overriding method to have more access or be less restrictive.



Alright, so hopefully, that'll now make sense about covariant return types,



and that's giving you a good recap of method overloading vs. method overriding.



Don't worry too much if you didn't grasp what I said about Object cloning,



as it will make more sense as we progress further. I'll see you in the next video where I'm going



to talk about a fairly new feature, the text block, as well as other ways to format output.


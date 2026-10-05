**Unveiling java.lang.Object in Java**



In the last couple of videos, I introduced you to inheritance and



how it works with a class hierarchy. I talked about the base class,



also called the super class, and subclasses. I also demonstrated overriding methods and gave



you a quick look at how inheritance plays into polymorphism in Java.



Maybe you're thinking that Inheritance looks kind of interesting, but when would you really use it?



Well, it turns out, in Java, you've been using Inheritance all along without even knowing it.



This is because every class you create in Java actually extends a special Java class.



That class is named Object, and it's in the java.lang package.



Ok, that's confusing, a class called Object? Let's see what Java has to say about this class:



We'll use the link to Java's Application Programming Interface (API) for this class,



which you can find in the resources section of this video.



There it is, the class, Object. Class Object is the root of the class hierarchy.



Every class has Object as a superclass. All objects, including arrays,



implement the methods of this class. Whether you knew it or not, your classes



were extending the object class. They all inherit from object.



And what that means is that all of your classes have functionality built-in that you can use or



override the minute you create them. Let's explore the methods



on java dot lang dot object. We can select the method tab from the summary list



And here, you can see some of the methods on object like clone and equals.



And also here, is one I just showed in the last couple of videos, the too string method.



Every class we create, or use is automatically inheriting from



this Java-supplied class, called Object. Let's get back to some code in IntelliJ,



to see this in action. For this video,



I've created a project called the object class and created the main class with main method.



I've said every class inherits from object, and this actually includes the main class.



How can we tell? We can use the code generation tools, and you



can see that by opening up your generate command. if you go to override methods,



you can see when I've done that brings up, this select methods to override or to implement popup.



As you can see, these are all methods. The M stands for method.



These are all methods that are inherited from java dot lang dot object, which is a class. All classes



you create automatically extend Object. That's equivalent, essentially,



to typing extends java dot lang dot object, so I'll do that in my main class:



I could also just omit the package name, java dot lang, and just say my class extends object.



At the end of this section, I'll be talking more about packages.



Let me do that:



For now, I'll just say that Java has a way of implicitly doing things that make our jobs easier.



One of these is to include all objects from its core libraries automatically,



so we can refer to them like I am doing here. As simply object, without the package name.



The other is to implicitly have all classes extend this object class, that do not explicitly extend



from another class. Just to be clear,



I can show this on a class diagram: This slide shows that my Main



class inherits from, or is a subclass of Object, as is also the case with String.,



a class you are pretty familiar with already. This slide shows the methods on object and main,



and just a few of the methods on string. The String class has over 60 methods! In



alphabetical order, these methods start with one called char at, and end with one called value-of.



The String class overrides several methods on Object, two of which are equals(),



which I'll be discussing in our lecture on all things string, and toString() which I



used in the previous lectures. All objects, including arrays,



inherit the methods of the object class. It's really important to



know this happens automatically. Now, I'll double click object in the code



and right click the mouse to bring up options. I can select go to and then declarations or usage.



This is the control B key combination for windows users.



This displays the actual source code of the class, in this case, object dot java,



which is inherited automatically when I create any class, as we discussed, earlier in the video.



You can see as I scroll down, that I'll go through some of these methods,



I see hash code and the equals method, which compares one type of object to another.



This has a lot of detail about the implementation of each of these methods.



In general, there are very specific times you'll be overriding these methods, and I'll be showing



you examples as we proceed through the course. There's also too string, which it says



is just a way to return a string representation of a specific object.



Let's explore to string a little more using main dot java.



I'll close object dot java first. I'll add a new class in main dot java



itself, and I'll call it student. Remember, only one class in a Java



source file can be public, and since I've already made main public, I won't make student public:



class, student. I'll start by adding some fields. private, string, name. private, int, age.



That's a simple class named student with a name and an age.



Let's add a constructor so I can quickly pass data to the class when I create it:



student, and in parentheses, two parameters, string, name, and, int, age. THIS dot name,



equals, name. THIS dot age, equals, age. Next, I'll create an instance of student



in my main method and print student out: student, max, equals, new, student, and in



parentheses, my arguments passed will be, max, and 21. I'll use println and call max dot too string.



And running that code, I get student at



sixty-five A B seven seven six five. You might get something different but that's fine,



and I'll explain why soon. What is that?



Well, the code in the too string method in the object class prints out the class name



(which in my case is student), followed by an at sign, then the hash code of the object.



A hash code is an integer that is unique to an instance (in the currently executing



code). As you can see, the display isn't showing an integer, rather, it's a hexadecimal number. I



won't get into why Java is showing an integer as a hexadecimal number, other than to say



it's for debugging purposes. What's important is that the hashcode is created every time an



instance is created. We will talk most about hashcodes, later in the course.



By looking at the hashcode, we can determine if multiple



references are pointing to a single instance. It's a mechanism for comparison, in other words.



This really is like an address for a house, which I talked about in my



examples to explain the difference between references and objects or instances.



Anyway, this isn't what I want printed out, I really want to print



out the name and age of my student. And I've done this before, but now,



I hope it's becoming clear what I'm doing. I'm overriding the too string method on object.



I'll now do that on Student. First, I'll just type public and



then too in lowercase, and notice IntelliJ has popped up choices I could select:



I'll pick that first option.



And now I have a too string method that simply calls super dot to string:



Do you think that does anything different? Maybe you'll remember, I've said that



calling a method on super like this without doing anything else is kind of redundant.



I'll confirm that by running the code: And I get the same result.



I've really just explicitly called the code that Java would have implicitly done for me.



I'll comment that code out and try the other option next.



Again, I'll type public and to then pick the second option,



which has generate via wizard in it. And this should look familiar.



This brings up IntelliJ's code generation window for the too string method.



And I'll select both fields and hit ok: I've done this before; I'm simply specifying



for this class what I want to print out. Running this code now gives me,



The student class name but now in curly braces. I can see this object has name



equals Max, and age equals twenty-one. I'll change this and just simplify it.



I don't really care that the class name is student.



I'll comment out the default generated code, simply return the student name,



and say how old they are: return, name, plus, is, and the age.



And now, if I run that, I get Max is 21.



You make this code be whatever you want it to be when the too



string method is called on your class. You may also remember that I told you



Java implicitly calls the too string method on an object, if you simply pass your object to println.



Let's confirm that by remove the too string method call.



Here, I simply pass the max student object to the println method on system dot out.



And if I run that, I can confirm that this code is



really calling the too string method on student, and Max is twenty-one is still printed out.



What happens if I now have another class that extends student?



Let's create a primary school student class, which would be a student who is aged five to twelve,



for example, in the elementary or primary school. And this student will have a parent



name associated with it. For the sake of simplicity,



I'll just include one parent. Let's look at a class diagram.



I've already built Student which inherits from Object implicitly.



Next, I'll build PrimarySchoolStudent, which will inherit from Student.



Let's add this new class: class, primary school student, extends, student.



I'll add, private, string, parent name. I'll add a constructor, and the parameters will be, string



name, int age, and string, parent name. I'll invoke super, passing name, and age. and use THIS



to assign parent name to the field in this class of the same name. and complete the constructor and



class definitions with right braces. Hopefully, you understand what I'm



doing here with this code. I've created a primary school



student class that extends student. I've added an attribute, specific to a



primary school student, and called it parent name. And I've set up a constructor with three fields,



the 2 fields I had for student, name and age, and now parent's name as well.



I call super with name and age in parentheses to call student's constructor.



And I set the parent name to the argument with the same name.



Let's create a primary school student in the main class.



I'll name him Jimmy and his parent will be Carole. primary school student, Jimmy, equals, new,



primary school student, passing Jimmy as I mentioned, 8 for age. and, Carole, as the parent.



I'll use println to invoke the too string method on the jimmy object.



And running that, You can see that I get Jimmy



is 8 as the output for this code. This code inherited student's



too string method code. And now, I can override too string again,



this time on primary school student. Here, I'll return the parent name,



and then call the too string method on student with the super keyword.



And when I run that. I get the output, "Carole's kid, Jimmy is 8".



In this case, super dot too string didn't call object's too string method, it called student's.



But it still inherits object's other functionality, indirectly through student.



Java only supports one class in the extends class. For example, I couldn't type student then Object.



This is a compile error. The inheritance tree is cumulative,



meaning that primary school student inherits both student members and object members.



Object members are accessible, as long as student doesn't override them.



Because student overrode too string, I no longer can simply call the too string implementation on



object from primary school student. I'll revert that last change



and I'll end the video here. In this video, we learned that



all classes which do not explicitly extend another class will implicitly extend a class named object.



Object is the base class or root class of every class in Java, which means all classes can use



or override object's methods. Next, I want to give you



a challenge on inheritance. I'll see you in that next video.


**Exploring Local Variables And Scope In Java Blocks**



In the past couple of videos, we've looked at many of Java's flow statements, the switch statement,



the for statement, the while statement, as well as the do-while statement.



In previous videos, I covered the if-then-else statement.



All of these statements usually, but not always, have their own code blocks.



I've talked about code blocks quite a bit, but I haven't really talked about variables



declared locally in code blocks. A local variable is called local



because it is available for use by the code block in which it was declared.



It is also available to code blocks that are contained by a declaring block.



In the example on this slide, I have two variables declared at the start of a code block.



I use the first variable in an if-then statement expression and can print the



second variable inside of the if statement block. The if block is contained by the method block and



has access to the method block's variables, as this demonstrates.



This accessibility is also known as variable scope.



Scope describes the accessibility of a variable. "In scope" means the variable can be used by an



executing block or any nested blocks. "Out of scope" means the variable is no



longer available and cannot be used. Local variables are always in scope



in the block they are declared. They are also in scope for any nested



blocks or blocks contained within the outer block. So, for example, a method block can declare local



variables, and any flow statements contained in the method block will



have access to the method's local variables. This is also true for the method parameters.



Any code in the method and any nested blocks have access to the parameters.



There's no limit to how deep you can nest code blocks, but generally,



for readability and maintainability, consider replacing deeply nested blocks with method calls.



Local variables are always out of scope for outer blocks or the containing



blocks they are declared in. Let's look at an example:



In this example, I've declared a local variable called my counter inside the if block.



This means my counter will be out of scope for any containing blocks.



The method block is the containing block in this instance.



I can see that the println statement outside of the if block cannot use



a variable declared inside the if block. This line of code will cause a compiler error.



IntelliJ shows this error with "cannot resolve symbol my counter."



There are some best practices when declaring variables in different blocks,



which I'll briefly discuss now. It is considered best practice:



To declare and initialize variables in the same place, if possible.



And to declare variables in the narrowest scope possible.



It is much clearer to declare and initialize a variable, if possible, in a single statement.



There are times when this is not always feasible, but when it is, you should do this.



Declaring variables in the narrowest scope simply means, if your variable is only used



in a nested block, declare it there. Another example that we've seen,



if you're using a variable only in a loop code block, like the iteration variable,



and won't be using it outside of the loop block, then declare it in the loop code,



or in the for-loop initialization block. Obviously, this is a practice we can implement



with a for loop because of its special declaration support for initialization,



but this is harder to do with a while loop. Let's revisit the for statement and look



at local variables. In this for statement,



as part of the declaration, there is an initialization part, as I've described.



In this case, I declared a variable, i, that isn't accessible outside of the loop.



This is because any variables declared in the init section are local to the loop, meaning, they exist



and are accessible in memory only while the loop is executing, and only to the loop code block.



This is also true for most flow statements, for example, the if statement.



Local variables declared in an if statement block are not accessible outside of that block.



This also includes other parts of the if statement,



like the else if block or the else block. If I tried the code on this slide in a method,



I would get an error on the two lines indicated. The variable, I, is only in scope for the block



declared in the first part of the if statement. However, the switch statement is different from



the if-then-else statement blocks. Consider the code below:



So, the left and right braces are optional in a switch statement.



The code block is whatever is after one case label and before the next



case label, including the break statement. However, the case block has different access



for local variables than the if-else block. In the switch statement, a variable declared



in one case label code block can be accessed in another case label code block, but only if



that block is after the declaration and initialization of the variable.



As you can see in the example here, in the default code block, I had access to the



variable, I, and this did not cause an error. Let's look at another example of code blocks



and local variables in the switch statement. In the first case label block, the code is



trying to use the I variable, but it's not declared until the case 2 block, so I get



an error when I try to use it in the case 1 block. However, as previously shown, I don't get an error



in blocks declared below the case 2 block. But again, I get an error if I try to



use the local variable I outside of the switch block altogether.



So, that's it for local variables and scope. In addition to local variables, I can set up data



to be defined and used as part of a class or an object.



In the next video, I'll be discussing the class and its related structure, the object, at a very



introductory level, for reasons I'll explain in that video, so I'll see you in that video.







**Understanding Classes, Objects, And Static Versus Instance Members**



In the previous video, I talked about local variables and scope.



Local variables are a way to store and manipulate temporary data.



In addition to local variables,



we can set up data to be defined and used as part of a class or an object.



I'll be discussing these concepts now at a cursory level for several reasons.



First, attributes on classes are another way to store data.



Second, I want to introduce you to some static methods on the wrapper classes,



which are classes we previously looked at. We haven't used any methods on these classes yet.



These methods will help parse strings into numeric values.



And finally, I want to introduce you to a special class for reading input,



which I'll be using in the last part of this section to create an interactive program.



Before we use that class, it will help if we understand some very basic concepts with classes.



A class can be described as: a custom data type. a special



code block that contains methods. I've already talked about the class a little,



both as a custom data type and a special code block that contains methods related to the class.



What I haven't talked about is the class's unique role in creating objects in memory.



A class is like an empty form. It describes information or



placeholders for data that'll be filled in, when that form is given to a unique individual.



If the class has a field for name, then the object will have a value in the name field,



which will be unique to the object. If the class has a field for address,



then the object will have a value for the address field, and so on.



The process of copying that empty form and then delivering it to some process or person



to fill in the blanks is a loose analogy to what happens when you create an object.



The empty form, the class is the template for the data to be collected.



The populated form, the object may be completely different each time



because of the values used to fill in the data.



The data being collected each time is determined by the class or the form, in this analogy.



An object is called an instance of a particular class.



In this course, I'll often use the word instance interchangeably with object.



This means an object is created by instantiating a class.



There are multiple ways to do that, and I'll be talking about that more in a bit.



This slide shows a class that has 5 objects, or instances created from it.



We call the creation of the object, instantiation, or instantiating a class.



We can use the term object or instance interchangeably.



There is no limit to the number of objects you can create from a class.



A class is sometimes compared to a cookie cutter, and the cookies are your objects.



The class provides a shape or framework that describes the object being created.



A template is another word you'll hear used when trying to describe



a class's relationship to an object. I'm going to cover some simple basics



about classes right now. The most common way to



create an object is to use the new keyword. The new keyword creates an instance of a class,



and you can optionally pass data when creating that instance to set up data on that object.



Looking at the String, it's actually a class. But it holds a special place in the Java language,



because we can create a String just by using a literal which we've seen.



But we could also use new. Like other data types,



you can assign this object's memory location, also called a reference, to a local variable,



as we've done with this string. We've assigned to the local



variable S, an instance of string. All manipulation of the object's data and methods



are then done using the local variable name. In both of these statements we're creating



a new object of type string, and initializing it with the text "hello",



and assigning it to a string variable named S. The second statement makes this a bit clearer.



When we create an object, we can pass initial data to be associated with it in parentheses.



I've stated previously that the class can be thought of as a special data type.



This is because you can create variables on classes.



These are called fields or attributes on the class or object.



There are two ways to create fields on classes, one is with the static keyword,



and one is without the static keyword. When the static keyword is used,



it's called a static field on the class. This means the value of that field always



stays with the class. It's stored in a special



memory location for values that aren't changing constantly, unlike local variables and objects.



In our form analogy, this would be a field that is pre-populated on the form



and would not change for any of the copied forms. But unlike the form, this type of field in a class



doesn't really get copied down to the object. It maintains its single value on the



master copy, the class. The field in memory is



accessed differently because we can access that field using the class name with dot notation,



and we've done that already. When we looked at wrappers,



we accessed integer dot max underscore value, and integer dot min underscore value,



as well as integer dot size, for example. This data was stored on the class,



and not on an instance of the class. On the other hand, when the static keyword



isn't used, it's called an instance field. Until the class is instantiated and an



object created, the instance field has no place in memory.



These instance fields can have different values for every instance created.



This field is accessed using the variable name for the object and the



dot notation used with the field name. In the same way that there are static



fields and instance fields, there are static methods and instance methods.



Again, the static keyword is used to differentiate these two kinds of methods.



A static method can be called directly using the class name and dot notation.



In other words, you don't need an instance to use this method.



An instance method requires an instance exists first and the method be called on that instance.



In the example shown on this slide, I am showing you that a string literal, with a



value "hello", is really an object of type string. The string class has many instance methods defined



on it which we can use to manipulate strings. One of these is the to upper case method



which simply returns a string with all upper-case letters,



so the result of this call would be a new string with the value "hello", all in capital letters.



The most important difference to remember right now is that, to use an instance method,



you have to create an instance or object first. We've seen lots of examples of static methods,



since that's all I've used so far in the course. But in the upcoming videos, I'll be introducing



you to a special class for reading input. With this class, I'll be using instance



methods on a scanner object I create to get input from a user.



I'll also be using special static methods on wrapper classes to



parse numeric values out of strings. And as always, don't worry if you don't



yet grasp all of these concepts. I'm going to be going over them



in much more detail very shortly. So that's it for classes and objects,



and the difference between static and instance fields and methods.



Let's move onto the next video, where I'll be talking about parsing data that's coming in as



a string, and then I'll talk about getting some data from the user from the console.



I think you'll find the next couple of videos both interactive and fun, so let's go.


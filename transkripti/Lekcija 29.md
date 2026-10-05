**Inheritance Challenge - Designing a Worker Hierarchy**



In the previous videos, I introduced you to inheritance and the way Java supports



inheritance with the use of the extends keyword. It's time now for a challenge, to solidify



your understanding of what inheritance is. For this challenge, I'm going to show you a class



diagram like we worked with in previous videos. This describes what the challenge is all about,



in an image. This diagram



starts with the Worker class at the top of the hierarchy, this is the base or super class.



It shows one subclass, Employee, but you could imagine other types of workers,



perhaps contractors and interns, for example. From employee, I have two subclasses, these are



salaried employee and hourly employee. See how you go completing this



challenge. It will really help your understanding of what inheritance is.



Pause the video now, and I'll see you back here where we can go over my solution.



Okay, how did you get on? Did you figure it out?



Bearing in mind, there isn't only one answer to this.



There is quite a few different ways to implement this.



I've created an inheritance challenge project already, and I have the main



class with a main method ready to go. Logically, I'd start at the top of the hierarchy,



which is the most generic class or base class, this is our super class, the Worker class.



My diagram identified at least three fields that a worker might have. Namely, name,



birthdate, and end date, which would represent the employment end date.



private, string, name. private, string, birth date. protected, string, end date.



I made these fields private except for end date. The end date will get set by a method,



either on this class or a subclass, so making it protected will give a



subclass the flexibility to operate on it. Next, I'll create at least one constructor.



I'll use IntelliJ's code generation for the name and birth date only.



This mirrors a real-world scenario, because when you are adding a new worker to your database,



it's unlikely that you would know the end date. For that reason, I'm not going to include it here.



And now, you can the first constructor. I also want to add a default constructor



for the worker class, which gives my subclasses a little more flexibility.



I'll type this manually. public, worker. I could add getters and setters at this point,



but I don't really need them for this challenge. Next, I'll add the necessary methods and



generate a too string method for this class. Let's take another quick look at the worker class.



We can see the methods we need to implement are, get age, collect pay, and terminate.



Starting with get age. This should return an int that



represents the age of the person using the current year and the birth date, which is a string.



public, int, get age. int, current year, equals, twenty twenty-five. I'll using Integer dot parse



Int to convert the year to an int from a substring of birth date. and I'll then return the value of



subtracting birth year from current year. This code starts out by creating a local



variable for the current year, which I arbitrarily set to twenty twenty-five.



I'm going to assume dates: birth date, hire date, and end date will be in the



format M M, slash, D D, slash, Y Y, Y Y. I'm using a method on string called substring



to get the birth year in birth date. String has over sixty methods on it,



and it's not really feasible to cover them in any single video, but eventually, you'll see almost



all of them as we progress through the course. Later in this section, though, I'll be looking



at many of the most common ones when I cover strings and text blocks.



For this method, substring, I pass the start position of the string I want to extract,



and since indices start with zero, the birth year starts at position six.



If I only pass the start position and not the end position, the string returned will be whatever is



from the start position to the end of the string. Then, I use the integer wrapper's parse int



method to turn a string into an integer, which I've done before.



Lastly, I return the difference between the current year and the birth year to estimate age.



That's the get-age method. I'll add the collect pay method,



this will just return a double, representing the pay that will be received for a work period.



I'll just return zero point zero for worker's collect pay method.



the method definition is, public, double, collect pay. return, zero point zero.



This method is the one that should be overridden by subclasses that can



figure out the right pay to return based on the type of worker, or other subclass.



I'll add the last method, terminate, which is used to terminate employment.



This will take a date and set the end date to that day.



public, void, terminate, with the parameter of type string, called end



date. THIS dot end date, equals, end date. This looks like a setter, doesn't it?



I could've just created a setter, but creating a terminate method is



a bit clearer for the business logic. In addition, subclasses might want



to override it and add additional code that's specific to terminating



employment for a certain type of worker. Finally, I'll generate the too string method



for worker. I'll use all three fields. Ok, so that's my super class.



Next, I'll create the employee. Let's look at that class again.



For this class, I have specific Employee attributes, employeeId, and hireDate.



For simplicity's sake, I haven't included any methods specific to an Employee. But



you could probably think of some, like get job review or take vacation, for example.



I'll click new, Java class, and call it Employee. When I create a new class, the cursor is



positioned between the class name and the opening bracket, so I can just type in extends worker.



I now have a subclass. You'll notice this time, I don't



get a compiler error like I did in a previous video the first time I used the extends keyword.



This was because I created the default constructor for worker, so now, Java can



create a default constructor for employee, with its own implied call to the empty constructor.



I'll add my employee fields next. private, long,



employee ID. private, string, hire date. I'll generate the constructor with all fields.



Notice this time that I can pick which constructor on the super class will



get called from this constructor. I'll pick the one with two fields.



And I get the code shown on lines 6 through 10. You can see the call to super constructor as



the first statement in this constructor. You'll remember this has to be the first



statement; otherwise, I'll get a compiler error. This constructor has four fields: two fields



that were declared by the worker class and two fields declared on the employee class.



I'll add the too string method next. Remember to include the super class to string



method as well if it's not selected by default. And now, I'll test the code I have so far.



I'll open up the main dot java file and add some code to the main method:



employee, Tim, equals, new, employee, and for arguments, I'll specify, Tim, the eleventh of



november nineteen eighty-five. seven seven, zero zero one, and the first of January twenty twenty.



Next, I'll use println to print the object tim, which of course,



calls the too string method. I'll print age using a call to get age. And then do the same for pay,



using the result of calling collect pay. And running this code,



I get Tim's information printed out when I pass the Tim instance to println.



I've then printed out age, which was calculated to be 40 if the year is 2025, and the pay is 0.



This is all good, but I will not pass employee ID on the constructor.



I'll generate it. I can do this by setting a static



field called employee number on employee. I'll set that to 1, so my first employee



is employee one. private, static, int,



employee number, equals, one. I'll simplify my constructor,



removing the employee ID argument. And I'll set employee ID here, but using the



static employee number field I just created: THIS, dot, employee ID, equals, employee,



dot, employee number plus plus. Using the class name, when using



a static field, helps people reading this code understand what's occurring.



Notice here that I'm using the post-increment operator.



And now, I've caused an error in the main method, so let's go back to that.



I don't have to pass that seven seven zero zero one now because my constructor is going to build



an employee ID for me. I'll remove that:



And if I run it, I get the same output,



except Tim's employee ID is one. I'll just add another employee so you



can see how the static field is working. employee, Joe, equals, new, employee,



passing Joe, the eleventh of november nineteen ninety. and the third of march twenty twenty.



and I'll print joe using println. And if I run that,



Check out the employee ID for Joe is 2. That's because employee number,



that static field now, has the number of the next employee's employee number.



Remember, a static field is a place that lets you share data among all your instances.



When you're generating an ID for a new employee, it's a place to find the next ID to use.



Ok, I'll end the challenge video here and pick it up in the next video.



In this video, we created a worker class and an employee class that inherited from worker.



In the next video, I'm going to go a level deeper and create a specific type of employee.





&#x20;**Inheritance Challenge Part 2: Specialized Employees**



In the last video, I got through two-thirds of the inheritance challenge, as shown on this diagram.



I created the worker and the employee classes, with the fields and methods shown here.



I also overrode the too string method (which you know by now,



was originally declared on the object class). I overrode too string for worker and then



overrode it again but extended it further for the employee class.



It's time to build a more specific type of Employee,



one that's Salaried or one that's Hourly. A salaried employee is paid based on



some percentage of his or her annual salary. ; If this person is retired,



then the salary may be 100 percent of this amount, but it is generally reduced somewhat.



An hourly employee is paid by the hours worked and the hourly rate they agreed to work for.



An hourly employee may also get double pay if they work over a certain number of hours.



The challenge asked us to just pick one type of employee and build it out.



I'm going to create the salaried employee, so let's focus on just that class:



We see that I have two new fields that are specific to a salaried employee, these are



annual salary, and a flag is retired, a boolean. This means our retired person will still get paid



but not his or her full salary. I'll have one method retire that



will set the is retired field to true. I'll create a new class in our inheritance project



called salaried employee. And I'll add extends employee



right away after salaried employee: And that won't compile, as we see,



without a constructor declaration that calls employee's constructor.



But first, I'll add our fields for this class: double, annual salary. boolean, is retired.



I'll generator the constructor, with a single parameter, annual salary.



Remember that is retired is false by default, and annual salary is initialized to zero.



I can create a salaried employee with just one extra field than I did with the employee,



the annual salary. At this point,



I'm ready to hire a salaried employee. In fact, I'll just change my main method and



make Joe, my second employee, a salaried employee. I'll change the references to SalariedEmployee and



then add his annual salary as the last argument. Running this will give me the same output because



I haven't overridden too string, and actually, I don't want to.



I wouldn't want my employee's salary to inadvertently get out,



so I'll keep it well encapsulated, and I won't print that out on the too string method.



I do, however, want to override the collect pay method on worker so that Joe can get paid.



In the salaried employee class, I'll add that method.



Let's say salaried employees get paid every other week, so I'll want to divide Joe's annual salary



by twenty-six weeks to get his fortnightly pay. For now, I'll just pay in whole dollar amounts.



at, override. public, double, collect pay. return, casting as an int,



annual salary, divided by, twenty-six. I'm casting the returned amount to an int,



for simplicity's sake. You wouldn't do that in real life, of course.



And I'll make a call to that method in the main method.



println, some header text, and the result of calling the joe object's, collect pay method.



And running that, You can see that Joe's paycheck equals



one thousand three hundred and forty-six dollars. Now, I'll implement a path to retirement with



the method retire on salaried employee. I'll start by defining the method. I'll call



the terminate method, passing, the twelfth of december two thousand twenty-five. and



then I'll set is retired, too, true. I start by calling the method, terminate.



Do you remember which class defined the terminate method?



It's on worker, the grandparent of this class, or the base class (after object).



As long as the parent class doesn't override its parent's methods, then these



methods can be called from any descendants. Next, I set the is retired field to true.



Before I retire Joe, I'll edit my collect pay method.



Let's say the maximum pension can only ever be ninety percent of their final salary:



double, paycheck, equals, annual salary, divided by, twenty-six. I'll using a



ternary operator to cap the adjusted pay to be 90 percent, if they are retired,



otherwise the full amount. return the adjusted amount, casting to an int.



And going back to the calling code, the main method on main dot java:



call the retire method on joe's object. and printout the pay amount by calling



the collect pay method. And now, running that,



I found out that Joe's pension pay will be one thousand two hundred and eleven dollars.



For the salaried employee, I overrode collect pay, a method declared on worker,



and I implemented it using code that was unique for a salaried employee.



I also implemented a method that wasn't found on either worker or employee,



because it really only made sense for a salaried employee, which was retire.



So, did you implement salaried employee? Were you able to do it successfully?



Or maybe you implemented the hourly employee class.



I'm actually going to walk through that next. Let's examine that class briefly:



On this one, we have one additional field, hourly pay rate, which is what this worker



will get paid for each hour worked. We'll also implement a method



called get double pay. I'll create a new class in



our inheritance project called hourly employee. And now, this one too should extend employee



As I did with salaried employee, I'll have a compiler error until I implement a constructor,



but first, I'll add my field. private, double, hourly pay rate.



I'll generate the constructor using this field. And that gets rid of my compiler error.



In this case, I'll be passing the hourly rate for my hourly employee.



I'll add the two methods. I want to implement collect



pay for this class, overriding the one on worker, just as I did for the salaried worker,



but with a different calculation. In this case, I'll just assume that



my hourly worker gets paid weekly, and that he or she works forty hours a week.



at, override. public, double, collect pay. return, forty, times, hourly pay rate.



And now I'll implement get double pay. I'll make this one simple too for the sake



of time, and just return double the amount of the normal pay.



public, double, get double pay. return, two, times, collect pay.



This call to the method, collect pay, will call the collect pay method on this class and not



the collect pay method on worker. Moving over to the main method,



I'll create an hourly employee named Mary, and I'll make her hourly rate fifteen dollars.



First, I'll create the employee and just print out the employee data.



hourly employee Mary, equals, new, hourly employee, and I'll pass Mary, then, the fifth



of may nineteen seventy. and the third of march two thousand twenty-one, and lastly,



fifteen, as the arguments. I'll print the mary instance.



Next, I'll print out the results of calling the collect pay and get double pay methods.



} And running that code,



I got the information for Mary. You can see her employee ID is 3,



and her weekly pay is six hundred dollars. Her double-time pay would be double that,



or one thousand two hundred dollars. That was a quick implementation of the



hourly employee class. Did you pick that one,



and did it look anything like my version? Or are you still a little confused about



what we did? Let's see if



we can figure out what we really did here. This slide is showing our Joe and Mary objects.



Each method call made on these objects points to the code that will actually be executed.



In other words, it shows where the method is and what class it's in. This isn't always so obvious



when you're using inheritance. When Joe or Mary call getAge(),



the method's implementation is on Worker and is not overridden by any other class,



so the getAge method on Worker is executed. When Joe or Mary call toString(), this method has



been overridden twice, first by Worker, and then by Employee. But it wasn't overridden by either



SalariedEmployee, or HourlyEmployee, so the method from the Employee class is the one that's used.



Looking at the collectPay method, this method was overridden by



both SalariedEmployee, and HourlyEmployee. Joe will execute the method on SalariedEmployee.



And Mary will execute the one on HourlyEmployee. Finally, SalariedEmployee has a method, retire,



that's not overridden, meaning it's only in that class; it's a



method specific to a Salaried employee. And HourlyEmployee has its own method,



getDoublePay, which wouldn't apply to a Salaried employee, so we declared it in this



class and not in any super class. Ok, so that was the challenge.



I hope you got a lot out of that. If you're still confused, don't worry.



The next two videos are going to review some of the points we've covered, so let's move on.


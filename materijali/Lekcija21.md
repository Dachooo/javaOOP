# Lekcija 21: Parsiranje vrednosti, unos sa konzole, Scanner i obrada izuzetaka

## Cilj lekcije

Nakon ove lekcije, znaćete kako da **pretvorite tekst u broj** (parsiranje) pomoću `Integer.parseInt` i `Double.parseDouble`, poznavaćete načine čitanja unosa korisnika (`System.in`, `System.console()`, argumenti komandne linije, `Scanner`) i zašto `System.console()` ne radi u IntelliJ-u, naučićete osnove **obrade izuzetaka** (`try` / `catch`), i napravićete **interaktivan program** koji čita ime i godinu rođenja, proverava ispravnost unosa i računa starost.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Parsiranje (parsing)** | Pretvaranje teksta (`String`) u brojčanu vrednost, npr. `"1999"` u `int` vrednost `1999`. |
| **Integer.parseInt** | Statička metoda klase `Integer` koja pretvara `String` u `int`. |
| **Double.parseDouble** | Statička metoda klase `Double` koja pretvara `String` u `double`. |
| **System.in** | Ulazni tok konzole; osnova za čitanje unosa, ali nezgodan za direktno korišćenje. |
| **System.console()** | Jednostavan način za čitanje jedne linije uz poruku (prompt), ali ne radi u IDE-ima. |
| **Scanner** | Klasa iz paketa `java.util` za jednostavno čitanje unosa iz konzole ili fajla. |
| **Izuzetak (exception)** | Greška koja nastaje tokom izvršavanja programa (npr. `NullPointerException`, `NumberFormatException`). |
| **try / catch** | Konstrukcija koja "hvata" izuzetak i omogućava programu da reaguje umesto da se sruši. |
| **import** | Naredba koja omogućava korišćenje klase iz Java biblioteke (npr. `import java.util.Scanner;`). |

---

## 2. Detaljno objašnjenje

### 2.1 Zašto je parsiranje potrebno

Podaci koji stižu iz fajla, konzole ili korisničkog interfejsa obično su prvo `String`. Sa tekstom se ne može računati:

```java
String currentYear = "2022";
String usersDateOfBirth = "1999";
// System.out.println(currentYear - usersDateOfBirth); // GRESKA: operator - ne moze da se primeni na String i String
System.out.println(currentYear + usersDateOfBirth);    // 20221999 (konkatenacija, a ne sabiranje)
```

Operator `-` nije primenljiv na stringove, a operator `+` ih **spaja**. Isto se dešava i ako je samo jedan operand `String`: rezultat je tekst, a ne broj.

### 2.2 Integer.parseInt i Double.parseDouble

Rešenje je da se tekst **parsira**, odnosno da se iz njega izdvoji brojčana vrednost. Za to služe statičke metode wrapper klasa:

```java
int currentYear = 2022;
String usersDateOfBirth = "1999";

int dateOfBirth = Integer.parseInt(usersDateOfBirth);
System.out.println("Age = " + (currentYear - dateOfBirth)); // Age = 23
```

`Integer.parseInt` je **statička metoda** klase `Integer`, pa se poziva preko imena klase, bez kreiranja objekta. Za decimalne brojeve koristi se `Double.parseDouble`:

```java
String usersAgeWithPartialYear = "22.5";
double ageWithPartialYear = Double.parseDouble(usersAgeWithPartialYear);
System.out.println("The user says he's " + ageWithPartialYear); // 22.5
```

Nakon parsiranja, svi aritmetički operatori rade nad dobijenom vrednošću. Svaka wrapper klasa ima svoju metodu za parsiranje, a ove dve su najčešće.

### 2.3 Načini čitanja unosa sa konzole

- **`System.in`** — ulazni tok konzole, ali je za početnike nezgodan.
- **`System.console()`** — jednostavno čitanje jedne linije uz poruku, ali **ne radi u IDE-ima**, jer je konzola u njima onemogućena.
- **Argumenti komandne linije** — prosleđuju se pri pokretanju programa iz terminala; česti, ali ne omogućavaju interaktivnost.
- **`Scanner`** — klasa napravljena da olakša čitanje unosa iz `System.in` ili fajla; lakša je za razumevanje od golog `System.in` i radi u IntelliJ-u.

### 2.4 System.console() i pokretanje iz terminala

Program koji koristi `System.console().readLine(...)` prihvata poruku (prompt) kao argument:

```java
public static String getInputFromConsole(int currentYear) {
    String name = System.console().readLine("Hi, what's your name? ");
    System.out.println("Hi " + name + ", thanks for taking the course!");

    String dateOfBirth = System.console().readLine("What year were you born? ");
    int age = currentYear - Integer.parseInt(dateOfBirth);
    return "So you are " + age + " years old";
}
```

Ako se ovaj kod pokrene iz IntelliJ-a, dobija se izuzetak jer je `System.console()` tamo `null`, a poziv metode na `null` izaziva **`NullPointerException`**. Program se može pokrenuti iz **Terminal** taba u IntelliJ-u (dostupan pored panela sa izlazom) komandom:

```
java src/Main.java
```

Ime `Main.java` mora početi velikim slovom. Terminal traži unos, program uspešno čita ime i godinu rođenja i ispisuje rezultat (za 1966. godinu i tekuću 2022: "So you are 56 years old").

### 2.5 Izuzeci i try / catch

**Izuzetak (exception)** je greška koja nastaje u toku izvršavanja. Java ima mnogo imenovanih izuzetaka, npr. `NullPointerException` i `NumberFormatException`. Izuzetak se može **uhvatiti i obraditi** pomoću naredbe `try` / `catch`:

```java
try {
    // kod koji moze da izazove izuzetak
} catch (NullPointerException e) {
    // kod koji reaguje na izuzetak
}
```

- **`try` blok** obuhvata kod koji može izazvati grešku.
- **`catch`** u zagradi navodi **tip izuzetka** i **ime promenljive** (uobičajeno `e`, ali može biti bilo koje ime), a zatim ima sopstveni blok koda koji obrađuje grešku.
- Promenljiva u `catch` zagradi je obavezna, čak i ako se ne koristi; preko nje se mogu čitati informacije o izuzetku (detaljnije kasnije u kursu).

Ovako se program može napisati da probaju prvo `System.console()`, a ako ne uspe, da pređe na `Scanner`:

```java
try {
    System.out.println(getInputFromConsole(currentYear));
} catch (NullPointerException e) {
    System.out.println(getInputFromScanner(currentYear));
}
```

### 2.6 Klasa Scanner

**`Scanner`** je jednostavan tekstualni skener koji može da parsira primitivne tipove i stringove. Da bi se koristio, treba napraviti objekat (instancu) pomoću ključne reči **`new`**, uz prosleđivanje `System.in` za čitanje sa konzole:

```java
Scanner scanner = new Scanner(System.in);
```

(Za čitanje iz fajla umesto `System.in` prosleđuje se objekat klase `File`, o čemu će biti reči kasnije.)

Klasa `Scanner` se nalazi u biblioteci `java.util`, pa je potrebna naredba **`import`** na vrhu fajla:

```java
import java.util.Scanner;
```

IntelliJ može da dodaje i uklanja `import` naredbe automatski ako su uključene opcije **Add unambiguous imports on the fly** i **Optimize imports on the fly** (podešene u lekciji o konfiguraciji). Preporučuje se da ostanu uključene.

Uobičajena praksa je da se promenljiva imenuje istim imenom kao klasa, ali malim početnim slovom (**lower camel case**), za razliku od imena klasa (**upper camel case**).

Metoda `nextLine()` čita jednu liniju unosa, ali za razliku od `readLine`, **ne prima poruku**, pa se poruka ispisuje posebno:

```java
System.out.println("Hi, what's your name?");
String name = scanner.nextLine();
```

`nextLine()` je **instancna metoda** i poziva se na objektu (`scanner`, malo `s`), a ne na klasi (`Scanner`, veliko `S`). Za razliku od `System.out` (izlaz), `System.in` predstavlja **ulaz**.

### 2.7 Validacija unosa i petlja do-while

Bez provere, korisnik može uneti neispravnu godinu (2070, 1500 ili negativan broj), pa se dobijaju besmislene starosti. Zato pišemo metodu za **validaciju**. Ona parsira godinu rođenja, proverava da li je u dozvoljenom opsegu (ne u budućnosti i ne više od 125 godina unazad) i vraća `-1` ako je unos neispravan (`-1` je čest znak za nevalidnu vrednost metode koja bi inače vraćala pozitivan broj):

```java
public static int checkData(int currentYear, String dateOfBirth) {
    int dob = Integer.parseInt(dateOfBirth);
    int minimumYear = currentYear - 125;

    if ((dob < minimumYear) || (dob > currentYear)) {
        return -1;
    }
    return (currentYear - dob);
}
```

Zatim se unos ponavlja **`do-while`** petljom sve dok korisnik ne unese ispravnu godinu. Promenljive `validDOB` i `age` deklarišu se **pre petlje**, jer se koriste i posle nje:

```java
boolean validDOB = false;
int age = 0;
do {
    System.out.println("Enter a year of birth >= " + (currentYear - 125)
        + " and <= " + currentYear);
    age = checkData(currentYear, scanner.nextLine());
    validDOB = age < 0 ? false : true;
} while (!validDOB);
```

Ako je `age` manji od nule, `validDOB` postaje `false` i petlja se ponavlja; u suprotnom postaje `true` i petlja se završava. Za ovo je `do-while` idealan, jer se unos mora zatražiti bar jednom.

### 2.8 Obrada NumberFormatException

Ako korisnik unese tekst koji nije broj (npr. `196C`), `Integer.parseInt` izaziva **`NumberFormatException`** i program se ruši. Grešku hvatamo `try` / `catch` blokom oko poziva metode za validaciju:

```java
try {
    age = checkData(currentYear, scanner.nextLine());
    validDOB = age < 0 ? false : true;
} catch (NumberFormatException badUserData) {
    System.out.println("Characters not allowed!!! Try again.");
}
```

Kada se uhvati izuzetak, ispisuje se poruka, `validDOB` ostaje `false` i petlja traži novi unos. Kad god se kod menja, dobro je ponovo proći kroz sve prethodne test scenarije (budućnost, predaleka prošlost, negativan broj, nebrojčani unos i na kraju ispravan unos).

---

## 3. Kodni primeri

### 3.1 Parsiranje String vrednosti u brojeve

```java
int year = Integer.parseInt("1999");
double age = Double.parseDouble("22.5");

System.out.println(2022 - year); // 23
System.out.println(age + 1);     // 23.5
```

### 3.2 Hvatanje izuzetka pri parsiranju

```java
try {
    int number = Integer.parseInt("196C");
    System.out.println(number);
} catch (NumberFormatException e) {
    System.out.println("Not a valid number");
}
```

### 3.3 Osnovno čitanje sa Scanner-om

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("What is your name?");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}
```

### 3.4 Kompletan Java program (interaktivna provera starosti)

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int currentYear = 2022;
        System.out.println(getInputFromScanner(currentYear));
    }

    public static String getInputFromScanner(int currentYear) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Hi, what's your name?");
        String name = scanner.nextLine();
        System.out.println("Hi " + name + ", thanks for taking the course!");

        System.out.println("What year were you born?");
        boolean validDOB = false;
        int age = 0;

        do {
            System.out.println("Enter a year of birth >= " + (currentYear - 125)
                + " and <= " + currentYear);
            try {
                age = checkData(currentYear, scanner.nextLine());
                validDOB = age < 0 ? false : true;
            } catch (NumberFormatException badUserData) {
                System.out.println("Characters not allowed!!! Try again.");
            }
        } while (!validDOB);

        return "So you are " + age + " years old";
    }

    public static int checkData(int currentYear, String dateOfBirth) {
        int dob = Integer.parseInt(dateOfBirth);
        int minimumYear = currentYear - 125;

        if ((dob < minimumYear) || (dob > currentYear)) {
            return -1;
        }
        return (currentYear - dob);
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo naučili da se tekstualni podaci moraju **parsirati** pre računanja: `Integer.parseInt` i `Double.parseDouble` su **statičke metode** wrapper klasa. Upoznali smo načine čitanja unosa i videli da `System.console()` ne radi u IDE-ima (u IntelliJ-u daje `NullPointerException`), ali radi iz terminala, dok **`Scanner`** radi svuda. Naučili smo osnove **obrade izuzetaka** pomoću `try` / `catch`, kako se pravi objekat pomoću `new` (`new Scanner(System.in)`) i čemu služi `import java.util.Scanner;`. Na kraju smo napravili robustan interaktivni program: metoda `checkData` proverava opseg i vraća `-1` za neispravan unos, `do-while` petlja ponavlja pitanje, a `catch (NumberFormatException ...)` hvata unos koji nije broj.

### Zadatak za samostalan rad

1. Napišite program koji pomoću `Scanner`-a čita vaše ime i ispisuje pozdrav.
2. Napišite metodu koja prima `String`, parsira ga pomoću `Integer.parseInt` i vraća dvostruku vrednost tog broja. Pozovite je sa `"21"`.
3. Dodajte `try` / `catch (NumberFormatException e)` oko poziva iz prethodnog zadatka i testirajte ga sa vrednošću `"abc"`.
4. Napišite `do-while` petlju koja traži od korisnika broj između 1 i 10 i ponavlja pitanje sve dok unos nije u tom opsegu.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto `System.console().readLine(...)` izaziva `NullPointerException` kada se program pokrene u IntelliJ-u, i kako se to izbegava korišćenjem `Scanner`-a.

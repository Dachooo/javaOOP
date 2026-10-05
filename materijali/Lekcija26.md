# Lekcija 26: Nasleđivanje — osnove, extends i super()

## Cilj lekcije

Nakon ove lekcije, razumećete šta je **nasleđivanje (inheritance)** i zašto je oblik ponovnog korišćenja koda, znaćete kako da napravite **podklasu (subclass)** pomoću ključne reči **`extends`**, razumećete odnos **nadklase (superclass/parent)** i **podklase (subclass/child)**, naučićete kako se pomoću **`super()`** poziva konstruktor nadklase, i videćete prvi primer da se objekat podklase može koristiti svuda gde se očekuje objekat nadklase.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Nasleđivanje (inheritance)** | Mehanizam kojim podklasa automatski dobija (nasleđuje) polja i metode nadklase. |
| **Nadklasa (superclass / parent class)** | Klasa od koje druga klasa nasleđuje. |
| **Podklasa (subclass / child class)** | Klasa koja nasleđuje polja i metode od nadklase. |
| **extends** | Ključna reč kojom se deklariše da jedna klasa nasleđuje drugu; svaka klasa može imati samo **jednu** nadklasu. |
| **Klasni dijagram (class diagram)** | Vizuelni prikaz klase (polja i metode) i njenih odnosa sa drugim klasama, koristan za planiranje pre pisanja koda. |
| **super()** | Poziv konstruktora nadklase iz konstruktora podklase; mora biti **prva naredba** u konstruktoru. |
| **"is-a" odnos** | Način opisivanja nasleđivanja: "Dog je vrsta Animal-a" (Dog is an Animal). |

---

## 2. Detaljno objašnjenje

### 2.1 Šta je nasleđivanje

**Nasleđivanje** je oblik **ponovnog korišćenja koda (code reuse)** — način organizovanja klasa u hijerarhiju roditelj-dete, gde **dete (podklasa)** nasleđuje, odnosno ponovo koristi, polja i metode **roditelja (nadklase)**. Dobra analogija je klasifikacija životinjskog sveta: sve životinje dele određene osobine, dok svaka vrsta dodaje svoje specifičnosti.

### 2.2 Planiranje pomoću klasnog dijagrama

Pre pisanja koda, korisno je nacrtati **klasni dijagram** — jednostavan prikaz polja (gornji deo) i metoda/ponašanja (donji deo) klase. Na primer, klasa `Animal` bi mogla imati:

- polja: `type` (vrsta), `size` (veličina), `weight` (težina),
- metode: `move(speed)` (kretanje određenom brzinom), `makeNoise()` (ispuštanje zvuka).

Ovo su osobine koje **sve** životinje dele, pa ih definišemo na **baznoj (osnovnoj) klasi** `Animal`.

### 2.3 Kreiranje bazne klase Animal

```java
public class Animal {
    private String type;
    private String size;
    private double weight;

    public Animal(String type, String size, double weight) {
        this.type = type;
        this.size = size;
        this.weight = weight;
    }

    public void move(String speed) {
        System.out.println(type + " moves " + speed);
    }

    public void makeNoise() {
        System.out.println(type + " makes some kind of noise");
    }

    @Override
    public String toString() {
        return "Animal{type='" + type + "', size='" + size + "', weight=" + weight + "}";
    }
}
```

Konstruktor i `toString()` metoda mogu se generisati preko IntelliJ-a (**Code → Generate → Constructor**, odnosno **Code → Generate → toString**). `toString()` vraća tekstualni opis objekta i automatski se poziva kad god se objekat ispisuje — o njoj će biti više reči u narednim lekcijama.

### 2.4 Specijalizacija: klasa Dog koja nasleđuje Animal

Pas ima sve osobine životinje (tip, veličina, težina, kretanje, ispuštanje zvuka), ali i svoje specifičnosti (oblik ušiju, oblik repa, lajanje). Umesto da se sve to ponovo piše, klasa `Dog` **nasleđuje** od `Animal` pomoću ključne reči **`extends`**:

```java
public class Dog extends Animal {
}
```

Ovim jednim redom, `Dog` **automatski dobija** sva polja i metode klase `Animal` — ne moraju se ponovo deklarisati. Opisujemo ovaj odnos na dva ekvivalentna načina:

- **`Dog` je podklasa (subclass/child)** klase `Animal`,
- **`Animal` je nadklasa (superclass/parent)** klase `Dog`,
- ili, koristeći **"is-a" odnos**: **"Dog je vrsta Animal-a"** (Dog is an Animal).

**Pravilo:** klasa može imati **samo jednu** nadklasu u svojoj `extends` klauzuli — Java ne podržava višestruko nasleđivanje klasa.

### 2.5 Problem: nedostajući default konstruktor u nadklasi

Čim se doda `extends Animal`, IntelliJ prijavljuje grešku: **"There is no default constructor available in 'Animal'"**. Razlog: klasa `Animal` ima eksplicitan konstruktor sa tri parametra, pa Java **ne kreira** implicitni konstruktor bez argumenata (pravilo iz lekcije o konstruktorima). Kada klasa `Dog` nema sopstveni konstruktor, Java pokušava da za nju generiše podrazumevani konstruktor koji **automatski poziva** konstruktor nadklase bez argumenata — a takav konstruktor na `Animal` ne postoji, pa dolazi do greške.

### 2.6 Ključna reč super()

**`super()`** poziva konstruktor **nadklase**, slično kao što `this()` poziva drugi konstruktor **iste** klase:

```java
public class Dog extends Animal {
    public Dog() {
        super(); // poziva Animal() - konstruktor bez argumenata
    }
}
```

Pravila za `super()`:

- mora biti **prva naredba** u konstruktoru podklase (potpuno isto pravilo kao za `this()`),
- `this()` i `super()` **nikada ne mogu** biti u istom konstruktoru (jer oba moraju biti prva naredba),
- ako konstruktor podklase **ne** sadrži eksplicitan poziv `super(...)`, Java **automatski** dodaje poziv `super()` bez argumenata, kao prvu naredbu,
- ako nadklasa **nema** konstruktor bez argumenata, podklasa **mora** eksplicitno pozvati `super(...)` sa odgovarajućim argumentima u **svakom** svom konstruktoru.

Rešenje prethodnog problema: dodati konstruktor bez argumenata na `Animal`:

```java
public class Animal {
    // ... polja ...

    public Animal() {
    }

    public Animal(String type, String size, double weight) {
        this.type = type;
        this.size = size;
        this.weight = weight;
    }
    // ...
}
```

Sada se kod ponovo kompajlira, jer `Dog`-ov implicitni (ili eksplicitni) poziv `super()` ima odgovarajući konstruktor na koji se može osloniti.

### 2.7 Prosleđivanje argumenata kroz super(...)

`super(...)` može primiti argumente, baš kao i `this(...)`, koji se prosleđuju odgovarajućem konstruktoru nadklase:

```java
public class Dog extends Animal {
    public Dog() {
        super("Mutt", "big", 50); // poziva Animal(String, String, double)
    }
}
```

Sada svaki `Dog` objekat, čak i kreiran bez argumenata, automatski dobija ove vrednosti za `type`, `size` i `weight`, jer konstruktor podklase delegira inicijalizaciju konstruktoru nadklase.

### 2.8 Podklasa "besplatno" nasleđuje metode nadklase

Čak i prazna klasa `Dog extends Animal` (sa samo konstruktorom koji poziva `super(...)`) već ima **tri funkcionalne metode**: `move()`, `makeNoise()` i `toString()`, i **tri polja**: `type`, `size`, `weight` — sve nasleđeno od `Animal`, bez ijedne linije dodatnog koda za njih:

```java
Dog dog = new Dog();
dog.makeNoise(); // Mutt makes some kind of noise
dog.move("fast"); // Mutt moves fast
System.out.println(dog); // poziva nasledjenu toString() metodu
```

### 2.9 Objekat podklase tamo gde se očekuje nadklasa

Pošto je `Dog` **vrsta** `Animal`-a, objekat tipa `Dog` može se koristiti svuda gde kod očekuje `Animal`:

```java
public static void doAnimalStuff(Animal animal, String speed) {
    animal.makeNoise();
    animal.move(speed);
    System.out.println(animal);
    System.out.println("__________");
}
```

```java
Animal animal = new Animal("generic animal", "huge", 400.0);
doAnimalStuff(animal, "slow"); // radi - prosledjen Animal

Dog dog = new Dog();
doAnimalStuff(dog, "fast"); // TAKODJE radi - Dog JE Animal
```

Metoda `doAnimalStuff` je napisana da prima parametar tipa `Animal`, ali joj se može proslediti i `Dog` objekat, jer `Dog` nasleđuje od `Animal` — ovo je prvi nagoveštaj **polimorfizma**, teme koja će biti detaljnije obrađena u narednim lekcijama. Važno je uočiti da metoda `doAnimalStuff` **nije morala da se menja** uvođenjem nove klase `Dog` — kod koji radi sa `Animal` tipom automatski radi i sa svim njegovim podklasama.

---

## 3. Kodni primeri

### 3.1 Bazna klasa Animal

```java
public class Animal {
    private String type;
    private String size;
    private double weight;

    public Animal() {
    }

    public Animal(String type, String size, double weight) {
        this.type = type;
        this.size = size;
        this.weight = weight;
    }

    public void move(String speed) {
        System.out.println(type + " moves " + speed);
    }

    public void makeNoise() {
        System.out.println(type + " makes some kind of noise");
    }

    @Override
    public String toString() {
        return "Animal{type='" + type + "', size='" + size + "', weight=" + weight + "}";
    }
}
```

### 3.2 Podklasa Dog sa super()

```java
public class Dog extends Animal {
    public Dog() {
        super("Mutt", "big", 50);
    }
}
```

### 3.3 Nasleđene metode u akciji

```java
Dog dog = new Dog();
dog.makeNoise(); // Mutt makes some kind of noise
dog.move("fast"); // Mutt moves fast
```

### 3.4 Objekat podklase prosleđen metodi koja očekuje nadklasu

```java
public static void doAnimalStuff(Animal animal, String speed) {
    animal.makeNoise();
    animal.move(speed);
    System.out.println(animal);
}
```

### 3.5 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal("generic animal", "huge", 400.0);
        doAnimalStuff(animal, "slow");

        Dog dog = new Dog();
        doAnimalStuff(dog, "fast"); // Dog objekat prosledjen kao Animal
    }

    public static void doAnimalStuff(Animal animal, String speed) {
        animal.makeNoise();
        animal.move(speed);
        System.out.println(animal);
        System.out.println("__________");
    }
}

class Animal {
    private String type;
    private String size;
    private double weight;

    public Animal() {
    }

    public Animal(String type, String size, double weight) {
        this.type = type;
        this.size = size;
        this.weight = weight;
    }

    public void move(String speed) {
        System.out.println(type + " moves " + speed);
    }

    public void makeNoise() {
        System.out.println(type + " makes some kind of noise");
    }

    @Override
    public String toString() {
        return "Animal{type='" + type + "', size='" + size + "', weight=" + weight + "}";
    }
}

class Dog extends Animal {
    public Dog() {
        super("Mutt", "big", 50);
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **nasleđivanje** kao oblik ponovnog korišćenja koda — podklasa pomoću ključne reči **`extends`** automatski nasleđuje sva polja i metode nadklase, pri čemu svaka klasa može imati samo **jednu** nadklasu. Videli smo kako se odnos opisuje terminima **nadklasa/podklasa** (superclass/subclass) ili kroz **"is-a"** odnos ("Dog je vrsta Animal-a"). Naučili smo da konstruktor podklase mora, eksplicitno ili implicitno, pozvati konstruktor nadklase pomoću **`super()`** — pravilo gotovo identično pravilu za `this()`, uključujući zahtev da bude **prva naredba** u konstruktoru, i činjenicu da nadklasa bez default konstruktora prisiljava podklasu da eksplicitno pozove `super(...)` sa odgovarajućim argumentima. Na kraju smo videli da se objekat podklase može koristiti svuda gde kod očekuje objekat nadklase, bez potrebe da se taj kod menja uvođenjem novih podklasa.

### Zadatak za samostalan rad

1. Napravite baznu klasu `Vehicle` sa poljima `brand` i `maxSpeed`, konstruktorom i metodom `describe()`.
2. Napravite podklasu `Bicycle extends Vehicle` čiji konstruktor poziva `super(...)` sa podrazumevanim vrednostima.
3. Kreirajte objekat tipa `Bicycle` i pozovite na njemu nasleđenu metodu `describe()`.
4. Napišite statičku metodu koja prima parametar tipa `Vehicle` i pozovite je i sa objektom `Vehicle`, i sa objektom `Bicycle`, da potvrdite da oba rade.
5. **Bonus:** Namerno uklonite konstruktor bez argumenata iz `Vehicle` (ostavite samo onaj sa parametrima) i pokušajte da u `Bicycle`-u ne pozovete `super(...)` eksplicitno. Zabeležite (kao komentar) tačnu grešku koju IntelliJ prijavljuje i objasnite zašto se javlja.

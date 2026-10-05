# Lekcija 30: Rekapitulacija — this/super i preopterećenje naspram prevazilaženja

## Cilj lekcije

Nakon ove lekcije, jasno ćete razlikovati **`this`/`super`** (pristup članovima) od **`this()`/`super()`** (pozivi konstruktora), znaćete da pišete konstruktore bez duplikacije koda pomoću **ulančavanja (constructor chaining)**, i imaćete sistematičan pregled razlika između **preopterećenja metoda (overloading)** i **prevazilaženja metoda (overriding)** — uključujući stroga pravila prevazilaženja: isti potpis, modifikator pristupa koji ne sme biti restriktivniji, i **kovarijantni povratni tip**.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **this** | Pristup članu (polju/metodi) **trenutne** instance; obavezan kad se ime parametra poklapa sa imenom polja. |
| **super** | Pristup članu (polju/metodi) **nadklase**; obavezan da bi se izbegla neželjena rekurzija kod prevaziđenih metoda istog imena. |
| **this(...)** | Poziv **drugog konstruktora iste klase**; mora biti prva naredba konstruktora. |
| **super(...)** | Poziv konstruktora **nadklase**; mora biti prva naredba konstruktora; Java ga automatski ubacuje ako nije eksplicitno napisan. |
| **Preopterećenje (overloading)** | Više metoda **istog imena, različitih parametara** u istoj klasi — razrešava se u vreme kompajliranja ("compile-time polymorphism"). |
| **Prevazilaženje (overriding)** | Metoda u podklasi sa **istim potpisom** kao u nadklasi — razrešava se u vreme izvršavanja ("runtime polymorphism" / dynamic method dispatch). |
| **Kovarijantni povratni tip** | Kod prevazilaženja, povratni tip metode u podklasi sme biti **isti ili uži** (podklasa) od povratnog tipa u nadklasi. |

---

## 2. Detaljno objašnjenje

### 2.1 this i super — pristup članovima

**`this`** pristupa članu **trenutne** instance, a **`super`** pristupa članu **nadklase**. Oba se mogu koristiti bilo gde u (nestatičkom) kodu klase, **osim** u statičkim elementima (npr. statičkoj metodi) — pokušaj upotrebe `this` ili `super` u statičkom kontekstu izaziva grešku kompajliranja, jer statički kod nije vezan ni za jednu instancu.

`this` je **obavezan** kada ime parametra (ili lokalne promenljive) **isto** kao ime polja — bez njega, Java bi promenljivu protumačila kao parametar, a ne polje:

```java
public void setName(String name) {
    this.name = name; // this.name = polje, name = parametar
}
```

U getteru, gde nema parametra istog imena, `this` je **opcion** (nije neophodan da bi se izbegla dvosmislenost):

```java
public String getName() {
    return name; // isto kao return this.name;
}
```

`super` se najčešće koristi pri **prevazilaženju metode**, kada treba pozvati implementaciju nadklase sa istim imenom:

```java
@Override
public void printMethod() {
    super.printMethod(); // poziva implementaciju nadklase
}
```

**Važno:** bez `super`, poziv `printMethod()` unutar same metode `printMethod()` bi predstavljao **rekurzivan poziv same sebe** — metoda bi sebe pozivala unedogled (dok se ne potroši memorija), umesto da pozove verziju iz nadklase.

### 2.2 this() i super() — pozivi konstruktora

Za razliku od `this`/`super` (pristup članovima), **`this()`** i **`super()`** (sa zagradama) su **pozivi konstruktora**:

- **`this()`** poziva **drugi konstruktor iste klase** — koristi se za ulančavanje konstruktora, radi smanjenja duplikacije koda. Mora biti **prva naredba** konstruktora.
- **`super()`** poziva konstruktor **nadklase**. Takođe mora biti **prva naredba** konstruktora. Ako se ne napiše eksplicitno, Java ga **automatski** dodaje — uvek kao poziv konstruktora nadklase **bez argumenata**.
- **Konstruktor nikada ne može imati i `this()` i `super()`** istovremeno — pošto oba moraju biti prva naredba, ne mogu oba biti prisutna u istom konstruktoru.

### 2.3 Loš primer: duplikacija inicijalizacije u konstruktorima

```java
public class Example {
    private int a;
    private int b;

    public Example() {
        a = 0;
        b = 0;
    }

    public Example(int a) {
        this.a = a;
        b = 0;
    }

    public Example(int a, int b) {
        this.a = a;
        this.b = b;
    }
}
```

Sva tri konstruktora **ponavljaju** logiku inicijalizacije polja — ovo je upravo problem duplikacije koda iz ranijih lekcija, primenjen na konstruktore. Ovakav kod nikada ne treba pisati.

### 2.4 Dobar primer: ulančavanje konstruktora

```java
public class Example {
    private int a;
    private int b;

    public Example() {
        this(0);
    }

    public Example(int a) {
        this(a, 0);
    }

    public Example(int a, int b) {
        this.a = a;
        this.b = b;
    }
}
```

Bez obzira koji se konstruktor pozove, **samo jedan** konstruktor (ovde treći, sa oba parametra) zaista vrši inicijalizaciju. Prvi i drugi konstruktor samo **prosleđuju** poziv dalje, sa podrazumevanim vrednostima za ono što ne primaju. Ovo je **ulančavanje konstruktora (constructor chaining)** — izbegava duplikaciju i garantuje da postoji **jedno jedino mesto** gde se inicijalizacija zaista dešava.

### 2.5 Kombinovanje this() i super() u hijerarhiji

`this()` i `super()` se ne mogu kombinovati u **istom** konstruktoru, ali se mogu koristiti u **različitim** konstruktorima iste hijerarhije:

```java
class Shape {
    private int x;
    private int y;

    public Shape(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Shape {
    private int width;
    private int height;

    public Rectangle() {
        this(10, 10); // this() - poziva drugi konstruktor iste klase (Rectangle)
    }

    public Rectangle(int width, int height) {
        super(0, 0); // super() - poziva konstruktor nadklase (Shape)
        this.width = width;
        this.height = height;
    }
}
```

Prvi `Rectangle` konstruktor koristi `this(...)` (ulančavanje unutar `Rectangle`), a drugi koristi `super(...)` (poziv ka `Shape`) — svaki u svom konstruktoru, nikad oba istovremeno u jednom.

### 2.6 Preopterećenje metoda — rekapitulacija

**Preopterećenje (overloading)** znači **dve ili više** metoda **istog imena** sa **različitim parametrima**, u istoj klasi. Pravila:

- metode **moraju** imati isto ime i **različite** parametre (po broju, tipu ili redosledu),
- povratni tip **može, ali ne mora** biti različit,
- modifikator pristupa **može, ali ne mora** biti različit,
- mogu (ali ne moraju) bacati različite izuzetke (tema koja se detaljnije obrađuje kasnije).

Preopterećenje se obično dešava unutar jedne klase, ali pošto podklasa nasleđuje metode nadklase, i **podklasa** može dodati novu preopterećenu verziju nasleđene metode. Preopterećenje se naziva i **"compile-time polymorphism"**, jer kompajler, na osnovu imena metode i liste argumenata, već u trenutku kompajliranja određuje koja će tačno metoda biti pozvana.

### 2.7 Prevazilaženje metoda — rekapitulacija i stroga pravila

**Prevazilaženje (overriding)** znači definisanje metode u podklasi sa **istim potpisom** (isto ime, isti parametri, istim redosledom) kao metoda već definisana u nadklasi. Nazivamo ga i **"runtime polymorphism"** ili **dynamic method dispatch**, jer JVM **tek u trenutku izvršavanja** odlučuje koja će se implementacija pozvati, na osnovu **stvarnog** tipa objekta.

Pravila koja metoda mora ispuniti da bi se smatrala ispravnim prevazilaženjem:

1. **Isto ime i isti parametri** (po broju, tipu i redosledu) kao metoda nadklase.
2. **Povratni tip** mora biti **isti ili kovarijantan** (videti sekciju 2.9).
3. **Modifikator pristupa ne sme biti restriktivniji** od onog u nadklasi — ako je metoda nadklase `protected`, prevaziđena verzija **ne sme** biti `private` (to bi bio pokušaj "sužavanja" pristupa), ali **sme** biti `public` (širenje pristupa je dozvoljeno).

Dodatna važna pravila:

- prevazideti se mogu **samo nasleđene (instancne)** metode — **statičke** metode se ne prevazilaze (iako se mogu "sakriti" sličnom tehnikom, to je poseban slučaj van okvira ove lekcije),
- **konstruktori** se ne mogu prevazilaziti (nemaju ime metode u klasičnom smislu),
- **`private`** metode se ne mogu prevazilaziti (nisu ni vidljive podklasi),
- metode označene kao **`final`** se ne mogu prevazilaziti (ključna reč `final` se detaljnije obrađuje kasnije u kursu),
- podklasa može pozvati originalnu implementaciju nadklase pomoću **`super.imeMetode()`**.

### 2.8 @Override anotacija

Preporučuje se da se iznad svake prevaziđene metode doda anotacija **`@Override`**. Ona **nije obavezna**, ali ima važnu ulogu: ako metoda **ne** ispunjava pravila ispravnog prevazilaženja (npr. potpis se slučajno ne poklapa tačno), kompajler **prijavljuje grešku**, umesto da tiho kreira potpuno **novu**, nepovezanu metodu. Ovo čini `@Override` korisnim alatom za rano otkrivanje grešaka u kucanju potpisa.

### 2.9 Poređenje overloading i overriding — tabela

| | Preopterećenje (overloading) | Prevazilaženje (overriding) |
|---|---|---|
| **Svrha** | Ponovna upotreba imena metode za različite parametre | Ponovna upotreba (i menjanje) ponašanja nasleđenog od nadklase |
| **Gde se javlja** | Obično unutar jedne klase (može i u podklasi, dodavanjem nove preopterećene verzije) | Između nadklase i podklase (uvek "is-a" odnos) |
| **Parametri** | **Moraju** biti različiti | **Moraju** biti potpuno isti (broj, tip, redosled) |
| **Povratni tip** | Može, ali ne mora biti različit | Mora biti isti ili **kovarijantan** |
| **Modifikator pristupa** | Može, ali ne mora biti različit | Ne sme biti restriktivniji (sme biti širi) |
| **Kada se razrešava** | U vreme kompajliranja (compile-time) | U vreme izvršavanja (runtime) |

### 2.10 Primer razlike kroz kod

```java
class Dog {
    public void bark() {
        System.out.println("Woof");
    }
}

class GermanShepherd extends Dog {
    @Override
    public void bark() { // PREVAZILAZENJE: isto ime, isti (nikakvi) parametri
        System.out.println("Loud woof");
    }
}
```

```java
class Dog2 {
    public void bark() {
        System.out.println("Woof");
    }

    public void bark(int times) { // PREOPTERECENJE: isto ime, drugaciji parametri
        for (int i = 0; i < times; i++) {
            System.out.println("Woof");
        }
    }
}
```

### 2.11 Kovarijantni povratni tip

Kod prevazilaženja, povratni tip metode u podklasi može biti **tačno isti** kao u nadklasi, ili **uži** — tip koji je sam po sebi podklasa originalnog povratnog tipa. Ovo se naziva **kovarijantni povratni tip**.

Primer: `Object` definiše metodu `clone()` čiji je povratni tip `Object`. Klasa `Person` (koja, kao i sve klase, implicitno nasleđuje `Object`) može prevazići `clone()` tako da vraća **`Person`**, umesto generičkog `Object`a:

```java
class Person {
    @Override
    public Person clone() { // Person je kovarijantan sa Object - validno prevazilazenje
        // ...
        return new Person();
    }
}
```

Pošto je `Person` podklasa `Object`-a, ovo je validno prevazilaženje — povratni tip je "sužen" na specifičniji tip, umesto da ostane generički `Object`. Takođe je dozvoljeno da modifikator pristupa postane **širi** — ako je `Object.clone()` deklarisan kao `protected`, `Person.clone()` sme biti `public` (ali ne bi smeo biti `private`, jer bi to suzilo pristup).

---

## 3. Kodni primeri

### 3.1 this i super za pristup članovima

```java
public class Point {
    private int x;

    public void setX(int x) {
        this.x = x; // obavezno - x je i parametar i polje
    }
}

class Point3D extends Point {
    @Override
    public void setX(int x) {
        super.setX(x); // poziva Point-ovu implementaciju
        System.out.println("X postavljen na " + x);
    }
}
```

### 3.2 Ulančavanje konstruktora (this())

```java
public class Box {
    private int width;
    private int height;

    public Box() {
        this(10, 10);
    }

    public Box(int width, int height) {
        this.width = width;
        this.height = height;
    }
}
```

### 3.3 super() u podklasi

```java
class Shape {
    protected int x, y;

    public Shape(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

class Circle extends Shape {
    private int radius;

    public Circle(int x, int y, int radius) {
        super(x, y);
        this.radius = radius;
    }
}
```

### 3.4 Preopterećenje naspram prevazilaženja

```java
class Dog {
    public void bark() { System.out.println("Woof"); }
    public void bark(int times) { // preopterecenje
        for (int i = 0; i < times; i++) System.out.println("Woof");
    }
}

class GermanShepherd extends Dog {
    @Override
    public void bark() { // prevazilazenje
        System.out.println("Loud woof");
    }
}
```

### 3.5 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        Box box = new Box();
        System.out.println("Box default: 10x10");

        GermanShepherd shepherd = new GermanShepherd();
        shepherd.bark();     // Loud woof (prevazidjena verzija)
        shepherd.bark(3);    // nasledjena preopterecena verzija (3x Woof)
    }
}

class Box {
    private int width;
    private int height;

    public Box() {
        this(10, 10);
    }

    public Box(int width, int height) {
        this.width = width;
        this.height = height;
    }
}

class Dog {
    public void bark() {
        System.out.println("Woof");
    }

    public void bark(int times) {
        for (int i = 0; i < times; i++) {
            System.out.println("Woof");
        }
    }
}

class GermanShepherd extends Dog {
    @Override
    public void bark() {
        System.out.println("Loud woof");
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo napravili sistematičan pregled: **`this`/`super`** pristupaju članovima (trenutne instance, odnosno nadklase), dok **`this()`/`super()`** (sa zagradama) pozivaju konstruktore — oba moraju biti prva naredba, a nikada se ne kombinuju u istom konstruktoru. Videli smo kako **ulančavanje konstruktora** (`this(...)`) eliminiše duplikaciju inicijalizacionog koda, svodeći je na jedno jedino mesto. Zatim smo detaljno uporedili **preopterećenje (overloading)** — isto ime, različiti parametri, razrešava se pri kompajliranju — sa **prevazilaženjem (overriding)** — isti potpis, razrešava se pri izvršavanju, uz stroga pravila: modifikator pristupa ne sme biti restriktivniji, a povratni tip mora biti isti ili **kovarijantan**. Naučili smo i da se konstruktori, `private` i `final` metode ne mogu prevazilaziti, i da `@Override` anotacija pomaže kompajleru da otkrije greške u potpisu.

### Zadatak za samostalan rad

1. Napišite klasu sa tri konstruktora koji koriste ulančavanje (`this(...)`) tako da se inicijalizacija dešava na samo jednom mestu.
2. Napravite nadklasu i podklasu gde podklasin konstruktor koristi `super(...)` za prosleđivanje vrednosti nadklasi.
3. Napišite primer preopterećenja (dve metode istog imena, različitih parametara) i primer prevazilaženja (ista metoda, prevaziđena u podklasi) u istom paru klasa, jasno obeležavajući (komentarom) koje je koje.
4. Prevazidite metodu čiji je modifikator u nadklasi `protected` tako da u podklasi bude `public`, i objasnite (kao komentar) zašto je to dozvoljeno, a obrnuto ne bi bilo.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto se preopterećenje naziva "compile-time polymorphism", a prevazilaženje "runtime polymorphism", na konkretnom primeru iz vašeg koda.

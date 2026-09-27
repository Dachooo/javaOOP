# Lekcija 25: Referenca, objekat i instanca; statički naspram instancnih članova

## Cilj lekcije

Nakon ove lekcije, jasno ćete razlikovati pojmove **klasa**, **objekat/instanca** i **referenca**, razumećete da više referenci može upućivati na **isti** objekat u memoriji, znaćete šta je **garbage collection** i kada je objekat podložan brisanju iz memorije, i temeljno ćete razumeti razliku između **statičkih** i **instancnih** promenljivih i metoda, uključujući kada je ispravno koristiti koju vrstu.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Klasa** | Nacrt (blueprint) na osnovu kog se kreiraju objekti. |
| **Objekat / instanca** | Konkretan primerak kreiran iz klase pomoću `new`; termini se koriste naizmenično. |
| **Referenca** | "Adresa" objekta u memoriji, sačuvana u promenljivoj; preko nje se pristupa objektu. |
| **Dereferenciranje** | Promena vrednosti promenljive tako da počinje da upućuje na drugi objekat (ili na `null`). |
| **Garbage collection** | Automatski Java proces koji briše iz memorije objekte na koje više ne postoji nijedna referenca. |
| **Statička promenljiva** | Promenljiva deklarisana sa `static`; jedna zajednička kopija, deljena od svih instanci klase. |
| **Instancna promenljiva** | Promenljiva bez `static`; svaka instanca ima svoju sopstvenu kopiju i vrednost. |
| **Statička metoda** | Metoda sa `static`; poziva se preko imena klase, ne može direktno koristiti `this` ni instancne članove. |
| **Instancna metoda** | Metoda bez `static`; zahteva postojanje objekta i može direktno koristiti i instancne i statičke članove. |

---

## 2. Detaljno objašnjenje

### 2.1 Analogija: kuća, plan i adresa

- **Klasa** je **plan (blueprint)** kuće — opisuje kako kuća treba da izgleda, ali sama nije kuća.
- **Objekat (instanca)** je **konkretna izgrađena kuća** — svaki put kada se pozove `new`, "izgradi" se novi primerak po tom planu.
- **Referenca** je **adresa** te kuće, zapisana na papiru. Papir (referencu) možemo kopirati koliko puta želimo, ali kuća (objekat) ostaje **jedna jedina** — kopiramo samo adresu, ne kuću.

U kodu, referenca se čuva u promenljivoj:

```java
House blueHouse = new House("blue"); // blueHouse je referenca na novi objekat
```

### 2.2 Dve reference, isti objekat

Kada se referenca kopira u drugu promenljivu, obe **upućuju na isti objekat**:

```java
House blueHouse = new House("blue");
House anotherHouse = blueHouse; // kopira se referenca, ne objekat

System.out.println(blueHouse.getColor());   // blue
System.out.println(anotherHouse.getColor()); // blue - isti objekat
```

Ako se preko jedne reference promeni stanje objekta, promena je vidljiva i preko druge reference, jer je **objekat u memoriji jedan isti**:

```java
anotherHouse.setColor("yellow");

System.out.println(blueHouse.getColor());   // yellow
System.out.println(anotherHouse.getColor()); // yellow
```

Oba ispisa daju `yellow`, jer `blueHouse` i `anotherHouse` upućuju na **isti** objekat — promena preko jedne reference vidljiva je i preko druge.

### 2.3 Dereferenciranje — promenljiva počinje da upućuje na drugi objekat

Ako se referenci dodeli **novi** objekat, ona prestaje da upućuje na stari i počinje da upućuje na novi. Ovo se zove **dereferenciranje**:

```java
House greenHouse = new House("green"); // treci objekat u memoriji
anotherHouse = greenHouse;              // anotherHouse sada upucuje na greenHouse objekat

System.out.println(blueHouse.getColor());   // yellow (blueHouse se nije promenio)
System.out.println(anotherHouse.getColor()); // green
System.out.println(greenHouse.getColor());   // green
```

Sada postoje **dva objekta** u memoriji (žuta kuća i zelena kuća), ali **tri reference**: `blueHouse` upućuje na žutu kuću, a `anotherHouse` i `greenHouse` upućuju na istu, zelenu kuću. **U Javi se objektu nikada ne pristupa direktno — uvek preko neke reference.**

### 2.4 Objekat bez reference i garbage collection

Moguće je kreirati objekat i **ne** dodeliti ga nikakvoj promenljivoj:

```java
new House("red"); // objekat je kreiran, ali nema reference na njega
```

Ovaj kod se kompajlira i izvršava, ali odmah posle te naredbe kod **nema način** da pristupi tom objektu — nikada nije sačuvana referenca na njega. Takav objekat je **podložan garbage collection-u (eligible for garbage collection)** — Java-in automatski proces koji, kada zaključi da ni jedan pokrenuti kod ne drži referencu na neki objekat, briše ga iz memorije.

```java
House myHouse = new House("beige"); // referenca sacuvana - objekat je dostupan
new House("red"); // druga, nezavisna bez-reference kuca - odmah podlozna brisanju
```

U retkim situacijama korisno je kreirati objekat i odmah pozvati metodu na njemu, bez čuvanja reference, ali u **velikoj većini slučajeva** referenca se čuva odmah pri kreiranju objekta.

### 2.5 Statičke promenljive

**Statička promenljiva** se deklariše ključnom rečju `static` i **deli je svaka instanca klase** — postoji samo **jedna** kopija te promenljive, vezana za samu klasu, a ne za pojedinačne objekte. Ako jedna instanca promeni statičku promenljivu, promena je vidljiva **svim** instancama.

```java
public class Dog {
    private static String name;

    public Dog(String name) {
        Dog.name = name;
    }

    public void printName() {
        System.out.println(name);
    }
}
```

```java
Dog rex = new Dog("Rex");
Dog fluffy = new Dog("Fluffy");

rex.printName();    // Fluffy
fluffy.printName();  // Fluffy
```

Oba poziva ispisuju `"Fluffy"`, jer polje `name` postoji u **jednom jedinom** primerku, deljenom između svih pasa — konstruktor za `fluffy` je prepisao vrednost koju je ranije postavio konstruktor za `rex`. Ovo je primer **loše upotrebe** statičke promenljive — logično bi bilo da svaki pas ima svoje ime.

**Preporuka:** statičkoj promenljivoj treba pristupati preko **imena klase**, a ne preko reference na objekat, radi jasnoće da vrednost pripada klasi, ne pojedinačnoj instanci. Statička promenljiva se ne čuva "po instanci" i ne zahteva postojanje objekta da bi joj se pristupilo.

Statičke promenljive se ređe koriste, ali su korisne za: brojače (counters), generisanje jedinstvenih identifikatora, konstantne vrednosti koje se ne menjaju (npr. matematička konstanta PI), ili kontrolu pristupa deljenom resursu (npr. log fajl, baza podataka).

### 2.6 Instancne promenljive

**Instancna promenljiva** (polje) se deklariše **bez** `static`. Za razliku od statičke, **svaka instanca ima svoju sopstvenu kopiju**, sa nezavisnom vrednošću:

```java
public class Dog {
    private String name; // instancna promenljiva, bez static

    public Dog(String name) {
        this.name = name;
    }

    public void printName() {
        System.out.println(name);
    }
}
```

```java
Dog rex = new Dog("Rex");
Dog fluffy = new Dog("Fluffy");

rex.printName();    // Rex
fluffy.printName();  // Fluffy
```

Sada svaki pas ima svoje sopstveno ime, jer je `name` instancna promenljiva — svaki objekat čuva **svoje** stanje. **U velikoj većini slučajeva** treba koristiti instancne promenljive; statičke rezervisati za posebne situacije, poput onih navedenih iznad.

### 2.7 Statičke metode

**Statička metoda** se deklariše sa `static` i **ne može direktno pristupiti instancnim poljima ili metodama**, niti koristiti ključnu reč `this` (jer `this` predstavlja konkretnu instancu, a statička metoda nije vezana za nijednu). Statičke metode se obično koriste za operacije koje **ne zavise** od stanja bilo kog objekta — npr. `main` metoda je statička, jer je JVM poziva bez ikakvog prethodno kreiranog objekta.

```java
public class Calculator {
    public static void printSum(int a, int b) {
        System.out.println(a + b);
    }
}
```

Poziva se preko imena klase:

```java
Calculator.printSum(3, 4); // 7
```

Ako se statička metoda poziva iz **iste** klase u kojoj je i definisana, ime klase se može izostaviti:

```java
public class Main {
    public static void main(String[] args) {
        printHello(); // ista klasa, ime klase nije potrebno
    }

    public static void printHello() {
        System.out.println("Hello!");
    }
}
```

### 2.8 Instancne metode

**Instancna metoda** pripada konkretnoj instanci klase — da bi se pozvala, prvo mora postojati objekat, obično kreiran pomoću `new`:

```java
public class Dog {
    public void bark() {
        System.out.println("Woof!");
    }
}
```

```java
Dog rex = new Dog();
rex.bark(); // Woof!
```

Instancna metoda **može direktno** pristupiti i instancnim, i statičkim članovima klase (bez potrebe za `this` ili imenom klase, iako se to i tako može eksplicitno napisati radi jasnosti).

### 2.9 Kada koristiti static, a kada instancnu metodu

Osnovno pitanje pri odlučivanju: **koristi li metoda instancne promenljive ili instancne metode objekta (odnosno `this`)?**

- Ako **da** — metoda treba da bude **instancna**.
- Ako **ne** — metoda **verovatno** treba da bude **statička**.

U praksi se instancne metode koriste znatno češće od statičkih, ali kad god metoda ne zavisi od stanja pojedinačnog objekta, dobra je praksa razmisliti o tome da bude statička.

---

## 3. Kodni primeri

### 3.1 Dve reference na isti objekat

```java
House blueHouse = new House("blue");
House anotherHouse = blueHouse;

anotherHouse.setColor("yellow");
System.out.println(blueHouse.getColor()); // yellow - isti objekat
```

### 3.2 Dereferenciranje

```java
House greenHouse = new House("green");
anotherHouse = greenHouse; // anotherHouse sada upucuje na drugi objekat

System.out.println(anotherHouse.getColor()); // green
```

### 3.3 Objekat bez reference (podložan garbage collection-u)

```java
new House("red"); // nema reference - odmah podlozno brisanju iz memorije
House myHouse = new House("beige"); // referenca postoji - objekat je dostupan
```

### 3.4 Statička naspram instancne promenljive

```java
public class Dog {
    private static String sharedName; // deli se izmedju svih pasa (LOSA praksa u ovom slucaju)
    private String ownName;           // svaki pas ima svoju vrednost

    public Dog(String name) {
        sharedName = name;
        this.ownName = name;
    }
}
```

### 3.5 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        Dog rex = new Dog("Rex");
        Dog fluffy = new Dog("Fluffy");

        rex.printOwnName();    // Rex
        fluffy.printOwnName();  // Fluffy

        System.out.println(Calculator.add(3, 4)); // 7
    }
}

class Dog {
    private String name; // instancna promenljiva

    public Dog(String name) {
        this.name = name;
    }

    public void printOwnName() {
        System.out.println(name);
    }
}

class Calculator {
    public static int add(int a, int b) { // staticka metoda, ne zavisi od instance
        return a + b;
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo razjasnili pojmove **klasa** (nacrt), **objekat/instanca** (konkretan primerak) i **referenca** (adresa objekta sačuvana u promenljivoj), koristeći analogiju kuće i njene adrese. Videli smo da **više reference može upućivati na isti objekat** — promena preko jedne je vidljiva i preko druge — i da **dereferenciranje** znači da promenljiva počne da upućuje na drugi objekat. Naučili smo da objekat bez ikakve reference postaje podložan **garbage collection-u**. U drugom delu smo detaljno obradili razliku između **statičkih** promenljivih i metoda (deljenih na nivou klase, pristupa se preko imena klase, ne koriste `this`) i **instancnih** promenljivih i metoda (svaka instanca ima svoju kopiju/stanje, zahtevaju postojanje objekta). Naučili smo praktično pravilo odlučivanja: ako metoda koristi instancne podatke ili metode, treba da bude instancna; u suprotnom, razmotriti da bude statička.

### Zadatak za samostalan rad

1. Napravite klasu `Counter` sa statičkim poljem `count` i instancnom metodom `increment()` koja ga uvećava. Kreirajte dva objekta, pozovite `increment()` na oba i objasnite (kao komentar) zašto oba "dele" istu vrednost.
2. Izmenite klasu iz zadatka 1 tako da `count` postane instancno (ne statičko) polje, i objasnite (kao komentar) razliku u ponašanju.
3. Napravite dve promenljive tipa neke vaše klase koje upućuju na isti objekat, promenite stanje preko jedne i ispišite vrednost preko druge da potvrdite da je objekat isti.
4. Napišite statičku metodu koja računa površinu kruga (prima radijus, koristi `Math.PI`) i pozovite je preko imena klase.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto je `main` metoda deklarisana kao `static`, povezujući to sa činjenicom da JVM poziva tu metodu bez prethodno kreiranog objekta.

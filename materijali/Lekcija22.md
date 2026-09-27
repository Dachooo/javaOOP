# Lekcija 22: Klase, objekti, enkapsulacija i getteri

## Cilj lekcije

Nakon ove lekcije, razumećete osnovne pojmove **objektno orijentisanog programiranja (OOP)** — stanje (state) i ponašanje (behavior) objekata, znaćete kako da napišete sopstvenu **klasu** sa poljima i metodama, poznavaćete **modifikatore pristupa** (`public`, `private`, `protected`, bez modifikatora) na nivou klase i na nivou članova klase, razumećete princip **enkapsulacije** i zašto se polja klase praktično uvek deklarišu kao `private`, i znaćete kako da napravite **getter** metode, uključujući generisanje pomoću IntelliJ-a.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **OOP (Object-Oriented Programming)** | Način modelovanja realnih objekata kao softverskih objekata koji sadrže i podatke i kod. |
| **Stanje (state)** | Karakteristike objekta (npr. boja, broj vrata) — u kodu se čuvaju kao **polja (fields)**. |
| **Ponašanje (behavior)** | Radnje koje objekat može izvršiti ili koje se mogu izvršiti na njemu — u kodu se opisuju **metodama**. |
| **Klasa (class)** | Šablon/nacrt koji opisuje polja i metode relevantne za neki realan objekat. |
| **Član klase (class member)** | Polje, metoda ili drugi element definisan unutar klase. |
| **Top-level klasa** | Klasa definisana direktno u fajlu, van bilo koje druge klase; ima samo dva moguća modifikatora: `public` ili bez modifikatora. |
| **Paket (package)** | Logička grupa klasa; ako nije naveden, klasa pripada podrazumevanom (default) paketu. |
| **Enkapsulacija (encapsulation)** | Praksa objedinjavanja podataka i ponašanja u jedan objekat i skrivanja unutrašnjih detalja od spoljašnjeg koda. |
| **Getter** | Metoda koja vraća vrednost privatnog polja; konvencionalno se zove `getIme` (ili `isIme` za `boolean`). |
| **Setter** | Metoda koja postavlja vrednost privatnog polja; konvencionalno se zove `setIme`. |
| **null** | Posebna vrednost koja znači da promenljiva referentnog tipa trenutno ne upućuje na nijedan objekat. |

---

## 2. Detaljno objašnjenje

### 2.1 Šta je objektno orijentisano programiranje

**OOP (Object-Oriented Programming)** je način modelovanja realnih objekata kao softverskih objekata koji sadrže i **podatke** i **kod**. Svaki realan objekat (računar, automobil, mrav) ima:

- **stanje (state)** — karakteristike koje ga opisuju (npr. za računar: količina RAM-a, veličina monitora; za mrava: starost, broj nogu),
- **ponašanje (behavior)** — radnje koje objekat izvršava ili koje se izvršavaju na njemu (npr. za računar: pokretanje, isključivanje; za mrava: jedenje, nošenje hrane).

U softverskom objektu, stanje se čuva u **poljima** (koja se nazivaju i promenljive ili atributi), a ponašanje se izražava kroz **metode**.

### 2.2 Klasa kao šablon za objekte

**Klasa** je šablon ili nacrt koji opisuje podatke (polja) i ponašanje (metode) relevantne za realan objekat koji modelujemo. Polje ili metoda definisana u klasi naziva se **član klase (class member)**.

Klase koristimo od početka kursa — svaki `public class Main` je zapravo deklaracija klase. Klasa se može zamisliti kao snažan, korisnički definisan tip podataka — mnogo moćniji od primitivnih tipova poput `int` ili `boolean`.

### 2.3 Paketi i pristup na nivou klase

Klase se organizuju u logičke grupe koje se zovu **paketi (packages)**, deklarisani naredbom `package`. Ako paket nije naveden, klasa implicitno pripada **podrazumevanom (default) paketu** — to je slučaj sa svim klasama koje smo do sada pisali.

**Top-level klasa** (definisana direktno u fajlu, a ne unutar druge klase) ima samo dva moguća modifikatora pristupa:

- **`public`** — neograničen pristup; svaki kod, iz bilo kog paketa, može pristupiti klasi.
- **bez modifikatora** — implicitno **package-private**; klasi mogu pristupiti samo klase iz istog paketa.

U praksi se klase koje pravimo najčešće deklarišu kao `public`.

### 2.4 Kreiranje prve klase: Car

Nova klasa se pravi isto kao i do sada — desni klik na `src` → New → Java Class, uz veliko početno slovo imena (npr. `Car`):

```java
public class Car {
}
```

Ovo je za sada samo "prazna skica" — nacrt bez sadržaja. Sledeći korak je da se dodaju **polja** koja opisuju automobil.

### 2.5 Modifikatori pristupa na nivou člana klase

Za razliku od top-level klase (samo `public` ili ništa), **članovi klase** (polja i metode) imaju četiri moguća modifikatora, od najmanje do najviše restriktivnog:

| Modifikator | Pristup |
|---|---|
| **`public`** | neograničen — svuda dostupno |
| *(bez modifikatora)* | package-private — dostupno samo klasama u istom paketu |
| **`protected`** | kao package-private, plus dostupno podklasama (detaljnije kasnije, uz nasleđivanje) |
| **`private`** | najrestriktivniji — dostupno **samo unutar same klase** |

### 2.6 Enkapsulacija — zašto su polja privatna

**Enkapsulacija** je ključni princip OOP-a i ima dva značenja: (1) objedinjavanje ponašanja i atributa u jedan objekat, i (2) praksa skrivanja polja i pojedinih metoda od spoljašnjeg pristupa — takozvano **information hiding**.

**Opšte pravilo:** polja klase treba deklarisati kao **`private`**, dok se klasa sama i njene metode češće deklarišu kao `public`. Kada su polja privatna, spoljašnji kod ne može direktno da im pristupi ili ih menja — pristup se kontroliše preko metoda, po potrebi sa različitim stepenom dozvola.

```java
public class Car {
    private String make;
    private String model;
    private String color;
    private int doors;
    private boolean convertible;
}
```

Ovih pet polja predstavljaju **stanje** budućih objekata tipa `Car`. Svako polje klase treba da ima naveden modifikator pristupa — ako se ne navede, Java podrazumeva package-private, za razliku od lokalnih promenljivih, koje modifikator nemaju.

### 2.7 Instancna metoda describeCar

Metoda koja koristi instancna (nestatička) polja **ne može biti statička**:

```java
public void describeCar() {
    System.out.println(doors + " door " + color + ", " + make + " " + model
        + (convertible ? " convertible" : ""));
}
```

Metode su najčešće `public`, jer žele da omoguće korisniku klase interakciju sa objektom.

### 2.8 Kreiranje objekta i default vrednosti polja

Klasa je samo šablon — da bi se koristila, mora se **instancirati**, tj. kreirati **objekat**, pomoću ključne reči `new`:

```java
Car car = new Car();
car.describeCar();
```

Ako se pokrene ovaj kod bez ikakvih dodeljenih vrednosti poljima, ispisuje se `0 door null, null, null`. Razlog: Java automatski dodeljuje **podrazumevane (default) vrednosti** poljima koja nisu inicijalizovana:

- numerički primitivni tipovi (`int`, itd.) → `0`,
- `double` i `float` → `0.0`,
- `boolean` → `false`,
- svi ostali tipovi (uključujući `String`, jer je to klasa, ne primitivni tip) → **`null`**.

**`null`** je posebna vrednost koja znači da promenljiva ili polje **ima tip, ali ne upućuje na nijedan objekat**. Polja primitivnog tipa **nikada** nisu `null` — uvek imaju neku brojčanu, `boolean` vrednost i slično.

Ovo je razlika u odnosu na lokalne promenljive: **lokalna promenljiva mora biti inicijalizovana** pre upotrebe, dok **polje klase automatski dobija default vrednost** ako programer ne dodeli svoju.

### 2.9 Dodela sopstvenih default vrednosti poljima

Poljima se mogu dodeliti sopstvene podrazumevane vrednosti direktno u deklaraciji:

```java
private String make = "Tesla";
private String model = "Model X";
private String color = "gray";
private int doors = 2;
private boolean convertible = true;
```

Sada svaki novi `Car` objekat po podrazumevanom ponašanju ima ove vrednosti, umesto Java-inih implicitnih (`null`, `0`, `false`).

### 2.10 Zašto se poljima ne može pristupiti direktno spolja

Pošto su polja `private`, pokušaj da im se pristupi **iz druge klase** (npr. iz `Main`), preko notacije tačke, izaziva grešku kompajlera:

```java
Car car = new Car();
// car.make = "Porsche";       // GRESKA: make has private access in Car
// System.out.println(car.make); // GRESKA: make has private access in Car
```

Ovo je upravo poenta enkapsulacije — spoljašnji kod ne može direktno da menja ili čita privatne podatke. Pristup se mora ostvariti preko metoda.

### 2.11 Getteri — čitanje privatnih polja

**Getter** je metoda koja vraća vrednost privatnog polja. Konvencija imenovanja je prefiks **`get`** plus ime polja u camel case (npr. `getMake()`), a metoda **ne sme biti statička**, jer čita instancno polje:

```java
public String getMake() {
    return make;
}
```

Getter metode i njihovi nazivi su deo **javnog interfejsa** klase, dok samo ime i tip polja **nisu**. Zbog toga se unutrašnja implementacija (npr. ime ili tip polja) može promeniti, a spoljašnji kod koji koristi getter ostaje neizmenjen — unutrašnje izmene su sakrivene od korisnika klase.

**IntelliJ može automatski generisati gettere:** postavite kursor u klasu, otvorite meni **Code → Generate → Getter**, izaberite polja i IntelliJ generiše odgovarajuće metode. Za `boolean` polje, konvencija je prefiks **`is`**, a ne `get` (npr. `isConvertible()` umesto `getConvertible()`).

```java
public String getModel() {
    return model;
}

public String getColor() {
    return color;
}

public int getDoors() {
    return doors;
}

public boolean isConvertible() {
    return convertible;
}
```

Sa getterima, spoljašnji kod može bezbedno da čita podatke:

```java
Car car = new Car();
System.out.println(car.getMake() + " " + car.getModel());
car.describeCar();
```

> **Napomena:** Setter metode (za **postavljanje** vrednosti privatnih polja) obrađuju se u narednoj lekciji.

---

## 3. Kodni primeri

### 3.1 Definicija klase Car sa privatnim poljima

```java
public class Car {
    private String make = "Tesla";
    private String model = "Model X";
    private String color = "gray";
    private int doors = 2;
    private boolean convertible = true;

    public void describeCar() {
        System.out.println(doors + " door " + color + ", " + make + " " + model
            + (convertible ? " convertible" : ""));
    }
}
```

### 3.2 Kreiranje objekta i poziv metode

```java
Car car = new Car();
car.describeCar(); // 2 door gray, Tesla Model X convertible
```

### 3.3 Default vrednosti polja bez inicijalizacije

```java
public class EmptyCar {
    private String make;      // null
    private int doors;        // 0
    private boolean convertible; // false
}

EmptyCar car = new EmptyCar();
System.out.println(car.getMake());  // null (uz odgovarajuci getter)
```

### 3.4 Getteri, ručno napisan i generisan

```java
public String getMake() {
    return make;
}

public boolean isConvertible() {
    return convertible;
}
```

### 3.5 Kompletan Java program (dve klase)

```java
// Fajl: Car.java
public class Car {
    private String make = "Tesla";
    private String model = "Model X";
    private String color = "gray";
    private int doors = 2;
    private boolean convertible = true;

    public void describeCar() {
        System.out.println(doors + " door " + color + ", " + make + " " + model
            + (convertible ? " convertible" : ""));
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public String getColor() {
        return color;
    }

    public int getDoors() {
        return doors;
    }

    public boolean isConvertible() {
        return convertible;
    }
}

// Fajl: Main.java
public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.describeCar();

        System.out.println("Marka: " + car.getMake());
        System.out.println("Model: " + car.getModel());
        System.out.println("Da li je kabriolet: " + car.isConvertible());
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali osnove **objektno orijentisanog programiranja**: realni objekti imaju **stanje** (polja) i **ponašanje** (metode), a **klasa** je šablon koji ih opisuje. Naučili smo da top-level klasa ima samo `public` ili podrazumevani (package-private) modifikator, dok **članovi klase** imaju četiri nivoa pristupa: `public`, bez modifikatora (package-private), `protected` i `private`. Obradili smo **enkapsulaciju** — praksu da se polja deklarišu kao `private`, čime se sprečava direktan spoljašnji pristup i omogućava skrivanje unutrašnje implementacije. Videli smo da se objekat kreira pomoću `new`, da polja bez inicijalne vrednosti dobijaju Java-ine **default vrednosti** (`0`, `0.0`, `false`, `null`), i da im se mogu dodeliti i sopstvene podrazumevane vrednosti. Na kraju smo napisali **getter** metode za čitanje privatnih polja (uz konvenciju `get`/`is` prefiksa), uključujući i njihovo automatsko generisanje u IntelliJ-u.

### Zadatak za samostalan rad

1. Napravite klasu `Book` sa privatnim poljima `title` (String), `author` (String) i `pages` (int), sa podrazumevanim vrednostima po vašem izboru.
2. Dodajte metodu `describeBook()` koja ispisuje sve podatke o knjizi u jednoj liniji.
3. Generišite (ručno ili preko IntelliJ-a) gettere za sva tri polja i pozovite ih iz `main` metode.
4. Napravite klasu bez inicijalizovanih polja (`String`, `int`, `boolean`) i ispišite njihove vrednosti preko gettera, da potvrdite Java-ine default vrednosti.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto pokušaj direktnog pristupa `object.polje = vrednost;` iz druge klase izaziva grešku kompajlera kada je `polje` deklarisano kao `private`, i kako se to pravilno rešava.

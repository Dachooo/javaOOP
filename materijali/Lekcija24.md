# Lekcija 24: Konstruktori — deklaracija, preopterećenje i ulančavanje

## Cilj lekcije

Nakon ove lekcije, znaćete šta je **konstruktor** i po čemu se razlikuje od obične metode, razumećete kada Java implicitno kreira **podrazumevani (default) konstruktor** a kada ne, znaćete da deklarišete **konstruktore sa parametrima** i primenite **preopterećenje konstruktora (constructor overloading)**, i savladaćete **ulančavanje konstruktora (constructor chaining)** pomoću `this(...)`, uključujući strogo pravilo o njegovoj poziciji.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Konstruktor (constructor)** | Poseban kod blok koji se izvršava pri kreiranju objekta; ima isto ime kao klasa i **nema povratni tip**, ne čak ni `void`. |
| **Podrazumevani (default) konstruktor** | Konstruktor bez parametara koji Java implicitno kreira ako klasa **nema nijedan** sopstveni konstruktor. |
| **Konstruktor bez argumenata (no-args)** | Konstruktor koji ne prima parametre — može biti implicitan (default) ili eksplicitno napisan. |
| **Preopterećenje konstruktora (constructor overloading)** | Postojanje više konstruktora u istoj klasi, sa različitim brojem/tipovima parametara — isti princip kao preopterećenje metoda. |
| **Ulančavanje konstruktora (constructor chaining)** | Pozivanje jednog konstruktora iz drugog, unutar iste klase, pomoću `this(...)`. |
| **this(...)** | Poseban poziv (ne isto što i `this.polje`) koji izvršava drugi konstruktor iste klase; mora biti **prva naredba** u konstruktoru. |

---

## 2. Detaljno objašnjenje

### 2.1 Šta je konstruktor

**Konstruktor** je poseban kod blok koji se izvršava prilikom **kreiranja objekta**. Pravila:

- ime konstruktora mora biti **identično imenu klase**,
- konstruktor **nema povratni tip** — ne piše se ni `void`, ni bilo koji drugi tip,
- može (i treba) imati modifikator pristupa (najčešće `public`),
- svrha konstruktora je da **inicijalizuje** polja objekta i, po potrebi, izvrši drugi kod potreban pri kreiranju.

Konstruktor se izvršava **tačno jednom**, u trenutku kreiranja objekta.

### 2.2 Podrazumevani (default) konstruktor

Kada klasa **nema nijedan** sopstveni konstruktor, Java **implicitno** kreira jedan za nas — **podrazumevani konstruktor**, bez parametara. Zato izraz `new Account()` uvek radi, iako u klasi `Account` možda nije napisan nijedan konstruktor — Java ga je dodala "iza scene", u bajtkodu, tokom kompajliranja.

**Važno pravilo:** ako klasa sadrži **bilo koji** eksplicitno napisan konstruktor, Java **više ne kreira** podrazumevani konstruktor automatski. Ako je i tada potreban konstruktor bez argumenata, mora se napisati **ručno**.

### 2.3 Eksplicitan konstruktor bez parametara

Konstruktor bez parametara se može i eksplicitno napisati, npr. radi dodavanja koda koji se izvršava pri svakom kreiranju objekta:

```java
public class Account {
    public Account() {
        System.out.println("Empty constructor called.");
    }
}
```

Sada `new Account()` poziva ovaj konstruktor, a poruka se ispisuje pre bilo kog drugog koda u programu koji sledi.

### 2.4 Konstruktor sa parametrima

Konstruktor može primati parametre, kojima se odmah postavljaju vrednosti poljima — ovo zamenjuje pozivanje niza settera:

```java
public Account(String number, double balance, String customerName, String email, String phone) {
    System.out.println("Account constructor with parameters called.");
    this.number = number;
    this.balance = balance;
    this.customerName = customerName;
    customerEmail = email;
    customerPhone = phone;
}
```

Kao i kod settera, **`this.polje = parametar;`** je potrebno samo kada se ime parametra poklapa sa imenom polja (`number`, `balance`, `customerName`). Za `email` i `phone`, čija imena **ne** odgovaraju poljima `customerEmail` i `customerPhone`, `this` nije potreban — Java jednoznačno zna na koje polje se misli. IntelliJ vizuelno razlikuje instancna polja (druga boja) od parametara konstruktora.

Kreiranje objekta sada zahteva samo jedan poziv:

```java
Account bobsAccount = new Account("12345", 1000.00, "Bob Brown", "bob@example.com", "(087) 123-4567");
```

### 2.5 Preopterećenje konstruktora

Klasa može imati **više konstruktora**, sve dok se njihovi parametri razlikuju po broju, tipu ili redosledu — potpuno isti princip kao kod **preopterećenja metoda**, samo primenjen na konstruktore:

```java
public class Account {
    public Account() {
        System.out.println("Empty constructor called.");
    }

    public Account(String number, double balance, String customerName, String email, String phone) {
        System.out.println("Account constructor with parameters called.");
        this.number = number;
        this.balance = balance;
        this.customerName = customerName;
        customerEmail = email;
        customerPhone = phone;
    }
}
```

### 2.6 Ulančavanje konstruktora pomoću this(...)

Jedan konstruktor može **pozvati drugi** konstruktor iz iste klase, pomoću posebnog poziva **`this(...)`** (ne treba ga zamenjivati sa `this.polje`). Ovo se zove **ulančavanje konstruktora (constructor chaining)**:

```java
public Account() {
    this("56789", 2.50, "Default Name", "Default Address", "Default Phone");
    System.out.println("Empty constructor called.");
}
```

Argumenti prosleđeni kroz `this(...)` moraju odgovarati **tipu, broju i redosledu** parametara nekog od postojećih konstruktora — ovde se poziva konstruktor sa pet parametara.

**Strogo pravilo:** `this(...)` **mora biti prva naredba** u telu konstruktora. Ako bi pre njega stajala, na primer, `println` naredba, IntelliJ prijavljuje grešku **"call to this must be first statement in constructor body"**.

Kada se pozove `new Account()`, izvršavanje ide ovim redom: prvo se poziva konstruktor sa pet parametara (postavlja sva polja i ispisuje svoju poruku), a zatim se **nastavlja** izvršavanje preostalog koda u konstruktoru bez parametara (ispisuje se "Empty constructor called."). Zbog toga se poruke ispisuju u tom redosledu — prvo iz konstruktora sa parametrima, zatim iz konstruktora bez njih.

### 2.7 Preporuka: u konstruktoru direktno postavljati polja, ne pozivati settere

U konstruktoru sa mnogo parametara moglo bi se, umesto direktne dodele, pozvati odgovarajući setter (npr. `setNumber(number);`). Postoji podeljeno mišljenje o tome, ali **opšte pravilo** je: **u konstruktoru direktno dodeliti vrednost polju** (`this.polje = argument;`), a **ne pozivati settere ni druge metode** (osim eventualno drugog konstruktora preko `this(...)`).

Razlog će postati jasniji kada se u narednim lekcijama obradi **nasleđivanje** — u određenim situacijama kôd unutar settera možda **neće biti izvršen** kako se očekuje. Direktna dodela polju garantuje da će vrednost uvek biti postavljena, bez obzira na dodatne okolnosti koje nasleđivanje može uneti.

### 2.8 Generisanje konstruktora u IntelliJ-u

Kao i za gettere i settere, IntelliJ nudi generisanje konstruktora: **Code → Generate → Constructor**, zatim izbor polja koja treba da budu parametri. Ako se izabere samo deo polja (npr. tri od pet), IntelliJ generiše konstruktor koji direktno postavlja **samo** izabrana polja, **bez** ulančavanja — ako je ulančavanje potrebno, mora se dodati ručno.

### 2.9 Kombinovanje default vrednosti i ulančavanja

Konstruktor sa manje parametara može pozivati konstruktor sa više parametara, prosleđujući **podrazumevane (hardkodovane) vrednosti** za parametre koje sam ne prima:

```java
public Account(String customerName, String email, String phone) {
    this("99999", 100.55, customerName, email, phone);
}
```

Ovaj konstruktor prima samo ime, email i telefon, a za broj računa i početno stanje koristi fiksne podrazumevane vrednosti, delegirajući celokupnu inicijalizaciju **glavnom** konstruktoru sa pet parametara. Ovakav pristup — jedan "glavni" konstruktor koji zaista postavlja sva polja, a ostali ga pozivaju sa podrazumevanim vrednostima — sprečava duplikaciju inicijalizacionog koda.

### 2.10 Izazov: klasa Customer sa tri ulančana konstruktora

**Zadatak:** napraviti klasu `Customer` sa poljima za ime, kreditni limit i email; dodati samo gettere (bez settera); napraviti tri konstruktora — jedan sa sva tri parametra (direktna dodela poljima), jedan bez parametara koji ulančavanjem poziva drugi konstruktor sa literalnim vrednostima, i jedan sa samo imenom i emailom, koji takođe ulančavanjem poziva neki drugi konstruktor.

```java
public class Customer {
    private String name;
    private double creditLimit;
    private String email;

    public Customer(String name, double creditLimit, String email) {
        this.name = name;
        this.creditLimit = creditLimit;
        this.email = email;
    }

    public Customer(String name, String email) {
        this(name, 1000, email); // podrazumevani kreditni limit
    }

    public Customer() {
        this("nobody", "nobody@nowhere.com"); // ulancava konstruktor sa dva parametra
    }

    public String getName() { return name; }
    public double getCreditLimit() { return creditLimit; }
    public String getEmail() { return email; }
}
```

Konstruktor bez parametara ovde poziva konstruktor sa **dva** parametra (ne direktno onaj sa tri), koji zatim sam poziva konstruktor sa tri parametra. Ovo je namerno: ako se podrazumevani kreditni limit (1000) ikada promeni, dovoljno je izmeniti ga na **jednom mestu** — u konstruktoru sa dva parametra — umesto da se ponavlja i u konstruktoru bez parametara.

**Napomena o podrazumevanom konstruktoru:** pošto je u klasi `Customer` eksplicitno definisan konstruktor sa tri parametra, `new Customer()` bi bez eksplicitno napisanog no-args konstruktora izazvalo grešku kompajliranja — Java ga ne bi automatski kreirala. Zato je no-args konstruktor u primeru iznad napisan ručno.

Testiranje sva tri konstruktora:

```java
Customer customer = new Customer("Tim", 1000, "tim@email.com");
Customer secondCustomer = new Customer();               // koristi lancane podrazumevane vrednosti
Customer thirdCustomer = new Customer("Joe", "joe@email.com"); // koristi podrazumevani kreditni limit 1000

System.out.println(customer.getName() + " " + customer.getCreditLimit() + " " + customer.getEmail());
System.out.println(secondCustomer.getName() + " " + secondCustomer.getCreditLimit() + " " + secondCustomer.getEmail());
System.out.println(thirdCustomer.getName() + " " + thirdCustomer.getCreditLimit() + " " + thirdCustomer.getEmail());
```

Ispisi: `Tim 1000.0 tim@email.com`, `nobody 1000.0 nobody@nowhere.com` i `Joe 1000.0 joe@email.com` — sva tri objekta ispravno dobijaju vrednosti, bez ikakve duplikacije inicijalizacione logike.

---

## 3. Kodni primeri

### 3.1 Eksplicitan konstruktor bez parametara

```java
public class Account {
    public Account() {
        System.out.println("Empty constructor called.");
    }
}
```

### 3.2 Konstruktor sa parametrima i this.polje

```java
public class Account {
    private String number;
    private double balance;

    public Account(String number, double balance) {
        this.number = number;
        this.balance = balance;
    }
}
```

### 3.3 Ulančavanje konstruktora sa this(...)

```java
public Account() {
    this("56789", 2.50, "Default Name", "Default Address", "Default Phone");
    System.out.println("Empty constructor called.");
}
```

### 3.4 Greška: this(...) nije prva naredba

```java
public Account() {
    // System.out.println("Pocinjemo...");
    // this("56789", 2.50, "Default Name", "Default Address", "Default Phone");
    // GRESKA: call to this must be first statement in constructor body

    this("56789", 2.50, "Default Name", "Default Address", "Default Phone"); // ISPRAVNO - prva naredba
    System.out.println("Pocinjemo...");
}
```

### 3.5 Kompletan Java program (klasa Customer sa tri konstruktora)

```java
// Fajl: Customer.java
public class Customer {
    private String name;
    private double creditLimit;
    private String email;

    public Customer(String name, double creditLimit, String email) {
        this.name = name;
        this.creditLimit = creditLimit;
        this.email = email;
    }

    public Customer(String name, String email) {
        this(name, 1000, email);
    }

    public Customer() {
        this("nobody", "nobody@nowhere.com");
    }

    public String getName() { return name; }
    public double getCreditLimit() { return creditLimit; }
    public String getEmail() { return email; }
}

// Fajl: Main.java
public class Main {
    public static void main(String[] args) {
        Customer customer = new Customer("Tim", 1000, "tim@email.com");
        Customer secondCustomer = new Customer();
        Customer thirdCustomer = new Customer("Joe", "joe@email.com");

        System.out.println(customer.getName() + " " + customer.getCreditLimit() + " " + customer.getEmail());
        System.out.println(secondCustomer.getName() + " " + secondCustomer.getCreditLimit() + " " + secondCustomer.getEmail());
        System.out.println(thirdCustomer.getName() + " " + thirdCustomer.getCreditLimit() + " " + thirdCustomer.getEmail());
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **konstruktore** — posebne kod blokove koji se izvršavaju pri kreiranju objekta, sa istim imenom kao klasa i bez povratnog tipa. Naučili smo da Java implicitno kreira **podrazumevani (default) konstruktor** samo ako klasa nema **nijedan** sopstveni konstruktor, i da se konstruktori sa parametrima koriste za inicijalizaciju polja odjednom, umesto pozivanja niza settera. Videli smo **preopterećenje konstruktora** (više konstruktora sa različitim parametrima) i **ulančavanje konstruktora** pomoću `this(...)`, uz strogo pravilo da taj poziv mora biti **prva naredba** u konstruktoru. Naučili smo preporuku da se u konstruktoru poljima dodeljuju vrednosti **direktno**, a ne preko settera, i primenili sve to na izazovu sa klasom `Customer`, gde tri ulančana konstruktora dele zajedničku podrazumevanu vrednost definisanu na jednom mestu.

### Zadatak za samostalan rad

1. Napravite klasu `Book` sa poljima `title`, `author` i `pages`, i jednim konstruktorom koji prima sva tri parametra i direktno ih dodeljuje poljima.
2. Dodajte drugi konstruktor koji prima samo `title` i ulančavanjem (`this(...)`) poziva prvi, sa podrazumevanim autorom `"Unknown"` i `0` stranica.
3. Dodajte i konstruktor bez parametara koji ulančavanjem poziva konstruktor iz zadatka 2, sa podrazumevanim naslovom `"Untitled"`.
4. Namerno napišite konstruktor u kome `this(...)` nije prva naredba, zabeležite (kao komentar) tačnu grešku koju IntelliJ prijavljuje, a zatim je ispravite.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto se preporučuje direktna dodela polju (`this.polje = argument;`) unutar konstruktora, umesto pozivanja odgovarajućeg settera.

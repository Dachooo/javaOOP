# Lekcija 23: Setteri, ključna reč this, validacija i nula naspram neinicijalizovane promenljive

## Cilj lekcije

Nakon ove lekcije, znaćete da napišete **setter** metode za privatna polja klase, razumećete zašto je potrebna ključna reč **`this`** kada se ime parametra poklapa sa imenom polja, moći ćete da dodate **validaciju** unutar settera radi zaštite ispravnosti podataka objekta, i razumećete razliku između **neinicijalizovane promenljive** (greška pri kompajliranju) i promenljive sa vrednošću **`null`** (greška tek u toku izvršavanja — `NullPointerException`).

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Setter** | Metoda koja postavlja (menja) vrednost privatnog polja klase; obično se zove `setIme`. |
| **this** | Posebna ključna reč koja upućuje na trenutni objekat (instancu); koristi se za razlikovanje polja od parametra istog imena. |
| **Validacija u setteru** | Provera unutar setter metode koja obezbeđuje da polje dobije samo ispravnu vrednost. |
| **Neinicijalizovana promenljiva** | Promenljiva kojoj nikada nije dodeljena vrednost — korišćenje izaziva **grešku kompajlera**. |
| **null referenca** | Promenljiva kojoj je dodeljen `null` — kod kompajlira, ali pozivanje metode na njoj izaziva **NullPointerException** u toku izvršavanja. |
| **Kod duplikacija pri kreiranju objekata** | Ponavljanje poziva settera za svako polje pri kreiranju svakog novog objekta — problem koji će rešiti konstruktori u narednoj lekciji. |

---

## 2. Detaljno objašnjenje

### 2.1 Zašto su setteri potrebni

U prethodnoj lekciji smo napravili gettere za čitanje privatnih polja klase `Car`. Pošto su polja `private`, spoljašnji kod ne može da ih **menja** direktno — za to su potrebne **setter** metode. Setter je `void` (ne vraća ništa, samo postavlja vrednost), a ime parametra obično je isto kao ime polja koje se postavlja.

### 2.2 Problem: parametar istog imena kao polje

Naivan pokušaj settera:

```java
public void setMake(String make) {
    make = make; // GRESKA U LOGICI
}
```

IntelliJ ovde prijavljuje tri upozorenja: "reassigned parameter", "the value make assigned to make is never used" i "variable make is assigned to itself". Problem je što postoje **dve različite promenljive** sa istim imenom `make`: **polje** klase (`private String make;`) i **parametar** metode. Naredba `make = make;` samo dodeljuje parametar samom sebi — polje se nikada ne menja.

### 2.3 Ključna reč this

**`this`** je posebna ključna reč koja upućuje na **trenutni objekat** (instancu na kojoj je metoda pozvana). Preko `this` možemo jasno naznačiti da mislimo na **polje klase**, a ne na parametar:

```java
public void setMake(String make) {
    this.make = make; // this.make je polje, make (bez this) je parametar
}
```

Sada nema upozorenja: `this.make` je polje definisano u klasi, a `make` (bez prefiksa) je parametar prosleđen metodi. Ovo je standardni obrazac za pisanje settera u Javi.

### 2.4 Generisanje settera u IntelliJ-u

Kao i sa getterima, IntelliJ može automatski generisati settere: **Code → Generate → Setter**, zatim izbor željenih polja. Za klasu `Car` sa poljima `make`, `model`, `color`, `doors` i `convertible` ovako se dobijaju metode `setMake`, `setModel`, `setColor`, `setDoors` i `setConvertible`.

```java
public void setModel(String model) {
    this.model = model;
}

public void setColor(String color) {
    this.color = color;
}

public void setDoors(int doors) {
    this.doors = doors;
}

public void setConvertible(boolean convertible) {
    this.convertible = convertible;
}
```

Korišćenje settera iz `main` metode:

```java
Car car = new Car();
car.setMake("Porsche");
car.setModel("Carrera");
car.setDoors(2);
car.setConvertible(true);
car.setColor("black");
car.describeCar();
```

### 2.5 Validacija podataka unutar settera

Prava vrednost settera je što unutar njih možemo dodati **validaciju** — proveru koja garantuje da polje dobije samo ispravnu vrednost. Na primer, `setMake` može prihvatati samo tri poznata proizvođača, a sve ostalo (ili `null`) svesti na posebnu vrednost:

```java
public void setMake(String make) {
    if (make == null) {
        this.make = "Unknown";
        return;
    }
    String lowercaseMake = make.toLowerCase();
    switch (lowercaseMake) {
        case "holden", "porsche", "tesla" -> this.make = make;
        default -> this.make = "Unsupported";
    }
}
```

Ako se pozove `car.setMake("Maserati")`, polje `make` postaje `"Unsupported"`, umesto `"Maserati"`, jer taj proizvođač nije na listi podržanih. Ovo je suština **enkapsulacije**: pošto spoljašnji kod ne može direktno da postavi polje, sva pravila validacije mogu se centralizovati unutar klase, čime se garantuje da objekat nikada nema neispravno stanje.

### 2.6 Neinicijalizovana promenljiva naspram null reference

Postoje dva različita problema koja mogu nastati kada objekat nije pravilno kreiran:

**Neinicijalizovana promenljiva** — ako se promenljivoj tipa `Car` nikada ne dodeli vrednost, IntelliJ prijavljuje **grešku pri kompajliranju**:

```java
Car car; // deklarisana, ali nije inicijalizovana
car.setMake("Porsche"); // GRESKA: variable car might not have been initialized
```

**Promenljiva sa vrednošću null** — ako se promenljivoj eksplicitno dodeli `null`, kod se **kompajlira bez greške**, ali poziv metode na njoj izaziva **`NullPointerException`** tek kada se program pokrene:

```java
Car car = null;
car.setMake("Porsche"); // NullPointerException: Cannot invoke "Car.setMake(String)" because "car" is null
```

**Ključna razlika:** neinicijalizovana promenljiva se otkriva **pre pokretanja** (kompajler je odbija), dok `null` referenca prolazi kompajliranje, ali se greška javlja **u toku izvršavanja**, kada se pokuša pozvati metoda ili pristupiti polju na njoj. Rešenje za oba slučaja je isto: uvek koristiti `new` sa imenom klase da bi se zaista kreirao objekat:

```java
Car car = new Car(); // ispravno - car sada upucuje na stvaran objekat
```

### 2.7 Više objekata iz iste klase

Iz jedne klase mogu se kreirati proizvoljno mnogo objekata, svaki sa svojim sopstvenim stanjem:

```java
Car car = new Car();
car.setMake("Porsche");
car.setModel("Carrera");

Car targa = new Car();
targa.setMake("Porsche");
targa.setModel("Targa");
targa.setColor("red");
targa.setConvertible(false);
```

Ovaj pristup, ipak, postaje **glomazan i pun ponavljanja** kada klasa ima mnogo polja — svaki novi objekat zahteva poziv settera za svako polje posebno. Ovaj problem će rešiti **konstruktori**, tema naredne lekcije.

### 2.8 Izazov: klasa Account (bankovni račun)

**Zadatak:** napraviti klasu `Account` sa poljima za broj računa, stanje (balans), ime, email i telefon klijenta; dodati gettere i settere za sva polja; dodati metode `depositFunds` (uplata) i `withdrawFunds` (isplata), pri čemu isplata ne može oboriti stanje ispod nule.

```java
public class Account {
    private String number;
    private double balance;
    private String customerName;
    private String customerEmail;
    private String customerPhone;

    public void depositFunds(double depositAmount) {
        balance += depositAmount;
        System.out.println("Deposited " + depositAmount + ". Balance is now " + this.balance);
    }

    public void withdrawFunds(double withdrawalAmount) {
        if (balance - withdrawalAmount < 0) {
            System.out.println("Insufficient funds. Balance is " + balance);
        } else {
            balance -= withdrawalAmount;
            System.out.println("Withdrew " + withdrawalAmount + ". Balance is now " + balance);
        }
    }

    // getteri i setteri (generisani preko Code -> Generate -> Getter and Setter)
    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public double getBalance() { return balance; }
    public void setBalance(double balance) { this.balance = balance; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getCustomerEmail() { return customerEmail; }
    public void setCustomerEmail(String customerEmail) { this.customerEmail = customerEmail; }

    public String getCustomerPhone() { return customerPhone; }
    public void setCustomerPhone(String customerPhone) { this.customerPhone = customerPhone; }
}
```

U metodi `depositFunds` korišćenje `this.balance` je opciono — pošto ne postoji parametar ili lokalna promenljiva sa istim imenom, `balance` bez `this` je jednoznačno polje. Upotreba `this` je stvar stila; važno je biti konzistentan u celom projektu.

U metodi `withdrawFunds` uslov `balance - withdrawalAmount < 0` sprečava da stanje računa ode u minus — ako bi isplata to izazvala, ispisuje se poruka o nedovoljnim sredstvima, a stanje se ne menja.

### 2.9 Testiranje klase Account

```java
Account bobsAccount = new Account();

bobsAccount.withdrawFunds(100.0); // Insufficient funds. Balance is 0.0

bobsAccount.depositFunds(250.0);  // Deposited 250.0. Balance is now 250.0
bobsAccount.withdrawFunds(50.0);  // Withdrew 50.0. Balance is now 200.0
bobsAccount.withdrawFunds(200.0); // Withdrew 200.0. Balance is now 0.0
```

Kada je `balance` polje tipa `double`, novi objekat po Java-inom podrazumevanom ponašanju počinje sa `0.0`, pa je prva isplata odbijena (nedovoljno sredstava), sve dok se ne izvrši uplata. Nakon podešavanja preostalih polja pomoću settera:

```java
bobsAccount.setNumber("12345");
bobsAccount.setBalance(1000.0);
bobsAccount.setCustomerName("Bob Brown");
bobsAccount.setCustomerEmail("bob@example.com");
bobsAccount.setCustomerPhone("(087) 123-4567");
```

Ako je klasa sa mnogo polja, ovakvo pojedinačno pozivanje settera za svako polje pri svakom kreiranju objekta postaje zamorno i ponavljajuće — upravo taj problem rešavaju **konstruktori**, koji su tema sledeće lekcije.

---

## 3. Kodni primeri

### 3.1 Setter sa ključnom rečju this

```java
public class Car {
    private String make;

    public void setMake(String make) {
        this.make = make;
    }

    public String getMake() {
        return make;
    }
}
```

### 3.2 Setter sa validacijom

```java
public void setMake(String make) {
    if (make == null) {
        this.make = "Unknown";
        return;
    }
    String lowercaseMake = make.toLowerCase();
    switch (lowercaseMake) {
        case "holden", "porsche", "tesla" -> this.make = make;
        default -> this.make = "Unsupported";
    }
}
```

### 3.3 Neinicijalizovana promenljiva naspram null

```java
// Car car;
// car.setMake("Porsche"); // GRESKA KOMPAJLERA: might not have been initialized

Car car = null;
// car.setMake("Porsche"); // NullPointerException u toku izvrsavanja

Car realCar = new Car(); // ispravno
realCar.setMake("Porsche");
```

### 3.4 Kompletan Java program (klasa Account i test)

```java
// Fajl: Account.java
public class Account {
    private String number;
    private double balance;
    private String customerName;

    public void depositFunds(double depositAmount) {
        this.balance += depositAmount;
        System.out.println("Deposited " + depositAmount + ". Balance is now " + balance);
    }

    public void withdrawFunds(double withdrawalAmount) {
        if (balance - withdrawalAmount < 0) {
            System.out.println("Insufficient funds. Balance is " + balance);
        } else {
            balance -= withdrawalAmount;
            System.out.println("Withdrew " + withdrawalAmount + ". Balance is now " + balance);
        }
    }

    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public double getBalance() { return balance; }
    public void setBalance(double balance) { this.balance = balance; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }
}

// Fajl: Main.java
public class Main {
    public static void main(String[] args) {
        Account bobsAccount = new Account();
        bobsAccount.setNumber("12345");
        bobsAccount.setCustomerName("Bob Brown");

        bobsAccount.withdrawFunds(100.0); // Insufficient funds. Balance is 0.0
        bobsAccount.depositFunds(250.0);  // Deposited 250.0. Balance is now 250.0
        bobsAccount.withdrawFunds(50.0);  // Withdrew 50.0. Balance is now 200.0

        System.out.println(bobsAccount.getCustomerName() + "'s balance: " + bobsAccount.getBalance());
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo napisali **setter** metode koje omogućavaju kontrolisano postavljanje vrednosti privatnih polja klase. Naučili smo da je ključna reč **`this`** neophodna kada se ime parametra podudara sa imenom polja, kako bi se jasno razlikovalo na koju promenljivu se misli (`this.make` je polje, `make` je parametar). Videli smo da setteri omogućavaju **validaciju** — pravila koja garantuju da objekat nikada ne dobije neispravno stanje, što je suština enkapsulacije. Objasnili smo razliku između **neinicijalizovane promenljive** (greška pri kompajliranju) i promenljive sa **`null`** vrednošću (greška tek u toku izvršavanja, `NullPointerException`) — u oba slučaja rešenje je uvek koristiti `new` za pravo kreiranje objekta. Na kraju smo kroz izazov napravili klasu `Account` sa metodama `depositFunds` i `withdrawFunds`, gde druga metoda proverava da isplata ne obori stanje ispod nule, i primetili da pozivanje settera za svako polje pri svakom novom objektu postaje zamorno — problem koji će u narednoj lekciji rešiti konstruktori.

### Zadatak za samostalan rad

1. Napravite klasu `Book` sa privatnim poljima `title` i `pages`, dodajte gettere i settere koristeći `this`.
2. Dodajte validaciju u setter za `pages` tako da ne prihvata negativne vrednosti (u tom slučaju postaviti `0`).
3. Napišite kod koji demonstrira razliku između neinicijalizovane promenljive i promenljive sa vrednošću `null`, i zabeležite (kao komentar) tačnu grešku u oba slučaja.
4. Proširite klasu `Account` iz lekcije dodavanjem metode `transferFunds(Account destination, double amount)` koja isplaćuje sa jednog i uplaćuje na drugi račun, samo ako ima dovoljno sredstava.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto je pozivanje pojedinačnih settera za svaki objekat (kao u izazovu sa klasom `Account`) neefikasno kada klasa ima mnogo polja, i šta biste želeli da postoji da bi kreiranje objekta bilo jednostavnije.

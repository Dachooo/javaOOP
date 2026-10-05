# Lekcija 29: Izazov nasleđivanja — hijerarhija Worker/Employee

## Cilj lekcije

Nakon ove lekcije, umećete da projektujete i implementirate **višestepenu hijerarhiju klasa** (Worker → Employee → SalariedEmployee/HourlyEmployee), znaćete da koristite **`protected`** polje kako biste podklasama dali kontrolisanu fleksibilnost, naučićete metodu `String.substring()` za izdvajanje dela teksta, primenićete **statičko polje** za automatsko generisanje jedinstvenih ID brojeva, i razumećete kako Java, za svaki poziv metode na objektu, određuje **tačno koja** verzija (iz koje klase u hijerarhiji) će se izvršiti.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Bazna (super) klasa** | Najopštija klasa na vrhu hijerarhije — ovde `Worker`, koja definiše zajedničke osobine svih radnika. |
| **String.substring(start)** | Metoda koja vraća deo stringa počev od indeksa `start` do kraja; indeksi počinju od 0. |
| **Statičko polje kao generator ID-a** | Statičko polje koje se uvećava pri svakom kreiranju objekta, obezbeđujući jedinstven redni broj svakom novom objektu. |
| **Metoda specifična za podklasu** | Metoda koja postoji samo na jednoj grani hijerarhije (npr. `retire()` samo na `SalariedEmployee`), jer nema smisla za ostale. |
| **Razrešavanje metode (method resolution)** | Proces kojim Java, za dati objekat, pronalazi **najspecifičniju** definiciju pozvane metode, krećući od same klase objekta naviše kroz hijerarhiju. |

---

## 2. Detaljno objašnjenje

### 2.1 Planirana hijerarhija

Zadatak je projektovati hijerarhiju radnika: **`Worker`** (bazna klasa) → **`Employee`** (nasleđuje `Worker`) → **`SalariedEmployee`** i **`HourlyEmployee`** (obe nasleđuju `Employee`). Ovakvih zadataka obično ima više ispravnih rešenja — važno je razumeti principe, ne tačan raspored svakog polja.

### 2.2 Bazna klasa Worker

`Worker` sadrži osobine zajedničke **svim** vrstama radnika: ime, datum rođenja, i datum prestanka angažovanja.

```java
public class Worker {
    private String name;
    private String birthDate;
    protected String endDate;

    public Worker() {
    }

    public Worker(String name, String birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    // ... metode u narednim sekcijama ...
}
```

Polje `endDate` je namerno **`protected`**, a ne `private` — očekuje se da će ga postavljati metoda definisana na samoj `Worker` klasi ili, potencijalno, neka podklasa koja želi da doda dodatnu logiku. `protected` daje tu fleksibilnost, dok ostaje zaštićeno od potpuno nepovezanog koda.

Dodat je i **konstruktor bez argumenata**, iako postoji i konstruktor sa dva parametra — ovo je urađeno namerno, kako bi podklase imale veći izbor pri pozivanju `super(...)`, a i da se izbegne greška "no default constructor available" iz ranije lekcije.

### 2.3 Metoda getAge() i String.substring()

Metoda `getAge()` izračunava starost na osnovu tekuće godine i godine rođenja, izdvojene iz stringa formata `MM/DD/YYYY`:

```java
public int getAge() {
    int currentYear = 2025;
    int birthYear = Integer.parseInt(birthDate.substring(6));
    return currentYear - birthYear;
}
```

**`substring(start)`** je metoda klase `String` koja vraća deo teksta počev od pozicije `start` (indeksi počinju od **0**) do kraja stringa. Pošto je format `MM/DD/YYYY`, godina počinje na poziciji **6** (nakon "MM/DD/"). Dobijeni deo teksta ("YYYY") zatim se pretvara u broj pomoću `Integer.parseInt`. Klasa `String` ima više od 60 metoda — `substring` je samo jedna od njih; detaljnija obrada najčešćih metoda `String`-a sledi kasnije u kursu.

### 2.4 Metode collectPay() i terminate()

```java
public double collectPay() {
    return 0.0;
}

public void terminate(String endDate) {
    this.endDate = endDate;
}
```

`collectPay()` na `Worker` nivou vraća `0.0` — ovo je **namerno generička** implementacija, koju svaka konkretna podklasa (plaćena po platu ili po satu) treba da **prevaziđe** sopstvenom logikom obračuna. `terminate(String)` postavlja datum prestanka angažovanja; iako liči na setter, nazvana je po poslovnoj logici koju predstavlja ("okončaj angažovanje"), što je jasnije čitaocu koda, i ostavlja prostor da je podklase prevaziđu dodatnom logikom specifičnom za tip radnika.

### 2.5 Podklasa Employee

```java
public class Employee extends Worker {
    private static int employeeNumber = 1;
    private long employeeId;
    private String hireDate;

    public Employee(String name, String birthDate, String hireDate) {
        super(name, birthDate);
        this.employeeId = Employee.employeeNumber++;
        this.hireDate = hireDate;
    }

    @Override
    public String toString() {
        return "Employee{employeeId=" + employeeId + ", hireDate='" + hireDate + "'} " + super.toString();
    }
}
```

### 2.6 Statičko polje kao generator ID-a

Umesto da se ID zaposlenog prosleđuje kao argument (što bi zahtevalo da pozivalac ručno vodi računa o jedinstvenosti), koristi se **statičko polje** `employeeNumber`, deljeno između **svih** instanci klase `Employee`:

```java
this.employeeId = Employee.employeeNumber++;
```

Svaki put kada se kreira novi `Employee`, njegov konstruktor uzima **trenutnu** vrednost statičkog polja kao svoj ID, a zatim ga (postfiks inkrementom) uvećava za sledeći objekat. Prvi zaposleni dobija ID `1`, drugi `2`, i tako dalje — bez ikakve dodatne koordinacije pri pozivanju konstruktora. Pristupanje statičkom polju preko **imena klase** (`Employee.employeeNumber`) čini jasnim da vrednost pripada klasi, a ne pojedinačnom objektu.

### 2.7 Podklasa SalariedEmployee

```java
public class SalariedEmployee extends Employee {
    private double annualSalary;
    private boolean isRetired;

    public SalariedEmployee(String name, String birthDate, String hireDate, double annualSalary) {
        super(name, birthDate, hireDate);
        this.annualSalary = annualSalary;
    }

    @Override
    public double collectPay() {
        double paycheck = annualSalary / 26;
        return (int) (isRetired ? paycheck * 0.9 : paycheck);
    }

    public void retire() {
        terminate("12/12/2025");
        isRetired = true;
    }
}
```

Napomene:

- `collectPay()` je **prevaziđena** sa logikom specifičnom za plaćene zaposlene: godišnja plata se deli na 26 isplata (svake druge nedelje). Ternarni operator ograničava penziju na 90% pune isplate, ako je zaposleni penzionisan.
- `isRetired` i `annualSalary` **nisu** uključeni u `toString()` iz prethodne klase — ovo je namerna odluka radi zaštite osetljivih podataka (plata se ne želi slučajno otkriti u ispisu).
- Metoda **`retire()`** postoji **samo** na `SalariedEmployee` — nema smisla za druge vrste radnika. Ona poziva `terminate(...)`, koja je definisana na **`Worker`** (dva nivoa iznad) — pošto `Employee` nije prevazišla `terminate`, poziv iz `SalariedEmployee` direktno koristi `Worker`-ovu implementaciju. Ovo pokazuje da metode nadklase ostaju dostupne kroz celu hijerarhiju, sve dok ih neka međuklasa ne prevaziđe.

### 2.8 Podklasa HourlyEmployee

```java
public class HourlyEmployee extends Employee {
    private double hourlyPayRate;

    public HourlyEmployee(String name, String birthDate, String hireDate, double hourlyPayRate) {
        super(name, birthDate, hireDate);
        this.hourlyPayRate = hourlyPayRate;
    }

    @Override
    public double collectPay() {
        return 40 * hourlyPayRate;
    }

    public double getDoublePay() {
        return 2 * collectPay();
    }
}
```

`collectPay()` ovde koristi potpuno drugačiju formulu (40 sati nedeljno puta satnica). Metoda `getDoublePay()` postoji **samo** na `HourlyEmployee` i poziva `collectPay()` **bez** ikakvog kvalifikatora (`this.` je implicitno) — ovaj poziv izvršava `collectPay()` definisan **na ovoj istoj klasi** (koja ga je prevazišla), a ne onaj sa `Worker`-a.

### 2.9 Kako Java određuje koja se metoda izvršava

Kada se na objektu pozove metoda, Java traži **najspecifičniju** definiciju, počev od **stvarne** klase objekta i krećući se naviše kroz hijerarhiju sve dok ne nađe prvu definiciju:

| Poziv na objektu `SalariedEmployee`/`HourlyEmployee` | Klasa čija se implementacija izvršava | Zašto |
|---|---|---|
| `getAge()` | `Worker` | Nijedna podklasa je ne prevazilazi. |
| `toString()` | `Employee` | `Worker` je prevazišla (od `Object`), `Employee` je dalje prevazišla (i proširila), nijedna niža klasa je ne dira. |
| `collectPay()` (na `SalariedEmployee`) | `SalariedEmployee` | Najspecifičnija prevaziđena verzija za tu klasu. |
| `collectPay()` (na `HourlyEmployee`) | `HourlyEmployee` | Najspecifičnija prevaziđena verzija za tu klasu. |
| `retire()` | `SalariedEmployee` | Postoji **samo** tu — nema je ni u `Worker`, ni u `Employee`, ni u `HourlyEmployee`. |
| `getDoublePay()` | `HourlyEmployee` | Postoji **samo** tu, nema smisla za `SalariedEmployee`. |

Ovaj mehanizam — gde se tačno **jedan** poziv (`object.metoda()`) ponaša različito u zavisnosti od toga koja je klasa zapravo kreirala objekat — temelj je **polimorfizma**, koncepta uvedenog u ranijoj lekciji.

---

## 3. Kodni primeri

### 3.1 String.substring() za izdvajanje godine

```java
String birthDate = "11/11/1985";
int birthYear = Integer.parseInt(birthDate.substring(6)); // "1985" -> 1985
```

### 3.2 Statičko polje kao generator ID-a

```java
private static int employeeNumber = 1;
private long employeeId;

public Employee(String name, String birthDate, String hireDate) {
    super(name, birthDate);
    this.employeeId = Employee.employeeNumber++;
    this.hireDate = hireDate;
}
```

### 3.3 Prevazilaženje collectPay() na dva različita načina

```java
// SalariedEmployee:
@Override
public double collectPay() {
    double paycheck = annualSalary / 26;
    return (int) (isRetired ? paycheck * 0.9 : paycheck);
}

// HourlyEmployee:
@Override
public double collectPay() {
    return 40 * hourlyPayRate;
}
```

### 3.4 Poziv metode predaka kroz dva nivoa (retire -> terminate)

```java
public void retire() {
    terminate("12/12/2025"); // metoda definisana na Worker, dva nivoa iznad SalariedEmployee
    isRetired = true;
}
```

### 3.5 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        SalariedEmployee joe = new SalariedEmployee("Joe", "11/11/1990", "03/01/2020", 35000);
        System.out.println(joe);
        System.out.println("Joe's age: " + joe.getAge());
        System.out.println("Joe's paycheck: " + joe.collectPay());

        joe.retire();
        System.out.println("Joe's pension pay: " + joe.collectPay());

        HourlyEmployee mary = new HourlyEmployee("Mary", "05/05/1970", "03/03/2021", 15);
        System.out.println(mary);
        System.out.println("Mary's weekly pay: " + mary.collectPay());
        System.out.println("Mary's double-time pay: " + mary.getDoublePay());
    }
}

class Worker {
    private String name;
    private String birthDate;
    protected String endDate;

    public Worker() {
    }

    public Worker(String name, String birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }

    public int getAge() {
        int currentYear = 2025;
        int birthYear = Integer.parseInt(birthDate.substring(6));
        return currentYear - birthYear;
    }

    public double collectPay() {
        return 0.0;
    }

    public void terminate(String endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "Worker{name='" + name + "', birthDate='" + birthDate + "', endDate='" + endDate + "'}";
    }
}

class Employee extends Worker {
    private static int employeeNumber = 1;
    private long employeeId;
    private String hireDate;

    public Employee(String name, String birthDate, String hireDate) {
        super(name, birthDate);
        this.employeeId = Employee.employeeNumber++;
        this.hireDate = hireDate;
    }

    @Override
    public String toString() {
        return "Employee{employeeId=" + employeeId + ", hireDate='" + hireDate + "'} " + super.toString();
    }
}

class SalariedEmployee extends Employee {
    private double annualSalary;
    private boolean isRetired;

    public SalariedEmployee(String name, String birthDate, String hireDate, double annualSalary) {
        super(name, birthDate, hireDate);
        this.annualSalary = annualSalary;
    }

    @Override
    public double collectPay() {
        double paycheck = annualSalary / 26;
        return (int) (isRetired ? paycheck * 0.9 : paycheck);
    }

    public void retire() {
        terminate("12/12/2025");
        isRetired = true;
    }
}

class HourlyEmployee extends Employee {
    private double hourlyPayRate;

    public HourlyEmployee(String name, String birthDate, String hireDate, double hourlyPayRate) {
        super(name, birthDate, hireDate);
        this.hourlyPayRate = hourlyPayRate;
    }

    @Override
    public double collectPay() {
        return 40 * hourlyPayRate;
    }

    public double getDoublePay() {
        return 2 * collectPay();
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo kroz izazov projektovali i izgradili **četvoronivosku hijerarhiju** `Worker → Employee → SalariedEmployee`/`HourlyEmployee`. Upotrebili smo **`protected`** polje (`endDate`) kako bismo dali kontrolisanu fleksibilnost podklasama, metodu **`String.substring(start)`** za izdvajanje dela teksta, i **statičko polje** kao generator jedinstvenih ID brojeva, deljeno među svim instancama `Employee`. Videli smo kako se `collectPay()` prevazilazi **različito** u dve sestrinske podklase, kako metoda definisana duboko u hijerarhiji (`terminate` na `Worker`) ostaje dostupna i pozivu sa dva nivoa niže (`retire` na `SalariedEmployee`), i kako metode specifične za jednu granu (`retire`, `getDoublePay`) jednostavno ne postoje na drugoj. Na kraju smo sistematizovali kako Java **razrešava** koji će se tačno metod izvršiti za dati poziv — tražeći najspecifičniju definiciju počev od stvarne klase objekta naviše kroz hijerarhiju — što je praktičan, konkretan primer polimorfizma u akciji.

### Zadatak za samostalan rad

1. Dodajte klasu `Contractor extends Worker` sa poljem `contractRate` i prevaziđenom metodom `collectPay()` koja vraća fiksnu ugovorenu sumu.
2. Dodajte `Intern extends Employee` sa poljem `stipend` i prevaziđenom metodom `collectPay()` koja vraća tu vrednost.
3. Kreirajte po jedan objekat svake klase iz hijerarhije (`Worker`, `Employee`, `SalariedEmployee`, `HourlyEmployee`) i za svaki ispišite rezultat poziva `collectPay()`, zabeležujući (kao komentar) koja klasa tačno izvršava poziv.
4. Dodajte još jedno statičko polje za brojanje **ukupnog broja** kreiranih `Employee` objekata (bilo koje podklase), i ispišite ga nakon kreiranja nekoliko zaposlenih.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto `getDoublePay()` na `HourlyEmployee`, koji interno poziva `collectPay()`, automatski koristi **HourlyEmployee-ovu** verziju te metode, a ne `Worker`-ovu, iako poziv ne sadrži nikakav eksplicitan kvalifikator poput `this.` ili imena klase.

# Lekcija 28: Klasa Object — koren hijerarhije nasleđivanja

## Cilj lekcije

Nakon ove lekcije, znaćete da **svaka** Java klasa implicitno nasleđuje od ugrađene klase **`Object`** (iz paketa `java.lang`), razumećete odakle dolazi podrazumevano ponašanje metode **`toString()`** pre nego što se prevaziđe, znaćete kako da pročitate njen podrazumevani ispis (ime klase + hash kod), i razumećete kako prevazilaženje funkcioniše kroz **višestepenu hijerarhiju nasleđivanja** (više od dva nivoa), uključujući šta tačno poziva `super.toString()` kada je metoda već prevaziđena negde na putu nagore.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **java.lang.Object** | Ugrađena Java klasa koja je **koren** cele hijerarhije nasleđivanja — svaka klasa je, direktno ili indirektno, njena podklasa. |
| **Implicitno nasleđivanje** | Klasa koja ne koristi `extends` i dalje automatski nasleđuje od `Object`, bez potrebe da se to eksplicitno napiše. |
| **Hash kod (hashCode)** | Celobrojna vrednost, jedinstvena (u okviru izvršavanja) za svaku instancu; prikazuje se u heksadecimalnom zapisu u podrazumevanom `toString()` ispisu. |
| **Podrazumevani toString()** | Implementacija nasleđena od `Object`, koja ispisuje ime klase, znak `@` i hash kod objekta. |
| **Višestepeno nasleđivanje** | Lanac klasa A → B → C, gde C nasleđuje od B, a B od A (pa C indirektno nasleđuje i od A, pa i od `Object`). |
| **Jedinstveno nasleđivanje (single inheritance)** | Pravilo da `extends` klauzula sme navesti samo **jednu** nadklasu. |

---

## 2. Detaljno objašnjenje

### 2.1 Object — koren svih klasa

Java dokumentacija kaže: *"Klasa Object je koren hijerarhije klasa. Svaka klasa ima Object kao nadklasu."* Ovo znači da **svaka** klasa koju napravimo — čak i ona koja nikada ne koristi `extends` — **implicitno nasleđuje** od ugrađene klase **`Object`**, iz paketa `java.lang`.

```java
public class Main {
    // implicitno je isto sto i: public class Main extends Object
}
```

Pisanje `extends Object` (ili čak `extends java.lang.Object`) je potpuno validno, ali **suvišno** — Java to uvek radi automatski, ako klasa ne nasleđuje neku drugu klasu. (Paket `java.lang` je, kao i sam `Object`, automatski dostupan svakoj klasi, bez potrebe za `import` naredbom.)

### 2.2 Šta nam Object daje "besplatno"

Pošto svaka klasa nasleđuje od `Object`, svaka klasa automatski dobija **sve metode** koje `Object` definiše — među njima su `toString()`, `equals()`, `hashCode()` i druge, koje ćemo detaljnije obrađivati kasnije u kursu. IntelliJ-eva opcija **Code → Override Methods** prikazuje upravo ove metode kao dostupne za prevazilaženje na **svakoj** klasi, čak i kada klasa ne nasleđuje ništa eksplicitno — jer, u stvarnosti, uvek nasleđuje `Object`.

### 2.3 Podrazumevani toString() pre prevazilaženja

Ako klasa **ne prevaziđe** `toString()`, poziv te metode koristi implementaciju iz `Object`, koja ispisuje **ime klase**, znak `@`, i **hash kod** objekta u heksadecimalnom zapisu:

```java
class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

```java
Student max = new Student("Max", 21);
System.out.println(max.toString()); // npr. Student@65ab7765
```

**Hash kod** je ceo broj koji je (u okviru trenutnog izvršavanja programa) jedinstven za svaku instancu — koristan je za utvrđivanje da li više referenci upućuje na **isti** objekat (slično ideji "adrese" iz lekcije o referencama). Ovaj ispis retko ima praktičnu vrednost za čitaoca, pa se `toString()` skoro uvek prevazilazi.

### 2.4 Prevazilaženje toString() — tri varijante u praksi

Kada se počne kucati `public to` u IntelliJ-u unutar klase, alat nudi gotove opcije za `toString()`. Prva opcija generiše redundantan kod:

```java
@Override
public String toString() {
    return super.toString(); // identicno ponasanje kao bez override-a
}
```

Ovo se ponaša **potpuno isto** kao da metoda nije ni prevaziđena — samo eksplicitno poziva ono što bi se dogodilo implicitno.

Druga opcija (generisanje preko čarobnjaka, uz izbor polja) daje čitljiviji, ali i dalje generički ispis:

```java
@Override
public String toString() {
    return "Student{" +
        "name='" + name + '\'' +
        ", age=" + age +
        '}';
}
```

Najčešće, međutim, želimo potpuno sopstveni format, pa se generisani kod jednostavno zameni:

```java
@Override
public String toString() {
    return name + " is " + age;
}
```

```java
System.out.println(max); // Max is 21
```

Kao što je ranije pomenuto, `System.out.println(objekat)` **implicitno** poziva `toString()` na prosleđenom objektu — nije potrebno eksplicitno pisati `max.toString()`.

### 2.5 Višestepeno nasleđivanje

Nasleđivanje se može "ulančati" kroz više nivoa. Na primer, `PrimarySchoolStudent` može naslediti od `Student` (koji je već implicitno naslednik `Object`-a):

```java
class PrimarySchoolStudent extends Student {
    private String parentName;

    public PrimarySchoolStudent(String name, int age, String parentName) {
        super(name, age); // poziva Student-ov konstruktor
        this.parentName = parentName;
    }
}
```

Hijerarhija je sada: `Object` → `Student` → `PrimarySchoolStudent`. Klasa `PrimarySchoolStudent` nasleđuje **sve** što ima `Student` (uključujući i ono što `Student` sam nasleđuje od `Object`), plus svoje sopstveno polje `parentName`.

Ako `PrimarySchoolStudent` ne prevaziđe `toString()`, koristi se nasleđena implementacija sa `Student`-a (ne direktno sa `Object`-a, jer je `Student` "bliža" klasa u hijerarhiji):

```java
PrimarySchoolStudent jimmy = new PrimarySchoolStudent("Jimmy", 8, "Carole");
System.out.println(jimmy); // Jimmy is 8 (koristi Student-ov toString)
```

### 2.6 Prevazilaženje na više nivoa i šta tačno poziva super

`PrimarySchoolStudent` može **dodatno** prevazići `toString()`, oslanjajući se na onu implementaciju koju je `Student` već definisao:

```java
@Override
public String toString() {
    return parentName + "'s kid, " + super.toString();
}
```

```java
System.out.println(jimmy); // Carole's kid, Jimmy is 8
```

**Ključna stvar koju treba razumeti:** `super.toString()` ovde **ne poziva** `Object`-ovu implementaciju (ime klase + hash kod), već poziva implementaciju **najbliže nadklase koja je `toString()` prevazišla** — u ovom slučaju, `Student`-ovu verziju (`name + " is " + age`). Java prilikom izvršavanja `super.metoda()` traži najbližu definiciju metode u hijerarhiji **iznad** trenutne klase, ne nužno direktno u `Object`-u.

### 2.7 Pravilo jednostrukog nasleđivanja

Java **ne dozvoljava** da klasa navede više od jedne nadklase u `extends` klauzuli:

```java
// class PrimarySchoolStudent extends Student, Object { ... } // GRESKA kompajlera
```

Ovo je nepotrebno i pogrešno iz dva razloga: (1) Java dozvoljava samo **jednu** klasu u `extends`, i (2) `PrimarySchoolStudent` već **indirektno** nasleđuje `Object` preko `Student`, pa dodatno navođenje ne bi imalo smisla ni da je sintaksno dozvoljeno. Nasleđivanje je **kumulativno** — niže u hijerarhiji klasa automatski dobija sve što imaju njeni preci, bez potrebe da se bilo šta od toga ponovo navodi.

### 2.8 Pristup prevaziđenim metodama u hijerarhiji

Pošto je `Student` prevazišao `toString()`, `PrimarySchoolStudent` više **ne može** jednostavnim pozivom `super.toString()` doći do originalne `Object`-ove implementacije (ime klase + hash kod) — taj put je "zaklonjen" `Student`-ovom verzijom. Ovo je logično posledica pravila da `super` uvek upućuje na **neposrednu** nadklasu, a ne preskače je da bi dosegao dalje pretke.

---

## 3. Kodni primeri

### 3.1 Podrazumevani toString() nasleđen od Object

```java
class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

Student max = new Student("Max", 21);
System.out.println(max); // Student@<hash kod>
```

### 3.2 Prevazilaženje toString() sopstvenim formatom

```java
@Override
public String toString() {
    return name + " is " + age;
}
```

### 3.3 Višestepeno nasleđivanje sa super.toString()

```java
class PrimarySchoolStudent extends Student {
    private String parentName;

    public PrimarySchoolStudent(String name, int age, String parentName) {
        super(name, age);
        this.parentName = parentName;
    }

    @Override
    public String toString() {
        return parentName + "'s kid, " + super.toString(); // poziva Student.toString()
    }
}
```

### 3.4 Implicitan poziv toString() kroz println

```java
PrimarySchoolStudent jimmy = new PrimarySchoolStudent("Jimmy", 8, "Carole");
System.out.println(jimmy); // Carole's kid, Jimmy is 8
```

### 3.5 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        Student max = new Student("Max", 21);
        System.out.println(max); // Max is 21

        PrimarySchoolStudent jimmy = new PrimarySchoolStudent("Jimmy", 8, "Carole");
        System.out.println(jimmy); // Carole's kid, Jimmy is 8
    }
}

class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + " is " + age;
    }
}

class PrimarySchoolStudent extends Student {
    private String parentName;

    public PrimarySchoolStudent(String name, int age, String parentName) {
        super(name, age);
        this.parentName = parentName;
    }

    @Override
    public String toString() {
        return parentName + "'s kid, " + super.toString();
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo otkrili da **svaka** Java klasa implicitno nasleđuje od ugrađene klase **`java.lang.Object`** — korena cele hijerarhije klasa — čak i kada nikada ne koristimo `extends`. Od `Object`-a automatski dobijamo metode poput `toString()`, `equals()` i `hashCode()`. Videli smo da neprevaziđen `toString()` ispisuje ime klase i hash kod objekta u heksadecimalnom zapisu, i prošli kroz uobičajene načine da ga prevaziđemo, od redundantnog poziva `super.toString()`, preko generisanog formata sa poljima, do potpuno sopstvenog teksta. Na primeru **višestepenog nasleđivanja** (`Object` → `Student` → `PrimarySchoolStudent`) naučili smo ključnu suptilnost: `super.metoda()` poziva implementaciju **najbliže** nadklase koja je tu metodu prevazišla, a ne nužno direktno `Object`-ovu verziju. Na kraju smo potvrdili pravilo da Java dozvoljava samo **jednu** klasu u `extends` klauzuli, jer je nasleđivanje kumulativno — niže klase automatski dobijaju sve od svojih predaka.

### Zadatak za samostalan rad

1. Napravite klasu `Product` sa poljima `name` i `price`, bez prevaziđenog `toString()`, i ispišite objekat da vidite podrazumevani format (ime klase + hash kod).
2. Prevazidite `toString()` na `Product` tako da ispisuje `"<name>: $<price>"`.
3. Napravite klasu `DiscountedProduct extends Product` sa dodatnim poljem `discountPercent`, čiji konstruktor poziva `super(...)`.
4. Prevazidite `toString()` na `DiscountedProduct` tako da koristi `super.toString()` i dodaje informaciju o popustu.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto `super.toString()` u `DiscountedProduct` poziva `Product`-ovu implementaciju, a ne direktno `Object`-ovu, iako obe klase formalno nasleđuju od `Object`.

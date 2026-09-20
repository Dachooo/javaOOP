# Lekcija 20: Lokalne promenljive, opseg važenja i uvod u klase i objekte

## Cilj lekcije

Nakon ove lekcije, razumećete šta su **lokalne promenljive** i njihov **opseg važenja (scope)**, znaćete pravila vidljivosti promenljivih u ugnježdenim blokovima, u petljama, `if` naredbama i `switch` naredbi, primenjivaćete preporučene prakse deklarisanja promenljivih, i steći ćete prvi uvid u **klase i objekte**, uključujući razliku između **statičkih** i **instancnih** polja i metoda.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Lokalna promenljiva** | Promenljiva deklarisana unutar bloka koda; dostupna samo tom bloku i blokovima ugnježdenim u njemu. |
| **Opseg važenja (scope)** | Deo koda u kome je promenljiva dostupna. |
| **In scope / out of scope** | Promenljiva je "u opsegu" kada se može koristiti, a "van opsega" kada više nije dostupna. |
| **Ugnježdeni blok** | Blok koda koji se nalazi unutar drugog bloka (npr. `if` unutar metode). |
| **Klasa (class)** | Šablon (kalup) koji opisuje podatke i metode; prilagođeni tip podataka. |
| **Objekat / instanca (object / instance)** | Konkretan primerak klase kreiran u memoriji. |
| **Instanciranje** | Proces kreiranja objekta iz klase, najčešće pomoću ključne reči `new`. |
| **Polje (field / attribute)** | Promenljiva koja pripada klasi ili objektu. |
| **Statičko polje/metoda** | Pripada samoj klasi; pristupa im se preko imena klase i tačke (`Integer.MAX_VALUE`). |
| **Instancno polje/metoda** | Pripada konkretnom objektu; objekat mora prvo da postoji. |

---

## 2. Detaljno objašnjenje

### 2.1 Lokalne promenljive i opseg važenja

Naredbe kontrole toka (`if`, `switch`, `for`, `while`, `do-while`) obično imaju svoje kod blokove. **Lokalna promenljiva** je promenljiva deklarisana unutar bloka i **dostupna je tom bloku, kao i svim blokovima ugnježdenim u njemu**. Ta dostupnost naziva se **opseg važenja (scope)**.

- Promenljiva je **in scope** kada se može koristiti u bloku koji se izvršava ili u njegovim ugnježdenim blokovima.
- Promenljiva je **out of scope** kada više nije dostupna i ne može se koristiti.

Promenljiva je uvek u opsegu unutar bloka u kome je deklarisana, a i unutar svih blokova ugnježdenih u njemu. Isto važi za **parametre metode** — dostupni su celom telu metode i svim ugnježdenim blokovima.

```java
public static void example() {
    int first = 10;
    int second = 20;
    if (first > 5) {                 // if blok je ugnjezden u metodi
        System.out.println(second);  // ispravno: second je u opsegu
    }
}
```

Dubina ugnježdavanja nije ograničena, ali radi čitljivosti i lakšeg održavanja duboko ugnježdene blokove vredi zameniti pozivima metoda.

### 2.2 Promenljiva nije dostupna spoljašnjem bloku

Promenljiva deklarisana u unutrašnjem bloku **nije dostupna** spoljašnjem bloku:

```java
public static void example() {
    if (true) {
        int myCounter = 5;
    }
    System.out.println(myCounter); // GRESKA: cannot resolve symbol myCounter
}
```

IntelliJ prijavljuje **"cannot resolve symbol myCounter"**, jer je `myCounter` van opsega izvan `if` bloka.

### 2.3 Preporučene prakse

- **Deklarisati i inicijalizovati promenljivu na istom mestu**, kad god je moguće, u jednoj naredbi.
- **Deklarisati promenljive u najužem mogućem opsegu.** Ako se promenljiva koristi samo u ugnježdenom bloku, deklarišite je tamo.

Zato se iteraciona promenljiva `for` petlje deklariše u samoj inicijalizaciji petlje:

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// System.out.println(i); // GRESKA: i postoji samo unutar petlje
```

Promenljiva `i` iz inicijalizacije `for` petlje postoji u memoriji samo dok se petlja izvršava i dostupna je samo njenom bloku. Kod `while` petlje ovo je teže postići, jer nema inicijalizacionog dela.

### 2.4 Opseg u if-else if-else naredbi

Lokalna promenljiva deklarisana u jednom bloku `if` naredbe **nije dostupna** ni u `else if`, ni u `else` bloku, kao ni van naredbe:

```java
if (x > 0) {
    int i = 1;
} else {
    System.out.println(i); // GRESKA: i je deklarisana samo u prvom bloku
}
```

### 2.5 Opseg u switch naredbi

`switch` se ponaša drugačije. U tradicionalnom `switch`-u vitičaste zagrade oko svake grane su opcione, a "blok" je sve između jedne `case` oznake i sledeće. Promenljiva deklarisana u jednoj `case` grani **dostupna je u granama ispod nje**, ali samo posle svoje deklaracije i inicijalizacije:

```java
switch (value) {
    case 1:
        // System.out.println(i); // GRESKA: i jos nije deklarisana
        break;
    case 2:
        int i = 5;
        break;
    default:
        i = 10;                    // ispravno: i je deklarisana iznad
        System.out.println(i);
        break;
}
// System.out.println(i);         // GRESKA: i je van switch bloka
```

Promenljiva ne može da se koristi u `case` grani koja stoji **pre** njene deklaracije, niti van `switch` bloka.

### 2.6 Klase i objekti — kratak uvod

Pored lokalnih promenljivih, podaci se mogu čuvati i kao deo **klase** ili **objekta**. U narednim lekcijama ćemo koristiti wrapper klase za pretvaranje stringova u brojeve i posebnu klasu za čitanje unosa korisnika, pa je korisno razumeti osnovne pojmove.

**Klasa** je prilagođeni tip podataka i poseban blok koda koji sadrži metode. Može se zamisliti kao **prazan formular ili šablon**: opisuje koja polja postoje (npr. ime, adresa). **Objekat** je popunjen formular: ima konkretne vrednosti tih polja, različite za svaki objekat. Poređenje: klasa je kalup za kolačiće, a objekti su kolačići.

Objekat se naziva i **instanca** klase, a njegovo kreiranje je **instanciranje**. Iz jedne klase može se napraviti neograničen broj objekata.

### 2.7 Kreiranje objekata: ključna reč new

Najčešći način kreiranja objekta je ključna reč **`new`**, uz opciono prosleđivanje početnih podataka u zagradama:

```java
String s = new String("hello");
```

`String` je klasa, ali ima posebno mesto u jeziku, pa se može kreirati i samo pomoću literala (`String s = "hello";`). Adresa objekta u memoriji (**referenca**) dodeljuje se lokalnoj promenljivoj `s`, a preko nje se koriste podaci i metode objekta.

### 2.8 Statička i instancna polja

Promenljive klase nazivaju se **polja (fields)** ili **atributi**. Postoje dve vrste:

- **Statičko polje** (sa ključnom rečju `static`) — pripada samoj klasi i ima jednu vrednost koja ostaje na klasi. Pristupa mu se **preko imena klase** i tačke. Već smo to radili: `Integer.MAX_VALUE`, `Integer.MIN_VALUE`, `Integer.SIZE`.
- **Instancno polje** (bez `static`) — pripada objektu. Ne postoji u memoriji dok se objekat ne kreira, a svaki objekat može imati drugačiju vrednost. Pristupa mu se preko **imena promenljive objekta** i tačke.

### 2.9 Statičke i instancne metode

Isto važi za metode:

- **Statička metoda** se poziva direktno preko imena klase, bez instance. Sve metode koje smo do sada pisali bile su statičke.
- **Instancna metoda** zahteva da objekat prvo postoji i poziva se na tom objektu.

Primer: string literal je zapravo objekat tipa `String`, a klasa `String` ima mnogo instancnih metoda, među njima i `toUpperCase()`:

```java
String greeting = "hello";
String upper = greeting.toUpperCase(); // instancna metoda pozvana na objektu
System.out.println(upper);             // HELLO
```

Najvažnije za sada: da bi se koristila instancna metoda, prvo treba imati objekat (instancu).

---

## 3. Kodni primeri

### 3.1 Opseg u ugnježdenim blokovima

```java
public static void main(String[] args) {
    int outer = 10;
    if (outer > 5) {
        int inner = 20;
        System.out.println(outer + inner); // 30, obe su u opsegu
    }
    // System.out.println(inner);          // GRESKA: inner je van opsega
}
```

### 3.2 Iteraciona promenljiva for petlje

```java
for (int i = 0; i < 3; i++) {
    System.out.println("i = " + i);
}
// i ovde vise ne postoji
```

### 3.3 Opseg u switch naredbi

```java
int value = 2;
switch (value) {
    case 1:
        break;
    case 2:
        int result = 5;
        System.out.println(result);
        break;
    default:
        result = 10; // dozvoljeno, result je deklarisan iznad
        break;
}
```

### 3.4 Objekti, statički i instancni članovi

```java
String text = new String("hello");           // kreiranje objekta pomocu new
System.out.println(text.toUpperCase());      // instancna metoda: HELLO
System.out.println(Integer.MAX_VALUE);       // staticko polje preko imena klase
```

### 3.5 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        int outer = 10;

        if (outer > 5) {
            int inner = 20;
            System.out.println("Zbir: " + (outer + inner)); // 30
        }

        for (int i = 0; i < 3; i++) {
            System.out.println("Iteracija " + i);
        }

        String greeting = "hello";
        System.out.println(greeting.toUpperCase());          // HELLO
        System.out.println("Max int: " + Integer.MAX_VALUE); // 2147483647
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo naučili da je **lokalna promenljiva** dostupna bloku u kome je deklarisana i svim blokovima ugnježdenim u njemu (to je njen **opseg važenja**), dok je van tog bloka **van opsega**, što izaziva grešku "cannot resolve symbol". Videli smo posebna pravila za iteracionu promenljivu `for` petlje, za `if-else` blokove (ne dele promenljive) i za `switch` (promenljiva iz jedne grane dostupna je u granama ispod nje). Preporučene prakse su deklarisanje i inicijalizacija na istom mestu i deklarisanje u najužem mogućem opsegu. U drugom delu smo dobili prvi uvid u **klase** (šabloni) i **objekte/instance** (konkretni primerci kreirani pomoću `new`) i razliku između **statičkih** članova (pristupa im se preko imena klase) i **instancnih** članova (zahtevaju objekat).

### Zadatak za samostalan rad

1. Napišite metodu sa `if` blokom u kome deklarišete promenljivu, a zatim pokušajte da je ispišete van bloka. Zabeležite (kao komentar) tačnu grešku koju IntelliJ prijavljuje.
2. Napišite `for` petlju čija se iteraciona promenljiva pokuša koristiti posle petlje, i objasnite (kao komentar) zašto to nije dozvoljeno.
3. Napišite `switch` u kome promenljivu deklarišete u `case 2` grani i koristite je u `default` grani. Objasnite (kao komentar) zašto se ista promenljiva ne može koristiti u `case 1` grani.
4. Napišite program koji ispisuje `Integer.MAX_VALUE` i `Integer.MIN_VALUE`, i objasnite (kao komentar) da su to statička polja klase `Integer`.
5. **Bonus:** Kreirajte `String` promenljivu pomoću `new String("java")`, pozovite na njoj metodu `toUpperCase()` i objasnite (kao komentar) razliku između statičke i instancne metode.

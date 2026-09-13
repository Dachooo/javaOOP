# Lekcija 11: Zamka dodele umesto poređenja, ternarni operator i prioritet operatora

## Cilj lekcije

Nakon ove lekcije, znaćete da prepoznate i izbegnete čest bag — slučajnu upotrebu operatora dodele (`=`) umesto operatora jednakosti (`==`) u `if` uslovu, naučićete skraćeni zapis za testiranje `boolean` promenljivih (uključujući **logički komplement (`!`)**), upoznaćete **ternarni (uslovni) operator** kao kraći zamenik za `if-then-else`, i razumećete **prioritet operatora (operator precedence)** i zašto zagrade nisu samo kozmetika, već ključni alat za kontrolu redosleda izračunavanja.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Bag dodele umesto poređenja** | Čest programerski bag u kom se u `if` uslovu greškom koristi `=` (dodela) umesto `==` (poređenje). |
| **Logički komplement (`!`)** | Operator koji vraća suprotnu (negiranu) `boolean` vrednost — `!true` je `false`, i obrnuto. |
| **Ternarni (uslovni) operator (`?:`)** | Jedini operator u Javi sa tri operanda: `uslov ? vrednostAkoJeTacno : vrednostAkoJeNetacno`. |
| **Prioritet operatora (operator precedence)** | Pravila koja određuju redosled kojim Java izračunava delove složenog izraza kada nisu korišćene zagrade. |
| **Instanceof operator** | Operator za proveru tipa objekta — pomenut ovde, detaljno se obrađuje kasnije, nakon uvoda u klase. |

---

## 2. Detaljno objašnjenje

### 2.1 Bag: dodela (=) umesto poređenja (==) u if uslovu — slučaj sa int

Jedan od najčešćih programerskih bagova, čak i kod iskusnih programera, jeste slučajna upotreba **operatora dodele** (`=`) tamo gde je potreban **operator jednakosti** (`==`):

```java
int newValue = 50;
if (newValue = 50) {  // GRESKA kompajlera: required boolean, provided int
    System.out.println("This is an error");
}
```

Ovaj kod **ne kompajlira** kada je promenljiva u pitanju `int`, jer izraz `newValue = 50` **dodeljuje** vrednost `50` promenljivoj `newValue` i kao rezultat vraća `int` (vrednost `50`), a `if` naredba zahteva `boolean` izraz. IntelliJ ovo odmah prijavljuje kao grešku: **"required type: boolean, provided: int"**.

Ispravka je jednostavna — dodati drugi znak jednakosti, čime se dobija operator poređenja:

```java
int newValue = 50;
if (newValue == 50) { // ISPRAVNO - poredjenje, ne dodela
    System.out.println("This is an error");
}
```

### 2.2 Opasnija varijanta bag-a: dodela u if uslovu sa boolean promenljivom

Ista greška postaje **mnogo opasnija** kada se radi sa `boolean` promenljivom, jer u tom slučaju **kompajler ne prijavljuje grešku**:

```java
boolean isCar = false;
if (isCar = true) {  // NEMA GRESKE KOMPAJLERA! Ali ovo je BAG.
    System.out.println("This is not supposed to happen");
}
```

Ovde se dešava sledeće: izraz `isCar = true` **dodeljuje** vrednost `true` promenljivoj `isCar` (menjajući je sa `false` na `true`!), a zatim ceo izraz **vraća** tu istu vrednost `true` kao rezultat — što je validan `boolean` za `if` uslov. Zbog toga IntelliJ **ne prijavljuje grešku**, kod se kompajlira i izvršava, a poruka se **neočekivano ispisuje**, iako je `isCar` prvobitno bio postavljen na `false`.

Ovo je opasnije od prethodnog slučaja upravo zato što se greška **ne otkriva pri kompajliranju** — jedini način da se primeti jeste kroz neočekivano ponašanje programa prilikom testiranja. Ispravka je ista kao i pre — koristiti operator poređenja `==`:

```java
boolean isCar = false;
if (isCar == true) { // ISPRAVNO
    System.out.println("This is not supposed to happen");
}
```

### 2.3 Skraćeni zapis za testiranje boolean promenljivih

Pošto `boolean` promenljiva već **sama po sebi** predstavlja `true` ili `false`, poređenje sa `true` ili `false` je zapravo suvišno. Umesto pisanja `if (isCar == true)`, može se jednostavno napisati:

```java
if (isCar) { // ekvivalentno: if (isCar == true)
    ...
}
```

Za proveru suprotne vrednosti, umesto `if (isCar == false)`, koristi se **logički komplement (`!`)**, poznat i kao operator **"not"**:

```java
if (!isCar) { // ekvivalentno: if (isCar == false)
    ...
}
```

Operator `!` vraća **suprotnu** `boolean` vrednost od one koju ima operand — ako je `isCar` postavljen na `false`, onda `!isCar` vraća `true`.

**Preporuka:** kod `boolean` promenljivih uvek koristiti skraćeni zapis (`if (isCar)` / `if (!isCar)`) umesto eksplicitnog poređenja sa `true`/`false`, iz dva razloga: 1) čini grešku iz prethodnog primera (dodela umesto poređenja) nemogućom, jer skraćeni zapis uopšte ne koristi znak jednakosti; 2) kod je kraći i čitljiviji.

### 2.4 Ternarni (uslovni) operator

**Ternarni operator** je jedini operator u Javi koji radi sa **tri operanda** (otuda naziv — "ternary" znači "sastavljen od tri dela"). Zvanično se naziva **conditional operator**, a njegova struktura je:

```
operand1 ? operand2 : operand3
```

Način rada: ako se `operand1` (koji mora biti `boolean` izraz) izračuna kao `true`, ceo izraz vraća `operand2`; ako je `false`, vraća `operand3`.

```java
String makeOfCar = "Volkswagen";
boolean isDomestic = makeOfCar == "Volkswagen" ? false : true;
```

Radi bolje čitljivosti, preporučuje se stavljanje uslova u zagrade:

```java
String makeOfCar = "Volkswagen";
boolean isDomestic = (makeOfCar == "Volkswagen") ? false : true;
```

Ternarni operator predstavlja **skraćenicu za if-then-else** naredbu (konstrukcija `else` biće detaljno obrađena u narednoj celini kursa) — koristi se kada je potrebno **dodeliti jednu od dve vrednosti** promenljivoj, u zavisnosti od uslova:

```java
int ageOfClient = 20;
String ageText = (ageOfClient >= 18) ? "Over Eighteen" : "Still a kid";
// ageText = "Over Eighteen", jer je uslov tacan
```

Rezultat ternarnog operatora može biti bilo kog tipa (broj, `String`, `boolean`, itd.) — ako se rezultat dodeljuje promenljivoj, drugi i treći operand moraju biti tog tipa (ili kompatibilnog tipa).

### 2.5 Prioritet operatora (operator precedence)

Kada izraz sadrži više operatora bez zagrada, Java ih izračunava po unapred definisanom **redosledu prioriteta (operator precedence)**. Najvažnije pravilo za sada: **množenje, deljenje i operator ostatka (`*`, `/`, `%`) imaju viši prioritet od sabiranja i oduzimanja (`+`, `-`)**, što znači da se izračunavaju **pre** njih, bez obzira na redosled pisanja u izrazu:

```java
double result = 20.00 + 80.00 * 100.00;
// NIJE (20 + 80) * 100 = 10000
// VEC 20 + (80 * 100) = 20 + 8000 = 8020 - mnozenje ima prioritet nad sabiranjem!
```

**Zagrade `()` imaju najviši prioritet od svih operatora** — mogu se koristiti da se eksplicitno prisili željeni redosled izračunavanja, bez obzira na podrazumevana pravila prioriteta:

```java
double result = (20.00 + 80.00) * 100.00;
// Sada je sabiranje u zagradama izracunato prvo: (20 + 80) = 100, zatim 100 * 100 = 10000
```

**Opšta preporuka:** kad god postoji i najmanja sumnja u to kojim redosledom će se izraz izračunati, koristiti zagrade — to čini kod i tačnim i čitljivijim, jer eksplicitno pokazuje nameru.

> **Napomena:** Java takođe ima operator **`instanceof`** za proveru tipa objekta, kao i **bitwise/bit-shift operatore**, koji se retko koriste u svakodnevnom kodu — oba se detaljnije obrađuju kasnije u kursu (prvi nakon uvoda u klase).

---

## 3. Kodni primeri

### 3.1 Bag: dodela umesto poređenja sa int promenljivom (greška kompajlera)

```java
int newValue = 50;
// if (newValue = 50) { // GRESKA: required boolean, provided int

if (newValue == 50) { // ISPRAVNO
    System.out.println("newValue je jednak 50");
}
```

### 3.2 Opasnija varijanta bag-a: dodela umesto poređenja sa boolean promenljivom

```java
boolean isCar = false;

// GRESKA U LOGICI (bez greske kompajlera!):
// if (isCar = true) {
//     System.out.println("This is not supposed to happen"); // ipak se izvrsi!
// }

if (isCar == true) { // ISPRAVNO - poredjenje
    System.out.println("This is not supposed to happen"); // sada se NE izvrsava
}
```

### 3.3 Skraćeni zapis testiranja boolean promenljivih

```java
boolean isCar = false;

if (isCar) {
    System.out.println("Ovo je auto.");
}

if (!isCar) {
    System.out.println("Ovo nije auto."); // ispisuje se
}
```

### 3.4 Ternarni operator — dodela vrednosti na osnovu uslova

```java
String makeOfCar = "Volkswagen";
boolean isDomestic = (makeOfCar == "Volkswagen") ? false : true;
System.out.println(isDomestic); // false

int ageOfClient = 20;
String ageText = (ageOfClient >= 18) ? "Over Eighteen" : "Still a kid";
System.out.println(ageText); // Over Eighteen
```

### 3.5 Ternarni operator kao zamena za if-else pri ispisu poruke

```java
boolean isDomestic = false;
String s = (isDomestic) ? "This car is domestic" : "This car is not domestic";
System.out.println(s); // This car is not domestic
```

### 3.6 Prioritet operatora — čest izvor grešaka bez zagrada

```java
double myFirstValue = 20.00;
double mySecondValue = 80.00;

double wrongTotal = myFirstValue + mySecondValue * 100.00;
System.out.println(wrongTotal); // 8020.0 - mnozenje prvo!

double correctTotal = (myFirstValue + mySecondValue) * 100.00;
System.out.println(correctTotal); // 10000.0 - zagrade forsiraju sabiranje prvo
```

### 3.7 Kompletan Java program — rešenje izazova sa operatorima

```java
public class Main {
    public static void main(String[] args) {
        double myFirstValue = 20.00;
        double mySecondValue = 80.00;

        // Koriscenje zagrada da se izbegne zamka prioriteta operatora
        double myValuesTotal = (myFirstValue + mySecondValue) * 100.00;
        System.out.println("Total: " + myValuesTotal); // 10000.0

        double remainder = myValuesTotal % 40.00;
        System.out.println("Remainder: " + remainder); // 0.0

        boolean isNoRemainder = (remainder == 0) ? true : false;
        System.out.println("Is no remainder: " + isNoRemainder); // true

        if (!isNoRemainder) {
            System.out.println("Got some remainder");
        }
        // ova poruka se NE ispisuje, jer je isNoRemainder true
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo obradili jedan od najčešćih programerskih bagova — slučajnu upotrebu **operatora dodele (`=`) umesto operatora jednakosti (`==`)** u `if` uslovu. Videli smo da ova greška kod `int` promenljivih izaziva grešku kompajlera, ali kod `boolean` promenljivih **prolazi bez greške** i izaziva tihi bag u logici programa, zbog čega je preporučeno koristiti skraćeni zapis (`if (isCar)` / `if (!isCar)`) umesto eksplicitnog poređenja sa `true`/`false`. Upoznali smo **ternarni operator** (`uslov ? vrednost1 : vrednost2`) kao kompaktnu zamenu za `if-then-else` naredbu kada je potrebno dodeliti jednu od dve vrednosti na osnovu uslova. Na kraju smo obradili **prioritet operatora** — pravilo da množenje, deljenje i ostatak imaju viši prioritet od sabiranja i oduzimanja — i zaključili da je korišćenje **zagrada** najsigurniji način da se osigura željeni redosled izračunavanja i izbegnu neočekivani rezultati.

### Zadatak za samostalan rad

1. Napišite kod sa namernom greškom `if (isReady = true)` gde je `isReady` tipa `boolean`, objasnite (kao komentar) zašto se ova greška ne prijavljuje pri kompajliranju, a zatim je ispravite koristeći skraćeni zapis `if (isReady)`.
2. Napišite ternarni operator koji promenljivoj `String status` dodeljuje `"Punoletan"` ili `"Maloletan"` u zavisnosti od `int` promenljive `godine`.
3. Izračunajte izraz `10 + 5 * 2 - 3` bez zagrada i zapišite (kao komentar) redosled kojim se on zapravo izračunava prema prioritetu operatora, a zatim dodajte zagrade da rezultat bude `27`.
4. Napišite `if` naredbu koja koristi logički komplement (`!`) da proveri da li `boolean` promenljiva `hasPermission` NIJE tačna, i ispiše odgovarajuću poruku.
5. **Bonus:** Napišite izraz koji koristi operator ostatka (`%`) i ternarni operator zajedno, da proveri da li je broj paran ili neparan, i ispiše odgovarajuću poruku ("Paran broj" / "Neparan broj").

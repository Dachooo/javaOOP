# Lekcija 6: Char, boolean, rekapitulacija primitivnih tipova i uvod u String

## Cilj lekcije

Nakon ove lekcije, znaćete šta je **char** primitivni tip i na koja se sve tri načina može dodeliti vrednost (literal, Unicode, decimalni broj), razumećete **boolean** tip i njegovu ulogu u programiranju, imaćete pregled svih **osam primitivnih tipova** Jave i njihove uobičajene primene, i upoznaćete **String klasu** — kako se razlikuje od primitivnih tipova, kako radi operator konkatenacije (`+`), i zašto je String **nepromenljiv (immutable)**.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **char** | Primitivni tip koji čuva tačno jedan karakter, zapisan u jednostrukim navodnicima (`'D'`), širine 16 bita (2 bajta). |
| **Unicode** | Međunarodni standard kodiranja u kojem svako slovo, cifra ili simbol ima jedinstvenu numeričku vrednost, zapisuje se kao `\uXXXX`. |
| **boolean** | Primitivni tip koji može imati samo jednu od dve vrednosti: `true` ili `false`. |
| **String** | Klasa (ne primitivni tip) koja predstavlja niz karaktera proizvoljne dužine, zapisan u dvostrukim navodnicima (`"tekst"`). |
| **Konkatenacija (concatenation)** | Spajanje tekstualnih vrednosti operatorom `+`, kada se on primeni na `String`. |
| **Nepromenljivost (immutability)** | Osobina `String`-a da se, jednom kreiran, ne može promeniti — svaka "izmena" zapravo kreira novi objekat u memoriji. |
| **StringBuilder** | Klasa iz Java biblioteke namenjena efikasnom, promenljivom (mutable) radu sa tekstom, za razliku od nepromenljivog `String`-a. |
| **Blok naredbi `{ }` u JShell-u** | Grupa od više naredbi izvršenih zajedno, gde se rezultati pojedinačnih naredbi ne ispisuju automatski — ponašanje slično pravom Java programu. |

---

## 2. Detaljno objašnjenje

### 2.1 Char — tip za jedan karakter

**`char`** je primitivni tip koji čuva **tačno jedan karakter** — slovo, cifru ili bilo koji drugi simbol (npr. `!`, `#`, `$`). Literal se zapisuje u **jednostrukim navodnicima**:

```java
char myChar = 'D';
```

Pokušaj da se u jednostruke navodnike stavi više od jednog karaktera izaziva grešku kompajlera **"unclosed character literal"**, jer Java očekuje tačno jedan karakter između navodnika.

Iako izgleda slično `String`-u (oba čuvaju karaktere), ključna razlika je: `char` čuva **samo jedan** karakter i koristi **jednostruke** navodnike, dok `String` čuva **niz** karaktera i koristi **dvostruke** navodnike.

Iako se čini da bi jedan karakter trebalo da zauzima jedan bajt, `char` u Javi zauzima **2 bajta (16 bita)** memorije — isto kao `short` — jer se interno čuva kao broj koji Java mapira na odgovarajući karakter.

### 2.2 Tri načina dodele vrednosti char promenljivoj

Zahvaljujući internom mapiranju broja na karakter, vrednost `char` promenljivoj može se dodeliti na **tri ekvivalentna načina**:

1. **Literalni karakter** u jednostrukim navodnicima: `'D'`
2. **Unicode vrednost**, u obliku `'\uXXXX'` (četvorocifreni heksadecimalni kod): `'D'`
3. **Decimalni (celobrojni) broj** koji odgovara tom karakteru: `68`

Sva tri načina rezultuju identičnom vrednošću u memoriji i identičnim ispisom na ekranu (karakterom, a ne brojem). **Unicode** je međunarodni standard kodiranja u kojem je svakom slovu, cifri ili simbolu dodeljena jedinstvena numerička vrednost — zahvaljujući dvobajtnoj širini, `char` u Javi može predstaviti bilo koji od **65.535** različitih Unicode karaktera, što uključuje i pisma jezika koji imaju mnogo više karaktera od engleskog alfabeta (koji ima svega 26 slova).

### 2.3 Praktična upotreba char tipa

`char` je danas relativno redak izbor u praksi (bio je značajniji u vreme kada je Java nastala krajem devedesetih, zbog ograničenja memorije), ali i dalje ima praktičnu primenu, na primer:

- čuvanje poslednjeg pritisnutog tastera u igri,
- iteracija kroz slova alfabeta,
- čuvanje niza karaktera u **nizovima (array)**, npr. istorija svih pritisnutih tastera tokom sesije korisnika.

### 2.4 Boolean — logička vrednost

**`boolean`** je primitivni tip koji dozvoljava samo dve vrednosti: **`true`** ili **`false`** (odgovara pojmovima da/ne, uključeno/isključeno):

```java
boolean myTrueBooleanValue = true;
boolean myFalseBooleanValue = false;
```

Wrapper klasa za `boolean` je **`Boolean`** (veliko slovo B). `boolean` promenljive su izuzetno korisne u programiranju, posebno kada se u kasnijim lekcijama uvede uslovna logika (`if`, uslovi, petlje).

Uobičajena konvencija imenovanja je da se ime `boolean` promenljive formuliše kao **pitanje**, često sa prefiksom `is` ili `has`, jer to čini kod čitljivijim:

```java
boolean isCustomerOverTwentyOne = true;
boolean isMarried = false;
boolean hasChildren = true;
```

### 2.5 Rekapitulacija — osam primitivnih tipova Jave

Sa `char` i `boolean` upoznali smo poslednja dva od ukupno **osam primitivnih tipova** u Javi:

| Tip | Širina | Učestalost korišćenja u praksi |
|---|---|---|
| `byte` | 8 bita | vrlo retko |
| `short` | 16 bita | vrlo retko |
| `int` | 32 bita | **veoma često** (podrazumevani celobrojni tip) |
| `long` | 64 bita | povremeno |
| `float` | 32 bita | vrlo retko |
| `double` | 64 bita | **veoma često** (podrazumevani decimalni tip) |
| `char` | 16 bita | povremeno |
| `boolean` | 1 bit (konceptualno) | **veoma često** |

U praksi, programeri najčešće koriste **`int`, `double` i `boolean`**, povremeno `long` i `char`, dok su `byte`, `short` i `float` prilično retki. Kako Java program raste, koriste se i **klase** — sopstveni, kompleksniji tipovi podataka koje pravi sam programer, kao i klase iz Java biblioteke (poput već pomenutih wrapper klasa i `BigDecimal`-a).

### 2.6 String — klasa koja se ponaša kao primitivni tip

**`String`** predstavlja **niz karaktera** (za razliku od `char`-a, koji čuva samo jedan). Iako `String` **nije primitivni tip** već **klasa**, Java mu daje poseban tretman koji ga čini jednostavnim za korišćenje — praktično kao "deveti primitivni tip":

```java
String myString = "This is a string";
```

Bitno je paziti na veliko slovo **`S`** u `String` — pisanje malim slovom izaziva grešku, jer Java tada traži nepostojeći tip.

Teorijski maksimalan broj karaktera u jednom `String`-u ograničen je dostupnom memorijom (heap-om), a praktično je ograničen na `Integer.MAX_VALUE` (oko 2.14 milijarde karaktera).

### 2.7 Operator konkatenacije i mešanje tipova sa String-om

Kada se operator `+` primeni tako da je bar jedan od operanada `String`, on se ne ponaša kao sabiranje, već kao **konkatenacija (spajanje teksta)**:

```java
String myString = "This is a string";
myString = myString + ", and this is more.";
```

Ovo pravilo važi i kada se `String` sabira sa brojem — broj se automatski **pretvara u tekstualni zapis** i nadovezuje, umesto da se izvrši matematičko sabiranje:

```java
String lastString = "10";
int myInt = 50;
lastString = lastString + myInt; // rezultat: "1050" (konkatenacija, ne sabiranje!)
```

Ovo je izvor čestih grešaka početnika — vrednost `10` u navodnicima je **string**, a ne broj, pa se `50` samo nadovezuje kao tekst umesto da se izračuna `10 + 50 = 60`. Isto važi i za `double` vrednosti nadovezane na `String`.

Važno je uočiti razliku: pokušaj da se `String` literal (npr. `"10"`) direktno dodeli `int` promenljivoj izaziva grešku kompajlera zbog nekompatibilnosti tipova — Java ne pretvara tekst u broj automatski u tom smeru.

### 2.8 String je nepromenljiv (immutable)

Ključna osobina `String`-a je da je **nepromenljiv (immutable)** — jednom kreiran `String` se ne može izmeniti. Kada se, na primer, nešto nadoveže na postojeći `String`, Java **ne menja** postojeći string u memoriji, već **kreira potpuno novi** string koji sadrži spojeni tekst, a stara vrednost se automatski uklanja iz memorije.

Zbog ovoga, često nadovezivanje teksta na `String` (npr. u petlji) je **neefikasno**, jer se pri svakoj operaciji kreira novi objekat u memoriji. Za takve slučajeve, Java biblioteka nudi klasu **`StringBuilder`**, koja je **promenljiva (mutable)** i mnogo efikasnija za intenzivno spajanje teksta — ali ne poseduje posebne pogodnosti `String`-a (npr. direktnu dodelu literala ili korišćenje operatora `+`). Detaljnija obrada `String`-a i `StringBuilder`-a sledi kasnije u kursu, nakon uvoda u klase.

### 2.9 Grupisanje više naredbi u JShell-u pomoću `{ }`

Pored pisanja više naredbi u jednoj liniji (razdvojenih tačka-zapetom, iz prethodne lekcije), JShell nudi i drugi način: grupisanje više naredbi unutar **vitičastih zagrada**:

```java
{
    String numberString = "250.55";
    numberString = numberString + "49.45";
    System.out.println(numberString);
}
```

Nakon otvorene `{`, JShell menja prompt (prikazuje `...>`) i prihvata naredbe jednu po jednu, sve dok se ne unese zatvorena `}` (bez tačka-zapete posle nje), nakon čega se sve naredbe izvršavaju redom. **Razlika u odnosu na pisanje u jednoj liniji:** unutar bloka `{ }`, JShell **ne ispisuje** automatski vrednost svake pojedinačne naredbe — ispisuje se samo ono što je eksplicitno prosleđeno kroz `System.out.print`/`println`, što odgovara ponašanju pravog Java programa (npr. u IntelliJ-u).

---

## 3. Kodni primeri

### 3.1 Osnovna char promenljiva i greška pri više karaktera

```java
char myChar = 'D';
System.out.println(myChar); // D

// char invalid = 'DD'; // GRESKA: unclosed character literal (previse karaktera)
```

### 3.2 Tri načina dodele vrednosti char promenljivoj

```java
char mySimpleChar = 'D';       // 1. literalni karakter
char myUnicodeChar = 'D'; // 2. unicode vrednost (0044 = D)
char myDecimalChar = 68;       // 3. decimalni broj koji odgovara karakteru D

System.out.println(mySimpleChar);  // D
System.out.println(myUnicodeChar); // D
System.out.println(myDecimalChar); // D
```

### 3.3 Rešenje izazova — tri načina zapisa znaka pitanja

```java
char mySimpleChar = '?';
char myUnicodeChar = '?';
char myDecimalChar = 63;

System.out.println("my values are " + mySimpleChar + myUnicodeChar + myDecimalChar);
// ispis: my values are ???
```

### 3.4 Boolean promenljive i konvencija imenovanja

```java
boolean myTrueBooleanValue = true;
boolean myFalseBooleanValue = false;
boolean isCustomerOverTwentyOne = true;

System.out.println(myTrueBooleanValue);      // true
System.out.println(myFalseBooleanValue);     // false
System.out.println(isCustomerOverTwentyOne); // true
```

### 3.5 String literal i konkatenacija

```java
String myString = "This is a string";
myString = myString + ", and this is more.";
System.out.println("my string is equal to " + myString);
// ispis: my string is equal to This is a string, and this is more.
```

### 3.6 Mešanje String-a sa brojevima (konkatenacija umesto sabiranja)

```java
String lastString = "10";
int myInt = 50;
lastString = lastString + myInt;
System.out.println(lastString); // 1050 (konkatenacija, ne 60!)

double doubleNumber = 12.47;
lastString = lastString + doubleNumber;
System.out.println(lastString); // 105012.47
```

### 3.7 Greška — string literal ne može direktno u int promenljivu

```java
// int myInt = "10"; // GRESKA: incompatible types: String cannot be converted to int
int myInt = 10; // ispravno - bez navodnika, ovo je broj
```

### 3.8 Grupa naredbi u JShell-u pomoću `{ }`

```java
{
    String numberString = "250.55";
    numberString = numberString + "49.45";
    System.out.println(numberString);
}
// ispis: 250.5549.45 (konkatenacija stringova, ne sabiranje brojeva)
```

### 3.9 Kompletan Java program koji objedinjuje primere

```java
public class Main {
    public static void main(String[] args) {
        // Char - tri nacina dodele vrednosti
        char mySimpleChar = '?';
        char myUnicodeChar = '?';
        char myDecimalChar = 63;
        System.out.println("Karakteri: " + mySimpleChar + myUnicodeChar + myDecimalChar);

        // Boolean
        boolean isCustomerOverTwentyOne = true;
        System.out.println("Da li je kupac stariji od 21: " + isCustomerOverTwentyOne);

        // String i konkatenacija
        String message = "This is a string";
        message = message + ", and this is more.";
        System.out.println(message);

        // Konkatenacija broja sa stringom
        String lastString = "10";
        int myInt = 50;
        lastString = lastString + myInt;
        System.out.println("Rezultat konkatenacije: " + lastString); // 1050
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali poslednja dva primitivna tipa u Javi: **`char`** (jedan karakter, 16 bita, sa tri ekvivalentna načina dodele vrednosti — literal, Unicode i decimalni broj) i **`boolean`** (samo `true` ili `false`). Sa ovim smo zaokružili pregled svih **osam primitivnih tipova** Jave i njihove tipične učestalosti korišćenja u praksi. Zatim smo upoznali **`String`** — klasu (ne primitivni tip) koja predstavlja niz karaktera i koja se, zahvaljujući posebnom tretmanu u Javi, koristi gotovo kao primitivni tip. Naučili smo da operator `+` na `String`-u vrši **konkatenaciju**, a ne sabiranje, čak i kada se sabira sa brojevima, i da je `String` **nepromenljiv (immutable)** — svaka izmena zapravo kreira novi objekat u memoriji, zbog čega postoji efikasnija alternativa, klasa **`StringBuilder`**. Na kraju smo videli kako se u JShell-u više naredbi može grupisati vitičastim zagradama `{ }`, što se ponaša slično izvršavanju pravog Java programa.

### Zadatak za samostalan rad

1. Deklarišite `char` promenljivu na sva tri načina (literal, Unicode, decimalni broj) za slovo vašeg imena i ispišite sve tri u jednoj `System.out.println` naredbi.
2. Deklarišite dve `boolean` promenljive sa imenima koja slede konvenciju `is`/`has` (npr. `isStudent`, `hasLicense`) i ispišite ih.
3. Napravite `String` promenljivu sa vašim imenom, a zatim je pomoću operatora `+` nadovežite sa prezimenom i godinama (kao `int`), i objasnite (kao komentar) zašto rezultat nije zbir brojeva.
4. Napišite kod koji namerno izaziva grešku "incompatible types: String cannot be converted to int" pokušavajući da dodelite string literal broja `int` promenljivoj, a zatim je ispravite.
5. **Bonus:** Napišite blok naredbi u vitičastim zagradama `{ }` koji deklariše dve `String` promenljive i spaja ih, i objasnite (kao komentar) zašto se u ovom slučaju ne ispisuje automatski rezultat svake naredbe, za razliku od pisanja u jednoj liniji.

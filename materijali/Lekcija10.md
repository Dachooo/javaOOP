# Lekcija 10: If-then naredba, relacioni operatori i logičko AND/OR

## Cilj lekcije

Nakon ove lekcije, razumećete kako **if-then naredba** kontroliše tok izvršavanja programa na osnovu uslovne logike, znaćete razliku između operatora dodele (`=`) i operatora jednakosti (`==`), poznavaćete sve **relacione operatore poređenja** (`==`, `!=`, `>`, `>=`, `<`, `<=`), razumećete zašto je **kod blok** (`{ }`) uz `if` naredbu uvek preporučljiv, i naučićete **logičke operatore** `&&` (AND) i `||` (OR) za kombinovanje više uslova.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Uslovna logika (conditional logic)** | Mehanizam kojim program izvršava određeni deo koda samo ako se određeni uslov (izraz) ispuni. |
| **if-then naredba** | Osnovna kontrolna naredba u Javi koja izvršava kod blok samo ako je dati uslov `true`. |
| **Operator jednakosti (`==`)** | Relacioni operator koji poredi dva operanda i vraća `true` ili `false`, u zavisnosti od toga da li su jednaki. |
| **Relacioni operatori** | Operatori poređenja: `==`, `!=`, `>`, `>=`, `<`, `<=` — svi vraćaju `boolean` vrednost. |
| **Kod blok uz if naredbu** | Vitičaste zagrade `{ }` koje jasno određuju koji deo koda pripada `if` naredbi; preporučuje se uvek koristiti, čak i za jednu liniju. |
| **Logičko AND (`&&`)** | Logički operator koji vraća `true` samo ako su **oba** operanda (uslova) `true`. |
| **Logičko OR (`\|\|`)** | Logički operator koji vraća `true` ako je **bar jedan** od dva operanda (uslova) `true`. |
| **Bitwise AND/OR (`&`, `\|`)** | Operatori koji rade na nivou pojedinačnih bitova — po izgledu slični logičkim operatorima, ali se ne koriste za proveru uslova. |

---

## 2. Detaljno objašnjenje

### 2.1 Šta je if-then naredba

**If-then naredba** je najosnovnija kontrolna naredba u Javi — omogućava da se određeni deo koda izvrši **samo ako** je zadati uslov (izraz) tačan (`true`). Ovaj koncept naziva se **uslovna logika (conditional logic)**:

```java
boolean isAlien = false;
if (isAlien == false)
    System.out.println("It is not an alien!");
```

Važno je uočiti da **`if` naredba (bez koda bloka) nema tačka-zapetu** na kraju svoje linije — tačka-zapeta se javlja tek na kraju naredbe koja se izvršava ako je uslov tačan. Ovo je primer da se jedna logička naredba proteže preko dve linije koda, što je u Javi potpuno validno.

### 2.2 Operator dodele naspram operatora jednakosti

Ključna razlika koja se ovde uočava jeste između:

- **Operatora dodele (`=`)** — jedan znak jednakosti, koji **dodeljuje** vrednost promenljivoj: `isAlien = false;`
- **Operatora jednakosti (`==`)** — dva znaka jednakosti, koji **poredi** dva operanda i vraća `boolean` vrednost (`true` ili `false`): `isAlien == false`

```java
boolean isAlien = false;       // dodela vrednosti (=)
if (isAlien == false) { ... }  // poredjenje vrednosti (==)
```

Zamena ova dva operatora jedan za drugi čest je izvor grešaka početnika (o čemu će biti više reči u narednim lekcijama).

### 2.3 Relacioni operatori poređenja

Pored operatora jednakosti (`==`), Java nudi čitav set **relacionih operatora**, koji svi vraćaju `boolean` vrednost:

| Operator | Značenje | Primer | Rezultat (ako je `topScore = 100`) |
|---|---|---|---|
| `==` | jednako | `topScore == 100` | `true` |
| `!=` | nije jednako | `topScore != 100` | `false` |
| `>` | veće od | `topScore > 100` | `false` |
| `>=` | veće ili jednako | `topScore >= 100` | `true` |
| `<` | manje od | `topScore < 100` | `false` |
| `<=` | manje ili jednako | `topScore <= 100` | `true` |

Svi ovi operatori se mogu koristiti kao uslov unutar `if` naredbe, za poređenje promenljivih sa literalima ili sa drugim promenljivama.

### 2.4 Zašto je kod blok uz if naredbu neophodan

Ako se `if` naredba napiše **bez** vitičastih zagrada, Java smatra da **samo prva naredna linija** pripada `if` naredbi — sve ostale linije se izvršavaju **bezuslovno**, bez obzira na ishod uslova:

```java
boolean isAlien = true;
if (isAlien == false)
    System.out.println("It is not an alien!");     // pripada if naredbi
    System.out.println("I am scared of aliens!");   // NE pripada if naredbi - uvek se izvrsava!
```

U primeru iznad, čak i kada je `isAlien` postavljen na `true` (pa je uslov netačan), druga linija će se **ipak ispisati**, jer formalno ne pripada `if` naredbi — samo je uvučena (indentovana) tako da to *izgleda* kao njen deo. Ovo je zamka koja može izazvati teško uočljive greške.

Rešenje je da se uslovni kod uvek stavi u **kod blok**, ograničen vitičastim zagradama:

```java
boolean isAlien = true;
if (isAlien == false) {
    System.out.println("It is not an alien!");
    System.out.println("I am scared of aliens!");
}
```

Sada obe linije pripadaju `if` naredbi, i izvršiće se **samo** ako je uslov tačan. **Opšta preporuka:** uvek koristiti kod blok uz `if` naredbu, čak i kada se izvršava samo jedna linija koda — na taj način, ako se kod kasnije proširi dodatnom linijom, neće doći do slučajnog uvođenja greške opisane iznad.

### 2.5 Greška: slučajno dodata tačka-zapeta posle if uslova

Još jedna česta zamka je dodavanje tačka-zapete odmah posle zatvorene zagrade uslova:

```java
if (isAlien == true); // GRESKA U LOGICI: tacka-zapeta ovde zavrsava if naredbu praznom naredbom
    System.out.println("This will always print!"); // izvrsava se BEZUSLOVNO
```

Ova tačka-zapeta formalno završava `if` naredbu praznom naredbom, pa se sledeća linija (bez obzira na njeno uvlačenje) izvršava **nezavisno od uslova**, uvek. Java ovo dozvoljava sintaksno (nema greške pri kompajliranju), pa je efekat teško primetiti — dodatan razlog da se navika korišćenja koda bloka strogo poštuje.

### 2.6 Logičko AND (&&) — oba uslova moraju biti tačna

Kada je potrebno proveriti **dva uslova istovremeno**, koristi se **logičko AND**, zapisano kao dva znaka `&`: `&&`. Vraća `true` samo ako su **oba** operanda (uslova) tačna:

```java
int topScore = 80;
int secondTopScore = 60;

if (topScore > secondTopScore && topScore < 100) {
    System.out.println("Greater than secondTopScore and less than 100");
}
```

Radi bolje čitljivosti, preporučuje se dodavanje zagrada oko svakog pojedinačnog uslova:

```java
if ((topScore > secondTopScore) && (topScore < 100)) {
    System.out.println("Greater than secondTopScore and less than 100");
}
```

Dodatne zagrade ne menjaju ponašanje koda, ali čine jasnijim koji su tačno operandi logičkog operatora.

**Napomena o bitwise operatoru:** postoji i jednostruki znak `&` (**bitwise AND**), koji radi na nivou pojedinačnih bitova — ima drugačiju namenu i **ne treba ga koristiti** za proveru logičkih uslova. Za proveru uslova u `if` naredbama uvek se koristi **logičko** `&&`.

### 2.7 Logičko OR (||) — bar jedan uslov mora biti tačan

**Logičko OR**, zapisano kao dva znaka `|`: `||`, vraća `true` ako je **bar jedan** od dva uslova tačan (nije neophodno da oba budu tačna):

```java
int topScore = 80;
int secondTopScore = 81;

if ((topScore > 90) || (secondTopScore <= 90)) {
    System.out.println("Either or both of the conditions are true");
}
```

U ovom primeru, levi uslov (`80 > 90`) je netačan, ali desni uslov (`81 <= 90`) je tačan — pošto je bar jedan uslov tačan, ceo izraz vraća `true`, i poruka se ispisuje.

Slično kao kod AND-a, postoji i jednostruki znak `|` (**bitwise OR**), koji radi na nivou bitova i **ne koristi se** za proveru logičkih uslova — u praksi se skoro uvek koristi logičko `||`.

---

## 3. Kodni primeri

### 3.1 Osnovna if-then naredba bez koda bloka (nije preporučeno)

```java
boolean isAlien = false;
if (isAlien == false)
    System.out.println("It is not an alien!");
```

### 3.2 Zamka: naredba bez koda bloka i dodatna linija koja se uvek izvršava

```java
boolean isAlien = true;
if (isAlien == false)
    System.out.println("It is not an alien!");
    System.out.println("I am scared of aliens!"); // uvek se izvrsava, bez obzira na uslov!
```

### 3.3 Ispravno rešenje sa kod blokom

```java
boolean isAlien = true;
if (isAlien == false) {
    System.out.println("It is not an alien!");
    System.out.println("I am scared of aliens!");
}
// sa isAlien = true, nista se ne ispisuje - obe linije su deo koda bloka
```

### 3.4 Relacioni operatori poređenja

```java
int topScore = 100;

if (topScore == 100) {
    System.out.println("You got the high score!"); // ispisuje se
}

if (topScore != 100) {
    System.out.println("Not the high score."); // ne ispisuje se
}

if (topScore >= 100) {
    System.out.println("At or above the high score!"); // ispisuje se
}
```

### 3.5 Logičko AND (&&)

```java
int topScore = 80;
int secondTopScore = 60;

if ((topScore > secondTopScore) && (topScore < 100)) {
    System.out.println("Greater than secondTopScore and less than 100");
}
// ispisuje se, jer su oba uslova tacna (80 > 60 I 80 < 100)
```

### 3.6 Logičko AND — slučaj kada jedan uslov nije tačan

```java
int topScore = 80;
int secondTopScore = 81; // sada topScore NIJE veci od secondTopScore

if ((topScore > secondTopScore) && (topScore < 100)) {
    System.out.println("Greater than secondTopScore and less than 100");
}
// nista se ne ispisuje - levi uslov je netacan, pa je ceo izraz false
```

### 3.7 Logičko OR (||)

```java
int topScore = 80;
int secondTopScore = 81;

if ((topScore > 90) || (secondTopScore <= 90)) {
    System.out.println("Either or both of the conditions are true");
}
// ispisuje se - desni uslov je tacan, sto je dovoljno za OR
```

### 3.8 Kompletan Java program koji objedinjuje primere

```java
public class Main {
    public static void main(String[] args) {
        boolean isAlien = false;

        // Osnovna if naredba sa kod blokom
        if (isAlien == false) {
            System.out.println("It is not an alien!");
        }

        int topScore = 80;
        int secondTopScore = 60;

        // Relacioni operatori
        if (topScore >= 80) {
            System.out.println("Solid score!");
        }

        // Logicko AND
        if ((topScore > secondTopScore) && (topScore < 100)) {
            System.out.println("Greater than secondTopScore and less than 100");
        }

        // Logicko OR
        if ((topScore > 90) || (secondTopScore <= 90)) {
            System.out.println("Either or both of the conditions are true");
        }
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **if-then naredbu** kao osnovni mehanizam **uslovne logike** u Javi — kod se izvršava samo ako zadati uslov vrati `true`. Napravili smo jasnu razliku između operatora dodele (`=`) i operatora jednakosti (`==`), i upoznali kompletan set **relacionih operatora poređenja** (`==`, `!=`, `>`, `>=`, `<`, `<=`). Videli smo zašto je **kod blok** (`{ }`) uz `if` naredbu uvek preporučen — bez njega, samo prva naredna linija pripada uslovu, dok se sve ostale linije izvršavaju bezuslovno, što može dovesti do teško uočljivih grešaka (kao i greška slučajno dodate tačka-zapete posle uslova). Na kraju smo upoznali **logičke operatore** `&&` (AND, oba uslova moraju biti tačna) i `||` (OR, bar jedan uslov mora biti tačan), uz napomenu da postoje i slični **bitwise** operatori (`&`, `|`) koji se ne koriste za proveru logičkih uslova.

### Zadatak za samostalan rad

1. Napišite `if` naredbu (sa kod blokom) koja proverava da li je `int` promenljiva `age` veća ili jednaka `18`, i ispisuje odgovarajuću poruku.
2. Namerno napišite `if` naredbu bez koda bloka i sa dve naredne linije ispisa, pokažite (komentarom) koja linija se izvršava bezuslovno, a zatim ispravite kod dodavanjem koda bloka.
3. Napišite uslov koji koristi logičko `&&` da proveri da li je broj istovremeno veći od `10` i manji od `20`.
4. Napišite uslov koji koristi logičko `||` da proveri da li je ocena (`int grade`) jednaka `5` ili veća od `90` (na skali do 100), i objasnite razliku u odnosu na `&&`.
5. **Bonus:** Napišite kod koji sadrži grešku sa slučajno dodatom tačka-zapetom posle `if` uslova (`if (x > 5);`), pokažite (komentarom) zašto sledeća linija radi bezuslovno, i ispravite grešku.

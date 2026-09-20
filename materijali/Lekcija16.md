# Lekcija 16: Switch naredba — tradicionalna i poboljšana (enhanced) verzija

## Cilj lekcije

Nakon ove lekcije, znaćete kada i kako da koristite **switch naredbu** umesto dugačkog `if-else if-else` lanca, razumećete ključne reči **`case`**, **`break`** i **`default`**, znaćete šta je **fall through** i zašto može izazvati neočekivane rezultate, poznavaćete tipove podataka koje `switch` podržava, i naučićete **poboljšanu (enhanced) switch sintaksu** sa strelicom `->`, **switch izraz** koji vraća vrednost i ključnu reč **`yield`**.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **switch naredba** | Kontrolna naredba koja poredi jednu promenljivu sa više mogućih vrednosti i izvršava kod prvog poklapanja. |
| **case** | Oznaka (labela) koja predstavlja jednu vrednost sa kojom se poredi promenljiva iz `switch`-a. |
| **break** | Prekida izvršavanje `switch` bloka i nastavlja program posle njega. |
| **default** | Grana koja se izvršava kada nijedan `case` nije odgovarao (ekvivalent `else`-a). |
| **Fall through** | Ponašanje tradicionalnog `switch`-a gde se, bez `break`, izvršavanje nastavlja kroz sledeće `case` grane. |
| **Poboljšani (enhanced) switch** | Novija sintaksa (standardna od Jave 14) sa strelicom `->`, bez `break`-a i bez fall through-a. |
| **Switch izraz (switch expression)** | Poboljšani `switch` koji **vraća vrednost** i može se dodeliti promenljivoj ili vratiti iz metode. |
| **yield** | Ključna reč kojom se vraća vrednost iz koda bloka unutar grane switch izraza. |

---

## 2. Detaljno objašnjenje

### 2.1 Problem: dugački if-else lanci

Za proveru jedne promenljive protiv više vrednosti možemo koristiti `if-else if-else`:

```java
int value = 1;
if (value == 1) {
    System.out.println("Value was 1");
} else if (value == 2) {
    System.out.println("Value was 2");
} else {
    System.out.println("Was not 1 or 2");
}
```

Sa velikim brojem vrednosti ovakav kod postaje glomazan. Java zato nudi **switch naredbu**.

### 2.2 Sintaksa tradicionalne switch naredbe

```java
int switchValue = 1;
switch (switchValue) {
    case 1:
        System.out.println("Value was 1");
        break;
    case 2:
        System.out.println("Value was 2");
        break;
    default:
        System.out.println("Was not 1 or 2");
        break;
}
```

Elementi sintakse:

- **`switch (izraz)`** — u zagradama je vrednost koja se proverava, a zatim sledi kod blok `{ }`.
- **`case vrednost:`** — govori: "u slučaju da je promenljiva jednaka ovoj vrednosti, izvrši sledeći kod". Iza vrednosti ide **dvotačka (`:`)**, a ne tačka-zapeta.
- **`break;`** — prekida `switch` i nastavlja izvršavanje posle njega.
- **`default:`** — izvršava se ako nijedan `case` nije odgovarao; odgovara `else` grani.

`case 1` je ekvivalentno proveri `if (switchValue == 1)`, `case 2` odgovara `else if (switchValue == 2)`, a `default` odgovara `else`.

### 2.3 Kada koristiti switch, a kada if

Izbor je često stvar stila, ali postoji jasna razlika. **`if` je fleksibilniji**, jer svaki uslov može da proverava potpuno drugu promenljivu ili izraz. **`switch` je pogodan** kada se **ista promenljiva** poredi sa **više različitih vrednosti**.

### 2.4 Grupisanje više case oznaka

Ako više vrednosti treba da izvrši isti kod, `case` oznake se navode jedna za drugom:

```java
switch (switchValue) {
    case 1:
        System.out.println("Value was 1");
        break;
    case 2:
        System.out.println("Value was 2");
        break;
    case 3: case 4: case 5:
        System.out.println("Was a 3, a 4, or a 5");
        System.out.println("Actually it was a " + switchValue);
        break;
    default:
        System.out.println("Was not 1, 2, 3, 4, or 5");
        break;
}
```

### 2.5 Tipovi podataka koje switch podržava

`switch` radi samo sa ograničenim skupom tipova:

- `byte`, `short`, `int`, `char` i njihove wrapper klase,
- `String`,
- `enum` (obrađuje se u narednoj celini o objektno orijentisanom programiranju).

**Ne mogu** se koristiti `boolean`, `long`, `float` i `double` — pokušaj rezultuje greškom kompajlera.

### 2.6 Fall through — šta se dešava bez break-a

Kada se pronađe odgovarajući `case`, više se ne proveravaju ostali, ali se izvršava **sav kod od tog mesta nadalje**, sve do prvog `break`-a ili kraja `switch` bloka. Ako `break` izostane, izvršavanje **"propada"** u sledeće grane:

```java
int switchValue = 3;
switch (switchValue) {
    case 3: case 4: case 5:
        System.out.println("Was a 3, a 4, or a 5");
        // break;   <-- namerno izostavljen
    default:
        System.out.println("Was not 1, 2, 3, 4, or 5");
        break;
}
// ispis:
// Was a 3, a 4, or a 5
// Was not 1, 2, 3, 4, or 5   <-- neocekivano!
```

Po pravilu, `break` treba staviti na kraj koda svake grane, osim kada se fall through koristi namerno.

### 2.7 Poboljšani (enhanced) switch

IntelliJ prepoznaje tradicionalni `switch` i nudi opciju **"Replace with enhanced switch"**. Poboljšana sintaksa je standardna od **Jave 14**. Razlike:

- dvotačka posle `case` zamenjena je **strelicom `->`** (zvanom *switch expression arrow*),
- **nema `break`-a** i **fall through se nikada ne dešava**,
- više `case` oznaka zamenjeno je **listom vrednosti razdvojenih zarezom**.

```java
switch (switchValue) {
    case 1 -> System.out.println("Value was 1");
    case 2 -> System.out.println("Value was 2");
    case 3, 4, 5 -> {
        System.out.println("Was a 3, a 4, or a 5");
        System.out.println("Actually it was a " + switchValue);
    }
    default -> System.out.println("Was not 1, 2, 3, 4, or 5");
}
```

Ovaj kod je kraći, čitljiviji i ima više ugrađenih zaštita od grešaka. Tradicionalni `switch` je i dalje važno poznavati, jer se nalazi u kodu pisanom pre Jave 14, a ako kod mora da radi na starijim verzijama Jave, koristi se tradicionalna sintaksa.

### 2.8 Tradicionalni switch u metodi koja vraća vrednost

Pre poboljšanog `switch`-a, ako je trebalo da `switch` "vrati" vrednost, on se stavljao u metodu. Ovde se umesto `break`-a koristi `return`, koji izlazi i iz `switch`-a i iz metode:

```java
public static String getQuarter(String month) {
    switch (month) {
        case "JANUARY":
        case "FEBRUARY":
        case "MARCH":
            return "1st";
        case "APRIL":
        case "MAY":
        case "JUNE":
            return "2nd";
        case "JULY":
        case "AUGUST":
        case "SEPTEMBER":
            return "3rd";
        case "OCTOBER":
        case "NOVEMBER":
        case "DECEMBER":
            return "4th";
    }
    return "bad"; // ako mesec nije pronadjen
}
```

Ovde `switch` radi sa `String` vrednostima, a `default` nije neophodan jer izvršavanje, ako nema poklapanja, stiže do poslednje linije metode.

### 2.9 Switch izraz — poboljšani switch koji vraća vrednost

Poboljšani `switch` može biti **izraz**, što znači da se izračunava u **jednu vrednost** koja se može vratiti ili dodeliti promenljivoj:

```java
public static String getQuarter(String month) {
    return switch (month) {
        case "JANUARY", "FEBRUARY", "MARCH" -> "1st";
        case "APRIL", "MAY", "JUNE" -> "2nd";
        case "JULY", "AUGUST", "SEPTEMBER" -> "3rd";
        case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th";
        default -> "bad";
    };
}
```

Važne osobine switch izraza:

- desno od strelice nalazi se samo vrednost (npr. string literal), a ne naredba,
- ceo `switch` se završava tačka-zapetom jer je deo `return` izraza,
- **`default` je obavezan** u većini slučajeva (izuzetak je `enum`, obrađen kasnije). Bez njega dobija se greška "the switch expression does not cover all possible input values". Generalno je dobra praksa uvek imati `default`.

### 2.10 Kod blok i ključna reč yield

Ako u nekoj grani switch izraza treba obaviti dodatni posao pre vraćanja vrednosti, koristi se **kod blok**, a vrednost se vraća pomoću **`yield`**, a ne `return`:

```java
default -> {
    String badResponse = month + " is bad";
    yield badResponse;
}
```

`yield` je ključna reč uvedena za switch izraze. Potrebna je tek kada su ispunjena oba uslova: `switch` se koristi kao izraz koji vraća vrednost i grana koristi kod blok sa vitičastim zagradama. Ako grana samo vraća vrednost, dovoljno je navesti je desno od strelice.

---

## 3. Kodni primeri

### 3.1 Tradicionalni switch sa case, break i default

```java
int switchValue = 2;
switch (switchValue) {
    case 1:
        System.out.println("Value was 1");
        break;
    case 2:
        System.out.println("Value was 2");
        break;
    default:
        System.out.println("Was not 1 or 2");
        break;
}
// ispis: Value was 2
```

### 3.2 Grupisane case oznake

```java
int switchValue = 4;
switch (switchValue) {
    case 3: case 4: case 5:
        System.out.println("Was a 3, a 4, or a 5");
        break;
    default:
        System.out.println("Something else");
        break;
}
// ispis: Was a 3, a 4, or a 5
```

### 3.3 Fall through (bez break-a)

```java
int switchValue = 3;
switch (switchValue) {
    case 3:
        System.out.println("Case 3");
        // nema break, izvrsavanje "propada" dalje
    case 4:
        System.out.println("Case 4");
        break;
    default:
        System.out.println("Default");
        break;
}
// ispis:
// Case 3
// Case 4
```

### 3.4 Poboljšani switch (naredba sa strelicom)

```java
int switchValue = 3;
switch (switchValue) {
    case 1 -> System.out.println("Value was 1");
    case 2 -> System.out.println("Value was 2");
    case 3, 4, 5 -> System.out.println("Was a 3, a 4, or a 5");
    default -> System.out.println("Was not 1, 2, 3, 4, or 5");
}
// ispis: Was a 3, a 4, or a 5
```

### 3.5 Switch izraz sa yield

```java
public static String describeMonth(String month) {
    return switch (month) {
        case "JANUARY", "FEBRUARY", "MARCH" -> "1st";
        case "APRIL", "MAY", "JUNE" -> "2nd";
        default -> {
            String response = month + " is not a valid month";
            yield response;
        }
    };
}
```

### 3.6 Kompletan Java program

```java
public class Main {
    public static void main(String[] args) {
        int switchValue = 5;

        // Poboljsani switch kao naredba
        switch (switchValue) {
            case 1 -> System.out.println("Value was 1");
            case 2 -> System.out.println("Value was 2");
            case 3, 4, 5 -> {
                System.out.println("Was a 3, a 4, or a 5");
                System.out.println("Actually it was a " + switchValue);
            }
            default -> System.out.println("Was not 1, 2, 3, 4, or 5");
        }

        // Switch izraz koji vraca vrednost
        String month = "OCTOBER";
        System.out.println(month + " is in the " + getQuarter(month) + " quarter");

        String badMonth = "XYZ";
        System.out.println(badMonth + " -> " + getQuarter(badMonth));
    }

    public static String getQuarter(String month) {
        return switch (month) {
            case "JANUARY", "FEBRUARY", "MARCH" -> "1st";
            case "APRIL", "MAY", "JUNE" -> "2nd";
            case "JULY", "AUGUST", "SEPTEMBER" -> "3rd";
            case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th";
            default -> {
                String response = "bad month: " + month;
                yield response;
            }
        };
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **switch naredbu** kao pregledniju alternativu dugačkom `if-else if-else` lancu, kada se ista promenljiva poredi sa više vrednosti. Naučili smo ključne reči **`case`**, **`break`** i **`default`**, kao i da se više `case` oznaka može grupisati. Videli smo da `switch` podržava samo `byte`, `short`, `int`, `char` (i wrapper klase), `String` i `enum`, ali ne `boolean`, `long`, `float` i `double`. Objasnili smo **fall through**, odnosno izvršavanje koje "propada" u sledeće grane kada `break` izostane. Zatim smo upoznali **poboljšani switch** (od Jave 14) sa strelicom `->`, bez `break`-a i bez fall through-a, kao i **switch izraz** koji vraća vrednost, zahteva `default` i koristi **`yield`** kada grana ima kod blok.

### Zadatak za samostalan rad

1. Napišite tradicionalni `switch` koji na osnovu `int` promenljive `dan` (1 do 7) ispisuje naziv dana u nedelji, uz `default` granu za nevalidne vrednosti.
2. Namerno izostavite `break` u jednoj grani prethodnog zadatka, zabeležite (kao komentar) šta se ispisuje i objasnite fall through.
3. Napišite metodu `isWeekend(int dan)` koja vraća `boolean` koristeći poboljšani switch izraz sa listom vrednosti (`case 6, 7 -> true`).
4. Napišite metodu `getSeason(String month)` koja vraća godišnje doba koristeći switch izraz, sa `default` granom koja koristi kod blok i `yield`.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto sledeći kod ne može da se kompajlira i kako bi se mogao ispraviti: `switch (5.5) { case 1: break; }`.

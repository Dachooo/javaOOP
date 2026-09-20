# Lekcija 17: Vežbe sa switch naredbom — NATO alfabet i dani u nedelji

## Cilj lekcije

Nakon ove lekcije, moći ćete samostalno da primenite **tradicionalni switch** nad `char` promenljivom, da napišete **poboljšani switch izraz** čiji se rezultat dodeljuje promenljivoj, da jasno razlikujete kada je `break` potreban, a kada ne, i da isti zadatak rešite na dva načina — pomoću `switch`-a i pomoću `if-else if-else` lanca.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Tradicionalni switch** | `switch` sa dvotačkom posle `case` oznake; dozvoljava fall through, pa svaka grana treba `break`. |
| **Poboljšani switch** | `switch` sa strelicom `->` posle `case` oznake; nema `break`-a i nema fall through-a. |
| **Switch izraz** | Poboljšani `switch` čiji se rezultat dodeljuje promenljivoj ili vraća iz metode. |
| **char literal** | Jedan karakter u **jednostrukim** navodnicima (`'A'`), koji se može koristiti u `case` oznakama. |
| **default grana** | Izvršava se kada nijedan `case` ne odgovara; kod switch izraza je (uglavnom) obavezna. |
| **yield** | Vraća vrednost iz koda bloka unutar grane switch izraza. |

---

## 2. Detaljno objašnjenje

### 2.1 Podsetnik: tradicionalni nasuprot poboljšanom switch-u

Oblik `switch`-a prepoznaje se po tome šta stoji posle `case` oznake:

- **Dvotačka (`case 1:`)** — tradicionalni switch. Dozvoljava **fall through**, ne može se koristiti kao izraz, pa je u svakoj grani važno napisati **`break`**.
- **Strelica (`case 1 ->`)** — poboljšani switch. **`break` nije deo ove sintakse i ne treba ga koristiti.** Može biti izraz koji vraća vrednost.

Ako je vrednost switch izraza dodeljena promenljivoj, a grana koristi kod blok, vrednost se vraća pomoću **`yield`**.

### 2.2 Vežba 1: NATO alfabet (tradicionalni switch nad char-om)

**Zadatak:** kreirati `char` promenljivu i tradicionalnim `switch`-om ispisati NATO reč za slova od A do E. Za svako slovo ispisati poruku i uraditi `break`. Dodati `default` granu koja ispisuje da slovo nije pronađeno.

Ključne stvari u rešenju:

- `char` literal se piše u **jednostrukim navodnicima**: `char charValue = 'A';`
- `switch` proverava `charValue`, a svaka `case` oznaka koristi jednostruke navodnike: `case 'A':`
- Pošto se za svako slovo ispisuje **drugačija poruka**, ne grupišemo `case` oznake.
- Svaka grana se završava sa `break`, a `default` ispisuje slovo koje nije pronađeno.

```java
char charValue = 'A';
switch (charValue) {
    case 'A':
        System.out.println("A is able");
        break;
    case 'B':
        System.out.println("B is baker");
        break;
    case 'C':
        System.out.println("C is charlie");
        break;
    case 'D':
        System.out.println("D is dog");
        break;
    case 'E':
        System.out.println("E is easy");
        break;
    default:
        System.out.println("Letter " + charValue + " was not found in the switch");
        break;
}
```

Za `'A'` ispisuje se "A is able", za `'B'` "B is baker", a za `'X'` se izvršava `default` i ispisuje "Letter X was not found in the switch". Ovo je isti princip kao kod `int` vrednosti, samo se poredi `char`.

### 2.3 Vežba 2: dani u nedelji (poboljšani switch izraz)

**Zadatak:** napisati metodu `printDayOfWeek` koja prima `int day`, ali **ne vraća** vrednost (`void`). Unutar nje, poboljšanim `switch` izrazom dodeliti `String dayOfTheWeek` (0 = Sunday, 1 = Monday, ..., 6 = Saturday, sve ostalo = "Invalid Day"), a zatim ispisati i `day` i `dayOfTheWeek`. U `main` metodi pozvati metodu za vrednosti od 0 do 7.

Važni detalji:

- Metoda je `void`, ali sam **switch izraz vraća `String`** koji se dodeljuje lokalnoj promenljivoj.
- Pošto je `switch` deo dodele, iza zatvorene vitičaste zagrade ide **tačka-zapeta**.
- Bez `default` grane IntelliJ prijavljuje grešku **"switch expression does not cover all possible input values"**, jer je `default` kod switch izraza obavezan.
- Ako grana koristi kod blok, potrebno je koristiti `yield`. Blok se koristi samo kada treba obaviti dodatni posao pre vraćanja vrednosti, ali je i takav zapis validan.

```java
public static void printDayOfWeek(int day) {
    String dayOfTheWeek = switch (day) {
        case 0 -> "Sunday";
        case 1 -> "Monday";
        case 2 -> "Tuesday";
        case 3 -> "Wednesday";
        case 4 -> "Thursday";
        case 5 -> "Friday";
        case 6 -> "Saturday";
        default -> "Invalid Day";
    };
    System.out.println(day + " stands for " + dayOfTheWeek);
}
```

### 2.4 Bonus: isti zadatak pomoću if-else if-else

Isti izlaz može se dobiti i bez `switch`-a. Promenljiva `dayOfWeek` se odmah inicijalizuje na `"Invalid Day"`, pa `if-else if` lanac menja vrednost samo za validne dane:

```java
public static void printWeekDay(int day) {
    String dayOfWeek = "Invalid Day";

    if (day == 0) {
        dayOfWeek = "Sunday";
    } else if (day == 1) {
        dayOfWeek = "Monday";
    } else if (day == 2) {
        dayOfWeek = "Tuesday";
    } else if (day == 3) {
        dayOfWeek = "Wednesday";
    } else if (day == 4) {
        dayOfWeek = "Thursday";
    } else if (day == 5) {
        dayOfWeek = "Friday";
    } else if (day == 6) {
        dayOfWeek = "Saturday";
    }

    System.out.println(day + " stands for " + dayOfWeek);
}
```

Oba rešenja daju **potpuno isti izlaz**. Ovo pokazuje da gotovo svaki problem ima više ispravnih rešenja, a izbor između `switch`-a i `if-else` lanca često je stvar čitljivosti i stila. U ovom slučaju `switch` je kraći i pregledniji jer se uvek proverava ista promenljiva.

---

## 3. Kodni primeri

### 3.1 Tradicionalni switch nad char-om (kraća verzija sa jednim slovom)

```java
char letter = 'C';
switch (letter) {
    case 'A':
        System.out.println("A is able");
        break;
    case 'C':
        System.out.println("C is charlie");
        break;
    default:
        System.out.println("Letter " + letter + " was not found in the switch");
        break;
}
// ispis: C is charlie
```

### 3.2 Switch izraz sa kodom blokom i yield

```java
public static String dayName(int day) {
    return switch (day) {
        case 0 -> {
            String name = "Sunday";
            yield name;
        }
        case 1 -> "Monday";
        default -> "Invalid Day";
    };
}
```

### 3.3 Kompletan Java program sa oba rešenja

```java
public class Main {
    public static void main(String[] args) {
        // Vezba 1: NATO alfabet
        char charValue = 'B';
        switch (charValue) {
            case 'A':
                System.out.println("A is able");
                break;
            case 'B':
                System.out.println("B is baker");
                break;
            case 'C':
                System.out.println("C is charlie");
                break;
            case 'D':
                System.out.println("D is dog");
                break;
            case 'E':
                System.out.println("E is easy");
                break;
            default:
                System.out.println("Letter " + charValue + " was not found in the switch");
                break;
        }

        // Vezba 2: dani u nedelji, pozivi za vrednosti od 0 do 7
        for (int day = 0; day <= 7; day++) {
            printDayOfWeek(day);
        }
        printWeekDay(3);
    }

    public static void printDayOfWeek(int day) {
        String dayOfTheWeek = switch (day) {
            case 0 -> "Sunday";
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4 -> "Thursday";
            case 5 -> "Friday";
            case 6 -> "Saturday";
            default -> "Invalid Day";
        };
        System.out.println(day + " stands for " + dayOfTheWeek);
    }

    public static void printWeekDay(int day) {
        String dayOfWeek = "Invalid Day";
        if (day == 0) {
            dayOfWeek = "Sunday";
        } else if (day == 1) {
            dayOfWeek = "Monday";
        } else if (day == 2) {
            dayOfWeek = "Tuesday";
        } else if (day == 3) {
            dayOfWeek = "Wednesday";
        } else if (day == 4) {
            dayOfWeek = "Thursday";
        } else if (day == 5) {
            dayOfWeek = "Friday";
        } else if (day == 6) {
            dayOfWeek = "Saturday";
        }
        System.out.println(day + " stands for " + dayOfWeek);
    }
}
```

> **Napomena:** U kompletnom programu iznad koristi se `for` petlja radi kraćeg zapisa poziva. Petlje se detaljno obrađuju u narednim lekcijama, a u samom izazovu se metoda poziva osam puta, jednom za svaku vrednost od 0 do 7.

---

## 4. Rezime

U ovoj lekciji smo kroz dve vežbe uvežbali `switch`. U prvoj smo koristili **tradicionalni switch nad `char` promenljivom** (sa jednostrukim navodnicima u `case` oznakama, `break`-om u svakoj grani i `default` granom) da ispišemo NATO reči. U drugoj smo napisali **poboljšani switch izraz** čiji se rezultat dodeljuje `String` promenljivoj, uz obaveznu `default` granu i tačka-zapetu posle zatvorene vitičaste zagrade. Podsetili smo se da se tradicionalni switch prepoznaje po dvotački, a poboljšani po strelici `->`, i da se **`break` ne koristi** uz strelicu. Isti zadatak smo rešili i `if-else if-else` lancem, što pokazuje da za isti problem postoji više ispravnih rešenja.

### Zadatak za samostalan rad

1. Proširite NATO vežbu tako da pokriva slova od A do J (koristite tradicionalni `switch` i `break` u svakoj grani).
2. Napišite metodu `printMonthName(int month)` koja poboljšanim `switch` izrazom dodeljuje naziv meseca `String` promenljivoj (1 do 12, ostalo je "Invalid Month") i ispisuje rezultat.
3. Isti zadatak rešite i pomoću `if-else if-else` lanca u metodi `printMonthNameIf`, i uporedite čitljivost oba rešenja.
4. Napišite `switch` nad `char` promenljivom koji za samoglasnike (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`) ispisuje "samoglasnik", a za sve ostalo "suglasnik ili drugi karakter". Koristite grupisanje `case` oznaka.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto sledeći kod ne može da se kompajlira i kako se ispravlja: `String s = switch (day) { case 0 -> "Sunday"; case 1 -> "Monday"; };`

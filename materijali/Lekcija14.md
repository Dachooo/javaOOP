# Lekcija 14: Metode — deklaracija, parametri, argumenti i povratne vrednosti

## Cilj lekcije

Nakon ove lekcije, razumećete šta je **metoda** i kako rešava problem duplikacije koda iz prethodne lekcije, znaćete kako da **deklarišete** i **pozovete (invoke)** metodu, jasno ćete razlikovati **parametre** (definiciju u deklaraciji) od **argumenata** (stvarnih vrednosti pri pozivu), razumećete **povratnu vrednost (return)** metode i pravila koja je prate, i upoznaćete **potpis metode (method signature)** kao i strukturu `main` metode iz nove perspektive.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Metoda (method)** | Imenovan blok izvršnog koda koji se može pozvati (invoke/call) proizvoljan broj puta, čime se sprečava duplikacija koda. |
| **Pozivanje metode (invoking/calling)** | Izvršavanje koda metode navođenjem njenog imena i zagrada na mestu gde je potrebna. |
| **Parametar** | Promenljiva definisana u **deklaraciji** metode — određuje tip i ime podatka koji metoda očekuje da primi. |
| **Argument** | **Stvarna vrednost** (literal, promenljiva ili izraz) koja se šalje metodi prilikom poziva, a koja odgovara nekom parametru. |
| **Povratna vrednost (return value)** | Podatak koji metoda vraća pozivaocu, definisan tipom povratne vrednosti u deklaraciji (umesto `void`). |
| **return naredba** | Naredba koja vraća kontrolu (i, ako postoji, vrednost) pozivaocu metode. |
| **Potpis metode (method signature)** | Kombinacija imena metode i broja/tipova njenih parametara — jedinstveno identifikuje metodu unutar klase. |
| **Procedura** | Neformalni naziv za metodu koja ne vraća vrednost (`void`) — u Javi se termini "metoda" i "funkcija" najčešće koriste naizmenično. |

---

## 2. Detaljno objašnjenje

### 2.1 Šta je metoda i zašto je korisna

**Metoda** je imenovan blok izvršnog koda koji se može **pozvati (invoke)** proizvoljan broj puta, sa mogućnošću da mu se prosledi promenljiv broj vrednosti (**argumenata**). Prema zvaničnoj definiciji: *"metoda deklariše izvršni kod koji se može pozvati, prosleđujući fiksan broj vrednosti kao argumente."*

Glavne prednosti metoda:

- **Smanjuju duplikaciju koda** — kod se piše jednom, na jednom mestu, i poziva se sa više mesta u programu.
- Mogu se izvršiti **više puta sa različitim rezultatima**, u zavisnosti od podataka koji im se prosleđuju kao argumenti.

Zapravo, `main` metoda koju smo koristili od početka kursa **jeste metoda** — ceo njen kod blok predstavlja telo metode koje se izvršava kada Java pokrene program.

### 2.2 Deklaracija jednostavne metode

Najjednostavniji oblik metode ne prima nikakve podatke i ne vraća ništa:

```java
public static void calculateScore() {
    // telo metode
}
```

- **`public`** — modifikator pristupa, omogućava da metoda bude dostupna spolja.
- **`static`** — omogućava da se metoda poziva direktno preko imena klase (detaljnije kasnije).
- **`void`** — označava da metoda **ne vraća** nikakav podatak.
- **`calculateScore`** — ime metode; preporučuje se **lower camel case** stil imenovanja, isto kao za promenljive.
- **`()`** — prazne zagrade znače da metoda **ne prima parametre**.
- Sadržaj između `{` i `}` je **telo (kod blok) metode**.

**Važno pravilo:** metoda se mora definisati **unutar tela klase**, ali **van tela** bilo koje druge metode — metode se ne mogu ugnežđavati jedna u drugu.

### 2.3 Pozivanje (invoking) metode

Da bi se kod metode izvršio, metoda se mora **pozvati (invoke)** — navođenjem njenog imena, zagrada i tačka-zapete, na mestu gde treba da se izvrši:

```java
calculateScore();
```

IntelliJ pruža koristan vizuelni signal: dok se metoda **ne koristi nigde** u kodu, njeno ime u deklaraciji prikazuje se **svetlo sivom bojom**, uz napomenu "method is never used". Čim se metoda **pozove** bar jednom, boja se vraća na normalnu, a IntelliJ prikazuje broj upotreba (npr. "1 usage"). Ovo je koristan pokazatelj: metoda koja se nigde ne koristi verovatno se bezbedno može obrisati, dok metoda koja se koristi zahteva oprez pri izmeni njenog koda, jer bi mogla uticati na sav kod koji je poziva.

### 2.4 Parametri — prosleđivanje podataka metodi

Da bi metoda mogla da radi sa **različitim podacima** pri svakom pozivu (umesto da ima fiksne, "hardkodovane" vrednosti unutar sebe), koriste se **parametri**:

```java
public static void calculateScore(boolean gameOver, int score, int levelCompleted, int bonus) {
    // telo metode moze da koristi gameOver, score, levelCompleted i bonus
}
```

Svaki parametar se deklariše kao **tip + ime**, odvojen zarezom od sledećeg. Java **automatski kreira promenljive** sa datim imenima i tipovima na osnovu deklarisanih parametara — nije potrebno (i **nije dozvoljeno**) ponovo ih deklarisati unutar tela metode, jer bi to predstavljalo grešku ponovne deklaracije.

### 2.5 Argumenti — stvarne vrednosti pri pozivu

**Parametar** je deo **deklaracije** metode (tip + ime), dok je **argument** stvarna **vrednost** koja se šalje pri **pozivu** metode. Kada se metoda poziva, argumenti moraju odgovarati parametrima po **broju, tipu i redosledu**:

```java
calculateScore(true, 800, 5, 100); // argumenti: literali
```

Argumenti mogu biti literali, promenljive, ili čak izrazi — bitno je samo da njihov tip odgovara odgovarajućem parametru:

```java
boolean gameOver = true;
int score = 800;
int levelCompleted = 5;
int bonus = 100;

calculateScore(gameOver, score, levelCompleted, bonus); // argumenti: promenljive
```

**Strogo pravilo:** broj argumenata mora **tačno odgovarati** broju deklarisanih parametara, a njihov redosled i tip moraju se **tačno poklapati** sa redosledom i tipom parametara u deklaraciji. Java **ne podržava podrazumevane (default) vrednosti parametara** — ako metoda ima četiri parametra, poziv mora imati tačno četiri odgovarajuća argumenta, inače dolazi do greške kompajlera.

### 2.6 Povratna vrednost i return naredba

Metoda može, umesto `void`, biti deklarisana da **vraća vrednost** određenog tipa — ovaj tip se piše **umesto `void`**, ispred imena metode:

```java
public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus) {
    int finalScore = score;
    if (gameOver) {
        finalScore += levelCompleted * bonus;
    }
    return finalScore; // vraca int vrednost pozivaocu
}
```

**`return`** naredba vraća kontrolu (i, ako je definisano, vrednost) nazad pozivaocu metode. Pravila:

- Ako metoda **ne vraća** vrednost (`void`), `return` naredba **nije obavezna** — izvršavanje se automatski vraća pozivaocu nakon poslednje linije metode. Ipak, `return;` (bez vrednosti) se može koristiti i u `void` metodi, da bi se **prevremeno prekinulo** izvršavanje metode pre kraja njenog tela.
- Ako metoda **vraća** vrednost (tip različit od `void`), **mora** postojati `return` naredba sa odgovarajućom vrednošću na **svakoj mogućoj putanji izvršavanja** kroz metodu — u suprotnom, kod se **neće kompajlirati**.

### 2.7 Poziv metode kao izraz naspram poziva kao naredbe

Poziv metode koja **vraća** vrednost može se koristiti na dva načina:

- **Kao samostalna naredba** — rezultat se jednostavno **ignoriše** (nije greška, samo se ne koristi):

  ```java
  calculateScore(true, 10000, 8, 200); // rezultat se ignorise
  ```

- **Kao deo izraza** — rezultat se dodeljuje promenljivoj ili koristi direktno, npr. unutar `System.out.println`:

  ```java
  int highScore = calculateScore(true, 800, 5, 100); // rezultat dodeljen promenljivoj
  System.out.println("Score: " + calculateScore(true, 10000, 8, 200)); // rezultat koriscen direktno u izrazu
  ```

Ovo je slično prethodno naučenim skraćenim (compound) operatorima, koji se takođe mogu ponašati i kao naredba i kao deo izraza.

### 2.8 Rešavanje problema iz prethodne lekcije: jedna metoda umesto duplikacije

Zahvaljujući parametrima i povratnoj vrednosti, isti kod koji je ranije bio **dupliran** u dva slična `if` bloka sada može biti **napisan jednom** u vidu metode, a pozvan više puta sa različitim argumentima:

```java
int highScore1 = calculateScore(true, 800, 5, 100);
int highScore2 = calculateScore(true, 10000, 8, 200);
```

Ako je kasnije potrebno izmeniti formulu izračunavanja (npr. dodati bonus od 1000 poena), ta izmena se radi **samo jednom, unutar metode** — automatski se primenjuje na **sve pozive** metode, čime se u potpunosti eliminiše rizik od zaboravljene izmene na nekom od dupliranih mesta.

### 2.9 Metoda sa više izlaznih tačaka (return u više grana)

Kada metoda vraća vrednost, **svaka moguća putanja** kroz kod mora se završiti sa `return`. Sledeći kod se **neće kompajlirati**, jer ne pokriva slučaj kada je `age` manje od 21:

```java
public static boolean canVote(int age) {
    if (age >= 21) {
        return true;
    }
    // GRESKA: nedostaje return za slucaj kada age < 21
}
```

Ispravka — pokriti **obe** grane sa `return`:

```java
public static boolean canVote(int age) {
    if (age >= 21) {
        return true;
    }
    return false; // pokriva sve preostale slucajeve
}
```

**Preporučena praksa** je definisati podrazumevanu vrednost rezultata na početku metode i imati **jednu jedinu** `return` naredbu na kraju:

```java
public static boolean canVote(int age) {
    boolean result = false;
    if (age >= 21) {
        result = true;
    }
    return result; // jedina izlazna tacka iz metode
}
```

### 2.10 Potpis metode (method signature) i main metoda

**Potpis metode (method signature)** čine njeno ime i broj/tipovi njenih parametara — ova kombinacija jedinstveno identifikuje metodu unutar klase. To znači da je moguće imati **više metoda sa istim imenom**, sve dok se razlikuju po broju ili tipovima parametara (ovo se naziva **preopterećenje metoda — method overloading**, obrađuje se detaljnije kasnije u kursu).

Sada, sa punim razumevanjem metoda, možemo ponovo analizirati deklaraciju `main` metode:

```java
public static void main(String[] args) {
    ...
}
```

- `public static` — modifikatori, neophodni da bi JVM (Java Virtual Machine) prepoznao ovu metodu kao ulaznu tačku programa.
- `void` — `main` ne vraća nikakvu vrednost.
- `main` — ime mora biti **tačno ovo, malim slovima** — ako bi se, na primer, napisalo `Main` sa velikim M, kod bi i dalje kompajlirao, ali JVM ga **ne bi prepoznao** kao ulaznu tačku programa.
- `(String[] args)` — jedan parametar, tip **niz stringova (String array)**, koji omogućava prosleđivanje argumenata komandne linije programu prilikom pokretanja (nizovi se detaljno obrađuju kasnije u kursu).

---

## 3. Kodni primeri

### 3.1 Najjednostavnija metoda bez parametara i bez povratne vrednosti

```java
public static void printWelcomeMessage() {
    System.out.println("Dobrodosli u program!");
}

// poziv:
printWelcomeMessage();
```

### 3.2 Metoda sa parametrima, bez povratne vrednosti

```java
public static void calculateScore(boolean gameOver, int score, int levelCompleted, int bonus) {
    int finalScore = score;
    if (gameOver) {
        finalScore += levelCompleted * bonus;
    }
    System.out.println("Your final score was " + finalScore);
}

// pozivi sa razlicitim argumentima:
calculateScore(true, 800, 5, 100);    // Your final score was 1300
calculateScore(true, 10000, 8, 200);  // Your final score was 11600
```

### 3.3 Poziv sa mešavinom literala i promenljivih kao argumenata

```java
boolean gameOver = true;
int score = 800;
calculateScore(gameOver, score, 5, 100); // radi - redosled i tipovi se poklapaju
```

### 3.4 Metoda koja vraća vrednost

```java
public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus) {
    int finalScore = score;
    if (gameOver) {
        finalScore += levelCompleted * bonus;
    }
    return finalScore;
}

int highScore = calculateScore(true, 800, 5, 100);
System.out.println("High score: " + highScore); // 1300
```

### 3.5 Poziv metode direktno unutar izraza

```java
System.out.println("Drugi rezultat: " + calculateScore(true, 10000, 8, 200));
// ispis: Drugi rezultat: 11600
```

### 3.6 Metoda sa više izlaznih tačaka (ispravno pokrivene sve grane)

```java
public static boolean canVote(int age) {
    boolean result = false;
    if (age >= 21) {
        result = true;
    }
    return result;
}

System.out.println(canVote(25)); // true
System.out.println(canVote(18)); // false
```

### 3.7 Kompletan Java program koji objedinjuje primere

```java
public class Main {
    public static void main(String[] args) {
        int firstScore = calculateScore(true, 800, 5, 100);
        int secondScore = calculateScore(true, 10000, 8, 200);

        System.out.println("Prvi rezultat: " + firstScore);   // 1300
        System.out.println("Drugi rezultat: " + secondScore); // 11600

        System.out.println("Moze glasati (25): " + canVote(25)); // true
        System.out.println("Moze glasati (18): " + canVote(18)); // false
    }

    public static int calculateScore(boolean gameOver, int score, int levelCompleted, int bonus) {
        int finalScore = score;
        if (gameOver) {
            finalScore += levelCompleted * bonus;
        }
        return finalScore;
    }

    public static boolean canVote(int age) {
        boolean result = false;
        if (age >= 21) {
            result = true;
        }
        return result;
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **metode** kao rešenje za problem duplikacije koda iz prethodne lekcije — kod se piše jednom, unutar imenovanog bloka, i **poziva (invoke)** proizvoljan broj puta. Naučili smo strukturu deklaracije metode (`public static tip ime(parametri) { ... }`), i jasno razgraničili **parametre** (definicija tipa i imena u deklaraciji) od **argumenata** (stvarne vrednosti prosleđene pri pozivu) — uz strogo pravilo da se broj, tip i redosled argumenata moraju tačno poklapati sa parametrima. Obradili smo **povratnu vrednost** i `return` naredbu, uključujući pravilo da metoda sa ne-`void` tipom mora imati `return` na svakoj mogućoj putanji kroz kod, kao i preporučenu praksu jedne izlazne tačke na kraju metode. Videli smo da poziv metode koja vraća vrednost može biti korišćen i kao samostalna naredba (rezultat se ignoriše) i kao deo izraza. Na kraju smo definisali **potpis metode (method signature)** i ponovo analizirali `main` metodu u svetlu novostečenog znanja o metodama.

### Zadatak za samostalan rad

1. Napišite metodu `isEven` koja prima jedan `int` parametar i vraća `boolean` — `true` ako je broj paran, `false` ako je neparan. Pozovite je nekoliko puta sa različitim brojevima i ispišite rezultate.
2. Napišite metodu `celsiusToFahrenheit` koja prima `double` parametar (temperatura u Celzijusima) i vraća `double` (temperatura u Farenhajtima), po formuli `F = C * 9/5 + 32`.
3. Napišite metodu bez parametara i bez povratne vrednosti (`void`) koja ispisuje jednostavnu poruku dobrodošlice, i pozovite je iz `main` metode.
4. Namerno napišite metodu sa ne-`void` povratnim tipom kojoj nedostaje `return` na jednoj od grana `if-else`, zabeležite (kao komentar) tačnu grešku koju IntelliJ prijavljuje, a zatim je ispravite.
5. **Bonus:** Napišite dve metode sa istim imenom (`printInfo`), ali sa različitim brojem/tipom parametara (npr. jedna prima `String`, druga prima `int`), i objasnite (kao komentar) zašto je ovo dozvoljeno — povezujući to sa pojmom potpisa metode (method signature) i najavom preopterećenja metoda (method overloading).

# Lekcija 15: Preopterećenje metoda (method overloading)

## Cilj lekcije

Nakon ove lekcije, razumećete šta je **preopterećenje metoda (method overloading)**, znaćete šta tačno čini **potpis metode (method signature)** i zašto je on ključan za ispravno preopterećenje, moći ćete da prepoznate validne i nevalidne preopterećene metode, znaćete da preopterećenjem **simulirate podrazumevane vrednosti parametara** (koje Java ne podržava direktno), i naučićete zašto je dobra praksa da jedna preopterećena metoda poziva drugu radi **centralizacije logike**.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Preopterećenje metoda (method overloading)** | Postojanje više metoda sa **istim imenom** u istoj klasi, ali sa **različitim parametrima**. |
| **Potpis metode (method signature)** | Ime metode plus **broj, tipovi i redosled** njenih parametara — jedinstveno identifikuje metodu u klasi. |
| **Razrešavanje poziva (method resolution)** | Postupak kojim kompajler, na osnovu prosleđenih argumenata, bira koju od preopterećenih metoda treba izvršiti. |
| **Povratni tip** | Tip vrednosti koju metoda vraća — **nije** deo potpisa metode. |
| **Ime parametra** | Naziv parametra u deklaraciji — **nije** deo potpisa metode. |
| **Centralizacija logike** | Praksa da se formula ili izračunavanje napiše na jednom mestu, a ostale preopterećene metode je samo pozivaju. |

---

## 2. Detaljno objašnjenje

### 2.1 Šta je preopterećenje metoda

**Preopterećenje metoda** postoji kada klasa ima **više metoda sa istim imenom**, ali sa **različito deklarisanim parametrima**. Pozivaoc metode ne mora da brine koju verziju poziva — **Java sama određuje** koju metodu treba izvršiti, na osnovu **argumenata** prosleđenih pri pozivu.

Pozivaocu izgleda kao da metoda prima promenljiv skup argumenata, ali zapravo postoji **više odvojenih metoda** sa istim imenom i različitim skupovima parametara.

### 2.2 Potpis metode — šta ga čini jedinstvenim

**Potpis metode (method signature)** čine:

- **ime** metode,
- **broj** parametara,
- **tipovi** parametara,
- **redosled** kojim su parametri deklarisani.

Ono što **nije** deo potpisa:

- **povratni tip (return type)**,
- **imena parametara**.

Jedinstven potpis je ono što kompajleru omogućava da utvrdi da li je metoda ispravno preopterećena.

### 2.3 Validno preopterećenje

Sve sledeće metode imaju isto ime, ali različite potpise, pa su **validno preopterećene**:

```java
public static void doSomething(int parameterA) { }                 // jedan int
public static void doSomething(float parameterA) { }               // jedan float (drugi tip)
public static void doSomething(int parameterA, float parameterB) { } // dva parametra
public static void doSomething(float parameterA, int parameterB) { } // isti tipovi, drugi redosled
public static void doSomething(int a, int b, int c) { }            // tri parametra
```

Primetite da je čak i **samo promena redosleda** istih tipova dovoljna da potpis postane jedinstven.

### 2.4 Nevalidno preopterećenje

Sledeće deklaracije, ako se nađu u istoj klasi kao `doSomething(int parameterA)`, izazivaju **grešku kompajlera**:

```java
public static void doSomething(int parameterB) { }  // GRESKA: razlikuje se samo ime parametra
public static int doSomething(int parameterA) { return 0; } // GRESKA: razlikuje se samo povratni tip
```

Razlog: ime parametra i povratni tip nisu deo potpisa, pa Java ove metode vidi kao **identične**. IntelliJ prijavljuje poruku poput **"method is already defined in class"**.

### 2.5 Preopterećenje korak po korak

Krenimo od metode koja prima ime igrača i rezultat, ispisuje poruku i vraća rezultat pomnožen sa 1000:

```java
public static int calculateScore(String playerName, int score) {
    System.out.println("Player " + playerName + " scored " + score + " points");
    return score * 1000;
}
```

Ako pokušamo da kopiramo ovu metodu i zalepimo je ispod, IntelliJ odmah prijavljuje grešku jer je potpis **identičan**. Dva neispravna "rešenja":

- dodavanje slova (npr. `calculateScores`) daje **potpuno novu metodu**, a ne preopterećenje,
- promena samo povratnog tipa ili imena parametra ne pomaže.

Ispravno je promeniti **broj ili tipove parametara**, na primer izbaciti prvi parametar:

```java
public static int calculateScore(int score) {
    System.out.println("Unnamed player scored " + score + " points");
    return score * 1000;
}
```

Sada obe metode postoje istovremeno. Java bira koju će pozvati na osnovu argumenata:

```java
calculateScore("Tim", 500); // poziva verziju (String, int)
calculateScore(75);         // poziva verziju (int)
```

Ako pokušamo poziv za koji ne postoji odgovarajuća verzija, dobijamo grešku:

- `calculateScore(100, 100)` — greška: **"Required type String, provided int"**, jer ne postoji verzija `(int, int)`,
- `calculateScore()` — greška **"Cannot resolve method"**, dok ne definišemo verziju bez parametara.

Verzija bez parametara može se dodati na isti način:

```java
public static int calculateScore() {
    System.out.println("No player name, no player score");
    return 0;
}
```

### 2.6 Simuliranje podrazumevanih vrednosti parametara

Neki jezici dozvoljavaju da se u deklaraciji metode zada **podrazumevana vrednost** parametra. **Java to ne podržava**, ali se sličan efekat postiže preopterećenjem: kraća verzija metode poziva dužu, prosleđujući podrazumevanu vrednost.

```java
public static int calculateScore(String playerName, int score) {
    System.out.println("Player " + playerName + " scored " + score + " points");
    return score * 1000;
}

public static int calculateScore(int score) {
    return calculateScore("Anonymous", score); // podrazumevano ime
}
```

Pozivaocu izgleda kao da je ime igrača opcioni parametar:

```java
System.out.println(calculateScore("Tim", 500));
System.out.println(calculateScore(75)); // koristi "Anonymous"
```

### 2.7 Centralizacija logike — jedna preopterećena metoda poziva drugu

U izazovu iz lekcije potrebno je napraviti dve metode `convertToCentimeters`:

- prva prima **inče** (`int`) i vraća centimetre (`double`), po formuli `1 inč = 2.54 cm`,
- druga prima **stope i inče** (dva `int`-a), pretvara ih u ukupne inče (`1 stopa = 12 inča`) i **poziva prvu metodu**.

Prvo, kraće rešenje u jednom `return` izrazu:

```java
public static double convertToCentimeters(int inches) {
    return inches * 2.54;
}

public static double convertToCentimeters(int feet, int inches) {
    return convertToCentimeters((feet * 12) + inches);
}
```

Isto rešenje, ali čitljivije, sa lokalnim promenljivama:

```java
public static double convertToCentimeters(int feet, int inches) {
    int feetToInches = feet * 12;
    int totalInches = feetToInches + inches;
    double result = convertToCentimeters(totalInches);
    return result;
}
```

Iako druga verzija ima više linija, znatno je razumljivija drugima (i vama kasnije), a lokalne promenljive se automatski oslobađaju iz memorije po završetku metode. Ovo je stvar stila, ali **čitljiv kod smanjuje rizik od grešaka**.

Zašto je dobro da druga metoda poziva prvu? Formula za pretvaranje inča u centimetre postoji **na jednom mestu**. Ako se ikada promeni, dovoljno je izmeniti jednu metodu, a sve preopterećene verzije automatski dobijaju ispravno ponašanje — isti princip kao kod rešavanja duplikacije koda iz ranijih lekcija.

> **Napomena:** Java pri ispisu `double` vrednosti izostavlja završne nule, pa se rezultat `172.72` ispisuje bez suvišnih decimala.

---

## 3. Kodni primeri

### 3.1 Preopterećene metode calculateScore

```java
public static int calculateScore(String playerName, int score) {
    System.out.println("Player " + playerName + " scored " + score + " points");
    return score * 1000;
}

public static int calculateScore(int score) {
    return calculateScore("Anonymous", score);
}

public static int calculateScore() {
    System.out.println("No player name, no player score");
    return 0;
}
```

### 3.2 Pozivi preopterećenih metoda

```java
int newScore = calculateScore("Tim", 500);
System.out.println("New score is " + newScore); // 500000

calculateScore(75);  // koristi verziju (int)
calculateScore();    // koristi verziju bez parametara
```

### 3.3 Greške pri pogrešnim pozivima (samo ilustracija)

```java
// calculateScore(100, 100);   // GRESKA: Required type String, provided int
// calculateScore("Tim");      // GRESKA: ne postoji verzija sa samo jednim String parametrom
```

### 3.4 Nevalidno preopterećenje — isti potpis

```java
public static void doSomething(int parameterA) { }

// public static void doSomething(int parameterB) { }       // GRESKA: samo ime parametra je drugačije
// public static int doSomething(int parameterA) { return 0; } // GRESKA: samo povratni tip je drugačiji
```

### 3.5 Kompletan Java program — izazov sa konverzijom u centimetre

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("5 ft 8 in = " + convertToCentimeters(5, 8) + " cm");   // 172.72
        System.out.println("68 in = " + convertToCentimeters(68) + " cm");         // 172.72
    }

    public static double convertToCentimeters(int inches) {
        return inches * 2.54;
    }

    public static double convertToCentimeters(int feet, int inches) {
        int feetToInches = feet * 12;
        int totalInches = feetToInches + inches;
        double result = convertToCentimeters(totalInches); // poziv preopterecene metode
        return result;
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **preopterećenje metoda** — više metoda sa istim imenom, ali različitim parametrima, gde Java na osnovu prosleđenih argumenata sama bira pravu verziju. Naučili smo da **potpis metode** čine ime, broj, tipovi i redosled parametara, dok **povratni tip i imena parametara nisu deo potpisa**, pa njihova promena ne daje validno preopterećenje. Videli smo kako izgledaju tipične greške ("already defined", "Required type String, provided int", "Cannot resolve method"). Pokazali smo kako se preopterećenjem **simuliraju podrazumevane vrednosti parametara**, koje Java ne podržava direktno, i zašto je korisno da jedna preopterećena metoda poziva drugu, čime se logika **centralizuje** na jednom mestu, a kod ostaje konzistentan i lak za održavanje.

### Zadatak za samostalan rad

1. Napišite tri preopterećene metode `printInfo`: jednu koja prima `String`, jednu koja prima `int` i jednu koja prima `String` i `int`. Pozovite sve tri iz `main` metode.
2. Napišite metodu `area` koja prima dva `double` parametra (dužina i širina pravougaonika), a zatim preopterećenu verziju koja prima samo jedan `double` (stranica kvadrata) i poziva prvu.
3. Namerno napišite dve metode sa istim imenom i istim tipovima parametara, a različitim povratnim tipom, i zabeležite (kao komentar) tačnu grešku koju IntelliJ prijavljuje.
4. Simulirajte podrazumevanu vrednost: napišite metodu `greet(String name, String greeting)` i preopterećenu `greet(String name)` koja koristi podrazumevani pozdrav `"Zdravo"`.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto se `doSomething(int a, float b)` i `doSomething(float a, int b)` smatraju različitim metodama, iako imaju iste tipove parametara.

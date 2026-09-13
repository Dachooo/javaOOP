# Lekcija 5: Float i double — preciznost decimalnih (realnih) brojeva

## Cilj lekcije

Nakon ove lekcije, razumećete razliku između **float** i **double** primitivnih tipova u Javi, znaćete zašto je **double** podrazumevani tip za realne brojeve, naučićete kako sufiksi `F` i `D` utiču na tip numeričkog literala, i shvatićete zašto se kod celobrojnog i decimalnog deljenja dobijaju različiti rezultati u zavisnosti od tipova operanada.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Floating-point (realan) broj** | Broj sa decimalnim zapisom (razlomljenim delom), za razliku od celih (whole) brojeva. |
| **float** | Primitivni tip za realne brojeve, širine 32 bita (4 bajta), manje preciznosti. |
| **double** | Primitivni tip za realne brojeve, širine 64 bita (8 bajtova), veće preciznosti — **podrazumevani tip** za decimalne literale u Javi. |
| **Preciznost (precision)** | Format i količina prostora koju tip zauzima, odnosno koliko tačno tip može predstaviti realan broj. |
| **Naučna notacija (scientific notation)** | Zapis vrlo velikih ili vrlo malih brojeva u obliku `E` praćenog eksponentom (npr. `1.4E-45` znači 1.4 × 10⁻⁴⁵). |
| **Sufiks `F`/`f`** | Obavezan sufiks koji označava da je numerički literal tipa `float`. |
| **Sufiks `D`/`d`** | Opcioni sufiks koji označava da je numerički literal tipa `double` (opcioni jer je `double` podrazumevani tip). |
| **Celobrojno deljenje** | Deljenje dva cela broja (npr. `int`) čiji rezultat odbacuje razlomljeni deo (trunkacija), a ne zaokružuje. |
| **BigDecimal** | Klasa iz Java biblioteke namenjena apsolutno preciznim (egzaktnim) izračunavanjima, za razliku od `float`/`double`. |

---

## 2. Detaljno objašnjenje

### 2.1 Float i double — širina i preciznost

Za razliku od celih brojeva, **floating-point brojevi** imaju razlomljeni deo koji se zapisuje decimalnom tačkom. Java ima dva primitivna tipa za ovakve brojeve:

| Tip | Širina | Približan opseg |
|---|---|---|
| `float` | 32 bita (4 bajta) | otprilike od `1.4E-45` do `3.4E38` |
| `double` | 64 bita (8 bajtova) | mnogo širi i precizniji opseg od `float`-a |

**`double` je Java-in podrazumevani tip za bilo koji decimalni (realan) broj.** Zbog dvostruko veće širine u odnosu na `float`, `double` može da predstavi i mnogo manje i mnogo veće decimalne vrednosti, uz veću preciznost — zato se naziva "duplom preciznošću" (*double precision*).

> **Napomena o naučnoj notaciji:** granične vrednosti ovih tipova prikazuju se u naučnoj notaciji, npr. `1.4E-45`, što se čita kao "1.4 puta 10 na stepen -45". Pokušaj da se minimalna vrednost `double`-a zapiše u običnom decimalnom obliku bi zahtevao ogroman broj nula iza decimalne tačke.

### 2.2 Sufiksi F i D kod numeričkih literala

Java svaki numerički literal sa decimalnom tačkom automatski tumači kao **`double`**, osim ako je drugačije naznačeno sufiksom:

- Sufiks **`D`/`d`** eksplicitno označava `double` literal, ali je **opcioni**, jer je `double` već podrazumevani tip.
- Sufiks **`F`/`f`** eksplicitno označava `float` literal, i **obavezan je** svaki put kada se decimalni literal dodeljuje promenljivoj tipa `float`.

Ovo je analogno sufiksu `L` kod `long` literala iz prethodne lekcije — razlika je što je `L` opcioni (jer je `int` podrazumevani tip za cele brojeve, pa treba nešto da eksplicitno "podigne" literal na `long`), dok je `F` obavezan (jer treba "spustiti" podrazumevani `double` literal na `float`).

Ako se ceo broj (bez decimalne tačke), npr. `5`, dodeli `float` ili `double` promenljivoj, sufiks nije neophodan — Java automatski proširuje celobrojni literal u odgovarajući realan tip:

```java
float myFloatValue = 5;   // radi i bez sufiksa - ceo broj se sirok u float
double myDoubleValue = 5; // radi i bez sufiksa
```

Međutim, čim se u literalu pojavi decimalna tačka, situacija se menja.

### 2.3 Zašto float bez sufiksa F izaziva grešku

Ako se decimalni literal (npr. `5.25`) dodeli `float` promenljivoj **bez** sufiksa `F`, dolazi do greške kompajlera:

```java
float myOtherFloatValue = 5.25; // GRESKA: incompatible types: possible lossy conversion from double to float
```

Razlog je što Java **svaki decimalni literal po podrazumevanju tumači kao `double`** — dakle, `5.25` je tipa `double`, a pokušaj da se `double` vrednost dodeli `float` promenljivoj predstavlja **sužavajuću konverziju** (double je precizniji/širi od float-a), što kompajler ne dozvoljava automatski, isto kao što ne dozvoljava automatsku dodelu `int` vrednosti `byte` promenljivoj.

Ovaj problem se može rešiti na dva načina:

1. **Casting** — eksplicitno konvertovati `double` literal u `float`:

   ```java
   float myOtherFloatValue = (float) 5.25;
   ```

2. **Sufiks F** (preporučeni, uobičajeniji način) — direktno označiti literal kao `float`:

   ```java
   float myOtherFloatValue = 5.25F;
   ```

Iako oba pristupa rade, korišćenje sufiksa `F` je jasnije i kraće, pa je to uobičajena praksa među programerima. Ova greška je čest izvor "trik pitanja" na ispitima (npr. Oracle sertifikacija), jer kôd izgleda ispravno na prvi pogled, a zapravo ne kompajlira.

### 2.4 Zašto se preporučuje double umesto float

Iako `float` zauzima manje memorije, **`double` se preporučuje kao podrazumevani izbor** za realne brojeve u Javi, iz nekoliko razloga:

1. Na mnogim modernim procesorima, `double` se **brže obrađuje** od `float`-a na hardverskom nivou.
2. Java standardne biblioteke (npr. matematičke funkcije) uglavnom rade sa `double` vrednostima i vraćaju rezultate tipa `double`.
3. Moderni računari imaju dovoljno memorije, pa ušteda prostora korišćenjem `float`-a retko predstavlja stvarnu prednost.
4. `double` pruža veću preciznost i širi opseg vrednosti.

Zbog svega ovoga, `float` se u praksi retko koristi — `double` je podrazumevani i preporučeni izbor za rad sa realnim brojevima.

### 2.5 Deljenje: razlika između celobrojnog i decimalnog rezultata

Tip rezultata aritmetičke operacije zavisi od tipova operanada koji u njoj učestvuju:

- **Deljenje dva cela broja** (npr. dva `int`-a) daje **celobrojni rezultat** — razlomljeni deo se **odbacuje (trunkira)**, a ne zaokružuje:

  ```java
  int result = 5 / 2; // rezultat je 2, a ne 2.5 - decimalni deo je odbacen
  ```

- **Deljenje dva `float`-a ili dva `double`-a** daje decimalni rezultat sa razlomljenim delom:

  ```java
  float result = 5F / 2F;   // rezultat je 2.5
  double result2 = 5D / 2D; // rezultat je 2.5
  ```

- **Ako je makar jedan od operanada `double`**, ceo izraz se tretira kao `double`, čak i ako je drugi operand `float` ili ceo broj — a rezultat tipa `double` se **ne može** dodeliti `float` promenljivoj bez castinga:

  ```java
  double result = 5.00 / 3F; // rezultat je double (jer je 5.00 double), radi
  // float result2 = 5.00 / 3F; // GRESKA: rezultat je double, ne moze direktno u float
  ```

Ova pravila su ista logika kao kod celih brojeva iz prethodne lekcije (podrazumevani `int` tip izraza) — samo što se ovde "širi" tip u lancu `int → float → double`, i uvek pobeđuje širi/precizniji tip prisutan u izrazu.

### 2.6 Podvlake (underscore) u decimalnim literalima i granice preciznosti

Kao i kod celih brojeva, i u decimalnim literalima se mogu koristiti **donje crte (underscore)** radi bolje čitljivosti, i pre i posle decimalne tačke:

```java
double anotherNumber = 3_000_000.456_890D;
```

Donje crte se ignorišu prilikom skladištenja vrednosti — one služe isključivo vizuelnoj čitljivosti koda.

Na kraju, važno je zapamtiti da **ni `float` ni `double` nisu pogodni za apsolutno precizna izračunavanja** (npr. finansijske obračune), zbog same prirode skladištenja realnih brojeva u binarnom obliku u računaru — pojedini razlomci (npr. rezultat 5 ÷ 3) se ne mogu tačno predstaviti, bez obzira na broj decimala. Za takve slučajeve, Java nudi klasu **`BigDecimal`**, koja će biti detaljnije obrađena kasnije u kursu.

---

## 3. Kodni primeri

### 3.1 Opseg i preciznost float i double tipova preko wrapper klasa

```java
System.out.println("Float min/max: " + Float.MIN_VALUE + " / " + Float.MAX_VALUE);
System.out.println("Double min/max: " + Double.MIN_VALUE + " / " + Double.MAX_VALUE);
```

### 3.2 Dodela celobrojnog literala float i double promenljivama (bez sufiksa)

```java
int myIntValue = 5;
float myFloatValue = 5;    // radi bez sufiksa - ceo broj se automatski siri
double myDoubleValue = 5;  // radi bez sufiksa

System.out.println(myIntValue);    // 5
System.out.println(myFloatValue);  // 5.0
System.out.println(myDoubleValue); // 5.0
```

### 3.3 Sufiksi F i D kod celobrojne vrednosti

```java
float myFloatValue = 5F;
double myDoubleValue = 5D;
System.out.println(myFloatValue);  // 5.0
System.out.println(myDoubleValue); // 5.0
```

### 3.4 Greška bez sufiksa F kod decimalnog literala i njeno rešavanje

```java
// float myOtherFloatValue = 5.25; // GRESKA: incompatible types: possible lossy conversion from double to float

float myOtherFloatValueCast = (float) 5.25; // OPCIJA 1: casting
float myOtherFloatValueSuffix = 5.25F;      // OPCIJA 2: sufiks F (preporuceno)

System.out.println(myOtherFloatValueCast);   // 5.25
System.out.println(myOtherFloatValueSuffix); // 5.25
```

### 3.5 Celobrojno deljenje nasuprot decimalnom deljenju

```java
int intResult = 5 / 2;        // 2 - decimalni deo je odbacen
float floatResult = 5F / 2F;  // 2.5
double doubleResult = 5D / 2D; // 2.5

System.out.println(intResult);
System.out.println(floatResult);
System.out.println(doubleResult);
```

### 3.6 Deljenje sa ostatkom koji se ne može tačno predstaviti (5 / 3)

```java
int intResult = 5 / 3;         // 1 - trunkacija
float floatResult = 5F / 3F;   // 1.6666666 (7 decimala u ispisu)
double doubleResult = 5D / 3D; // 1.6666666666666667 (16 decimala u ispisu)

System.out.println(intResult);
System.out.println(floatResult);
System.out.println(doubleResult);
```

### 3.7 Mešanje double i float u izrazu — rezultat je uvek double

```java
double mixedResult = 5.00 / 3F; // rezultat je double, jer 5.00 je double
// float wrongResult = 5.00 / 3F; // GRESKA: double se ne moze dodeliti float promenljivoj

System.out.println(mixedResult);
```

### 3.8 Podvlake u decimalnim literalima

```java
double pi = 3.14159274D;
double anotherNumber = 3_000_000.456_890D; // donje crte se ignorisu pri skladistenju

System.out.println(pi);
System.out.println(anotherNumber);
```

### 3.9 Kompletan Java program — rešenje izazova (konverzija funti u kilograme)

```java
public class Main {
    public static void main(String[] args) {
        // Korak 1: broj funti koje konvertujemo
        double numberOfPounds = 200D;

        // Korak 2: konverzija u kilograme (1 funta = 0.45359237 kg)
        double convertedKilograms = numberOfPounds * 0.45359237D;

        // Korak 3: ispis rezultata
        System.out.println("Converted kilograms = " + convertedKilograms); // 90.718474

        // Demonstracija razlike celobrojnog i decimalnog deljenja
        int intDivision = 5 / 3;
        double doubleDivision = 5D / 3D;
        System.out.println("Int division: " + intDivision);       // 1
        System.out.println("Double division: " + doubleDivision); // 1.6666666666666667
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali dva primitivna tipa za realne brojeve: **`float`** (32 bita) i **`double`** (64 bita, precizniji i podrazumevani tip za decimalne literale u Javi). Naučili smo da svaki decimalni literal Java automatski tumači kao `double`, zbog čega je sufiks **`F`** obavezan pri dodeli decimalnog literala `float` promenljivoj, dok je sufiks `D` opcioni. Videli smo zašto se `double` preporučuje u odnosu na `float` (brzina, preciznost, podrška biblioteka, dovoljno memorije na modernim računarima), kao i ključnu razliku između **celobrojnog deljenja** (koje odbacuje razlomljeni deo) i **decimalnog deljenja** (koje vraća precizan razlomljeni rezultat). Na kraju smo napomenuli da ni `float` ni `double` nisu pogodni za apsolutno precizna izračunavanja, za šta postoji klasa **`BigDecimal`**.

### Zadatak za samostalan rad

1. Deklarišite `double` promenljivu i dodelite joj decimalni literal bez sufiksa `D`, a zatim `float` promenljivu sa istom vrednošću — objasnite (kao komentar) zašto je za `float` promenljivu sufiks `F` obavezan.
2. Napišite kod koji namerno izaziva grešku "incompatible types: possible lossy conversion from double to float", a zatim je ispravite na oba načina prikazana u lekciji (casting i sufiks `F`).
3. Izračunajte i ispišite rezultat `7 / 2` kao `int`, kao `float` i kao `double` — uporedite tri dobijena rezultata i objasnite razliku.
4. Napišite program koji konvertuje temperaturu iz Farenhajta u Celzijuse koristeći `double` promenljive, po formuli `C = (F - 32) * 5 / 9`, i ispišite rezultat.
5. **Bonus:** Objasnite (kao komentar u kodu) zašto sledeći izraz ne kompajlira: `float x = 5.00 / 3F;`, iako oba broja "izgledaju" kao da mogu stati u `float`.

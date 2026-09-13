# Lekcija 4: Više deklaracija u jednoj naredbi, aritmetika i casting

## Cilj lekcije

Nakon ove lekcije, znaćete kako da deklarišete više promenljivih u jednoj naredbi i koja pravila pritom važe, razumećete zašto Java prijavljuje grešku kada se rezultat izraza dodeljuje užem tipu podataka (`byte`, `short`), i naučićete šta je **casting (eksplicitna konverzija tipa)**, kada je potreban i kako se zapisuje u Java kodu.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Višestruka deklaracija u jednoj naredbi** | Deklarisanje dve ili više promenljivih istog tipa u jednoj naredbi, razdvojenih zarezom. |
| **Više naredbi u jednoj liniji** | Pisanje dve nezavisne naredbe (različitih ili istih tipova) u istoj liniji koda, razdvojenih tačka-zapetom. |
| **Podrazumevani tip izraza (`int`)** | Rezultat aritmetičkog izraza nad celobrojnim promenljivama je uvek tipa `int`, osim ako je eksplicitno drugačije naznačeno. |
| **Casting (eksplicitna konverzija tipa)** | Mehanizam kojim programer eksplicitno govori Javi da tretira vrednost kao drugi tip, zapisan kao `(tip) izraz`. |
| **Sužavajuća konverzija (narrowing)** | Konverzija iz šireg tipa (npr. `int`) u uži tip (npr. `byte`, `short`) — zahteva eksplicitan cast. |
| **Proširujuća konverzija (widening)** | Konverzija iz užeg tipa (npr. `int`) u širi tip (npr. `long`) — dešava se automatski, bez castinga. |

---

## 2. Detaljno objašnjenje

### 2.1 Deklaracija i inicijalizacija na istoj liniji

Do sada smo promenljivu prvo deklarisali, a zatim je, u posebnoj naredbi, koristili. Java, međutim, dozvoljava da se **više nezavisnih naredbi** napiše u **jednoj liniji koda**, sve dok je svaka naredba pravilno završena tačka-zapetom:

```java
short myMinShortValue = Short.MIN_VALUE; int myMinIntValue = Integer.MIN_VALUE;
```

Ovo su tehnički **dve odvojene naredbe** napisane radi praktičnosti u jednoj liniji — Java ih izvršava kao da su napisane u dva reda.

### 2.2 Višestruka deklaracija promenljivih istog tipa

Java takođe dozvoljava deklaraciju **više promenljivih istog tipa u jednoj naredbi**, gde se tip podatka navodi samo jednom, a pojedinačne deklaracije se razdvajaju zarezom:

```java
byte myMinByteValue = Byte.MIN_VALUE, myMaxByteValue = Byte.MAX_VALUE;
```

Za ovakvu **višestruku deklaraciju u jednoj naredbi**, važe dva strogo definisana pravila:

1. **Sve promenljive u jednoj naredbi moraju biti istog tipa.** Pokušaj mešanja tipova (npr. `short` i `int` u istoj naredbi razdvojenoj zarezom) izaziva grešku kompajlera **"identifier expected"**. Ako je zaista potrebno deklarisati promenljive različitih tipova u istoj liniji, mora se koristiti tačka-zapeta (čime se dobijaju dve odvojene naredbe), a ne zarez.
2. **Tip podatka se navodi samo jednom**, pre prve promenljive. Ponavljanje tipa ispred svake naredne promenljive u istoj naredbi (npr. `byte firstByte = 1, byte secondByte = 2;`) takođe izaziva grešku **"identifier expected"**, jer Java očekuje samo ime promenljive posle zareza, a ne novu deklaraciju tipa.

> **Napomena:** Kada se pređe na rad u IDE-u poput IntelliJ-a, alat će vizuelno ukazati na ovakve greške odmah tokom kucanja koda, što olakšava njihovo otkrivanje.

### 2.3 Podrazumevani tip izraza je int

Kada se aritmetička operacija izvodi nad celobrojnim promenljivama (bez obzira na njihov stvarni tip — `byte`, `short` ili `int`), **rezultat izraza je uvek tipa `int`**, osim ako je eksplicitno drugačije naznačeno. Ovo pravilo je izvor čestih grešaka početnika.

Na primer, deljenje `int` promenljive sa `2` i dodela rezultata `int` promenljivoj radi bez problema:

```java
int myTotal = (myMinIntValue / 2); // radi ispravno - int rezultat u int promenljivu
```

Ali isti postupak sa `byte` promenljivom **ne radi**:

```java
byte myNewByteValue = (myMinByteValue / 2); // GRESKA: required byte, found int
```

Iako je matematički jasno da rezultat deljenja vrednosti iz opsega `byte`-a sa 2 mora stati u opseg `byte`-a, **Java kompajler ne pokušava da izračuna vrednost izraza koji sadrži promenljive** — on samo prepoznaje da je *tip* rezultata izraza `int` (jer je to podrazumevani tip za celobrojnu aritmetiku), i odbija da ga automatski smesti u uži tip `byte`, jer bi to mogao biti gubitak podataka u opštem slučaju.

**Ključna razlika u odnosu na literale:** ako se u izrazu koriste samo **literali** (a ne promenljive), kompajler *može* unapred izračunati tačnu vrednost izraza u trenutku kompajliranja, i ako ta vrednost stane u ciljni tip, neće prijaviti grešku:

```java
byte myByteFromLiteral = (10 / 2); // RADI - kompajler unapred zna da je rezultat 5, stane u byte
```

### 2.4 Casting — eksplicitna konverzija tipa

Kada je programer siguran da će rezultat izraza stati u uži tip, ali kompajler to ne može sam da zaključi, koristi se **casting** — eksplicitno govorimo Javi da tretira vrednost kao određeni tip. Sintaksa castinga je ime željenog tipa u zagradama, postavljeno neposredno ispred izraza koji se konvertuje:

```java
byte myNewByteValue = (byte) (myMinByteValue / 2);
```

Ovim smo eksplicitno rekli Javi: "tretiraj rezultat ovog izraza kao `byte`", čime nestaje greška kompajlera. Casting je uobičajen koncept i u drugim programskim jezicima, ne samo u Javi.

Ovaj tip castinga naziva se **sužavajuća konverzija (narrowing conversion)**, jer se vrednost prevodi iz šireg tipa (`int`) u uži tip (`byte` ili `short`). Programer preuzima odgovornost da uveri kompajler kako je konverzija bezbedna — ako vrednost zapravo ne stane u ciljni tip, doći će do **overflow-a/underflow-a** iz prethodne lekcije, a ne do greške pri kompajliranju.

### 2.5 Zašto long ne zahteva casting

Za razliku od `byte`-a i `short`-a, tip `long` **ne zahteva casting** kada se u izrazu koristi zajedno sa `int` vrednostima — pod uslovom da je bar jedan operand u izrazu već tipa `long` (npr. kroz `L` sufiks na literalu). Ovo je primer **proširujuće konverzije (widening)**, koja se dešava automatski, jer `long` (64 bita) uvek može da primi bilo koju vrednost tipa `int` (32 bita) bez gubitka podataka:

```java
long longTotal = 50_000L + (byteValue + shortValue + intValue); // radi bez castinga
```

Ovde, pošto je `50_000L` već tipa `long`, ceo izraz se tretira kao `long`, i automatska proširujuća konverzija čini rezultat kompatibilnim sa `long` promenljivom, bez ikakvog eksplicitnog castinga.

### 2.6 Preporuka: koristite int kao podrazumevani izbor

Pošto Java **podrazumevano tretira celobrojne izraze kao `int`**, i pošto uži tipovi (`byte`, `short`) zahtevaju dodatni casting čim se koriste u izrazima sa promenljivama, opšta preporuka je: **koristite `int` za cele brojeve, osim ako postoji konkretan razlog da se koristi drugi tip** (npr. potreba za mnogo većim opsegom kod `long`-a, ili eksplicitno ograničavanje opsega radi dokumentovanja namere koda kod `byte`-a/`short`-a).

---

## 3. Kodni primeri

### 3.1 Deklaracija i inicijalizacija na istoj liniji (dve naredbe)

```java
short myMinShortValue = Short.MIN_VALUE; int myMinIntValue = Integer.MIN_VALUE;
System.out.println(myMinShortValue);
System.out.println(myMinIntValue);
```

### 3.2 Višestruka deklaracija istog tipa u jednoj naredbi

```java
byte myMinByteValue = Byte.MIN_VALUE, myMaxByteValue = Byte.MAX_VALUE;
System.out.println(myMinByteValue); // -128
System.out.println(myMaxByteValue); // 127
```

### 3.3 Ilustracija grešaka pri kršenju pravila (samo kao primer, ne pokretati ovako)

```java
// GRESKA "identifier expected": razliciti tipovi u istoj naredbi razdvojeni zarezom
// short firstShort = 1, int firstInteger = 2;

// ISPRAVKA: koristiti tacka-zapetu umesto zareza (dve odvojene naredbe)
short firstShort = 1; int firstInteger = 2;

// GRESKA "identifier expected": tip ponovljen ispred druge promenljive
// byte firstByte = 1, byte secondByte = 2;

// ISPRAVKA: tip se navodi samo jednom
byte firstByte = 1, secondByte = 2;
```

### 3.4 Podrazumevani tip int i potreba za castingom

```java
int myMinIntValue = Integer.MIN_VALUE;
int myTotal = (myMinIntValue / 2); // radi - int rezultat u int promenljivu

byte myMinByteValue = Byte.MIN_VALUE;
// byte myNewByteValue = (myMinByteValue / 2); // GRESKA: required byte, found int

byte myNewByteValue = (byte) (myMinByteValue / 2); // ISPRAVNO uz casting
System.out.println(myNewByteValue); // -64

short myMinShortValue = Short.MIN_VALUE;
short myNewShortValue = (short) (myMinShortValue / 2); // ISPRAVNO uz casting
System.out.println(myNewShortValue);
```

### 3.5 Literal izraz ne zahteva casting

```java
byte myByteFromLiteral = (10 / 2); // RADI bez castinga - kompajler unapred zna rezultat (5)
System.out.println(myByteFromLiteral);
```

### 3.6 Rešenje izazova: byte, short, int i long u jednom izrazu

```java
byte byteValue = 10;
short shortValue = 20;
int intValue = 50;

// Varijanta 1: sve u jednoj liniji, bez pomocne promenljive
long longTotal = 50_000L + (10 * (byteValue + shortValue + intValue));
System.out.println(longTotal); // 50800

// Varijanta 2: sa pomocnom promenljivom za citljivost
int sumOfThree = byteValue + shortValue + intValue;
long total = 50_000L + (10 * sumOfThree);
System.out.println(total); // 50800
```

### 3.7 Isti izazov, ali sa tipom short (zahteva casting)

```java
byte byteValue = 10;
short shortValue = 20;
int intValue = 50;

// short shortTotal = (1000 + 10 * (byteValue + shortValue + intValue)); // GRESKA: required short, found int

short shortTotal = (short) (1000 + 10 * (byteValue + shortValue + intValue)); // ISPRAVNO uz casting
System.out.println(shortTotal); // 1800
```

### 3.8 Kompletan Java program koji objedinjuje primere

```java
public class Main {
    public static void main(String[] args) {
        // Visestruka deklaracija istog tipa
        byte myMinByteValue = Byte.MIN_VALUE, myMaxByteValue = Byte.MAX_VALUE;
        System.out.println("Byte range: " + myMinByteValue + " to " + myMaxByteValue);

        // Casting pri delenju byte vrednosti
        byte halfMinByte = (byte) (myMinByteValue / 2);
        System.out.println("Half of min byte (cast): " + halfMinByte);

        // Resenje izazova sa byte, short, int i long
        byte byteValue = 10;
        short shortValue = 20;
        int intValue = 50;

        long longTotal = 50_000L + (10 * (byteValue + shortValue + intValue));
        System.out.println("Long total: " + longTotal); // 50800

        // Isti izracun, ali kao short - zahteva casting
        short shortTotal = (short) (1000 + 10 * (byteValue + shortValue + intValue));
        System.out.println("Short total (cast): " + shortTotal); // 1800
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo naučili da Java dozvoljava pisanje **više naredbi u jednoj liniji** (razdvojenih tačka-zapetom), kao i **višestruku deklaraciju promenljivih istog tipa** u jednoj naredbi (razdvojenih zarezom), uz dva stroga pravila: svi tipovi u takvoj naredbi moraju biti isti, a tip se navodi samo jednom. Videli smo da je **podrazumevani tip svakog celobrojnog izraza `int`**, što izaziva grešku kompajlera kada se rezultat izraza nad promenljivama pokuša dodeliti užem tipu (`byte`, `short`) — za razliku od izraza sa čistim literalima, koje kompajler unapred izračunava. Rešenje za ovaj problem je **casting** — eksplicitna sužavajuća konverzija tipa u obliku `(tip) izraz`. Takođe smo videli da `long` ne zahteva casting zahvaljujući automatskoj **proširujućoj konverziji**, i zaključili da je `int` generalno najbolji podrazumevani izbor za cele brojeve u Javi.

### Zadatak za samostalan rad

1. U jednoj naredbi deklarišite i inicijalizujte dve promenljive tipa `short`, razdvojene zarezom, i ispišite obe.
2. Napišite kod koji namerno izaziva grešku **"identifier expected"** na dva različita načina (mešanjem tipova i ponavljanjem tipa u istoj naredbi), a zatim svaku ispravite.
3. Deklarišite `int` promenljivu i podelite je sa `3`; pokušajte da rezultat dodelite `short` promenljivoj bez castinga (zabeležite grešku), a zatim dodajte odgovarajući cast da kod radi.
4. Napišite izraz koji sabira jednu `byte`, jednu `short` i jednu `int` promenljivu i množi zbir sa `100`, čuvajući rezultat u promenljivoj tipa `long`, bez upotrebe eksplicitnog castinga (koristeći `L` sufiks na jednom od literala).
5. **Bonus:** Objasnite (kao komentar u kodu) zašto sledeći kod radi bez castinga: `long x = 5 + 3;`, dok sledeći zahteva casting: `byte y = (byte) (myShortVar / 4);`, gde je `myShortVar` promenljiva tipa `short`.

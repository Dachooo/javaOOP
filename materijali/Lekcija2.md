# Lekcija 2: Prvi Java program, promenljive i osnovni izrazi

## Cilj lekcije

Nakon ove lekcije, znaćete da napišete i pokrenete svoj prvi Java program koji ispisuje tekst na ekran, prepoznaćete i ispravićete najčešće sintaksne greške početnika, razumećete šta su **ključne reči** i **promenljive**, naučićete da deklarišete promenljivu tipa `int`, i naučićete da gradite **izraze** korišćenjem literala, promenljivih i operatora.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Naredba (statement)** | Kompletna komanda koju Java izvršava; obično se završava tačka-zapetom (`;`). |
| **String literal** | Tekst zapisan pod dvostrukim navodnicima (npr. `"Hello World"`), čija se vrednost ne menja. |
| **Character literal** | Pojedinačan karakter zapisan pod jednostrukim navodnicima (npr. `'A'`); nije isto što i string. |
| **Ključna reč (keyword)** | Rezervisana reč sa unapred definisanim značenjem u Javi (npr. `int`); Java razlikuje velika i mala slova. |
| **Promenljiva (variable)** | Imenovano mesto u memoriji (RAM-u) u kome se čuva vrednost koja se može menjati tokom izvršavanja programa. |
| **Tip podatka (data type)** | Određuje kakvu vrstu vrednosti promenljiva može da čuva; `int` je primitivni tip za cele brojeve. |
| **Deklaraciona naredba (declaration statement)** | Naredba kojom se definiše promenljiva — tip, ime, i opciono početna vrednost. |
| **Izraz (expression)** | Deo koda koji se izračunava (evaluira) u jednu vrednost, npr. `10 + 5`. |
| **Operator** | Simbol koji izvršava operaciju nad vrednostima ili promenljivama (npr. `+`, `-`, `*`). |
| **Case sensitivity (osetljivost na velika/mala slova)** | U Javi se `int` i `Int` tretiraju kao potpuno različiti identifikatori. |

---

## 2. Detaljno objašnjenje

### 2.1 Prvi Java program — "Hello World"

Tradicija u učenju svakog programskog jezika je da se prvi program svede na ispisivanje teksta **"Hello World"** na ekran. Ovo omogućava proveru da li je okruženje ispravno podešeno, uz minimalno poznavanje jezika.

U JShell-u, ispisivanje teksta se postiže sledećom **naredbom (statement)**:

```java
System.out.println("Hello World");
```

Ova naredba je **kompletna komanda koja se izvršava** — u ovom slučaju, komanda da se na ekran ispiše tekst naveden unutar zagrada i dvostrukih navodnika. Tekst `"Hello World"` predstavlja **string literal**. Nakon izvršavanja, Java ispisuje taj tekst na sledećem redu izlaza.

### 2.2 Uobičajene greške početnika

Prilikom kucanja koda, lako je napraviti sitne sintaksne greške. Poznavanje ovih grešaka i njihovih poruka pomaže da se brže identifikuju i isprave.

**a) Nedostaje zatvorena zagrada**

Ako se zaboravi zatvorena zagrada `)`, JShell ne prijavljuje grešku odmah — umesto toga, menja prompt (u `...>`) i čeka da se unos završi, pretpostavljajući da korisnik još uvek kuca kod.

**b) Nedostaje zatvoreni dvostruki navodnik**

Ako se zaboravi zatvarajući dvostruki navodnik, JShell odmah prijavljuje grešku: `unclosed string literal` (nezatvoren string literal). Ovo se dešava jer je Java počela da čita string literal, ali nije naišla na njegov kraj.

**c) Korišćenje jednostrukih navodnika umesto dvostrukih**

U nekim jezicima (Python, JavaScript) jednostruki i dvostruki navodnici su ravnopravni, ali **u Javi to nije slučaj**. Jednostruki navodnici se koriste isključivo za **character literal** (pojedinačan karakter), a ne za tekst. Pokušaj da se višekaraktern tekst stavi pod jednostruke navodnike izaziva grešku vezanu za character literal.

> **Savet:** Ukoliko se zaglavite u višelinijskom unosu u JShell-u, kombinacija **Ctrl+C** (Windows) ili **Ctrl+D** (Mac/Linux) vraća vas na regularan prompt.

### 2.3 Ključne reči (keywords)

**Ključna reč** je rezervisana reč sa unapred definisanim značenjem u Java jeziku. Sve ključne reči u Javi pišu se **malim slovima**, i Java pravi razliku između `int` (ključna reč) i `Int` (što bi bio običan identifikator, a ne ključna reč). Java 17 ima kompletnu, unapred definisanu listu ključnih reči, među kojima su i nazivi **primitivnih tipova podataka** poput `int`, koji će biti detaljno obrađeni u narednim lekcijama.

### 2.4 Promenljive (variables)

**Promenljiva** je mehanizam za čuvanje podataka u memoriji računara (RAM-u), kojoj pristupamo preko imena koje joj dodelimo — bez potrebe da znamo tačnu memorijsku lokaciju. Naziv "promenljiva" dolazi otuda što se njena sadržina (vrednost) može menjati tokom izvršavanja programa.

Da bismo definisali promenljivu, potrebno je da:
1. Navedemo njen **tip podatka** (npr. `int` za cele brojeve),
2. Damo joj **ime**,
3. Opciono, dodelimo joj **početnu vrednost** (inicijalizacija).

Ovo se naziva **deklaraciona naredba (declaration statement)**:

```java
int myFirstNumber = 5;
```

U ovom primeru:
- `int` je tip podatka (cela broj, bez decimala),
- `myFirstNumber` je ime promenljive,
- `= 5` je **inicijalizacija** — dodela početne vrednosti pomoću **operatora dodele (`=`)**,
- `;` označava kraj naredbe.

Deo naredbe desno od znaka jednakosti naziva se **izraz (expression)** — deo koda koji se izračunava u jednu vrednost.

### 2.5 Literal naspram promenljive

Važno je razlikovati ispis **literala** od ispisa **vrednosti promenljive**:

```java
System.out.println("myFirstNumber"); // ispisuje tekst "myFirstNumber" (string literal)
System.out.println(myFirstNumber);   // ispisuje vrednost promenljive, npr. 5
```

Kada je tekst pod dvostrukim navodnicima, Java ga tretira kao **string literal** — fiksnu, nepromenljivu vrednost koja se ispisuje doslovno. Bez navodnika, Java prepoznaje ime kao **identifikator promenljive** i ispisuje njenu trenutnu vrednost.

### 2.6 Dodela nove vrednosti naspram redeklaracije

Vrednost promenljive može se menjati (ponovo dodeljivati) koliko god puta je potrebno, bez ponovnog navođenja tipa podatka:

```java
myFirstNumber = 10; // dodela nove vrednosti, tip se NE navodi ponovo
```

Nasuprot tome, **redeklaracija** — ponovno navođenje tipa podatka za već postojeću promenljivu — **nije dozvoljena** u standardnom Java kodu (van JShell-a) i izaziva grešku pri kompajliranju. JShell je tolerantniji i dozvoljava redeklaraciju radi lakšeg eksperimentisanja, ali se ovo ne sme koristiti kao navika u pravom Java programu.

### 2.7 Izrazi i operatori

Izraz na desnoj strani znaka jednakosti ne mora biti samo prost literal — može biti proizvoljno složena matematička kombinacija literala, promenljivih i **operatora** (`+`, `-`, `*`, `/`):

```java
myFirstNumber = 10 + 5;          // izraz se izračunava na 15
myFirstNumber = 10 + 5 + 2 * 10; // rezultat je 35 (mnozenje ima prioritet)
```

**Operatori** vrše određenu operaciju nad vrednostima — sabiranje, oduzimanje, množenje i deljenje su najčešći, a kroz kurs će biti predstavljeno još mnogo drugih.

### 2.8 Korišćenje promenljivih u izrazima

Umesto literala, u izrazu mogu učestvovati i druge, već deklarisane promenljive:

```java
int myFirstNumber = 35;
int mySecondNumber = 12;
int myThirdNumber = 6;

int myTotal = myFirstNumber + mySecondNumber + myThirdNumber; // 35 + 12 + 6 = 53
```

Ovakvim pristupom moguće je graditi proizvoljno složene izraze koji kombinuju više promenljivih. U JShell-u, komanda `/vars` prikazuje sve trenutno definisane promenljive, njihove tipove i vrednosti — što je koristan alat za praćenje stanja tokom eksperimentisanja.

### 2.9 Osetljivost na velika i mala slova (case sensitivity)

Java pravi **strogu razliku** između velikih i malih slova — ne samo kod ključnih reči, već i kod imena promenljivih. Promenljiva `myLastOne` i promenljiva `MyLastOne` predstavljaju dva potpuno različita identifikatora. Pokušaj korišćenja pogrešnog oblika imena rezultuje greškom prevodioca tipa `cannot find symbol`, jer Java jednostavno ne pronalazi promenljivu sa tačno tim imenom.

> **Najčešći uzrok grešaka početnika:** provera velikih/malih slova u imenima promenljivih. Komanda `/vars` u JShell-u pomaže da se brzo uoče ovakve greške u kucanju.

---

## 3. Kodni primeri

### 3.1 Hello World i modifikacija poruke

```java
// Ispisuje pozdravnu poruku na ekran
System.out.println("Hello World");

// Izmenom teksta unutar navodnika, poruka se menja
System.out.println("Hello Tim");
```

### 3.2 Ilustracija čestih grešaka (samo kao primer, ne pokretati ovako)

```java
// GRESKA: nedostaje zatvorena zagrada - JShell ceka nastavak unosa
// System.out.println("Hello Tim";

// GRESKA: nedostaje zatvoreni navodnik -> "unclosed string literal"
// System.out.println("Hello Tim);

// GRESKA: jednostruki navodnici oko teksta -> greska vezana za character literal
// System.out.println('Hello Tim');

// ISPRAVNO:
System.out.println("Hello Tim");
```

### 3.3 Deklaracija, ispis i izmena promenljive

```java
int myFirstNumber = 5;          // deklaracija i inicijalizacija
System.out.println(myFirstNumber); // ispisuje: 5

myFirstNumber = 10;             // dodela nove vrednosti (bez ponovnog "int")
System.out.println(myFirstNumber); // ispisuje: 10

myFirstNumber = 1000;           // ponovna dodela
System.out.println(myFirstNumber); // ispisuje: 1000
```

### 3.4 Izrazi sa operatorima

```java
int myFirstNumber = 10 + 5;            // 15
System.out.println(myFirstNumber);     // ispisuje: 15

myFirstNumber = 10 + 5 + 2 * 10;       // 35 (mnozenje pre sabiranja)
System.out.println(myFirstNumber);     // ispisuje: 35
```

### 3.5 Kombinovanje više promenljivih u izrazu

```java
int myFirstNumber = 35;
int mySecondNumber = 12;
int myThirdNumber = 6;

int myTotal = myFirstNumber + mySecondNumber + myThirdNumber;
System.out.println(myTotal); // ispisuje: 53

myThirdNumber = myFirstNumber * 2;     // 70
myTotal = myFirstNumber + mySecondNumber + myThirdNumber; // 35 + 12 + 70 = 117
System.out.println(myTotal); // ispisuje: 117
```

### 3.6 Kompletan Java program (ekvivalent JShell primerima)

Za razliku od JShell-a, u klasičnom Java programu sav kod mora biti smešten unutar klase i metode `main`:

```java
public class Main {
    public static void main(String[] args) {
        // Pozdravna poruka
        System.out.println("Hello Tim");

        // Deklaracija i inicijalizacija tri promenljive
        int myFirstNumber = 35;
        int mySecondNumber = 12;
        int myThirdNumber = 6;

        // Izraz koji kombinuje sve tri promenljive
        int myTotal = myFirstNumber + mySecondNumber + myThirdNumber;
        System.out.println(myTotal); // 53

        // Promena treće promenljive na osnovu prve
        myThirdNumber = myFirstNumber * 2; // 70
        myTotal = myFirstNumber + mySecondNumber + myThirdNumber; // 117
        System.out.println(myTotal);

        // Poslednja promenljiva - upotreba operatora oduzimanja
        int myLastOne = 1000 - myTotal; // 1000 - 117 = 883
        System.out.println(myLastOne);
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo napisali naš prvi Java program koji ispisuje tekst pomoću `System.out.println()`, i upoznali smo se sa tri uobičajene greške početnika: nedostajuća zatvorena zagrada, nedostajući zatvoren navodnik (`unclosed string literal`) i pogrešna upotreba jednostrukih navodnika (greška vezana za character literal). Zatim smo uveli pojmove **ključna reč**, **promenljiva** i **tip podatka**, i naučili da deklarišemo promenljivu tipa `int` koristeći **deklaracionu naredbu**. Videli smo razliku između ispisivanja **string literala** i vrednosti promenljive, kao i razliku između **dodele nove vrednosti** i **redeklaracije** (koja nije dozvoljena van JShell-a). Na kraju smo obradili **izraze** i **operatore**, naučili da kombinujemo više promenljivih u jednom izrazu, i upoznali se sa važnošću **osetljivosti na velika i mala slova** u Javi.

### Zadatak za samostalan rad

1. Napišite Java naredbu koja ispisuje vaše ime i prezime na ekran.
2. Deklarišite promenljivu `int` po imenu `godinaRodjenja` i inicijalizujte je vašom godinom rođenja. Ispišite njenu vrednost.
3. Deklarišite još dve promenljive tipa `int`: `trenutnaGodina` (npr. 2026) i `starost`. Izračunajte `starost` kao izraz `trenutnaGodina - godinaRodjenja` i ispišite rezultat.
4. Namerno napravite sledeće tri greške u JShell-u, jednu po jednu, zabeležite tačnu poruku greške koju dobijete, i zatim je ispravite:
   - izostavite zatvorenu zagradu u `System.out.println(...)`,
   - izostavite zatvarajući navodnik u string literalu,
   - upotrebite jednostruke navodnike umesto dvostrukih oko teksta dužeg od jednog karaktera.
5. **Bonus:** Napišite kompletan Java program (sa klasom `Main` i metodom `main`) koji objedinjuje sve promenljive iz zadataka 2. i 3, uz odgovarajuće komentare koji objašnjavaju svaki korak.

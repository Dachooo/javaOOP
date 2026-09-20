# Lekcija 19: Petlje while i do-while, naredba continue

## Cilj lekcije

Nakon ove lekcije, znaćete kada je bolje koristiti **`while`** petlju umesto `for` petlje, razumećete razliku između **`while`** i **`do-while`** petlje (i zašto `do-while` uvek izvršava telo bar jednom), naučićete šta je **beskonačna petlja** i kako je izbeći, i savladaćete naredbu **`continue`**, uz razliku između `continue` i `break`.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **while petlja** | Ponavlja telo dok je uslov tačan; uslov se proverava **pre** svake iteracije. |
| **do-while petlja** | Kao `while`, ali se uslov proverava **posle** tela, pa se telo uvek izvrši bar jednom. |
| **Beskonačna petlja** | Petlja čiji uslov nikada ne postane `false`, pa se nikada ne završava. |
| **continue** | Preskače ostatak trenutne iteracije i odmah počinje sledeću. |
| **break** | Potpuno izlazi iz petlje i prekida sve dalje iteracije. |
| **Brojač (counter)** | Promenljiva koja prati broj pronađenih elemenata (npr. `evenCount`, `oddCount`). |

---

## 2. Detaljno objašnjenje

### 2.1 Zašto nam treba while petlja

`for` petlja je pogodna kada se unapred zna raspon ili broj ponavljanja. Ako, međutim, treba ponavljati **dok se neki uslov ne ispuni**, a ne zna se unapred koliko će to trajati, koristi se **`while`** petlja.

### 2.2 Sintaksa while petlje i razlika u odnosu na for

```java
while (uslov) {
    // telo petlje
}
```

`while` petlja sadrži **samo uslov**. Za razliku od `for` petlje, u njenoj deklaraciji **nema mesta za inicijalizaciju ni za ažuriranje**. Zato:

- iteracionu promenljivu treba **deklarisati pre petlje**,
- promenljivu treba **ručno menjati unutar tela petlje**.

Ista petlja (brojevi od 1 do 5) napisana `for` i `while` petljom:

```java
// for petlja
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

// isto, sa while petljom
int j = 1;
while (j <= 5) {
    System.out.println(j);
    j++;
}
```

### 2.3 Beskonačna petlja

Ako se promenljiva iz uslova ne menja u telu petlje, uslov nikada ne postaje `false` i dobija se **beskonačna petlja**, što je obično greška:

```java
int j = 1;
while (j <= 5) {
    System.out.println(j);
    // j++ je izostavljen - petlja se nikada ne zavrsava!
}
```

Kod `for` petlje ovaj problem se ređe javlja jer je ažuriranje deo deklaracije. Zato se kod `while` petlji često savetuje da se uvećavanje postavi na početak tela petlje, da se slučajno ne bi preskočilo.

### 2.4 while (true) sa break-om

Ponekad se koristi `while (true)`, što je namerno beskonačna petlja, a uslov za izlaz se proverava unutar tela pomoću `if` i `break`:

```java
int j = 1;
while (true) {
    if (j > 5) {
        break; // izlaz iz petlje
    }
    System.out.println(j);
    j++;
}
```

Ovo je čest obrazac. Naredba `break` ovde radi isto kao i u `for` petlji: prekida petlju i preskače sav kod ispod nje.

### 2.5 do-while petlja

Kod **`do-while`** petlje uslov se proverava **posle** tela, zbog čega se telo **uvek izvrši bar jednom**:

```java
do {
    // telo petlje
} while (uslov);
```

Razlika u odnosu na `while`:

- ključna reč `do` stoji **pre** bloka koda, a `while (uslov)` **posle** njega,
- `do` nema uslov u zagradi,
- naredba se završava **tačka-zapetom** posle uslova — to je obavezno i razlikuje `do-while` od druge dve petlje.

Poređenje sa istim uslovom koji je odmah netačan:

```java
boolean isReady = false;

while (isReady) {
    System.out.println("Ovo se nikada ne ispisuje");
}

do {
    System.out.println("Ovo se ispisuje tacno jednom");
} while (isReady);
```

`while` petlja ne izvršava telo nijednom, dok `do-while` telo izvrši jednom pre nego što proveri uslov.

Tipičan primer za `do-while` je traženje korisničkog imena i lozinke: korisnik mora da ih unese bar jednom, a ako su netačni, traži se ponovni unos. U praksi se češće koristi `while`, ali su oba potrebna.

### 2.6 Naredba continue

**`continue`** prekida **trenutnu iteraciju** i odmah počinje sledeću. Sav kod ispod `continue` u telu petlje se za tu iteraciju preskače, ali se petlja **nastavlja**. To je korisno kada većina iteracija treba da obavi neki posao, a nekoliko izuzetaka treba preskočiti, umesto velikog `if-else` bloka.

Primer: ispis brojeva 5, 10, ..., 50, ali bez brojeva koji su deljivi sa 25:

```java
int number = 0;
while (number < 50) {
    number += 5;
    if (number % 25 == 0) {
        continue; // preskace ispis za 25 i 50
    }
    System.out.print(number + "_");
}
// ispis: 5_10_15_20_30_35_40_45_
```

Kada je `number` 25 ili 50, `continue` odmah prelazi na sledeću iteraciju, pa se `print` ne izvršava.

**Razlika između `break` i `continue`:**

- **`break`** izlazi iz cele petlje,
- **`continue`** preskače samo ostatak trenutne iteracije, a petlja se nastavlja.

### 2.7 Vežba 1: metoda isEvenNumber i while petlja

**Zadatak:** napisati metodu `isEvenNumber(int number)` koja vraća `true` za paran broj, a zatim `while` petljom proći kroz brojeve od 5 do 20 i ispisati samo parne.

Paran broj je deljiv sa 2 bez ostatka, pa se koristi operator `%`:

```java
public static boolean isEvenNumber(int number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
```

Petlja počinje od `number = 4`, a uvećavanje je **prva naredba u telu**, pa se prvi obrađeni broj je 5. Neparni brojevi se preskaču pomoću `continue`:

```java
int number = 4;
int finishNumber = 20;

while (number <= finishNumber) {
    number++;
    if (!isEvenNumber(number)) {
        continue; // preskace ispis za neparne brojeve
    }
    System.out.println("Even number " + number);
}
```

Uvećavanje na početku tela smanjuje rizik od beskonačne petlje, jer `continue` ne može da ga preskoči. Ispisuju se parni brojevi 6, 8, 10 i tako dalje. Petlja se završava kada `number` dostigne 21, jer tada uslov `number <= finishNumber` postaje netačan. Poslednji ispisani paran broj je 20.

### 2.8 Vežba 2: brojanje parnih i neparnih i prekid posle 5 parnih

**Zadatak:** proširiti prethodnu petlju tako da broji parne i neparne brojeve, prekine se kada pronađe **pet parnih brojeva**, a na kraju (van petlje) ispiše oba brojača. Postojeći ispis mora ostati isti.

Uvode se dva brojača, `evenCount` i `oddCount`, oba počinju od 0. Za neparne se uvećava `oddCount` pre `continue`-a, a za parne (koji "prolaze" kroz `if`) `evenCount`, posle čega sledi provera za `break`:

```java
int number = 4;
int finishNumber = 20;
int evenCount = 0;
int oddCount = 0;

while (number <= finishNumber) {
    number++;
    if (!isEvenNumber(number)) {
        oddCount++;
        continue;
    }
    System.out.println("Even number " + number);
    evenCount++;
    if (evenCount >= 5) {
        break;
    }
}

System.out.println("Total odd numbers found = " + oddCount);
System.out.println("Total even numbers found = " + evenCount);
```

Ispisuju se parni brojevi 6, 8, 10, 12 i 14, a oba brojača na kraju iznose 5 (neparni brojevi 5, 7, 9, 11 i 13). Bez `break`-a petlja bi obradila sve brojeve do 20 i našla 8 parnih i 9 neparnih.

Važno je da su `break` i `continue` **opcioni** i služe boljoj čitljivosti. Isti zadatak bi se mogao rešiti i bez njih, ali je u ovoj vežbi zahtevan bar `break`.

---

## 3. Kodni primeri

### 3.1 while nasuprot for

```java
int j = 1;
while (j <= 5) {
    System.out.println("j = " + j);
    j++;
}
```

### 3.2 while (true) sa break-om

```java
int j = 1;
while (true) {
    if (j > 5) {
        break;
    }
    System.out.println(j);
    j++;
}
```

### 3.3 do-while koji se izvrši bar jednom

```java
boolean isReady = false;
do {
    System.out.println("Izvrsava se bar jednom");
} while (isReady);
```

### 3.4 Primer sa continue

```java
int number = 0;
while (number < 50) {
    number += 5;
    if (number % 25 == 0) {
        continue;
    }
    System.out.print(number + "_");
}
// ispis: 5_10_15_20_30_35_40_45_
```

### 3.5 Kompletan Java program (rešenje vežbi)

```java
public class Main {
    public static void main(String[] args) {
        int number = 4;
        int finishNumber = 20;
        int evenCount = 0;
        int oddCount = 0;

        while (number <= finishNumber) {
            number++;
            if (!isEvenNumber(number)) {
                oddCount++;
                continue;
            }
            System.out.println("Even number " + number);
            evenCount++;
            if (evenCount >= 5) {
                break;
            }
        }

        System.out.println("Total odd numbers found = " + oddCount);   // 5
        System.out.println("Total even numbers found = " + evenCount); // 5
    }

    public static boolean isEvenNumber(int number) {
        if (number % 2 == 0) {
            return true;
        }
        return false;
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo upoznali **`while`** petlju, koja ponavlja telo dok je uslov tačan i pogodna je kada se broj ponavljanja unapred ne zna. Za razliku od `for` petlje, nema inicijalizaciju ni ažuriranje u deklaraciji, pa se promenljiva deklariše pre petlje, a menja unutar tela, inače nastaje **beskonačna petlja**. Videli smo obrazac `while (true)` sa `break`-om, kao i **`do-while`** petlju, koja proverava uslov posle tela i zato se uvek izvrši bar jednom (i koja se završava tačka-zapetom). Naučili smo **`continue`**, koji preskače ostatak iteracije i nastavlja petlju, u odnosu na `break`, koji izlazi iz cele petlje. Kroz dve vežbe (`isEvenNumber` i brojanje parnih i neparnih brojeva sa prekidom posle pet parnih) uvežbali smo sve ove elemente zajedno.

### Zadatak za samostalan rad

1. Napišite `while` petlju koja ispisuje brojeve od 10 do 1 unazad.
2. Napišite `do-while` petlju koja se izvršava jednom čak i kada je uslov od početka netačan, i objasnite (kao komentar) zašto.
3. Napišite `while` petlju koja ispisuje brojeve od 1 do 30, ali preskače (pomoću `continue`) sve brojeve deljive sa 3.
4. Napišite `while (true)` petlju koja sabira brojeve 1, 2, 3, ... i prekida se (`break`) kada zbir pređe 100. Ispišite zbir posle petlje.
5. **Bonus:** Namerno napišite beskonačnu `while` petlju (bez uvećavanja brojača), objasnite (kao komentar) zašto se nikada ne završava, a zatim je ispravite.

# Lekcija 7: Operatori, operandi, izrazi i skraćeni (compound) operatori

## Cilj lekcije

Nakon ove lekcije, razumećete šta su **operatori**, **operandi** i **izrazi** u Javi, poznavaćete pet osnovnih aritmetičkih operatora uključujući **operator ostatka (%)**, znaćete kako se operator `+` ponaša različito nad `char`, `String` i brojevima, i naučićete skraćene (compound) operatore — **postfiks inkrement/dekrement** (`++`, `--`) i **compound assignment** operatore (`+=`, `-=`, `*=`, `/=`) — uključujući skrivenu opasnost implicitnog castinga koju compound operatori mogu izazvati.

---

## 1. Ključni pojmovi

| Pojam | Kratko objašnjenje |
|---|---|
| **Operator** | Specijalni simbol koji izvršava određenu operaciju nad jednim, dva ili tri operanda i vraća rezultat. |
| **Operand** | Vrednost (literal ili promenljiva) nad kojom operator izvršava operaciju. |
| **Izraz (expression)** | Kombinacija promenljivih, literala i operatora koja se izračunava i vraća rezultat. |
| **Operator dodele (`=`)** | Operator koji dodeljuje vrednost sa desne strane promenljivoj sa leve strane. |
| **Operator ostatka (`%`)** | Aritmetički operator (modulo/mod) koji vraća ostatak pri celobrojnom deljenju. |
| **Komentar (`//`)** | Tekst posle dve kose crte, koji kompajler ignoriše — služi isključivo ljudima radi razumevanja koda. |
| **Postfiks inkrement/dekrement (`++`/`--`)** | Skraćeni operatori koji uvećavaju/umanjuju promenljivu za tačno 1. |
| **Compound assignment operator** | Skraćeni zapis operacije i dodele u jednom koraku (`+=`, `-=`, `*=`, `/=`), koji uključuje **implicitni cast** na tip promenljive sa leve strane. |

---

## 2. Detaljno objašnjenje

### 2.1 Operatori, operandi i izrazi

**Operator** je specijalni simbol koji izvršava određenu operaciju nad jednim, dva ili tri **operanda** i vraća rezultat. **Operand** je bilo koja vrednost (literal ili promenljiva) nad kojom operator radi. **Izraz** je kombinacija promenljivih, literala i operatora koja se izračunava u konkretnu vrednost.

```java
int result = 15 + 12; // izraz je "15 + 12", operandi su 15 i 12, operator je "+"
```

U ovom primeru zapravo postoje **dva operatora**: operator dodele `=` (koji dodeljuje rezultat izraza promenljivoj `result`) i operator sabiranja `+`. Većina operatora radi nad **dva operanda**, a sam operand može biti i složeniji izraz koji sadrži druge operatore i operande.

### 2.2 Komentari u kodu

**Komentar** se piše sa dve kose crte (`//`) — sve od tog mesta do kraja linije kompajler ignoriše. Komentari služe isključivo za objašnjavanje koda ljudima (ili za privremeno onemogućavanje dela koda) i preporučuje se njihova upotreba radi jasnoće:

```java
int result = 1 + 2; // ocekivani rezultat: 3
```

### 2.3 Promenljive su nezavisne nakon dodele

Kada se vrednost jedne promenljive dodeli drugoj, one **nisu trajno povezane** — kopira se samo trenutna vrednost, a naknadne izmene originalne promenljive ne utiču na kopiju:

```java
int result = 3;
int previousResult = result; // previousResult dobija vrednost 3
result = result - 1;         // result postaje 2, ali previousResult ostaje 3
```

### 2.4 Operator + nad char i String tipovima

Ponašanje operatora `+` zavisi od tipova operanada:

- Nad **`String`**-om, `+` uvek znači **konkatenaciju** (spajanje teksta), kao što je pokazano u prethodnoj lekciji.
- Nad **`char`**-om, `+` vrši **sabiranje brojčanih vrednosti** koje stoje iza karaktera u memoriji (a ne spajanje karaktera u tekst), jer je `char` interno zapisan kao dvobajtni broj:

```java
char firstChar = 'A';  // decimalna vrednost 65
char secondChar = 'B'; // decimalna vrednost 66
System.out.println(firstChar + secondChar); // 131 (65 + 66), NE "AB"
```

Ako je cilj da se dva karaktera zaista **spoje u tekst**, potrebno je bar jedan operand pretvoriti u `String` — najjednostavnije, dodavanjem prazne string vrednosti (`""`) na početak izraza, čime `+` postaje operator konkatenacije:

```java
System.out.println("" + firstChar + secondChar); // AB
```

### 2.5 Pet osnovnih aritmetičkih operatora

| Operator | Naziv | Primer | Rezultat |
|---|---|---|---|
| `+` | sabiranje | `5 + 3` | `8` |
| `-` | oduzimanje | `5 - 3` | `2` |
| `*` | množenje | `5 * 3` | `15` |
| `/` | deljenje | `10 / 3` | `3` (celobrojno deljenje) |
| `%` | ostatak (modulo) | `10 % 3` | `1` |

**Operator ostatka (`%`)**, poznat i kao *modulus*, *modulo* ili skraćeno *mod*, vraća **ostatak** koji preostaje nakon celobrojnog deljenja levog operanda desnim. Ako je desni operand tačan delilac levog, rezultat je `0`:

| Izraz | Objašnjenje | Rezultat |
|---|---|---|
| `10 % 5` | 5 ide tačno 2 puta u 10, ostatak 0 | `0` |
| `10 % 3` | 3 ide 3 puta u 10 (9), ostatak 1 | `1` |
| `5 % 3` | 3 ide 1 put u 5, ostatak 2 | `2` |

Svih pet operatora primenjuje se na sve numeričke tipove (cele i decimalne brojeve), kao i na `char` (jer je interno broj). Na `String` je primenljiv samo `+` (kao konkatenacija), dok **nijedan** od ovih operatora nije primenljiv na `boolean`.

### 2.6 Postfiks inkrement i dekrement (`++`, `--`)

Uvećavanje ili umanjivanje promenljive za tačno **1** je toliko čest zadatak u programiranju da Java nudi skraćene operatore:

```java
result++; // ekvivalentno: result = result + 1;
result--; // ekvivalentno: result = result - 1;
```

Ovo su samostalne naredbe (ne zahtevaju operator dodele `=`) i nazivaju se **postfiks inkrement** i **postfiks dekrement** operatori.

### 2.7 Compound assignment operatori

Pored inkrementa/dekrementa za 1, Java nudi i opštije **compound assignment** operatore, koji kombinuju aritmetičku operaciju i dodelu u jedan korak, i mogu uvećati/umanjiti/pomnožiti/podeliti promenljivu bilo kojom vrednošću (ne samo sa 1):

| Compound operator | Ekvivalentno sa |
|---|---|
| `x += y;` | `x = x + y;` |
| `x -= y;` | `x = x - y;` |
| `x *= y;` | `x = x * y;` |
| `x /= y;` | `x = x / y;` |

```java
result += 5; // ekvivalentno: result = result + 5;
result -= 7; // ekvivalentno: result = result - 7;
```

### 2.8 Skriveni implicitni cast kod compound operatora

Iako se compound operator obično objašnjava kao skraćenica za `x = x <operator> y;`, to **nije potpuno tačno** kada su `x` i `y` različitih tipova. Compound operator zapravo radi ovako:

```
x <operator>= y;   je zapravo   x = (tip od x) (x <operator> y);
```

Odnosno, compound operator **automatski (implicitno) castuje** rezultat izraza nazad na tip promenljive sa leve strane, čak i kada bi taj cast, da je napisan eksplicitno u "dugoj" verziji, izazvao grešku kompajlera.

Ovo je najlakše videti na primeru gde je `result` tipa `int`, a oduzima se `double` vrednost:

```java
int result = 10;
result -= 5.5; // NE baca gresku - implicitno se ponasa kao: result = (int) (result - 5.5);
System.out.println(result); // 4 (a ne 4.5!)
```

Da je umesto compound operatora napisana "puna" verzija bez castinga, dobili bismo grešku kompajlera:

```java
int result = 10;
// result = result - 5.5; // GRESKA: possible lossy conversion from double to int
```

Ovo znači da compound operator **prikriva potencijalnu grešku sužavajuće konverzije**, jer implicitno ubacuje cast koji programer nije eksplicitno napisao — i zbog toga rezultat može biti **neočekivan** (u primeru iznad, `4` umesto matematički tačnog `4.5`). Ako je zaista željen precizan rezultat sa decimalama, promenljiva `result` mora biti deklarisana kao `double` (ili drugi kompatibilan tip), a ne `int`:

```java
double result = 10;
result -= 5.5; // sada radi ispravno, bez gubitka preciznosti
System.out.println(result); // 4.5
```

**Zaključak:** compound operatore treba koristiti oprezno kada operandi nisu istog tipa — implicitni cast neće prijaviti grešku, ali može tiho promeniti očekivani rezultat.

---

## 3. Kodni primeri

### 3.1 Osnovni izraz sa operatorom dodele i sabiranja

```java
int result = 1 + 2; // ocekivano: 3
System.out.println(result); // 3
```

### 3.2 Nezavisnost promenljivih nakon dodele

```java
int result = 3;
int previousResult = result; // previousResult = 3
result = result - 1;         // result = 2

System.out.println(result);         // 2
System.out.println(previousResult); // 3 - nepromenjeno
```

### 3.3 Operator + nad char (sabiranje brojeva, ne konkatenacija)

```java
char firstChar = 'A';
char secondChar = 'B';
System.out.println(firstChar + secondChar); // 131 (65 + 66)
System.out.println("" + firstChar + secondChar); // AB - konkatenacija preko praznog stringa
```

### 3.4 Pet osnovnih aritmetičkih operatora

```java
int result = 2;
result = result * 10; // 20
result = result / 4;  // 5
result = result % 3;  // 2 - ostatak pri deljenju 5 sa 3
System.out.println(result); // 2
```

### 3.5 Postfiks inkrement i dekrement

```java
int result = 1;
result++; // 2
System.out.println(result); // 2

result--; // 1
System.out.println(result); // 1
```

### 3.6 Compound assignment operatori (isti tip)

```java
double result = 10;
result += 5;   // 15.0
result -= 7;   // 8.0
result *= 1.5; // 12.0
result /= 1.5; // 8.0
System.out.println(result); // 8.0
```

### 3.7 Skriveni implicitni cast kod compound operatora nad int

```java
int result = 10;
result -= 5.5; // implicitni cast: result = (int) (result - 5.5)
System.out.println(result); // 4, a ne 4.5!

// result = result - 5.5; // GRESKA da je napisano eksplicitno: possible lossy conversion
// result = (int) (result - 5.5); // ovo je ono sto compound operator radi "iza scene"
```

### 3.8 Ispravno dobijanje preciznog rezultata (double umesto int)

```java
double preciseResult = 10;
preciseResult -= 5.5;
System.out.println(preciseResult); // 4.5 - ispravno, bez gubitka preciznosti
```

### 3.9 Kompletan Java program koji objedinjuje primere

```java
public class Main {
    public static void main(String[] args) {
        // Osnovni aritmeticki operatori
        int result = 2;
        result = result * 10; // 20
        result = result / 4;  // 5
        result = result % 3;  // 2
        System.out.println("Rezultat aritmetike: " + result);

        // Char sabiranje vs konkatenacija
        char firstChar = 'A';
        char secondChar = 'B';
        System.out.println("Zbir char vrednosti: " + (firstChar + secondChar)); // 131
        System.out.println("Konkatenacija: " + ("" + firstChar + secondChar));  // AB

        // Postfiks inkrement/dekrement
        int counter = 5;
        counter++;
        counter++;
        counter--;
        System.out.println("Brojac: " + counter); // 6

        // Compound operator i implicitni cast
        int intResult = 10;
        intResult -= 5.5; // implicitni cast na int
        System.out.println("Int compound rezultat: " + intResult); // 4

        double doubleResult = 10;
        doubleResult -= 5.5; // bez gubitka preciznosti
        System.out.println("Double compound rezultat: " + doubleResult); // 4.5
    }
}
```

---

## 4. Rezime

U ovoj lekciji smo definisali pojmove **operator**, **operand** i **izraz**, i upoznali pet osnovnih aritmetičkih operatora: sabiranje, oduzimanje, množenje, deljenje i **operator ostatka (`%`)**, koji vraća ostatak pri celobrojnom deljenju. Videli smo da se operator `+` ponaša različito u zavisnosti od tipa — kod `String`-a vrši konkatenaciju, a kod `char`-a sabira brojčane vrednosti karaktera. Zatim smo upoznali skraćene operatore: **postfiks inkrement/dekrement** (`++`, `--`) za promenu vrednosti za 1, i **compound assignment operatore** (`+=`, `-=`, `*=`, `/=`) za opštije skraćeno pisanje operacije i dodele. Naučili smo i važnu zamku: compound operatori vrše **implicitni cast** rezultata na tip promenljive sa leve strane, što može prikriti grešku sužavajuće konverzije i dati neočekivan (zaokružen/odsečen) rezultat kada su operandi različitih tipova.

### Zadatak za samostalan rad

1. Napišite izraz koji koristi operator ostatka (`%`) da proveri da li je broj `17` deljiv sa `4`, i ispišite ostatak.
2. Deklarišite dva `char` varijable sa vašim inicijalima i ispišite i njihov zbir (kao broj) i njihovu konkatenaciju (kao tekst), objašnjavajući razliku komentarom.
3. Napišite kod koji koristi postfiks inkrement tri puta zaredom na promenljivoj koja počinje od `0`, i ispišite konačnu vrednost.
4. Deklarišite `int` promenljivu sa vrednošću `20` i primenite na nju compound operator `/=` sa vrednošću `3.0`; objasnite (kao komentar) zašto rezultat nije decimalan broj, iako je desni operand `double`.
5. **Bonus:** Ispravite zadatak 4 tako da rezultat bude precizan decimalni broj, uz minimalnu izmenu koda (promenom tipa promenljive), i objasnite zašto ta izmena rešava problem.

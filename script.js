/* 
ZADANIE 1

Połączenie dwóch stringów przy użyciu operatora + jest bardzo łatwym zadaniem. Innym sposobem jest użycie metody concat albo join, ale co jeśli nie moglibyśmy skorzystać z żadnej z tych opcji?
Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.
*/
console.log('Zadanie 1');

const hello = `Hello`;
const world = `World`;
const welcome = `${hello} ${world}`;
console.log(welcome);

/*
ZADANIE 2 

Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. 
Przykładowo: 

multiply(2, 5) // 10
multiply(6, 6) // 36

Zadanie wydaje się być proste, ale co jeśli użytkownik poda na wejściu tylko jedną wartość? 
Przykładowo:

multiply(5) // ?

Chcemy, aby wynik takiego wywołania był również prawidłowy - możesz założyć, że jeśli użytkownik nie poda któregoś z parametrów, ma on zostać zastąpiony 1. Nie wolno korzystać z instrukcji warunkowych! Funkcję stwórz za pomocą arrow function.
*/

console.log('\nZadanie 2');

const multiply = (a, b = 1) => (a * b);
console.log(multiply(7));
console.log(multiply(5, 4));

/*
ZADANIE 3

Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4

Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.
*/

console.log('\nZadanie 3');

const average = (...sumArgs) => sumArgs.reduce((x, y) => x + y) / sumArgs.length; //funkcja reduce operuje na elementach tablicy, jednak zamiast kolejnej tablicy zwraca tylko pojedynczą wartość. Reduce przyjmuje tablicę, transformuje i zwraca jedną wartość.
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

/*
ZADANIE 4

Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!
*/

console.log('\nZadanie 4');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

/*
ZADANIE 5

Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.
*/

console.log('\nZadanie 5');

const dataArray = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = dataArray;
console.log(firstname, lastname);



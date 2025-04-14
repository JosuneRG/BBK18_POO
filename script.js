// Ejercicio POO 1:

// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(),
//  que muestra por consola las propiedades de la persona.
class Person{

     constructor(name1, age, genre){
     
        this.name1 = name1;
        this.age = age;
        this.genre = genre;    
     }

     obtDetails = function()
     {
        console.log("---------- Ejercicio 1 ------------");
        console.log("Su nombre es:", this.name1, ",su edad es: ",this.age, " y su genero es:", this.genre);
     }
}

const person1 = new Person("Laura",20,"M");
person1.obtDetails();


// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(),
//  que muestre por consola el resultado.

class Student extends Person{

    constructor(name1, age, genre, course, group){
        
        super(name1, age, genre);
        
        this.course = course;
        this.group = group;  
     }

     register = function()
     {
        console.log("---------- Ejercicio 2 ------------");
        console.log("Su nombre es:", this.name1, ",su edad es: ",this.age, " y su genero es:", this.genre);
        console.log("Su curso es:", this.course, " y su grupo es: ",this.group);
     }
}

const student1 = new Student("Markel",30,"H","Full-Stack","B");
student1.register();

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y 
// level y el método assign(), que muestre por consola el resultado.
class Teacher extends Person{

    constructor(name1, age, genre, asignatura, level){
        
        super(name1, age, genre);
        
        this.asignatura = asignatura;
        this.level = level;  
     }

     assign = function()
     {
        console.log("---------- Ejercicio 3 ------------");
        console.log("Su nombre es:", this.name1, ",su edad es: ",this.age, " y su genero es:", this.genre);
        console.log("Asignatura:", this.asignatura, " Nivel:", this.level);
        
     }
}

const teacher1 = new Teacher("Mar",50,"M","Ingles","B1");
teacher1.assign();

// //--------------------------------------------------------------------------------------------------------------
// Construye las siguientes clases:
// 1 -Warrior:
// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.
class Warrior{
    
    constructor(life, power)
    {
        this.life = life;
        this.power = power;
    }

    attack = function()
    {
        console.log("El power del guerrero es:", this.power);
    }

    defend = function(damage)
    {
        const result = this.life - damage;
        console.log("La vida restante de warrior es:", result);
        
    }

}

console.log(" ---------------- Ejercicio Warrior -----------------------");
const warrior1 = new Warrior(60,30);
warrior1.attack();
warrior1.defend(10);


// 2- Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder.
class Maya extends Warrior()
{
    drinkColaCao = function()
    {
        const result = power + 10;
    }
    
}
// 3 -Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.


// Realiza la siguiente cadena de intercambio de golpes.
// Azteca bebe nesquik
// Maya bebe Cola Cao
// Maya ataca a azteca. Azteca defiende.
// Azteca ataca a maya. Maya defiende.
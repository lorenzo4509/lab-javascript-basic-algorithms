// Iteración 1: nombres y entrada

const hacker1 = "Juan";
console.log("The driver's name is " + hacker1);

const hacker2 = "María";
console.log("The navigator's name is " + hacker2);
// Iteración 2: Comparación de longitudes de nombres

const hacker3 = "Juan";
const hacker4 = "María";

// Obtener la longitud de los nombres
const lengthHacker1 = hacker1.length;
const lengthHacker2 = hacker2.length;

// Comparar las longitudes y mostrar el mensaje correspondiente
if (lengthHacker1 > lengthHacker2) {
  console.log("The driver has the longest name, it has", lengthHacker1, "characters.");
} else if (lengthHacker2 > lengthHacker1) {
  console.log("It seems that the navigator has the longest name, it has", lengthHacker2, "characters.");
} else {
  console.log("Wow, you both have equally long names,", lengthHacker1, "characters!");
}
// Iteración 3: Bucles

const hacker6 = "Juan";
const hacker5 = "María";

// 3.1 Imprimir el nombre del conductor en letra de imprenta y en mayúsculas, separado por espacios
let formattedHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  formattedHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log("Driver's name in uppercase: " + formattedHacker1.trim());

// 3.2 Imprimir el nombre del navegante en orden inverso
let reversedHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedHacker2 += hacker2[i];
}
console.log("Reversed navigator's name: " + reversedHacker2);

// 3.3 Comparar lexicográficamente los nombres y mostrar el mensaje correspondiente
const lexOrder = hacker1.localeCompare(hacker2);
if (lexOrder < 0) {
  console.log("The driver's name goes first.");
} else if (lexOrder > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bono 1: Generar párrafos de Lorem Ipsum y realizar conteo

// Generar párrafos de Lorem Ipsum (copiados de un generador en línea)
const loremIpsumParagraphs = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nisi bibendum, fringilla eros non, dignissim elit. Nunc sit amet odio vitae sapien fermentum hendrerit. Sed nec purus ac ex facilisis lacinia. Integer ac nunc in sapien auctor vulputate vel eu nulla. Nulla facilisi. Curabitur a hendrerit neque, ac vestibulum metus. Nulla facilisi. Cras id bibendum ipsum. Sed volutpat urna et ipsum scelerisque varius. Proin eu tortor quis sapien facilisis vehicula. Quisque eu vestibulum sapien. Nulla facilisi. Nullam luctus, arcu auctor laoreet congue, urna est semper orci, vitae lacinia tellus nunc vel quam. Fusce ullamcorper malesuada augue in facilisis.

Suspendisse rhoncus, turpis at sagittis fringilla, odio tortor viverra diam, ut ultricies nisi justo a nisi. Maecenas a venenatis ex, at dignissim lacus. Nunc vulputate, tortor vel rhoncus tincidunt, odio tortor rutrum odio, sit amet sollicitudin libero dolor at justo. Sed bibendum urna elit, non sodales nibh dignissim in. Proin eu nisi ac libero semper varius. In finibus at tellus id tristique. Fusce sollicitudin nibh nec dolor efficitur vestibulum. In eu mauris quam. Suspendisse potenti. Nulla consectetur ultrices sagittis.

Vivamus commodo felis nec quam sagittis, vel maximus dolor ultricies. Pellentesque consectetur lorem in nisi auctor, nec fermentum risus facilisis. Proin sed justo at nunc congue consectetur at in ex. Praesent at nisi quam. Pellentesque hendrerit blandit facilisis. Donec vehicula aliquam elit nec rhoncus. Nulla facilisi. Fusce in felis lectus. Suspendisse et dictum tortor. Sed laoreet id urna a hendrerit. Sed pellentesque, justo at feugiat tristique, ligula risus tristique enim, id ultrices elit libero eget velit. Integer sagittis enim arcu, non iaculis felis congue sit amet. Integer vitae libero ut ex luctus venenatis. Sed non lacinia elit. Sed eleifend odio eu semper euismod.
`;

// Almacenar el texto de Lorem Ipsum en una nueva variable de cadena llamada longText
const longText = loremIpsumParagraphs;

// Contar el número de palabras en la cadena longText
const wordsCount = longText.split(/\s+/).filter(word => word !== "").length;
console.log("Número de palabras en la cadena: ", wordsCount);

// Contar el número de veces que aparece la palabra "et" en la cadena longText
const latinWord = "et";
let latinWordCount = 0;

let index = 0;
while (index !== -1) {
  index = longText.indexOf(latinWord, index);
  if (index !== -1) {
    latinWordCount++;
    index++;
  }
}

console.log(`Número de veces que aparece la palabra "${latinWord}": ${latinWordCount}`);


// Bono 2: Comprobar si una cadena es un palíndromo

const phraseToCheck = "¡Un hombre, un plan, un canal, Panamá!";
// Puedes cambiar el valor de la variable phraseToCheck para probar otras frases

// Función para limpiar la cadena y eliminar caracteres no alfanuméricos
function cleanString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Función para comprobar si una cadena es un palíndromo
function isPalindrome(str) {
  const cleanedStr = cleanString(str);
  const strLength = cleanedStr.length;

  for (let i = 0; i < strLength / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[strLength - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Comprobar si phraseToCheck es un palíndromo
const result = isPalindrome(phraseToCheck);

// Mostrar el resultado
if (result) {
  console.log(`"${phraseToCheck}" es un palíndromo.`);
} else {
  console.log(`"${phraseToCheck}" NO es un palíndromo.`);
}

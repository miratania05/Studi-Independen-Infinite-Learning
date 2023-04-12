// TUGAS MEMBUAT CONTOH CODE CONTROL FLOW JAVASCRIPT
// INFINITE LEARNING
// MIRA TANIA


// Block statement
console.log('\n**Block statements**');
{
    let x = 1;
    const y = 2;
    console.log(x + y); // output: 3
  }
  


// if...else statements
console.log('\n**if...else statements**');
  let umur = 20;
  if (umur >= 18) {
    console.log("Anda sudah dewasa.");
  } else {
    console.log("Anda masih di bawah umur.");
  }
  


// Falsy values
console.log('\n**Falsy values**');
  let myVar;
  if (myVar) {
    console.log("Truthy value");
  } else {
    console.log("Falsy value"); // output: "Falsy value"
  }
  


// Switch statement
console.log('\n**Switch statement**');
  let fruit = "anggur";
  switch (fruit) {
    case "jeruk":
      console.log("Jeruk");
      break;
    case "anggur":
      console.log("Anggur"); // output: "Anggur"
      break;
    default:
      console.log("Buah tidak diketahui");
  }
  


// Break statement
console.log('\n**Break statement**');
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
    if (i === 3) {
      break;
    }
  }
  


// Exception handling statement
console.log('\n**Exception handling statement**');
  try {
    let x = 5;
    let y = x + z; // z is not defined
  } catch (error) {
    console.log("Terjadi kesalahan: " + error.message) // output: "Terjadi kesalahan: z is not defined"
  }
  


// Throw statement
console.log('\n**Throw statement**');
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Tidak dapat dibagi dengan nol");
    }
    return a / b;
  }



// Try...catch statement
console.log('\n**Try...catch statement**');
  try {
    let result = divide(6, 0);
    console.log(result);
  } catch (error) {
    console.log("Terjadi kesalahan: " + error.message); // output: "Terjadi kesalahan: Tidak dapat dibagi dengan nol"
  }
  


// The catch block
console.log('\n**The catch block**');
  try {
    let x = 5;
    let y = x + z; // z is not defined
  } catch {
    console.log("Terjadi kesalahan"); // output: "Terjadi kesalahan"
  }
  


// For statement
console.log('\n**For statement**');
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  // output:
  //0
  //1
  //2



// Do...while statement
console.log('\n**Do...while statement**');
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j < 4);
  // output:
  //0
  //1
  //2
  //3



// While statement
console.log('\n**While statement**');
  let k = 0;
  while (k < 5) {
    console.log(k);
    k++;
  }
  // output:
  //0
  //1
  //2
  //3
  //4
  


// Labeled statement
console.log('\n**Labeled statement**');
  outerloop: for (let i = 0; i < 3; i++) {
    innerloop: for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        break outerloop;
      }
      console.log(`i = ${i}, j = ${j}`);
    }
  }
  // output:
  //i = 0, j = 0
  //i = 0, j = 1
  //i = 0, j = 2
  //i = 1, j = 0



// Break and continue
console.log('\n**Break and continue**');
  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
    if (i === 3) {
      break;
    }
  }
  // output:
  //0
  //1
  //3
// Mencatat waktu mulai  
let startTime = new Date().getTime();  

// Menampilkan "Hello Santri" sebanyak 10.000 kali  
for (let i = 0; i < 10000; i++) {  
    console.log("Hello Santri");  
}  

// Mencatat waktu selesai  
let endTime = new Date().getTime();  

// Menghitung waktu yang dibutuhkan dalam milisecond  
let elapsedTime = endTime - startTime;  

console.log("Waktu yang dibutuhkan: " + elapsedTime + " milisecond");
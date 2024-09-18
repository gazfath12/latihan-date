// soal 1
const today = new Date();
const currentYear = today.getFullYear(); // Lengkapi untuk mendapatkan tahun
console.log(currentYear); // 2024

// soal 2
const now = new Date();
const isoDate = now.toISOString(); // Lengkapi untuk mendapatkan format ISO
console.log(isoDate); // 2024-09-18T03:12:05:082Z

// soal 3

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[date.getMonth()]; // Lengkapi untuk mendapatkan bulan dari 0-11
console.log(monthName); // september

// soal 4

const startDate = new Date('2024-01-01');  
const endDate = new Date('2024-12-31');  
const difference = endDate.getTime() - startDate.getTime(); // Menghitung selisih dalam milidetik  
console.log(difference); // 31536000000

// soal 5


const date1 = new Date('2024-09-18');
const dayOfWeek = date1.getDay(); // Lengkapi untuk mendapatkan hari dalam minggu
console.log(dayOfWeek); //3

// soal 6

const currentTime = new Date();
const hours = currentTime.getHours(); // Mendapatkan jam
const minutes = currentTime.getMinutes(); // Mendapatkan menit
const seconds = currentTime.getSeconds(); // Mendapatkan detik
console.log(`Current time: ${hours}:${minutes}:${seconds}`); // curent time :10:12:5

// soal 7


const date2 = new Date();  
const day = String(date2.getDate()).padStart(2, '0'); // Mendapatkan tanggal  
const month = String(date2.getMonth() + 1).padStart(2, '0'); // Mendapatkan bulan (0-11, ditambah 1)  
const year = date2.getFullYear(); // Mendapatkan tahun  
console.log(`${day}/${month}/${year}`); // 18/09/2024

// soal 8


const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const differenceInTime = end.getTime() - start.getTime();
const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Konversi dari milidetik ke hari
console.log(differenceInDays); // 365

// soal 9


const today1 = new Date();  
today1.setDate(today1.getDate() + 7); // Tambahkan 7 hari  
console.log(today1); // output : 2024-09-18T03:24:30.500Z

// soal 10


const localTime = new Date();  
const utcTime = localTime.toUTCString(); // Mendapatkan waktu UTC  
console.log(utcTime); // output : 3
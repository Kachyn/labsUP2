// Зчитуємо режим роботи із змінних оточення
const appStatus = process.env.VITE_APP_STATUS || 'Development';

console.log(`=================================`);
console.log(` СТАТУС ЗАСТОСУНКУ: ${appStatus}`);
console.log(`=================================`);

// Головна логіка запуску дрона
function startDroneSystem() {
  console.log("Ініціалізація систем наземного дрона на базі ESP32...");
  console.log("Перевірка зв'язку з WebSocket сервером ESP32-CAM...");
  
  if (appStatus === 'Production Mode') {
    console.log("РЕЖИМ: Підключення до реального заліза активовано.");
  } else {
    console.log("РЕЖИМ: Запущено симуляцію (Hardware Emulation).");
  }
}

// Запуск програми
startDroneSystem();

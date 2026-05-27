[![Drone Control Panel CI/CD](https://github.com/Kachyn/labsUP2/actions/workflows/drone-ci.yml/badge.svg)](https://github.com/Kachyn/labsUP2/actions/workflows/drone-ci.yml)
# Remote Control & Statistics Panel for ESP32 Ground Drone

### Опис ідеї MVP
Веб-інтерфейс (пульт керування) та система збору статистики для дистанційного наземного дрона на базі мікроконтролера ESP32-C6. MVP включає веб-панель для передачі команд руху, відображення поточного статусу двигунів, трансляцію відеопотоку з камери та збереження статистики поїздок у базу даних.

### Інструкція з запуску
1. Склонуйте цей репозиторій.
2. Відкрийте файл `public/index.html` у браузері для доступу до панелі керування.
3. Логіка обробки даних поїздок знаходиться в папці `src/`.

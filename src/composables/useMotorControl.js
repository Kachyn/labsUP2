import { ref } from 'vue';

export function useMotorControl() {
  const leftMotorSpeed = ref(0);
  const rightMotorSpeed = ref(0);
  const RIGHT_MOTOR_COEFFICIENT = 0.85;

  function calculateSpeeds(baseSpeed, direction) {
    if (baseSpeed < 0 || baseSpeed > 100) {
      throw new Error('Швидкість повинна бути в межах від 0 до 100');
    }

    if (direction === 'forward') {
      leftMotorSpeed.value = baseSpeed;
      rightMotorSpeed.value = baseSpeed;
    } else if (direction === 'stop') {
      leftMotorSpeed.value = 0;
      rightMotorSpeed.value = 0;
    }
    
    return { left: leftMotorSpeed.value, right: rightMotorSpeed.value };
  }

  return { leftMotorSpeed, rightMotorSpeed, calculateSpeeds };
}

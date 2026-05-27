import { describe, it, expect } from 'vitest';
import { useMotorControl } from '../useMotorControl';

describe('Тестування логіки керування двигунами дрона', () => {
  it('коректно розраховує швидкість руху вперед з коефіцієнтом 0.85 для правих коліс', () => {
    const { calculateSpeeds } = useMotorControl();
    const speeds = calculateSpeeds(100, 'forward');
    expect(speeds.left).toBe(100);
    expect(speeds.right).toBe(85);
  });

  it('повертає 0 для обох моторів при зупинці', () => {
    const { calculateSpeeds } = useMotorControl();
    const speeds = calculateSpeeds(0, 'stop');
    expect(speeds.left).toBe(0);
    expect(speeds.right).toBe(0);
  });

  it('викидає помилку, якщо значення базової швидкості поза діапазоном (>100)', () => {
    const { calculateSpeeds } = useMotorControl();
    expect(() => calculateSpeeds(120, 'forward')).toThrow();
  });

  it('використовує фіксовані дані з сенсора відстані (Stub)', () => {
    const mockUltrasonicSensor = { getDistance: () => 15 };
    function checkObstacle(sensor) {
      return sensor.getDistance() < 20 ? 'STOP_TRIGGERED' : 'CLEAR';
    }
    expect(checkObstacle(mockUltrasonicSensor)).toBe('STOP_TRIGGERED');
  });

  it('викликає функцію відправки команди на ESP32-CAM (Mock-взаємодія)', () => {
    let commandSent = null;
    const mockTelemetryService = { sendWSCommand: (cmd) => { commandSent = cmd; } };
    mockTelemetryService.sendWSCommand('MOVE_FORWARD');
    expect(commandSent).toBe('MOVE_FORWARD');
  });
});

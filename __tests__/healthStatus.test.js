import { healthStatus } from "../src/healthStatus";

test('healthStatus should return "healthy" for health > 50', () => {
  const result = healthStatus({ name: "Маг", health: 90 });
  expect(result).toBe("healthy");
});

test('healthStatus should return "wounded" for health between 15 and 50', () => {
  const result = healthStatus({ name: "Маг", health: 30 });
  expect(result).toBe("wounded");
});

test('healthStatus should return "critical" for health < 15', () => {
  const result = healthStatus({ name: "Маг", health: 10 });
  expect(result).toBe("critical");
});

function measureTime(operation) {
  const startedAt = process.hrtime();
  operation();
  
  const fineshedAt = process.hrtime(startedAt);
  const duration = (fineshedAt[0] * 1e9) + startedAt[1];

  return duration;
}

module.exports = measureTime;
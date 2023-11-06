  const formatValue = (value: number, divisor: number) => {
    return ("0" + Math.floor((value / divisor) % 60)).slice(-2);
  };

  export const formatTimer = (currentTimer: number) => {
    const hours = formatValue(currentTimer, 600000);
    const minutes = formatValue(currentTimer, 60000);
    const seconds = formatValue(currentTimer, 1000);
    const milliseconds = ("0" + ((currentTimer / 10) % 100)).slice(-2);

    return { hours, minutes, seconds, milliseconds };
  };
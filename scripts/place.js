document.addEventListener('DOMContentLoaded', function () {
    const temperatureFahrenheit = 45;
    const windSpeedMph = 5;
    function calculateWindChill(temperature, windSpeed) {
        return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    }
    const windChillElement = document.getElementById('windChill');
    if (temperatureFahrenheit <= 50 && windSpeedMph > 3) {
        const windChill = calculateWindChill(temperatureFahrenheit, windSpeedMph);
        if (windChillElement) {
            windChillElement.textContent = `${windChill.toFixed(1)}°F`;
        }
    } else {
        if (windChillElement) {
            windChillElement.textContent = "N/A";
        }
    }
});

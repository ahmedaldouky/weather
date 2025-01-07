document.getElementById("get-weather").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Log location to backend
      await fetch("https://your-backend-service.com/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latitude, longitude }),
      });

      document.getElementById("status").innerText =
        `Your location (${latitude}, ${longitude}) has been logged.`;
    });
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});

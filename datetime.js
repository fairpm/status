(function() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDateTimeDisplay);
  } else {
    updateDateTimeDisplay();
  }

  function updateDateTimeDisplay() {
    const datetimeElement = document.getElementById('datetimeDisplay');

    if (!datetimeElement) {
      console.warn('Element with id "datetimeDisplay" not found');
      return;
    }

    function updateTime() {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
      };

      datetimeElement.textContent = now.toLocaleString('en-US', options);
    }

    // Update immediately
    updateTime();

    // Update every minute to keep it current
    setInterval(updateTime, 60000);
  }
})();

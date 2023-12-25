function downloadPDF() {
    // Create a link element
    var link = document.createElement('a');
    link.href = '../Resume.pdf';
    link.download = 'Mohamed Emam Resume.pdf'; // Set the desired file name

    // Simulate a click event to trigger the download
    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      link.dispatchEvent(event);
    } else {
      link.click();
    }
  }
$(document).ready(function () {
    var selectedCount = 0;
    $('input[type="checkbox"]').on('change', function () {
      if (this.checked) {
        selectedCount++;
        if (selectedCount >= 3) {
          $('input[type="checkbox"]').prop('disabled', true);
        }
      }
    });
  });
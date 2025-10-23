$(document).ready(function () {
  $('#appForm').on('submit', function (e) {
    e.preventDefault();

    const appName = $('#appName').val().trim();
    const company = $('#company').val().trim();
    const website = $('#website').val().trim();
    const description = $('#description').val().trim();

    const nameRegex = /^[A-Za-z]+$/;
    const companyRegex = /^[A-Za-z\s]+$/;
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(\/[\w\-]*)*\/?$/;

    if (!nameRegex.test(appName)) {
      alert("App name must be English letters only, no spaces.");
      return;
    }

    if (!companyRegex.test(company)) {
      alert("Company name must be English letters only.");
      return;
    }

    if (!urlRegex.test(website)) {
      alert("Invalid URL.");
      return;
    }

    if (description.length < 5) {
      alert("Description is too short.");
      return;
    }

    // حفظ البيانات في localStorage
    const appData = {
      appName,
      company,
      website,
      free: $('#free').val(),
      field: $('#field').val(),
      description
    };

    localStorage.setItem('newApp', JSON.stringify(appData));
    window.location.href = "html.apps.html";
  });
});

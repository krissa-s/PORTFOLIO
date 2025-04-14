document.addEventListener("DOMContentLoaded", function () {
    const resumeBtn = document.getElementById("resumeBtn");
    const contactBtn = document.getElementById("contactBtn");
  
    if (resumeBtn) {
      resumeBtn.addEventListener("click", function () {
        window.location.href = "resume.html";
      });
    }
  
    if (contactBtn) {
      contactBtn.addEventListener("click", function () {
        window.location.href = "contact.html";
      });
    }
  });

  
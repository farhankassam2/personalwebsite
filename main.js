
function toggle(id) {
    var element = document.getElementById(id);

    switch (element) {
      case technical_skills:
        element.style.display = "block";
        document.getElementById('technical_projects').style.display = "none";
        document.getElementById('work_experience').style.display = "none";
        document.getElementById('community_involvement').style.display = "none";
        document.getElementById('education').style.display = "none";
        document.getElementById('extra_curriculars').style.display = "none";
        document.getElementById('home').style.display = "none";

        break;
      case technical_projects:
        element.style.display = "block";
        document.getElementById('technical_skills').style.display = "none";
        document.getElementById('work_experience').style.display = "none";
        document.getElementById('community_involvement').style.display = "none";
        document.getElementById('education').style.display = "none";
        document.getElementById('extra_curriculars').style.display = "none";
        document.getElementById('home').style.display = "none";

        break;
      case work_experience:
        element.style.display = "block";
        document.getElementById('technical_skills').style.display = "none";
        document.getElementById('technical_projects').style.display = "none";
        document.getElementById('community_involvement').style.display = "none";
        document.getElementById('education').style.display = "none";
        document.getElementById('extra_curriculars').style.display = "none";
        document.getElementById('home').style.display = "none";

        break;
      case community_involvement:
          element.style.display = "block";
          document.getElementById('technical_skills').style.display = "none";
          document.getElementById('technical_projects').style.display = "none";
          document.getElementById('work_experience').style.display = "none";
          document.getElementById('education').style.display = "none";
          document.getElementById('extra_curriculars').style.display = "none";
          document.getElementById('home').style.display = "none";

          break;
      case education:
              element.style.display = "block";
              document.getElementById('technical_skills').style.display = "none";
              document.getElementById('technical_projects').style.display = "none";
              document.getElementById('work_experience').style.display = "none";
              document.getElementById('community_involvement').style.display = "none";
              document.getElementById('extra_curriculars').style.display = "none";
              document.getElementById('home').style.display = "none";

              break;
      case extra_curriculars:
                      element.style.display = "block";
                      document.getElementById('technical_skills').style.display = "none";
                      document.getElementById('technical_projects').style.display = "none";
                      document.getElementById('work_experience').style.display = "none";
                      document.getElementById('community_involvement').style.display = "none";
                      document.getElementById('education').style.display = "none";
                      document.getElementById('home').style.display = "none";

                      break;
      default: element.style.display = "none";

    }
}

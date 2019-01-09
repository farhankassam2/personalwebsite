
function toggle(id) {
    var element = document.getElementById(id);

    switch (element.id) {
      case "technical_skills":
        element.style.display = "block";
        // document.getElementById(element).style.display = "block";
        document.getElementById('technical_projects').style.display = "none";
        document.getElementById('work_experience').style.display = "none";
        document.getElementById('community_involvement').style.display = "none";
        document.getElementById('education').style.display = "none";
        document.getElementById('extra_curriculars').style.display = "none";
        document.getElementById('home').style.display = "none";

        break;
      case 'technical_projects':
        element.style.display = "block";
        document.getElementById('technical_skills').style.display = "none";
        document.getElementById('work_experience').style.display = "none";
        document.getElementById('community_involvement').style.display = "none";
        document.getElementById('education').style.display = "none";
        document.getElementById('extra_curriculars').style.display = "none";
        document.getElementById('home').style.display = "none";

        break;
      case 'work_experience':
        element.style.display = "block";
        document.getElementById('technical_skills').style.display = "none";
        document.getElementById('technical_projects').style.display = "none";
        document.getElementById('community_involvement').style.display = "none";
        document.getElementById('education').style.display = "none";
        document.getElementById('extra_curriculars').style.display = "none";
        document.getElementById('home').style.display = "none";

        break;
      case 'community_involvement':
          element.style.display = "block";
          document.getElementById('technical_skills').style.display = "none";
          document.getElementById('technical_projects').style.display = "none";
          document.getElementById('work_experience').style.display = "none";
          document.getElementById('education').style.display = "none";
          document.getElementById('extra_curriculars').style.display = "none";
          document.getElementById('home').style.display = "none";

          break;
      case 'education':
              element.style.display = "block";
              document.getElementById('technical_skills').style.display = "none";
              document.getElementById('technical_projects').style.display = "none";
              document.getElementById('work_experience').style.display = "none";
              document.getElementById('community_involvement').style.display = "none";
              document.getElementById('extra_curriculars').style.display = "none";
              document.getElementById('home').style.display = "none";

              break;
      case 'extra_curriculars':
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

// var file = "https://app.zohocreator.com/farhankassam/user-list-application/#Report:User_List_Report";
// String username = "";
// String password = "";
// String output = "";

// function on_click() {
//       // var textfile = new File(afilename);
//        username = document.getElementById('uname');
//        password = document.getElementById('psw');
//        output = username.concat(password);
//
//       file.writeln(output);
//       file.close();
// }

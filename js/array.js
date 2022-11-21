$(document).ready(function () {
  var student = [];

  $(".show_txt").hide();
  $('#chuc_nang').change(function () {
    var vl = $("#chuc_nang").val()
    if (vl == 1) {
      $(".show_txt").show();
      const element = document.getElementById("nhap_ten");
      element.addEventListener("click", add_new);
    } else if (vl == 5) {
      show_data(student);
    } else if (vl == 2) {
      $("#data").val("");
      const element = document.getElementById("nhap_ten");
      element.removeEventListener("click", add_new);
      element.addEventListener("click", update_data);
    }
  });

  function add_new() {
    var dt = $("#data").val();
    var vl = $("#chuc_nang").val()

    if (student.length == 0) {
      student = dt.split(",");
    } else {
      var data = dt.split(",");
      for (var i in data) {
        student.push(data[i])
      }
    }
    show_data(student);
  }

  function show_data(student) {
    var html = ""
    for (var i = 0; i < student.length; i++) {
      html = html + student[i];
    }
    $(".content").html(html);
  }

  function update_data() {
    var dt = $("#data").val();
    var f = dt.split(",")
    var newarr = f[0].concat(student)
    student = newarr.concat(f[1])
    $(".content").html(student);
  }
});

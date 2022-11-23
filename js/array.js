$(document).ready(function () {
  var student = [];

  $(".show_txt").hide();
  $('#chuc_nang').change(function () {
    var vl = $("#chuc_nang").val()
    const element = document.getElementById("nhap_ten");
    if (vl == 1) {
      $(".show_txt").show();
      element.addEventListener("click", add_new);
      element.removeEventListener("click", replay_data);
      element.removeEventListener("click", update_data);
    } else if (vl == 5) {
      show_data(student);
    } else if (vl == 2) {
      $("#data").val("");
      element.removeEventListener("click", replay_data);
      element.removeEventListener("click", add_new);
      element.addEventListener("click", update_data);
    } else if (vl == 3) {
      $("#data").val("");
      element.removeEventListener("click", update_data);
      element.removeEventListener("click", add_new);
      element.addEventListener("click", replay_data);
    }
  });

  function replay_data() {
    var tt = $("#data").val()
    alert(tt)
    student.splice(3, 1, tt);
    show_data(student);
  }

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

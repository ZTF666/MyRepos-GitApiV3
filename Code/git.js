let request = new XMLHttpRequest();

let searchBtn = document.getElementById("searchBtn");
let error = document.getElementById("error");

searchBtn.addEventListener("click", e => {
  e.preventDefault();

  let searchTerm = document.getElementById("searchTerm").value;
  if (searchTerm != "") {
    var str = searchTerm;

    request.open("GET", "https://api.github.com/users/" + str.replace(/\s/g, "") + "/repos", true);

    request.onload = function () {
      let data = JSON.parse(this.response);
      // console.log(data)
      let statusHtml = "";

      $.each(data, function (i, status) {
        statusHtml += "<tr>";
        statusHtml += "<td>" + status.id + "</td>";
        statusHtml += "<td>" + status.name + "</td>";
        statusHtml += "<td>" + status.language + "</td>";
        statusHtml += "<td>" + status.size + "</td>";
        statusHtml += "<td>" + status.stargazers_count + "</td>";
        statusHtml += "<td>" + status.forks_count + "</td>";
        // statusHtml +=
        //   "<td>" +
        //   '<a class="github-button" href="' +
        //   status.clone_url +
        //   '" data-icon="octicon-cloud-download">Clone</a>' +
        //   "</td>";
        statusHtml += "</tr>";
      });
      $("tbody").html(statusHtml);
    };

    request.send();
  } else {
    error.textContent = "Please Fill the search field !";
  }
});
setTimeout(function () {
  document.querySelector("#error").textContent = "My Github Repos";
}, 3000);
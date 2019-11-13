$(function() {
  function buildPost(post) {
    var html = `<div class="content">
                  ${post.text}
                </div>`;
    return html;
  }
  $("#new_post").on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
      .done(function(post) {
        var html = buildPost(post);
        $(".contents").append(html);
        $("#post_text").val("");
        // $(".btn").removeAttr("disabled");
        $(".btn").prop("disabled", false);
      })
      .fail(function() {
        alert("エラー");
      });
  });
});

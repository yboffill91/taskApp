$(function(){
  $('#tasks-card').hide();
  $("#search").keyup(function() {
    if($('#search').val()){
      let search = $("#search").val()
    $.ajax({
      url: './backend/task-search.php',
      type: 'POST',
      data: {search},
      success: function(response){
        let template = '';
        let tasks = JSON.parse(response);
         tasks.forEach(task => {
            template += `
            <li>${task.name}</li>
            `
         });
         $('#search-result').html(template);
         $('#tasks-card').show();
      }
    });
    }
    });
  $('#task-form').submit(function(e){
    e.preventDefault();
    const data = {
      "name": $('#name').val(),
      "decription": $('#description').val()
    };
    $.post('./backend/task-add.php',data,function(res){
      console.log(res);
    });
  })
})
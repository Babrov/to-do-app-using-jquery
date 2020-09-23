$(document).ready(function(){
    let $tasks = $("#tasks");
    let $taskInput = $("#add__task");
    
    $("#add__button").on("click",function(){
        addTask();
        deleteTask();
    });
    $("#add__task").on("keyup",function(e){
        if (e.keyCode == 13){
            addTask();
            deleteTask();
        }
    });


    // task add function
    function addTask(){
        if ($taskInput.val().length >0) {
            $("#tasks").append("<li><input type='checkbox'" + 
            " name='task_done'" + " class='task_done ui-state-default'"+ 
            " value='" + $taskInput.val() + "' /> "+ $taskInput.val()  +
            " <button class='task_delete'>"+"&#10006</button></li>");
            $taskInput.val("");
        } else {
            return alert("Add Task!");
        }
        
    }
    //drag & drop function
    
    $("#done_holder,#tasks").sortable({
        connectWith: ".connectedSortable",
    }).disableSelection();

    $("#done_holder").on("sortreceive",function(){
        $("li","#done_holder").addClass("strike");
        $(".task_done","#done_holder").prop("checked",true);
        
    });
    $tasks.on("sortreceive",function() {
        $("li",tasks).removeClass("strike");
        $(".task_done",$tasks).prop("checked",false);
    });
    

    //delete function
    function deleteTask(){

        $(".task_delete").on("click",function(){
            let $parent = $(this).parent();
            $parent.remove();
        });
    }
    
    // checkbox function
    function completeTask() {
        $(this).parent().addClass("strike");
        $(this).parent().appendTo("#done_holder");
    }
    $($tasks).on('click', ".task_done", completeTask);


    
    // return to to do list
    /*
        function returnTask() {
        $(this).parent().toggleClass("strike");
        $(this).parent().appendTo($tasks);
    }
    $("#done_holder").on("click",".task_done",returnTask);
    */
    
    
    

    
});
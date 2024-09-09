$(document).ready(function(){
    var oldPswflag=0;
    var newPswflag=0;
    $("#name").text($("#nameVal").text());
    $("#email").val($("#emailVal").text());
    $("#telephone").val($("#telephoneVal").text());
    $("#changeInfo").click(function(){
        $("#update-info").modal({
            backdrop:'static'
        });
    });


    $("#saveInfo").click(function (){
        var saveInfo={};
        saveInfo.name=$("#name").val();
        saveInfo.email=$("#email").val();
        saveInfo.telephone=$("#telephone").val();
        $.ajax({
            type: "POST",
            url: "/shop/saveInfo",
            contentType:"application/x-www-form-urlencoded; charset=utf-8",
            data:saveInfo,
            dateType:"json",
            success: function(result){
                if (result.msg=="更新失败")
                {
                    swal(result.msg);
                }
                else {
                    $("#update-info").modal('hide');
                    swal("修改成功", "", "success");
                    $("button").click(function (){
                        location.reload();
                    });
                }
            },
            error:function (){
                alert("更新失败");
            }
        });
    });

    $("#changePsw").click(function (){
        $("#update-Psw").modal({
            backdrop:'static'
        });
    });



});

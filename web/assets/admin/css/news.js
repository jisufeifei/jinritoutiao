$(function () {
    let tbody = $('#tbody');
    let add = $('#add');
    let progress = $('#progress');

    $(document).ajaxStart(function () {
        progress.show();
    });
    $(document).ajaxComplete(function () {
        progress.hide();
    });

    tbody.on('blur','.form-control',function () {
        let id = $(this).closest('tr').attr('data-id');
        let k = $(this).attr('data-type');
        let v = $(this).val();
       $.ajax({
           url:'/news/admin.php?c=news&m=update',
           data:{
               id:id,
               k:k,
               v:v,
           }
       })
    });

    tbody.on('click', '.remove', function () {
        let id = $(this).closest('tr').attr('data-id');
        $.ajax({
            url:'/news/admin.php?c=news&m=delete&id='+ id,
            success:function (data) {
                if (data == 1) {
                    location.reload();
                }else{
                    alert('error');
                }
            }
        })
    });

    add.on('click', function () {
        $.ajax({
            url: '/news/admin.php?c=news&m=insert',
            success: function (data) {
                if (data == 1) {
                    location.reload();
                } else {
                    alert('error');
                }
            }
        })
    })
});
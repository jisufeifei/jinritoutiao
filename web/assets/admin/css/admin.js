$(function () {
    $('#ul').on('click', '.remove', function () {
        var id = $(this).closest('li').attr('data-id');
        $.ajax({
            url: '/news/admin.php',
            data: {
                c: 'news',
                action: 'delete',
                id: id,
            },
            success: function (data) {
                if (data == 1) {
                    alert('删除成功');
                    location.reload();
                } else {
                    alert('网络问题')
                }
            },
        })
        // $(this).closest('li').remove();
    });
    $('#ul').on('blur', 'input', function () {
        var title = $(this).val();
        var id = $(this).closest('li').attr('data-id');
        $.ajax({
            url: '/news/admin.php',
            data: {
                c: 'news',
                action: 'input',
                id: id,
                title: title
            },
            success: function (data) {
                console.log(data);
            }
        })
    });
    $('#submit').on('click', function () {
        $.ajax({
            url: '/news/admin.php',
            data: {
                c: 'news',
                action: 'insert',
                title: $('#title').val(),
                dsc: $('#dsc').val(),
                content: $('#content').val(),
            },
            success: function (data) {
                if (data == 1) {
                    alert('添加成功');
                    location.reload();
                } else {
                    alert('网络问题')
                }
            }
        })
    })
});


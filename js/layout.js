 $(document).ready(function () {
            $('.dropdown-toggle').dropdown();
            //限制字符个数，对span的文本进行隐藏
            $('.postcontent').each(function(){
      				var maxwidth=460;
      				if($(this).html().length>maxwidth){
      				$(this).text($(this).text().substring(0,maxwidth));
      				$(this).html($(this).html()+'...');
      				}
      				});
            // 重置表单
            $("#closeBtn").click(function()
      				{
      					$("input").val("");
      				});
            //简单表单验证
            var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
           $("#submit").click(function()
           	{
          		if($("#inputEmail").val() == "" || $("#inputUser").val() == "")
          		{
          			$("#sub .modal-body p").text("昵称或者邮箱不能为空,网址可以为空");
          		}
          		else if(!filter.test($("#inputEmail").val()))
          		{
          			$("#sub .modal-body p").text("邮箱格式不正确，重新填写");
          		}
          		else
          		{
          			$("#sub .modal-body p").text("评论已经提交，等待审核");
          		}
           	});
          $("#can").click(function()
          	{
          		var time = "3";
          		function count()
          		{
                setTimeout(count,1000);
          			$("#back").text(time);
                time--;
                if(time < 1)
                {
                  time = "3";
                  window.open("index.html","_self");
                }
          		}
              count();
          	});
            // 当窗口改变时，不改变布局
            $(window).resize(function () {
              if(window.innerWidth < screen.availWidth)
              {
                $(".container-fluid").css("width","1309px");
              }
            });
            //若一打开浏览器，防止窗口过小影响布局
            $(window).load(function () {
              if(window.innerWidth < screen.availWidth)
              {
                $(".container-fluid").css("width","1309px");
              }
            });
            // 不能输入汉字
            var ch = /^[0-9a-zA-Z][0-9a-zA-Z]{1,6}$/;
            //登陆按钮对应
            $("#login_btn").click(function()
              {
                if($("#inputLogin").val() == "" && $("#inputPassword").val() == "")
                {
                  $("#tips1").text("(昵称不能为空)");
                  $("#tips2").text("(密码不能为空)");
                }
                else if($("#inputLogin").val() == "" && !$("#inputPassword").val() == "")
                {
                  $("#tips1").text("(昵称不能为空)");
                }
                else if(!$("#inputLogin").val() == "" && $("#inputPassword").val() == "")
                {
                  $("#tips2").text("(密码不能为空)");
                }
              
               else if(!ch.test($("#inputLogin").val()) || $("#inputLogin").val().length >= 6)
                {
                  $("#tips1").text("(只包含非中文字符且长度小于6)");
                  $("#tips2").text("");
                }
                else if($("#inputPassword").val().length < 6)
                {
                  $("#tips1").text("");
                  $("#tips2").text("(密码长度不能小于6位)");
                }
                else
                {
                  $(this).attr("data-dismiss","modal");
                  $(this).attr("aria-hidden","true");
                  $(this).attr("id","closeBtn");
                  $("#userlogin").text($("#inputLogin").val());
                }
               
              });
        });
 // 当窗口改变时，不改变布局，在body上添加onResize
 /*function dosome()
  {
    if(window.innerWidth < screen.availWidth)
    {
      $(".container-fluid").css("width","1309px");
    }
  }*/
 
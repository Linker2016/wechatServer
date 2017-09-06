
$.ajax({
    type: "POST",
    url: "/gettickite",
    data: {"url":window.location.href.split('#')[0]},
    dataType: "json",
    success: function(data){
        if(data.status==200){
            //通过config接口注入权限验证配置
            wx.config({
                debug: false,
                appId: 'wx892f86837edf6a1b',
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone'
                ]
            });
            //通过ready接口处理成功验证
            //wx.ready(function(){
            //    wx.checkJsApi({
            //        jsApiList: [
            //            'checkJsApi',
            //            'onMenuShareTimeline',
            //            'onMenuShareAppMessage',
            //            'onMenuShareQQ',
            //            'onMenuShareWeibo',
            //            'onMenuShareQZone',
            //            'hideMenuItems',
            //            'showMenuItems',
            //            'hideAllNonBaseMenuItem',
            //            'showAllNonBaseMenuItem',
            //            'translateVoice',
            //            'startRecord',
            //            'stopRecord',
            //            'onVoiceRecordEnd',
            //            'playVoice',
            //            'onVoicePlayEnd',
            //            'pauseVoice',
            //            'stopVoice',
            //            'uploadVoice',
            //            'downloadVoice',
            //            'chooseImage',
            //            'previewImage',
            //            'uploadImage',
            //            'downloadImage',
            //            'getLocalImgData',
            //            'getNetworkType',
            //            'openLocation',
            //            'getLocation',
            //            'hideOptionMenu',
            //            'showOptionMenu',
            //            'closeWindow',
            //            'scanQRCode',
            //            'chooseWXPay',
            //            'openProductSpecificView',
            //            'addCard',
            //            'chooseCard',
            //            'openCard'
            //        ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            //        success: function(res) {
            //            // 以键值对的形式返回，可用的api值true，不可用为false
            //            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            //            console.log(JSON.stringify(res));
            //        }
            //    });
            //    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后
            //    //wx.onMenuShareTimeline({
            //    //	title: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享标题
            //    //	link: 'http://xatrm.iptrm.com/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //    //	imgUrl: 'http://xatrm.iptrm.com/icon.jpg', // 分享图标
            //    //	success: function () {
            //    //		// 用户确认分享后执行的回调函数
            //    //	},
            //    //	cancel: function () {
            //    //		// 用户取消分享后执行的回调函数
            //    //	}
            //    //});
            //    //wx.onMenuShareAppMessage({
            //    //   title: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享标题
            //    //   desc: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享描述
            //    //   link: 'http://xatrm.iptrm.com/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //    //   imgUrl: 'http://xatrm.iptrm.com/icon.jpg', // 分享图标
            //    //   success: function () {
            //    //       // 用户确认分享后执行的回调函数
            //    //   },
            //    //   cancel: function () {
            //    //       // 用户取消分享后执行的回调函数
            //    //   }
            //    //});
            //    //wx.onMenuShareQQ({
            //    //   title: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享标题
            //    //   desc: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享描述
            //    //   link: 'http://xatrm.iptrm.com/', // 分享链接
            //    //   imgUrl: 'http://xatrm.iptrm.com/icon.jpg', // 分享图标
            //    //   success: function () {
            //    //       // 用户确认分享后执行的回调函数
            //    //   },
            //    //   cancel: function () {
            //    //       // 用户取消分享后执行的回调函数
            //    //   }
            //    //});
            //    //wx.onMenuShareWeibo({
            //    //   title: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享标题
            //    //   desc: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享描述
            //    //   link: 'http://xatrm.iptrm.com/', // 分享链接
            //    //   imgUrl: 'http://xatrm.iptrm.com/icon.jpg', // 分享图标
            //    //   success: function () {
            //    //       // 用户确认分享后执行的回调函数
            //    //   },
            //    //   cancel: function () {
            //    //       // 用户取消分享后执行的回调函数
            //    //   }
            //    //});
            //    //wx.onMenuShareQZone({
            //    //   title: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享标题
            //    //   desc: '我在参加“我为科技大市场代言”活动，你也一起来吧', // 分享描述
            //    //   link: 'http://xatrm.iptrm.com/', // 分享链接
            //    //   imgUrl: 'http://xatrm.iptrm.com/icon.jpg', // 分享图标
            //    //   success: function () {
            //    //       // 用户确认分享后执行的回调函数
            //    //   },
            //    //   cancel: function () {
            //    //       // 用户取消分享后执行的回调函数
            //    //   }
            //    //});
            //});
            wx.error(function(res){
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

            });
        }
    }
});

function showExample(){
    document.getElementById("S1").style.display = "block";
    document.getElementById("S3").style.display = "none";
    document.getElementById("S4").style.display = "none";
    document.getElementById("S2").style.display = "none";
}

function showForm(){
	document.getElementById("S1").style.display = "none";
    document.getElementById("S3").style.display = "none";
    document.getElementById("S4").style.display = "none";
	document.getElementById("S2").style.display = "block";
}
function showResult(){
	if(formCheck()){
		$("#c_name").html(document.getElementById("name").value);
		$("#c_location").html(document.getElementById("location").value);
		$("#show_img").css("background-image",$("#uploaderFiles li").css("background-image"));

		document.getElementById("S2").style.display = "none";
        document.getElementById("S4").style.display = "none";
		document.getElementById("S3").style.display = "block";
	}
}
function formCheck(){
	if(document.getElementById("name").value == ""){
		$("#iosDialog2 .weui-dialog__bd").html("请输入姓名");
		$('#iosDialog2').fadeIn(200);
	}else if(document.getElementById("location").value == ""){
		$("#iosDialog2 .weui-dialog__bd").html("请输入地点");
		$('#iosDialog2').fadeIn(200);
	}else if($("#uploaderFiles li").length == 0){
		$("#iosDialog2 .weui-dialog__bd").html("请上传照片");
		$('#iosDialog2').fadeIn(200);
	}else{
		return true;
	}

	$('.weui-dialog__btn').on('click',function(){
	    $(this).parents('.js_dialog').fadeOut(200);
	});
}
function saveImg(){
    html2canvas($("#S3"), {
	onrendered: function(canvas) {
				canvas.id = "mycanvas";
				//document.body.appendChild(canvas);
				//生成base64图片数据
				var dataUrl = canvas.toDataURL();
				var newImg = document.createElement("img");
				newImg.src =  dataUrl;
				$("#S3").html(newImg);
				$("#S3").append('<a class="weui-btn weui-btn_primary">长按图片保存</a>');
			}
	});
}
var tmpl = '<li class="weui-uploader__file" style="background-image:url(#url#)"></li>',
    $gallery = $("#gallery"), $galleryImg = $("#galleryImg"),
    $uploaderInput = $("#uploaderInput"),
    $uploaderFiles = $("#uploaderFiles");

$uploaderInput.on("change", function(e){
    var file = e.target.files[0];
    //图片方向角 added by lzk
    var Orientation = null;
    var baseImg = null;

    if (file) {
        console.log("正在上传,请稍后...");
        var rFilter = /^(image\/jpeg|image\/png)$/i; // 检查图片格式
        if (!rFilter.test(file.type)) {
            //showMyTips("请选择jpeg、png格式的图片", false);
            return;
        }
        // var URL = URL || webkitURL;
        //获取照片方向角属性，用户旋转控制
        EXIF.getData(file, function() {
            // alert(EXIF.pretty(this));
            EXIF.getAllTags(this);
            //alert(EXIF.getTag(this, 'Orientation'));
            Orientation = EXIF.getTag(this, 'Orientation');
            //return;
        });

        var oReader = new FileReader();
        oReader.onload = function(e) {
            //var blob = URL.createObjectURL(file);
            //_compress(blob, file, basePath);
            var image = new Image();
            image.src = e.target.result;
            image.onload = function() {
                //var expectWidth = this.naturalWidth;
                //var expectHeight = this.naturalHeight;
                //
                //if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                //    expectWidth = 800;
                //    expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
                //} else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                //    expectHeight = 1200;
                //    expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
                //}
                var MAX_HEIGHT = 800;
                if(image.height > MAX_HEIGHT) {
                    image.width *= MAX_HEIGHT / image.height;
                    image.height = MAX_HEIGHT;
                }
                var expectWidth = image.width;
                var expectHeight = image.height;

                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                canvas.width = expectWidth;
                canvas.height = expectHeight;
                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                var base64 = null;
                //修复ios
                if (navigator.userAgent.match(/iphone/i)) {
                    console.log('iphone');
                    //alert(expectWidth + ',' + expectHeight);
                    //如果方向角不为1，都需要进行旋转 added by lzk
                    if(Orientation != "" && Orientation != 1){
                       // alert('旋转处理');
                        switch(Orientation){
                            case 6://需要顺时针（向左）90度旋转
                                //alert('需要顺时针（向左）90度旋转');
                                rotateImg(this,'left',canvas);
                                break;
                            case 8://需要逆时针（向右）90度旋转
                                //alert('需要顺时针（向右）90度旋转');
                                rotateImg(this,'right',canvas);
                                break;
                            case 3://需要180度旋转
                                //alert('需要180度旋转');
                                rotateImg(this,'right',canvas);//转两次
                                rotateImg(this,'right',canvas);
                                break;
                        }
                    }

                    /*var mpImg = new MegaPixImage(image);
                     mpImg.render(canvas, {
                     maxWidth: 800,
                     maxHeight: 1200,
                     quality: 0.8,
                     orientation: 8
                     });*/
                    base64 = canvas.toDataURL("image/jpeg", 0.5);
                }else if (navigator.userAgent.match(/Android/i)) {// 修复android
                    var encoder = new JPEGEncoder();
                    base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);
                }else{
                    //alert(Orientation);
                    if(Orientation != "" && Orientation != 1){
                        //alert('旋转处理');
                        switch(Orientation){
                            case 6://需要顺时针（向左）90度旋转
                                //alert('需要顺时针（向左）90度旋转');
                                rotateImg(this,'left',canvas);
                                break;
                            case 8://需要逆时针（向右）90度旋转
                                //alert('需要顺时针（向右）90度旋转');
                                rotateImg(this,'right',canvas);
                                break;
                            case 3://需要180度旋转
                                //alert('需要180度旋转');
                                rotateImg(this,'right',canvas);//转两次
                                rotateImg(this,'right',canvas);
                                break;
                        }
                    }

                    base64 = canvas.toDataURL("image/jpeg", 0.5);
                }
                //uploadImage(base64);
                baseImg = base64;

                var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;
                var xhr = new XMLHttpRequest();
                if(xhr.overrideMimeType){
                    xhr.overrideMimeType("text/html");
                }
                var formData = new FormData();
                formData.append('imgData', baseImg);
                xhr.onload = uploadSuccess;
                xhr.open('post', '/upload', true);
                xhr.send(formData);

                function uploadSuccess(event) {
                    if (xhr.readyState === 4) {
                        console.log(JSON.parse(xhr.responseText));
                        $uploaderFiles.html($(tmpl.replace('#url#', JSON.parse(xhr.responseText).url)));
                    }
                }
            };
        };
        oReader.readAsDataURL(file);
    }
});
//对图片旋转处理 added by lzk
function rotateImg(img, direction,canvas) {
    //alert(img);
    //最小与最大旋转方向，图片旋转4次后回到原方向
    var min_step = 0;
    var max_step = 3;
    //var img = document.getElementById(pid);
    if (img == null)return;
    //img的高度和宽度不能在img元素隐藏后获取，否则会出错
    var height = img.height;
    var width = img.width;
    //var step = img.getAttribute('step');
    var step = 2;
    if (step == null) {
        step = min_step;
    }
    if (direction == 'right') {
        step++;
        //旋转到原位置，即超过最大值
        step > max_step && (step = min_step);
    } else {
        step--;
        step < min_step && (step = max_step);
    }
    //img.setAttribute('step', step);
    /*var canvas = document.getElementById('pic_' + pid);
     if (canvas == null) {
     img.style.display = 'none';
     canvas = document.createElement('canvas');
     canvas.setAttribute('id', 'pic_' + pid);
     img.parentNode.appendChild(canvas);
     }  */
    //旋转角度以弧度值为参数
    var degree = step * 90 * Math.PI / 180;
    var ctx = canvas.getContext('2d');
    switch (step) {
        case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0,width,height);
            break;
        case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height,width,height);
            break;
        case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height,width,height);
            break;
        case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0,width,height);
            break;
    }
}

$uploaderFiles.on("click", "li", function(){
    $galleryImg.attr("style", this.getAttribute("style"));
    $gallery.fadeIn(100);
});
$gallery.on("click", function(){
    $gallery.fadeOut(100);
});
$(".weui-gallery__del").on("click",function(e){
   $("#uploaderFiles").empty();
});

var height = window.innerHeight,width = window.innerWidth;
document.getElementsByClassName("contenter")[0].style.height = height-46+"px";
document.getElementsByClassName("contenter")[0].style.width = width+"px";
document.getElementsByClassName("contenter")[1].style.height = height-46+"px";
document.getElementsByClassName("contenter")[1].style.width = width+"px";
document.getElementsByClassName("text-area")[0].style.width = width*0.84+"px";
document.getElementsByClassName("text-area")[1].style.width = width*0.84+"px";

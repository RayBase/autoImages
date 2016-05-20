var autoImage = function(id, baseNum,color) {
	var imgList = document.getElementById(id).getElementsByTagName("img");
	// 循环列表
	for (var i = 0; i < imgList.length; i++) {
		var img = imgList[i];
		img.style.backgroundColor = "#"+color;
		// 获得图片本身宽高
		var imgWidth = img.width;
		var imgHeight = img.height;
		if (imgWidth > imgHeight) {
			//兼容最大宽度小于basenum的图片
			if (imgWidth < baseNum) {
				imgHeight = baseNum / imgWidth * imgHeight;
				imgWidth = baseNum;
			}
			var imgPadding = (baseNum - (imgHeight * (imgWidth / baseNum))) / 2;
			img.style.padding = imgPadding + "px 0";
			img.style.width = baseNum + "px";
		}
		if (imgWidth < imgHeight) {
			//兼容最大高度小于basenum的图片
			if (imgHeight < baseNum) {
				imgWidth = baseNum / imgHeight * imgWidth;
				imgHeight = baseNum;
			}
			var imgPadding = (baseNum - (imgWidth * (imgHeight / baseNum))) / 2;
			img.style.padding = "0 " + imgPadding + "px";
		}
	}
}
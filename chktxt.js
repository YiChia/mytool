/*js 正規表達式*/

//example https://github.com/doudousha/Javascript--/blob/master/js%E5%90%84%E7%A7%8D%E9%AA%8C%E8%AF%81%E6%96%87%E6%9C%AC%E6%A1%86%E8%BE%93%E5%85%A5%E6%A0%BC%E5%BC%8F(%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F)


function chkTxt(str){

	str=str.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.\-\\]/g,''); //輸入中英文 數字 . -
  	return str;
}

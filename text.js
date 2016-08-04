// see: https://api.jquerymobile.com/textinput/
qnSetParamsEng=function(div){

}

qnAppEng=function(optDiv,params){
	var optInput;
	(function init(){
		$(optDiv).empty();
		optInput=document.createElement("input");
		if('type' in params){
			optInput.setAttribute('type','date');
		} else {
			optInput.setAttribute('type','text');
		}
		if('pattern' in params){optInput.setAttribute('pattern',params.pattern);}
		optInput.setAttribute('class','ui-text-input');
		optInput.setAttribute('style','text-align:center;font-size:30px;padding:10px;');
		optDiv.appendChild(optInput);
		$(optDiv).trigger("create");
	}());
	
	this.getAns=function(){
		return optInput.value.trim();
	};
}

// use d3.js word cloud.
qnHostEng=function(stemDiv,respDiv,params){
	this.stemDisplay=function(){
		return "";
	}
	this.procAns=function(ans){
		respDiv.innerHTML+=ans+"<br/>";
	}
}
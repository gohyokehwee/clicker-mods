// see: https://api.jquerymobile.com/textinput/
qnSetParamsEng=function(div){

}

qnAppEng=function(optDiv,params){
	var optInput;
	(function init(){
		optDiv.setAttribute("class","");
		optInput=document.createElement("input");
		optInput.setAttribute('type','text');
		optInput.setAttribute('class','ui-text-input');
		optInput.setAttribute('style','text-align:center;font-size:30px;padding:10px;');
		optDiv.appendChild(optInput);
		$(optDiv).trigger("create");
	})()

	this.getAns=function(){
		var response=optInput.value.trim()
		if(response==""){
			return null;
		} else {
			return response;
		}
	};

	this.grayOut=function(){
		optInput.disabled=true;
	}
}

qnHostEng=function(stemDiv,respDiv,params){
	this.stemDisplay=function(){
		optInput="<input disabled>";
		return optInput;
	}
	// use d3.js word cloud.
	this.procAns=function(studentUuid,studentAns){
		respDiv.innerHTML+=studentAns+"<br/>";
	}
}
qnSetParamsEng=function(div){

}

qnAppEng=function(optDiv,params){
	opt=params.options;
	optDiv.setAttribute("class","ui-radio");
	var inputDoms=[]; var inpIdx=0;
	opt.forEach(function(o){
		var inputHtml=document.createElement("input");
		inputHtml.setAttribute("type","radio");
		inputHtml.setAttribute("name","qnChoice");
		inputHtml.setAttribute("id","qnChoice-"+inpIdx);
		inputHtml.setAttribute("value",inpIdx);
		var labelHtml=document.createElement("label");
		labelHtml.setAttribute("for","qnChoice-"+inpIdx);
		labelHtml.innerHTML=o;
		optDiv.appendChild(inputHtml);
		optDiv.appendChild(labelHtml);
		inputDoms[inpIdx]=inputHtml;
		inpIdx++;
	});
	$(optDiv).trigger("create");

	this.getAns=function(){
		for(var i=0; i<inputDoms.length; i++){
			if(inputDoms[i].checked){return i;}
		}
		return null;
	};
	this.grayOut=function(){
		inputDoms.forEach(function(d){
			d.disabled=true;
		});
	}
}

qnHostEng=function(stemDiv,respDiv,params){
	var opt=params.options, nOpt=opt.length;
	var data=new Array(nOpt).fill(0);
	var barInterval=100, barFillRatio=0.85, barColor='#7755ff',
		barOffset=100, barUnitLength=10, pWidth=600;
	var pHeight=barInterval*nOpt,
		barSize=barInterval*barFillRatio,
		tickOffset=barFillRatio/2;
	var d3Obj;
	var d3Src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.0/d3.min.js";
    $.getScript(d3Src,function() {
    	d3Obj=d3.select(respDiv).append('svg')
			.attr('height',pHeight)
			.attr('width',pWidth)
			.selectAll('rect')			
		var yScale = d3.scaleLinear()
		    .domain([-tickOffset, nOpt-tickOffset])
		    .range([0, pHeight]);
		var vGuide=d3.select('svg').append('g')
			.attr('transform','translate('+barOffset+',0)')
		var vAxis = d3.axisLeft()
			.scale(yScale)
			.ticks(nOpt)
			.tickFormat(function(d){
				return opt[d];
			})
		vAxis(vGuide)
	});

	function update(data){
		console.log("update");
		d3Obj.data(data)
			.enter().append('rect')
			.style('fill',barColor)
			.attr('height',barSize)
			.attr('width',function(d){
				return d*barUnitLength;
			})
			.attr('x',barOffset)
			.attr('y',function(d,i){
				return i*barInterval;
			})
	}

	this.stemDisplay=function(){
		var optHtml="<ul data-role='listview' data-inset='true'>";
		opt.forEach(function(o){
			optHtml+="<li>"+o+"</li>";
		});
		optHtml+="</ul>";
		return optHtml;
	}
	this.procAns=function(studentUuid,ans){
		data[ans]++;
		update(data);
	}
}
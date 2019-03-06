/* Design by Jason.Leung, QQ,147430218, SINAWeiBo, @切片面包 */
/* 酷站代码整理 http://www.5icool.org */
function getClass(oParent,sClass)
{
	var value=[];
	var Ele=oParent.getElementsByTagName('*');
	for(var i=0; i<Ele.length; i++)
	{
		var aClass=Ele[i].className.split(' ');
		for(var n=0; n<aClass.length; n++)
		{
			if(aClass[n]==sClass)
			{
				value.push(Ele[i]);
			}
		}
	}
	return value;
}

window.onload=function()
{
	var oBox=document.getElementById('box');
	var oTitle=getClass(oBox,'title')[0];
	var stime=oTitle.getElementsByTagName('span')[0];
	var aTitle=oTitle.getElementsByTagName('li');
	var oNews=document.getElementById('context').getElementsByTagName('ul');
	
	for(var i=0; i<aTitle.length; i++)
	{
		aTitle[i].index=i;
		aTitle[i].onmouseover=function()
		{
			for(var i=0; i<aTitle.length; i++)
			{
				aTitle[i].className='';
				oNews[i].style.display='none';
			}
			this.className='active';
			oNews[this.index].style.display='block';
		}
	}
	
	}
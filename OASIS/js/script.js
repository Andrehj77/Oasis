function RefreshImage(valImageId) {
	var objImage = document.images[valImageId];
	if (objImage == undefined) {
		return;
	}
	var now = new Date();
	objImage.src = objImage.src.split('?')[0] + '?x=' + now.toUTCString();
}

function verif()
{
	if (document.restrito.email.value == '' || document.restrito.email.value.indexOf("@")==-1 || document.restrito.email.value.indexOf(".")==-1)
	{
	alert('Campo EMAIL inv�lido!')
	}
	else
	document.restrito.submit();
}

function verif_eng()
{
	if (document.restrito.email.value == '' || document.restrito.email.value.indexOf("@")==-1 || document.restrito.email.value.indexOf(".")==-1)
	{
	alert('Field EMAIL incorrect!')
	}
	else
	document.restrito.submit();
}

// fun��o que verifica as manifesta��es investor excess�o at� o momento IOCHPE
function verif_manifestacao()
{
	if (document.frm.assunto.value == '' || document.frm.assunto.value.indexOf("@")==-1 || document.frm.assunto.value.indexOf(".")==-1)
	{
	alert('Campo ASSUNTO inv�lido!')
	}
	else if (document.frm.comentario.value == '')	
	{
	alert('Campo Descri��o n�o pode ser em branco!')	
	}
	else
	document.frm.submit();
}

function verif_manifestacao_eng()
{
	if (document.frm.assunto.value == '' || document.frm.assunto.value.indexOf("@")==-1 || document.frm.assunto.value.indexOf(".")==-1)
	{
	alert('Field ASSUNTO incorrect!')
	}
	else if (document.frm.comentario.value == '')	
	{
	alert('Field Message blank!')	
	}	
	else
	document.frm.submit();
}

function verif_email()
{
	if (document.form1.email.value == '' || document.form1.email.value.indexOf("@")==-1 || document.form1.email.value.indexOf(".")==-1)
	{
	alert('Campo EMAIL inv�lido!')
	}
	else if (document.form1.msg.value == '')	
	{
	alert('Campo Mensagem n�o pode ser em branco!')	
	}
	else
	document.form1.submit();
}

function verif_email_eng()
{
	if (document.form1.email.value == '' || document.form1.email.value.indexOf("@")==-1 || document.form1.email.value.indexOf(".")==-1)
	{
	alert('Field EMAIL incorrect!')
	}
	else if (document.form1.msg.value == '')	
	{
	alert('Field Message blank!')	
	}	
	else
	document.form1.submit();
}

function logarrestrito0()
{
	if (document.reslogin.login.value == '')
	{
	alert('Campo Login em branco!')
	}
	else if (document.reslogin.senha.value == '')	
	{
	alert('Campo senha em branco!')	
	}	
	else
	document.reslogin.submit();
}

function logarrestrito1()
{
	if (document.reslogin.login.value == '')
	{
	alert('Field Login blank!')
	}
	else if (document.reslogin.senha.value == '')	
	{
	alert('Field Password blank!')	
	}	
	else
	document.reslogin.submit();
}

 
function Imprimir(url) {
window.open(url, 'print', 'width=1,height=1,left=0,top=0,scrollbars=0,resizable=0,menubar=0,toolbar=0');
} 
 
 
function menu2oritar(endereco,titulo){
    var url      = endereco;
    var title    = titulo;
    if (window.sidebar) window.sidebar.addPanel(title, url,"");
    else if(window.opera && window.print){
        var mbm = document.createElement('a');
        mbm.setAttribute('rel','sidebar');
        mbm.setAttribute('href',url);
        mbm.setAttribute('title',title);
        mbm.click();
    }
    else if(document.all){window.external.Addmenu2orite(url, title);
	}
	else if(window.chrome){
		alert('Pressione Ctrl+D para adicionar aos favoritos (Command+D para macs) Logo ap�s clicar em Ok');
	}
}

function MostraMenu(obj){

	if(document.getElementById){
	var el = document.getElementById(obj);
		if(el.style.display != "block"){ //DynamicDrive.com change
			el.style.display = "block";			
		}else{
			el.style.display = "none";
			//MM_swapImgRestore()
		}
	}
}

function Favoritar(endereco,titulo){
    var url      = endereco;
    var title    = titulo;
    if (window.sidebar) window.sidebar.addPanel(title, url,"");
    else if(window.opera && window.print){
        var mbm = document.createElement('a');
        mbm.setAttribute('rel','sidebar');
        mbm.setAttribute('href',url);
        mbm.setAttribute('title',title);
        mbm.click();
    }
    else if(document.all){window.external.AddFavorite(url, title);}
}

// fun��o que seleciona o conteudo do gloss�rio 
function menuDinamicoGlossario(ver) {
	var i
	for (i=1;i<=26;i++) {
		if(i != ver ) {
			document.getElementById(i).style.display='none';
		}
		else {
			document.getElementById(ver).style.display='block';
		}
	}  		
}
// Fim fun��o que seleciona o conteudo do gloss�rio

/* flash.js */
function EscreveFlash (piWid, piHei, psSrc,menuNum,submenuNum, homeAtual,lingua) {
var strTitulo;
var strSwf;
var final;
strTitulo = "?menuNum="+menuNum+"&submenuNum="+submenuNum+"&homeAtual="+homeAtual+"&lingua="+lingua
final = psSrc+strTitulo
strSwf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0\" width="+piWid+" height="+piHei+">";
strSwf += "<param name=\"movie\" value=\""+final+"\">";
strSwf += "<param name=\"allowScriptAccess\" value=\"sameDomain\">";
strSwf += "<param name=\"quality\" value=\"high\">";
strSwf += "<param name=\"WMode\" value=\"Transparent\">";
strSwf += "<embed allowScriptAccess=\"sameDomain\" swLiveConnect=\"true\" src=\""+final+"\" quality=\"high\" wmode=\"transparent\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width="+piWid+" height="+piHei+"></embed></object>";
this.document.write(strSwf);
}
function EscreveFlashTitulo (path, piWid, piHei, psSrc,menuNum,submenuNum, homeAtual,lingua) {
var strTitulo;
var strSwf;
var final;
strTitulo = "?sitePath="+path+"&menuNum="+menuNum+"&submenuNum="+submenuNum+"&homeAtual="+homeAtual+"&lingua="+lingua
final = psSrc+strTitulo
strSwf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0\" width="+piWid+" height="+piHei+">";
strSwf += "<param name=\"movie\" value=\""+final+"\">";
strSwf += "<param name=\"allowScriptAccess\" value=\"sameDomain\">";
strSwf += "<param name=\"quality\" value=\"high\">";
strSwf += "<param name=\"WMode\" value=\"Transparent\">";
strSwf += "<embed allowScriptAccess=\"sameDomain\" swLiveConnect=\"true\" src=\""+final+"\" quality=\"high\" wmode=\"transparent\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width="+piWid+" height="+piHei+"></embed></object>";
this.document.write(strSwf);
}
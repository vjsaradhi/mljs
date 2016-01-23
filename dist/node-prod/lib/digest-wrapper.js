
var http=require('http'),crypto=require('crypto'),_und=require('underscore'),noop=require("./noop"),winston=require('winston');var EventEmitter=require('events').EventEmitter;var DigestWrapper=function(){this.configure();};DigestWrapper.prototype.configure=function(username,password,logger){this.logger=logger;this.nc=1;this.username=username;this.password=password;this.cnonce="0a4f113b";this.nonce=undefined;this.opaque=undefined;this.realm=undefined;this.qop=undefined;this.ended=false;};DigestWrapper.prototype.request=function(options,callback_opt){var digestWrapper=this;var reqWrapper=new RequestWrapper(this.logger);var doRequest=function(){var ncUse=padNC(digestWrapper.nc);digestWrapper.nc++;var realPath=options.path;if(undefined!=options.contentType){options.headers["Content-type"]=options.contentType;}
var md5ha1=crypto.createHash('md5');var ha1raw=digestWrapper.username+":"+digestWrapper.realm+":"+digestWrapper.password;md5ha1.update(ha1raw);var ha1=md5ha1.digest('hex');var md5ha2=crypto.createHash('md5');var ha2raw=options.method+":"+realPath;md5ha2.update(ha2raw);var ha2=md5ha2.digest('hex');var md5r=crypto.createHash('md5');var md5rraw=ha1+":"+digestWrapper.nonce+":"+ncUse+":"+digestWrapper.cnonce+":"+digestWrapper.qop+":"+ha2;md5r.update(md5rraw);var response=md5r.digest('hex');options.headers['Authorization']='Digest username="'+digestWrapper.username+'", realm="'+digestWrapper.realm+'", nonce="'+digestWrapper.nonce+'", uri="'+options.path+'",'+' cnonce="'+digestWrapper.cnonce+'", nc='+ncUse+', qop="'+digestWrapper.qop+'", response="'+response+'", opaque="'+digestWrapper.opaque+'"';var finalReq=http.request(options,(callback_opt||noop));finalReq.on("end",function(res){reqWrapper.doEnd(res);});finalReq.on('error',function(e){reqWrapper.error(e);});reqWrapper.finalReq=finalReq;reqWrapper.finaliseRequest();};if(undefined!=this.realm){doRequest();}else{var myopts={host:options.host,port:options.port}
var self=this;var get=http.get(myopts,function(res){res.on('end',function(){digestWrapper.nc=1;if(403==res.statusCode){var response=new ErrorResponse({statusCode:403});reqWrapper.__response=response;reqWrapper.__callback=callback_opt;reqWrapper.doEnd(response);reqWrapper.finaliseRequest();}else{var auth=res.headers["www-authenticate"];var params=parseDigest(auth);digestWrapper.nonce=params.nonce;digestWrapper.realm=params.realm;digestWrapper.qop=params.qop;digestWrapper.opaque=params.opaque;doRequest();}});res.on('readable',function(){res.read();});});get.on("error",function(e){reqWrapper.error(e);});}
return reqWrapper;};module.exports=function(){return new DigestWrapper();};var RequestWrapper=function(logger){this.logger=logger;this.writeData="";this.emitter=new EventEmitter();this.ended=false;this.finalReq=undefined;this.__response=undefined;this.__callback=undefined;};RequestWrapper.prototype.write=function(data,encoding){this.writeData=data;};RequestWrapper.prototype.on=function(evt,func){this.emitter.on(evt,func);};RequestWrapper.prototype.end=function(){this.ended=true;this.finaliseRequest();};RequestWrapper.prototype.error=function(e){this.ended=true;this.emitter.emit("error",e);};RequestWrapper.prototype.finaliseRequest=function(){if(this.ended&&this.finalReq!=undefined){if(this.writeData!=undefined){var data=this.writeData;this.writeData=undefined;this.finalReq.write(data);}
this.finalReq.end();}
if(this.ended&&this.__response!=undefined){var response=this.__response;var cb=this.__callback;this.__response=undefined;this.__callback=undefined;(cb||noop)(response);}};RequestWrapper.prototype.doEnd=function(res){this.emitter.emit("end",res);};var ErrorResponse=function(response){this.response=response;this.statusCode=response.statusCode;this.emitter=new EventEmitter();};ErrorResponse.prototype.on=function(evt,callback){this.emitter.on(evt,callback);if(evt=="error"){this.emitter.emit(evt,this.response);}};function parseDigest(header){return _und(header.substring(7).split(/,\s+/)).reduce(function(obj,s){var parts=s.split('=')
obj[parts[0]]=parts[1].replace(/"/g,'')
return obj},{})};function padNC(num){var pad="";for(var i=0;i<(8-(""+num).length);i++){pad+="0";}
var ret=pad+num;return ret;};
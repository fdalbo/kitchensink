!function(a,b){b["true"]=a,SenchaInspector=function(){console.info("Sencha Inspector: attempting to connect...");var a=!1,b=document.location.protocol+"//local.senchainspector.com:1839",c="/socket.io/socket.io.js",AI={DOMhighlighter:"_SenchaInspector",socket:null,eventCache:null,eventCaptureFn:null,layoutRunTotal:null,layoutCollection:null,layoutCaptureFn:null,asyncQueue:{},returnAsync:function(a,b){var c=this.asyncQueue[a];AI.socket.emit("client_msg",c.callbackKey,c.aiSocketId,b),delete this.asyncQueue[a]}},d=function(){f(),console.info("Sencha Inspector: connected!"),SenchaInspector.getAppDetails(!0)},e=function(){void 0!==Ext.versions.extjs?Ext.Loader.loadScript({scope:this,url:b+c,onLoad:d}):Ext.Loader.loadScriptFile(b+c,d,Ext.emptyFn,this)},f=function(){if(AI.socket=io(b),AI.socket.on("ai_request",g),AI.socket.on("reconnect",function(){SenchaInspector.getAppDetails(!0)}),!document.getElementById(AI.DOMhighlighter)){var c=document.createElement("div"),d=c.style;c.setAttribute("id",AI.DOMhighlighter),d.backgroundColor="rgba(121, 154, 5, 0.5)",d.visibility="hidden",d.position="absolute",document.body.appendChild(c)}a=!0},g=function(a,b,c,d){d&&(AI.asyncQueue[a]={callbackKey:a,aiSocketId:b});var e=eval(c);d||AI.socket.emit("client_msg",a,b,e)};return{$:null,init:function(c){a||(c&&(b=c),e())},getAppDetails:function(a){var b="Other",c="";Ext.browser?(b=Ext.browser.name,c=Ext.browser.version.version):Ext.isChrome?(b="Chrome",c=Ext.chromeVersion):Ext.isGecko?(b="Firefox",c=Ext.firefoxVersion):Ext.isSafari?(b="Safari",c=Ext.safariVersion):Ext.isOpera?(b="Opera",c=Ext.operaVersion):Ext.isIE&&(b="IE",c=Ext.ieVersion);var d,e={browser:Ext.isSpace===!0?"Space":b,browserVersion:c,framework:Ext.versions.extjs?"Ext JS":"Sencha Touch",version:Ext.getVersion().version,fashionDebug:void 0!==window.Fashion,app:{versions:{},name:"Sencha Application",location:window.location.toString(),isMVC:!1}},f=Ext.versions;for(d in f)f.hasOwnProperty(d)&&(e.app.versions[d]=f[d].version);if(e.app.versions.ext===e.app.versions.extjs&&delete e.app.versions.ext,e.app.versions.core===e.app.versions["sencha-core"]&&delete e.app.versions.core,Ext.manifest&&Ext.manifest.toolkit&&(e.app.toolkit=Ext.manifest.toolkit),Ext.manifest&&Ext.manifest.packages){var g=Ext.manifest.packages;g.ext&&(e.app.versions.license=g.ext.license),g.cmd&&(e.app.versions.cmdCurrent=g.cmd.current,e.app.versions.cmdBuild=g.cmd.version,delete e.app.versions.cmd)}if(Ext.app&&Ext.app.Application){var h=Ext.app.Application.instance;if(!h)for(d in window)if(window.hasOwnProperty(d)&&window[d]&&window[d].app&&window[d].app.$className){h=Ext.app.Application.instance=window[d].app;break}h&&h instanceof Ext.app.Application&&(e.app.isMVC=!0,e.app.name=h.getName?h.getName():h.name)}return a===!0&&AI.socket.emit("app_info",e),e},highlight:function(a){var b,c,d=Ext.getCmp(a),e=document.getElementById(AI.DOMhighlighter);if(d&&d.rendered){d.element?(b=d.element.getBox(),c=d.element.dom):d.el&&(b=d.el.getBox(),c=d.el.dom),Ext.apply(e.style,{height:b.height+"px",width:b.width+"px",visibility:"",zIndex:99999});var f=function(a){for(var b=0,c=0;a;)b+=a.offsetLeft-a.scrollLeft+a.clientLeft,c+=a.offsetTop-a.scrollTop+a.clientTop,a=a.offsetParent;return{left:b+"px",top:c+"px"}};Ext.apply(e.style,f(c)),window.setTimeout(function(){var a=document.getElementById(AI.DOMhighlighter);a.style.visibility="hidden"},1e3),console.log(d),SenchaInspector.$=d}}}}()}({},function(){return this}());
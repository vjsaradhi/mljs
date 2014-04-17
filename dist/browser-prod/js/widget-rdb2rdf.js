
com=window.com||{};com.marklogic=window.com.marklogic||{};com.marklogic.widgets=window.com.marklogic.widgets||{};com.marklogic.widgets.rdb2rdf=function(container){this.container=container;this._refresh();};com.marklogic.widgets.rdb2rdf.prototype._highlightTab=function(tabId){var currentHighlightSpan=$("#highlightedTab")
var priorTabText=currentHighlightSpan.text();currentHighlightSpan.parent().html(priorTabText);var tab=$("#"+tabId);var tabText=tab.text();tab.html("<span id='highlightedTab' class='label label-success'>"+tabText+"</span>")};com.marklogic.widgets.rdb2rdf.prototype._refresh=function(){var s="<div id='"+this.container+"-rdb2rdf' class='rdb2rdf'>";s+="<div class='row'>";s+="  <div class='row'>";s+="    <div class='col-md-10 col-md-offset-1'>";s+="      <ol class='rdb2rdf-tabs breadcrumb'>";s+="        <li class='rdb2rdf-tab' id='"+this.container+"-step-1-tab' class='rdb2rdf-tab-selected active'><span id='highlightedTab' class='label label-success'>Specify database connection</span></li>";s+="        <li class='rdb2rdf-tab' id='"+this.container+"-step-2-tab'>Select Schema</li>";s+="        <li class='rdb2rdf-tab' id='"+this.container+"-step-3-tab'>Select RDB Objects</li>";s+="        <li class='rdb2rdf-tab' id='"+this.container+"-step-4-tab'>Perform import</li>";s+="        <li class='rdb2rdf-tab' id='"+this.container+"-complete'>Complete</li>";s+="      </ol>";s+="    </div>";s+="  </div>";s+="</div>";s+="<div class='rdb2rdf-steps row'>";s+="<div id='"+this.container+"-step-1' class='col-md-10 col-md-offset-1'>";s+=" <p class='lead row'>Please enter a MarkLogic SAM endpoint URL that is connected to your database server...</p>";s+=" <form role='form'>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <label for='"+this.container+"-mlsam' class='col-md-9 control-label'>MarkLogic SAM URL:</label>";s+="     </div>";s+="     <div class='row'>";s+="       <div class='col-md-9'>";s+="         <input type='url' class='form-control' id='"+this.container+"-mlsam' placeholder='MarkLogic SAM URL...'>";s+="       </div>";s+="     </div>";s+="   </div>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <div class='col-md-4'>";s+="         <button type='submit' id='"+this.container+"-step-1-next' class='btn btn-primary'>Next &rarr;</button>";s+="       </div>";s+="     </div>";s+="   </div>";s+=" </form>";s+="</div>";s+="<div id='"+this.container+"-step-2' class='hidden col-md-10 col-md-offset-1'>";s+="  <p class='lead row'>Select a Database Schema to import ...</p>";s+=" <form role='form'>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <label for='"+this.container+"-schema-select' class='col-md-9 control-label'>Available Database Schemas:</label>";s+="     </div>";s+="     <div class='row'>";s+="       <div class='col-md-9'>";s+="         <select class='form-control' id='"+this.container+"-schema-select'>";s+="           <option value=''>Loading ...</option>";s+="         </select>";s+="       </div>";s+="     </div>";s+="   </div>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <div class='col-md-4'>";s+="         <button type='submit' id='"+this.container+"-step-2-next' class='btn btn-primary'>Next &rarr;</button>";s+="       </div>";s+="     </div>";s+="   </div>";s+=" </form>";s+="</div>";s+="<div id='"+this.container+"-step-3' class='hidden col-md-10 col-md-offset-1'>";s+=" <p class='lead row lead-smaller'>Specify the name of the graph and select one or more tables and relationships in Schema <strong class='selected-schema'>&nbsp;</strong> ...</p>";s+=" <form role='form'>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <label for='"+this.container+"-named-graph' class='col-md-9 control-label'>Named Graph:</label>";s+="     </div>";s+="     <div class='row'>";s+="       <div class='col-lg-2'>";s+="         <input type='text' class='form-control col-md-6' id='"+this.container+"-named-graph' placeholder='Named Graph...'>";s+="       </div>";s+="     </div>";s+="   </div>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <label for='"+this.container+"-table-select' class='col-md-9 control-label'>Tables in schema <strong class='selected-schema'>&nbsp;</strong></label>";s+="     </div>";s+="     <div class='row'>";s+="       <div class='col-md-9'>";s+="         <select multiple='true' size='6' class='form-control' id='"+this.container+"-table-select'>";s+="           <option value=''>Loading...</option>";s+="         </select>";s+="       </div>";s+="     </div>";s+="   </div>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <label for='"+this.container+"-relationship-select' class='col-md-9 control-label'>Relationships in schema <strong class='selected-schema'>&nbsp;</strong></label>";s+="     </div>";s+="     <div class='row'>";s+="       <div class='col-md-9'>";s+="         <select multiple='true' size='6' class='form-control' id='"+this.container+"-relationship-select'>";s+="           <option value=''>Loading...</option>";s+="         </select>";s+="       </div>";s+="     </div>";s+="   </div>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <div class='col-md-4'>";s+="         <button type='submit' id='"+this.container+"-step-3-next' class='btn btn-primary'>Perform Import</button>";s+="       </div>";s+="     </div>";s+="   </div>";s+=" </form>";s+="</div>";s+="<div id='"+this.container+"-step-4' class='hidden col-md-9 col-md-offset-1'>";s+="  <p class='lead row' id='import-status'>Processing the import ...</p>";s+=" <form role='form'>";s+="   <div class='row'>";s+="     <div class='row'>";s+="       <label for='"+this.container+"-schema-import-tables' class='col-md-9 control-label'>Selected tables:</label>";s+="     </div>";s+="     <div>";s+="        <ul class='list-group col-md-9' id='"+this.container+"-schema-import-tables'>";s+="        </ul>";s+="     </div>";s+="   </div>";s+="   <div class='form-group row'>";s+="     <div class='row'>";s+="       <div class='col-md-4'>";s+="         <a href='/' id='wizard-close-button' class='btn btn-primary'>Close</button>";s+="       </div>";s+="     </div>";s+="   </div>";s+=" </form>";s+="</div></div>";s+="</div>";document.getElementById(this.container).innerHTML=s;var self=this;document.getElementById(this.container+"-step-1-next").onclick=function(e){self._processStep1();e.stopPropagation();return false;};document.getElementById(this.container+"-step-2-next").onclick=function(e){self._processStep2();e.stopPropagation();return false;};document.getElementById(this.container+"-step-3-next").onclick=function(e){self._processStep3();e.stopPropagation();return false;};document.getElementById(this.container+"-step-1-tab").onclick=function(e){self._showStep1();e.stopPropagation();return false;};document.getElementById(this.container+"-step-2-tab").onclick=function(e){self._showStep2();e.stopPropagation();return false;};document.getElementById(this.container+"-step-3-tab").onclick=function(e){self._showStep3();e.stopPropagation();return false;};document.getElementById(this.container+"-step-4-tab").onclick=function(e){self._showStep4();e.stopPropagation();return false;};};com.marklogic.widgets.rdb2rdf.prototype._processStep1=function(){this._highlightTab(this.container+"-step-2-tab");this._showStep2();};com.marklogic.widgets.rdb2rdf.prototype._processStep2=function(){this._highlightTab(this.container+"-step-3-tab");this._showStep3();};com.marklogic.widgets.rdb2rdf.prototype._processStep3=function(){this._highlightTab(this.container+"-step-4-tab");this._showStep4();};com.marklogic.widgets.rdb2rdf.prototype._showStep1=function(){com.marklogic.widgets.hide(document.getElementById(this.container+"-step-1"),false);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-2"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-3"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-4"),true);};com.marklogic.widgets.rdb2rdf.prototype._showStep2=function(){com.marklogic.widgets.hide(document.getElementById(this.container+"-step-1"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-2"),false);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-3"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-4"),true);var self=this;mljs.defaultconnection.samListSchema(document.getElementById(this.container+"-mlsam").value,function(result){var schemas=result.doc["list-schema"].schema;var s="";for(var i=0,max=schemas.length;i<max;i++){s+="<option value='"+schemas[i]+"'>"+schemas[i]+"</option>";}
document.getElementById(self.container+"-schema-select").innerHTML=s;});};com.marklogic.widgets.rdb2rdf.prototype._showStep3=function(){com.marklogic.widgets.hide(document.getElementById(this.container+"-step-1"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-2"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-3"),false);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-4"),true);console.log("show step 3");var self=this;var mlsamUrl=$("#"+this.container+"-mlsam").val();var schemaName=$("#"+this.container+"-schema-select").val();$(".selected-schema").html(schemaName);mljs.defaultconnection.samSchemaInfo(mlsamUrl,schemaName,function(result){var tables=result.doc["schema-info"].table;var s="";for(var i=0,max=tables.length;i<max;i++){console.log(tables[i].name);s+="<option selected='true' value='"+tables[i].name+"'>"+tables[i].name+"</option>";}
document.getElementById(self.container+"-table-select").innerHTML=s;var relationships=result.doc["schema-info"].relationship;s="";for(var i=0,max=relationships.length;i<max;i++){console.log(relationships[i].constraint);s+="<option value='"+relationships[i].constraint+"'>"+relationships[i].constraint+"</option>";}
document.getElementById(self.container+"-relationship-select").innerHTML=s;});};com.marklogic.widgets.rdb2rdf.prototype._rdb2RdfDummy=function(tableName,callback){console.log("fake import table:"+tableName);callback();};com.marklogic.widgets.rdb2rdf.prototype._showStep4=function(){com.marklogic.widgets.hide(document.getElementById(this.container+"-step-1"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-2"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-3"),true);com.marklogic.widgets.hide(document.getElementById(this.container+"-step-4"),false);var self=this;var graphName=$("#"+this.container+"-named-graph").val();var samUrl=$("#"+this.container+"-mlsam").val();var schemaName=$("#"+this.container+"-schema-select").val();var config={"ingest":{"database":{"samurl":samUrl,"schema":schemaName},"create":{"graph":graphName},"selection":{"mode":"data","table":[],offset:0,limit:3000}}};var tableNameList=[];var ulElemSelector="#"+this.container+"-schema-import-tables";var selectId=this.container+"-table-select";$("#"+selectId+" option").each(function(index){tableNameList.push($(this).val());spanElem="<span id='import-checker-' class='pull-right glyphicon glyphicon-ok import-checker'>&nbsp;</span>";$(ulElemSelector).append("<li id='input-checker-"+index+"' class='list-group-item'>"+$(this).val()+spanElem+"</li>");});console.log(tableNameList);console.log(graphName);console.log(samUrl);var saveCount=0;var complete0=function(){console.log("- Done.");$("#import-status").html("<span id='import-completed'>Import completed!</span>");self._highlightTab(self.container+"-complete");$("#wizard-close-button").show();};var nextSave0=function(){console.log("value of saveCount:"+saveCount);if(saveCount==tableNameList.length){complete0();}else{config.ingest.selection.table=[tableNameList[saveCount]];console.log(config);mljs.defaultconnection.samRdb2Rdf(config,function(result){$("#input-checker-"+saveCount+" span").show();saveCount+=1;nextSave0();});}};nextSave0();};
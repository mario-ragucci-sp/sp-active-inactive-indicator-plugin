SailPoint.Define.Grid.Identity.trueFalseRenderer = function(value, p, record) {
    var str = "<div class='riskIndicator ri_{0}'>{1}</div>";
    var boolVal = (value == true) ? '#{msgs.work_item_status_active}' :  '#{msgs.inactive}';
    var color = (value == true) ? "ff0000" : "00ff00";
    return Ext.String.format(str, color, boolVal);

};
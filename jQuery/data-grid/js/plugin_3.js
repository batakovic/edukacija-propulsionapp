$(document).ready(function(){
    var data = [
        {name: 'Pera', type: 'osoba', desc: 'Pera je glup'},
        {name: 'Djomla', type: 'the man', desc: 'Sinoc sam sinoc sam pola kafane popio, zbog tebe zbog tebe nisam oka sklopio'}
    ]

    var config  = {
        columns: [
           {title : 'Ime', property : 'name', width : 60},
           {title : 'Tip', property: 'type', width : 100},
           {title : 'Opis', property: 'desc', width : 240}
        ]
    }

    
    jQuery.fn.datagrid = function (configOverride, data) {
        //config section 
        var configDefault = {
            headCellClass : 'datagridHeadCell',
            oddRowClass    : "datagridOddRow",
            evenRowClass   : "datagridEvenRow"
        }
        var config = jQuery.extend(true, configDefault, configOverride);
        
        //utility function section
        
        var functions = {
            header : function (config, table) {
                console.log(config.columns.length);
                var row;
                for (var i = 0; i < config.columns.length; i++){
                    row += "<td class = '" + config.headCellClass + "'>" 
                        + config.columns[i].title + "</td>";
                }
                table.append("<tr>" + row + "</tr>");
            },
            rows : function(config, table, data) {
                for( var i =0; i < data.length; i++) {
                    var rowClass = this.rowClass(config, i);
                    var row = "<tr class='" + rowClass + "'>";
                    for (var j = 0; j < config.columns.length; j++) {
                        var width = this.widthAttr(config.columns[j].width);
                        row += "<td "+ width +">" + data[i][config.columns[j].property] + "</td>";
                    }
                    table.append(row + "</tr>");
                }
            },
            rowClass : function(config, rowIndex) {
                if( (rowIndex % 2) ==  0) return config.evenRowClass;
                    return config.oddRowClass;
            },
            widthAttr : function(width) {
                if(width != null) return "width= " + width + ";";
                    return "";
            }
        }
        //data grid generate
        
        this.each(function(){
            var table = jQuery(this);
            table.data('config', config);
            table.empty();
            functions.header(config, table);
            functions.rows(config, table, data);
        });
    }
    
        $("#dataGridTable").datagrid(config, data);
});


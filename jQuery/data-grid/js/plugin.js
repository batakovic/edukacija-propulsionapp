$(document).ready(function(){
    var data = [
        {name: 'Pera', type: 'osoba', desc: 'Pera je glup'},
        {name: 'Djomla', type: 'the man', desc: 'Sinoc sam sinoc sam pola kafane popio, zbog tebe zbog tebe nisam oka sklopio'}
    ]

    var config  = {
        columns: [
           {title : 'Ime', property : 'name'},
           {title : 'Tip', property: 'type'},
           {title : 'Opis', property: 'desc'}
        ]
    }

    
    jQuery.fn.datagrid = function (configOverride, data) {
        //config section 
        var configDefault = {
            headCellClass : 'datagridHeadCell'
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
                for( var i =0; i <data.length; i++) {
                    var row = "";
                    for (var j = 0; j< config.columns.length; j++) {
                        row += "<td>" + data[i][config.columns[j].property] + "</td>";
                    }
                    table.append("<tr>" + row + "</tr>");
                }
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


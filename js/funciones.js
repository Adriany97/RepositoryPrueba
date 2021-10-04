function traerInformacion(){
    $.ajax({
        url:"https://gf5e37fb3b80f51-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/car/car",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
}

function pintarRespuesta(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +items[i].id+"</td>";
        myTable+="<td>" +items[i].brand+"</td>";
        myTable+="<td>" +items[i].model+"</td>";
        myTable+="<td>" +items[i].category_id+"</td>";        
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}
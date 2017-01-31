$(document).ready(function(){
	$('p.para').click(function(){
		$(this).hide();
	});

	$("#btn1").click(function(){
        $("#test1").text(function(i, origText){
        	console.log(i, '==', origText);
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
        });
    });

    $("#btn2").click(function(){
        $("#test2").html(function(i, origText){
        	console.log(i, '==', origText);
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
        });
    });

    $("#nbt1").click(function(){
    	$('#w3s').attr("href", function(i, origText){
    		return origText + "/jquery";
    	});
    });

    $("#nbt2").click(function(){
    	$('#div1').empty();
    })
});

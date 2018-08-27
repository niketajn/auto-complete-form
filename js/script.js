$(document).ready(function(){
    //var usersList = [];


    //console.log(stateData);
    $.each(stateData,function(i,stateObj){
     // console.log(stateObj)
    })
    $('#myForm').submit(function(e){
        e.preventDefault();
        var obj = {
          name: $("input[name=user-name]").val(),
          address: $("input[name=address]").val(),
          phoneNumber: $("input[name=phnum]").val(),
          email: $("input[name=email]").val(),
          country: $("input[name=country]").val(),
          state:  $("input[name=state]").val(),
          city: $("input[name=city]").val(),
          parents: [$("input[name=fname]").val(),$("input[name=mname]").val()],
          married: false,
        }
        //usersList.push(obj)
        console.log(obj);    
    });
    $("select[name=state]").on('change',function(){
    
        //ajax bhi mara jata hai

        $.each(stateData,function(index,value){
          if (value.name === $("select[name=state]").val()){
            console.log(value.cities);
            $("select[name=city]").empty();
            $.each(value.cities,function(i,v){
              var opt = $("<option></option>");
              opt.html(v);
              //var optHtml = opt.html()
              opt.val(v);
              $("select[name=city]").append(opt);
            });
          }
        })

      });
  });
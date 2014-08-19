function mvc(modal,view,callback){
  console.log('starting M('+modal+')V('+view+')C')
  $.get(view)
  .then(function(html){
    console.log('MVC received view',html)
    $.getJSON(modal,function(data){
      console.log('MVC received json',data)
      var view = Mustache.render(html, data)
      console.log('MVC rendered view',view)
      //console.log(output)

      callback(modal,view) // callback
    })
  })
}
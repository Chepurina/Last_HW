define(['jquery'], function ($) {

  function Controller(model, view) {

    var self = this;

    view.elements.addBtn.on('click', createsubject);
    view.elements.input.on('keyup', function(e){
          if( e.keyCode === 13 ) {
            createsubject();            
          } 
          if( e.keyCode === 27 ) {            
            view.elements.input.val('');
            view.renderList(model.data);
          }
          return;
        });
    view.elements.listContainer.on('click', '.subject__delete', removesubject);
    view.elements.listContainer.on('click', '.subject', showInput);


    function createsubject() {
      var newsubject = view.elements.input.val();
      model.addsubject(newsubject);
      view.renderList(model.data);
      view.elements.input.val('');
    }

    function showInput() {
      console.log('showInput');
      
      var $curInput = $(this).find('.subject__input');
      var $curText  = $(this).find('.subject__txt');

      $curText.removeClass('subject__txt--visible')
        .addClass('subject__txt--invisible');

      $curInput.removeClass('subject__input--invisible')
        .addClass('subject__input--visible')
        .focus()
        .on('keyup', function(e){
          if( e.keyCode === 13 ) {
            model.updatesubject($curText.html(), $curInput.val());
            $curInput.off('keyup');
            view.renderList(model.data);          
          } 
          if( e.keyCode === 27 ) {          
            $curInput.off('keyup');
            view.renderList(model.data);
          }
          return;
        })
        .focusout(function(e) {
          model.updatesubject($curText.html(), $curInput.val());
          $curInput.off('keyup');
          view.renderList(model.data);                 
        });
    } 

    function removesubject() {
      var subject = $(this).attr('data-value');
      model.removesubject(subject);
      view.renderList(model.data);
    }
  }

  return Controller;

});
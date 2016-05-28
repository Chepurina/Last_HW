define(['jquery', 'tmpl'], function ($, tmpl) {
  
  function View(model) {

    var self = this;

    function init() {
      var wrapper = tmpl($('#wrapper-template').html());
      $('body').append(wrapper);

      self.elements = {
        input: $('.subject__value'),
        addBtn: $('.subject__add'),
        listContainer: $('.subject__list')
      };

      self.renderList(model.data);
    }

    self.renderList = function(data) {
      var list = tmpl($('#list-template').html(), {data: data});
      self.elements.listContainer.html(list);
    }
    
    init();
  }

  return View;

});
define([], function () {
  
  function Model(arr) {
    
    var self=this;

    self.data = arr;

    self.addsubject = function(subject) {
      if (subject.length === 0 ) return;
      subject = (subject + '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      self.data.push(subject);
      return self.data;
    }

    self.updatesubject = function(subject, newValue) {
      var index = self.data.indexOf(subject);
      if (index === -1) return ;
      
      newValue = (newValue + '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      self.data[index] = newValue;
      return self.data;
    }

    self.removesubject = function(subject) {
      var index = self.data.indexOf(subject);
      if(index === -1) return;
      self.data.splice(index, 1);
      return self.data;
    }

  }

  return Model;

});
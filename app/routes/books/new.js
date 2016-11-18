import Ember from 'ember';
    
export default Ember.Route.extend({
    model: function(){
        return this.store.createRecord('book');
        //return {title: '', author: '', description: ''};
    },

    setupController: function(controller,model){
        controller.set('book', model);
    },

    actions: {
      
    }
});

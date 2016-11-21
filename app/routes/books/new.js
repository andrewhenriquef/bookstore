import Ember from 'ember';
import DS from 'ember-data';
import serverErrorsParser from '../../utils/server-errors-parser';

export default Ember.Route.extend({
    model: function(){
        return this.store.createRecord('book');
        //return {title: '', author: '', description: ''};
    },

    setupController: function(controller,model){
        controller.set('book', model);
        controller.set('errors', DS.Errors.create());
    },

    actions: {
        
        createAction: function(book){
            var _this = this;
            var errors = _this.controllerFor('books.new').get('errors');
            //this.store.createRecord('book',book).save().then(function(book){
            book.save().then(function(book){
                _this.transitionTo('books.book',book);
            }).catch(function(resp){
                serverErrorsParser(resp,errors);     
            });
        }
    }
});

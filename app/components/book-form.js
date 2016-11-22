import Ember from 'ember';
import DS from 'ember-data'; 
import Validator from 'npm:validator';

export default Ember.Component.extend({
   //errors: DS.Errors.create(),

    buttonLabel: function(){
        return (this.get('book').id) ? 'Update Book' : 'Add Book';
    }.property(),
    
    actions: {
        submit: function(){
            if (this.validate()){
                this.sendAction('action', this.get('book'));

            }
        },
        validateTitle: function(value){
            this.validateTitle(value);
        },
        validateAuthor: function(value){
            this.validateTitle(value);
        }
    
    },

        validate: function(){
            
            this.set('errors',DS.Errors.create());
            this.validateTitle(this.get('book.title'));
            this.validateAuthor(this.get('book.author'));
            
            //if (this.get('book.title') === '' || this.get('book.title') === undefined){
            
            return this.get('errors.isEmpty');
            
        },
        
        validateTitle: function(value){
            this.get('errors').remove('title');
            if (Validator.isEmpty(this.get('book.title'))){
                this.get('errors').add('title', "Can't be empty");
            }

        },

        validateAuthor: function(value){
            this.get('errors').remove('author');
            if (Validator.isEmpty(this.get('book.author'))){
            this.get('errors').add('author', "Can't be empty");
            }
        }
        

}); 
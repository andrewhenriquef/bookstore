import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books',function(){
    this.route('new');
    this.route('book', {path: ':book_id'}); // books/3
    this.route('edit', {path: ':book_id/edit'}); // book/3/edit
  });

});

export default Router;

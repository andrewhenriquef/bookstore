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
  });

});

export default Router;

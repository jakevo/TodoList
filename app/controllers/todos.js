import Ember from 'ember';

export default Ember.Controller.extend({
    filter: '',
    filterTodos: function(){
        var searchText = this.get('filter');
        var rx = new RegExp(searchText, 'gi');
        var todos = this.model;

        return todos.filter(function(todo){
            return todo.get('title').match(rx) || todo.get('body').match(rx);
        });
    }.property('arrangedContent', 'filter'),
    sortedProperties: ['date:asc'],
    sortedTodos: Ember.computed.sort('model', 'sortedProperties')
});

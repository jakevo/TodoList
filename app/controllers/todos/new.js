import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        addTodo: function(){
            var date = this.get('date');
            var title = this.get('title');
            var body = this.get('body');
            var todoObject = this.store.createRecord('todo', {
                title: title,
                date: new Date(date),
                body: body
            });
         

            todoObject.save();

            this.setProperties({
                title: '',
                body: ''
            });
        }
    }
});

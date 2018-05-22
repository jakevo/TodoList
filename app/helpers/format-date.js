import Ember from 'ember';
import moment from 'moment';

export function formatDate(params){
    var ret =  moment(params[0]).add(1, 'day').format('MM-DD-YYYY');
    return ret;
}

export default Ember.Helper.helper(formatDate);
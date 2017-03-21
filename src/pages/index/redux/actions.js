import {asynctypes} from './action-type';
import {createAction} from 'redux-actions';
import {fCreateActionsAsync} from 'widget/common/util';

export default fCreateActionsAsync(asynctypes,createAction);



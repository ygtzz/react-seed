import {createSelector} from 'reselect';

const oCate = state => state.trend.oCate;

export const fCurrentCate = createSelector(
    [oCate],
    (oCate) => {
        const aCate = oCate.data.filter(item => item.active);
        return (aCate && aCate.length) ? aCate[0].name : '';
    }
);
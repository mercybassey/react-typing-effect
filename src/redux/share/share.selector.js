import { createSelector } from 'reselect';

const selectShare = state => state.share;

export const selectShareHidden = createSelector(
    [selectShare],
    share => share.hidden
);
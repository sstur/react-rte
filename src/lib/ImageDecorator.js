/* @flow */
import ImageSpan from '../ui/ImageSpan';
import {Entity} from 'draft-js';
import {ENTITY_TYPE} from 'draft-js-utils';

import type {ContentBlock} from 'draft-js';

type EntityRangeCallback = (start: number, end: number) => void;

function findImageEntities(contentBlock: ContentBlock, callback: EntityRangeCallback) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey != null &&
      Entity.get(entityKey).getType() === 'IMAGE'
    );
  }, callback);
}

export default {
  strategy: findImageEntities,
  component: ImageSpan,
};

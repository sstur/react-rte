/* @flow */
import {Entity} from 'draft-js';
import {ENTITY_TYPE} from 'draft-js-tools';
import type {ContentBlock} from 'draft-js';
import ImageSpan from '../ui/ImageSpan';

type EntityRangeCallback = (start: number, end: number) => void;

function findImageEntities(contentBlock: ContentBlock, callback: EntityRangeCallback) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey != null &&
      Entity.get(entityKey).getType() === ENTITY_TYPE.IMAGE
    );
  }, callback);
}

export default {
  strategy: findImageEntities,
  component: ImageSpan,
};

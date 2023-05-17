/* @flow */
import React from 'react';

import type {ContentBlock, ContentState} from 'draft-js';

type Props = {
  children: ReactNode,
  entityKey: string,
  contentState: ContentState,
};

type EntityRangeCallback = (start: number, end: number) => void;

function ColoredText(props: Props) {
  const {color} = props.contentState.getEntity(props.entityKey).getData();
  return (
    <span style={{color}}>{props.children}</span>
  );
}

function findColoredTextEntities(contentBlock: ContentBlock, callback: EntityRangeCallback, contentState: ?ContentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    if (entityKey != null) {
      let entity = contentState ? contentState.getEntity(entityKey) : null;
      return entity != null && entity.getType() === 'color';
    }
    return false;
  }, callback);
}

export default {
  strategy: findColoredTextEntities,
  component: ColoredText,
};

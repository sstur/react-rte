/* @flow */
import React from 'react';

import type {ContentBlock, ContentState} from 'draft-js';

type Props = {
  children: ReactNode,
  entityKey: string,
  contentState: ContentState,
};

type EntityRangeCallback = (start: number, end: number) => void;

function BackgroundColoredText(props: Props) {
  const {backgroundColor} = props.contentState.getEntity(props.entityKey).getData();
  return (
    <span style={{backgroundColor}}>{props.children}</span>
  );
}

function findBackgroundColoredTextEntities(contentBlock: ContentBlock, callback: EntityRangeCallback, contentState: ?ContentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    if (entityKey != null) {
      let entity = contentState ? contentState.getEntity(entityKey) : null;
      return entity != null && entity.getType() === 'backgroundColor';
    }
    return false;
  }, callback);
}

export default {
  strategy: findBackgroundColoredTextEntities,
  component: BackgroundColoredText,
};

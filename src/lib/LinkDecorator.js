/* @flow */
import React from 'react';
import {Entity} from 'draft-js';
import {ENTITY_TYPE} from './Constants';

import type {ContentBlock} from 'draft-js';

type Props = {
  children: React.Element,
  entityKey: string,
};

type EntityRangeCallback = (start: number, end: number) => void;

function Link(props_: Props): React.Element {
  const {href} = Entity.get(props_.entityKey).getData();
  return (
    <a href={href}>{props_.children}</a>
  );
}

function findLinkEntities(contentBlock: ContentBlock, callback: EntityRangeCallback) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey != null &&
      Entity.get(entityKey).getType() === ENTITY_TYPE.LINK
    );
  }, callback);
}

export default {
  strategy: findLinkEntities,
  component: Link,
};

/* @flow */
import React from 'react';
import {Entity} from 'draft-js';
import {ENTITY_TYPE} from 'draft-js-utils';

import type {ContentBlock} from 'draft-js';

// TODO: Use a more specific type here.
type ReactNode = any;

type Props = {
  children: ReactNode,
  entityKey: string,
};

type EntityRangeCallback = (start: number, end: number) => void;

function Link(props_: Props): React.Element {
  const {url} = Entity.get(props_.entityKey).getData();
  return (
    <a href={url}>{props_.children}</a>
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

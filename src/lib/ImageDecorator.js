/* @flow */
import React, {Component} from 'react';
import {Entity} from 'draft-js';
import {ENTITY_TYPE} from 'draft-js-utils';
import UserAgent from 'fbjs/lib/UserAgent';

import styles from './ImageDecorator.css';

import type {ContentBlock} from 'draft-js';

type Props = {
  entityKey: string,
};

type EntityRangeCallback = (start: number, end: number) => void;

class Image extends Component {
  props: Props;

  render() {
    let {entityKey} = this.props;
    let {src} = Entity.get(entityKey).getData();
    let {width, height} = {width: 445, height: 355};
    // let isFirefox = UserAgent.isBrowser('Firefox');
    let inlineStyle = {
      // display: isFirefox ? 'inline' : 'inline-block',
      width,
      height,
      backgroundImage: `url(${src})`,
      fontSize: height,
      letterSpacing: width,
    };
    return (
      <label className={styles.image} style={inlineStyle}>{'\u00A0'}</label>
    );
  }
}

function findImageEntities(contentBlock: ContentBlock, callback: EntityRangeCallback) {
  contentBlock.findEntityRanges((character) => {
    let entityKey = character.getEntity();
    return (
      entityKey != null &&
      Entity.get(entityKey).getType() === ENTITY_TYPE.IMAGE
    );
  }, callback);
}

export default {
  strategy: findImageEntities,
  component: Image,
};

/* @flow */
import type {BlockStyleFn, CustomBlockFn, CustomInlineFn} from 'draft-js-import-html';
import {EntityStyleFn} from 'draft-js-export-html';

export const getTextAlignClassName: BlockStyleFn = (contentBlock) => {
  switch (contentBlock.getData().get('textAlign')) {
    case 'ALIGN_LEFT':
      return 'text-align--left';

    case 'ALIGN_CENTER':
      return 'text-align--center';

    case 'ALIGN_RIGHT':
      return 'text-align--right';

    case 'ALIGN_JUSTIFY':
      return 'text-align--justify';

    default:
      return '';
  }
};

export const getTextAlignStyles: BlockStyleFn = (contentBlock) => {
  switch (contentBlock.getData().get('textAlign')) {
    case 'ALIGN_LEFT':
      return {
        style: {
          textAlign: 'left',
        },
      };

    case 'ALIGN_CENTER':
      return {
        style: {
          textAlign: 'center',
        },
      };

    case 'ALIGN_RIGHT':
      return {
        style: {
          textAlign: 'right',
        },
      };

    case 'ALIGN_JUSTIFY':
      return {
        style: {
          textAlign: 'justify',
        },
      };

    default:
      return {};
  }
};

export const getTextAlignBlockMetadata: CustomBlockFn = (element) => {
  switch (element.style.textAlign) {
    case 'right':
      return {
        data: {
          textAlign: 'ALIGN_RIGHT',
        },
      };

    case 'center':
      return {
        data: {
          textAlign: 'ALIGN_CENTER',
        },
      };

    case 'justify':
      return {
        data: {
          textAlign: 'ALIGN_JUSTIFY',
        },
      };

    case 'left':
      return {
        data: {
          textAlign: 'ALIGN_LEFT',
        },
      };

    default:
      return {};
  }
};

export const getColorStyles: EntityStyleFn = (contentBlock) => {
  if ((contentBlock.get('data') && contentBlock.get('data')['color'])
      || (contentBlock.get('data') && contentBlock.get('data')['backgroundColor'])) {
    return {
      style: {...contentBlock.get('data')},
    };
  }
  return null;
};

export const getColorEntity: CustomInlineFn = (element, inlineCreators) => {
  if (element && element.style && element.style.color) {
    return inlineCreators.Entity('color', {color: element.style.color});
  }
  if (element && element.style && element.style.backgroundColor) {
    return inlineCreators.Entity('backgroundColor', {backgroundColor: element.style.backgroundColor});
  }
  return element;
};

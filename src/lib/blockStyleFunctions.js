/* @flow */
import type {BlockStyleFn} from 'draft-js-import-html';

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

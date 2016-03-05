/* @flow */
import Immutable, {OrderedSet} from 'immutable';

import type {CharacterMetadata} from 'draft-js';
import type {List} from 'immutable';

type EntityKey = ?string;
type Style = OrderedSet<string>;
type StylePiece = [string, Style];
type EntityPiece = [EntityKey, Array<StylePiece>];
export type CharacterMetaList = List<CharacterMetadata>;

const EMPTY_SET = OrderedSet();

export default function getEntityRanges(
  text: string,
  charMetaList: CharacterMetaList
): Array<EntityPiece> {
  // TODO: use EMPTY_SET here
  let charEntity = null;
  let prevCharEntity = null;
  let pieces = [];
  let pieceStart = 0;
  for (let i = 0, len = text.length; i < len; i++) {
    prevCharEntity = charEntity;
    let meta = charMetaList.get(i);
    charEntity = meta ? meta.getEntity() : null;
    if (i > 0 && charEntity !== prevCharEntity) {
      pieces.push([
        prevCharEntity,
        getStylePieces(
          text.slice(pieceStart, i),
          charMetaList.slice(pieceStart, i)
        ),
      ]);
      pieceStart = i;
    }
  }
  pieces.push([
    charEntity,
    getStylePieces(
      text.slice(pieceStart),
      charMetaList.slice(pieceStart)
    ),
  ]);
  return pieces;
}

function getStylePieces(
  text: string,
  charMetaList: CharacterMetaList
): Array<StylePiece> {
  let charStyle = EMPTY_SET;
  let prevCharStyle = EMPTY_SET;
  let pieces = [];
  let pieceStart = 0;
  for (let i = 0, len = text.length; i < len; i++) {
    prevCharStyle = charStyle;
    let meta = charMetaList.get(i);
    charStyle = meta ? meta.getStyle() : EMPTY_SET;
    if (i > 0 && !Immutable.is(charStyle, prevCharStyle)) {
      pieces.push([text.slice(pieceStart, i), prevCharStyle]);
      pieceStart = i;
    }
  }
  pieces.push([text.slice(pieceStart), charStyle]);
  return pieces;
}

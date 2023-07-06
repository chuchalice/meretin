export interface IIcons {
  opacity?: string;
}

export interface ICard {
  pin: string;
  img: string;
  name: string;
  description: string;
  styleName: string;
  adev?: boolean;
}

export interface ICardState {
  cards: ICard[];
}

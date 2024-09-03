export interface ITextNode {
  type: 'text';
  text: string;
}

export interface IParagraphNode {
  type: 'paragraph' | 'heading';
  children: ITextNode[];

  level?: number;
}
export interface FlexConfig {
  display: 'flex';
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap: number;
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  numBoxes: number;
  boxColor: string;
  boxWidth: string;
  boxHeight: string;
}
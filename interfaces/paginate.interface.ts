export interface PaginationProps {
  maxNumOfPages: number;
  currentPageNum: number;
  increasePageNum: () => void;
  decreasePageNum: () => void;
}

import { MutableRefObject, useEffect, useRef } from 'react';
import { throttle } from 'lodash';

const isBrowser = typeof window !== `undefined`;

interface ScrollPosition {
  x: number;
  y: number;
}

const getScrollPosition = ({
  element,
  useWindow
}: {
  element?: MutableRefObject<HTMLElement | null>;
  useWindow?: boolean;
}): ScrollPosition => {
  if (!isBrowser) return { x: 0, y: 0 };

  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY };
  }

  const position =
    element?.current?.getBoundingClientRect() ??
    document.body.getBoundingClientRect();
  return { x: position.left, y: position.top };
};

export function useScrollPosition({
  deps,
  effect,
  element,
  throttleDuration,
  useWindow
}: {
  effect: (positions: {
    previous: ScrollPosition;
    current: ScrollPosition;
  }) => void;
  deps: any[];
  element?: MutableRefObject<HTMLElement | null>;
  /** should use the window object instead */
  useWindow?: boolean;
  /** in milli seconds */
  throttleDuration?: number;
}) {
  const position = useRef(getScrollPosition({ useWindow }));

  const callBack = () => {
    const current = getScrollPosition({ element, useWindow });
    effect({ previous: position.current, current });
    position.current = current;
  };

  useEffect(() => {
    const handleScroll =
      throttleDuration && throttleDuration > 0
        ? throttle(callBack, throttleDuration)
        : callBack;

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}

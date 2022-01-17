import React, { useState, useEffect, useCallback, useRef } from "react";
import throttle from "lodash/throttle";
/**
 *
 * @param {Object} scrollParent [DOM node of scrollable element]
 * @param {Array} _targetElements [Array of nodes to spy on]
 */
const spyScroll = (scrollParent, _targetElements) => {
  if (!scrollParent) return false;

  // create an Object with all children that has data-name attribute
  const targetElements =
    _targetElements ||
    [...scrollParent.children].reduce(
      (map, item) => (item.dataset.name ? { [item.dataset.name]: item, ...map } : map),
      {}
    );

  let bestMatch = {};

  for (const sectionName in targetElements) {
    if (Object.prototype.hasOwnProperty.call(targetElements, sectionName)) {
      const domElm = targetElements[sectionName];
      const delta = Math.abs(scrollParent.scrollTop - domElm.offsetTop); // check distance from top, takig scroll into account

      if (!bestMatch.sectionName) bestMatch = { sectionName, delta };

      // check which delet is closest to "0"
      if (delta < bestMatch.delta) {
        bestMatch = { sectionName, delta };
      }
    }
  }

  // update state with best-fit section
  return bestMatch.sectionName;
};

/**
 * Given a parent element ref, this render-props function returns
 * which of the parent's sections is currently scrolled into view
 * @param {Object} sectionsWrapperRef [Scrollable parent node React ref Object]
 */
const CurrentScrolledSection = ({ sectionsWrapperRef, children }) => {
  const [currentSection, setCurrentSection] = useState();
  const throttledOnScroll = throttle((e) => setCurrentSection(spyScroll(e.target)), 100);
  console.log(currentSection);
  // adding the scroll event listener inside this component, and NOT the parent component, to prever re-rendering of the parent component when
  // the scroll listener is fired and the state is updated, which causes noticable lag.
  useEffect(() => {
    const wrapperElm = sectionsWrapperRef.current;
    if (wrapperElm) {
      wrapperElm.addEventListener("scroll", (e) => setCurrentSection(spyScroll(e.target)));
      setCurrentSection(spyScroll(wrapperElm));
    }

    // unbind
    return () => wrapperElm.removeEventListener("scroll", throttledOnScroll);
  }, []);

  return children({ currentSection });
};

export default CurrentScrolledSection;

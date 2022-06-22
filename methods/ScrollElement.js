//Methods
import wait from './wait';

const scrollElement = async (element, scrollSize, time = 2000) => {
    let scrollPos = scrollSize;
    for(let i = 0; i < element.children.length; i++){
      await wait(time);
      element.scroll({
        top: scrollPos,
        behavior: 'smooth'
      });
      scrollPos += scrollSize;
  }
}

export default scrollElement
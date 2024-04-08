import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from 'rxjs'


export default class ScrollService {
  // Singleton class instance
  static scrollHandler = new ScrollService()

  static currentScreenBroadCaster = new Subject()
  static currentScreenFadeIn = new Subject()

  constructor(){
    // Adding scroll event to window
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
  }

  // Function for the call to action button

  // Scroll to hire me / contact me screen
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe")

    if(!contactMeScreen) {
      return
    } else {
      contactMeScreen.scrollIntoView( {behaviour: "smooth" })
    }
  }

  scrollToHome = () => {
    let homeScreen = document.getElementById("Home")

    if(!homeScreen) 
      return
      homeScreen.scrollIntoView({ behaviour: "smooth" })
  }

  // CHECK IF ELEMENT IS IN VIEW - this simply means if the document appears fully on the screen or not
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect()
    //this method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    // the view port  refers to the part of the document you're viewing which is currently visible in its window
    let elementTop = rec.top
    let elementBottom= rec.bottom

    // When the element is partially visible
    let partiallyVisible = elementTop < window.innerHeight && elementBottom >=0

    // When the element is completely visible
    let completelyVisible = elementTop >=0 && elementBottom <= window.innerHeight


    switch (type) {
      case "partial":
        return partiallyVisible

      case "complete":
        return completelyVisible
    
      default:
        return false
    }
  }

  // Screen on the viewport (currently displaying fully)

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) 
    return;

    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM =  document.getElementById(screen.screen_name)

      if (!screenFromDOM)
      continue

      let fullyVisible = this.isElementInView(screenFromDOM, "complete")
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial")

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
            ScrollService.currentScreenFadeIn.next({
              fadeInScreen: screen.screen_name
            })
            screen['alreadyRendered'] = true
            break
        }

        if (fullyVisible) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name
          })
          break
        }
      }
    }
  }
}
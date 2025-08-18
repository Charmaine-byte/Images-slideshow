🍎 Images-slideshow🍎
This is my personal project to test my JavaScript skills and understanding  I gained from coursera,Udemy and FNB bootcamp.
**Functionality:**
Displays a series of images from an array.
Uses `currentIndex` to keep track of the currently displayed image. It starts at **0**.
`nextSlide()` function:
Increments `currentIndex` and uses the modulo operator (`%`) to loop back to the beginning of the image array when the end is reached.
Updates the `src` attribute of the image element (`slider-image`) to display the next image.
`prevSlide()` function:
Decrements `currentIndex`, using the modulo operator to loop back to the end of the array when at the beginning.
Updates the `src` attribute of the image element (`slider-image`) to display the previous image.

**Key Variables:**

`images`: An array containing the paths to the images. It has a length of **6**.
`currentIndex`: An integer representing the index of the currently displayed image, initialized to **0**.

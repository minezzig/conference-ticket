# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

<img src="./design/desktop-design-form.jpg" alt="desktop" width="400"/>

## Table of contents
 
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

Live: [Conference ticket generator ](https://conference-ticket-gm.vercel.app)
Code: [github repo](https://github.com/minezzig/conference-ticket)

## My process

### Built with

- React
- TypeScript
- Tailwind CSS (v4.0)
- Mobile-first workflow

### What I learned
This was a really great project! It seemed simple at first, but there ended up being a few things I didn’t know how to do, making it a valuable learning experience. This is the first time I’ve ever worked with uploading an image, which allowed me to learn several new techniques, including onDrop, onDrag, and onDragLeave. I also had to use useRef to control a div that acted as the file input field.

Additionally, this project gave me the opportunity to continue working with TypeScript and refine my skills. I'm still struggling with how to type things like events and state setters, but I really feel like I’m getting the hang of it.

One last thing that proved to be a bit of a learning curve was setting up Tailwind CSS. Even though I’ve done this many times before, I struggled with this project—particularly when setting up custom fonts and colors. After wasting quite a bit of time, I realized that a new version of Tailwind CSS had been released just a couple of weeks ago. Now, with the release of version 4, Tailwind CSS is even easier to install, and there are much simpler ways to set custom classes!


```js
  const handleSaveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    setImageError(false)
    // check file size
    if (file) {
      const maxSize = 500 * 1024;

      if (file.size > maxSize) {
        setImageError(true);
        return;
      }
    }
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
}
```

### Continued development
I actually already implemented something that I wanted to add as an extra. Originally, I had conditional rendering to display the form or the ticket. Before calling my project finished, I decided to install React Router and create routes that would navigate to "/ticket" when the ticket information was registered. I felt like this was a much better way to deliver the final ticket.
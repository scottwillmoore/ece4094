# Journal

This journal contains my weekly entries to record and reflect on my progress throughout the project. These entries will be also be copied and uploaded into Moodle at the end of each week.

## Week 01

_02-08-2021_

I have contacted Arthur and he has agreed to supervise my project.

The goal is to build a collaborative web-based circuit schematic capture and simulation package, which would ideally be a replacement for [LTspice](https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html) which is frequently used by undergraduate students to learn, understand and simulate analog circuits. The software is closed-source, and in my opinion not very user-friendly. I believe an open-source, easily extendable and more user-friendly clone would be of significant practical use within the Monash community and other institutions.

I have also submitted my risk assessment for review on SARAH.

I have created a Git repository which can be found on [GitHub](https://github.com/scottwillmoore/ece4094).

Finally, the majority of the work for the requirement analysis has already been completed from the previous semester, therefore the focus will be primarily devoted to building a functional minimum viable product.

# Week 02

_08-08-2021_

This risk assessment is submitted, I will need to contact Arthur next week to make sure it is approved.

This week I have setup the application infrastructure. I have created a React-enabled TypeScript application that will be deployed and distributed as a static website. This will use [Vite](https://vitejs.dev/) to build the application. In addition, I have installed several code hygiene tools to help maintain the quality of the code throughout the project. [Prettier](https://prettier.io/) with [Import Sort](https://github.com/renke/import-sort) will be used to automatically format all code in the Project. [ESLint](https://eslint.org/) and [StyleLint](https://stylelint.io/) will statically analyse the JavaScript, TypeScript and CSS files and identify problematic patterns.

In addition, the basic app structure has been very quickly laid out. For next week, I will begin developing features for the minimum viable product.

# Week 03

_15-08-2021_

This week I was a little slowed down by some additional assessment that had carried over from last semester.

Despite this I was able to implement a canvas-based renderer which responds to basic application lifecycle events such as changes to the window size and/or DPI. In addition, I did create a very quick prototype of which allows squares to be dragged and dropped across the canvas. Next week I hope to have a bit more free time and can flesh out the drag and drop implementation with more features such as panning and zooming of the viewport.

Also, still need to contact Arthur to get the risk assessment approved.

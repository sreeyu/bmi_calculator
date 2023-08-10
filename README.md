# bmi_calculator
This project is a BMI (Body Mass Index) calculator that allows users to input their height and weight using range sliders, and calculates their BMI based on these values. It demonstrates the concept of using state management and memoization to efficiently update and display BMI calculations in real-time.

## Features
- Input your height and weight using range sliders.
- Calculates BMI based on the input values and displays it in real-time.

## Technologies Used
- React
- CSS Modules

## Live Demo
You can access the live demo of the BMI Calculator here: [Live Demo](https://sreeyu.github.io/bmi_calculator/)

## Usage
1. Adjust the height and weight range sliders to input your values.
2. The BMI will be calculated automatically based on the provided input.
3. Your calculated BMI will be displayed below the sliders.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

# Project Notes

## useMemo
in React, the `useMemo` hook is used to optimize performance by memoizing(caching) the result of a computation. It's particularly useful when dealing with expensive calculations or complex operations that don't need to be recalculated every time a component re-renders.

The basic idea is that `useMemo` helps to prevent unnecessary re-computations of values that haven't changed. It takes two arguments: the function to compute, and an array of dependencies. If any of the dependencies in the array change between renders, the computation function is executed, and its result is returned. If none of the dependencies have changed, `useMemo` returns the cached result from the previous render.

For example, in this project:
```jsx
useMemo(() => {
  const heightInMeters = height / 100;
  setBMI((weight / (heightInMeters * heightInMeters)).toFixed(1));
}, [height, weight])
```
Here, the calculation of BMI is potentially an expensive operation. By wrapping it in `useMemo`, you ensure that the calculation is only done when the `height` or `weight` values change. If neither of these values change, the previously computed BMI is returned from the memoized cache, avoiding unnecessary re-calculation and improving performance.

In summary, `useMemo` is a tool to optimize performance by selectively re-computing values only when their dependencies change, which can be very helpful for avoiding unnecessary recalculations in React applications. 
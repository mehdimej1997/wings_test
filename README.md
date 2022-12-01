## Available Scripts

# 1: what is the difference between Functional components and Class components

    functional component:
        - plain javascript
        - good readability
        - stateless
        - presence of hooks

    class component
        - class extend React.Component
        - bad readability

# 2: rules of hooks

    -hooks can only be called inside FC (functional component)
    -custom hooks must start with "use"
    -hooks can only be called on top level function

# 3: how useEffect work ?

    - useEffect it's a hooks that watch the lifecycle of the component and it takes as a first argument a callback function,
     and the seconde argument is an array of dependencies that keep watching them every change happing to a dependency it will re-execute the callback

# 4: why state and not common variable ?

    - a variable can not revaluate the html, thats why we should use state for revaluation and rerendering

# 5: what is props ?

    -a props it's a object that contain the properties of a component

# 6: what is props ?

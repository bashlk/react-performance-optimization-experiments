# React performance optimization experiments
Set of simple experiments to establish the impact of react performance optimizations (useCallback, useMemo, memo) under different scenarios.

## Usage
This project is designed for self-trial, to be checked out and profiled on your own machine while adjusting the code. Just uncomment the scenario you want to run in src/App.jsx, `npm install` and `npm start`

## Conclusions
React renders the entire component tree by default. Hence any efforts made to enforce equality across renders (useCallback, useMemo) are detrimental by default.
[![usecallback with default components](src/scenarios/UseCallbackDirect/result-100.jpg?raw=true "useCallback with default components")][UseCallbackDirect]
[![useMemo with default components](src/scenarios/UseMemoIndirect/result-100.jpg?raw=true "useMemo with default components")][UseMemoIndirect]

However, if the component is made pure (either by having a class component extend React.PureComponent or wrapping a functional component with React.memo), equality must be enforced across re-renders otherwise its benefits are lost. This is where useCallback and useMemo are useful.

useCallback and useMemo still needs to exert extra effort to memoize their content. So props (function, object, array definitions) should be made completely static whenever possible (i.e. if it doesn’t depend on other props) by placing them outside the component body.

[![usecallback with pure components](src/scenarios/UseCallbackMemoNested/result-100.jpg?raw=true "useCallback with pure components")][UseCallbackMemoNested]

useCallback and useMemo are most beneficial on the higher levels of the component tree so as to prevent the subtree from re-rendering. Using them to preserve equality to native elements (&lt;div />, &lt;span /> etc..) has detrimental effects.

[![useMemo with default components](src/scenarios/UseMemoDirect/result-text-100.jpg?raw=true "useMemo with default components")][UseMemoDirect]

React.memo does shallow compare across prop updates by default. Hence the number of props doesn’t slow its comparison by much.

[![React.memo with many props](src/scenarios/MemoLargeIndirect/result-100.jpg?raw=true "React.memo with many props")][MemoLargeIndirect]

[UseCallbackDirect]: src/scenarios/UseCallbackDirect/index.js
[UseMemoIndirect]: src/scenarios/UseMemoIndirect/index.js
[UseCallbackMemoNested]: src/scenarios/UseCallbackMemoNested/index.js
[UseMemoDirect]: src/scenarios/UseMemoDirect/index.js
[MemoLargeIndirect]: src/scenarios/MemoLargeIndirect/index.js

import { useState } from "react";

export default function withLoadingSpinner(Component) {
  return function WrappedComponent(props) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div className="relative flex justify-center items-center">
        
        <Component 
          {...props}
          onLoadCallback={() => setIsLoaded(true)} 
        />

        {!isLoaded && (
          <div className="absolute w-7 h-7 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        )}
      </div>
    );
  };
}

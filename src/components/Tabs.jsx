import React from "react";
import { cn } from "../utils";

const Tabs = ({ defaultValue, className, children, ...props }) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className={cn("w-full", className)} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, setValue })
      )}
    </div>
  );
};

const TabsList = React.forwardRef(({ className, children, value, setValue, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  >
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { value, setValue })
    )}
  </div>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(({ className, children, value: triggerValue, value: currentValue, setValue, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    data-state={currentValue === triggerValue ? "active" : "inactive"}
    onClick={() => setValue(triggerValue)}
    {...props}
  >
    {children}
  </button>
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, children, value: contentValue, value: currentValue, ...props }, ref) => {
  if (currentValue !== contentValue) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
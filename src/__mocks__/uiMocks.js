// this file is used to mock the ui components
export const Alert = ({ children, className }) => (
  <div data-testid="mock-alert" className={className}>
    {children}
  </div>
);

export const AlertDescription = ({ children }) => (
  <div data-testid="mock-alert-description">{children}</div>
);

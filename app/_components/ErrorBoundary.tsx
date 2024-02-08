"use client";

import React from "react";
import { ReactNode, Component, ErrorInfo } from "react";
interface IErrorProps {
  children?: ReactNode;
}
interface IErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props);
  }

  state: IErrorState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    console.log("Uncaught", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1 className="f1">Ooops. Something weird happened.</h1>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

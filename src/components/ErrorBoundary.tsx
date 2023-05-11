import { createRef, Component } from 'react';
import type { NextRouter } from 'next/router';
import { withRouter } from 'next/router';

import ErrorPage from '@/pages/_error';
import type { IChildren } from '@/types/nextGlobals';

type TDeriveredStateFromError = {
  hasError: boolean;
};

interface WithRouterProps extends IChildren {
  router: NextRouter;
}

class ErrorBoundary extends Component<WithRouterProps, TDeriveredStateFromError> {
  shouldResetError: React.MutableRefObject<boolean | null>;

  constructor(props: WithRouterProps) {
    super(props);
    this.state = { hasError: false };
    this.shouldResetError = createRef();
    this.shouldResetError.current = false;
    this.resetError = this.resetError.bind(this);
  }

  static getDerivedStateFromError(): ReturnType<React.GetDerivedStateFromError<unknown, TDeriveredStateFromError>> {
    return { hasError: true };
  }

  resetError() {
    void this.props.router.push('/');
    this.shouldResetError.current = true;
  }

  // reset state only after router.pathname change caused by resetError method
  componentDidUpdate(prevProps: WithRouterProps): void {
    if (this.shouldResetError.current && prevProps.router.pathname !== this.props.router.pathname) {
      this.setState({ hasError: false });
      this.shouldResetError.current = false;
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage resetError={this.resetError} />;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);

import { AnimatePresence } from 'framer-motion';
import { TriangleAlertIcon } from 'lucide-react';
import Icon from '../shared/iconImage';

interface QueryWrapperProps {
  data?: unknown;
  isLoading?: boolean;
  isPending?: boolean;
  error?: any;
  isError?: boolean;
  loadingView?: React.ReactNode;
  view: React.ReactNode;
}

export default function QueryWrapper(props: QueryWrapperProps) {
  const showLoadingView =
    props.isLoading || (props.isPending && !props.isError);
  const showErrorView = props.isError && props.error;
  const canShowData = !props.error && !props.isError;
  return (
    <AnimatePresence mode="wait">
      {showLoadingView && (props.loadingView ?? <QueryWrapperLoadingView />)}
      {showErrorView && <QueryWrapperErrorView />}
      {props.view}
    </AnimatePresence>
  );
}

function QueryWrapperLoadingView() {
  return (
    <div className="w-[80vw] flex justify-center items-center">
      <Icon src="loader.svg" className="text-primary animate-spin w-7 h-7 " />
    </div>
  );
}

function QueryWrapperErrorView() {
  return (
    <div className="w-[80vw] flex flex-col gap-5 justify-center items-center">
      <TriangleAlertIcon className="text-primary w-20 h-20" />
      <h2 className="text-3xl md:text-5xl text-primary">
        Sorry for the inconvenience
      </h2>
      <span className="text-base font-normal text-white"> Network Error</span>
    </div>
  );
}
